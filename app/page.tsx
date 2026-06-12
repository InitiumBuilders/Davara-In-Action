"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import StewardshipBadge from "@/components/StewardshipBadge";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const reduced = useReducedMotion();
  const fade = reduced ? {} : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease } };
  const fadeIn = (d = 0) => reduced ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.75, ease, delay: d } };
  const fadeView = (d = 0) => reduced ? {} : { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.55, ease, delay: d } };

  return (
    <>
      <Backdrop />
      <Nav />

      {/* ALERT RIBBON — wraps cleanly at 360px */}
      <motion.div
        {...(reduced ? {} : { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease } })}
        className="fixed top-[52px] sm:top-[56px] inset-x-0 z-40 glass border-b border-teal2/15"
      >
        <div className="container-narrow px-4 sm:px-5 py-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <p className="font-mono text-[0.55rem] sm:text-[0.62rem] tracking-[0.12em] uppercase text-teal2/90 break-words min-w-0">
            v4 · Antifragile · DAO-stewarded · Council-gated · davara.dash
          </p>
          <Link href="/access" className="font-mono text-[0.55rem] sm:text-[0.62rem] tracking-[0.12em] uppercase text-gold2/80 hover:text-gold2 transition-colors shrink-0 min-h-[44px] flex items-center">
            Access →
          </Link>
        </div>
      </motion.div>

      {/* HERO */}
      <section className="section !pt-40 sm:!pt-48 md:!pt-56">
        <div className="container-narrow">
          <motion.div
            {...fade}
            className="flex flex-wrap gap-2 mb-6 sm:mb-8"
          >
            <span className="tag">Case Study 001 · v4</span>
            <span className="tag tag-gold">Dash-Stewarded</span>
            <span className="tag tag-indigo">Antifragile</span>
          </motion.div>

          <motion.h1
            {...fadeIn(0.05)}
            className="h-display mb-5 sm:mb-6 gradient-ink-drift"
          >
            A <span className="gradient-ink">consent harness</span> for high-leverage AI & AGI.
          </motion.h1>

          <motion.p
            {...fadeIn(0.12)}
            className="body-lg text-bone/70 max-w-3xl"
          >
            Operated by MotusMoves. Stewarded by the Dash DAO. Antifragile by design.
          </motion.p>

          <motion.div
            {...(reduced ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.2 } })}
            className="mt-4 mb-2"
          >
            <StewardshipBadge />
          </motion.div>

          <motion.p
            {...fadeIn(0.22)}
            className="body-lg max-w-3xl text-bone/85 mt-4"
          >
            You cannot run a high-leverage AI the way you run a laptop. A stolen key, a prompt injection, a correlated model blind spot — game over at machine speed. We propose a{" "}
            <span className="text-bone">seven-tier, Dash-native protocol</span> that requires a diverse,
            deliberately divergent quorum — human and machine — for every consequential action.
          </motion.p>

          <motion.p
            {...fadeIn(0.28)}
            className="body-lg max-w-3xl text-bone/60 mt-4"
          >
            Davara EI&rsquo;s Case Study 001 — the research, the architecture, the business
            model, and the manifesto for <em className="text-teal2 not-italic font-semibold">
            Emergent Intelligence in the Emergent Age</em>.
          </motion.p>

          <motion.div
            {...fadeIn(0.35)}
            className="mt-8 sm:mt-10 flex flex-col gap-3"
          >
            <div className="flex flex-wrap gap-3">
              <Link href="/problem" className="btn btn-teal">Problem →</Link>
              <Link href="/protocol" className="btn btn-ghost">Protocol</Link>
              <Link href="/fund" className="btn btn-ghost">Fund this</Link>
              <Link href="/summary" className="btn btn-ghost">Read in 60s</Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <Link href="/status" className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-teal2/70 hover:text-teal2 transition-colors">
                View build status →
              </Link>
              <Link href="/team" className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-gold2/70 hover:text-gold2 transition-colors">
                Meet the Emergent →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
            <p className="eyebrow text-teal2/80 mb-4 sm:mb-5">Mission</p>
            <p className="font-display text-xl sm:text-2xl md:text-4xl font-bold leading-snug tracking-tight text-bone max-w-4xl">
              We build <span className="gradient-ink">consent infrastructure</span> for
              intelligence itself — so that as AI systems gain power, they gain it{" "}
              <span className="italic">with</span> us, not{" "}
              <span className="italic">from</span> us.
            </p>
            <div className="hairline my-8" />
            <p className="body-lg text-bone/70 max-w-3xl">
              Every high-leverage action should require a <em>chorus</em> of different minds — not a lone agent. That chorus should include humans when judgment changes outcome, dissenting machines when it doesn&rsquo;t, and a legibility layer so humans can actually understand what they sign.
            </p>
          </div>
        </div>
      </section>

      {/* HEADLINE NUMBERS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-5 sm:mb-6">The 2025–26 record</p>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {[
              { k: "#1", label: "Prompt injection — OWASP's top LLM vulnerability.", tag: "OWASP 2025-26" },
              { k: "35%", label: "of real-world AI security incidents in 2025 were caused by simple prompts.", tag: "Adversa AI" },
              { k: "may never", label: "be fixed — UK NCSC's assessment of prompt injection, Dec 2025.", tag: "NCSC" },
              { k: "4", label: "frontier safety frameworks (Anthropic, OpenAI, DeepMind, EU). Zero compose.", tag: "Field scan" },
              { k: "$100B", label: "single-incident damage threshold OpenAI uses to define catastrophic risk.", tag: "OpenAI PF v2" },
              { k: "Aug 2026", label: "EU AI Act enforcement begins for GPAI with systemic risk.", tag: "EU AI Act Art. 55" },
            ].map((s, i) => (
              <motion.div
                key={s.k}
                {...fadeView(i * 0.06)}
                className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 card"
              >
                <span className="tag tag-rose mb-4">{s.tag}</span>
                <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-bone mt-3">
                  {s.k}
                </p>
                <p className="mt-3 text-bone/70 body-lg">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIX LAYERS PREVIEW */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">The architecture</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Six layers. <span className="gradient-ink">One consent harness.</span>
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              ["L1", "Action Contract", "Every high-leverage action becomes a signable structured proposal, not a prompt completion."],
              ["L2", "Human Intervention Tiers", "T0 → T3. Human approval scales with consequence, not convenience."],
              ["L3", "Constitution & Divergent Quorum", "A vector threshold across model family, mechanism, training data, and operator."],
              ["L4", "Circuit Breakers & Evaluation", "Representation-engineering runtime interrupts + scheming-detection probes."],
              ["L5", "Timelock, Rate Limit, Recovery", "Irreversibility gets its own tax. Kill-switch drills on a schedule."],
              ["L6", "Legibility UX", "Plain-language diffs. Dissent views. Signing-fatigue guards."],
            ].map(([n, t, b], i) => (
              <motion.div
                key={n}
                {...fadeView(i * 0.05)}
                className="glass rounded-2xl p-5 sm:p-6 card"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[0.68rem] tracking-[0.18em] text-teal2">{n}</span>
                  <span className="h-card text-bone">{t}</span>
                </div>
                <p className="body-lg text-bone/70">{b}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/protocol" className="btn btn-teal">Walk the six layers →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
