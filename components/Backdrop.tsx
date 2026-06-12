export default function Backdrop() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 grid-backdrop opacity-40 sm:opacity-60" />
      <div className="aurora" />
      <div
        className="glow-dot"
        style={{
          left: "12%",
          top: "18%",
          width: 360,
          height: 360,
          background: "rgba(59, 232, 197, 0.35)",
        }}
      />
      <div
        className="glow-dot"
        style={{
          right: "8%",
          top: "48%",
          width: 420,
          height: 420,
          background: "rgba(138, 122, 245, 0.32)",
          animationDelay: "3s",
        }}
      />
      <div
        className="glow-dot"
        style={{
          left: "36%",
          bottom: "4%",
          width: 320,
          height: 320,
          background: "rgba(245, 197, 108, 0.22)",
          animationDelay: "6s",
        }}
      />
    </div>
  );
}
