"use client";

import { motion } from "framer-motion";
import type { Milestone } from "@/lib/status";

const ease = [0.22, 1, 0.36, 1] as const;

interface MilestoneTimelineProps {
  milestones: Milestone[];
}

const statusColor: Record<string, string> = {
  done: "bg-teal2",
  "in-progress": "bg-gold2",
  pending: "bg-bone/25",
};

const statusLabel: Record<string, string> = {
  done: "Done",
  "in-progress": "In Progress",
  pending: "Pending",
};

const statusBorder: Record<string, string> = {
  done: "border-teal2/40",
  "in-progress": "border-gold2/40",
  pending: "border-white/10",
};

export default function MilestoneTimeline({ milestones }: MilestoneTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line on mobile, horizontal on desktop */}
      <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px md:w-full md:h-px md:top-6 bg-white/10" />

      <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-3">
        {milestones.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease, delay: i * 0.06 }}
            className="relative pl-10 md:pl-0 md:flex-1"
          >
            {/* Status dot */}
            <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-0 md:top-3 -translate-y-0 md:-translate-y-1/2">
              <span
                className={`block w-3 h-3 rounded-full ${statusColor[m.status]} ${
                  m.status === "in-progress" ? "animate-milestone-pulse" : ""
                }`}
              />
            </div>

            <div className={`glass rounded-xl p-4 md:mt-10 border ${statusBorder[m.status]}`}>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="font-mono text-[0.55rem] tracking-[0.14em] uppercase text-bone/40">
                  Month {m.plannedMonth}
                </span>
                <span
                  className={`font-mono text-[0.5rem] tracking-[0.12em] uppercase px-1.5 py-0.5 rounded-full ${
                    m.status === "done"
                      ? "text-teal2 bg-teal2/10"
                      : m.status === "in-progress"
                      ? "text-gold2 bg-gold2/10"
                      : "text-bone/40 bg-white/5"
                  }`}
                >
                  {statusLabel[m.status]}
                </span>
              </div>
              <p className="font-display text-[0.85rem] sm:text-[0.95rem] font-semibold text-bone leading-snug mb-2">
                {m.title}
              </p>
              <p className="text-[0.78rem] text-bone/65 leading-relaxed">
                {m.description}
              </p>
              {m.evidence && (
                <a
                  href={m.evidence}
                  target="_blank"
                  rel="noreferrer"
                  className="ulink font-mono text-[0.55rem] tracking-[0.12em] uppercase mt-2 inline-block"
                >
                  Evidence →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
