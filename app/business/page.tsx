"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import LoopGlyph from "@/components/LoopGlyph";
import StewardshipBadge from "@/components/StewardshipBadge";
import GlossaryLink from "@/components/GlossaryLink";

const ease = [0.22, 1, 0.36, 1] as const;

const streams = [
  {
    n: "01",
    tier: "Open Core",
    price: "Free · Apache 2.0",
    title: "Davara Protocol — Reference Implementation",
    body: "Action contracts, signer interfaces, quorum logic, timelocks, legibility UX. Open source. Free forever. Makes the protocol the standard.",
    color: "teal",
    loopType: "B-" as const,
  },
  {
    n: "02",
    tier: "SaaS",
    price: "$500 – $5K / mo",
    title: "Davara Signer Cloud",
    body: "Hosted diverse-signer quorums so customers don't stand up their own Anthropic / OpenAI / Google / open-weights pipelines. Per-action or per-seat. For fintechs, DAOs, AI labs, regulated enterprise.",
    color: "gold",
    loopType: "R+" as const,
  },
  {
    n: "03",
    tier: "Network",
    price: "Usage + staking",
    title: "Davara Audit — Consortium Trust Fabric",
    body: "A federated audit network. Independent orgs run signers for each other. Pay by throughput; earn by serving. Good signers accrue $TRUST reputation; bad signers get slashed.",
    color: "indigo",
    loopType: "R+" as const,
  },
  {
    n: "04",
    tier: "Enterprise",
    price: "$25K – $250K / yr",
    title: "Davara Constitution — Compliance Package",
    body: "Pre-audited mappings of the Davara Protocol to EU AI Act Article 55, NIST AI RMF 2.0, ISO/IEC 42001, and a SOC 2 AI addendum. Turnkey: docs, signer configs, incident runbooks, audit reports.",
    color: "rose",
    loopType: "B-" as const,
  },
  {
    n: "05",
    tier: "Sovereign",
    price: "Dash-Native",
    title: "Sovereign Tier — Masternode-Gated",
    body: "Full Davara EI access for Dash masternode operators (≥ 1,000 DASH). Signer-network seat, governance vote on Davara roadmap, white-label option. The first AI consent layer built on Dash infrastructure.",
    color: "teal",
    loopType: "R+" as const,
  },
];

const sizing = [
  { k: "$2.54B", v: "Global AI governance & compliance market size (2026).", src: "SQ Magazine / FMI" },
  { k: "15.1%", v: "CAGR forecast for the AI governance market, 2026–2036.", src: "Future Market Insights" },
  { k: "$37B", v: "2026 enterprise AI spend (the total addressable footprint for compliance-adjacent products).", src: "AI2.work" },
  { k: "$100B", v: "The single-incident damage threshold OpenAI uses to define catastrophic risk. Prevent a fraction of one such event and the protocol pays for itself 1,000x.", src: "OpenAI PF v2" },
  { k: "Aug 2026", v: "EU AI Act enforcement starts for GPAI with systemic risk. Adversarial testing becomes a legal requirement.", src: "EU AI Act Article 55" },
  { k: "~$10B", v: "AUM under AI-assisted DAO treasury management — the first wedge market. Already multi-sig-native.", src: "Davara estimate, Q2 2026" },
];

