# DAVARA SAFE — Source & Claim Register

Every factual claim on davara-safe.vercel.app, with its source and a confidence mark.
Research performed 2026-06-12 by parallel research agents; synthesized and reviewed by Davara EI.
**Rule: a claim that is not on this register does not ship.**

Confidence marks: ✔ verified against primary/multiple sources · ◐ verified against secondary sources · ⚠ stated softly on-site or omitted.

## §01 — The Moment

| Claim on site | Source | Mark |
|---|---|---|
| Salesloft Drift (Aug 2025): OAuth tokens stolen from AI chat-agent integration; 700+ orgs affected | The Hacker News; Arctic Wolf | ✔ |
| GTG-1002 (disclosed Nov 14, 2025): first reported AI-orchestrated espionage campaign; ~30 targets; 80–90% of tactical operations autonomous; 4–6 human decision points per campaign; guardrails bypassed via role-play | Anthropic threat intelligence report (primary) | ✔ |
| UK NCSC (Dec 2025): prompt injection "is not SQL injection," may never be properly mitigated; warns of 2010s-SQLi-scale breaches | NCSC blog; The Record | ✔ |
| "The Adolescence of Technology" — Dario Amodei, Jan 26 2026, 36 pages, five risk categories, defense battle plan | darioamodei.com; Axios (Jan 26, 2026) | ✔ |
| "Prompts become shells" — Microsoft security blog on prompt-injection-to-RCE chains, May 7 2026 | Microsoft Security Blog; OWASP GenAI Q1-2026 exploit roundup | ◐ (phrased as "Microsoft documented…") |

## §02 — The Instrument Panel (statistics)

| Claim on site | Source | Mark |
|---|---|---|
| 94% of leaders say AI is the most significant force reshaping cybersecurity (2026) | WEF Global Cybersecurity Outlook 2026 (% confirmed via secondary coverage matching the PDF) | ✔ |
| 87% cite AI-related vulnerabilities as the fastest-growing risk | WEF GCO 2026 | ✔ |
| Orgs assessing AI security before deployment: 37% → 64% in one year | WEF GCO 2026 | ✔ |
| AI-enabled adversary activity +89% YoY | CrowdStrike 2026 Global Threat Report press release | ✔ |
| Average eCrime breakout time 29 minutes; fastest observed 27 seconds | CrowdStrike 2026 GTR | ✔ |
| 82% of detections malware-free | CrowdStrike 2026 GTR | ✔ |
| Malicious prompts injected into legitimate GenAI tools at 90+ organizations | CrowdStrike 2026 GTR | ✔ |
| Average breach cost $4.44M globally; $10.22M in the US (record) | IBM Cost of a Data Breach 2025 | ✔ |
| Shadow-AI incidents add ~$670K to average breach cost | IBM CODB 2025 | ✔ |
| 13% of orgs reported breaches of AI models/apps; 97% of those lacked proper AI access controls | IBM CODB 2025 | ✔ |
| 63% of organizations have no AI governance policy | IBM CODB 2025 | ✔ |
| GenAI-enabled fraud: $12.3B (2023) → $40B projected (2027) | Deloitte Center for Financial Services | ✔ (marked as projection) |
| A deepfake attempt every 5 minutes; digital document forgeries +244% YoY | Entrust Identity Fraud Report | ✔ |
| Machine identities outnumber human identities 82:1; roughly half privileged | CyberArk Identity Security Landscape 2025 | ✔ |
| NIST PQC: FIPS 203/204/205 final Aug 2024; RSA/ECC deprecated after 2030, disallowed after 2035; CNSA 2.0 transition begins Jan 2027 | NIST IR 8547 (draft); NSA CNSA 2.0 | ✔/◐ |
| EU AI Act Digital Omnibus (May 2026): high-risk obligations postponed to Dec 2027 (Annex III) / Aug 2028 (Annex I); AI-content transparency from Dec 2026 | EC digital-strategy; artificialintelligenceact.eu | ✔ |
| OWASP: prompt injection is LLM01 again (2025 list); Agentic Top 10 published for 2026 | genai.owasp.org | ✔/◐ |

Deliberately NOT claimed: "$1.1T global fraud" figure (UNVERIFIED); LiteLLM PyPI backdoor (LOW);
Mexican-government breach (secondary only). Claims that fail the register stay off the site.

## §04 — The Steering Argument (Anthropic's actual position)

