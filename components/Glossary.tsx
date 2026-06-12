"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GlossaryItem {
  term: string;
  definition: string;
  relevance: string;
}

interface GlossaryProps {
  items: GlossaryItem[];
}

export default function Glossary({ items }: GlossaryProps) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((item) => {
        const isOpen = open === item.term;
        return (
          <div key={item.term} className="border-b border-white/5">
            <button
              onClick={() => setOpen(isOpen ? null : item.term)}
              className="w-full flex items-center justify-between py-4 sm:py-5 px-1 text-left min-h-[44px] group"
              aria-expanded={isOpen}
            >
              <span className="font-mono text-[0.72rem] sm:text-[0.78rem] tracking-[0.12em] uppercase text-bone group-hover:text-teal2 transition-colors">
                {item.term}
              </span>
              <span className="font-mono text-[0.8rem] text-bone/40 shrink-0 ml-3 transition-transform" style={{ transform: isOpen ? "rotate(45deg)" : "none" }}>
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 px-1 space-y-1">
                    <p className="body-lg text-bone/80">{item.definition}</p>
                    <p className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-teal2/70">
                      Why it matters → {item.relevance}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
