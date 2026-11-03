"use client";

import { Fragment, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap, ScrollTrigger, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";

/**
 * Giant scrolling type band. Alternates filled / outlined words, separated by
 * dots, and speeds up with scroll velocity. Set the size with className
 * (font-size) — everything inside is measured in em.
 */
export function Marquee({
  items,
  className,
  speed = 40,
  reverse = false,
}: {
  items: readonly string[];
  className?: string;
  /** seconds for one full loop */
  speed?: number;
  reverse?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    const t = track.current;
    if (!el || !t || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tween = reverse
        ? gsap.fromTo(t, { xPercent: -50 }, { xPercent: 0, duration: speed, ease: "none", repeat: -1 })
        : gsap.to(t, { xPercent: -50, duration: speed, ease: "none", repeat: -1 });

      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 220, 7);
          tween.timeScale(boost);
          gsap.to(tween, { timeScale: 1, duration: 1.2, ease: "power2.out", overwrite: true });
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed, reverse]);

  const group = (k: number) => (
    <div
      key={k}
      aria-hidden={k > 0}
      className="flex shrink-0 items-center gap-[0.35em] pr-[0.35em]"
    >
      {[...items, ...items].map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className={cn("whitespace-nowrap", i % 2 === 1 && "text-outline")}>{word}</span>
          <span className="size-[0.16em] shrink-0 rounded-full bg-current" />
        </Fragment>
      ))}
    </div>
  );

  return (
    <div ref={root} className={cn("overflow-hidden", className)}>
      <div ref={track} className="flex w-max items-center will-change-transform">
        {group(0)}
        {group(1)}
      </div>
    </div>
  );
}
