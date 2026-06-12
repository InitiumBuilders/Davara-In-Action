"use client";

import { motion } from "framer-motion";
import CopyButton from "./CopyButton";

const PLACEHOLDER_ADDRESS = "XxxxxxxxxPLACEHOLDERxxxxxxxxxxxxxxxxx";

const ease = [0.22, 1, 0.36, 1] as const;

interface DashIdentityCardProps {
  compact?: boolean;
}

export default function DashIdentityCard({ compact = false }: DashIdentityCardProps) {
  const dashUri = `dash:${PLACEHOLDER_ADDRESS}?label=Davara&message=Tip+the+protocol`;

  if (compact) {
    return (
      <div className="glass rounded-2xl p-4 sm:p-5 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="relative inline-block w-2.5 h-2.5 rounded-full bg-teal2 animate-pulse-ring" />
          <span className="font-mono text-[0.72rem] tracking-[0.16em] text-teal2 uppercase">
            davara.dash
          </span>
        </div>
        <p className="font-mono text-[0.58rem] tracking-[0.1em] text-bone/40 uppercase">
          Pending DPNS contested-name auction
        </p>
        <div className="flex flex-wrap gap-2">
          <CopyButton text="davara.dash" label="Copy identity" className="!py-2 !px-3 !text-[0.58rem] !min-h-[36px]" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease }}
      className="glass-strong rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-indigo2/20 blur-3xl pointer-events-none" />

      {/* DAO-stewarded badge */}
      <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-center gap-1.5" title="This project is stewarded by the Dash DAO">
        <span className="w-2 h-2 rounded-full bg-gold2" />
        <span className="font-mono text-[0.48rem] tracking-[0.1em] uppercase text-gold2/70">Dash-stewarded</span>
      </div>

      <p className="eyebrow text-bone/50 mb-5">Dash Evolution Identity</p>

      <div className="flex items-center gap-4 mb-5">
        <span className="relative inline-block w-4 h-4 rounded-full bg-teal2 animate-pulse-ring" />
        <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-bone">
          davara.dash
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div>
          <p className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-bone/40 mb-1">
            Identity Status
          </p>
          <p className="font-mono text-[0.72rem] tracking-[0.12em] text-gold2">
            Pending DPNS contested-name auction · est. live Q3 2026
          </p>
        </div>
        <div>
          <p className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-bone/40 mb-1">
            Mainnet Address
          </p>
          <p className="font-mono text-[0.68rem] tracking-[0.06em] text-bone/60 break-all">
            {PLACEHOLDER_ADDRESS}
          </p>
          <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-rose-400 mt-1" style={{ color: "#ff9b9b" }}>
            PLACEHOLDER — replace pre-launch
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <CopyButton text="davara.dash" label="Copy davara.dash" />
        <CopyButton text={PLACEHOLDER_ADDRESS} label="Copy address" className="btn-ghost !border-bone/20 !text-bone/80" />
        <a
          href={dashUri}
          className="btn btn-ghost"
          aria-label="Open in DashPay"
        >
          Open in DashPay →
        </a>
      </div>
    </motion.div>
  );
}