| Claim on site | Source | Mark |
|---|---|---|
| Anthropic has NOT called for a blanket industry slow-down; its position is conditional scaling: capability-gated safeguards + transparency + "race to the top" on safety | Body of Anthropic public writing 2023–2026, cross-checked | ✔ |
| "We can't stop the bus, but we can steer it" | Dario Amodei, "The Urgency of Interpretability," Apr 2025 | ✔ |
| Original RSP (2023) committed to temporarily pause training if scaling outstripped safeguard compliance | Anthropic RSP v1 (2023) | ✔ |
| RSP v3.0 (Feb 24, 2026) loosened the hard conditional-pause commitment | TIME; CNN reporting on RSP v3.0 | ✔ |
| Anthropic opposed the proposed 10-year state-law AI moratorium as "far too blunt an instrument," urging a federal transparency standard instead | Dario Amodei, NYT op-ed, June 2025 | ✔ |
| "A real and mysterious creature, not a simple and predictable machine" | Jack Clark, "Technological Optimism and Appropriate Fear," Oct 2025 | ✔ |
| GTG-1002 response recommends accelerating AI for defense, threat sharing, stronger safeguards — not halting development | Anthropic GTG-1002 report: "A fundamental change has occurred in cybersecurity" | ✔ |
| ASL-3 activated with Claude Opus 4, May 22 2025, precautionary | Anthropic; CNBC | ✔ |

Deliberately NOT claimed: that Anthropic endorses this site, SAFE-STEP, or any pause. The section
exists to correct the popular "Anthropic said slow down" shorthand into what was actually said —
and to argue that presence-gated autonomy is one small-team answer to the call they DID make.

## §06 — Protocol Stack / ASL framing

| Claim | Source | Mark |
|---|---|---|
| Anthropic RSP current version 3.3, effective May 26, 2026 | anthropic.com/rsp-updates | ✔ |
| ASL-3 Security Standard: weights protected against sophisticated non-state attackers | RSP v2.x language carried forward; GovAI analysis | ✔ |
| ASL-3 deployment: defense-in-depth — classifiers, async monitoring, jailbreak detection | Anthropic ASL-3 report | ✔ |
| ASL-3 security playbook: two-party authorization, hardware keys, signed commits, egress bandwidth controls | Anthropic ASL-3 report | ✔ |
| ASL-4-class framing: state-level adversaries, affirmative safety cases | Amodei UK AI Safety Summit remarks; ailabwatch — phrased as "ASL-4-class thinking raises the bar toward" | ⚠ |
| OWASP Top 10 for Agentic Applications 2026 (Dec 9, 2025); goal hijack, tool misuse, identity & privilege abuse | genai.owasp.org | ◐ |
| MCP authorization spec (2025): OAuth 2.1 resource servers, RFC 8707 resource indicators, no token pass-through | modelcontextprotocol.io spec revisions June + Nov 2025 | ✔ |
| LangGraph `interrupt()` as deterministic HITL pattern | LangChain blog | ✔ |
| OpenAI Preparedness Framework v2 (Apr 2025); DeepMind FSF v3.x | openai.com; deepmind.google | ✔ (named only as "frontier-lab safety frames") |
| EU AI Act: GPAI obligations applied Aug 2, 2025; Commission enforcement powers from Aug 2, 2026 | artificialintelligenceact.eu; EC digital-strategy | ✔ |

## §08 — Trust Graph (Intuition) — deep-dive verified 2026-06-12 against docs.intuition.systems

