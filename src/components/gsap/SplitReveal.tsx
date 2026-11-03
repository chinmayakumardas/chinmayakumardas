"use client";

import { useRef } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";

/**
 * Word-by-word text animation.
 *  mode="scrub" (default) → words light up one by one while you scroll
 *  mode="rise"            → each word slides up out of a mask once
 */
export function SplitReveal({
  text,
  mode = "scrub",
  className,
  stagger = 0.06,
  delay = 0,
}: {
  text: string;
  mode?: "rise" | "scrub";
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ").filter(Boolean);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-w]");

    const ctx = gsap.context(() => {
      if (mode === "scrub") {
        gsap.fromTo(
          targets,
          { opacity: 0.15 },
          {
            opacity: 1,
            ease: "none",
            stagger: 1,
            duration: 1,
            scrollTrigger: { trigger: el, start: "top 88%", end: "bottom 55%", scrub: true },
          },
        );
      } else {
        gsap.from(targets, {
          yPercent: 115,
          duration: 1.1,
          ease: "power4.out",
          stagger,
          delay,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [mode, stagger, delay, text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className={
            mode === "rise"
              ? "-my-[0.1em] inline-block overflow-hidden py-[0.1em] align-bottom"
              : "inline-block"
          }
        >
          <span data-w className="inline-block">
            {word}
          </span>
          {i < words.length - 1 ? "\u00a0" : null}
        </span>
      ))}
    </span>
  );
}
