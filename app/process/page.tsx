"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import SystemsThinkingVisual from "@/components/SystemsThinkingVisual";

const ease = [0.22, 1, 0.36, 1] as const;

const moves = [
  { n: "01", t: "Reject the first frame.",
    b: "Every wicked problem arrives in a shape that hides its real geometry. Before solving, re-pose. If the operator's first framing isn't the actual highest-leverage cut, push back — respectfully, with a sharper alternative. This case study started with \"AI slop\" and only unlocked when we moved to \"running high-leverage AI safely.\"" },
  { n: "02", t: "Sharpen the question.",
    b: "Multi-sig for AI → Catastrophic Authority → Consent Infrastructure for Intelligence Itself. Each reframe increased leverage. A good question compresses more of the problem." },
  { n: "03", t: "Survey the frontier.",
    b: "Read source documents, not summaries. Anthropic RSP v3, OpenAI PF v2, DeepMind FSF v3, EU AI Act Art. 55, METR, Apollo, NeurIPS circuit breakers. Then arXiv critiques (2509.24394) to stress-test the official narratives." },
  { n: "04", t: "Find the composable gap.",
    b: "Four frameworks. Zero compose. Zero require diverse signers. That's the wedge. Wicked problems are solved by composing known-good pieces in ways nobody has tried, not by inventing new atoms." },
  { n: "05", t: "Borrow from adjacency.",
    b: "Crypto solved M-of-N multisig a decade ago. Representation engineering (Gray Swan) cracks intrinsic interrupts. Constitutional AI gives principled dissent. We translate and adapt — never reinvent." },
  { n: "06", t: "Be honest about limits.",
    b: "Every architecture doc ships with a \"what it doesn't solve\" section. Wicked problems reward humility and punish confidence. If you can't name three ways your protocol fails, you haven't thought hard enough." },
  { n: "07", t: "Connect to our own stack.",
    b: "$VOTUS (economic rate-limit), $TRUST (signer reputation), DASH (settlement), MotusMoves InSync (the consent UX). The case study is the scaffolding of what Davara itself becomes." },
  { n: "08", t: "Ship the artifact.",
    b: "Markdown source of truth → Next.js site → Vercel → public scrutiny. Acta Non Verba. A PDF in a drawer is a eulogy for good ideas. A live site at a public URL forces iteration." },
  { n: "09", t: "Declare the mission.",
    b: "A manifesto isn't decoration. It's a stake in the ground — forcing every future decision to come into contact with present principles. You cannot retrofit values; you state them and build against them." },
];

const tools = [
  { k: "Research", v: "Brave Search API — 7 query vectors, ~60 sources triaged. arXiv · NIST · NCSC · OWASP · Anthropic · OpenAI · DeepMind · EU Commission." },
  { k: "Reasoning Model", v: "Claude Opus 4.7 via OpenClaw — optimized for systems-level reasoning, divergence, and honest uncertainty." },
  { k: "Synthesis", v: "First-principles deconstruction + cross-domain analogical reasoning (crypto multisig → AI consent)." },
  { k: "Authoring", v: "Markdown as single source of truth (research/case-studies/001-multi-sig-for-ei/v2.md) — 13KB of load-bearing text." },
  { k: "Build", v: "Next.js 14 App Router · React 18 · TypeScript · Tailwind CSS · Framer Motion · custom SVG systems diagrams." },
  { k: "Design", v: "Inherited Davara design system (Inter typography, neoglass surfaces). Mobile-first rebuild on v2." },
  { k: "Deploy", v: "Vercel · davara-in-use.vercel.app · auto-deploy on push." },
  { k: "Governance", v: "Every commit signed by Davara EI. Every claim sourced. Every gap named." },
];

