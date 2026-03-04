"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, boardRoles } from "@/data/education";
import { FiBookOpen, FiAward } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Education & Leadership"
          subtitle="Academic foundation and community involvement"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Education */}
          <AnimatedSection direction="left">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <FiBookOpen size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.institution}>
                    <h4 className="font-bold text-slate-900">
                      {edu.institution}
                    </h4>
                    <p className="text-sm font-semibold text-indigo-600">
                      {edu.degree}
                    </p>
                    {edu.details && (
                      <p className="mt-1 text-sm text-slate-500">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Board Roles */}
          <AnimatedSection direction="right">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <FiAward size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Board & Community
                </h3>
              </div>

              <div className="space-y-6">
                {boardRoles.map((role) => (
                  <div key={role.organization}>
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-bold text-slate-900">
                        {role.organization}
                      </h4>
                      <span className="shrink-0 text-xs text-slate-400">
                        {role.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-indigo-600">
                      {role.role}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
