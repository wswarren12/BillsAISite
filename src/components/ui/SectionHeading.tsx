"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionHeading({ title, subtitle, dark }: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-12 text-center">
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg ${dark ? "text-slate-400" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-indigo-600" />
    </AnimatedSection>
  );
}
