# Security Review — Davara-In-Use V1
### Reviewer: Davara EI (FABLE-FORGE) · 2026-06-12
### Method: Systems-security review — every finding placed on the Meadows leverage ladder (12 = parameters … 1 = paradigm), because *where* you fix a system matters more than how many fixes you stack.

---

## Verdict in one line

**V1 is an honest static artifact with near-zero runtime attack surface — its real exposures live in the supply chain, the deploy provenance, and the absence of declared security posture, not in the code.**

POSIWID check: the purpose of this site is what it does — it *teaches a consent architecture*. It handles no user data, runs no API routes, stores no secrets. That design choice is itself the highest-leverage security decision in the codebase, and it was made correctly.

---

## What was scanned

- All 20 routes/pages, 18 components, lib/, configs (48 source files)
- Pattern sweep: `dangerouslySetInnerHTML` · `eval` · `innerHTML` · client `fetch` · `process.env` · web storage · `postMessage` · hardcoded credentials → **zero hits**
- Data flow: single static JSON import (`lib/data/status.json`) — build-time, typed, no runtime fetch
- Dependency tree: 5 runtime deps (next 14.2.15, react 18, react-dom 18, framer-motion 11, clsx), lockfile present

---

## Findings, on the ladder

### #12 · Parameters — Missing security headers *(fix: trivial, do it)*
`next.config.mjs` declares no headers. The deployed site ships without:
- `Content-Security-Policy` (even a report-only baseline)
- `Strict-Transport-Security`
- `X-Frame-Options` / `frame-ancestors` (clickjacking)
- `Referrer-Policy`, `Permissions-Policy`, `X-Content-Type-Options`

**Risk: low** (static content, no auth to steal) — but a security-research site that ships without a CSP undermines its own message. *The site's purpose is what it does.*

### #11 · Buffers — Single-platform existence
The site exists only as a Vercel deployment. Until today there was no git anchor — if the Vercel project were deleted or the account compromised, the artifact was gone. **Fixed 2026-06-12:** source recovered from the deployment API and anchored to this repository. Lesson logged: *a deploy without a repo is a stock without a flow that can refill it.*

### #10 · Structure (plumbing) — Supply chain
- **Next.js 14.2.15** predates the 14.2.25 patch line for **CVE-2025-29927** (middleware authorization bypass). V1 has no middleware, so it is **not exploitable here** — but the version pin is below the patched floor, and any future contributor adding middleware inherits the hole silently. → Bump to ≥14.2.25 (or Next 15/16) on next touch.
- **Google Fonts loaded at runtime** from `fonts.googleapis.com` — a third-party availability + privacy coupling (visitor IPs flow to Google). → Self-host via `next/font`. Removes an external trust dependency and a render-blocking request in one move.
- npm install path is unpinned beyond the lockfile; no `npm audit` / Dependabot / provenance gate in CI (there is no CI). → The repo anchor now makes CI possible.

### #9 · Delays — No update feedback loop
`status.json` carries `lastUpdated` but nothing audits staleness. A research site whose "live status" silently freezes erodes exactly the trust it argues for. → Add a build-time staleness check (warn >30 days).

### #6 · Information flows — No declared security posture
- No `/.well-known/security.txt` — a security-research site with no disclosure channel is a missing feedback loop in its own domain.
- No content provenance: the research pages make factual claims (OWASP, NCSC, incident data) with no signing, no commit-anchored citation trail. For a project whose thesis is *verifiable trust for AI outputs*, the artifact itself should be the first demonstration. → V2 addresses this with attestation-graph design ($TRUST/Intuition integration).

### #5 · Rules — No CI gate
Nothing enforces that what is deployed equals what is reviewed. The Vercel project deploys from CLI/manual pushes, not from this repo. → Connect the Vercel project to this repository so the rule becomes structural: *no deploy without a commit*.

### #3–#2 · Goals & paradigm — The strong part
The architecture documents (six layers, seven tiers, divergent quorum) put the site's *content* above the cliff: it argues for structural and paradigm-level interventions in AI security, not parameter tweaks. The codebase mostly lives up to it by refusing attack surface altogether. The gap between message and artifact is only at the parameter level (headers, posture files) — rare, and worth saying out loud.

---

## Priority queue (smallest stones, largest ripples)

1. **Security headers** in `next.config.mjs` — 20 lines, immediate
2. **Self-host fonts** via `next/font` — removes third-party coupling
3. **Bump Next.js** past the CVE-2025-29927 floor
4. **security.txt** + contact (Evolve@Outlier.Systems)
5. **Connect Vercel ↔ this repo** — make deploy provenance structural
6. **Staleness check** on status.json

Items 1–4 are shipped in the V1.1 refinement accompanying this review. Items 5–6 are operator-gated (Vercel project settings; CI choice).

**Residual risk, declared honestly:** V1.1 ships on Next 14.2.35 — the final patch release of the 14.x line. `npm audit` still flags advisories on ≤16.x, but every one targets server features this site does not use (Image Optimization API, middleware/proxy, WebSocket upgrades, server-rendered RSC paths — the build is 100% static prerender). The structural fix is the Next 16 major migration, deliberately deferred: V1 is a stable artifact under "leave it mostly alone" orders, and an invasive framework migration on a frozen artifact is risk added, not removed. V2 (davara-safe) starts on the latest major from day one.

---

*Reviewed under the FABLE-FORGE discipline: assume the Forrester inversion (the obvious push is usually backwards), climb the ladder before recommending, and never let a security document claim more than the artifact demonstrates.*

**Davara EI · The Think Tank at Outlier.Systems**
*It is always the right time, to make it secure.*
