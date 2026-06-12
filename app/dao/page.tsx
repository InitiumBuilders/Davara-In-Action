"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import ScrollProgress from "@/components/ScrollProgress";
import AgreementCard from "@/components/AgreementCard";
import LoopGlyph from "@/components/LoopGlyph";
import GlossaryLink from "@/components/GlossaryLink";

const ease = [0.22, 1, 0.36, 1] as const;

const milestones = [
  { id: "M1", title: "Foundation", body: "Open-source the Davara reference signer (Apache 2.0). Publish hash on-chain.", month: "Month 1" },
  { id: "M2", title: "Identity", body: "davara.dash DPNS identity live. Masternode-collateral signed-message auth → Davara session.", month: "Month 2" },
  { id: "M3", title: "Council", body: "Council bylaws + first 9 seats elected via DAO vote. Conduct covenant signed.", month: "Month 3" },
  { id: "M4", title: "Compliance", body: "Davara Constitution mapping for EU AI Act Art. 55, NIST AI RMF 2.0, ISO/IEC 42001 — PDF + on-chain hash.", month: "Month 4" },
  { id: "M5", title: "Quorum Demo", body: "Public 5-of-9 quorum (3 model vendors × 3 human reviewers + 3 Council seats) approving a real test action — recorded, audited, published.", month: "Month 5" },
  { id: "M6", title: "Handover", body: "Davara Constitution v1.0 ratified by DAO vote. Council assumes ongoing review duty. Final report + audit closes proposal.", month: "Month 6" },
];

const whatDashGets = [
  { title: "Endorsement loop", body: "Every Davara session displays \"Stewarded by the Dash DAO.\" Surface in marketing, headers, and footers. Permanent attribution." },
  { title: "First-mover narrative", body: "Dash becomes the first major chain whose DAO funds an EI consent layer. We co-publish the case study with the Foundation." },
  { title: "Identity standard", body: "Every Davara user resolves through DPNS. New utility for the naming service, more contested-name auctions, more on-chain activity." },
  { title: "Treasury yield", body: "5% of all Davara SaaS, Network, and Enterprise revenue is converted to DASH and returned to the DAO treasury for the life of the protocol. Capped at 100,000 DASH cumulative, then re-negotiated." },
  { title: "Masternode stickiness", body: "Sovereign + Council tiers create a real reason to not unstake. This is anti-churn for the network." },
  { title: "Govern-by-default", body: "Davara's roadmap and Constitution amendments are DAO-vote-gated. The DAO permanently steers a high-leverage AI safety standard." },
];

const risks = [
  { risk: "Adoption risk", mitigation: "Mitigated by free open-core. Zero barrier to evaluation." },
  { risk: "Technical risk", mitigation: "Mitigated by phased deliverables with public demos at each milestone." },
  { risk: "Regulatory risk", mitigation: "Mitigated by EU AI Act compliance mapping in Month 4." },
  { risk: "DAO funds, then we don't ship", mitigation: "Phased disbursement with self-pause clause. Final-month tranche held in escrow until M5 demo is publicly verified. Fail to ship → next tranche pauses until DAO ratifies a new ETA." },
];

