"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface BurnRateChartProps {
  planned: number[];
  actual: number[];
  labels?: string[];
}

export default function BurnRateChart({ planned, actual, labels }: BurnRateChartProps) {
  const maxVal = Math.max(...planned, ...actual, 1);
  const barHeight = 18;
  const gap = 6;
  const rowHeight = barHeight * 2 + gap + 28;
  const svgHeight = planned.length * rowHeight + 20;
  const barAreaWidth = 400;
  const leftPad = 60;
  const totalWidth = leftPad + barAreaWidth + 40;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease }}
      className="w-full overflow-x-auto"
    >
      <svg
        viewBox={`0 0 ${totalWidth} ${svgHeight}`}
        className="w-full h-auto"
        style={{ maxHeight: `${svgHeight}px`, minWidth: "320px" }}
      >
        {planned.map((p, i) => {
          const y = i * rowHeight + 10;
          const a = actual[i] || 0;
          const pWidth = (p / maxVal) * barAreaWidth;
          const aWidth = (a / maxVal) * barAreaWidth;
          const label = labels?.[i] || `M${i + 1}`;

          return (
            <g key={i}>
              <text
                x={leftPad - 8}
                y={y + 18}
                textAnchor="end"
                fill="rgba(233,230,223,0.55)"
                fontSize="10"
                fontFamily="var(--font-mono)"
              >
                {label}
              </text>
              {/* Planned bar */}
              <rect
                x={leftPad}
                y={y}
                width={pWidth}
                height={barHeight}
                rx="4"
                fill="rgba(59,232,197,0.2)"
                stroke="rgba(59,232,197,0.35)"
                strokeWidth="1"
              />
              <text
                x={leftPad + pWidth + 6}
                y={y + 13}
                fill="rgba(59,232,197,0.7)"
                fontSize="9"
                fontFamily="var(--font-mono)"
              >
                {p} DASH (planned)
              </text>
              {/* Actual bar */}
              <rect
                x={leftPad}
                y={y + barHeight + gap}
                width={aWidth}
                height={barHeight}
                rx="4"
                fill="rgba(245,197,108,0.25)"
                stroke="rgba(245,197,108,0.4)"
                strokeWidth="1"
              />
              <text
                x={leftPad + Math.max(aWidth, 0) + 6}
                y={y + barHeight + gap + 13}
                fill="rgba(245,197,108,0.7)"
                fontSize="9"
                fontFamily="var(--font-mono)"
              >
                {a} DASH (actual)
              </text>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}
