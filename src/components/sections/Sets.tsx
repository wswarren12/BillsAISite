import { Model, type Piece } from "@/components/brick/Brick";
import { projects } from "@/data/projects";
import { Arrow } from "@/components/brick/Icon";

/* A tiny brick illustration per project, in the site's isometric style. */
const ART: Record<string, Piece[]> = {
  KidSpinner: [
    { id: "p", w: 4, d: 4, h: 0.4, x: 0, z: 0, y: 0, color: "#d9d9d9" },
    { id: "a", w: 2, d: 2, x: 1, z: 1, y: 0.4, color: "#ffcd00" },
    { id: "b", w: 1, d: 1, x: 0, z: 0, y: 0.4, color: "#e53935" },
    { id: "c", w: 1, d: 1, x: 3, z: 0, y: 0.4, color: "#147bd1" },
    { id: "d", w: 1, d: 1, x: 0, z: 3, y: 0.4, color: "#2e9e5b" },
    { id: "e", w: 1, d: 1, x: 3, z: 3, y: 0.4, color: "#ffffff" },
    { id: "f", w: 1, d: 1, x: 1.5, z: 1.5, y: 1.6, color: "#111111" },
  ],
  NewsBreef: [
    { id: "p", w: 4, d: 4, h: 0.4, x: 0, z: 0, y: 0, color: "#d9d9d9" },
    { id: "a", w: 4, d: 1, h: 0.4, x: 0, z: 0, y: 0.4, color: "#147bd1" },
    { id: "b", w: 3, d: 1, h: 0.4, x: 0, z: 1.5, y: 0.4, color: "#ffffff" },
    { id: "c", w: 4, d: 1, h: 0.4, x: 0, z: 3, y: 0.4, color: "#ffffff" },
    { id: "d", w: 2, d: 1, h: 0.4, x: 0, z: 1.5, y: 0.8, color: "#e53935" },
  ],
  "WordCraft Mobs": [
    { id: "p", w: 4, d: 4, h: 0.4, x: 0, z: 0, y: 0, color: "#2e9e5b" },
    { id: "a", w: 2, d: 2, x: 0, z: 0, y: 0.4, color: "#2e9e5b" },
    { id: "b", w: 1, d: 1, x: 3, z: 0, y: 0.4, color: "#147bd1" },
    { id: "c", w: 1, d: 1, x: 3, z: 0, y: 1.6, color: "#147bd1" },
    { id: "d", w: 1, d: 1, x: 3, z: 0, y: 2.8, color: "#ffcd00" },
    { id: "e", w: 2, d: 1, x: 0, z: 3, y: 0.4, color: "#e53935" },
    { id: "f", w: 1, d: 1, x: 0, z: 0, y: 1.6, color: "#2e9e5b" },
  ],
};

const STATUS: Record<string, { label: string; bg: string }> = {
  Live: { label: "Live", bg: "#2e9e5b" },
  Beta: { label: "Coming soon", bg: "#ffcd00" },
  "In Development": { label: "In development", bg: "#8ecdf7" },
  Experiment: { label: "Experiment", bg: "#d9d9d9" },
};

export default function Sets() {
  return (
    <section id="sets" aria-labelledby="sets-title" className="py-12 md:py-20">
      <div className="mx-auto max-w-[var(--page-max)] px-4 md:px-6">
        <div className="box p-6 md:p-8 mb-6 grid gap-4 md:grid-cols-[auto_1fr] md:items-end">
          <h2 id="sets-title" className="numeral m-0" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
            Projects
          </h2>
          <p className="m-0 text-[16px] md:text-[18px] leading-[1.5] max-w-[52ch] md:justify-self-end md:text-right font-medium">
            Side projects I&apos;ve designed and shipped solo — the live ones
            are yours to try right now.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const hasUrl = Boolean(p.url && p.url !== "#");
            const st = STATUS[p.status] ?? STATUS["In Development"];
            const isLive = p.status === "Live";
            return (
              <div
                key={p.name}
                className="box flex flex-col overflow-hidden"
                style={{ color: "var(--ink)" }}
              >
                {/* Illustration */}
                <div className="relative p-5" style={{ background: "var(--sky)", borderBottom: "2px solid var(--ink)" }}>
                  <div className="flex items-start justify-between">
                    <span className="text-[12px] font-bold uppercase tracking-[0.06em]">Project</span>
                    <span className="box px-2.5 py-1 text-[12px] font-extrabold uppercase tracking-[0.06em] inline-flex items-center gap-1.5" style={{ background: st.bg, color: "var(--ink)" }}>
                      {isLive && <span className="w-2 h-2 rounded-full" style={{ background: "var(--ink)" }} aria-hidden="true" />}
                      {st.label}
                    </span>
                  </div>
                  <Model
                    pieces={ART[p.name] ?? ART.NewsBreef}
                    s={20}
                    className="w-full h-[150px] mt-2"
                    title={`${p.name} artwork`}
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="m-0 text-[24px] font-extrabold tracking-tight leading-[1.05]">{p.name}</h3>
                  <div className="mt-1 text-[15px] font-semibold" style={{ color: "var(--blue-deep)" }}>{p.tagline}</div>
                  <p className="mt-3 text-[14px] leading-[1.6] flex-1" style={{ color: "var(--ink-2)" }}>{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5 m-0 p-0 list-none">
                    {p.tags.map((t) => (
                      <li key={t} className="text-[12px] font-bold px-2.5 py-1 rounded-[4px]" style={{ border: "2px solid var(--ink)" }}>
                        {t}
                      </li>
                    ))}
                  </ul>
                  {hasUrl ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-blue mt-5 self-start min-h-[48px] text-[14px]"
                      aria-label={`View the live ${p.name} app (opens in a new tab)`}
                    >
                      View live app
                      <Arrow dir="upright" size={16} />
                    </a>
                  ) : (
                    <div className="mt-5 text-[13px] font-bold uppercase tracking-[0.06em]" style={{ color: "var(--ink-2)" }}>
                      Coming soon
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
