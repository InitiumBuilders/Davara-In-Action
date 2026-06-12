"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface FrameworkCardProps {
  company: string;
  framework: string;
  summary: string;
  url: string;
  index?: number;
}

export default function FrameworkCard({ company, framework, summary, url, index = 0 }: FrameworkCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease, delay: index * 0.04 }}
      className="glass rounded-2xl p-5 sm:p-6 card block"
    >
      <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center mb-4">
        <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-teal2">
          {company.slice(0, 2)}
        </span>
      </div>
      <p className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-bone/50 mb-1">
        {company}
      </p>
      <p className="h-card text-bone mb-2">{framework}</p>
      <p className="body-lg text-bone/70">{summary}</p>
    </motion.a>
  );
}
