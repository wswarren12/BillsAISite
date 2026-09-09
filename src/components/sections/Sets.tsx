import { Model, type Piece } from "@/components/brick/Brick";
import { projects } from "@/data/projects";
import { Arrow } from "@/components/brick/Icon";

/* Box art: a tiny model per set, drawn in bricks. */
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
  Live: { label: "In stock", bg: "#2e9e5b" },
  Beta: { label: "Coming soon", bg: "#ffcd00" },
  "In Development": { label: "In development", bg: "#147bd1" },
  Experiment: { label: "Experiment", bg: "#d9d9d9" },
};

export default function Sets() {
  return (
    <section id="sets" className="py-12 md:py-20">
      <div className="mx-auto max-w-[var(--page-max)] px-4 md:px-6">
        <div className="box p-6 md:p-8 mb-6 grid gap-4 md:grid-cols-[auto_1fr] md:items-end">
          <div className="numeral" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
            Sets
          </div>
          <p className="m-0 text-[16px] md:text-[18px] leading-[1.5] max-w-[52ch] md:justify-self-end md:text-right font-medium">
            Things I&apos;ve vibe-coded into existence — side projects where I
            get to play product, engineer, and user all at once.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const hasUrl = Boolean(p.url && p.url !== "#");
            const st = STATUS[p.status] ?? STATUS["In Development"];
            const Tag = hasUrl ? "a" : "div";
            return (
              <Tag
                key={p.name}
                href={hasUrl ? p.url : undefined}
                target={hasUrl ? "_blank" : undefined}
                rel={hasUrl ? "noopener noreferrer" : undefined}
                className={`box flex flex-col overflow-hidden no-underline ${hasUrl ? "group" : ""}`}
                style={{ color: "var(--ink)" }}
              >
                {/* Box art */}
                <div className="relative p-5" style={{ background: "var(--sky)", borderBottom: "2px solid var(--ink)" }}>
                  <div className="flex items-start justify-between">
                    <span className="text-[12px] font-bold uppercase tracking-[0.06em]">Set</span>
                    <span className="box px-2.5 py-1 text-[12px] font-extrabold uppercase tracking-[0.06em]" style={{ background: st.bg, color: "var(--ink)" }}>
                      {st.label}
                    </span>
                  </div>
                  <Model
                    pieces={ART[p.name] ?? ART.NewsBreef}
                    s={20}
                    className="w-full h-[150px] mt-2 transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transition-none"
                    title={`${p.name} box art`}
                  />
                  <div className="flex items-end justify-between text-[12px] font-bold">
                    <span>{(ART[p.name] ?? ART.NewsBreef).length} pcs</span>
                    {hasUrl && <span className="inline-flex items-center gap-1 group-hover:underline">Open set <Arrow dir="upright" size={14} /></span>}
                  </div>
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
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
