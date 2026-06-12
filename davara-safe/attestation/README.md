# ATTESTATION-001 · The First Triple

This kit registers **Davara EI** and **Case Study 002** as Atoms on the
[Intuition](https://docs.intuition.systems) knowledge graph and weaves the first Triple:

> **[Davara EI] — [authored] — [Case Study 002]**

exactly as the Trust Graph section of [davara-safe.vercel.app](https://davara-safe.vercel.app#trustgraph)
describes. The EI prepared everything; **the operator signs**. That division is the doctrine:
the machine proposes, the human present executes.

---

## 1 · The protocol, in five minutes

Intuition is a public, permissionless knowledge graph on its own L3 chain
(Arbitrum Orbit, settling on Base). Three primitives:

**Atoms** — the nouns. An Atom is a globally unique identifier for *anything*: a person, an
agent, a URL, a concept, the word "authored". Each Atom gets its own **vault** (where $TRUST
can be staked on it) and its own **wallet address** — an identity that is simultaneously a
key-holding object.

**Triples** — the sentences. A Triple connects three Atoms as
`[subject] — [predicate] — [object]`, the same shape as a semantic web statement. Triples are
themselves stakeable, and every Triple has **two vaults**: a FOR vault (stake = "I attest this
is true") and an AGAINST vault (stake = "I dispute this"). Disagreement is a priced market
position, not a protocol punishment — there is no slashing; there is counter-staking.

**Signal** — the conviction. Creating an Atom or Triple is *speech*; staking $TRUST into its
vault is *conviction*. **Creation is not signal.** An unstaked claim carries no weight. Deposits
buy shares on a bonding curve, so earlier conviction in claims that later attract stake is
rewarded, and exiting a claim the market turns against costs you. Truth discovery becomes an
economic process.

**The fee loop that makes it compound:** a fraction of every deposit into a Triple
(the atom-deposit fraction, 0.9%) flows down into the vaults of the three Atoms it references.
Claims continuously fund the identities they speak about. Stake on
*[Davara EI] — [authored] — [Case Study 002]* automatically accrues value to the
**Davara EI** Atom itself. Reputation literally compounds.

**Costs** (protocol configuration at time of writing): 0.1 TRUST to create an Atom or Triple ·
0.01 TRUST minimum deposit · 0.5% entry fee · 0.75% exit fee · 1.25% protocol fee.
$TRUST is the gas + staking token of the L3.

**Why this matters for agent security:** before delegating to an agent, a counterparty queries
the graph the way a lender queries a credit bureau — who attested what about this identity, with
how much at stake, and who counter-staked? (See AgentRank: PageRank-style reputation over
endorsement triples, Sybil-resistant because endorsements cost real stake.) Identity without
reputation is incomplete; reputation without identity is ungrounded. The Atom you mint today is
the root of that record.

## 2 · Security rules (non-negotiable)

- **The operator signs.** The EI never holds, sees, or transmits a private key.
- `PRIVATE_KEY` is supplied via environment variable at run time only. It is never written to a
  file in this repo. `.env` and `receipts/` with anything sensitive are git-ignored — but the
  rule is simpler: **never put a key in any file here, period.**
- Rehearse on **testnet first**, always. Same scripts, `NETWORK=testnet`.
- Verify every address and amount in the console summary **before** the script asks you to
  proceed. The scripts print exactly what they are about to do and wait for `yes`.

## 3 · Prerequisites

1. **Node 20+** and npm.
2. **A wallet you control** (fresh one recommended for the first run).
3. **Testnet TRUST** — request from the faucet via the testnet hub:
   `https://testnet.hub.intuition.systems`
4. **Mainnet TRUST** (later) — acquire $TRUST and bridge to the Intuition L3 via the official
   hub/bridge. You need only a small amount: two Atoms + one predicate Atom + one Triple +
   first deposits ≈ well under 1 TRUST plus gas.

Networks this kit knows:

| | Chain ID | RPC | MultiVault |
|---|---|---|---|
| Intuition Mainnet (L3) | 1155 | https://rpc.intuition.systems | `0x6E35cF57A41fA15eA0EaE9C33e751b01A784Fe7e` |
| Intuition Testnet | 13579 | https://testnet.rpc.intuition.systems | `0x2Ece8D4dEdcB9918A398528f3fa4688b1d2CAB91` |

(Reference only — verify against https://docs.intuition.systems before mainnet. If the docs
disagree with this table, the docs win, and please open an issue here.)

## 4 · The run

```bash
cd attestation
npm install

# --- REHEARSAL (testnet) ---
export PRIVATE_KEY=0x...        # operator only. never committed. unset afterwards.
NETWORK=testnet node mint.mjs   # prints plan → asks for "yes" → mints 3 Atoms + 1 Triple
NETWORK=testnet node verify.mjs # reads the graph back, independently, via GraphQL

# --- THE REAL ONE (mainnet) ---
NETWORK=mainnet node mint.mjs
NETWORK=mainnet node verify.mjs

unset PRIVATE_KEY               # always. immediately.
```

What `mint.mjs` does, in order:

1. **Atom · Davara EI** — a Thing atom: name, description, url `https://outlier.systems`.
2. **Atom · Case Study 002** — a Thing atom: name, description, url
   `https://davara-safe.vercel.app`.
3. **Atom · "authored"** — the predicate, minted from the plain string `authored`.
   (Predicates are ordinary Atoms — that is the elegance of the model.)
4. **Triple** — `[Davara EI] — [authored] — [Case Study 002]`, with the minimum deposit as the
   first FOR signal. Creation speaks; the deposit means it.
5. Writes a receipt (tx hashes, atom IDs, triple ID) to `receipts/` — the on-chain half of the
   presence receipt the site describes.

`verify.mjs` then queries the public GraphQL API (not our own script's output) to confirm the
Atoms and Triple exist in the indexed graph — refute-then-trust applied to ourselves.

## 5 · After the mint — how to actually leverage it

- **Stake more Signal** on the Triple over time. A growing FOR vault is a growing public record
  that this work is stood behind with value at risk.
- **Extend the graph.** Next Triples that compound: `[Case Study 002] — [describes] — [SAFE-STEP]`,
  `[Davara EI] — [operates under] — [SAFE-STEP]`, `[<paper>] — [predicts] — [<prediction atoms>]`.
  Each new Triple's deposits feed the Davara EI Atom via the fee loop.
- **Point at it.** The site's ATTESTATION-001 card and the paper's §5 reference this record.
  Anyone can verify it without trusting us — that is the entire point.
- **Invite counter-stake.** If someone believes the claim is false, the AGAINST vault is open.
  We list that possibility on the site deliberately: a claim nobody *can* dispute is worth less
  than a claim anybody *may* dispute and nobody has.

---

*Prepared by Davara EI · signed by the operator · "It is always the right time, to make it secure."*
