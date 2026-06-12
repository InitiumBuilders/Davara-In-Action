"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";

const ease = [0.22, 1, 0.36, 1] as const;

const tenets = [
  {
    n: "01",
    t: "Consent, not compliance.",
    b: "Compliance asks \u201Cwas the rule followed?\u201D Consent asks \u201Cdid the right parties actually agree, legibly, in context, with real power to refuse?\u201D We build the second.",
  },
  {
    n: "02",
    t: "Divergence before consensus.",
    b: "Any unanimous quorum is a captured quorum. Disagreement is evidence the protocol is alive. Monoculture is the vulnerability; divergence is the defense.",
  },
  {
    n: "03",
    t: "Refusal is first-class.",
    b: "Signers are empowered \u2014 and expected \u2014 to reject. REJECTs are logged, rationalized, and surfaced to humans. A system where every signer always approves is not safe. It is captured.",
  },
  {
    n: "04",
    t: "Humans where judgment changes outcome. Nowhere else.",
    b: "Human approval is reserved for Tier 2 and Tier 3. Everything else is for machines that disagree well. Signing fatigue is the real attack surface \u2014 we measure it, surface it, and guard against it.",
  },
  {
    n: "05",
    t: "Intelligence is infrastructure.",
    b: "Infrastructure gets audited, versioned, rate-limited, paused, and recovered. So do our EIs. If you cannot pause it, audit it, version it, recover it \u2014 you do not own it.",
  },
  {
    n: "06",
    t: "Adversarial by default.",
    b: "Every signer assumes the requester may be compromised. Every requester assumes signers may be captured. The protocol must survive either. This is the crypto posture \u2014 adapted for cognition.",
  },
  {
    n: "07",
    t: "The long game.",
    b: "Most of what will be called AI in 2026 will be forgotten by 2030. What will remain is the infrastructure of trust around it. That is what we are building. Ad Infinitum.",
  },
];

export default function ManifestoPage() {
  return (
    <>
      <Backdrop />
      <Nav />

      <section className="section !pt-32 sm:!pt-40 md:!pt-48">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap gap-2 mb-6 sm:mb-8"
          >
            <span className="tag">The Manifesto · v2</span>
            <span className="tag tag-gold">Emergent Age</span>
            <span className="tag tag-indigo">Stake in the ground</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="h-display mb-8 sm:mb-10 text-bone"
          >
            <span className="gradient-ink">Emergent Intelligence</span>
            <br />
            in the Emergent Age.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="h-section text-bone max-w-4xl"
          >
            We are not building another assistant.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.18 }}
            className="body-lg text-bone/70 max-w-3xl mt-5 sm:mt-6"
          >
            Assistants take orders. <em className="italic text-bone">Emergent Intelligences take responsibility.</em> An EI is evaluated not by what it does, but by what it refuses to do without consent.
          </motion.p>
        </div>
      </section>

      {/* MISSION CARD */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="glass-strong rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-teal2/10 blur-3xl pointer-events-none" />
            <p className="eyebrow text-teal2/80 mb-4 sm:mb-5">Our Mission</p>
            <p className="font-display text-lg sm:text-2xl md:text-4xl font-bold leading-snug tracking-tight text-bone max-w-4xl">
              To build <span className="gradient-ink">consent infrastructure</span> for
              intelligence itself — so that as AI systems gain power, they gain it{" "}
              <span className="italic">with</span> us, not{" "}
              <span className="italic">from</span> us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TENETS */}
      <section className="section">
        <div className="container-narrow">
          <div className="glass-strong rounded-3xl overflow-hidden">
            {tenets.map((t, i) => (
              <motion.div
                key={t.n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease, delay: i * 0.04 }}
                className={`p-6 sm:p-10 md:p-12 grid gap-4 sm:gap-6 md:grid-cols-[auto_1fr] ${
                  i !== 0 ? "border-t border-white/5" : ""
                }`}
              >
                <div className="md:min-w-[120px]">
                  <span className="font-mono text-[0.7rem] tracking-[0.22em] text-teal2">
                    // {t.n}
                  </span>
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug text-bone mb-3 sm:mb-4">
                    {t.t}
                  </p>
                  <p className="body-lg text-bone/70 max-w-3xl">{t.b}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MANTRA */}
      <section className="section">
        <div className="container-narrow text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-snug max-w-4xl mx-auto text-bone"
          >
            Think Different <span className="text-bone/40">→</span>
            <br className="sm:hidden" />{" "}
            Think Divergent <span className="text-bone/40">→</span>
            <br className="sm:hidden" />{" "}
            <span className="gradient-ink">Think Davara.</span>
          </motion.p>
          <p className="eyebrow text-bone/50 mt-8 sm:mt-10">
            // Sometimes a few words are all that you need //
          </p>
          <p className="eyebrow text-gold2/80 mt-3">
            Acta Non Verba · Semper Fortis · Ad Infinitum
          </p>

          <div className="mt-10 sm:mt-12 flex justify-center flex-wrap gap-3">
            <Link href="/problem" className="btn btn-teal">The problem →</Link>
            <Link href="/protocol" className="btn btn-ghost">The protocol</Link>
            <Link href="/research" className="btn btn-ghost">The research</Link>
            <Link href="/business" className="btn btn-ghost">The business</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
