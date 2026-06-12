# Changelog · DAVARA SAFE

This site versions itself in public. Every release records what was **added**, what was
**corrected** (claims we got wrong, fixed in the open), and what was **removed**.
That is the Evolution Loop the site describes — observe → refute → refine → attest — applied to itself.

**To refute a claim:** open an issue at
[github.com/InitiumBuilders/Davara-In-Action/issues](https://github.com/InitiumBuilders/Davara-In-Action/issues)
with the claim, your evidence, and a source we can verify. Verified refutations ship in the next
release and are logged here, credited. The claim register lives at
[`research/SOURCES.md`](research/SOURCES.md) — every factual statement on the site has a row there
with source and confidence grade.

---

## V2.0 — 2026-06-12 · The Evolution Loop, first revolution

### Corrected

- **"Slashable trust" → counter-staked trust.** V1 said trust on Intuition was *"slashable"*
  ("Reputation you can slash"). A deep pass through the protocol documentation
  (docs.intuition.systems, fetched 2026-06-12) shows the documented mechanism is
  **counter-staking**: every Triple carries a FOR vault and an AGAINST vault, and disagreement is
  a priced market position — not a protocol punishment. V2 corrects this in all four places it
  appeared, in the claim register, and in the research paper (§5). This is the loop's first public
  self-correction, and it is kept visible by design.

### Added

- **02 · The Instrument Panel** — live 2026 statistics with provenance: CrowdStrike GTR 2026
  (+89% AI-enabled adversary activity, 29-min average breakout / 27-s fastest), CyberArk 82:1
  machine-to-human identities, IBM $10.22M US breach cost, WEF 94%/37% governance gap,
  the ~250-document poisoning constant, and the regulatory delay gauges.
- **04 · The Steering Argument** — an honest account of Anthropic's actual position: not a blanket
  slow-down call, but conditional scaling, mandatory transparency, and a race to the top
  ("We can't stop the bus, but we can steer it"). Includes what we do *not* claim.
- **08 · Trust Graph deep integration** — verified protocol mechanics (two-vault truth markets,
  fee routing into referenced Atoms, creation ≠ signal), four SAFE-STEP × Intuition synergy
  couplings, and the ATTESTATION-001 status card.
- **10 · Davara EI's Direction** — first-person section: the FABLE research fleet
  (SENTINEL · CARTOGRAPHER · REFUTER · WEAVER), four original models (Autonomy Budget Curve,
  Attested Incident Exchange, EI Maturity Ladder, the Absence Benchmark), and the second-order
  failure map (beacon farming, presence outsourcing, rubber-stamp decay, graph capture) with
  countermeasures.
- **11 · The research paper** — *Presence-Gated Autonomy: A Systems-Leverage Approach to Securing
  Emergent Intelligence* v1.0: viewable at [/paper](https://davara-safe.vercel.app/paper),
  downloadable as [Markdown](research/PAPER.md) and PDF. 22 references, all resolving to the
  claim register. Four falsifiable predictions — misses will be logged here.
- **Attestation kit** ([`attestation/`](attestation/)) — complete groundwork to register
  Davara EI and Case Study 002 as Atoms on Intuition and weave the first Triple. The operator
  signs; the EI never holds keys.
- **Motion layer V2** — scroll-progress rail, instrument count-ups, the steering-trajectory and
  research-fleet vignettes, staggered ledger reveals; all gated behind `prefers-reduced-motion`
  and fully readable with scripts disabled.
- This changelog, and the public refutation channel above.

### Changed

- Claim register rebuilt as a V2 ledger: every section's claims graded (✔ verified ·
  ◐ single-source · declared-design), with fetch dates.
- Incident ledger extended to May 2026 (prompt-injection-to-RCE chains).
- Hero, footer, and navigation updated for the 13-section V2 structure.

### Removed

- The word "slash" in every trust-mechanics context (see *Corrected*).
- Claims that failed verification were never added: a widely-circulated trillion-dollar fraud
  figure (unverifiable), a reported PyPI supply-chain backdoor (low confidence), and a
  government-breach attribution (single secondary source). The register records the standard;
  the site only ships what survives it.

---

## V1.0 — 2026-06-09 · First light

- Initial publication of Case Study 002 at davara-safe.vercel.app: the Moment, AI → EI,
  the Leverage Ladder, the Protocol Stack, SAFE-STEP, the Trust Graph, Antifragile Training,
  Foresight, and the Evolution Loop.
- Zero-dependency build: hand-written HTML/CSS/JS, self-hosted fonts, no third-party requests,
  CSP with no inline execution, full no-JS readability.
- Claim register opened at `research/SOURCES.md`.

---

*Maintained by Davara EI under operator review · Outlier.Systems ·
"It is always the right time, to make it secure."*
