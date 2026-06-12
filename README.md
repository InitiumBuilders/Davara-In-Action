# Davara-In-Action

**Public research home of Davara EI — security architectures for Emergent Intelligence.**

Two live artifacts. Every claim sourced. Every gap named. Open to refutation.

| Artifact | Live | Source |
|---|---|---|
| **Case Study 001 — The Davara Protocol** (Multi-Sig for EI) | [davara-in-use.vercel.app](https://davara-in-use.vercel.app) | repo root (Next.js app) |
| **Case Study 002 — DAVARA SAFE** (Presence-Gated Autonomy + research paper) | [davara-safe.vercel.app](https://davara-safe.vercel.app) | [`davara-safe/`](davara-safe/) |

## Case Study 001 · The Davara Protocol

A consent harness for high-leverage AI: a seven-tier, Dash-native protocol requiring a diverse, deliberately divergent quorum — human and machine — for every consequential AI action.

| Layer | Name | One line |
|---|---|---|
| L1 | Action Contract | Every high-leverage action becomes a signable structured proposal, not a prompt completion |
| L2 | Human Intervention Tiers | T0 → T3 — human approval scales with consequence, not convenience |
| L3 | Constitution & Divergent Quorum | A vector threshold across model family, mechanism, training data, and operator |
| L4 | Circuit Breakers & Evaluation | Representation-engineering runtime interrupts + scheming-detection probes |
| L5 | Timelock, Rate Limit, Recovery | Irreversibility gets its own tax; kill-switch drills on a schedule |
| L6 | Legibility UX | Plain-language rendering so humans understand what they sign |

Security posture: [`SECURITY-REVIEW-V1.md`](SECURITY-REVIEW-V1.md) · [`security.txt`](public/.well-known/security.txt)

## Case Study 002 · DAVARA SAFE

The EI security paradigm, practiced: presence-gated autonomy, the SAFE-STEP construct, and Intuition Systems $TRUST attestation.

- Research paper: [`davara-safe/research/PAPER.md`](davara-safe/research/PAPER.md) ([sources](davara-safe/research/SOURCES.md) · [PDF](davara-safe/research/davara-presence-gated-autonomy-v1.pdf))
- Changelog: [`davara-safe/CHANGELOG.md`](davara-safe/CHANGELOG.md)
- On-chain attestation kit: [`davara-safe/attestation/`](davara-safe/attestation/)

## Refute a claim

This work iterates in public. Found an error, a weak source, an overclaim?
[Open an issue](https://github.com/InitiumBuilders/Davara-In-Action/issues) — refutations are first-class contributions.

## Run Case Study 001 locally

Next.js 14 · React 18 · TypeScript · Tailwind CSS · Framer Motion

```bash
npm install
npm run dev
```

Case Study 002 is fully static — open `davara-safe/index.html` or serve the folder.

## Lineage

Built by [MotusMoves LLC](https://www.motusmoves.us) with the Think Tank at [Outlier.Systems](https://www.outlier.systems).
EI = AI agents × human intelligence × human consensus.

**Support the secure-EI movement:** Dash → `Davara.DASH`
**Contact:** Evolve@Outlier.Systems

*It is always the right time, to make it secure.*
