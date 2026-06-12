"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import ScrollProgress from "@/components/ScrollProgress";
import FrameworkCard from "@/components/FrameworkCard";
import GlossaryLink from "@/components/GlossaryLink";

const ease = [0.22, 1, 0.36, 1] as const;

const frameworks = [
  { company: "Anthropic", framework: "Responsible Scaling Policy (RSP)", summary: "Capability-triggered deployment gates. ASL-2/3/4. First published scaling policy.", url: "https://www.anthropic.com/news/responsible-scaling-policy-v3" },
  { company: "OpenAI", framework: "Preparedness Framework v2", summary: "Five tracked risk categories. $100B catastrophic-risk threshold. Safety Advisory Group.", url: "https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf" },
  { company: "Google DeepMind", framework: "Frontier Safety Framework", summary: "Critical Capability Levels. Three bets: amplified oversight, safety evals, mechanistic interpretability.", url: "https://deepmind.google/blog/strengthening-our-frontier-safety-framework/" },
  { company: "Meta", framework: "FAIR Responsible AI", summary: "Open-weights approach. Llama safety guardrails + responsible use guide.", url: "https://ai.meta.com/responsible-ai/" },
  { company: "xAI", framework: "Risk Management Framework", summary: "Risk-based approach to Grok deployments. Published post-METR report.", url: "https://x.ai" },
  { company: "Microsoft", framework: "Responsible AI Standard", summary: "Six principles: fairness, reliability, safety, privacy, inclusiveness, transparency.", url: "https://www.microsoft.com/en-us/ai/responsible-ai" },
  { company: "Amazon", framework: "Responsible AI Policy", summary: "AWS-native safety tooling. Bedrock guardrails + model evaluation pipelines.", url: "https://aws.amazon.com/machine-learning/responsible-ai/" },
  { company: "Cohere", framework: "Safety Framework", summary: "Enterprise-focused. Usage policies + model cards for Command series.", url: "https://cohere.com" },
  { company: "G42", framework: "AI Governance", summary: "UAE-based. Sovereign AI focus with governance oversight board.", url: "https://g42.ai" },
  { company: "Naver", framework: "AI Ethics Principles", summary: "South Korea's largest tech firm. Seven ethical AI principles.", url: "https://www.navercorp.com" },
  { company: "Magic", framework: "Safety Policy", summary: "Long-context code generation. Published safety commitments post-frontier designation.", url: "https://magic.dev" },
  { company: "Zhipu", framework: "AI Safety Commitment", summary: "China's leading foundation-model lab. Published safety pledge per METR common-elements framework.", url: "https://zhipuai.cn" },
];

const commonElements = [
  { name: "Capability evaluations", desc: "Pre-deployment testing for dangerous capabilities (CBRN, autonomy, manipulation)." },
  { name: "Mitigations", desc: "Deployment constraints triggered by evaluation findings." },
  { name: "Deployment commitments", desc: "Graduated release policies tied to capability thresholds." },
  { name: "Governance", desc: "Internal oversight boards, safety teams, escalation paths." },
  { name: "Transparency", desc: "Public reporting on safety evaluations, model cards, incident disclosure." },
];

const legal = [
  { tag: "EU AI Act Art. 55", date: "Aug 2026", body: "Adversarial testing legally required for GPAI with systemic risk. First binding regulatory floor for frontier AI.", url: "https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai" },
  { tag: "NIST AI RMF 2.0", date: "2024–26", body: "Risk Management Framework. Warns explicitly about algorithmic monoculture. Maps AI risk across govern, map, measure, manage.", url: "https://www.nist.gov/artificial-intelligence/ai-risk-management-framework" },
  { tag: "ISO/IEC 42001", date: "2023–26", body: "International standard for AI management systems. Certification pathway for organizations deploying AI.", url: "https://www.iso.org/standard/81230.html" },
  { tag: "UK AISI + US AISI", date: "2025–26", body: "Pre-deployment external evaluations. Anthropic shared Claude 3.5 Sonnet with UK AISI + METR pre-launch.", url: "https://www.aisi.gov.uk" },
];

