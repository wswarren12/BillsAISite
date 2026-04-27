"use client";

import { skillCategories } from "@/data/skills";
import { FiTarget, FiCode, FiUsers } from "react-icons/fi";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  "Product Strategy": FiTarget,
  Technical: FiCode,
  Leadership: FiUsers,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative"
      style={{ background: "var(--ink-950)", color: "var(--text-0)" }}
    >
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
              04 / Skills
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
              The{" "}
              <span
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 600,
                  color: "var(--indigo-2)",
                }}
              >
                stack
              </span>{" "}
              I bring to every product problem.
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
              Strategy, technical depth, and leadership fluency — because modern
              product work demands all three.
            </p>
          </div>
        </div>

        {/* Skills matrix */}
        <div
          className="grid rounded-2xl overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--line)",
            border: "1px solid var(--line)",
          }}
        >
          {skillCategories.map((cat, i) => {
            const Icon = ICONS[cat.title] ?? FiTarget;
            return (
              <div
                key={i}
                className="relative p-8 transition-colors group"
                style={{ background: "var(--ink-900)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--ink-850)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--ink-900)")
                }
              >
                <div
                  className="flex items-center gap-3.5 mb-6 pb-5"
                  style={{ borderBottom: "1px solid var(--line)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl grid place-items-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,131,255,0.2), rgba(124,131,255,0.05))",
                      border: "1px solid rgba(124,131,255,0.3)",
                      color: "var(--indigo-2)",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <div
                      className="text-lg font-medium"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {cat.title}
                    </div>
                    <div
                      className="font-mono text-[11px] mt-0.5"
                      style={{ color: "var(--text-3)" }}
                    >
                      0{i + 1} · {cat.skills.length} capabilities
                    </div>
                  </div>
                </div>
                <ul className="list-none m-0 p-0 grid gap-0.5">
                  {cat.skills.map((s, j) => (
                    <li
                      key={j}
                      className="text-sm flex justify-between items-center px-3 py-2.5 rounded-lg cursor-default transition-all duration-200"
                      style={{ color: "var(--text-1)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(124,131,255,0.08)";
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--text-0)";
                        (e.currentTarget as HTMLElement).style.paddingLeft =
                          "18px";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "";
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--text-1)";
                        (e.currentTarget as HTMLElement).style.paddingLeft =
                          "12px";
                      }}
                    >
                      <span>{s}</span>
                      <span
                        className="font-mono text-[10px]"
                        style={{ color: "var(--text-3)" }}
                      >
                        →
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
