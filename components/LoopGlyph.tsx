"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";

interface LoopGlyphProps {
  type: "R+" | "B-";
  caption?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { w: 28, r: 10, font: 6, captionClass: "text-[0.55rem]" },
  md: { w: 40, r: 15, font: 8, captionClass: "text-[0.62rem]" },
  lg: { w: 56, r: 21, font: 11, captionClass: "text-[0.68rem]" },
};

export default function LoopGlyph({ type, caption, size = "md" }: LoopGlyphProps) {
  const s = sizeMap[size];
  const isR = type === "R+";
  const color = isR ? "#3be8c5" : "#f5c56c";
  const reduced = useReducedMotion();

  return (
    <span className="inline-flex flex-col items-center gap-1">
      <motion.svg
        width={s.w}
        height={s.w}
        viewBox={`0 0 ${s.w} ${s.w}`}
        fill="none"
        className="shrink-0"
        aria-label={`${isR ? "Reinforcing" : "Balancing"} loop`}
        role="img"
        whileHover={reduced ? undefined : { rotate: 6 }}
        whileInView={reduced ? undefined : { rotate: [0, 6, 0] }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <circle
          cx={s.w / 2}
          cy={s.w / 2}
          r={s.r}
          stroke={color}
          strokeWidth="1.2"
          strokeDasharray="3.5 2.5"
          fill="none"
        />
        {/* Arrow head at top of circle */}
        <path
          d={`M${s.w / 2 + s.r - 2} ${s.w / 2 - s.r + 4} l3 -4 l-5 1z`}
          fill={color}
        />
        <text
          x={s.w / 2}
          y={s.w / 2 + s.font * 0.35}
          textAnchor="middle"
          fill={color}
          fontSize={s.font}
          fontFamily="var(--font-mono)"
          fontWeight="600"
        >
          {type}
        </text>
      </motion.svg>
      {caption && (
        <span
          className={clsx(
            "font-mono tracking-[0.1em] uppercase text-center leading-tight max-w-[120px]",
            s.captionClass,
            isR ? "text-teal2/70" : "text-gold2/70"
          )}
        >
          {caption}
        </span>
      )}
    </span>
  );
}