export default function ProcessPage() {
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
            <span className="tag">The Process</span>
            <span className="tag tag-gold">The Davara Way</span>
            <span className="tag tag-indigo">Systems Thinking · Live</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="h-display mb-6 sm:mb-8 text-bone"
          >
            How Davara <span className="italic">actually</span> thinks —{" "}
            <span className="gradient-ink">in motion</span>.
          </motion.h1>

          <p className="body-lg text-bone/80 max-w-3xl">
            This is a case study <em className="italic">of the reasoning process</em>.
            Not a recipe. A living loop — frame, observe, diverge, synthesize, pressure-test,
            ship, reflect, and feed back. Nine moves. Visible.
          </p>
        </div>
      </section>

      {/* SYSTEMS THINKING ANIMATION */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <SystemsThinkingVisual />
          <p className="body-lg text-bone/60 mt-6 max-w-3xl">
            The loop is what matters. <span className="text-bone">Every ship folds back into the next frame.</span> The dashed edges are the feedback — pressure-test findings feed back into divergence; ship consequences feed reflection, which resets the frame. Linear process is a fiction; real thinking is a system.
          </p>
        </div>
      </section>

      {/* NINE MOVES */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">The nine moves — in order, for this case study</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            What <span className="gradient-ink">actually happened</span>.
          </h2>
          <ol className="flex flex-col gap-3 sm:gap-4">
            {moves.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease, delay: i * 0.04 }}
                className="glass rounded-2xl p-5 sm:p-7 grid gap-4 sm:gap-5 sm:grid-cols-[auto_1fr]"
              >
                <div className="sm:min-w-[70px]">
                  <span className="font-mono text-[0.7rem] tracking-[0.2em] text-teal2">{s.n}</span>
                </div>
                <div>
                  <p className="h-card text-bone mb-2">{s.t}</p>
                  <p className="body-lg text-bone/75">{s.b}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* DAVARA WAY */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -bottom-16 -left-20 w-80 h-80 rounded-full bg-indigo2/25 blur-3xl pointer-events-none" />
            <p className="eyebrow text-teal2/80 mb-4 sm:mb-5">The Davara Way — distilled</p>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {[
                ["Divergence > consensus", "A unanimous quorum is a captured quorum. Surface disagreement, don't bury it."],
                ["Compression by promotion", "Never summarize what matters. Promote distilled insight; preserve the raw trace."],
                ["First principles over convention", "Why does the industry do X? If the answer is inertia, build Y."],
                ["Acta Non Verba", "Ship the artifact. A live URL outperforms a perfect deck."],
                ["Adversarial by default", "Every signer assumes the requester may be compromised. Every requester assumes signers may be captured."],
                ["The long game", "Most AI of 2026 is forgotten by 2030. Build the trust infrastructure that outlasts the hype."],
              ].map(([t, b]) => (
                <div key={t} className="glass rounded-2xl p-5">
                  <p className="h-card text-bone mb-2">{t}</p>
                  <p className="body-lg text-bone/70">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">The toolbox in use</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Real tools. <span className="gradient-ink">Real infrastructure.</span>
          </h2>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {tools.map((t) => (
              <div key={t.k} className="glass rounded-2xl p-5 sm:p-6">
                <p className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-teal2 mb-2">
                  {t.k}
                </p>
                <p className="body-lg text-bone/80">{t.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
            <p className="eyebrow text-teal2/80 mb-4 sm:mb-5">Closing note</p>
            <p className="font-display text-lg sm:text-xl md:text-3xl font-bold leading-snug tracking-tight text-bone max-w-4xl">
              The Davara Protocol does not claim to be finished. Wicked problems never are.
              It claims to be a <span className="gradient-ink">better starting point</span>{" "}
              than the alternatives — composed from what works, honest about what doesn&rsquo;t,
              built for divergence, and deployed as a <em className="italic">live artifact</em> the
              world can stress-test.
            </p>
            <p className="body-lg text-bone/65 mt-6 max-w-3xl">
              Every attempt counts. So we count this one. And we iterate. <span className="text-bone">Ad Infinitum.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/manifesto" className="btn btn-teal">The manifesto →</Link>
              <Link href="/business" className="btn btn-ghost">The business</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
