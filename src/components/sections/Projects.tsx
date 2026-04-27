"use client";

import { useEffect, useRef } from "react";
import { projects, type Project } from "@/data/projects";

type VisualKind = "spinner" | "news" | "voxel";

function ProjectVisual({ kind }: { kind: VisualKind }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let w: number, h: number, dpr: number;
    let t = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      t += 0.015;
      ctx.clearRect(0, 0, w, h);

      if (kind === "spinner") {
        const cx = w / 2, cy = h / 2;
        const segs = 8;
        for (let i = 0; i < segs; i++) {
          const a = (i / segs) * Math.PI * 2 + t * 0.5;
          const r = 50 + Math.sin(t + i) * 6;
          ctx.fillStyle = `oklch(${0.6 + Math.sin(i + t) * 0.15} 0.15 ${265 + i * 10} / 0.7)`;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.arc(cx, cy, r, a, a + (Math.PI * 2) / segs);
          ctx.fill();
        }
        ctx.fillStyle = "rgba(20,22,35,0.9)";
        ctx.beginPath();
        ctx.arc(cx, cy, 18, 0, Math.PI * 2);
        ctx.fill();
      } else if (kind === "news") {
        for (let i = 0; i < 10; i++) {
          const y = ((i * 18 + t * 20) % (h + 40)) - 20;
          const wid = 40 + Math.sin(i + t) * 30 + 60;
          ctx.fillStyle = `oklch(0.75 0.1 ${265 + i * 5} / ${0.15 + (i % 3) * 0.1})`;
          ctx.fillRect(20, y, wid, 3);
          ctx.fillStyle = `oklch(0.6 0.12 ${265 + i * 8} / ${0.2 + (i % 2) * 0.15})`;
          ctx.fillRect(20 + wid + 8, y, 30 + Math.cos(i + t) * 20, 3);
        }
      } else {
        const s = 18;
        const ox = w / 2, oy = h / 2 + 20;
        for (let x = -3; x <= 3; x++) {
          for (let z = -3; z <= 3; z++) {
            const ht = Math.max(
              1,
              Math.sin(x * 0.8 + t) + Math.cos(z * 0.8 + t * 0.8)
            ) * 12;
            const px = ox + (x - z) * s;
            const py = oy + (x + z) * s * 0.5 - ht;
            ctx.fillStyle = `oklch(0.7 0.14 285 / 0.7)`;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px + s, py + s * 0.5);
            ctx.lineTo(px, py + s);
            ctx.lineTo(px - s, py + s * 0.5);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = `oklch(0.45 0.14 265 / 0.8)`;
            ctx.beginPath();
            ctx.moveTo(px - s, py + s * 0.5);
            ctx.lineTo(px, py + s);
            ctx.lineTo(px, py + s + ht);
            ctx.lineTo(px - s, py + s * 0.5 + ht);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = `oklch(0.55 0.14 255 / 0.85)`;
            ctx.beginPath();
            ctx.moveTo(px + s, py + s * 0.5);
            ctx.lineTo(px, py + s);
            ctx.lineTo(px, py + s + ht);
            ctx.lineTo(px + s, py + s * 0.5 + ht);
            ctx.closePath();
            ctx.fill();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [kind]);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
}

function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const kind: VisualKind = p.name.includes("Spinner")
    ? "spinner"
    : p.name.includes("News")
      ? "news"
      : "voxel";

  const statusStyles: Record<string, { bg: string; color: string; border: string }> = {
    Live: {
      bg: "rgba(93,211,158,0.15)",
      color: "#5dd39e",
      border: "1px solid rgba(93,211,158,0.3)",
    },
    Beta: {
      bg: "rgba(245,181,68,0.15)",
      color: "var(--amber-2)",
      border: "1px solid rgba(245,181,68,0.3)",
    },
    "In Development": {
      bg: "rgba(124,131,255,0.15)",
      color: "var(--indigo-2)",
      border: "1px solid rgba(124,131,255,0.3)",
    },
    Experiment: {
      bg: "rgba(124,131,255,0.15)",
      color: "var(--indigo-2)",
      border: "1px solid rgba(124,131,255,0.3)",
    },
  };
  const ss = statusStyles[p.status] ?? statusStyles["In Development"];

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  };

  return (
    <a
      ref={ref}
      href={p.url || "#"}
      target={p.url && p.url !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="relative flex flex-col no-underline group"
      style={{
        background: "var(--ink-900)",
        color: "var(--text-0)",
        borderRadius: 20,
        padding: 28,
        overflow: "hidden",
        border: "1px solid var(--line)",
        minHeight: 420,
        transition:
          "transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 400ms",
      }}
      onMouseMove={onMove}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 30px 80px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      {/* Radial glow on hover via CSS custom props */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--mx, 50%) var(--my, 0%), rgba(124,131,255,0.18), transparent 60%)",
        }}
      />

      {/* Visual */}
      <div
        className="relative mb-6 overflow-hidden rounded-2xl"
        style={{
          height: 180,
          background: "linear-gradient(135deg, var(--ink-800), var(--ink-700))",
          border: "1px solid var(--line)",
        }}
      >
        <ProjectVisual kind={kind} />
        <span
          className="absolute top-3 right-3 z-10 font-mono text-[10px] tracking-[0.08em] uppercase inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            background: ss.bg,
            color: ss.color,
            border: ss.border,
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            className="w-[5px] h-[5px] rounded-full flex-shrink-0"
            style={{ background: "currentColor" }}
          />
          {p.status}
        </span>
      </div>

      <h3
        className="m-0 mb-1"
        style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em" }}
      >
        {p.name}
      </h3>
      <div
        className="mb-3.5"
        style={{
          fontFamily: "var(--font-bricolage), sans-serif",
          fontSize: 16,
          color: "var(--indigo-2)",
        }}
      >
        {p.tagline}
      </div>
      <p
        className="flex-1 text-sm leading-relaxed"
        style={{ color: "var(--text-2)", marginBottom: 20 }}
      >
        {p.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {p.tags.map((tag, i) => (
          <span
            key={i}
            className="font-mono text-[10px] px-2 py-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "var(--text-2)",
              border: "1px solid var(--line)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--ink-950)", color: "var(--text-0)" }}>
      <div className="mx-auto max-w-[1280px] px-7 py-[120px]">
        {/* Head */}
        <div
          className="grid gap-12 mb-16 items-start"
          style={{ gridTemplateColumns: "280px 1fr" }}
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.18em] uppercase flex items-center gap-2.5"
              style={{ color: "var(--indigo-2)" }}
            >
              <span
                className="inline-block w-[18px] h-px flex-shrink-0"
                style={{ background: "var(--indigo-2)" }}
              />
              03 / Projects
            </div>
          </div>
          <div>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.02,
                margin: 0,
                color: "var(--text-0)",
              }}
            >
              Things I&apos;ve{" "}
              <span
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 600,
                  color: "var(--indigo-2)",
                }}
              >
                vibe-coded
              </span>{" "}
              into existence.
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--text-2)",
                maxWidth: 420,
              }}
            >
              Side projects where I get to play product, engineer, and user all
              at once.
            </p>
          </div>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
