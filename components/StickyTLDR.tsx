"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface StickyTLDRProps {
  text: string;
}

export default function StickyTLDR({ text }: StickyTLDRProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [100, 300], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 inset-x-0 z-[55] glass-strong border-b border-white/5 pointer-events-none"
      style={{ opacity }}
    >
      <div className="container-narrow py-[52px] sm:py-[56px] px-4 sm:px-5">
        <p className="font-mono text-[0.58rem] sm:text-[0.65rem] tracking-[0.12em] uppercase text-teal2/80 truncate">
          TL;DR — {text}
        </p>
      </div>
    </motion.div>
  );
}
