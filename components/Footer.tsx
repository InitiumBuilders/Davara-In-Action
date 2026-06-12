import Link from "next/link";
import DashIdentityCard from "./DashIdentityCard";
import StewardshipBadge from "./StewardshipBadge";

export default function Footer() {
  return (
    <footer className="section !pb-16 !pt-20 border-t border-white/5">
      <div className="container-narrow flex flex-col gap-10">
        {/* davara.dash identity block */}
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div>
            <DashIdentityCard compact />
          </div>
          <div className="flex flex-col gap-3">
            <p className="body-lg text-bone/70">
              Fund the consent layer. Tip via Dash, vote on the DAO proposal, or get masternode access.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/fund" className="btn btn-teal !py-2 !px-3 !text-[0.58rem] !min-h-[36px]">Tip →</Link>
              <Link href="/dao" className="btn btn-ghost !py-2 !px-3 !text-[0.58rem] !min-h-[36px]">DAO Proposal</Link>
              <Link href="/access" className="btn btn-ghost !py-2 !px-3 !text-[0.58rem] !min-h-[36px]">Access</Link>
              <Link href="/status" className="btn btn-ghost !py-2 !px-3 !text-[0.58rem] !min-h-[36px]">Build Status</Link>
            </div>
          </div>
        </div>

        {/* Stewardship */}
        <div className="border-t border-white/5 pt-6">
          <StewardshipBadge />
          <p className="body-lg text-bone/50 mt-3 max-w-2xl">
            Davara is operated by MotusMoves LLC and stewarded by the Dash DAO. The DAO funds, steers, and ratifies. MotusMoves builds, ships, and reports.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            <Link href="/dao" className="ulink font-mono text-[0.58rem] tracking-[0.12em] uppercase inline-block">
              Read the agreement →
            </Link>
            <Link href="/team" className="ulink font-mono text-[0.58rem] tracking-[0.12em] uppercase inline-block">
              Meet the team →
            </Link>
          </div>
        </div>

        {/* Existing footer content */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-t border-white/5 pt-8">
          <div className="flex flex-col gap-2">
            <span className="eyebrow text-bone/50">Davara EI · Case Study 001 · v4</span>
            <p className="font-display text-lg text-bone/85 leading-snug max-w-md">
              Think Different <span className="text-bone/40">→</span>{" "}
              Think Divergent <span className="text-bone/40">→</span>{" "}
              <span className="gradient-ink">Think Davara.</span>
            </p>
          </div>
          <div className="flex flex-col gap-1 font-mono text-[0.68rem] tracking-[0.16em] uppercase text-bone/45">
            <span>Acta Non Verba · Semper Fortis · Ad Infinitum</span>
            <span>April 27, 2026 · v4.0 · Antifragile · Dash-stewarded</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
