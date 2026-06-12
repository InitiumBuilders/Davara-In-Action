"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A living visualization of Davara's reasoning process.
 * Not decoration — a literal diagram of how we work:
 *
 *   FRAME → OBSERVE → DIVERGE → SYNTHESIZE → PRESSURE-TEST → SHIP
 *        ↑___________________ FEEDBACK ___________________↓
 *
 * Nodes pulse. Signals flow along edges. Feedback loops back.
 */

type Node = {
  id: string;
  label: string;
  x: number; // 0-1000 viewbox
  y: number; // 0-600 viewbox
  color: string;
  ring: string;
};

const NODES: Node[] = [
  { id: "frame", label: "FRAME", x: 100, y: 300, color: "#f5c56c", ring: "rgba(245,197,108,0.4)" },
  { id: "observe", label: "OBSERVE", x: 260, y: 150, color: "#3be8c5", ring: "rgba(59,232,197,0.4)" },
  { id: "diverge", label: "DIVERGE", x: 500, y: 120, color: "#8a7af5", ring: "rgba(138,122,245,0.4)" },
  { id: "synth", label: "SYNTHESIZE", x: 740, y: 220, color: "#3be8c5", ring: "rgba(59,232,197,0.4)" },
  { id: "test", label: "PRESSURE-TEST", x: 760, y: 420, color: "#ff9b9b", ring: "rgba(255,155,155,0.4)" },
  { id: "ship", label: "SHIP", x: 500, y: 500, color: "#f5c56c", ring: "rgba(245,197,108,0.4)" },
  { id: "reflect", label: "REFLECT", x: 230, y: 470, color: "#b4a8ff", ring: "rgba(180,168,255,0.4)" },
];

const EDGES: { from: string; to: string; dashed?: boolean }[] = [
  { from: "frame", to: "observe" },
  { from: "observe", to: "diverge" },
  { from: "diverge", to: "synth" },
  { from: "synth", to: "test" },
  { from: "test", to: "ship" },
  { from: "ship", to: "reflect" },
  { from: "reflect", to: "frame", dashed: true }, // feedback
  { from: "test", to: "diverge", dashed: true }, // inner feedback
];

function findNode(id: string): Node {
  return NODES.find((n) => n.id === id)!;
}

export default function SystemsThinkingVisual() {
  // A traveling pulse along the main path — indexes which edge is "active"
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % EDGES.length), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full glass-strong rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-indigo2/25 blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <p className="eyebrow text-teal2">Systems Thinking · Live</p>
        <p className="eyebrow text-bone/50">The Davara Way</p>
      </div>

      <svg
        viewBox="0 0 1000 600"
        className="w-full h-auto"
        style={{ maxHeight: "480px" }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Dotted grid bg */}
        <defs>
          <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill="rgba(255,255,255,0.06)" />
          </pattern>
          <radialGradient id="glow-teal" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#3be8c5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3be8c5" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#dots)" />

        {/* Edges */}
        {EDGES.map((e, i) => {
          const from = findNode(e.from);
          const to = findNode(e.to);
          const isActive = i === active;
          return (
            <g key={`${e.from}-${e.to}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={
                  e.dashed
                    ? "rgba(180,168,255,0.35)"
                    : isActive
                    ? "rgba(59,232,197,0.8)"
                    : "rgba(233,230,223,0.16)"
                }
                strokeWidth={isActive ? 2.4 : 1.6}
                strokeDasharray={e.dashed ? "6 7" : "none"}
                className={e.dashed ? "animate-dash-flow" : ""}
              />
              {/* Pulse traveling along active edge */}
              {isActive && !e.dashed && (
                <motion.circle
                  r={6}
                  fill="#3be8c5"
                  initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                  animate={{ cx: to.x, cy: to.y, opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 8px #3be8c5)" }}
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((n, i) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r="42"
              fill="url(#glow-teal)"
              opacity="0.25"
              className="node-pulse"
              style={{ animationDelay: `${i * 0.3}s`, transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="26"
              fill="#0a0c14"
              stroke={n.color}
              strokeWidth="1.8"
            />
            <circle cx={n.x} cy={n.y} r="6" fill={n.color} />
            <text
              x={n.x}
              y={n.y + 58}
              textAnchor="middle"
              fill="rgba(233,230,223,0.85)"
              fontFamily="var(--font-mono)"
              fontSize="16"
              letterSpacing="2"
              fontWeight="500"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* Feedback annotation */}
        <text
          x="120"
          y="380"
          fill="rgba(180,168,255,0.6)"
          fontFamily="var(--font-mono)"
          fontSize="12"
          letterSpacing="2"
        >
          ←&nbsp;&nbsp;FEEDBACK LOOP
        </text>
      </svg>

      {/* Legend strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6 text-center">
        {[
          ["Frame", "Reject weak questions"],
          ["Observe", "Evidence first"],
          ["Diverge", "Multiple minds"],
          ["Synthesize", "Cross-domain"],
          ["Pressure-test", "Adversarial"],
          ["Ship", "Acta Non Verba"],
          ["Reflect", "Loop back"],
          ["Repeat", "Ad Infinitum"],
        ].map(([k, v]) => (
          <div key={k} className="p-2 rounded-lg border border-white/5">
            <p className="font-mono text-[0.58rem] sm:text-[0.65rem] tracking-[0.14em] uppercase text-teal2">
              {k}
            </p>
            <p className="text-[0.7rem] sm:text-xs text-bone/55 mt-1">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
