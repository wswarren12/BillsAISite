"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="experience" style={{ background: "var(--paper)", color: "var(--ink-on-paper)" }}>
      <div className="mx-auto max-w-[1280px] px-7 py-[120px]">
        {/* Section head */}
        <div
          className="grid gap-12 mb-16 items-start"
          style={{ gridTemplateColumns: "280px 1fr" }}
        >
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.18em] uppercase flex items-center gap-2.5"
              style={{ color: "var(--indigo-deep)" }}
            >
              <span
                className="inline-block w-[18px] h-px flex-shrink-0"
                style={{ background: "var(--indigo-deep)" }}
              />
              02 / Experience
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
                color: "var(--ink-on-paper)",
              }}
            >
              Seven years of{" "}
              <span
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 600,
                  color: "var(--indigo-deep)",
                }}
              >
                shipping
              </span>{" "}
              at the edge of new platforms.
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--muted-on-paper)",
                maxWidth: 420,
              }}
            >
              From founding a venture-backed startup to leading product at
              hyper-growth platforms — each role is an expandable timeline node
              with full context.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => {
            const isOpen = openIdx === i;
            const isLive = exp.period.includes("Present");
            return (
              <div
                key={i}
                className="grid relative cursor-pointer transition-colors"
                style={{
                  gridTemplateColumns: "180px 1fr",
                  gap: 40,
                  padding: "32px 0",
                  borderTop: "1px solid rgba(0,0,0,0.08)",
                  borderBottom:
                    i === experiences.length - 1
                      ? "1px solid rgba(0,0,0,0.08)"
                      : undefined,
                  background: isOpen
                    ? "rgba(124,131,255,0.04)"
                    : "transparent",
                }}
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
              >
                {/* Period */}
                <div
                  className="font-mono text-[11px] tracking-[0.04em] relative pt-2"
                  style={{ color: "var(--muted-on-paper)" }}
                >
                  <span
                    className="absolute rounded-full"
                    style={{
                      left: -28,
                      top: 12,
                      width: 10,
                      height: 10,
                      background: "var(--indigo-deep)",
                      boxShadow: "0 0 0 4px rgba(124,131,255,0.15)",
                      animation: isLive ? "pulseDark 2s infinite" : undefined,
                    }}
                  />
                  {exp.period}
                  {isLive && (
                    <div
                      className="mt-1.5 font-mono text-[10px]"
                      style={{ color: "#22a06b" }}
                    >
                      ● LIVE
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.05,
                      margin: 0,
                      color: "var(--ink-on-paper)",
                    }}
                  >
                    {exp.role}{" "}
                    <span
                      style={{
                        fontFamily: "var(--font-bricolage), sans-serif",
                        fontStyle: "normal",
                        fontWeight: 400,
                        color: "var(--indigo-deep)",
                      }}
                    >
                      at {exp.company}
                    </span>
                  </h3>

                  <p
                    className="mt-3.5"
                    style={{
                      color: "var(--muted-on-paper)",
                      fontSize: 15,
                      lineHeight: 1.6,
                      maxWidth: 680,
                    }}
                  >
                    {exp.description}
                  </p>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((t, j) => (
                        <span
                          key={j}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(124,131,255,0.1)",
                            color: "var(--indigo-deep)",
                            border: "1px solid rgba(124,131,255,0.2)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Expandable */}
                  <div
                    style={{
                      maxHeight: isOpen ? 800 : 0,
                      overflow: "hidden",
                      transition: "max-height 400ms ease",
                    }}
                  >
                    <div
                      className="mt-6 rounded-2xl p-6"
                      style={{
                        background: "rgba(255,255,255,0.6)",
                        border: "1px solid rgba(0,0,0,0.08)",
                      }}
                    >
                      <ul className="list-none p-0 m-0 grid gap-3.5">
                        {exp.achievements.map((a, j) => (
                          <li
                            key={j}
                            className="relative pl-6 text-sm leading-relaxed"
                            style={{ color: "var(--muted-on-paper)" }}
                          >
                            <span
                              className="absolute left-0 top-0 font-mono"
                              style={{ color: "var(--indigo-deep)" }}
                            >
                              →
                            </span>
                            {a}
                          </li>
                        ))}
                      </ul>
                      {exp.metrics && exp.metrics.length > 0 && (
                        <div
                          className="mt-5 pt-5 flex flex-wrap gap-6"
                          style={{
                            borderTop: "1px dashed rgba(0,0,0,0.1)",
                          }}
                        >
                          {exp.metrics.map((m, j) => (
                            <div key={j}>
                              <div
                                className="font-mono text-[10px] uppercase tracking-[0.1em]"
                                style={{ color: "var(--muted-on-paper)" }}
                              >
                                Metric
                              </div>
                              <div
                                className="mt-1 text-lg font-semibold"
                                style={{ color: "var(--ink-on-paper)" }}
                              >
                                {m}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Chevron */}
                <div
                  className="absolute right-0 top-10 flex items-center gap-1.5 font-mono text-[11px] transition-colors"
                  style={{ color: isOpen ? "var(--indigo-deep)" : "var(--muted-on-paper)" }}
                >
                  {isOpen ? "Collapse" : "Expand"}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : undefined,
                      transition: "transform 300ms",
                    }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
