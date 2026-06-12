"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import TierCard from "@/components/TierCard";
import GlossaryLink from "@/components/GlossaryLink";

const ease = [0.22, 1, 0.36, 1] as const;

const tiers = [
  {
    tier: "Tier 0",
    title: "Public Read",
    requirement: "Free · No login",
    perks: [
      "Read every page of the protocol, the spec, the audits.",
      "Fork the open-source reference implementation.",
      "Submit issues, propose changes, cite the work.",
    ],
    color: "teal" as const,
  },
  {
    tier: "Tier 1",
    title: "Dash Holder",
    requirement: "≥ 0.1 DASH staked · CrowdNode or self-custody",
    perks: [
      "Waitlist access and supporter wall placement.",
      "Tip-jar perks and on-chain thank-you receipts.",
      "Priority community access.",
      "Early-access invite to Davara EI public sessions.",
      "Vote weight (proportional via CrowdNode delegation) on community-funded features.",
    ],
    color: "gold" as const,
  },
  {
    tier: "Tier 2",
    title: "Sovereign",
    requirement: "≥ 1,000 DASH self-custody OR CrowdNode-equivalent OR verified masternode",
    perks: [
      "First and exclusive access to Davara EI.",
      "Signer-network seat option.",
      "Davara roadmap governance vote.",
      "White-label option for masternode-network apps.",
      "Direct line to the build team.",
    ],
    color: "indigo" as const,
  },
];

export default function AccessPage() {
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
            <span className="tag">Access</span>
            <span className="tag tag-gold">Masternode-Gated</span>
            <span className="tag tag-indigo">Dash-Native</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="h-display mb-6 sm:mb-8 text-bone"
          >
            How you <span className="gradient-ink">get in</span>.
          </motion.h1>

          <p className="body-lg text-bone/80 max-w-3xl">
            Davara is a consent layer for high-leverage AI. The people who use it should themselves be parties who understand consent infrastructure. Dash masternode owners qualify by definition: they already operate distributed governance with skin in the game.
          </p>
        </div>
      </section>

      {/* FOUR TIERS */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-5 sm:mb-6">Four tiers</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t, i) => (
              <TierCard key={t.tier} {...t} index={i} />
            ))}

            {/* Tier 3 — Council — special gold-bordered card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease, delay: 3 * 0.08 }}
              className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 card relative overflow-hidden border-gold2/40"
              style={{ borderColor: "rgba(245,197,108,0.4)" }}
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold2/15 blur-3xl pointer-events-none" />
              <span className="tag tag-gold mb-4">Tier 3</span>
              <p className="h-card text-bone mt-3 mb-2">Council</p>
              <p className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-bone/50 mb-4">
                Verified masternode · 12-mo uptime ≥ 99% · Signed conduct covenant
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Elected to the Davara Council — human-quorum signers on protocol actions.",
                  "The Council is m-of-n inside the larger m-of-n. Composable accountability.",
                  "6-month rotating term, DAO-elected. 9 seats at v1.",
                  "Signing fees (small) + $TRUST reputation.",
                  "Compensation: covered by proposal budget.",
                ].map((p) => (
                  <li key={p} className="body-lg text-bone/75 flex gap-3">
                    <span className="text-gold2 font-mono shrink-0 mt-1">+</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW VERIFICATION WORKS */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">How verification works</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Prove your stake. <span className="gradient-ink">Keep your privacy.</span>
          </h2>
          <div className="glass-strong rounded-3xl p-6 sm:p-8 md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <p className="h-card text-bone mb-3">Option A — Signed message</p>
                <p className="body-lg text-bone/75">
                  Sign a message from your masternode collateral address. The signature proves ownership without moving funds. Standard Dash wallet functionality.
                </p>
              </div>
              <div>
                <p className="h-card text-bone mb-3">Option B — CrowdNode delegation proof</p>
                <p className="body-lg text-bone/75">
                  Submit a CrowdNode delegation proof + DPNS identity binding. Works for fractional stakers who hold via CrowdNode delegation.
                </p>
              </div>
            </div>
            <div className="hairline my-6" />
            <p className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-bone/40">
              Build path: verification gateway is out-of-scope for this commit. This page describes the flow.
            </p>
          </div>
        </div>
      </section>

      {/* CONDUCT COVENANT */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-gold2/80 mb-3 sm:mb-4">Council Conduct Covenant</p>
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden border border-gold2/20">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gold2/10 blur-3xl pointer-events-none" />
            <p className="font-display text-lg sm:text-xl md:text-2xl font-bold leading-snug tracking-tight text-bone max-w-3xl italic">
              &ldquo;Operate in good faith. Vote independently. Disclose conflicts. Accept rotation. Defend the protocol&rsquo;s <GlossaryLink term="antifragile">antifragility</GlossaryLink> above any single party&rsquo;s interest, including MotusMoves and including yourself.&rdquo;
            </p>
            <p className="body-lg text-bone/60 mt-4 max-w-2xl">
              Every Council member signs this covenant before taking their seat. It is public, on-chain, and non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THIS IS FAIR */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-16 w-80 h-80 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
            <p className="eyebrow text-teal2/80 mb-4 sm:mb-5">Why this is fair</p>
            <p className="font-display text-lg sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-bone max-w-4xl">
              Dash masternodes are the largest DAO-aligned, governance-active crypto holder class outside of Bitcoin. They already run <GlossaryLink term="quorum">quorum</GlossaryLink> governance with real economic skin in the game. Natural fit for an EI consent network.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow flex flex-wrap gap-3">
          <Link href="/fund" className="btn btn-teal">Fund the protocol →</Link>
          <Link href="/dao" className="btn btn-ghost">DAO proposal</Link>
          <Link href="/protocol" className="btn btn-ghost">The protocol</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
