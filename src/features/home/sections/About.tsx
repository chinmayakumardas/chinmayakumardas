"use client";

import Image from "next/image";
import { site } from "@/content/site";
import { SplitReveal } from "@/components/gsap/SplitReveal";
import { Reveal } from "@/components/gsap/Reveal";

/** Full-width photo card: "(shall we meet?)", intro text and chips over the portrait. */
export function About() {
  const { eyebrow, title, text, chips } = site.about;

  return (
    <section
      id="about-me"
      aria-labelledby="about-title"
      className="w-full scroll-mt-12 px-[var(--page-x)] py-1"
    >
      <div className="relative isolate flex min-h-[34rem] flex-col justify-between overflow-hidden rounded-[var(--radius-header)] bg-[#ececef] p-5 sm:p-7 lg:min-h-[calc(100svh-4.25rem)] lg:p-8">
        <Image
          src="/images/profile-full.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-contain object-bottom opacity-90 lg:object-right-bottom"
        />
        <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-[#ececef] via-[#ececef]/70 to-transparent" />

        <p className="type-label">
          <SplitReveal text={`(${eyebrow})`} />
        </p>

        <div className="max-w-[34rem]">
          <h2 id="about-title" className="type-mega text-[clamp(2.75rem,6vw,5.5rem)]">
            <SplitReveal text={title} />
          </h2>
          <Reveal delay={0.15} className="mt-5 text-[clamp(0.95rem,1.15vw,1.1rem)] leading-snug tracking-[-0.03em] text-[#3d3d3d]">
            <p>{text}</p>
          </Reveal>
          <Reveal stagger={0.08} delay={0.25} className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="rounded-full bg-black/80 px-3 py-1 text-[12px] tracking-[-0.01em] text-white">
                {c}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
