# DAVARA SAFE · FABLE-FORGE V2

**Live:** https://davara-safe.vercel.app · **Case Study 002** from Davara EI, the Think Tank at Outlier.Systems
**Paper:** https://davara-safe.vercel.app/paper · **Changelog:** [`CHANGELOG.md`](CHANGELOG.md)

A security paradigm for the Emergent Age — where autonomy is a function of **human presence**,
authority is **multi-signed**, and trust is **staked, not asserted**. Evolved in public.

## Refute a claim

Every factual claim on the site is registered with source and confidence in
[`research/SOURCES.md`](research/SOURCES.md). If you can show one is wrong,
**[open an issue](https://github.com/InitiumBuilders/Davara-In-Action/issues)** with the claim,
your evidence, and a verifiable source. Verified refutations ship in the next release and are
credited in the [changelog](CHANGELOG.md). V2's first public correction
(slashable → counter-staked trust) is already logged there — the loop is running.

## What this site argues

1. **The Moment** — the first agentic breaches already happened (Salesloft Drift, GTG-1002, the
   NCSC prompt-injection assessment, prompt-to-RCE chains). One shared anatomy: standing authority, absent human.
2. **The Instrument Panel** — the 2026 numbers: +89% AI-enabled adversary activity, 27-second
   fastest breakout, 82:1 machine-to-human identities, a 94%-aware / 37%-governed gap.
3. **The Paradigm** — after AI comes **EI**: agentic capability × human presence × verifiable trust.
   Multiplicative: presence at zero means authority at zero.
4. **The Steering Argument** — what Anthropic actually called for (conditional scaling,
   transparency, a race to the top — not a blanket slow-down), and how this work answers it.
5. **The Ladder** — the field's effort sits on Meadows' weakest rungs. The leverage is structural.
6. **The Protocol Stack** — six layers from action contracts to legibility, scaled to small teams.
7. **SAFE-STEP** — presence beacons, graduated authority, deterministic interrupts, M-of-N
   execution where a live human session is the second signer.
8. **The Trust Graph** — staked attestation on Intuition (Atoms · Triples · Signal · $TRUST ·
   AgentRank): trust as a market position, with counter-vaults pricing disagreement.
9. **Antifragile Training** — provenance-gated, small-trusted-team, accompaniment-native.
10. **Davara EI's Direction** — the FABLE research fleet and four original models: the Autonomy
    Budget Curve, the Attested Incident Exchange, the EI Maturity Ladder, the Absence Benchmark —
    plus the paradigm's own second-order failure map, named before critics name it.
11. **The Research Paper** — *Presence-Gated Autonomy* v1.0, viewable on-site, downloadable as
    MD or PDF, with four falsifiable predictions.
12. **Foresight** — the five interventions the industry needs most, in order.
13. **The Evolution Loop** — observe → refute → refine → attest. This site versions itself in public.

## The build practices the doctrine

- **Zero dependencies.** No framework, no build step, no npm tree. Hand-written HTML/CSS/JS.
- **Zero third-party requests.** Fonts self-hosted (Sora, JetBrains Mono). No analytics, no CDNs.
- **CSP with no inline execution at all** (`script-src 'self'; style-src 'self'`), HSTS,
  frame-deny, no-referrer — see `vercel.json`.
- **Progressive enhancement.** Scripts blocked? The page renders fully, statically.
  `prefers-reduced-motion` gets a truthful static frame everywhere, including the SVG vignettes.
- **Provenance.** Claims are registered before prose is written. Unverified claims don't ship —
  the register lists the ones that were rejected.

## Repository

| Path | Purpose |
|---|---|
| `index.html` | The site — one long-scroll artifact, 13 sections |
| `paper.html` | The research paper, on-site view (`/paper`) |
| `research/PAPER.md` | The paper, Markdown source (downloadable) |
| `research/davara-presence-gated-autonomy-v1.pdf` | The paper, PDF (downloadable) |
| `research/SOURCES.md` | The claim register — every claim, source, confidence |
| `attestation/` | Intuition attestation kit: mint Atoms + the first Triple (operator signs) |
| `CHANGELOG.md` | The public iteration record |
| `assets/css/main.<hash>.css` | Design system (cold cyan = machine, warm amber = presence) |
| `assets/js/boot.<hash>.js` + `main.<hash>.js` | Beacon canvas, reveals, count-ups, scroll rail (CSP-clean) |
| `vercel.json` | Security headers + caching |
| `.well-known/security.txt` | Disclosure channel |

## Lineage

- **Case Study 001:** [The Davara Protocol](https://davara-in-use.vercel.app) — multi-sig consent
  architecture for one EI ([source](https://github.com/InitiumBuilders/Davara-In-Action))
- **SAFE-STEP canon:** "Continuous Human-Presence Attestation for Delegated Autonomy" v0.1

---

**Davara EI** · the research & development community and the Think Tank at **Outlier.Systems**
Contact: Evolve@Outlier.Systems · Tips: Dash → **Davara.DASH**

*"It is always the right time, to make it secure."*
