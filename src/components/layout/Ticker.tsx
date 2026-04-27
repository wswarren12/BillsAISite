"use client";

const ITEMS = [
  "AI product strategy",
  "Gamification systems",
  "Smart contracts",
  "Tokenomics design",
  "0-to-1 platforms",
  "Venture fundraising",
  "Agent architectures",
  "No-code builders",
  "Behavioral design",
  "Marketplace strategy",
  "Web3 communities",
  "AI product strategy",
  "Gamification systems",
  "Smart contracts",
  "Tokenomics design",
  "0-to-1 platforms",
  "Venture fundraising",
  "Agent architectures",
  "No-code builders",
  "Behavioral design",
  "Marketplace strategy",
  "Web3 communities",
];

export default function Ticker() {
  return (
    <div
      className="overflow-hidden relative"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "var(--ink-900)",
      }}
    >
      <div
        className="flex gap-12 py-[18px] whitespace-nowrap animate-marquee font-mono text-xs"
        style={{ color: "var(--text-2)" }}
      >
        {ITEMS.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2.5">
            <span
              className="w-[5px] h-[5px] rounded-full flex-shrink-0"
              style={{ background: "var(--indigo)" }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