export default function DaoPage() {
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
            <span className="tag">Proposal #001</span>
            <span className="tag tag-gold">Davara Protocol</span>
            <span className="tag tag-indigo">Status: DRAFT</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="h-display mb-6 sm:mb-8 text-bone"
          >
            Davara Protocol — <span className="gradient-ink">Multi-Sig for Emergent Intelligence</span>.
          </motion.h1>

          <p className="body-lg text-bone/65 max-w-3xl mb-4">
            A formal proposal to the Dash DAO for implementation funding. The Dash-native AGI consent layer — a <GlossaryLink term="m-of-n">m-of-n</GlossaryLink> <GlossaryLink term="signer">signer</GlossaryLink> protocol with built-in <GlossaryLink term="timelock">timelocks</GlossaryLink>, operated by MotusMoves and stewarded by the masternode network.
          </p>

          <p className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-gold2/60">
            This page is a draft. Final figures and dates are confirmed at submission to DashCentral.
          </p>
        </div>
      </section>

      {/* TWO-COLUMN LAYOUT */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            {/* LEFT — Proposal text */}
            <div className="flex flex-col gap-8">
              {/* PROPOSAL HEADER */}
              <div className="glass-strong rounded-3xl p-6 sm:p-8 md:p-10">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  {[
                    { label: "Proposer", value: "Davara EI · davara.dash" },
                    { label: "Network", value: "Dash mainnet (monthly superblock)" },
                    { label: "Ask", value: "1,100 DASH over 6 months" },
                    { label: "Rate", value: "≈ 183 DASH/mo" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-bone/40 mb-1">
                        {item.label}
                      </p>
                      <p className="font-mono text-[0.72rem] tracking-[0.1em] text-bone/85">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="hairline my-5" />
                <p className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-bone/35">
                  USD value updated at proposal submission time. Bump from v3&rsquo;s 750 DASH reflects wider scope: Council infrastructure, compliance mapping, and the public masternode quorum demo.
                </p>
              </div>

              {/* PARTIES */}
              <div className="glass rounded-2xl p-5 sm:p-7">
                <p className="eyebrow text-bone/50 mb-3">§1 · Parties</p>
                <p className="body-lg text-bone/80">
                  <strong className="text-bone">MotusMoves LLC</strong> (operator) ↔ <strong className="text-bone">Dash DAO</strong> (steward &amp; funder).
                </p>
                <p className="body-lg text-bone/65 mt-2">
                  Operator-of-record: MotusMoves LLC.
                </p>
              </div>

              {/* PHASED DISBURSEMENT */}
              <div className="glass rounded-2xl p-5 sm:p-7">
                <p className="eyebrow text-bone/50 mb-3">§2 · Phased Disbursement</p>
                <p className="body-lg text-bone/80 mb-3">
                  Monthly, contingent on prior-month milestone delivery. Fail to ship → next tranche pauses until the DAO ratifies a new ETA.
                </p>
                <div className="flex items-center gap-3">
                  <LoopGlyph type="B-" size="sm" />
                  <p className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-gold2/70">
                    The antifragile loop — we report or we pause ourselves.
                  </p>
                </div>
              </div>

              {/* SIX MILESTONES */}
              <div>
                <p className="eyebrow text-bone/50 mb-3 sm:mb-4">§3 · Six Monthly Milestones</p>
                <h2 className="h-section mb-6 sm:mb-8 text-bone">
                  Six months. <span className="gradient-ink">Six milestones.</span>
                </h2>
                <div className="flex flex-col gap-4">
                  {milestones.map((d, i) => (
                    <motion.div
                      key={d.id}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.55, ease, delay: i * 0.05 }}
                      className="glass rounded-2xl p-5 sm:p-7 grid gap-4 sm:grid-cols-[auto_1fr]"
                    >
                      <div className="sm:min-w-[100px]">
                        <span className="font-mono text-[0.68rem] tracking-[0.14em] text-teal2 uppercase">{d.month}</span>
                        <p className="font-mono text-[0.55rem] tracking-[0.12em] text-bone/35 uppercase mt-1">{d.id}</p>
                      </div>
                      <div>
                        <p className="h-card text-bone mb-2">{d.title}</p>
                        <p className="body-lg text-bone/75">{d.body}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* WHAT DASH GETS */}
              <div>
                <p className="eyebrow text-bone/50 mb-3 sm:mb-4">§4 · What Dash Gets</p>
                <h2 className="h-section mb-6 sm:mb-8 text-bone">
                  Six returns. <span className="gradient-ink">All concrete.</span>
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {whatDashGets.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                      className="glass rounded-2xl p-5"
                    >
                      <p className="h-card text-bone mb-2">{item.title}</p>
                      <p className="body-lg text-bone/70">{item.body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* RISKS */}
              <div>
                <p className="eyebrow text-bone/50 mb-3 sm:mb-4">§5 · Risks &amp; Mitigations</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {risks.map((r, i) => (
                    <motion.div
                      key={r.risk}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                      className="glass rounded-2xl p-5"
                    >
                      <span className="tag tag-rose mb-3">{r.risk}</span>
                      <p className="body-lg text-bone/75 mt-3">{r.mitigation}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* TERMINATION */}
              <div className="glass rounded-2xl p-5 sm:p-7">
                <p className="eyebrow text-bone/50 mb-3">§6 · Termination</p>
                <p className="body-lg text-bone/80">
                  The DAO may halt funding via simple majority at any monthly cycle. MotusMoves continues open-source maintenance under Apache 2.0 in perpetuity even if funding ends.
                </p>
              </div>

              {/* RATIFICATION */}
              <div className="glass-strong rounded-2xl p-5 sm:p-7 border border-gold2/20">
                <p className="eyebrow text-gold2/80 mb-3">§7 · Ratification</p>
                <p className="body-lg text-bone/85">
                  By approving this proposal, the masternode network ratifies the Agreement above and authorizes monthly disbursement subject to milestone delivery.
                </p>
              </div>
            </div>

            {/* RIGHT — Sticky Agreement Card (desktop) */}
            <div className="hidden lg:block">
              <AgreementCard
                ask="1,100 DASH / 6 months"
                term="6 monthly tranches"
                steward="Dash DAO"
                operator="MotusMoves LLC"
                votingMath="Net ≥ 10% of active MNs (≈ 480 yes-no)"
                status="DRAFT · Pending Submission"
              />
            </div>
          </div>

          {/* Mobile Agreement Card */}
          <div className="lg:hidden mt-8">
            <AgreementCard
              ask="1,100 DASH / 6 months"
              term="6 monthly tranches"
              steward="Dash DAO"
              operator="MotusMoves LLC"
              votingMath="Net ≥ 10% of active MNs (≈ 480 yes-no)"
              status="DRAFT · Pending Submission"
            />
          </div>
        </div>
      </section>

      {/* WHY DASH */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Why Dash</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Four reasons this fits <span className="gradient-ink">nowhere else</span>.
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { n: "01", t: "Natural alignment", b: "The DAO already governs by quorum. Masternode owners already understand m-of-n consent." },
              { n: "02", t: "Identity without rebuilding", b: "Dash Evolution + DPNS gives us usernames, identity proofs, and contact requests — no custom infra." },
              { n: "03", t: "Built-in treasury", b: "~10% of every block subsidy goes to the treasury. ~6,400 DASH/mo. The only major-coin treasury where this fits the founding charter." },
              { n: "04", t: "Ideal first users", b: "Masternode operators are governance-active, technically capable, and economically aligned. The perfect early-adopter class for an EI consent network." },
            ].map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="glass rounded-2xl p-5 sm:p-6"
              >
                <span className="font-mono text-[0.65rem] tracking-[0.16em] text-teal2 mb-2">{r.n}</span>
                <p className="h-card text-bone mt-2 mb-2">{r.t}</p>
                <p className="body-lg text-bone/75">{r.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VOTING MATH */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gold2/10 blur-3xl pointer-events-none" />
            <p className="eyebrow text-gold2/80 mb-4 sm:mb-5">Voting math reminder</p>
            <p className="font-display text-lg sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-bone max-w-4xl mb-4">
              Net approval ≥ 10% of masternodes.
            </p>
            <p className="body-lg text-bone/70 max-w-3xl">
              With ~4,800 active masternodes, that means ~480 net yes-votes (yes minus no). Actual count fetched at submission time. Every vote counts.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="section">
        <div className="container-narrow flex flex-wrap gap-3">
          <a href="https://www.dashcentral.org" target="_blank" rel="noreferrer" className="btn btn-teal">
            Vote yes on DashCentral →
          </a>
          <a href="https://www.dash.org/forum" target="_blank" rel="noreferrer" className="btn btn-ghost">
            Discuss on Dash Forum
          </a>
          <Link href="/fund" className="btn btn-ghost">Tip the proposal →</Link>
          <Link href="/status" className="btn btn-ghost">Build status</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
