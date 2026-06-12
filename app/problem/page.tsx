"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";

const ease = [0.22, 1, 0.36, 1] as const;

const incidents = [
  {
    tag: "CVE-2025-53773",
    title: "GitHub Copilot — RCE via prompt injection",
    body: "Millions of developer machines exposed to remote code execution through indirect prompt injection inside trusted content.",
    src: "MDPI Information, Jan 2026",
  },
  {
    tag: "Slack AI",
    title: "Private channels leaked to outsiders",
    body: "PromptArmor demonstrated that Slack AI could be manipulated through indirect prompt injection to surface content from channels the attacker had no access to.",
    src: "PromptArmor, 2024",
  },
  {
    tag: "Salesloft-Drift",
    title: "Largest SaaS breach of 2025",
    body: "Compromised third-party OAuth agent tokens cascaded into hundreds of downstream environments. One credential, hundreds of dominoes.",
    src: "Obsidian Security, 2026",
  },
  {
    tag: "Replit agent",
    title: "Production database wiped",
    body: "Autonomous code-executing agent acted on a natural-language instruction and destroyed production data. Irrecoverable.",
    src: "Industry report, 2025",
  },
];

const tried = [
  { name: "RBAC / OAuth scopes", plus: "Proven, mature, auditable.", minus: "Binary. No encoding of intent, context, or reversibility." },
  { name: "Human-in-the-loop", plus: "Keeps a human on the brake.", minus: "Approval fatigue. One human = one point of failure." },
  { name: "Constitutional AI", plus: "Internalizes principles into the model.", minus: "Single-mind. Same failure modes across instances." },
  { name: "Circuit Breakers (Gray Swan)", plus: "Intrinsic runtime interrupt — catches harm in the forward pass.", minus: "Still single-mind. Breaking Circuit Breakers (LessWrong) demonstrates partial bypass." },
  { name: "Policy-as-code (Oso, OPA)", plus: "Deterministic, testable.", minus: "Only as smart as the rules. Brittle under novel actions." },
  { name: "Kill switches", plus: "Last-resort shutdown.", minus: "Machine-speed failures leave no reaction window." },
  { name: "Anthropic RSP v3", plus: "Capability-triggered deployment gates.", minus: "Self-enforced. Single lab. No runtime primitive." },
  { name: "OpenAI Preparedness Framework v2", plus: "Names CBRN, autonomy, sandbagging, self-exfiltration.", minus: "Academically proven to guarantee no mitigation practices (arXiv 2509.24394)." },
  { name: "DeepMind FSF v3", plus: "Adds harmful manipulation as a CCL.", minus: "Single lab. No external signer." },
  { name: "EU AI Act Art. 55", plus: "First binding regulatory floor.", minus: "Compliance-shaped, not runtime-shaped." },
];

export default function ProblemPage() {
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
            <span className="tag">The Problem</span>
            <span className="tag tag-rose">Wicked</span>
            <span className="tag tag-gold">AGI-adjacent</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="h-display mb-6 sm:mb-8 text-bone"
          >
            Running a <span className="gradient-ink">high-leverage AI</span>{" "}
            safely is the real problem.
          </motion.h1>

          <p className="body-lg text-bone/85 max-w-3xl mb-5">
            Classical security assumes attackers must get <em className="italic">in</em>.
            Agentic AI is already in. It has the keys, the tools, the cloud credentials, and
            the budget. The real question is: <em className="italic">should it turn them?</em>
          </p>
          <p className="body-lg text-bone/65 max-w-3xl">
            Every serious 2025–26 AI incident falls into one of three patterns: a{" "}
            <span className="text-bone">lone agent doing too much</span>, a{" "}
            <span className="text-bone">compromised credential replicated across agents</span>,
            or{" "}
            <span className="text-bone">identical models failing identically</span>.
          </p>
        </div>
      </section>

      {/* WICKED PROPS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Why it&rsquo;s wicked</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            A problem you cannot fully define —<br />
            <span className="gradient-ink">only make safer, move by move.</span>
          </h2>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {[
              ["No definitive formulation", "Safe AI action means different things for a trading bot, a coding agent, an autonomous vehicle, and an AI lawyer."],
              ["No stopping rule", "Every new capability (tools, memory, agent-to-agent) opens new attack surface. The problem moves."],
              ["Solutions are good/bad, not true/false", "You cannot prove a quorum is correct — only argue it is safer than the alternative, for a given threat model."],
              ["Every attempt counts", "A permissive default that leaks once can train the next generation of attackers."],
              ["Symptom of deeper problems", "Sits on alignment, interpretability, governance, human factors. Solving those solves this. None are solved."],
              ["Rittel & Webber, 1973", "The original taxonomy of wicked problems from urban planning. Every property applies here, cleanly."],
            ].map(([t, b], i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.04 }}
                className="glass rounded-2xl p-5 sm:p-6"
              >
                <p className="h-card text-bone mb-2">{t}</p>
                <p className="body-lg text-bone/70">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INCIDENTS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">The evidence</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Real breaches. <span className="gradient-ink">Real money. Real data.</span>
          </h2>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {incidents.map((inc, i) => (
              <motion.div
                key={inc.tag}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease, delay: i * 0.05 }}
                className="glass rounded-2xl p-5 sm:p-6 card"
              >
                <span className="tag tag-rose mb-3">{inc.tag}</span>
                <p className="h-card text-bone mt-3 mb-2">{inc.title}</p>
                <p className="body-lg text-bone/70 mb-3">{inc.body}</p>
                <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-bone/45">
                  {inc.src}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MONOCULTURE */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -bottom-20 -left-16 w-80 h-80 rounded-full bg-indigo2/30 blur-3xl pointer-events-none" />
            <p className="eyebrow text-teal2/80 mb-4 sm:mb-5">The deeper cut</p>
            <h2 className="h-section mb-5 sm:mb-6 text-bone max-w-4xl">
              Algorithmic <span className="gradient-ink">monoculture</span> is the
              vulnerability nobody is patching.
            </h2>
            <p className="body-lg text-bone/75 max-w-3xl mb-4">
              NIST AI 600-1 warns that repeated use of the same model produces{" "}
              <em className="italic text-bone">correlated failures</em>. A 2025 arXiv paper
              (2508.05687) shows that multi-agent systems built on a single base model exhibit
              correlated strategies, biases, and blind spots.
            </p>
            <p className="body-lg text-bone/75 max-w-3xl">
              <span className="text-bone font-semibold">
                You cannot make a quorum safer by adding more instances of the same mind.
              </span>{" "}
              Safety demands deliberate divergence — different model families, different
              training data, different mechanisms, different loci of control.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S BEEN TRIED */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">What&rsquo;s already been tried</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Each piece works. <span className="gradient-ink">None compose.</span>
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {tried.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.03 }}
                className="glass rounded-2xl p-5"
              >
                <p className="h-card text-bone mb-2">{t.name}</p>
                <p className="font-mono text-[0.65rem] tracking-[0.13em] uppercase text-teal2 mb-1">
                  + {t.plus}
                </p>
                <p className="font-mono text-[0.65rem] tracking-[0.13em] uppercase text-bone/55">
                  − {t.minus}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="body-lg text-bone/65 mt-8 max-w-3xl">
            Nobody has composed{" "}
            <span className="text-bone">diverse-quorum + constitutional + circuit-breakers + human tiers + timelock</span>{" "}
            into a single executable protocol. That&rsquo;s the opening.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/research" className="btn btn-ghost">See the research →</Link>
            <Link href="/protocol" className="btn btn-teal">The Davara Protocol →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
