"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import Glossary from "@/components/Glossary";
import LoopGlyph from "@/components/LoopGlyph";
import StewardshipBadge from "@/components/StewardshipBadge";

const ease = [0.22, 1, 0.36, 1] as const;

const loops = [
  { type: "R+" as const, caption: "Capability", mantra: "More capability, more risk, more need for consent." },
  { type: "B-" as const, caption: "Quorum", mantra: "More signers, more friction, fewer catastrophes." },
  { type: "R+" as const, caption: "Trust", mantra: "More transparent demos, more masternode confidence, more funding." },
  { type: "B-" as const, caption: "Monoculture", mantra: "More divergent signers, less correlated failure." },
  { type: "R+" as const, caption: "Stewardship", mantra: "More DAO ratification, more legitimacy, more adoption." },
];

const glossaryItems = [
  { term: "Quorum", definition: "The minimum set of approvals required for an action to proceed.", relevance: "Davara quorums span model families and operator orgs — not just copies of one mind." },
  { term: "Signer", definition: "An independent entity (human or AI) that reviews and votes on a proposed action.", relevance: "Signers must be deliberately divergent — different models, orgs, mechanisms." },
  { term: "Timelock", definition: "A mandatory delay between approval and execution.", relevance: "Irreversible actions get longer timelocks. Speed is earned, not assumed." },
  { term: "Monoculture", definition: "When many agents share the same base model, producing correlated failures.", relevance: "The core vulnerability Davara's divergent quorum is designed to break." },
  { term: "Antifragile", definition: "A system that gets stronger under stress, not just resilient.", relevance: "Davara's core property. Every probe, dissent, and audit strengthens the next version." },
];

export default function SummaryPage() {
  const reduced = useReducedMotion();
  const fadeIn = (d = 0) => reduced ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease, delay: d } };
  const fadeView = (d = 0) => reduced ? {} : { initial: { opacity: 0, y: 14 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.5, ease, delay: d } };

  return (
    <>
      <Backdrop />
      <Nav />

      {/* STEWARDSHIP + THESIS */}
      <section className="section !pt-32 sm:!pt-40 md:!pt-48">
        <div className="container-narrow">
          <motion.div {...(reduced ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } })} className="mb-6">
            <StewardshipBadge />
          </motion.div>

          <motion.div
            {...fadeIn()}
            className="glass-strong rounded-3xl px-5 py-8 sm:px-10 sm:py-14 relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
            <span className="tag mb-5">60-Second Read</span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-bone mt-4 max-w-4xl">
              Davara is a <span className="gradient-ink">multi-sig wallet</span> — for AI decisions instead of money.
            </h1>
            <p className="body-lg text-bone/60 max-w-3xl mt-4">
              m-of-n consent across deliberately divergent signers, including humans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY · HOW · WHO */}
      <section className="section">
        <div className="container-narrow grid gap-4 md:grid-cols-3">
          {[
            { label: "Why", body: "Every frontier AI lab has a private safety policy. None of them compose. Davara is the missing inter-org consent layer." },
            { label: "How", body: "Quorum across diverse signers. Timelocks. Council oversight. Stress-as-Signal." },
            { label: "Who", body: "Operated by MotusMoves. Stewarded by the Dash DAO. Access gated to masternode owners." },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              {...fadeView(i * 0.08)}
              className="glass rounded-2xl p-5 sm:p-7 card"
            >
              <p className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-teal2 mb-3">{card.label}</p>
              <p className="body-lg text-bone/80">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FIVE LOOPS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-5 sm:mb-6">Five loops that drive the protocol</p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
            {loops.map((l, i) => (
              <motion.div
                key={l.caption}
                {...fadeView(i * 0.06)}
                className="glass rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center"
              >
                <LoopGlyph type={l.type} size="lg" />
                <p className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-bone mt-3 mb-1">
                  {l.caption}
                </p>
                <p className="text-[0.75rem] text-bone/60 leading-relaxed">
                  {l.mantra}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MINI GLOSSARY */}
      <section className="section">
        <div className="container-narrow max-w-3xl">
          <div className="flex items-baseline justify-between mb-5">
            <p className="eyebrow text-bone/50">Five terms you need</p>
            <Link href="/systems" className="font-mono text-[0.55rem] tracking-[0.12em] uppercase text-teal2/60 hover:text-teal2 transition-colors">
              Full glossary →
            </Link>
          </div>
          <Glossary items={glossaryItems} />
        </div>
      </section>

      {/* PERSONAS — single-sentence each */}
      <section className="section">
        <div className="container-narrow grid gap-4 md:grid-cols-3">
          {[
            { who: "Lab Safety Lead", line: "Cross-vendor quorum so your safety case stops being single-org theater." },
            { who: "DAO Treasurer", line: "Multisig for AI decisions — same primitive you trust with money, higher stakes." },
            { who: "Masternode Owner", line: "First AI consent layer built on your infrastructure — and a Council seat if you qualify." },
          ].map((p, i) => (
            <motion.div
              key={p.who}
              {...fadeView(i * 0.07)}
              className="glass rounded-2xl p-5 sm:p-7"
            >
              <p className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-teal2 mb-2">{p.who}</p>
              <p className="body-lg text-bone/75">{p.line}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTAs */}
      <section className="section">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/protocol" className="btn btn-teal text-center justify-center">Read the protocol →</Link>
            <Link href="/dao" className="btn btn-ghost text-center justify-center">DAO proposal</Link>
            <Link href="/fund" className="btn btn-ghost text-center justify-center col-span-2 md:col-span-1">Fund this</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
