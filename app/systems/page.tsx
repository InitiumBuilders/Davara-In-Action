"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import SystemsThinkingVisual from "@/components/SystemsThinkingVisual";

const ease = [0.22, 1, 0.36, 1] as const;

const leveragePoints = [
  { n: "12", label: "Constants, parameters, numbers", hit: false },
  { n: "10", label: "The structure of material stocks and flows", hit: false },
  { n: "6", label: "The structure of information flows", hit: true },
  { n: "4", label: "The rules of the system (incentives, punishments, constraints)", hit: true },
  { n: "3", label: "The goals of the system", hit: true },
];

const glossaryItems = [
  { term: "Emergence", slug: "emergence", definition: "System-level behavior that no single component exhibits alone.", relevance: "Intelligence is emergent. Controlling it requires system-level intervention, not component tweaks." },
  { term: "Feedback", slug: "feedback", definition: "When a system's output loops back to influence its input.", relevance: "Davara's signer network is a feedback structure — dissent feeds back into the decision." },
  { term: "Delay", slug: "delay", definition: "Time lag between a cause and its visible effect.", relevance: "Timelocks are engineered delays — giving humans time to intervene before irreversible action." },
  { term: "Oscillation", slug: "oscillation", definition: "Systems overshoot and undershoot when feedback has delay.", relevance: "Approval fatigue and over-caution are oscillations. Davara's tier system dampens them." },
  { term: "Leverage point", slug: "leverage-point", definition: "A place in a system where a small change produces large effects.", relevance: "Davara targets leverage points 3, 4, and 6 — goals, rules, and information flows." },
  { term: "Attractor", slug: "attractor", definition: "A state the system tends to settle into.", relevance: "Monoculture is an attractor. Divergent quorums push the system toward a healthier basin." },
  { term: "Structural cause", slug: "structural-cause", definition: "The system geometry that produces a behavior — not the event that triggers it.", relevance: "A lone AI agent with all keys is a structural cause. Davara changes the structure." },
  { term: "Quorum", slug: "quorum", definition: "The minimum number of approvals needed for a decision to proceed.", relevance: "The core primitive. No single mind acts alone." },
  { term: "Signer", slug: "signer", definition: "An independent entity — human or AI — that reviews and votes.", relevance: "Signers must be deliberately different to break correlated failure." },
  { term: "Timelock", slug: "timelock", definition: "A mandatory wait between approval and execution.", relevance: "Higher-consequence actions get longer timelocks. Speed is earned." },
  { term: "Threshold", slug: "threshold", definition: "The precise quorum rule: e.g. 3-of-5, with diversity constraints.", relevance: "Davara thresholds are vectors, not numbers — spanning model family, org, mechanism class." },
  { term: "Divergence", slug: "divergence", definition: "Deliberate difference between signers to prevent correlated failure.", relevance: "The anti-monoculture defense. Different models, different training, different operators." },
  { term: "Monoculture", slug: "monoculture", definition: "When many agents share the same base model and thus the same blind spots.", relevance: "The vulnerability that makes adding more identical AI signers useless." },
  { term: "Kill switch", slug: "kill-switch", definition: "An emergency shutdown mechanism for an AI system.", relevance: "Davara includes circuit breakers — but a kill switch unused is a kill switch rusted. Drill it." },
  { term: "m-of-n", slug: "m-of-n", definition: "A quorum rule: m approvals needed from n total signers.", relevance: "Every Davara action requires m-of-n consent — never one mind alone." },
  { term: "Circuit breaker", slug: "circuit-breaker", definition: "A runtime interrupt that halts execution when internal activations enter harm manifolds.", relevance: "Catches harm inside the forward pass, before it reaches the action layer." },
  { term: "Action Contract", slug: "action-contract", definition: "A structured, signable proposal for every high-leverage AI action.", relevance: "Turns prompts into auditable, diffable, signable objects." },
  { term: "Constitution", slug: "constitution", definition: "A set of principles encoded as signer prompts that govern approval/rejection behavior.", relevance: "Each signer evaluates against the Constitution — not its own preferences." },
  { term: "Antifragile", slug: "antifragile", definition: "A system that gets stronger under stress, not just resilient.", relevance: "Davara's core property. Every probe, every dissent, every audit strengthens the next version." },
  { term: "Stress-as-Signal", slug: "stress-as-signal", definition: "The principle that adversarial probes and dissent feed protocol evolution.", relevance: "Conflict is not a threat to the protocol — it is the protocol's immune system." },
  { term: "Council", slug: "council", definition: "Tier 3 elected masternode operators serving as human-quorum signers.", relevance: "The Council is m-of-n inside the larger m-of-n — composable accountability." },
];

