"use client";

import { useState, type FormEvent } from "react";
import { Model } from "@/components/brick/Brick";
import { allPieces } from "@/data/build";
import { Arrow, Download } from "@/components/brick/Icon";

type FormStatus = "idle" | "loading" | "success" | "error";
interface FieldErrors { name?: string; email?: string; message?: string }

const SOCIAL = [
  { label: "LinkedIn", href: "https://linkedin.com/in/billwarren" },
  { label: "GitHub", href: "https://github.com/wswarren12" },
  { label: "X / Twitter", href: "https://x.com/billwarren" },
  { label: "Warpcast", href: "https://warpcast.com/bill" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  function validate(): FieldErrors {
    const e: FieldErrors = {};
    if (formData.name.trim().length < 2) e.name = "Name needs at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "That email doesn't look right — check the @ and domain.";
    if (formData.message.trim().length < 10) e.message = "Tell me a bit more — at least 10 characters.";
    setErrors(e);
    return e;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    const firstInvalid = (["name", "email", "message"] as const).find((k) => e[k]);
    if (firstInvalid) {
      // Move focus to the first field that failed so keyboard and
      // screen-reader users are taken straight to the problem.
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("success");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  const field = (id: "name" | "email" | "message") => ({
    id,
    value: formData[id],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [id]: e.target.value });
      if (errors[id]) setErrors({ ...errors, [id]: undefined });
    },
    "aria-invalid": Boolean(errors[id]),
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
    className: "w-full box px-4 py-3 text-[16px] font-medium",
    style: { borderColor: errors[id] ? "var(--brick)" : "var(--ink)", borderRadius: 6 } as React.CSSProperties,
  });

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-12 md:py-20">
      <div className="mx-auto max-w-[var(--page-max)] px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* Build complete */}
        <div className="box p-6 md:p-10 flex flex-col" style={{ background: "var(--yellow)" }}>
          <h2 id="contact-title" className="numeral mt-2" style={{ fontSize: "clamp(48px, 7vw, 104px)" }}>
            Build
            <br />
            complete.
          </h2>
          <p className="mt-6 max-w-[38ch] text-[18px] md:text-[20px] leading-[1.4] font-medium" style={{ textWrap: "pretty" }}>
            Now let&apos;s build yours. Open to product leadership roles and
            advisory engagements across AI, web3, gaming, and fintech.
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
          <div className="mt-auto pt-10 hidden md:block">
            <Model pieces={allPieces} s={18} className="w-[260px] h-[200px]" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="box p-6 md:p-8 flex flex-col gap-4" noValidate>
          <div className="text-[13px] font-bold uppercase tracking-[0.06em]">Or send a note</div>

          <input type="text" name="honeypot" value={formData.honeypot} onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} className="absolute -left-[9999px] opacity-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-[14px] font-bold mb-1.5">Name</label>
              <input type="text" autoComplete="name" placeholder="Your name" {...field("name")} />
              {errors.name && <p id="name-error" role="alert" className="mt-1.5 text-[13px] font-semibold" style={{ color: "var(--brick-deep)" }}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-[14px] font-bold mb-1.5">Email</label>
              <input type="email" autoComplete="email" placeholder="you@example.com" {...field("email")} />
              {errors.email && <p id="email-error" role="alert" className="mt-1.5 text-[13px] font-semibold" style={{ color: "var(--brick-deep)" }}>{errors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-[14px] font-bold mb-1.5">Message</label>
            <textarea rows={6} placeholder="What are you building?" {...field("message")} style={{ ...field("message").style, resize: "vertical" }} />
            {errors.message && <p id="message-error" role="alert" className="mt-1.5 text-[13px] font-semibold" style={{ color: "var(--brick-deep)" }}>{errors.message}</p>}
          </div>

          {serverError && (
            <p role="alert" className="box px-4 py-3 text-[14px] font-semibold" style={{ borderColor: "var(--brick)", color: "var(--brick-deep)" }}>
              {serverError}
            </p>
          )}

          <button type="submit" disabled={status === "loading" || status === "success"} className="btn btn-blue w-full justify-center">
            <span role="status" aria-live="polite">
              {status === "idle" && "Send it"}
              {status === "loading" && "Sending…"}
              {status === "success" && "Message sent."}
              {status === "error" && "Try again"}
            </span>
            {status !== "loading" && status !== "success" && <Arrow />}
          </button>

          <ul className="mt-2 flex flex-wrap gap-2 m-0 p-0 list-none">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 h-11 px-3.5 text-[13px] font-bold no-underline rounded-[4px]" style={{ border: "2px solid var(--ink)", color: "var(--ink)" }}>
                  {s.label} <Arrow dir="upright" size={14} />
                </a>
              </li>
            ))}
          </ul>
        </form>
      </div>

      <footer className="mx-auto max-w-[var(--page-max)] px-4 md:px-6 mt-6">
        <div className="box px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] font-semibold">
          <span>© 2026 Bill Warren · Hillsborough, NC · Side projects operate under Bottle Rocket Labs II, LLC</span>
          <span className="flex gap-2 -my-2">
            <a href="/Privacy" className="inline-flex items-center min-h-[44px] px-2 no-underline hover:underline" style={{ color: "var(--ink)" }}>Privacy</a>
            <a href="/ToS" className="inline-flex items-center min-h-[44px] px-2 no-underline hover:underline" style={{ color: "var(--ink)" }}>Terms</a>
          </span>
        </div>
      </footer>
    </section>
  );
}
