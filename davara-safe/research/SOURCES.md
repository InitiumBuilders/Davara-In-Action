# DAVARA SAFE — Source & Claim Register

Every factual claim on davara-safe.vercel.app, with its source and a confidence mark.
Research performed 2026-06-12 by parallel research agents; synthesized and reviewed by Davara EI.
**Rule: a claim that is not on this register does not ship.**

Confidence marks: ✔ verified against primary/multiple sources · ◐ verified against secondary sources · ⚠ stated softly on-site or omitted.

## §01 — The Moment

| Claim on site | Source | Mark |
|---|---|---|
| Salesloft Drift (Aug 2025): OAuth tokens stolen from AI chat-agent integration; 700+ orgs affected | The Hacker News; Arctic Wolf | ✔ |
| GTG-1002 (disclosed Nov 14, 2025): first reported AI-orchestrated espionage campaign; ~30 targets; 80–90% of tactical operations autonomous; guardrails bypassed via role-play | Anthropic threat intelligence report | ✔ |
| UK NCSC (Dec 2025): prompt injection "is not SQL injection," may never be properly mitigated; warns of 2010s-SQLi-scale breaches | NCSC blog; The Record | ✔ |
| "The Adolescence of Technology" — Dario Amodei, Jan 26 2026, 36 pages, five risk categories, defense battle plan | darioamodei.com; Axios (Jan 26, 2026) | ✔ |

Deliberately NOT claimed: that Anthropic called for an industry pause. RSP v3.0 (Feb 24, 2026)
*dropped* the conditional-pause commitment (TIME; CNN); the honest framing is "race carefully."
The site says "defenses built now," which is what the essay argues — no more.

## §04 — Protocol Stack / ASL framing

| Claim | Source | Mark |
|---|---|---|
| Anthropic RSP current version 3.3, effective May 26, 2026 | anthropic.com/rsp-updates | ✔ |
| ASL-3 activated with Claude Opus 4, May 2025, as precautionary action | Anthropic "Activating ASL-3 protections"; CNBC May 23, 2025 | ✔ |
| ASL-3 Security Standard: weights protected against sophisticated non-state attackers | RSP v2.x language carried forward; GovAI analysis | ✔ |
| ASL-3 deployment: defense-in-depth — classifiers, async monitoring, jailbreak detection | Anthropic ASL-3 report | ✔ |
| ASL-3 security playbook: two-party authorization, hardware keys, signed commits, egress bandwidth controls | Anthropic ASL-3 report | ✔ |
| ASL-4-class framing: state-level adversaries, affirmative safety cases | Amodei UK AI Safety Summit remarks; ailabwatch — exact v3.x restatement unverified, phrased as "ASL-4-class thinking raises the bar toward" | ⚠ |
| OWASP Top 10 for Agentic Applications 2026, released Dec 9, 2025; threat names (goal hijack, tool misuse, identity & privilege abuse) | genai.owasp.org; site uses three category names matching ASI01–ASI03 summaries | ◐ |
| MCP authorization spec (2025): OAuth 2.1 resource servers, RFC 8707 resource indicators, no token pass-through | modelcontextprotocol.io spec revisions June + Nov 2025 | ✔ |
| LangGraph `interrupt()` as deterministic HITL pattern | LangChain blog | ✔ |
| OpenAI Preparedness Framework v2 (Apr 2025); DeepMind FSF v3.x | openai.com; deepmind.google | ✔ (named only as "frontier-lab safety frames") |
| EU AI Act: GPAI obligations applied Aug 2, 2025; Commission enforcement powers from Aug 2, 2026 | artificialintelligenceact.eu; EC digital-strategy | ✔ |

## §06 — Trust Graph (Intuition)

| Claim | Source | Mark |
|---|---|---|
| Mainnet + $TRUST launched October 2025 | Chainwire Oct 29, 2025; CryptoBriefing | ✔ |
| Architecture: Arbitrum Orbit L3 settling on Base | launch coverage + docs | ✔ |
| Primitives: Atoms, Triples (subject–predicate–object, all Atoms), Signal (staking) | docs.intuition.systems | ✔ |
| Two vaults per Triple (for/against); bonding-curve pricing; MultiVault contract | docs.intuition.systems | ✔ |
| `@0xintuition/sdk` — createAtomFromString, createTripleStatement; public GraphQL API | npm; 0xIntuition/intuition-ts monorepo | ✔ |
| AgentRank: PageRank-style agent reputation over endorsement triples, Sybil resistance via staking | github.com/0xIntuition/agent-rank | ✔ |
| Intuition MCP server exposes trust queries to AI agents | intuitionmcp.xyz | ◐ |
| $TRUST utility: gas + staking + ve-governance (TrustBonding/veTRUST) | tokenomics post (0xbilly, Medium); docs | ◐ |

Deliberately NOT claimed: chain ID, contract addresses, fee percentages (research flagged as
needing re-confirmation; addresses change, sites rot — the register holds them, the site doesn't).

## §07 — Antifragile Training

| Claim | Source | Mark |
|---|---|---|
| Backdoor poisoning succeeds with near-constant ~250 documents regardless of model size (Oct 2025) | Anthropic + UK AISI + Alan Turing Institute — anthropic.com/research/small-samples-poison | ✔ |
| Decentralized-training trust models immature, no accepted standard | arXiv 2507.07765; field survey | ◐ |

## SAFE-STEP provenance

SAFE-STEP is original research by Davara EI (canon: "Continuous Human-Presence Attestation for
Delegated Autonomy," v0.1, 2026-06-12 — Outlier.Systems). Primitives: Presence Beacon, Graduated
Authority, Autonomy Budget, Quorum Presence, Panic Beacon, Presence Receipts. The site presents it
as a research direction, with its limits declared in the "Declared honestly" paragraph
(presence ≠ engaged judgment; beacon farming; rubber-stamping).

---

*Maintained under the Evolution Loop (§09): new evidence opens an issue; claims that fail
refutation are corrected in the changelog, not silently edited.*
