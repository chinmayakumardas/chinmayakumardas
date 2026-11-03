"use client";

import { useRef } from "react";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";

/** Counts from 0 to `to` the first time it scrolls into view. */
export function Counter({
  to,
  prefix = "",
  suffix = "",
  pad = 0,
  duration = 2.2,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  pad?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const fmt = (n: number) => `${prefix}${String(Math.round(n)).padStart(pad, "0")}${suffix}`;

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const state = { v: 0 };
    el.textContent = fmt(0);

    const ctx = gsap.context(() => {
      gsap.to(state, {
        v: to,
        duration,
        ease: "power3.out",
        onUpdate: () => {
          el.textContent = fmt(state.v);
        },
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, prefix, suffix, pad, duration]);

  return (
    <span ref={ref} className={className}>
      {fmt(to)}
    </span>
  );
}
