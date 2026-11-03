"use client";

import { site } from "@/content/site";
import { SplitReveal } from "@/components/gsap/SplitReveal";
import { Reveal } from "@/components/gsap/Reveal";
import { Section, SectionLabel } from "@/components/layout/Section";

/** The statement fades from ink to grey, one sentence at a time. */
const statementTones = ["text-[#0a0a0a]", "text-[#4a4a4a]", "text-[#9a9a9a]"];

/** Light card: label + statement on top, then three phases, each a number beside its steps. */
export function Approach() {
  const { statement, phases } = site.approach;

  return (
    <Section id="approach" labelledBy="approach-title" tone="grey">
      <div className="grid gap-6 pb-10 lg:grid-cols-2 lg:pb-14">
        <SectionLabel id="approach-title">Approach</SectionLabel>
        <p className="type-statement">
          {statement.map((sentence, i) => (
            <SplitReveal key={sentence} mode="scrub" text={`${sentence} `} className={statementTones[i]} />
          ))}
        </p>
      </div>

      <div>
        {phases.map((phase) => (
          <div
            key={phase.index}
            className="grid gap-6 border-t border-dashed border-black/25 py-6 lg:grid-cols-2 lg:py-8"
          >
            <Reveal as="h3" className="type-title !text-[clamp(1.25rem,1.8vw,1.75rem)] !font-medium">
              {phase.index}
              <span className="text-[#8a8a8a]"> — </span>
              {phase.label}
            </Reveal>

            <Reveal as="ol" stagger={0.1} className="flex max-w-[38rem] flex-col gap-5">
              {phase.steps.map((step) => (
                <li key={step.title}>
                  <h4 className="text-[clamp(1.1rem,1.4vw,1.375rem)] font-semibold leading-[1.1] tracking-[-0.045em]">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-[14px] leading-snug tracking-[-0.02em] text-[#4a4a4a]">
                    <SplitReveal text={step.text} />
                  </p>
                </li>
              ))}
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
