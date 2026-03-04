"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About" subtitle="The short version" />

        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                I&apos;m a product leader who thrives at the intersection of{" "}
                <span className="font-semibold text-indigo-600">
                  emerging technology
                </span>{" "}
                and{" "}
                <span className="font-semibold text-indigo-600">
                  real-world impact
                </span>
                . Over the past seven years, I&apos;ve built and scaled platforms across
                AI, Web3, and fintech — from founding a startup spun out of
                ConsenSys to leading product at one of gaming&apos;s fastest-growing
                engagement platforms.
              </p>

              <p>
                At{" "}
                <span className="font-semibold text-indigo-600">
                  Game7 / Summon
                </span>
                , I led the evolution from a manual questing tool to an
                AI-powered engagement platform serving 500K+ users. At{" "}
                <span className="font-semibold text-indigo-600">Opolis</span>, I
                shipped smart contract-based payroll infrastructure that&apos;s
                processed over $30M in transactions. My experience spans the
                full product lifecycle: discovery, validation, shipping, and
                scaling.
              </p>

              <p>
                Before tech, I practiced corporate law at{" "}
                <span className="font-semibold text-indigo-600">WilmerHale</span>
                , advising startups on venture financing and M&A. My{" "}
                <span className="font-semibold text-indigo-600">
                  Duke Law JD
                </span>{" "}
                gives me a unique edge in stakeholder communication, contract
                negotiation, and navigating regulatory complexity.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <blockquote className="mt-8 border-l-4 border-indigo-600 pl-6 text-lg italic text-slate-700">
              &ldquo;I believe the best products are built at the intersection of deep
              user empathy, technical fluency, and strategic business
              thinking.&rdquo;
            </blockquote>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
