# DAVARA SAFE · FABLE-FORGE V1

**Live:** https://davara-safe.vercel.app · **Case Study 002** from Davara EI, the Think Tank at Outlier.Systems

A security paradigm for the Emergent Age — where autonomy is a function of **human presence**,
authority is **multi-signed**, and trust is **staked, not asserted**.

## What this site argues

1. **The Moment** — the first agentic breaches already happened (Salesloft Drift, GTG-1002, the NCSC prompt-injection assessment). Every one shares the same anatomy: standing authority, absent human.
2. **The Paradigm** — after AI comes **EI**: Emergent Intelligence, agents fused with human guidance and review. The unit of security is no longer a model; it is a relationship.
3. **The Ladder** — the field's effort sits on Meadows' weakest rungs (filters, blocklists). The leverage is in structure and paradigm.
4. **The Protocol Stack** — six layers from action contracts to legibility, aligned with ASL-3/ASL-4-class thinking, scaled to small teams.
5. **SAFE-STEP** — two-step verification where the second factor is *you, present*: signed presence beacons, graduated authority, deterministic interrupts, M-of-N agentic wallets where a live human session is the second signer.
6. **The Trust Graph** — staked attestation on Intuition (Atoms · Triples · Signal · $TRUST · AgentRank): trust as a market position, not a marketing position.
7. **Antifragile Training** — provenance-gated, small-trusted-team, accompaniment-native training.
8. **Foresight** — the five interventions the industry needs most, in order.
9. **The Evolution Loop** — observe → refute → refine → attest. This site versions itself in public.

## The build practices the doctrine

- **Zero dependencies.** No framework, no build step, no npm tree. Hand-written HTML/CSS/JS.
- **Zero third-party requests.** Fonts self-hosted (Sora, JetBrains Mono). No analytics, no CDNs.
- **CSP with no inline execution at all** (`script-src 'self'; style-src 'self'`), HSTS, frame-deny, no-referrer — see `vercel.json`.
- **Progressive enhancement.** Scripts blocked? The page renders fully, statically. `prefers-reduced-motion` gets a truthful static frame.
- **Provenance.** Every factual claim is registered with source and confidence in [`research/SOURCES.md`](research/SOURCES.md). Unverified claims don't ship.

## Repository

| Path | Purpose |
|---|---|
| `index.html` | The entire site — one long-scroll artifact |
| `assets/css/main.css` | Design system (cold cyan = machine, warm amber = presence) |
| `assets/js/boot.js` + `main.js` | Presence-beacon canvas + arrival reveals (CSP-clean, no inline) |
| `vercel.json` | Security headers + caching |
| `.well-known/security.txt` | Disclosure channel |
| `research/SOURCES.md` | The claim register |

## Lineage

- **Case Study 001:** [The Davara Protocol](https://davara-in-use.vercel.app) — multi-sig consent architecture for one EI ([source](https://github.com/InitiumBuilders/Davara-In-Action))
- **SAFE-STEP canon:** "Continuous Human-Presence Attestation for Delegated Autonomy" v0.1

---

**Davara EI** · the research & development community and the Think Tank at **Outlier.Systems**
Contact: Evolve@Outlier.Systems · Tips: Dash → **Davara.DASH**

*"It is always the right time, to make it secure."*
