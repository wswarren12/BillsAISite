"use client";

export default function About() {
  return (
    <section id="about" style={{ background: "var(--paper)", color: "var(--ink-on-paper)" }}>
      <div className="mx-auto max-w-[1280px] px-7 py-[120px]">
        <div
          className="grid gap-12"
          style={{ gridTemplateColumns: "280px 1fr" }}
        >
          {/* Side meta */}
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.18em] uppercase flex items-center gap-2.5 mb-6"
              style={{ color: "var(--indigo-deep)" }}
            >
              <span
                className="inline-block w-[18px] h-px flex-shrink-0"
                style={{ background: "var(--indigo-deep)" }}
              />
              01 / About
            </div>

            <div className="font-mono text-[10px] tracking-[0.04em]" style={{ color: "var(--muted-on-paper)" }}>
              {[
                ["Based", "Hillsborough, NC"],
                ["Role", "Head of Product"],
                ["Company", "Game7 / Summon"],
                ["Avail.", "Advisory + Speaking"],
                ["Edu", "Duke Law JD"],
              ].map(([key, val]) => (
                <div
                  key={key}
                  className="grid py-2.5 uppercase text-[10px] tracking-[0.1em]"
                  style={{
                    gridTemplateColumns: "100px 1fr",
                    gap: 12,
                    borderBottom: "1px dashed rgba(0,0,0,0.12)",
                  }}
                >
                  <span>{key}</span>
                  <b style={{ color: "var(--ink-on-paper)", fontWeight: 600 }}>{val}</b>
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.55,
                color: "var(--ink-on-paper)",
                marginBottom: 22,
                maxWidth: 680,
              }}
            >
              I&apos;m a product leader who thrives at the intersection of{" "}
              <em
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontStyle: "normal",
                  color: "var(--indigo-deep)",
                  fontWeight: 400,
                  fontSize: 22,
                }}
              >
                emerging technology
              </em>{" "}
              and{" "}
              <em
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontStyle: "normal",
                  color: "var(--indigo-deep)",
                  fontWeight: 400,
                  fontSize: 22,
                }}
              >
                real-world impact
              </em>
              . Over the past seven years, I&apos;ve built and scaled platforms
              across AI, Web3, and fintech — from founding a startup spun out of
              ConsenSys to leading product at one of gaming&apos;s fastest-growing
              engagement platforms.
            </p>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.55,
                color: "var(--ink-on-paper)",
                marginBottom: 22,
                maxWidth: 680,
              }}
            >
              At{" "}
              <em
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontStyle: "normal",
                  color: "var(--indigo-deep)",
                  fontWeight: 400,
                  fontSize: 22,
                }}
              >
                Game7 / Summon
              </em>
              , I led the evolution from a manual questing tool to an
              AI-powered engagement platform serving{" "}
              <em
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontStyle: "normal",
                  color: "var(--indigo-deep)",
                  fontWeight: 400,
                  fontSize: 22,
                }}
              >
                500K+ users
              </em>
              . At{" "}
              <em
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontStyle: "normal",
                  color: "var(--indigo-deep)",
                  fontWeight: 400,
                  fontSize: 22,
                }}
              >
                Opolis
              </em>
              , I shipped smart contract–based payroll infrastructure that&apos;s
              processed over{" "}
              <em
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontStyle: "normal",
                  color: "var(--indigo-deep)",
                  fontWeight: 400,
                  fontSize: 22,
                }}
              >
                $30M
              </em>{" "}
              in transactions.
            </p>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.55,
                color: "var(--ink-on-paper)",
                maxWidth: 680,
              }}
            >
              Before tech, I practiced corporate law at{" "}
              <em
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontStyle: "normal",
                  color: "var(--indigo-deep)",
                  fontWeight: 400,
                  fontSize: 22,
                }}
              >
                WilmerHale
              </em>
              , advising startups on venture financing and M&amp;A. My{" "}
              <em
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontStyle: "normal",
                  color: "var(--indigo-deep)",
                  fontWeight: 400,
                  fontSize: 22,
                }}
              >
                Duke Law JD
              </em>{" "}
              gives me an edge in stakeholder communication, contract
              negotiation, and navigating regulatory complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
