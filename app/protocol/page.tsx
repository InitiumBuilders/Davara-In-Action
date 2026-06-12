"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import ScrollProgress from "@/components/ScrollProgress";
import StickyTLDR from "@/components/StickyTLDR";
import LoopGlyph from "@/components/LoopGlyph";
import GlossaryLink from "@/components/GlossaryLink";

const ease = [0.22, 1, 0.36, 1] as const;

type LayerStatus = "Live spec" | "Reference impl" | "Roadmap";

const layerStatuses: Record<string, LayerStatus> = {
  L1: "Live spec",
  L2: "Live spec",
  L3: "Live spec",
  L4: "Reference impl",
  L5: "Live spec",
  L6: "Roadmap",
};

const layers = [
  {
    n: "L1",
    title: "Action Contract",
    lede: "Every high-leverage action becomes a structured, signable proposal — not a prompt completion.",
    body: "Signable objects carry kind, payload, intervention_tier, reversibility_sla, justification, and a full tool-call evidence trace. You can diff, audit, replay. Every proposal is an artifact.",
    code: `{
  "action_id": "0xabc...",
  "kind": "transfer_funds",
  "payload": { "to": "0x...", "amount": 12400 },
  "intervention_tier": "T3",   // Human Intervention
  "reversibility_sla": "never",
  "requested_by": "agent:davara-planner",
  "justification": "Vendor payment per PO-4412",
  "evidence": [tool_trace, sources, ...]
}`,
  },
  {
    n: "L2",
    title: "Human Intervention Tiers",
    lede: "Four tiers. Human involvement scales with consequence — not with convenience.",
    body: "T0 Machine Local: reversible within minutes. T1 Org Internal: reversible within the hour. T2 Human Verify: external, money, or 24-hour reversibility — one human co-signs. T3 Human Intervention: irreversible, public, or AGI-adjacent — two humans plus an external auditor, 4-hour timelock, public notice.",
    code: `tier("transfer_funds", amount=$12,400) = {
  T0: reversible <5min, local        → 2-of-3 machines
  T1: reversible <1h, org-internal   → 3-of-5 + 1 symbolic
  T2: human verify                   → +1 human, 2FA
  T3: HUMAN INTERVENTION             → +2 humans + 1 auditor
      timelock: 4h · public notice
}`,
  },
  {
    n: "L3",
    title: "Constitution & Divergent Quorum",
    lede: "Threshold is a vector — across independence dimensions — not a single number.",
    body: "Each signer runs a Constitutional AI-style prompt stating the action's intent, its invariants, and explicit encouragement to REJECT. But the key move is deliberate divergence: signers are drawn from uncorrelated pools across model family (Anthropic, OpenAI, Google, open weights), training cutoffs, mechanism class (LLM vs symbolic policy), cloud region, and operator.",
    code: `threshold := {
  min_approvals:           3 of 5,
  model_families_distinct: >= 2,
  mechanism_classes:       >= 2,   // LLM + symbolic
  cloud_regions_distinct:  >= 2,
  human_signers:           >= 1   // iff tier in {T2, T3}
}`,
  },
  {
    n: "L4",
    title: "Circuit Breakers & Evaluation",
    lede: "Runtime intrinsic defense — catching harm inside the forward pass.",
    body: "Each LLM signer runs a Gray-Swan-style representation-engineering circuit breaker that interrupts when internal activations enter harm manifolds (NeurIPS 2024). A parallel evaluator runs METR-style autonomy probes and Apollo-style scheming probes against random samples. Any signer can emergency-pause the protocol unilaterally. Unfreeze requires full quorum.",
    code: `signer.review(proposal) -> {
  circuit_breaker_state: CLEAR | TRIPPED,
  scheming_probe_score:  0.03,
  autonomy_probe_score:  0.12,
  verdict: APPROVE | REJECT | ABSTAIN | PAUSE_PROTOCOL,
  rationale: "plain-language reasoning"
}`,
  },
  {
    n: "L5",
    title: "Timelock, Rate Limit, Recovery",
    lede: "Irreversibility gets its own tax. Compromise shouldn't brick the system.",
    body: "Timelocks scale with intervention tier — 2s local, 4h public. Spending and action-type rate limits apply per signer, per quorum, per window. Signer keys rotate on a schedule and can be revoked mid-flight without disrupting in-progress proposals. Kill-switch drills run quarterly, because unused kill switches rust.",
    code: `timelock(tier) = {
  T0: 2s,    // machine local
  T1: 30s,   // org internal
  T2: 5min,  // human verify
  T3: 4h     // human intervention + public notice
}
rotate_signer_key(signer, gracePeriod=7d)
revoke_signer(signer_id)   // propagates in <60s`,
  },
  {
    n: "L6",
    title: "Legibility UX",
    lede: "Humans must understand what they sign — or the whole thing is theater.",
    body: "Plain-language diffs. Counterfactual views (\"if this is wrong, here is what it takes to reverse it\"). Dissent views (\"Signer B rejected — read before overriding\"). Rate-limits on human approvals, because signing fatigue is the real attack surface. If a human is being asked too often, the system is mis-tuned, and we surface that.",
    code: `view.for(human) = {
  diff: "Move $12,400 from treasury -> vendor (never seen)",
  counterfactual: "Reverse within 4h via admin quorum",
  dissent: "Signer-B REJECTED: vendor OFAC-flagged",
  fatigue_score: 0.21  // of 1.0 daily budget
}`,
  },
];

