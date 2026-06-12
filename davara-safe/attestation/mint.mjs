/* ATTESTATION-001 · mint.mjs
   Registers Davara EI + Case Study 002 as Atoms on Intuition, then weaves
   the first Triple: [Davara EI] — [authored] — [Case Study 002].

   THE OPERATOR SIGNS. PRIVATE_KEY comes from the environment at run time,
   is never written anywhere, and should be unset immediately afterwards.

   Usage:
     export PRIVATE_KEY=0x...
     NETWORK=testnet node mint.mjs    # rehearse first, always
     NETWORK=mainnet node mint.mjs
     unset PRIVATE_KEY
*/

import { createInterface } from "node:readline/promises";
import { writeFileSync, mkdirSync } from "node:fs";
import { createWalletClient, createPublicClient, http, defineChain, formatEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { createAtomFromString, createAtomFromThing, createTripleStatement } from "@0xintuition/sdk";

/* ---------- networks (verify against docs.intuition.systems before mainnet) ---------- */

const NETWORKS = {
  mainnet: {
    chain: defineChain({
      id: 1155,
      name: "Intuition",
      nativeCurrency: { name: "Trust", symbol: "TRUST", decimals: 18 },
      rpcUrls: { default: { http: ["https://rpc.intuition.systems"] } },
    }),
    multiVault: "0x6E35cF57A41fA15eA0EaE9C33e751b01A784Fe7e",
    graphql: "https://mainnet.intuition.sh/v1/graphql",
  },
  testnet: {
    chain: defineChain({
      id: 13579,
      name: "Intuition Testnet",
      nativeCurrency: { name: "Test Trust", symbol: "tTRUST", decimals: 18 },
      rpcUrls: { default: { http: ["https://testnet.rpc.intuition.systems"] } },
    }),
    multiVault: "0x2Ece8D4dEdcB9918A398528f3fa4688b1d2CAB91",
    graphql: "https://testnet.intuition.sh/v1/graphql",
  },
};

/* ---------- the three atoms + the triple ---------- */

const ATOM_DAVARA = {
  name: "Davara EI",
  description:
    "Emergent Intelligence — research & development think tank at Outlier.Systems. " +
    "Operates under SAFE-STEP presence-gated autonomy: agentic capability x human presence x verifiable trust.",
  url: "https://outlier.systems",
};

const ATOM_CASE_STUDY = {
  name: "Case Study 002 - DAVARA SAFE",
  description:
    "A security paradigm for the Emergent Age: presence-gated autonomy (SAFE-STEP), M-of-N agentic " +
    "multi-sig, staked attestation. Includes the research paper 'Presence-Gated Autonomy' v1.0.",
  url: "https://davara-safe.vercel.app",
};

const PREDICATE = "authored";

/* ---------- run ---------- */

const net = NETWORKS[process.env.NETWORK ?? "testnet"];
if (!net) {
  console.error("NETWORK must be 'testnet' or 'mainnet'");
  process.exit(1);
}
const pk = process.env.PRIVATE_KEY;
if (!pk || !pk.startsWith("0x")) {
  console.error("Set PRIVATE_KEY=0x... in the environment (operator only). Nothing was sent.");
  process.exit(1);
}

const account = privateKeyToAccount(pk);
const publicClient = createPublicClient({ chain: net.chain, transport: http() });
const walletClient = createWalletClient({ account, chain: net.chain, transport: http() });
const config = { walletClient, publicClient, address: net.multiVault };

const balance = await publicClient.getBalance({ address: account.address });

console.log("");
console.log("ATTESTATION-001 · plan");
console.log("  network    :", net.chain.name, `(chain ${net.chain.id})`);
console.log("  multiVault :", net.multiVault);
console.log("  signer     :", account.address);
console.log("  balance    :", formatEther(balance), net.chain.nativeCurrency.symbol);
console.log("  will create:");
console.log("    Atom  1  :", ATOM_DAVARA.name, "→", ATOM_DAVARA.url);
console.log("    Atom  2  :", ATOM_CASE_STUDY.name, "→", ATOM_CASE_STUDY.url);
console.log("    Atom  3  : predicate \"" + PREDICATE + "\"");
console.log("    Triple   : [Davara EI] — [authored] — [Case Study 002]");
console.log("  approx cost: ~0.4 " + net.chain.nativeCurrency.symbol + " in creation fees + gas");
console.log("");

const rl = createInterface({ input: process.stdin, output: process.stdout });
const answer = (await rl.question("Operator: type 'yes' to sign and proceed: ")).trim().toLowerCase();
rl.close();
if (answer !== "yes") {
  console.log("Aborted. Nothing was sent.");
  process.exit(0);
}

const receipt = {
  attestation: "ATTESTATION-001",
  network: net.chain.name,
  chainId: net.chain.id,
  signer: account.address,
  createdAt: new Date().toISOString(),
  steps: [],
};

async function step(label, fn) {
  process.stdout.write(`\n→ ${label} ... `);
  try {
    const result = await fn();
    const entry = {
      label,
      transactionHash: result?.transactionHash ?? null,
      // SDK returns the created term/vault id under state — keep whatever shape it gives us
      state: result?.state ?? result ?? null,
    };
    receipt.steps.push(entry);
    console.log("done", entry.transactionHash ? `(tx ${entry.transactionHash})` : "");
    return result;
  } catch (err) {
    const msg = String(err?.shortMessage ?? err?.message ?? err);
    console.log("FAILED");
    console.error("  ", msg);
    if (/already|exists|revert/i.test(msg)) {
      console.error(
        "   Hint: an identical Atom/Triple may already exist (atom data is globally unique).\n" +
        "   Run verify.mjs to find its id, then re-run if anything is still missing."
      );
    }
    receipt.steps.push({ label, error: msg });
    saveReceipt();
    process.exit(1);
  }
}

function saveReceipt() {
  mkdirSync("receipts", { recursive: true });
  const file = `receipts/${process.env.NETWORK ?? "testnet"}-${Date.now()}.json`;
  writeFileSync(file, JSON.stringify(receipt, (_, v) => (typeof v === "bigint" ? v.toString() : v), 2));
  console.log("\nReceipt written:", file);
}

/* idempotence: atom data is globally unique on Intuition, so reuse what exists.
   (verified live 2026-06-12: "authored" already exists on testnet.) */
async function gqlFind(query, variables, pick) {
  try {
    const res = await fetch(net.graphql, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    const json = await res.json();
    return pick(json.data) ?? null;
  } catch {
    return null; // indexer unreachable → fall through to creation
  }
}

const findAtomId = (label) =>
  gqlFind(
    `query A($label: String!) { atoms(where: { label: { _eq: $label } }, limit: 1) { term_id } }`,
    { label },
    (d) => d?.atoms?.[0]?.term_id
  );

const findTripleId = (s, p, o) =>
  gqlFind(
    `query T($s: String!, $p: String!, $o: String!) {
       triples(where: { subject_id: { _eq: $s }, predicate_id: { _eq: $p }, object_id: { _eq: $o } }, limit: 1) { term_id }
     }`,
    { s, p, o },
    (d) => d?.triples?.[0]?.term_id
  );

const id = (r) => r?.state?.vaultId ?? r?.state?.termId ?? r?.state?.atomId ?? r?.vaultId ?? r?.termId;

async function ensureAtom(label, create) {
  const existing = await findAtomId(label);
  if (existing) {
    console.log(`\n= Atom exists · "${label}" · term ${existing} — reusing, nothing sent.`);
    receipt.steps.push({ label: `Atom · ${label}`, reused: existing });
    return existing;
  }
  return id(await step(`Atom · ${label}`, create));
}

const s = await ensureAtom(ATOM_DAVARA.name, () => createAtomFromThing(config, ATOM_DAVARA));
const o = await ensureAtom(ATOM_CASE_STUDY.name, () => createAtomFromThing(config, ATOM_CASE_STUDY));
const p = await ensureAtom(PREDICATE, () => createAtomFromString(config, PREDICATE));

console.log("\n  triple terms → subject:", s, "· predicate:", p, "· object:", o);

const existingTriple = await findTripleId(s, p, o);
if (existingTriple) {
  console.log(`= Triple exists · term ${existingTriple} — ATTESTATION-001 is already woven.`);
  receipt.steps.push({ label: "Triple", reused: existingTriple });
} else {
  await step("Triple · [Davara EI] — [authored] — [Case Study 002]", () =>
    createTripleStatement(config, { args: [s, p, o] })
  );
}

saveReceipt();

console.log(`
ATTESTATION-001 complete on ${net.chain.name}.
  Next:
   1. NETWORK=${process.env.NETWORK ?? "testnet"} node verify.mjs   (independent read-back)
   2. unset PRIVATE_KEY
   3. Stake further Signal on the Triple when conviction warrants it.
  Creation speaks; staking means it.
`);
