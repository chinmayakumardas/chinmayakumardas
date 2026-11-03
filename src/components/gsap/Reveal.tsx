"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";

/**
 * Scroll reveal for blocks. Wrap anything; it fades + rises once when it
 * enters the viewport. With `stagger`, direct children reveal one by one.
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  y = 40,
  stagger,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(stagger ? Array.from(el.children) : el, {
        opacity: 0,
        y,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: stagger ?? 0,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, y, stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