export default function BusinessPage() {
  return (
    <>
      <Backdrop />
      <Nav />

      <section className="section !pt-32 sm:!pt-40 md:!pt-48">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap gap-2 mb-6 sm:mb-8"
          >
            <span className="tag">The Business</span>
            <span className="tag tag-gold">Revenue Model</span>
            <span className="tag tag-indigo">Antifragile</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="h-display mb-6 sm:mb-8 text-bone"
          >
            A public good <span className="italic">and</span> a{" "}
            <span className="gradient-ink">commercial stack</span>. Both must be true.
          </motion.h1>

          <p className="body-lg text-bone/80 max-w-3xl">
            A protocol without an economic substrate is a PDF. The Davara Protocol ships as
            open-source core + four layered revenue streams, each mapped to a real customer
            and a measured market.
          </p>
        </div>
      </section>

      {/* STEWARDSHIP */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <div className="glass-strong rounded-2xl p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4">
            <StewardshipBadge />
            <p className="body-lg text-bone/65">
              Operated by MotusMoves. Stewarded by the Dash DAO. Built by Davara EI.
            </p>
          </div>
        </div>
      </section>

      {/* WHY ANTIFRAGILE */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
            <div className="flex items-center gap-4 mb-5 flex-wrap">
              <LoopGlyph type="R+" size="lg" />
              <p className="eyebrow text-teal2/80">Why Antifragile?</p>
            </div>
            <p className="body-lg text-bone/85 max-w-3xl mb-4">
              Davara does not just survive stress — it feeds on it. Every adversarial probe patches a vulnerability. Every masternode dissent triggers a <GlossaryLink term="constitution">Constitution</GlossaryLink> review. Every post-incident audit strengthens the protocol&rsquo;s next version.
            </p>
            <p className="body-lg text-bone/60 max-w-3xl">
              This is <GlossaryLink term="stress-as-signal">Stress-as-Signal</GlossaryLink>: the principle that conflict, friction, and challenge are not threats to the business model — they are the business model. The harder the environment pushes, the more valuable the consent layer becomes.
            </p>
          </div>
        </div>
      </section>

      {/* 5% REBATE SIDEBAR + MARKET */}
      <section className="section">
        <div className="container-narrow">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
            <div>
              <p className="eyebrow text-bone/50 mb-3 sm:mb-4">The market, April 2026</p>
              <h2 className="h-section mb-6 sm:mb-8 text-bone">
                The numbers are <span className="gradient-ink">already there</span>.
              </h2>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                {sizing.map((m, i) => (
                  <motion.div
                    key={m.k}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                    className="glass rounded-2xl p-5 sm:p-6 card"
                  >
                    <p className="font-display text-2xl sm:text-3xl font-bold text-bone tracking-tight mb-2">
                      {m.k}
                    </p>
                    <p className="body-lg text-bone/75 mb-3">{m.v}</p>
                    <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-teal2">
                      {m.src}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Rebate sidebar */}
            <div className="lg:mt-16">
              <div className="glass-strong rounded-2xl p-5 sm:p-6 border border-gold2/25 sticky top-24">
                <p className="eyebrow text-gold2/80 mb-3">DAO Revenue Rebate</p>
                <p className="font-display text-2xl font-bold text-gold2 tracking-tight mb-3">5%</p>
                <p className="body-lg text-bone/75 mb-3">
                  of all Davara SaaS, Network, and Enterprise revenue is converted to DASH and returned to the DAO treasury.
                </p>
                <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-bone/40">
                  For the life of the protocol · Capped at 100,000 DASH cumulative · Then re-negotiated
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 STREAMS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Five revenue streams</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Open core → <span className="gradient-ink">Sovereign tier</span>.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {streams.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 card relative"
              >
                {/* Corner loop glyph */}
                <div className="absolute top-4 right-4 opacity-40">
                  <LoopGlyph type={s.loopType} size="sm" />
                </div>
                <div className="flex items-center justify-between mb-3 gap-2 flex-wrap pr-10">
                  <span className={`tag ${
                    s.color === "gold" ? "tag-gold" :
                    s.color === "indigo" ? "tag-indigo" :
                    s.color === "rose" ? "tag-rose" : ""
                  }`}>{s.n} · {s.tier}</span>
                  <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-bone/55">
                    {s.price}
                  </span>
                </div>
                <p className="h-card text-bone mb-3">{s.title}</p>
                <p className="body-lg text-bone/75">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIT ECONOMICS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Unit economics — first-principles sketch</p>
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-gold2/10 blur-3xl pointer-events-none" />
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-teal2 mb-3">
                  Per action (T2)
                </p>
                <ul className="flex flex-col gap-2 body-lg text-bone/80">
                  <li>Model inference (4 signers): <span className="text-bone">~$0.05</span></li>
                  <li>Signer coordination + logs: <span className="text-bone">~$0.02</span></li>
                  <li>Blended COGS: <span className="text-bone">~$0.07 / action</span></li>
                  <li>Sold at: <span className="text-teal2 font-semibold">$0.50 / action</span></li>
                  <li>Gross margin: <span className="text-teal2 font-semibold">~86%</span></li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-gold2 mb-3">
                  Pro plan ($5K/mo)
                </p>
                <ul className="flex flex-col gap-2 body-lg text-bone/80">
                  <li>Included action budget: <span className="text-bone">~50k/mo</span></li>
                  <li>Blended COGS at cap: <span className="text-bone">~$500/mo</span></li>
                  <li>Gross margin: <span className="text-teal2 font-semibold">~90%</span></li>
                  <li>Typical enterprise LTV: <span className="text-bone">~24 months</span></li>
                  <li>LTV:CAC target: <span className="text-teal2 font-semibold">≥ 5:1</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GTM */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Go-to-market sequence</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Wedge → Expand → <span className="gradient-ink">Platform</span>.
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01 · Wedge",
                t: "DAO treasuries running agentic AI",
                b: "~$10B AUM under AI-assisted management by Q4 2026. They already understand multisig. Early-adopter shaped. Open-source core + Signer Cloud fits natively.",
                color: "teal",
              },
              {
                n: "02 · Expand",
                t: "Fintech + regulated AI",
                b: "Health, legal, compliance, trading. EU AI Act enforcement (Aug 2026) creates forced demand. Compliance Package becomes the land-and-expand motion.",
                color: "gold",
              },
              {
                n: "03 · Platform",
                t: "Frontier AI labs themselves",
                b: "Every AGI lab eventually needs a pre-deployment 'red-team quorum' for their next frontier model. The Davara Audit network becomes that primitive. Consortium-owned, open-governed.",
                color: "indigo",
              },
            ].map((g, i) => (
              <motion.div
                key={g.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease, delay: i * 0.07 }}
                className="glass rounded-2xl p-5 sm:p-7 card"
              >
                <span className={`tag ${
                  g.color === "gold" ? "tag-gold" :
                  g.color === "indigo" ? "tag-indigo" : ""
                } mb-3`}>{g.n}</span>
                <p className="h-card text-bone mt-3 mb-3">{g.t}</p>
                <p className="body-lg text-bone/75">{g.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo2/25 blur-3xl pointer-events-none" />
            <p className="eyebrow text-teal2/80 mb-4 sm:mb-5">Why Davara</p>
            <p className="font-display text-lg sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-bone max-w-4xl">
              The frontier labs cannot credibly sell an oversight product that polices{" "}
              <em className="italic">themselves</em>. Regulators can&rsquo;t build it either — they
              write policy, not runtime systems. A neutral, open, diverse-quorum protocol{" "}
              <span className="gradient-ink">must come from outside</span> — built adversarially
              by people who will actually use it. That is Davara.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/protocol" className="btn btn-teal">See the architecture →</Link>
              <Link href="/manifesto" className="btn btn-ghost">Read the manifesto</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
