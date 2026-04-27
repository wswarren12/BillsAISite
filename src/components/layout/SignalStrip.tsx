"use client";

const BARS = 48;

// Precomputed to avoid SSR/client hydration mismatch
const BAR_DATA = Array.from({ length: BARS }, (_, i) => ({
  height: `${(20 + Math.sin(i * 0.7) * 30 + 30).toFixed(2)}%`,
  opacity: parseFloat((0.3 + Math.sin(i * 0.5) * 0.3 + 0.4).toFixed(3)),
  delay: `${(i * 0.04).toFixed(2)}s`,
}));

export default function SignalStrip() {
  return (
    <div
      className="relative overflow-hidden px-7 py-9"
      style={{
        background: "var(--paper-2)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="mx-auto max-w-[1280px] grid items-center gap-12"
        style={{ gridTemplateColumns: "300px 1fr" }}
      >
        <div>
          <div
            className="font-mono text-[10px] tracking-[0.18em] uppercase flex items-center gap-2.5"
            style={{ color: "var(--muted-on-paper)" }}
          >
            <span>◉ Signal</span>
            <span>— currently processing</span>
          </div>
          <div
            className="mt-2.5"
            style={{
              fontSize: 20,
              letterSpacing: "-0.01em",
              fontWeight: 500,
              color: "var(--ink-on-paper)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                color: "var(--indigo-deep)",
              }}
            >
              Building
            </span>{" "}
            what comes after the feature request.
          </div>
        </div>

        {/* Waveform */}
        <div className="flex items-center gap-[3px] h-10">
          {BAR_DATA.map((bar, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm animate-sig"
              style={{
                background: "var(--indigo-deep)",
                animationDelay: bar.delay,
                height: bar.height,
                opacity: bar.opacity,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
