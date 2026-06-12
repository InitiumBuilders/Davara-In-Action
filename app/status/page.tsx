"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import MilestoneTimeline from "@/components/MilestoneTimeline";
import BurnRateChart from "@/components/BurnRateChart";
import StewardshipBadge from "@/components/StewardshipBadge";
import { getStatusData } from "@/lib/status";

const ease = [0.22, 1, 0.36, 1] as const;

const data = getStatusData();

const plannedBurn = [183, 183, 183, 183, 183, 185];
const actualBurn = [0, 0, 0, 0, 0, 0];
const burnLabels = ["M1", "M2", "M3", "M4", "M5", "M6"];

export default function StatusPage() {
  const spentPct = data.fundedDash > 0 ? Math.round((data.spentDash / data.fundedDash) * 100) : 0;

  return (
    <>
      <Backdrop />
      <Nav />

      {/* HERO */}
      <section className="section !pt-32 sm:!pt-40 md:!pt-48">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap gap-2 mb-5 sm:mb-6"
          >
            <span className="tag tag-gold">Build Status</span>
            <span className="tag">DAO Transparency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="h-display mb-5 sm:mb-6 text-bone"
          >
            Where the <span className="gradient-ink">build stands</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-6"
          >
            <StewardshipBadge />
          </motion.div>

          <p className="body-lg text-bone/70 max-w-3xl">
            This page is the single source of truth for the DAO-funded build. Every milestone, every spend, every deliverable — tracked here. If we ship, you see it. If we stall, you see that too.
          </p>
        </div>
      </section>

      {/* TOP STRIP — KEY METRICS */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <div className="grid gap-3 grid-cols-2 md:grid-cols-5">
            {[
              { label: "Funded", value: `${data.fundedDash} DASH`, accent: "text-teal2" },
              { label: "Spent", value: `${data.spentDash} DASH (${spentPct}%)`, accent: "text-gold2" },
              { label: "Current Month", value: `${data.currentMonth} of 6`, accent: "text-bone" },
              { label: "Next Milestone", value: data.nextMilestone, accent: "text-bone" },
              { label: "Last Updated", value: data.lastUpdated, accent: "text-bone/60" },
            ].map((m) => (
              <div key={m.label} className="glass rounded-xl p-4">
                <p className="font-mono text-[0.5rem] tracking-[0.14em] uppercase text-bone/35 mb-1">
                  {m.label}
                </p>
                <p className={`font-mono text-[0.72rem] tracking-[0.06em] font-semibold ${m.accent}`}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONE TIMELINE */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Milestones</p>
          <h2 className="h-section mb-8 sm:mb-10 text-bone">
            Six months. <span className="gradient-ink">Six deliverables.</span>
          </h2>
          <MilestoneTimeline milestones={data.milestones} />
        </div>
      </section>

      {/* BURN RATE */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Burn rate — planned vs. actual</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Where the <span className="gradient-ink">DASH goes</span>.
          </h2>
          <div className="glass rounded-2xl p-5 sm:p-8">
            <BurnRateChart planned={plannedBurn} actual={actualBurn} labels={burnLabels} />
            <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-bone/30 mt-4">
              ≈ 183 DASH/mo planned · Actual updated monthly post-disbursement
            </p>
          </div>
        </div>
      </section>

      {/* COUNCIL ACTIVITY */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold2/10 blur-3xl pointer-events-none" />
            <p className="eyebrow text-gold2/80 mb-3">Council Activity</p>
            <p className="font-display text-xl sm:text-2xl font-bold text-bone mb-2">
              0 quorum actions this month
            </p>
            <p className="body-lg text-bone/60 max-w-2xl">
              Council seats open after Milestone 3. Quorum actions will be logged here with timestamps and outcome hashes.
            </p>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="h-card text-bone mb-1">Get the monthly DAO update</p>
              <p className="body-lg text-bone/60">
                Plain-English progress report, delivered to your inbox or Dash username.
              </p>
            </div>
            <a
              href="mailto:davara@motusmoves.com?subject=Subscribe%20to%20Davara%20DAO%20updates"
              className="btn btn-teal shrink-0"
            >
              Subscribe →
            </a>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="section">
        <div className="container-narrow flex flex-wrap gap-3">
          <Link href="/dao" className="btn btn-teal">Read the proposal →</Link>
          <Link href="/fund" className="btn btn-ghost">Fund this</Link>
          <Link href="/protocol" className="btn btn-ghost">The protocol</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
