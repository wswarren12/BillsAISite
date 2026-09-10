import { Model } from "@/components/brick/Brick";
import { Arrow, Download } from "@/components/brick/Icon";
import { allPieces, inventory, steps } from "@/data/build";

const firstYear = steps[0].period.match(/\d{4}/)?.[0] ?? "";

export default function Cover() {
  return (
    <section id="cover" aria-labelledby="cover-title" className="pt-28 md:pt-36 pb-12 md:pb-20">
      <div className="mx-auto max-w-[var(--page-max)] px-4 md:px-6 grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
        {/* Title block */}
        <div className="box p-6 md:p-10 flex flex-col">
          <h1
            id="cover-title"
            className="numeral mt-2 md:mt-4"
            style={{ fontSize: "clamp(56px, 10.5vw, 164px)" }}
          >
            Bill
            <br />
            Warren
          </h1>

          <p
            className="mt-6 md:mt-auto md:pt-8 max-w-[36ch] text-[18px] md:text-[21px] leading-[1.4] font-medium"
            style={{ textWrap: "pretty" }}
          >
            Product Lead at Protocol Labs, building the Alignment Asset. Seven
            years shipping 0→1 across{" "}
            <strong className="font-extrabold">AI, web3, gaming, and fintech</strong>.
            I turn frontier tech into products people actually use.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:bill@billsai.club" className="btn btn-brick">
              bill@billsai.club
              <Arrow />
            </a>
            <a href="/Bill_Warren_Resume.pdf" download="Bill_Warren_Resume.pdf" className="btn">
              Résumé (PDF)
              <Download />
            </a>
          </div>

          {/* Compact model so a phone visitor sees a brick in the first viewport */}
          <div className="lg:hidden mt-8 -mx-2">
            <Model pieces={allPieces} s={16} className="w-full h-[150px]" />
          </div>

          <div className="mt-8 pt-4 flex items-center justify-between gap-4 text-[12px] md:text-[13px] font-bold whitespace-nowrap" style={{ borderTop: "2px solid var(--ink)" }}>
            <span><span className="hidden sm:inline">Build instructions · </span>Set № 2026</span>
            <span>{steps.length} roles · {firstYear}–present</span>
          </div>
        </div>

        {/* Finished model + inventory */}
        <div className="grid gap-6 grid-rows-[auto_1fr]">
          <div className="box p-5 md:p-6" style={{ background: "var(--yellow)" }}>
            <div className="text-[13px] font-bold uppercase tracking-[0.06em] mb-4">
              Pieces in this set
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 m-0 p-0 list-none">
              {inventory.map((m) => (
                <li key={m.label} className="flex items-center gap-3">
                  <span
                    className="grid grid-cols-2 gap-[3px] p-[4px] rounded-[3px] flex-shrink-0"
                    style={{ background: m.color, border: "2px solid var(--ink)" }}
                    aria-hidden="true"
                  >
                    {[0, 1, 2, 3].map((i) => (
                      <span key={i} className="block w-[7px] h-[7px] rounded-full" style={{ border: "1.5px solid var(--ink)", background: "rgba(255,255,255,0.35)" }} />
                    ))}
                  </span>
                  <span className="leading-tight">
                    <span className="numeral block text-[24px] md:text-[28px]">{m.qty}</span>
                    <span className="block text-[13px] font-semibold">{m.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="box-sky relative p-4 md:p-6 flex flex-col hidden lg:flex">
            <div className="flex items-start justify-between">
              <div className="text-[13px] font-bold uppercase tracking-[0.06em]">Finished model</div>
              <div className="box px-2.5 py-1 text-[12px] font-extrabold">1x</div>
            </div>
            <Model
              pieces={allPieces}
              s={30}
              className="w-full flex-1 min-h-[240px] max-h-[380px] my-4"
              title="The assembled career model: six bricks, one per role, stacked on a base plate."
            />
            <ol className="flex flex-wrap gap-x-3 gap-y-1.5 text-[12px] font-bold m-0 p-0 list-none">
              {allPieces
                .slice(1)
                .slice()
                .reverse()
                .map((p, d, arr) => {
                  const c = arr.length - 1 - d; // chronological index
                  return (
                    <li key={p.id} className="inline-flex items-center gap-1.5">
                      <span
                        className="inline-block w-3 h-3 rounded-[2px]"
                        style={{ background: p.color, border: "1.5px solid var(--ink)" }}
                        aria-hidden="true"
                      />
                      {String(d + 1).padStart(2, "0")} {steps[c].company}
                    </li>
                  );
                })}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}