export default function SystemsPage() {
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
            <span className="tag">Systems Thinking</span>
            <span className="tag tag-gold">Vocabulary</span>
            <span className="tag tag-indigo">Reading Aid</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="h-display mb-6 sm:mb-8 text-bone"
          >
            The words you need to <span className="gradient-ink">read everything else</span>.
          </motion.h1>

          <p className="body-lg text-bone/80 max-w-3xl">
            Davara is built on systems thinking. This page gives you the vocabulary — no prerequisites, no jargon walls. Each concept in 30 seconds or less.
          </p>
        </div>
      </section>

      {/* WHY THIS PAGE EXISTS */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease }}
            className="glass-strong rounded-2xl p-5 sm:p-7 border border-teal2/20"
          >
            <p className="eyebrow text-teal2/80 mb-2">Why this page exists</p>
            <p className="body-lg text-bone/85">
              You will see these terms throughout Davara. This page is your dictionary. Bookmark it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS A SYSTEM */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Start here</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            What is a <span className="gradient-ink">system</span>?
          </h2>
          <div className="glass-strong rounded-3xl p-6 sm:p-8 md:p-10 mb-6">
            <p className="body-lg text-bone/85 max-w-3xl mb-4">
              A system is a set of interconnected parts that produces its own behavior over time. A thermostat, a forest, an economy, an AI lab — each is a system. The behavior emerges from the <em className="text-bone not-italic font-semibold">connections</em>, not the parts.
            </p>
            <p className="body-lg text-bone/65 max-w-3xl">
              This matters because you cannot fix a system by fixing a part. You fix it by changing the structure — the feedback loops, the information flows, the rules.
            </p>
          </div>
          <SystemsThinkingVisual />
        </div>
      </section>

      {/* LOOPS NOT LINES */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Lesson two</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Loops, not lines.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease }}
              className="glass rounded-2xl p-5 sm:p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="shrink-0">
                  <circle cx="18" cy="18" r="14" stroke="#3be8c5" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M24 14l-2 4h4l-2-4z" fill="#3be8c5" />
                  <text x="18" y="21" textAnchor="middle" fill="#3be8c5" fontSize="9" fontFamily="var(--font-mono)">R+</text>
                </svg>
                <p className="h-card text-bone">Reinforcing loop</p>
              </div>
              <p className="body-lg text-bone/75">
                More leads to more. Compound interest. Viral growth. AI capability races. Once started, reinforcing loops accelerate until something breaks or a balancing force intervenes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease, delay: 0.08 }}
              className="glass rounded-2xl p-5 sm:p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="shrink-0">
                  <circle cx="18" cy="18" r="14" stroke="#f5c56c" strokeWidth="1.5" strokeDasharray="4 3" />
                  <text x="18" y="21" textAnchor="middle" fill="#f5c56c" fontSize="9" fontFamily="var(--font-mono)">B−</text>
                </svg>
                <p className="h-card text-bone">Balancing loop</p>
              </div>
              <p className="body-lg text-bone/75">
                Seeks equilibrium. A thermostat. A regulator. A quorum that says &ldquo;no.&rdquo; Balancing loops resist change — they are the immune system. Davara&rsquo;s diverse signers are a balancing loop against unchecked AI action.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STOCKS AND FLOWS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Lesson three</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Stocks and <span className="gradient-ink">flows</span>.
          </h2>
          <div className="glass rounded-2xl p-5 sm:p-8">
            <p className="body-lg text-bone/80 mb-4 max-w-3xl">
              A stock is an accumulation — water in a bathtub, money in an account, capability in a model. A flow is the rate of change — the faucet filling, the drain emptying.
            </p>
            <p className="body-lg text-bone/65 max-w-3xl mb-5">
              AI capability is a stock. Deployments are inflow. Safety interventions are outflow. When inflow permanently outpaces outflow, the tub overflows. Davara adds a new drain — a consent gate that throttles inflow when the stock is dangerously high.
            </p>
            <div className="glass-strong rounded-xl p-4 sm:p-6">
              <svg viewBox="0 0 600 120" className="w-full h-auto" style={{ maxHeight: "120px" }}>
                <rect x="200" y="20" width="200" height="80" rx="8" fill="none" stroke="rgba(233,230,223,0.2)" strokeWidth="1.5" />
                <text x="300" y="65" textAnchor="middle" fill="#e9e6df" fontSize="13" fontFamily="var(--font-mono)" opacity="0.7">AI CAPABILITY</text>
                <line x1="40" y1="60" x2="195" y2="60" stroke="#3be8c5" strokeWidth="2" />
                <polygon points="195,55 205,60 195,65" fill="#3be8c5" />
                <text x="110" y="45" textAnchor="middle" fill="#3be8c5" fontSize="10" fontFamily="var(--font-mono)">DEPLOYMENTS</text>
                <line x1="405" y1="60" x2="560" y2="60" stroke="#f5c56c" strokeWidth="2" />
                <polygon points="555,55 565,60 555,65" fill="#f5c56c" />
                <text x="480" y="45" textAnchor="middle" fill="#f5c56c" fontSize="10" fontFamily="var(--font-mono)">CONSENT GATE</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* LEVERAGE POINTS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Donella Meadows, condensed</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Leverage points — <span className="gradient-ink">where small pushes move mountains</span>.
          </h2>
          <div className="grid gap-3">
            {leveragePoints.map((lp, i) => (
              <motion.div
                key={lp.n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.04 }}
                className={`glass rounded-2xl p-5 sm:p-6 flex items-start gap-4 ${lp.hit ? "border-teal2/25" : ""}`}
              >
                <span className={`font-mono text-[0.7rem] tracking-[0.16em] shrink-0 mt-0.5 ${lp.hit ? "text-teal2" : "text-bone/40"}`}>
                  #{lp.n}
                </span>
                <div>
                  <p className={`body-lg ${lp.hit ? "text-bone" : "text-bone/70"}`}>{lp.label}</p>
                  {lp.hit && (
                    <p className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-teal2/80 mt-1">
                      ← Davara targets this
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MONOCULTURE */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -bottom-20 -left-16 w-80 h-80 rounded-full bg-indigo2/25 blur-3xl pointer-events-none" />
            <p className="eyebrow text-bone/50 mb-4 sm:mb-5">The hidden vulnerability</p>
            <h2 className="h-section mb-5 text-bone">
              Monoculture risk.
            </h2>
            <p className="body-lg text-bone/80 max-w-3xl mb-4">
              If five AI agents are all fine-tuned from the same base model, they share the same blind spots, the same biases, the same failure modes. A &ldquo;quorum&rdquo; of identical minds is not a quorum. It is one mind voting five times.
            </p>
            <p className="body-lg text-bone/65 max-w-3xl">
              NIST AI 600-1 names this &ldquo;algorithmic monoculture.&rdquo; arXiv 2508.05687 proves that multi-agent systems on a single base model exhibit correlated strategies. The defense: <span className="text-bone font-semibold">deliberate divergence</span>. Different model families. Different training data. Different mechanisms. Different operators.
            </p>
          </div>
        </div>
      </section>

      {/* QUORUM AS ANTI-MONOCULTURE */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">The Davara insight</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Quorum as <span className="gradient-ink">anti-monoculture</span>.
          </h2>
          <div className="glass rounded-2xl p-5 sm:p-8">
            <p className="body-lg text-bone/80 max-w-3xl mb-4">
              A Davara quorum is not &ldquo;three AIs agree.&rdquo; It is &ldquo;three deliberately different minds — drawn from uncorrelated pools across model family, mechanism class, training data, cloud region, and operator — all independently consent.&rdquo;
            </p>
            <p className="body-lg text-bone/65 max-w-3xl">
              This is the same principle as biodiversity. A monoculture wheat field falls to one pathogen. A genetically diverse field survives. Davara is engineered biodiversity for AI governance.
            </p>
          </div>
        </div>
      </section>

      {/* FULL GLOSSARY with anchor IDs */}
      <section className="section">
        <div className="container-narrow max-w-3xl">
          <p className="eyebrow text-bone/50 mb-5">Full glossary</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Every term, <span className="gradient-ink">one tap away</span>.
          </h2>
          <div className="flex flex-col">
            {glossaryItems.map((item) => (
              <div key={item.slug} id={`term-${item.slug}`} className="border-b border-white/5 scroll-mt-24">
                <div className="py-4 sm:py-5 px-1">
                  <p className="font-mono text-[0.72rem] sm:text-[0.78rem] tracking-[0.12em] uppercase text-bone mb-2">
                    {item.term}
                  </p>
                  <p className="body-lg text-bone/80 mb-1">{item.definition}</p>
                  <p className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-teal2/70">
                    Why it matters → {item.relevance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow flex flex-wrap gap-3">
          <Link href="/protocol" className="btn btn-teal">See the protocol →</Link>
          <Link href="/summary" className="btn btn-ghost">60-second summary</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
