"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-indigo-50/40 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="A track record of building and scaling products"
        />

        <div className="relative">
          {/* Vertical timeline line (desktop only) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-100 md:block" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
