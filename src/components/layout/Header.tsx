"use client";

import { useEffect, useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const TABS = [
  { id: "cover", label: "Cover", short: "00" },
  { id: "steps", label: "Steps", short: "01–06" },
  { id: "sets", label: "Sets", short: "" },
  { id: "extras", label: "Extras", short: "" },
  { id: "contact", label: "Contact", short: "" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(TABS.map((t) => t.id), 120);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 p-3 md:p-4 pointer-events-none">
      <div className="mx-auto max-w-[var(--page-max)] flex items-stretch gap-3 pointer-events-auto">
        {/* Brand block: a 2x2 red brick top-down */}
        <a
          href="#cover"
          className="box flex items-center gap-3 pl-2 pr-4 h-14 no-underline"
          aria-label="Bill Warren — back to cover"
        >
          <span
            className="grid grid-cols-2 gap-[3px] p-[5px] rounded-[4px]"
            style={{ background: "var(--brick)", border: "2px solid var(--ink)" }}
            aria-hidden="true"
          >
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="block w-[9px] h-[9px] rounded-full"
                style={{ background: "#ff6f6a", border: "1.5px solid var(--ink)" }}
              />
            ))}
          </span>
          <span className="font-extrabold text-[15px] tracking-tight">Bill Warren</span>
        </a>

        {/* Tabs */}
        <nav className="box hidden md:flex items-stretch overflow-hidden ml-auto" aria-label="Sections">
          {TABS.map((t, i) => {
            const isActive = active === t.id;
            return (
              <a
                key={t.id}
                href={`#${t.id}`}
                aria-current={isActive ? "true" : undefined}
                className="flex items-center gap-2 px-4 text-[14px] font-bold no-underline transition-colors"
                style={{
                  color: isActive ? "var(--paper)" : "var(--ink)",
                  background: isActive ? "var(--blue-deep)" : "transparent",
                  borderLeft: i === 0 ? undefined : "2px solid var(--ink)",
                }}
              >
                {t.short && <span className="numeral text-[12px] opacity-70">{t.short}</span>}
                {t.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a href="mailto:bill@billsai.club" className="btn btn-brick h-14 min-h-0">
            Email me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="box md:hidden ml-auto w-14 h-14 grid place-items-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            {open ? <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></> : <><path d="M3 7h18" /><path d="M3 12h18" /><path d="M3 17h18" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden mx-auto max-w-[var(--page-max)] mt-3 box overflow-hidden pointer-events-auto">
          {TABS.map((t, i) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 h-14 text-[16px] font-bold no-underline"
              style={{
                borderTop: i === 0 ? undefined : "2px solid var(--ink)",
                background: active === t.id ? "var(--blue-deep)" : "transparent",
                color: active === t.id ? "var(--paper)" : "var(--ink)",
              }}
            >
              <span className="numeral text-[13px] opacity-70 w-12">{t.short || "—"}</span>
              {t.label}
            </a>
          ))}
          <a
            href="mailto:bill@billsai.club"
            className="flex items-center justify-center h-14 text-[16px] font-bold no-underline"
            style={{ borderTop: "2px solid var(--ink)", background: "var(--brick-deep)", color: "var(--paper)" }}
          >
            Email me
          </a>
        </div>
      )}
    </header>
  );
}