export default function FrontierPage() {
  return (
    <>
      <ScrollProgress />
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
            <span className="tag">Frontier Landscape</span>
            <span className="tag tag-gold">12 Frameworks</span>
            <span className="tag tag-indigo">METR · Dec 2025</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="h-display mb-6 sm:mb-8 text-bone"
          >
            Who&rsquo;s building AGI — and <span className="gradient-ink">what they promised</span>.
          </motion.h1>

          <p className="body-lg text-bone/80 max-w-3xl">
            Twelve companies have published frontier AI safety frameworks. METR mapped the common elements.<sup className="text-teal2/60 text-[0.6rem]">[1]</sup> The International AI Safety Report 2026 confirmed the count.<sup className="text-teal2/60 text-[0.6rem]">[2]</sup> The FLI AI Safety Index 2025 grades each lab — none score perfectly.<sup className="text-teal2/60 text-[0.6rem]">[3]</sup> Every framework is internal. None compose across organizations. That is where Davara fits: the <GlossaryLink term="divergence">cross-org consent layer</GlossaryLink> none of them built.
          </p>
          <div className="flex flex-col gap-1 mt-4">
            <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-bone/35">
              [1] METR — Common Elements of Frontier AI Safety Policies (Dec 2025) ·{" "}
              <a href="https://metr.org/common-elements" target="_blank" rel="noreferrer" className="ulink">metr.org</a>
            </p>
            <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-bone/35">
              [2] International AI Safety Report 2026 ·{" "}
              <a href="https://www.gov.uk/government/publications/international-ai-safety-report-2025" target="_blank" rel="noreferrer" className="ulink">gov.uk</a>
            </p>
            <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-bone/35">
              [3] Future of Life Institute — AI Safety Index 2025 ·{" "}
              <a href="https://futureoflife.org/project/ai-safety-index/" target="_blank" rel="noreferrer" className="ulink">futureoflife.org</a>
            </p>
          </div>
        </div>
      </section>

      {/* THE 12 FRAMEWORKS */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-5 sm:mb-6">The 12 published frameworks</p>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((f, i) => (
              <FrameworkCard key={f.company} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THEY SHARE */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">What they all share</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Five common elements. <span className="gradient-ink">All internal.</span>
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {commonElements.map((el, i) => (
              <motion.div
                key={el.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="glass rounded-2xl p-5"
              >
                <p className="h-card text-bone mb-2">{el.name}</p>
                <p className="body-lg text-bone/70">{el.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT NONE SOLVE */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
            <p className="eyebrow text-teal2/80 mb-4 sm:mb-5">The gap</p>
            <h2 className="h-section mb-5 text-bone">
              What none of them solve: <span className="gradient-ink">cross-org composition</span>.
            </h2>
            <p className="body-lg text-bone/80 max-w-3xl mb-6">
              Each framework governs one lab, one model lineage, one chain of command. When a high-leverage AI action spans multiple organizations, no framework has jurisdiction. There is no bridge.
            </p>

            {/* Silo diagram */}
            <div className="glass rounded-xl p-4 sm:p-6">
              <svg viewBox="0 0 800 200" className="w-full h-auto" style={{ maxHeight: "200px" }}>
                {/* 12 silos */}
                {frameworks.slice(0, 12).map((f, i) => {
                  const x = 40 + i * 62;
                  return (
                    <g key={f.company}>
                      <rect x={x} y="30" width="48" height="100" rx="6" fill="none" stroke="rgba(233,230,223,0.15)" strokeWidth="1" />
                      <text x={x + 24} y="150" textAnchor="middle" fill="rgba(233,230,223,0.35)" fontSize="7" fontFamily="var(--font-mono)">
                        {f.company.slice(0, 4).toUpperCase()}
                      </text>
                    </g>
                  );
                })}
                {/* Bridge label */}
                <line x1="40" y1="180" x2="780" y2="180" stroke="#3be8c5" strokeWidth="2" strokeDasharray="6 4" />
                <text x="400" y="195" textAnchor="middle" fill="#3be8c5" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="2">
                  DAVARA — THE MISSING BRIDGE
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL FORCING FUNCTION */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">The legal forcing function</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Regulation is <span className="gradient-ink">arriving</span>.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {legal.map((l, i) => (
              <motion.div
                key={l.tag}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="glass rounded-2xl p-5 sm:p-7 card"
              >
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <span className="tag">{l.tag}</span>
                  <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-bone/45">{l.date}</span>
                </div>
                <p className="body-lg text-bone/80 mb-3">{l.body}</p>
                <a href={l.url} target="_blank" rel="noreferrer" className="ulink font-mono text-[0.6rem] tracking-[0.12em] uppercase">
                  Source →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FLI SAFETY INDEX */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -bottom-20 -left-16 w-80 h-80 rounded-full bg-gold2/10 blur-3xl pointer-events-none" />
            <p className="eyebrow text-gold2/80 mb-4 sm:mb-5">The score everyone&rsquo;s watching</p>
            <h2 className="h-section mb-5 text-bone">
              Future of Life <span className="gradient-ink">AI Safety Index</span>.
            </h2>
            <p className="body-lg text-bone/80 max-w-3xl mb-5">
              The canonical scorecard for frontier AI safety. Grades each lab on governance, transparency, safety culture, and external engagement. No lab scores perfectly. The gaps are the reason Davara exists.
            </p>
            <a
              href="https://futureoflife.org/project/ai-safety-index/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              View the 2025 Index →
            </a>
          </div>
        </div>
      </section>

      {/* WHERE WE FIT — closing diagram */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
            <p className="eyebrow text-teal2/80 mb-4 sm:mb-5">Where we fit</p>
            <h2 className="h-section mb-6 text-bone">
              12 silos. <span className="gradient-ink">One bridge.</span>
            </h2>
            <div className="glass rounded-xl p-4 sm:p-6 mb-6">
              <svg viewBox="0 0 800 220" className="w-full h-auto" style={{ maxHeight: "220px" }}>
                {/* 12 framework silos */}
                {frameworks.slice(0, 12).map((f, i) => {
                  const x = 40 + i * 62;
                  return (
                    <g key={f.company}>
                      <rect x={x} y="20" width="48" height="90" rx="6" fill="none" stroke="rgba(233,230,223,0.12)" strokeWidth="1" />
                      <text x={x + 24} y="130" textAnchor="middle" fill="rgba(233,230,223,0.3)" fontSize="7" fontFamily="var(--font-mono)">
                        {f.company.slice(0, 4).toUpperCase()}
                      </text>
                    </g>
                  );
                })}
                {/* Teal arc connecting them */}
                <path
                  d="M64 140 Q400 185 780 140"
                  fill="none"
                  stroke="#3be8c5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <text x="400" y="195" textAnchor="middle" fill="#3be8c5" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="2" fontWeight="600">
                  DAVARA: DASH-STEWARDED INTER-ORG CONSENT
                </text>
              </svg>
            </div>
            <p className="body-lg text-bone/70 max-w-3xl">
              Every framework above governs one lab. Davara is the teal arc — the <GlossaryLink term="quorum">cross-organization consent layer</GlossaryLink> that lets them compose. The first version is funded by the Dash DAO, operated by MotusMoves, and open to every lab willing to sign.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow flex flex-wrap gap-3">
          <Link href="/protocol" className="btn btn-teal">See our protocol →</Link>
          <Link href="/research" className="btn btn-ghost">The research</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
