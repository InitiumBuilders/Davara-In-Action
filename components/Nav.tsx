"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const groups = [
  {
    label: "Read",
    links: [
      { href: "/summary", label: "Summary" },
      { href: "/problem", label: "Problem" },
      { href: "/research", label: "Research" },
      { href: "/frontier", label: "Frontier" },
      { href: "/systems", label: "Systems" },
    ],
  },
  {
    label: "Build",
    links: [
      { href: "/protocol", label: "Protocol" },
      { href: "/process", label: "Process" },
      { href: "/business", label: "Business" },
      { href: "/status", label: "Status" },
    ],
  },
  {
    label: "Fund",
    links: [
      { href: "/access", label: "Access" },
      { href: "/dao", label: "DAO" },
      { href: "/fund", label: "Fund" },
    ],
  },
];

const desktopLinks = [
  { href: "/summary", label: "Summary" },
  { href: "/protocol", label: "Protocol" },
  { href: "/frontier", label: "Frontier" },
  { href: "/business", label: "Business" },
  { href: "/fund", label: "Fund" },
  { href: "/manifesto", label: "Manifesto" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close "More" on outside click
  useEffect(() => {
    if (!more) return;
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMore(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [more]);

  const allLinks = groups.flatMap((g) => g.links);
  const moreLinks = allLinks.filter((l) => !desktopLinks.find((d) => d.href === l.href));

  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass-strong">
      <div className="container-narrow flex items-center justify-between py-3 sm:py-4 px-4 sm:px-5">
        <Link
          href="/"
          className="flex items-center gap-2 group shrink-0"
          onClick={() => { setOpen(false); setMore(false); }}
        >
          <span className="relative inline-block w-2.5 h-2.5 rounded-full bg-teal2 animate-pulse-ring" />
          <span className="font-mono text-[0.62rem] sm:text-[0.7rem] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-bone/80 group-hover:text-teal2 transition-colors">
            Davara-In-Use
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {desktopLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-mono text-[0.66rem] tracking-[0.18em] uppercase transition-colors whitespace-nowrap ${
                  active ? "text-teal2" : "text-bone/60 hover:text-bone"
                }`}
              >
                {l.label}
              </Link>
            );
          })}

          {/* More dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMore((v) => !v)}
              className="font-mono text-[0.66rem] tracking-[0.18em] uppercase text-bone/60 hover:text-bone transition-colors whitespace-nowrap"
              aria-expanded={more}
            >
              More
            </button>
            <AnimatePresence>
              {more && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 glass-strong rounded-xl p-2 min-w-[160px] flex flex-col gap-1"
                >
                  {moreLinks.map((l) => {
                    const active = pathname === l.href;
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setMore(false)}
                        className={`font-mono text-[0.66rem] tracking-[0.16em] uppercase py-2 px-3 rounded-lg transition-colors ${
                          active ? "text-teal2 bg-teal2/5" : "text-bone/70 hover:text-bone hover:bg-white/5"
                        }`}
                      >
                        {l.label}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 min-h-[44px] min-w-[44px]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`block w-5 h-[1.5px] bg-bone/85 transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-bone/85 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-bone/85 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile slide-down drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 sm:px-5 py-4 max-h-[calc(100dvh-60px)] overflow-y-auto flex flex-col gap-5">
              {groups.map((g) => (
                <div key={g.label}>
                  <p className="font-mono text-[0.58rem] tracking-[0.18em] uppercase text-bone/35 mb-2 px-2">
                    {g.label}
                  </p>
                  <div className="flex flex-col gap-1">
                    {g.links.map((l) => {
                      const active = pathname === l.href;
                      return (
                        <Link
                          key={l.href}
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className={`font-mono text-[0.75rem] tracking-[0.18em] uppercase py-3 px-2 rounded-lg transition-colors ${
                            active ? "text-teal2 bg-teal2/5" : "text-bone/75 hover:text-bone hover:bg-white/5"
                          }`}
                        >
                          {l.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
              {/* Always show Home + Manifesto */}
              <div>
                <div className="flex flex-col gap-1">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/manifesto", label: "Manifesto" },
                  ].map((l) => {
                    const active = pathname === l.href;
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`font-mono text-[0.75rem] tracking-[0.18em] uppercase py-3 px-2 rounded-lg transition-colors ${
                          active ? "text-teal2 bg-teal2/5" : "text-bone/75 hover:text-bone hover:bg-white/5"
                        }`}
                      >
                        {l.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
