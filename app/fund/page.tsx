"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";
import DashIdentityCard from "@/components/DashIdentityCard";
import Toast from "@/components/Toast";

const ease = [0.22, 1, 0.36, 1] as const;

const PLACEHOLDER_ADDRESS = "XxxxxxxxxPLACEHOLDERxxxxxxxxxxxxxxxxx";

const tipAmounts = [0.5, 5, 25, 100, 500, 1000];

const allocation = [
  { pct: "40%", label: "Open-core development" },
  { pct: "30%", label: "Signer-cloud infrastructure" },
  { pct: "20%", label: "Security audits" },
  { pct: "10%", label: "Community + docs" },
];

const supporters = [
  { name: "operator-one.dash", amount: "25 DASH" },
  { name: "mn-whale.dash", amount: "100 DASH" },
  { name: "node-runner.dash", amount: "5 DASH" },
  { name: "divergent.dash", amount: "50 DASH" },
  { name: "quorum-fan.dash", amount: "10 DASH" },
  { name: "consent-layer.dash", amount: "5 DASH" },
  { name: "safety-first.dash", amount: "25 DASH" },
  { name: "acta-non-verba.dash", amount: "1000 DASH" },
];

export default function FundPage() {
  const [toast, setToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [popId, setPopId] = useState<number | null>(null);

  const copyUri = useCallback(async (amount: number) => {
    const uri = `dash:${PLACEHOLDER_ADDRESS}?amount=${amount}&label=Davara&message=Tip+the+protocol`;
    try {
      await navigator.clipboard.writeText(uri);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = uri;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setPopId(amount);
    setTimeout(() => setPopId(null), 220);
    setToastMsg(`Copied: dash:…?amount=${amount}`);
    setToast(true);
    setTimeout(() => setToast(false), 2200);
  }, []);

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
            className="flex flex-wrap gap-2 mb-6 sm:mb-8"
          >
            <span className="tag">Fund</span>
            <span className="tag tag-gold">Dash-Native</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.05 }}
            className="h-display mb-5 sm:mb-6 text-bone"
          >
            We accept Dash.
            <br />
            We <span className="gradient-ink">are</span> Dash.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.15 }}
            className="body-lg text-bone/70 max-w-3xl"
          >
            Tip the protocol, fund the consent layer. Every Dash sent brings the multi-sig for AI closer to production.
          </motion.p>
        </div>
      </section>

      {/* IDENTITY CARD */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <DashIdentityCard />
        </div>
      </section>

      {/* TIP MENU */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-5 sm:mb-6">Tip menu</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {tipAmounts.map((amt, i) => {
              const isCouncil = amt === 500;
              return (
                <motion.button
                  key={amt}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease, delay: i * 0.04 }}
                  onClick={() => copyUri(amt)}
                  className={`glass rounded-2xl p-5 sm:p-6 card text-center cursor-pointer min-h-[44px] transition-colors ${
                    isCouncil ? "border-gold2/35 hover:border-gold2/60" : "hover:border-teal2/35"
                  } ${popId === amt ? "animate-tip-pop" : ""}`}
                >
                  <p className={`font-display text-xl sm:text-2xl font-bold tracking-tight ${isCouncil ? "text-gold2" : "text-teal2"}`}>
                    {amt}
                  </p>
                  <p className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-bone/50 mt-1">
                    DASH
                  </p>
                  {isCouncil && (
                    <p className="font-mono text-[0.48rem] tracking-[0.1em] uppercase text-gold2/60 mt-1">
                      Council sponsor
                    </p>
                  )}
                </motion.button>
              );
            })}
          </div>
          <p className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-bone/35 mt-4">
            Each button copies a dash: URI with the amount. Paste into any Dash wallet.
          </p>
          <p className="font-mono text-[0.52rem] tracking-[0.08em] uppercase text-bone/25 mt-2">
            Tipping is governance-adjacent: large tips count toward Council eligibility weighting.
          </p>
        </div>
      </section>

      {/* WHAT TIPS FUND */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">What tips fund</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            Every Dash <span className="gradient-ink">has a job</span>.
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {allocation.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="glass rounded-2xl p-5"
              >
                <p className="font-display text-2xl sm:text-3xl font-bold text-teal2 tracking-tight mb-2">
                  {a.pct}
                </p>
                <p className="body-lg text-bone/75">{a.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTER WALL */}
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow text-bone/50 mb-3 sm:mb-4">Supporter wall</p>
          <h2 className="h-section mb-6 sm:mb-8 text-bone">
            The first <span className="gradient-ink">believers</span>.
          </h2>
          <div className="glass-strong rounded-3xl overflow-hidden">
            {supporters.map((s, i) => (
              <div
                key={s.name}
                className={`flex items-center justify-between px-5 sm:px-7 py-4 ${i !== 0 ? "border-t border-white/5" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="relative inline-block w-2 h-2 rounded-full bg-teal2/60" />
                  <span className="font-mono text-[0.72rem] tracking-[0.1em] text-bone/80">{s.name}</span>
                </div>
                <span className="font-mono text-[0.65rem] tracking-[0.14em] text-gold2/80 uppercase">
                  {s.amount}
                </span>
              </div>
            ))}
            <div className="px-5 sm:px-7 py-4 border-t border-white/5">
              <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-bone/30">
                DEMO — populated from on-chain data when live
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="section">
        <div className="container-narrow flex flex-wrap gap-3">
          <Link href="/dao" className="btn btn-teal">Read the proposal →</Link>
          <Link href="/access" className="btn btn-ghost">Get masternode access</Link>
        </div>
      </section>

      <Toast message={toastMsg} visible={toast} />
      <Footer />
    </>
  );
}
