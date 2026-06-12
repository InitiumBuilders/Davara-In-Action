"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface TierCardProps {
  tier: string;
  title: string;
  requirement: string;
  perks: string[];
  color: "teal" | "gold" | "indigo";
  index?: number;
}

const colorMap = {
  teal: { tag: "", border: "border-teal2/30", glow: "bg-teal2/10" },
  gold: { tag: "tag-gold", border: "border-gold2/30", glow: "bg-gold2/10" },
  indigo: { tag: "tag-indigo", border: "border-indigo2/30", glow: "bg-indigo2/15" },
};

export default function TierCard({ tier, title, requirement, perks, color, index = 0 }: TierCardProps) {
  const c = colorMap[color];
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, y: 18, scale: 0.96 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={reduced ? undefined : { duration: 0.55, ease, delay: index * 0.08 }}
      className={`glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 card relative overflow-hidden`}
    >
      <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full ${c.glow} blur-3xl pointer-events-none`} />
      <span className={`tag ${c.tag} mb-4`}>{tier}</span>
      <p className="h-card text-bone mt-3 mb-2">{title}</p>
      <p className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-bone/50 mb-4">
        {requirement}
      </p>
      <ul className="flex flex-col gap-2">
        {perks.map((p) => (
          <li key={p} className="body-lg text-bone/75 flex gap-3">
            <span className="text-teal2 font-mono shrink-0 mt-1">+</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
