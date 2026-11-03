"use client";

import { useRef } from "react";
import { site } from "@/content/site";
import { Counter } from "@/components/gsap/Counter";
import { DotLine } from "@/components/gsap/DotLine";
import { SplitReveal } from "@/components/gsap/SplitReveal";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";

/** One surface per box — dark, lavender, grey, white. */
const surfaces = [
  "bg-[#141414] text-white",
  "bg-[var(--surface-services)] text-[#0a0a0a]",
  "bg-[#ececef] text-[#0a0a0a]",
  "bg-white text-[#0a0a0a] ring-1 ring-black/10",
];

export function Stats() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-box]", {
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: "[data-stats-grid]", start: "top 85%", once: true },
      });
      gsap.from("[data-dotpulse]", {
        scale: 0,
        duration: 0.6,
        ease: "back.out(3)",
        stagger: 0.12,
        delay: 0.4,
        scrollTrigger: { trigger: "[data-stats-grid]", start: "top 85%", once: true },
      });
      /* numbers drift at slightly different speeds → depth */
      gsap.utils.toArray<HTMLElement>("[data-num]").forEach((n, i) => {
        gsap.fromTo(
          n,
          { y: 30 + i * 12 },
          {
            y: -(30 + i * 12),
            ease: "none",
            scrollTrigger: { trigger: n, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="numbers"
      aria-labelledby="numbers-title"
      className="w-full px-[var(--page-x)] py-1"
    >
      <div className="rounded-[var(--radius-header)] bg-white px-5 py-10 ring-1 ring-black/10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid gap-6 pb-10 lg:grid-cols-2 lg:pb-14">
          <h2 id="numbers-title" className="type-label">
            (In numbers)
          </h2>
          <p className="type-statement">
            <SplitReveal
              mode="scrub"
              text="Small studio energy. Big-team standards. Numbers that keep me honest."
            />
          </p>
        </div>

        <div data-stats-grid className="relative">
          <DotLine axis="x" className="-top-5" />
          <div className="grid gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-4">
            {site.stats.map((s, i) => (
              <div
                key={s.label}
                data-box
                className={`relative flex min-h-[18rem] flex-col justify-between overflow-hidden rounded-[1.25rem] p-5 sm:min-h-[22rem] sm:p-6 lg:min-h-[26rem] ${surfaces[i % surfaces.length]}`}
              >
                <div className="flex items-center justify-between text-[13px] tracking-[-0.02em] opacity-70">
                  <span>0{i + 1}</span>
                  <span data-dotpulse className="size-2.5 rounded-full bg-current" />
                </div>

                <div>
                  <p data-num className="type-giant text-[clamp(4.25rem,8.2vw,9.5rem)]">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-5 max-w-[15rem] text-[15px] leading-snug tracking-[-0.02em] opacity-70">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
