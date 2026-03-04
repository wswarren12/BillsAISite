"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex md:justify-center">
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-indigo-600 bg-white md:left-1/2 md:block" />

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`w-full md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-indigo-600">
              {experience.period}
            </span>
            <span className="text-sm text-slate-400">|</span>
            <span className="text-sm text-slate-500">{experience.location}</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900">{experience.role}</h3>
          <p className="mb-3 text-lg font-medium text-slate-600">
            {experience.company}
          </p>

          <p className="mb-4 text-sm leading-relaxed text-slate-600">
            {experience.description}
          </p>

          {experience.metrics && experience.metrics.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {experience.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full bg-indigo-50 px-3 py-1 font-mono text-xs font-semibold text-indigo-700"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}

          <ul className="mb-4 space-y-2">
            {experience.achievements.slice(0, 3).map((achievement, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                {achievement}
              </li>
            ))}
          </ul>

          {experience.tags && (
            <div className="flex flex-wrap gap-1.5">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
