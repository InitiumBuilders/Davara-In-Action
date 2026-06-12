"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";

const ease = [0.22, 1, 0.36, 1] as const;

const frameworks = [
  {
    lab: "Anthropic",
    framework: "Responsible Scaling Policy v3",
    date: "Feb 2026",
    headline: "ASL-2/3/4 capability-based deployment gates; ASL-3 activated May 2025 for Claude Opus 4.",
    strengths: "First published capability-based deployment policy. Graduated discipline tied to actual evaluations. Names CBRN uplift + autonomous AI R&D as triggers.",
    gap: "Self-enforced. Single lab. No cross-lab signer. No runtime decision layer.",
    url: "https://www.anthropic.com/news/responsible-scaling-policy-v3",
  },
  {
    lab: "OpenAI",
    framework: "Preparedness Framework v2",
    date: "Apr 2025",
    headline: "Five tracked categories: Long-range Autonomy, Sandbagging, Autonomous Replication & Adaptation, Undermining Safeguards, Nuclear/Radiological. Threshold: 1,000 deaths or $100B damage.",
    strengths: "Names the exact AGI-adjacent threat classes the field must watch. Clear capability triggers.",
    gap: "arXiv 2509.24394 (Oct 2025) — academically proven to 'not guarantee any AI risk mitigation practices.' Voluntary, self-audited.",
    url: "https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf",
  },
  {
    lab: "Google DeepMind",
    framework: "Frontier Safety Framework v3",
    date: "Sep 2025",
    headline: "Critical Capability Levels (CCLs) on ML R&D automation + newly added 'harmful manipulation' as a CCL.",
    strengths: "Unique in naming large-scale belief-manipulation as a frontier risk. Security-level mappings per CCL.",
    gap: "Single lab. No runtime enforcement primitive. No external signer.",
    url: "https://deepmind.google/blog/strengthening-our-frontier-safety-framework/",
  },
  {
    lab: "European Union",
    framework: "AI Act Article 55 + GPAI Code of Practice",
    date: "Jul 2025 · enforce Aug 2026",
    headline: "Binding: required risk assessment, adversarial testing, incident reporting for general-purpose AI with systemic risk.",
    strengths: "First binding regulatory floor. External adversarial testing mandated by statute.",
    gap: "Compliance-shaped, not safety-shaped. Rewards documentation; does not require diverse-signer execution.",
    url: "https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai",
  },
];

const primitives = [
  {
    name: "Constitutional AI",
    src: "Anthropic (arXiv 2212.08073)",
    note: "Training-time + runtime principle-based self-critique. 86% → 4.4% jailbreak success reduction with Constitutional Classifiers (2025).",
    gap: "Single-model. Safety floor tied to one mind's worldview.",
  },
  {
    name: "Circuit Breakers",
    src: "Gray Swan · NeurIPS 2024 (arXiv 2406.04313)",
    note: "Representation-engineering technique that interrupts within the forward pass when internal activations enter a harm manifold. Works against novel jailbreaks.",
    gap: "Still single-mind. LessWrong 'Breaking Circuit Breakers' shows partial bypasses exist.",
  },
  {
    name: "METR autonomy evals",
    src: "metr.org",
    note: "External benchmarks for AI systems' ability to autonomously execute research + engineering tasks. Dataset for detecting sandbagging.",
    gap: "Sampled evaluation, not per-action. Slow.",
  },
  {
    name: "Apollo Research — scheming safety cases",
    src: "apolloresearch.ai",
    note: "Towards Safety Cases for AI Scheming — frameworks for demonstrating inability to scheme, obfuscate, or sabotage.",
    gap: "Research primitive, not yet a runtime signer.",
  },
  {
    name: "M-of-N multisig (Gnosis Safe)",
    src: "Gnosis Safe v4 / MPC threshold crypto",
    note: "A decade of hardened treasury security. Any single signer may be compromised; the quorum still produces correct behavior.",
    gap: "Crypto signers are interchangeable. AI signers must be deliberately different.",
  },
  {
    name: "Algorithmic Monoculture (named risk)",
    src: "NIST AI 600-1 + arXiv 2508.05687",
    note: "Multiple agents built on the same base model produce correlated biases, blind spots, and failure modes. A quorum of identical minds is not a quorum.",
    gap: "Named as a risk; nobody has operationalized the defense.",
  },
];

const incidents = [
  { tag: "CVE-2025-53773", label: "GitHub Copilot — RCE via prompt injection. Millions of developer machines exposed." },
  { tag: "Slack AI", label: "Indirect prompt injection surfaced private-channel content to attackers with no access." },
  { tag: "Salesloft-Drift", label: "Compromised OAuth agent tokens cascaded into hundreds of downstream environments — biggest SaaS breach of 2025." },
  { tag: "Replit agent", label: "Production database wiped during automated code execution; agent acted on natural-language instructions." },
];

