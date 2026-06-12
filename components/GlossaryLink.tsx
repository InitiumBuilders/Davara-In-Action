"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { getGlossaryEntry } from "@/lib/glossary";

interface GlossaryLinkProps {
  term: string;
  children: React.ReactNode;
}

export default function GlossaryLink({ term, children }: GlossaryLinkProps) {
  const entry = getGlossaryEntry(term);
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, [show]);

  if (!entry) {
    return <span>{children}</span>;
  }

  return (
    <span className="relative inline" ref={ref}>
      <Link
        href={`/systems#term-${entry.slug}`}
        className="text-teal2 underline decoration-teal2/30 decoration-dotted underline-offset-[3px] hover:decoration-teal2/80 transition-colors"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      >
        {children}
      </Link>
      {show && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 glass-strong rounded-lg px-3 py-2 text-[0.68rem] text-bone/90 font-body leading-snug whitespace-normal w-[220px] pointer-events-none shadow-lg"
          role="tooltip"
        >
          <span className="font-mono text-[0.55rem] tracking-[0.12em] uppercase text-teal2 block mb-1">
            {entry.term}
          </span>
          {entry.definition}
        </span>
      )}
    </span>
  );
}
