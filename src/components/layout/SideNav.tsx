"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { id: "hero", label: "Top" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.7);
      const y = window.scrollY + window.innerHeight * 0.4;
      let current = "hero";
      for (const { id } of ITEMS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed right-7 z-30 flex flex-col gap-1.5 py-2.5 px-2 rounded-full transition-opacity duration-300 hidden md:flex"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        background: "rgba(11,13,20,0.6)",
        border: "1px solid var(--line)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
      }}
    >
      {ITEMS.map((it) => (
        <button
          key={it.id}
          className="relative w-2.5 h-2.5 rounded-full border-0 p-0 cursor-pointer transition-all duration-200 group"
          style={{
            background:
              active === it.id ? "var(--indigo)" : "rgba(255,255,255,0.2)",
            boxShadow:
              active === it.id ? "0 0 12px var(--indigo)" : undefined,
          }}
          onClick={() =>
            document
              .getElementById(it.id)
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          aria-label={it.label}
        >
          <span
            className="absolute right-5 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              background: "rgba(11,13,20,0.9)",
              color: "var(--text-0)",
              border: "1px solid var(--line)",
            }}
          >
            {it.label}
          </span>
        </button>
      ))}
    </div>
  );
}
