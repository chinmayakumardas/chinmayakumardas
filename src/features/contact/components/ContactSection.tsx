"use client";

import { useRef } from "react";
import { SplitReveal } from "@/components/gsap/SplitReveal";
import { Section, SectionLabel } from "@/components/layout/Section";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";
import { ContactForm } from "./ContactForm";

/** /contact page body: CTA on the left, form on the right. */
export function ContactSection() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-detail]", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.3,
      });

      gsap.from("[data-panel]", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.15,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      ref={root}
      id="contact-page"
      labelledBy="contact-title"
      tone="grey"
      fill
      className="lg:justify-center"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <SectionLabel id="contact-title">Contact</SectionLabel>

          <h1 className="type-mega mt-6 text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.95]">
  <SplitReveal text="Let’s talk." />
</h1>

<p
  data-detail
  className="mt-7 max-w-[34ch] text-[17px] leading-[1.7] tracking-[-0.02em] text-[#4a4a4a]"
>
  Got a task or an idea? Tell me what you need and I&apos;ll reply with where to start.
</p>
        </div>

        <div
          data-panel
          className="rounded-[1.25rem] bg-white p-5 sm:p-7 lg:p-8"
        >
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}