
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Instrument_Serif } from "next/font/google";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const steps = [
  "Research",
  "Strategy",
  "Design",
  "Development",
  "Launch",
];

export function Approach() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const circles = gsap.utils.toArray<HTMLElement>(".approach-step");
      const arrows = gsap.utils.toArray<SVGPathElement>(".approach-arrow");

      gsap.set(circles, {
        autoAlpha: 0,
        scale: 0.85,
        y: 12,
      });

      gsap.set(arrows, {
        strokeDasharray: 100,
        strokeDashoffset: 100,
      });

      const timeline = gsap.timeline({ delay: 0.3 });

      timeline.from(".approach-heading", {
        autoAlpha: 0,
        y: 18,
        duration: 0.65,
        ease: "power3.out",
      });

      circles.forEach((circle, index) => {
        timeline.to(circle, {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });

        if (arrows[index]) {
          timeline.to(arrows[index], {
            strokeDashoffset: 0,
            duration: 0.4,
            ease: "power2.inOut",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="w-full overflow-hidden px-[var(--page-x)] py-16 sm:py-20 lg:py-24"
    >
      {/* Heading */}
      <div className="approach-heading">
        <p className="text-[13px] text-[#9a9a9a]">
          / How I work
        </p>

        <h2 className="mt-2 font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-[#0a0a0a]">
          My approach.
        </h2>

        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[#6b6b6b]">
          A thoughtful process that turns ideas into meaningful digital
          experiences, from initial research to final launch.
        </p>
      </div>

   
{/* Sequential process flow */}
<div className="mt-12 overflow-x-auto pb-3">
  <ol className="flex min-w-[850px] items-center">
    {steps.map((step, index) => (
      <li key={step} className="flex shrink-0 items-center">
        {/* Circle */}
        <div className="approach-step relative z-10 flex size-[145px] shrink-0 items-center justify-center rounded-full border border-dashed border-[#c9c9c9] bg-white">
          <span
            className={`${serif.className} px-2 text-center text-[22px] tracking-tight text-[#0a0a0a]`}
          >
            {step}
          </span>
        </div>

        {/* Edge-to-edge arrow */}
        {index !== steps.length - 1 && (
          <svg
            viewBox="0 0 100 20"
            className="approach-connector -ml-px h-5 w-[65px] shrink-0 overflow-visible"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="approach-arrow"
              d="M 0 10 H 94 M 87 3 L 94 10 L 87 17"
              stroke="#999"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </li>
    ))}
  </ol>
</div>

    </section>
  );
}
