export default function StewardshipBadge() {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold2/20 bg-gold2/5 animate-badge-breathe">
      <span className="w-1.5 h-1.5 rounded-full bg-gold2" />
      <span className="font-mono text-[0.52rem] sm:text-[0.58rem] tracking-[0.12em] uppercase text-bone/70">
        Operated by MotusMoves · Stewarded by Dash DAO
      </span>
    </span>
  );
}
