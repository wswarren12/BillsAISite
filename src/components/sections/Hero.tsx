"use client";

import { useEffect, useRef, useState } from "react";

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w: number, h: number, dpr: number;
    let particles: Array<{
      x: number; y: number; vx: number; vy: number; r: number; pulse: number;
    }> = [];
    let raf: number;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor((w * h) / 18000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.4,
        pulse: Math.random() * Math.PI * 2,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          const f = ((160 - dist) / 160) * 0.04;
          p.x += dx * f;
          p.y += dy * f;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            const op = (1 - d / 120) * 0.22;
            ctx.strokeStyle = `oklch(0.78 0.15 265 / ${op})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const glow = 0.6 + Math.sin(p.pulse) * 0.4;
        ctx.fillStyle = `oklch(0.85 0.14 265 / ${0.6 * glow})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

function CountUp({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1800;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(target * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setVal(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  const display =
    target >= 10 ? Math.round(val).toLocaleString() : val.toFixed(0);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      <span style={{ color: "var(--indigo-2)", fontWeight: 400 }}>
        {suffix}
      </span>
    </span>
  );
}

function TypingRotator({ items }: { items: string[] }) {
  const [idx, setIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[idx];
    if (!deleting && display === current) {
      const t = setTimeout(() => setDeleting(true), 2600);
      return () => clearTimeout(t);
    }
    if (deleting && display === "") {
      setDeleting(false);
      setIdx((idx + 1) % items.length);
      return;
    }
    const t = setTimeout(
      () => {
        if (deleting) setDisplay(current.slice(0, display.length - 1));
        else setDisplay(current.slice(0, display.length + 1));
      },
      deleting ? 30 : 55
    );
    return () => clearTimeout(t);
  }, [display, deleting, idx, items]);

  return (
    <span>
      {display}
      <span style={{ opacity: 0.6, color: "var(--indigo-2)" }}>▊</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 80% -10%, rgba(124,131,255,0.18), transparent 60%), radial-gradient(900px 500px at -10% 110%, rgba(245,181,68,0.09), transparent 60%), var(--ink-950)",
      }}
    >
      <HeroCanvas />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(circle at 50% 40%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 40%, black 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div
        className="relative mx-auto max-w-[1280px] px-7"
        style={{ paddingTop: 160, paddingBottom: 80, zIndex: 2 }}
      >
        {/* Status tag */}
        <div
          className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.14em] uppercase px-3 py-1.5 rounded-full border"
          style={{
            color: "var(--text-2)",
            borderColor: "var(--line-2)",
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            className="w-[7px] h-[7px] rounded-full animate-pulse-dot"
            style={{ background: "#5dd39e" }}
          />
          <span>Currently Head of Product at Game7 / Summon</span>
        </div>

        {/* Main headline */}
        <h1
          className="mt-7"
          style={{
            fontSize: "clamp(52px, 9vw, 132px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            fontWeight: 600,
            color: "var(--text-0)",
          }}
        >
          <span className="block">Bill Warren</span>
          <span
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.045em",
              background:
                "linear-gradient(100deg, var(--indigo-2) 10%, var(--amber-2) 85%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Building the{" "}
            <span style={{ whiteSpace: "nowrap" }}>0→1</span>
          </span>
        </h1>

        {/* Sub */}
        <p
          className="mt-7"
          style={{
            maxWidth: 600,
            fontSize: 18,
            lineHeight: 1.55,
            color: "var(--text-1)",
          }}
        >
          Product leader at the intersection of{" "}
          <TypingRotator
            items={[
              "AI & agents.",
              "gamified platforms.",
              "web3 & tokenomics.",
              "fintech infrastructure.",
              "0-to-1 products.",
            ]}
          />
          <br />
          Turning complex problems into products people love.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3.5 items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-sm font-semibold no-underline transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--text-0)",
              color: "var(--ink-950)",
              boxShadow: "0 10px 30px rgba(255,255,255,0.1)",
            }}
          >
            Let&apos;s work together
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-sm font-semibold no-underline transition-colors"
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "var(--text-0)",
              border: "1px solid var(--line-2)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.08)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.04)")
            }
          >
            View experience →
          </a>
        </div>

        {/* Metric rail */}
        <div
          className="mt-20 grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          {[
            { target: 500, suffix: "K+", prefix: "", label: "Platform users", delay: "0.1s" },
            { target: 30, suffix: "M+", prefix: "$", label: "$ processed", delay: "0.3s" },
            { target: 28, suffix: "M+", prefix: "", label: "Tasks completed", delay: "0.5s" },
            { target: 7, suffix: "+", prefix: "", label: "Yrs leading product", delay: "0.7s" },
          ].map((m, i) => (
            <div
              key={i}
              className="relative"
              style={{
                padding: "28px 4px 24px",
                borderRight: i < 3 ? "1px solid var(--line)" : undefined,
              }}
            >
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  color: "var(--text-0)",
                  lineHeight: 1,
                }}
              >
                <CountUp
                  target={m.target}
                  suffix={m.suffix}
                  prefix={m.prefix}
                />
              </div>
              <div
                className="mt-2.5 font-mono text-[11px] tracking-[0.08em] uppercase"
                style={{ color: "var(--text-3)" }}
              >
                {m.label}
              </div>
              <div
                className="mt-3.5 h-0.5 w-full animate-bar-in"
                style={{
                  background:
                    "linear-gradient(90deg, var(--indigo), transparent)",
                  animationDelay: m.delay,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
