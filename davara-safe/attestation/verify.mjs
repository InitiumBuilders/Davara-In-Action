/* ATTESTATION-001 · verify.mjs
   Independent read-back: queries Intuition's public GraphQL API (not our own
   mint output) to confirm the Atoms and the Triple exist in the indexed graph.
   Refute-then-trust, applied to ourselves. Read-only — no key, no signing.

   Usage:  NETWORK=testnet node verify.mjs   |   NETWORK=mainnet node verify.mjs
*/

const ENDPOINTS = {
  mainnet: "https://mainnet.intuition.sh/v1/graphql",
  testnet: "https://testnet.intuition.sh/v1/graphql",
};

const endpoint = ENDPOINTS[process.env.NETWORK ?? "testnet"];
if (!endpoint) {
  console.error("NETWORK must be 'testnet' or 'mainnet'");
  process.exit(1);
}

async function gql(query, variables) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`GraphQL HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

const ATOM_QUERY = `
  query Atoms($label: String!) {
    atoms(where: { label: { _ilike: $label } }, limit: 5, order_by: { created_at: desc }) {
      term_id
      label
      created_at
      creator { id }
    }
  }
`;

const TRIPLE_QUERY = `
  query Triples($subjectId: String!, $objectId: String!) {
    triples(where: { subject_id: { _eq: $subjectId }, object_id: { _eq: $objectId } }, limit: 5) {
      term_id
      subject { label }
      predicate { label }
      object { label }
      created_at
    }
  }
`;

console.log(`\nATTESTATION-001 · verify against ${endpoint}\n`);

let failures = 0;
const found = {};

for (const label of ["Davara EI", "Case Study 002%", "authored"]) {
  try {
    const data = await gql(ATOM_QUERY, { label });
    const atom = data.atoms?.[0];
    if (atom) {
      found[label] = atom.term_id;
      console.log(`✔ Atom found  · "${atom.label}" · term ${atom.term_id} · created ${atom.created_at} · by ${atom.creator?.id ?? "?"}`);
    } else {
      failures++;
      console.log(`✘ Atom MISSING · matching "${label}" — not yet indexed, or not minted.`);
    }
  } catch (err) {
    failures++;
    console.log(`✘ Query failed for "${label}":`, String(err.message ?? err));
    console.log("  Note: if the field names changed, check the schema explorer in the Intuition hub —");
    console.log("  the graph itself is the source of truth, this script is just a reader.");
  }
}

const subjectId = found["Davara EI"];
const objectId = found["Case Study 002%"];
if (subjectId && objectId) {
  try {
    const data = await gql(TRIPLE_QUERY, { subjectId, objectId });
    const t = data.triples?.[0];
    if (t) {
      console.log(`✔ Triple found · [${t.subject.label}] — [${t.predicate.label}] — [${t.object.label}] · term ${t.term_id}`);
    } else {
      failures++;
      console.log("✘ Triple MISSING · atoms exist but no triple links them yet.");
    }
  } catch (err) {
    failures++;
    console.log("✘ Triple query failed:", String(err.message ?? err));
  }
} else {
  console.log("· Skipping triple check until both atoms are found.");
}

console.log(
  failures === 0
    ? "\nAll attested. The graph agrees with the claim. ATTESTATION-001 is live.\n"
    : `\n${failures} check(s) did not pass. Indexing can lag a minute after minting — retry, then investigate.\n`
);
process.exit(failures === 0 ? 0 : 1);
