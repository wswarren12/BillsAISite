"use client";

import { useEffect, useRef, useState } from "react";
import { Callout, Model } from "@/components/brick/Brick";
import { allPieces, pieces, stepNo, steps } from "@/data/build";

function Role({ d }: { d: number }) {
  // Cards read most-recent-first, but the physical model stays chronological,
  // so map the display index d (0 = current role) to its chronological index c.
  const c = steps.length - 1 - d;
  const exp = steps[c];
  const piece = pieces[c];
  const [open, setOpen] = useState(d === 0);
  const isCurrent = exp.period.includes("Present");
  const label = stepNo(d);
  const panelId = `role-${d + 1}-detail`;
  const titleId = `role-${d + 1}-title`;
  const priorIds = pieces.slice(0, c).map((p) => p.id);
  const laterIds = pieces.slice(c + 1).map((p) => p.id);
  const ref = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setEntered(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      id={`role-${label}`}
      className="box relative grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] overflow-hidden"
      aria-labelledby={titleId}
    >
      {/* Diagram */}
      <div className="relative p-5 md:p-7 min-h-[300px] lg:min-h-[420px]" style={{ background: "var(--sky)", borderBottom: "2px solid var(--ink)" }}>
        <div className="flex items-start justify-between gap-4">
          <div className="numeral" style={{ fontSize: "clamp(72px, 10vw, 140px)" }} aria-hidden="true">
            {label}
          </div>
          {/* 1:1 call-out */}
          <div className="box p-2.5 md:p-3 flex items-center gap-3 flex-shrink-0">
            <Callout piece={piece} s={12} className="w-[72px] h-[52px] md:w-[88px] md:h-[64px]" />
            <div className="leading-tight">
              <div className="numeral text-[22px]">1x</div>
              <div className="text-[12px] font-bold uppercase tracking-[0.04em]">{piece.w}×{piece.d}</div>
            </div>
          </div>
        </div>
        <div className="mt-2 relative">
          <Model
            pieces={allPieces}
            s={22}
            ghostIds={priorIds}
            hideIds={laterIds}
            highlightId={piece.id}
            arrow
            entered={entered}
            className="w-full h-[240px] md:h-[320px]"
            title={`${exp.role}, ${exp.company} (${exp.period})`}
          />
        </div>
        <div className="absolute left-5 bottom-4 md:left-7 md:bottom-6 text-[12px] font-bold uppercase tracking-[0.06em]">
          {exp.period}
        </div>
        {isCurrent && (
          <div className="absolute right-5 bottom-4 md:right-7 md:bottom-6 box px-2.5 py-1 text-[12px] font-extrabold uppercase tracking-[0.06em] inline-flex items-center gap-1.5" style={{ background: "var(--yellow)" }}>
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--ink)" }} aria-hidden="true" />
            Current role
          </div>
        )}
      </div>

      {/* Detail text */}
      <div className="p-5 md:p-7 flex flex-col">
        <h3 id={titleId} className="m-0 text-[26px] md:text-[32px] font-extrabold leading-[1.05] tracking-tight">
          {exp.role}
          <span className="block font-semibold text-[18px] md:text-[20px] mt-1" style={{ color: "var(--blue-deep)" }}>
            {exp.company}
          </span>
        </h3>
        <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] max-w-[60ch]" style={{ color: "var(--ink-2)" }}>
          {exp.description}
        </p>

        {exp.metrics && exp.metrics.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2 m-0 p-0 list-none">
            {exp.metrics.map((m) => (
              <li key={m} className="box px-3 py-1.5 text-[13px] font-extrabold" style={{ background: "var(--yellow)" }}>
                {m}
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
          className="btn mt-6 self-start min-h-[48px] text-[14px]"
        >
          {(() => {
            const n = exp.achievements.length;
            const noun = `highlight${n === 1 ? "" : "s"}`;
            return open ? `Hide ${noun}` : `Show ${n} ${noun}`;
          })()}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true" style={{ transform: open ? "rotate(180deg)" : undefined, transition: "transform 200ms" }}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        <div
          id={panelId}
          role="region"
          aria-labelledby={titleId}
          aria-hidden={!open}
          className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden min-h-0">
            <ol className="mt-5 m-0 p-0 list-none grid gap-3">
              {exp.achievements.map((a, j) => (
                <li key={j} className="grid grid-cols-[44px_1fr] gap-3 items-start">
                  <span className="numeral text-[15px] pt-[3px]" aria-hidden="true">
                    {label}.{j + 1}
                  </span>
                  <span className="text-[14px] leading-[1.6] max-w-[62ch]" style={{ color: "var(--ink-2)" }}>
                    {a}
                  </span>
                </li>
              ))}
            </ol>
            {exp.tags && (
              <ul className="mt-5 flex flex-wrap gap-1.5 m-0 p-0 list-none">
                {exp.tags.map((t) => (
                  <li key={t} className="text-[12px] font-bold px-2.5 py-1 rounded-[4px]" style={{ border: "2px solid var(--ink)" }}>
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Steps() {
  return (
    <section id="steps" aria-labelledby="steps-title" className="py-12 md:py-20">
      <div className="mx-auto max-w-[var(--page-max)] px-4 md:px-6">
        <div className="box p-6 md:p-8 mb-6 grid gap-4 md:grid-cols-[auto_1fr] md:items-end">
          <h2 id="steps-title" className="numeral m-0" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
            Experience
          </h2>
          <p className="m-0 text-[16px] md:text-[18px] leading-[1.5] max-w-[52ch] md:justify-self-end md:text-right font-medium">
            Seven years shipping at the edge of new platforms — most recent
            first.
          </p>
        </div>
        <div className="grid gap-6">
          {steps.map((_, d) => (
            <Role key={d} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