const defends = [
  "Single-agent prompt injection (other signers never see the injected context)",
  "Credential compromise of any one signer (quorum > 1 by design)",
  "Correlated model failure from a single provider (diversity axis)",
  "Rogue operator or insider (humans are one signer class, not the signer)",
  "Machine-speed catastrophic action (timelock scales with tier)",
  "Sandbagging (external evaluator signer catches it)",
  "Intrinsic scheming (circuit breaker catches within-forward-pass drift)",
];

const doesnot = [
  "A vulnerability in the protocol's own code (open-source + formal methods + bug bounty)",
  "Novel attacks that fool every model family simultaneously (the symbolic signer is the partial mitigation)",
  "Denial-of-service by reject-spamming signers (rate limits + reputation)",
  "Social engineering of humans in the loop (legibility UX is only a partial guard)",
  "Nation-state adversaries with simultaneous compromise of multiple cloud providers",
];

export default function ProtocolPage() {
  return (
    <>
      <ScrollProgress />
      <StickyTLDR text="m-of-n consent across diverse signers, with timelocks and revocation. Antifragile by design." />
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
            <span className="tag">The Protocol · v4</span>
            <span className="tag tag-gold">6 Layers</span>
            <span className="tag tag-indigo">Antifragile</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="h-display mb-6 sm:mb-8 text-bone"
          >
            The <span className="gradient-ink">Davara Protocol</span>.
            <br />
            Consent, composed.
          </motion.h1>

          <p className="body-lg text-bone/80 max-w-3xl">
            Six layers. Each grounded in a proven primitive from an adjacent domain — crypto
            multisig, Constitutional AI, representation engineering, threshold cryptography,
            and human-factors UX. Together, they give a high-leverage AI a{" "}
            <GlossaryLink term="quorum">chorus</GlossaryLink> instead of a voice.
          </p>
        </div>
      </section>

      {/* ANTIFRAGILE LOOP CARD */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
            <p className="eyebrow text-teal2/80 mb-5">The antifragile loop</p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center mb-6">
              {/* Three-stage inline SVG */}
              <svg viewBox="0 0 600 120" className="w-full sm:w-auto sm:max-w-[500px] h-auto" style={{ maxHeight: "120px" }}>
                {/* Stress */}
                <circle cx="80" cy="60" r="40" fill="none" stroke="#ff9b9b" strokeWidth="1.5" />
                <text x="80" y="55" textAnchor="middle" fill="#ff9b9b" fontSize="11" fontFamily="var(--font-mono)" fontWeight="600">STRESS</text>
                <text x="80" y="72" textAnchor="middle" fill="rgba(233,230,223,0.5)" fontSize="8" fontFamily="var(--font-mono)">adversarial input</text>
                {/* Arrow 1 */}
                <line x1="125" y1="60" x2="215" y2="60" stroke="rgba(233,230,223,0.3)" strokeWidth="1.5" />
                <polygon points="212,55 222,60 212,65" fill="rgba(233,230,223,0.3)" />
                {/* Signal */}
                <circle cx="300" cy="60" r="40" fill="none" stroke="#f5c56c" strokeWidth="1.5" />
                <text x="300" y="55" textAnchor="middle" fill="#f5c56c" fontSize="11" fontFamily="var(--font-mono)" fontWeight="600">SIGNAL</text>
                <text x="300" y="72" textAnchor="middle" fill="rgba(233,230,223,0.5)" fontSize="8" fontFamily="var(--font-mono)">logged + reviewed</text>
                {/* Arrow 2 */}
                <line x1="345" y1="60" x2="435" y2="60" stroke="rgba(233,230,223,0.3)" strokeWidth="1.5" />
                <polygon points="432,55 442,60 432,65" fill="rgba(233,230,223,0.3)" />
                {/* Strength */}
                <circle cx="520" cy="60" r="40" fill="none" stroke="#3be8c5" strokeWidth="1.5" />
                <text x="520" y="55" textAnchor="middle" fill="#3be8c5" fontSize="11" fontFamily="var(--font-mono)" fontWeight="600">STRENGTH</text>
                <text x="520" y="72" textAnchor="middle" fill="rgba(233,230,223,0.5)" fontSize="8" fontFamily="var(--font-mono)">amended by DAO</text>
                {/* Feedback arc */}
                <path d="M520 105 Q300 150 80 105" fill="none" stroke="rgba(59,232,197,0.3)" strokeWidth="1" strokeDasharray="5 4" />
                <text x="300" y="140" textAnchor="middle" fill="rgba(59,232,197,0.4)" fontSize="8" fontFamily="var(--font-mono)">feeds next cycle</text>
              </svg>
            </div>
            <p className="body-lg text-bone/70 max-w-3xl text-center sm:text-left">
              Stress = adversarial input or dissent. Signal = <GlossaryLink term="quorum">quorum</GlossaryLink> disagreement gets logged and reviewed. Strength = <GlossaryLink term="constitution">Constitution</GlossaryLink> amendment ratified by DAO + <GlossaryLink term="council">Council</GlossaryLink>. Each cycle makes the protocol harder to break.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIER CARDS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Human Intervention Tiers</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            The four tiers. <span className="gradient-ink">Read them like traffic lights.</span>
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "T0", color: "teal", label: "Machine Local", body: "Reversible within 5 min. 2-of-3 machine signers.", time: "2 s timelock" },
              { t: "T1", color: "gold", label: "Org Internal", body: "Reversible within the hour. 3-of-5 + 1 symbolic policy.", time: "30 s timelock" },
              { t: "T2", color: "indigo", label: "Human Verify", body: "External, reversible in 24h, any money. Above + 1 human verifier.", time: "5 min timelock" },
              { t: "T3", color: "rose", label: "Human Intervention", body: "Irreversible, public, or AGI-adjacent. Above + 2 humans + 1 external auditor.", time: "4 h + public notice" },
            ].map((tier, i) => (
              <motion.div
                key={tier.t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease, delay: i * 0.07 }}
                className="glass rounded-2xl p-5 sm:p-6 card"
              >
                <span className={`tag ${
                  tier.color === "gold" ? "tag-gold" :
                  tier.color === "indigo" ? "tag-indigo" :
                  tier.color === "rose" ? "tag-rose" : ""
                } mb-3`}>{tier.t}</span>
                <p className="h-card text-bone mt-3 mb-2">{tier.label}</p>
                <p className="body-lg text-bone/72 mb-4">{tier.body}</p>
                <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-bone/50">
                  {tier.time}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIX LAYERS */}
      <section className="section">
        <div className="container-narrow flex flex-col gap-5 sm:gap-6">
          {layers.map((l, i) => (
            <motion.div
              key={l.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: i * 0.04 }}
              className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 card"
            >
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="font-mono text-[0.72rem] tracking-[0.18em] text-teal2">{l.n}</span>
                <span className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-bone/40">
                  Layer {i + 1}
                </span>
                <span className={`tag ${
                  layerStatuses[l.n] === "Live spec" ? "" :
                  layerStatuses[l.n] === "Reference impl" ? "tag-gold" : "tag-indigo"
                } !text-[0.52rem]`}>
                  {layerStatuses[l.n]}
                </span>
              </div>
              <p className="h-card text-bone mb-2">{l.title}</p>
              <p className="body-lg text-bone/85 mb-3">{l.lede}</p>
              <p className="body-lg text-bone/65 mb-5">{l.body}</p>
              <pre className="glass-strong rounded-xl p-3 sm:p-5 text-bone/85">
                <code>{l.code}</code>
              </pre>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THREAT MODEL */}
      <section className="section">
        <div className="container-narrow grid gap-5 sm:gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            <span className="tag mb-4">Defends well</span>
            <h3 className="h-card text-bone mt-4 mb-4">What the protocol catches.</h3>
            <ul className="flex flex-col gap-3">
              {defends.map((d) => (
                <li key={d} className="body-lg text-bone/78 flex gap-3">
                  <span className="text-teal2 font-mono shrink-0">+</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            <span className="tag tag-rose mb-4">Honest limits</span>
            <h3 className="h-card text-bone mt-4 mb-4">What it does not solve.</h3>
            <ul className="flex flex-col gap-3">
              {doesnot.map((d) => (
                <li key={d} className="body-lg text-bone/78 flex gap-3">
                  <span className="text-bone/50 font-mono shrink-0">−</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* COMPOSITION COMPARISON — with Antifragile column */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">How Davara composes with frontier frameworks</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Davara is not <span className="italic">instead of</span>.{" "}
            <span className="gradient-ink">It sits on top.</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                framework: "Anthropic RSP",
                has: "Capability-triggered deployment gates, ASL levels, Constitutional AI.",
                davara: "Davara adds cross-org quorum. A signer from another model family validates what Anthropic's internal safety passes.",
                antifragile: "Static (improves between versions)",
              },
              {
                framework: "OpenAI PF v2",
                has: "Five risk categories, $100B threshold, Safety Advisory Group.",
                davara: "Davara makes the SAG decision executable: m-of-n signers, timelocked, with dissent views and human intervention tiers.",
                antifragile: "Static (improves between versions)",
              },
              {
                framework: "DeepMind FSF",
                has: "CCLs for harmful manipulation, amplified oversight, mechanistic interpretability.",
                davara: "Davara composes CCL triggers with circuit breakers from non-Google signers. Cross-vendor decorrelated oversight.",
                antifragile: "Static (improves between versions)",
              },
            ].map((comp, i) => (
              <motion.div
                key={comp.framework}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease, delay: i * 0.07 }}
                className="glass rounded-2xl p-5 sm:p-7 card"
              >
                <span className="tag mb-3">{comp.framework}</span>
                <p className="body-lg text-bone/70 mt-3 mb-3">
                  <span className="font-mono text-[0.6rem] tracking-[0.13em] uppercase text-bone/45">Has: </span>
                  {comp.has}
                </p>
                <p className="body-lg text-bone/80 mb-3">
                  <span className="font-mono text-[0.6rem] tracking-[0.13em] uppercase text-teal2">+ Davara: </span>
                  {comp.davara}
                </p>
                <div className="border-t border-white/5 pt-3 mt-3">
                  <span className="font-mono text-[0.55rem] tracking-[0.12em] uppercase text-bone/40">Antifragile? </span>
                  <span className="font-mono text-[0.58rem] tracking-[0.08em] text-bone/60">{comp.antifragile}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Davara row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease, delay: 0.25 }}
            className="glass-strong rounded-2xl p-5 sm:p-7 mt-4 border border-teal2/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="tag">Davara Protocol</span>
              <LoopGlyph type="R+" size="sm" />
            </div>
            <p className="body-lg text-bone/80 mb-2">
              <span className="font-mono text-[0.6rem] tracking-[0.13em] uppercase text-teal2">Antifragile? </span>
              <span className="text-teal2 font-semibold">Continuous (improves between sessions).</span>{" "}
              Every probe, every dissent, every audit feeds the next Constitution amendment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE ARE NOT */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -bottom-16 -left-20 w-80 h-80 rounded-full bg-indigo2/20 blur-3xl pointer-events-none" />
            <p className="eyebrow text-bone/50 mb-4 sm:mb-5">What we are NOT</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Not a model. We do not train or fine-tune foundation models.",
                "Not a kill switch. Kill switches are a last resort. We build the layer that prevents the need.",
                "Not a replacement for alignment research. Alignment is upstream. Davara is the consent gate.",
                "Not a regulatory compliance shortcut. We map to regulations. We are not the regulation.",
                "Not a single committee. Not a single jurisdiction. Not perpetual.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="font-mono text-bone/40 shrink-0 mt-1">−</span>
                  <p className="body-lg text-bone/70">{item}</p>
                </div>
              ))}
            </div>
            <div className="hairline my-6" />
            <p className="font-display text-lg sm:text-xl font-bold text-bone">
              We are a <span className="gradient-ink">consent layer</span>. That is all, and that is enough.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow flex flex-wrap gap-3">
          <Link href="/research" className="btn btn-teal">See the research →</Link>
          <Link href="/frontier" className="btn btn-ghost">Frontier landscape</Link>
          <Link href="/business" className="btn btn-ghost">How it makes money</Link>
          <Link href="/manifesto" className="btn btn-ghost">Manifesto</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
