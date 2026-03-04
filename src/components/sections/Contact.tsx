"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiMail, FiMapPin, FiSend, FiCheck, FiLoader } from "react-icons/fi";

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
      setServerError(
        err instanceof Error ? err.message : "Something went wrong"
      );
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="bg-slate-950 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Let's build something great together"
          dark
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-300">
                I&apos;m always open to discussing product strategy, new
                opportunities, or interesting collaborations. Drop me a line and
                I&apos;ll get back to you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <FiMail className="text-indigo-400" size={20} />
                  <a
                    href="mailto:bill@billsclub.ai"
                    className="transition-colors hover:text-indigo-400"
                  >
                    bill@billsclub.ai
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <FiMapPin className="text-indigo-400" size={20} />
                  <span>Hillsborough, NC</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot - hidden from humans */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) =>
                  setFormData({ ...formData, honeypot: e.target.value })
                }
                className="absolute -left-[9999px] opacity-0"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full rounded-lg border bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.name ? "border-red-500" : "border-slate-700"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full rounded-lg border bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.email ? "border-red-500" : "border-slate-700"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full resize-none rounded-lg border bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.message ? "border-red-500" : "border-slate-700"
                  }`}
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {serverError && (
                <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">
                  {serverError}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "idle" && (
                  <>
                    <FiSend size={16} /> Send Message
                  </>
                )}
                {status === "loading" && (
                  <>
                    <FiLoader size={16} className="animate-spin" /> Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <FiCheck size={16} /> Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <FiSend size={16} /> Try Again
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
