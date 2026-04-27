"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  function validate(): boolean {
    const newErrors: FieldErrors = {};
    if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
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
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid var(--line-2)",
    background: "rgba(255,255,255,0.04)",
    color: "var(--text-0)",
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 200ms",
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: "var(--ink-950)",
        color: "var(--text-0)",
        paddingTop: 140,
        paddingBottom: 80,
      }}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 400px at 50% 0%, rgba(124,131,255,0.15), transparent 60%), radial-gradient(400px 300px at 80% 100%, rgba(245,181,68,0.1), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-7 text-center">
        <div
          className="font-mono text-[11px] tracking-[0.18em] uppercase"
          style={{ color: "var(--indigo-2)" }}
        >
          06 / Contact
        </div>

        <h2
          className="mt-5 mb-7"
          style={{
            fontSize: "clamp(56px, 8vw, 120px)",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 0.98,
          }}
        >
          Let&apos;s build
          <br />
          <span
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 600,
              background:
                "linear-gradient(120deg, var(--indigo-2), var(--amber-2))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            something worth shipping.
          </span>
        </h2>

        <p
          className="mx-auto"
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "var(--text-1)",
            maxWidth: 540,
          }}
        >
          Open to conversations about product leadership, advisory roles, and
          AI/platform strategy engagements.
        </p>

        {/* Quick CTA */}
        <div className="mt-10 flex justify-center flex-wrap gap-3.5">
          <a
            href="mailto:bill@billsai.club"
            className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-sm font-semibold no-underline transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--text-0)",
              color: "var(--ink-950)",
              boxShadow: "0 10px 30px rgba(255,255,255,0.1)",
            }}
          >
            bill@billsai.club
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
          <a
            href="#hero"
            className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-sm font-semibold no-underline transition-colors"
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "var(--text-0)",
              border: "1px solid var(--line-2)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.08)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.04)")
            }
          >
            Back to top ↑
          </a>
        </div>

        {/* Social links */}
        <div className="mt-15 flex justify-center flex-wrap gap-2.5 font-mono text-xs">
          {[
            { label: "LinkedIn ↗", href: "https://linkedin.com/in/billwarren" },
            { label: "GitHub ↗", href: "https://github.com/wswarren12" },
            { label: "X / Twitter ↗", href: "https://x.com/billwarren" },
            { label: "Warpcast ↗", href: "https://warpcast.com/bill" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline px-3.5 py-2 rounded-full transition-all hover:-translate-y-0.5"
              style={{
                border: "1px solid var(--line-2)",
                color: "var(--text-1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--indigo)";
                (e.currentTarget as HTMLElement).style.color = "var(--indigo-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--line-2)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-1)";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="mt-16 text-left"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--line)",
            borderRadius: 20,
            padding: 32,
          }}
        >
          <div
            className="font-mono text-[11px] tracking-[0.14em] uppercase mb-6"
            style={{ color: "var(--text-3)" }}
          >
            Or send a message directly
          </div>

          {/* Honeypot */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            className="absolute -left-[9999px] opacity-0"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2 mb-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1.5"
                style={{ color: "var(--text-2)" }}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  ...inputBase,
                  borderColor: errors.name ? "#f87171" : "var(--line-2)",
                }}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-xs" style={{ color: "#f87171" }}>
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5"
                style={{ color: "var(--text-2)" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  ...inputBase,
                  borderColor: errors.email ? "#f87171" : "var(--line-2)",
                }}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs" style={{ color: "#f87171" }}>
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1.5"
              style={{ color: "var(--text-2)" }}
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                ...inputBase,
                resize: "none",
                borderColor: errors.message ? "#f87171" : "var(--line-2)",
              }}
              placeholder="Tell me about your project or opportunity..."
            />
            {errors.message && (
              <p className="mt-1 text-xs" style={{ color: "#f87171" }}>
                {errors.message}
              </p>
            )}
          </div>

          {serverError && (
            <p
              className="mb-4 rounded-lg px-4 py-2 text-sm"
              style={{
                background: "rgba(248,113,113,0.1)",
                color: "#f87171",
                border: "1px solid rgba(248,113,113,0.2)",
              }}
            >
              {serverError}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: "var(--text-0)",
              color: "var(--ink-950)",
            }}
          >
            {status === "idle" && "Send Message →"}
            {status === "loading" && "Sending…"}
            {status === "success" && "✓ Message Sent!"}
            {status === "error" && "Try Again →"}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div
        className="mt-24 text-center font-mono text-[11px]"
        style={{
          color: "var(--text-3)",
          borderTop: "1px solid var(--line)",
          paddingTop: 28,
        }}
      >
        <div className="mx-auto max-w-[1280px] px-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 Bill Warren · Hillsborough, NC · Built with intent</span>
          <div className="flex gap-4 text-[11px]">
            <a
              href="/Privacy"
              className="no-underline transition-colors"
              style={{ color: "var(--text-3)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--indigo-2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")
              }
            >
              Privacy Policy
            </a>
            <a
              href="/ToS"
              className="no-underline transition-colors"
              style={{ color: "var(--text-3)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--indigo-2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")
              }
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
