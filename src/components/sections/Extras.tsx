import { boardRoles, education } from "@/data/education";

export default function Extras() {
  return (
    <section id="extras" className="py-12 md:py-20">
      <div className="mx-auto max-w-[var(--page-max)] px-4 md:px-6">
        <div className="box p-6 md:p-8 mb-6 grid gap-4 md:grid-cols-[auto_1fr] md:items-end">
          <div className="numeral" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
            Also included
          </div>
          <p className="m-0 text-[16px] md:text-[18px] leading-[1.5] max-w-[52ch] md:justify-self-end md:text-right font-medium">
            Education and service — the pieces that don&apos;t go on the model
            but come in the box.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="box overflow-hidden">
            <div className="px-5 py-3 text-[12px] font-bold uppercase tracking-[0.06em]" style={{ borderBottom: "2px solid var(--ink)", background: "var(--yellow)" }}>
              Education
            </div>
            <ul className="m-0 p-0 list-none">
              {education.map((e, i) => (
                <li key={e.institution} className="grid grid-cols-[52px_1fr] gap-4 p-5" style={{ borderTop: i ? "2px solid var(--ink)" : undefined }}>
                  <span className="numeral text-[22px] pt-1" aria-hidden="true">E{i + 1}</span>
                  <div>
                    <div className="text-[20px] font-extrabold tracking-tight leading-[1.1]">{e.institution}</div>
                    <div className="mt-1 text-[15px] font-semibold" style={{ color: "var(--blue-deep)" }}>{e.degree}</div>
                    {e.details && <div className="mt-2 text-[14px] leading-[1.5]" style={{ color: "var(--ink-2)" }}>{e.details}</div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="box overflow-hidden">
            <div className="px-5 py-3 text-[12px] font-bold uppercase tracking-[0.06em]" style={{ borderBottom: "2px solid var(--ink)", background: "var(--yellow)" }}>
              Board &amp; advisory
            </div>
            <ul className="m-0 p-0 list-none">
              {boardRoles.map((b, i) => (
                <li key={b.organization} className="grid grid-cols-[52px_1fr] gap-4 p-5" style={{ borderTop: i ? "2px solid var(--ink)" : undefined }}>
                  <span className="numeral text-[22px] pt-1" aria-hidden="true">B{i + 1}</span>
                  <div>
                    <div className="text-[20px] font-extrabold tracking-tight leading-[1.1]">{b.organization}</div>
                    <div className="mt-1 text-[15px] font-semibold" style={{ color: "var(--blue-deep)" }}>
                      {b.role} <span className="font-bold text-[13px]" style={{ color: "var(--ink-2)" }}>· {b.period}</span>
                    </div>
                    <div className="mt-2 text-[14px] leading-[1.5]" style={{ color: "var(--ink-2)" }}>{b.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
