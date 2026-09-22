export function StateOutline({ abbr, className = "" }: { abbr: string; className?: string }) {
  return (
    <svg viewBox="0 0 140 110" className={className} fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M8 14 L96 8 L132 34 L128 70 L112 102 L46 98 L24 82 L18 50 L28 40 L8 30 Z" strokeLinejoin="round" />
      <text
        x="70"
        y="62"
        textAnchor="middle"
        className="fill-brand font-display"
        style={{ fontSize: "30px", fontWeight: 700, stroke: "none" }}
      >
        {abbr}
      </text>
    </svg>
  );
}
