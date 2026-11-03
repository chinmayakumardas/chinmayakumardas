"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { SplitReveal } from "@/components/gsap/SplitReveal";
import { Reveal } from "@/components/gsap/Reveal";
import { FlipText } from "@/components/common/FlipText";
import { Section } from "@/components/layout/Section";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";

/** Dark card: "What people come to me with" + a row of problem cards and a call-out. */
export function Needs() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-need]", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: "[data-needs]", start: "top 85%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <Section ref={root} id="needs" labelledBy="needs-title" tone="dark" className="overflow-hidden">
      <div className="grid gap-6 pb-8 lg:grid-cols-2 lg:pb-12">
        <h2 id="needs-title" className="type-title max-w-[10ch] !font-semibold">
          <SplitReveal text="What people come to me with" />
        </h2>
        <p className="max-w-[24rem] text-[14px] leading-snug tracking-[-0.02em] text-white/70 lg:ml-auto">
          <SplitReveal text="If you recognise yourself in one of these, we have something to talk about." />
        </p>
      </div>

      <div data-needs className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_1.15fr]">
        {site.needs.map((n) => (
          <article
            key={n.index}
            data-need
            className="flex min-h-[18rem] flex-col justify-between rounded-[1.25rem] bg-white/[0.06] p-5 lg:min-h-[22rem]"
          >
            <span className="type-giant text-[clamp(2.5rem,4vw,4rem)] text-white/25">{n.index}</span>
            <div>
              <h3 className="text-[clamp(1.1rem,1.5vw,1.4rem)] font-semibold leading-[1.1] tracking-[-0.045em]">
                <SplitReveal text={n.quote} />
              </h3>
              <p className="mt-3 text-[13px] leading-snug tracking-[-0.015em] text-white/70">
                <SplitReveal text={n.text} />
              </p>
            </div>
          </article>
        ))}

        <article
          data-need
          className="flex min-h-[18rem] flex-col justify-between rounded-[1.25rem] bg-gradient-to-br from-[#f1d9c8] via-[#d9d6f5] to-[#bfe3e0] p-5 text-[#0a0a0a] sm:col-span-2 lg:col-span-1 lg:min-h-[22rem]"
        >
          <div>
            <h3 className="text-[clamp(1.25rem,1.7vw,1.6rem)] font-semibold leading-[1.05] tracking-[-0.05em]">
              Sound familiar?
            </h3>
            <p className="mt-2 text-[13px] leading-snug tracking-[-0.015em] text-black/60">
              <SplitReveal text="Send a request or message me on WhatsApp, and I’ll find the best solution for you." />
            </p>
          </div>
          <Link href="/contact" className="cta cta-dark mt-6 w-fit gap-2">
            <FlipText>{site.letstalk.label}</FlipText>
            <ArrowUpRight size={16} />
          </Link>
        </article>
      </div>
    </Section>
  );
}
