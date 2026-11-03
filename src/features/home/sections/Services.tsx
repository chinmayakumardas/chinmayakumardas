"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";
import { SplitReveal } from "@/components/gsap/SplitReveal";
import { Reveal } from "@/components/gsap/Reveal";
import { Section, SectionLabel } from "@/components/layout/Section";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

/** Dark card: "(Services, timing, prices)" as a clean three-column price list. */
export function Services() {
  return (
    <Section id="services" labelledBy="services-title" tone="dark">
      <div className="pb-8 text-center lg:pb-12">
        <SectionLabel id="services-title">Services, timing, prices</SectionLabel>
      </div>

      <ul>
        {site.pricing.map((s) => (
          <li key={s.title} className="border-t border-white/15 first:border-t-0">
            <Reveal
              y={24}
              className="grid items-start gap-x-8 gap-y-3 py-5 lg:grid-cols-[1fr_1.4fr_auto] lg:py-6"
            >
              <h3 className="text-[clamp(1.1rem,1.5vw,1.375rem)] font-semibold leading-tight tracking-[-0.045em]">
                {s.title}
              </h3>
              <div className="max-w-[34rem]">
                <p className="text-[14px] leading-snug tracking-[-0.02em] text-white/80">
                  <SplitReveal text={s.text} />
                </p>
                <span className="mt-3 inline-block rounded-full bg-white/10 px-3 py-0.5 text-[12px] tracking-[-0.01em] text-white/80">
                  {s.time}
                </span>
              </div>
              <p className="text-[clamp(1.1rem,1.5vw,1.375rem)] font-semibold leading-tight tracking-[-0.045em] lg:text-right">
                {s.price}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>

      <p className="mt-4 max-w-[48rem] text-[12px] leading-snug tracking-[-0.01em] text-white/60">
        <SplitReveal text="The final cost depends on the number of pages and blocks, the site’s complexity, extra features and integrations. I’ll give you an exact figure after a short intro call." />
      </p>

      <Reveal className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="type-statement max-w-[22ch]">
          <SplitReveal text="I pick the platform for the task" />
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="cta gap-2.5 !pl-3 border border-white text-white"
          >
            <WhatsAppIcon className="size-8 shrink-0" />
            <FlipText>Message on WhatsApp</FlipText>
          </a>
          <Link href="/contact" className="cta bg-white text-[#0a0a0a]">
            <FlipText>{site.letstalk.label}</FlipText>
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