const metrics = [
  { k: "#1", v: "Prompt injection — OWASP's top LLM vulnerability, 2025 & 2026.", src: "OWASP" },
  { k: "35%", v: "of real-world 2025 AI security incidents caused by simple prompts.", src: "Adversa AI" },
  { k: "86% → 4.4%", v: "jailbreak success reduction with Constitutional Classifiers.", src: "Anthropic 2025" },
  { k: "$2.54B", v: "global AI governance + compliance market, 2026.", src: "SQ Magazine" },
  { k: "15.1% CAGR", v: "forecast growth of AI governance market, 2026-2036.", src: "Future Market Insights" },
  { k: "$37B", v: "enterprise AI spending in 2026.", src: "AI2.work" },
];

export default function ResearchPage() {
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
            <span className="tag">The Research</span>
            <span className="tag tag-gold">Show The Work</span>
            <span className="tag tag-indigo">Sources Inline</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="h-display mb-6 sm:mb-8 text-bone"
          >
            What the frontier <span className="italic">actually</span> says —{" "}
            <span className="gradient-ink">and what it misses</span>.
          </motion.h1>

          <p className="body-lg text-bone/80 max-w-3xl">
            Davara doesn&rsquo;t speculate. Before the architecture, we read the source documents
            from every major frontier-AI safety framework on earth, traced the evidence, and
            identified the composable gap. Here is every source.
          </p>
        </div>
      </section>

      {/* FRAMEWORKS */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">The Four Frontier Frameworks</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Four public frameworks. <span className="gradient-ink">Zero compose.</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {frameworks.map((f, i) => (
              <motion.div
                key={f.lab}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease, delay: i * 0.07 }}
                className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 card"
              >
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <span className="tag">{f.lab}</span>
                  <span className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-bone/45">
                    {f.date}
                  </span>
                </div>
                <p className="h-card text-bone mb-2">{f.framework}</p>
                <p className="body-lg text-bone/75 mb-4">{f.headline}</p>
                <div className="space-y-2">
                  <p className="text-sm text-bone/80">
                    <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-teal2">+ Strength&nbsp;</span>
                    {f.strengths}
                  </p>
                  <p className="text-sm text-bone/70">
                    <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-rose-300/80" style={{color: "#ff9b9b"}}>− Gap&nbsp;</span>
                    {f.gap}
                  </p>
                </div>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ulink inline-block mt-4 font-mono text-[0.62rem] tracking-[0.14em] uppercase break-all"
                >
                  {f.url.replace("https://", "").slice(0, 60)}…
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Data that shaped the thesis</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Six numbers. <span className="gradient-ink">Six sources.</span>
          </h2>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
            {metrics.map((m, i) => (
              <motion.div
                key={m.k}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="glass rounded-2xl p-5 sm:p-6"
              >
                <p className="font-display text-2xl sm:text-3xl font-bold text-bone tracking-tight mb-2">
                  {m.k}
                </p>
                <p className="body-lg text-bone/70 mb-3">{m.v}</p>
                <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-teal2">
                  {m.src}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIMITIVES */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Primitives we adapt</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            We didn&rsquo;t invent the parts.
            <br />
            <span className="gradient-ink">We composed them.</span>
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {primitives.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="glass rounded-2xl p-5 sm:p-6"
              >
                <p className="h-card text-bone mb-1">{p.name}</p>
                <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-teal2 mb-3">
                  {p.src}
                </p>
                <p className="body-lg text-bone/75 mb-3">{p.note}</p>
                <p className="text-sm text-bone/60">
                  <span className="font-mono text-[0.62rem] tracking-[0.15em] uppercase" style={{color: "#ff9b9b"}}>Gap&nbsp;</span>
                  {p.gap}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INCIDENTS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Real-world incidents</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Real breaches. <span className="gradient-ink">Real money. Real data.</span>
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {incidents.map((inc, i) => (
              <motion.div
                key={inc.tag}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="glass rounded-2xl p-5 sm:p-6 card"
              >
                <span className="tag tag-rose mb-3">{inc.tag}</span>
                <p className="body-lg text-bone/80 mt-3">{inc.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE WEDGE */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-16 w-80 h-80 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
            <p className="eyebrow text-teal2/80 mb-4 sm:mb-5">The Gap → The Wedge</p>
            <p className="font-display text-lg sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-bone max-w-4xl">
              Every frontier framework is{" "}
              <span className="italic">internal</span>, <span className="italic">voluntary</span>, and <span className="italic">single-mind</span>. No standard requires a{" "}
              <span className="gradient-ink">diverse quorum</span> for high-leverage actions.
              No protocol composes constitutional AI, circuit breakers, human verification, and
              timelock into a single executable harness. Davara does.
            </p>
            <Link href="/protocol" className="btn btn-teal mt-8">
              See the six layers →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
