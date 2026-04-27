"use client";

import { education, boardRoles } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      style={{ background: "var(--paper)", color: "var(--ink-on-paper)" }}
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
              style={{ color: "var(--indigo-deep)" }}
            >
              <span
                className="inline-block w-[18px] h-px flex-shrink-0"
                style={{ background: "var(--indigo-deep)" }}
              />
              05 / Credentials
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
              Education &amp;{" "}
              <span
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontWeight: 600,
                  color: "var(--indigo-deep)",
                }}
              >
                service
              </span>
              .
            </h2>
          </div>
        </div>

        <div className="grid gap-15" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {/* Education */}
          <div>
            <h3
              className="font-mono text-[11px] tracking-[0.16em] uppercase m-0 mb-6 pb-3.5"
              style={{
                color: "var(--muted-on-paper)",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              Education
            </h3>
            {education.map((e, i) => (
              <div
                key={i}
                className="py-5"
                style={{
                  borderBottom:
                    i < education.length - 1
                      ? "1px dashed rgba(0,0,0,0.12)"
                      : undefined,
                }}
              >
                <div
                  className="text-xl font-medium"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {e.institution}
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontSize: 17,
                    color: "var(--indigo-deep)",
                  }}
                >
                  {e.degree}
                </div>
                {e.details && (
                  <div
                    className="mt-2 text-sm leading-snug"
                    style={{ color: "var(--muted-on-paper)" }}
                  >
                    {e.details}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Board */}
          <div>
            <h3
              className="font-mono text-[11px] tracking-[0.16em] uppercase m-0 mb-6 pb-3.5"
              style={{
                color: "var(--muted-on-paper)",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              Board &amp; Advisory
            </h3>
            {boardRoles.map((b, i) => (
              <div
                key={i}
                className="py-5"
                style={{
                  borderBottom:
                    i < boardRoles.length - 1
                      ? "1px dashed rgba(0,0,0,0.12)"
                      : undefined,
                }}
              >
                <div
                  className="text-xl font-medium"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {b.organization}
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontSize: 17,
                    color: "var(--indigo-deep)",
                  }}
                >
                  {b.role}
                </div>
                <div
                  className="mt-1.5 font-mono text-[11px]"
                  style={{ color: "var(--muted-on-paper)" }}
                >
                  {b.period}
                </div>
                <div
                  className="mt-2 text-sm leading-snug"
                  style={{ color: "var(--muted-on-paper)" }}
                >
                  {b.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
