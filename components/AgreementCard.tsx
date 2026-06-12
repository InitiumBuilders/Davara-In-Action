"use client";

interface AgreementCardProps {
  ask: string;
  term: string;
  steward: string;
  operator: string;
  votingMath: string;
  status: string;
}

export default function AgreementCard({
  ask,
  term,
  steward,
  operator,
  votingMath,
  status,
}: AgreementCardProps) {
  return (
    <div className="glass-strong rounded-2xl p-5 sm:p-6 sticky top-24">
      <p className="font-mono text-[0.55rem] tracking-[0.14em] uppercase text-gold2 mb-4">
        Agreement Summary
      </p>
      <div className="flex flex-col gap-3">
        {[
          { label: "Status", value: status, accent: true },
          { label: "Ask", value: ask },
          { label: "Term", value: term },
          { label: "Operator", value: operator },
          { label: "Steward", value: steward },
          { label: "Voting", value: votingMath },
        ].map((row) => (
          <div key={row.label}>
            <p className="font-mono text-[0.5rem] tracking-[0.14em] uppercase text-bone/35">
              {row.label}
            </p>
            <p
              className={`font-mono text-[0.68rem] tracking-[0.08em] ${
                row.accent ? "text-gold2" : "text-bone/85"
              }`}
            >
              {row.value}
            </p>
          </div>
        ))}
      </div>
      <div className="hairline my-4" />
      <div className="flex flex-col gap-2">
        <a
          href="https://www.dashcentral.org"
          target="_blank"
          rel="noreferrer"
          className="btn btn-teal !py-2 !text-[0.56rem] w-full justify-center"
        >
          Submit on DashCentral →
        </a>
        <a
          href="https://www.dash.org/forum"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost !py-2 !text-[0.56rem] w-full justify-center"
        >
          Discuss on Dash Forum
        </a>
      </div>
      <p className="font-mono text-[0.48rem] tracking-[0.1em] uppercase text-bone/25 mt-3 text-center">
        Draft — final figures confirmed at submission
      </p>
    </div>
  );
}
