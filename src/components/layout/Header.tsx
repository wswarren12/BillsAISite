"use client";

import { useState, useEffect } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(
    navLinks.map((l) => l.id),
    120
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-7"
      style={{
        paddingTop: 18,
        paddingBottom: 18,
        background: scrolled
          ? "rgba(11,13,20,0.78)"
          : "linear-gradient(180deg, rgba(7,8,13,0.85), rgba(7,8,13,0))",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "background 300ms, border 300ms",
      }}
    >
      <div className="mx-auto max-w-[1280px] flex justify-between items-center">
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 no-underline"
          style={{ fontWeight: 600, fontSize: 14, letterSpacing: "-0.01em", color: "var(--text-0)" }}
        >
          <div
            className="relative w-[26px] h-[26px] rounded-lg flex-shrink-0"
            style={{
              background:
                "conic-gradient(from 180deg at 50% 50%, var(--indigo), var(--amber), var(--indigo))",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.1), 0 8px 24px rgba(124,131,255,0.35)",
            }}
          >
            <span
              className="absolute rounded"
              style={{ inset: 4, background: "var(--ink-950)", borderRadius: 5 }}
            />
            <span
              className="absolute rounded-sm"
              style={{
                inset: 9,
                background: "var(--indigo)",
                boxShadow: "0 0 8px var(--indigo)",
                borderRadius: 2,
              }}
            />
          </div>
          <span>Bill Warren</span>
          <span
            className="font-mono"
            style={{ fontSize: 11, color: "var(--text-3)", marginLeft: 4 }}
          >
            / product
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="no-underline rounded-full transition-colors"
              style={{
                fontSize: 13,
                color: active === l.id ? "var(--text-0)" : "var(--text-2)",
                padding: "8px 14px",
                background:
                  active === l.id ? "rgba(255,255,255,0.06)" : "transparent",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex no-underline rounded-full transition-transform hover:-translate-y-px"
            style={{
              fontSize: 13,
              fontWeight: 600,
              padding: "9px 16px",
              background: "var(--text-0)",
              color: "var(--ink-950)",
            }}
          >
            Contact →
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--text-2)", background: "rgba(255,255,255,0.06)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden mt-2 mx-auto max-w-[1280px] rounded-2xl overflow-hidden"
          style={{
            background: "rgba(20,22,35,0.96)",
            border: "1px solid var(--line)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="flex flex-col p-3">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMobileOpen(false)}
                className="no-underline rounded-xl px-4 py-3 text-sm font-medium transition-colors"
                style={{ color: active === l.id ? "var(--indigo-2)" : "var(--text-1)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="no-underline rounded-xl px-4 py-3 mt-1 text-sm font-semibold text-center"
              style={{ background: "var(--text-0)", color: "var(--ink-950)" }}
            >
              Contact →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
