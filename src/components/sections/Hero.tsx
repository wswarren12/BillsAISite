"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-mono text-2xl font-bold text-indigo-600 sm:text-3xl">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const nameLetters = "Bill Warren".split("");

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16">
      {/* Gradient background with subtle mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 via-white to-amber-50/30" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Profile picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="shrink-0"
          >
            <div className="relative h-48 w-48 sm:h-56 sm:w-56">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-600 to-amber-400 opacity-75" />
              <Image
                src="/bill.png"
                alt="Bill Warren"
                width={224}
                height={224}
                priority
                className="relative rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.04,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-4 text-lg font-medium text-indigo-600 sm:text-xl"
            >
              Senior Product Leader &bull; AI &amp; Platform Strategy
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-8 max-w-xl text-slate-600"
            >
              Building and scaling AI-powered platforms, financial tools, and
              community engagement systems from 0-to-1. Turning complex problems
              into products people love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <a
                href="#contact"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-indigo-300 hover:text-indigo-600"
              >
                View Experience
              </a>
            </motion.div>
          </div>
        </div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-white/60 p-8 shadow-sm backdrop-blur-sm sm:grid-cols-3 sm:gap-4"
        >
          <div className="text-center">
            <CountUp target={500} suffix="K+" />
            <p className="mt-1 text-sm text-slate-500">Platform Users</p>
          </div>
          <div className="text-center">
            <CountUp target={30} suffix="M+" />
            <p className="mt-1 text-sm text-slate-500">$ Processed</p>
          </div>
          <div className="text-center">
            <CountUp target={7} suffix="+" />
            <p className="mt-1 text-sm text-slate-500">Years Leading Product</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