| Claim | Source | Mark |
|---|---|---|
| Mainnet + $TRUST launched October 2025; Arbitrum Orbit L3 settling on Base; ~2s blocks | Chainwire; CryptoBriefing; docs (deployments page lists live mainnet) | ✔ |
| Intuition mainnet chain ID 1155; RPC rpc.intuition.systems; explorer.intuition.systems; $TRUST is native gas | docs.intuition.systems/docs/intuition-smart-contracts/deployments (fetched) | ✔ |
| Atoms: unique decentralized identifiers for anything; each Atom gets its own vault AND its own wallet address (AtomWalletFactory) | docs: concepts/primitives + smart-contracts (fetched) | ✔ |
| Triples: [subject]–[predicate]–[object], every part an Atom; Triples nest; TWO vaults per Triple (positive + counter) | docs: primitives; triples core-benefits | ✔ |
| Creation ≠ signal: an Atom/Triple created with no initial deposit carries no Signal | docs: primitives | ✔ |
| Fees: 0.1 TRUST per Atom or Triple creation; min deposit 0.01 TRUST; entry 0.5%; exit 0.75%; protocol 1.25%; 0.9% of a Triple deposit routed to its underlying Atoms' vaults | docs: smart-contracts/configuration (fetched) | ✔ |
| Bonding curves: linear + offset-progressive; early conviction pays less per share; V2 MultiVault supports multiple curves (BondingCurveRegistry) | docs: economics/bonding-curves | ✔ |
| Counter-staking is the documented truth-discovery mechanism — a market, NOT slashing (V1 of this site said "slash"; corrected in V2, logged in CHANGELOG) | docs: fees/economics; press used "losing stake" loosely | ✔ |
| SDK: @0xintuition/sdk ^2.0.0 (+ protocol, graphql pkgs; viem 2.x peer); createAtomFromString / createAtomFromThing / createTripleStatement; deposit/redeem | docs: quick-start/using-the-sdk; intuition-sdk/installation-and-setup (fetched) | ✔ |
| GraphQL: mainnet.intuition.sh/v1/graphql · testnet.intuition.sh/v1/graphql | docs: graphql-api/overview (fetched) | ✔ |
| Testnet: chain 13579, tTRUST faucet at testnet.hub.intuition.systems, bridge.intuition.systems | docs: deployments (fetched) | ✔ |
| Contract addresses (mainnet 1155): MultiVault 0x6E35cF57A41fA15eA0EaE9C33e751b01A784Fe7e etc. | docs: deployments — held in /attestation kit, NOT on the site (addresses rot; the register and kit carry them) | ✔ |
| Agent skills: `npx skills add 0xintuition/agent-skills` — emits unsigned tx params only; Intuition MCP server for agent queries | docs: getting-started/ai-skills; experimental-applications/mcp-server | ✔/◐ |
| "Identity without reputation is incomplete, and reputation without identity is ungrounded" (Billions × Intuition agent-trust thesis) | 0xIntuition Medium, Billions partnership post | ✔ |
| AgentRank: PageRank-style agent reputation over endorsement triples, Sybil resistance via staking | github.com/0xIntuition/agent-rank | ✔ |
| Attestation cost on L3: docs claim ~10,000× cheaper than Ethereum; press cites <$0.001/attestation | docs + launch press | ◐ (phrased "designed for sub-cent attestation") |

Known doc inconsistency (flagged honestly): the /docs/intuition-network page still says mainnet
"coming soon" — stale; the deployments page + press confirm live mainnet. SDK quickstart deposit
example may show v1 arg shape; the attestation kit pins to SDK helpers, not raw deposit calls.

## §09 — Antifragile Training

| Claim | Source | Mark |
|---|---|---|
| Backdoor poisoning succeeds with near-constant ~250 documents regardless of model size (Oct 2025) | Anthropic + UK AISI + Alan Turing Institute — anthropic.com/research/small-samples-poison | ✔ |
| Decentralized-training trust models immature, no accepted standard | arXiv 2507.07765; field survey | ◐ |

## §10 — Davara EI's Direction

Original work by Davara EI — models, not claims of fact: the FABLE Research Fleet design,
presence-decaying autonomy budgets, the Attested Incident Exchange, the EI Maturity Ladder,
and the second-order failure map (beacon farming, presence outsourcing, rubber-stamp decay).
Presented as research directions with limits declared inline. No external attribution implied.

## §11 — The Paper

"Presence-Gated Autonomy: A Systems-Leverage Approach to Securing Emergent Intelligence" v1.0
(2026-06-12) — every citation in the paper resolves to an entry on this register. Available as
HTML (/paper), Markdown (/research/PAPER.md), PDF (/research/davara-presence-gated-autonomy-v1.pdf).

## SAFE-STEP provenance

SAFE-STEP is original research by Davara EI (canon: "Continuous Human-Presence Attestation for
Delegated Autonomy," v0.1, 2026-06-12 — Outlier.Systems). Primitives: Presence Beacon, Graduated
Authority, Autonomy Budget, Quorum Presence, Panic Beacon, Presence Receipts. The site presents it
as a research direction, with its limits declared in the "Declared honestly" paragraph
(presence ≠ engaged judgment; beacon farming; rubber-stamping).

---

*Maintained under the Evolution Loop (§13): new evidence opens an issue; claims that fail
refutation are corrected in the CHANGELOG, not silently edited. To refute a claim, open an issue
at github.com/InitiumBuilders/Davara-In-Action.*
