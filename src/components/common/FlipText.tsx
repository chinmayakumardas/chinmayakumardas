"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { cn } from "@/lib/utils";

/**
 * Roll / flip hover for any link or button.
 * Put it around the label INSIDE an <a> or <button>:
 *   on hover  → the label flips up and away, a copy rolls in from the bottom
 *   on leave  → it flips back the same way
 * The hover target is the closest <a> / <button>, so the whole control reacts.
 */
export function FlipText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const root = useRef<HTMLSpanElement>(null);
  const front = useRef<HTMLSpanElement>(null);
  const back = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const rootEl = root.current;
    const a = front.current;
    const b = back.current;
    if (!rootEl || !a || !b) return;

    const host = rootEl.closest<HTMLElement>("a, button");
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set([a, b], { transformOrigin: "50% 50%" });
    gsap.set(a, { yPercent: 0, rotateX: 0 });
    gsap.set(b, { yPercent: 115, rotateX: -80, opacity: 1 });

    const dur = 0.6;
    const ease = "power3.inOut";

    const enter = () => {
      gsap.to(a, { yPercent: -115, rotateX: 80, duration: dur, ease, overwrite: "auto" });
      gsap.to(b, { yPercent: 0, rotateX: 0, duration: dur, ease, overwrite: "auto" });
    };
    const leave = () => {
      gsap.to(a, { yPercent: 0, rotateX: 0, duration: dur, ease, overwrite: "auto" });
      gsap.to(b, { yPercent: 115, rotateX: -80, duration: dur, ease, overwrite: "auto" });
    };
    const focus = () => {
      if (host.matches(":focus-visible")) enter();
    };

    host.addEventListener("mouseenter", enter);
    host.addEventListener("mouseleave", leave);
    host.addEventListener("focus", focus);
    host.addEventListener("blur", leave);

    return () => {
      host.removeEventListener("mouseenter", enter);
      host.removeEventListener("mouseleave", leave);
      host.removeEventListener("focus", focus);
      host.removeEventListener("blur", leave);
      gsap.killTweensOf([a, b]);
      gsap.set([a, b], { clearProps: "all" });
    };
  }, []);

  return (
    <span
      ref={root}
      className={cn(
        "relative inline-block overflow-hidden align-top [perspective:500px]",
        className
      )}
    >
      <span ref={front} className="block will-change-transform">
        {children}
      </span>
      <span
        ref={back}
        aria-hidden
        className="absolute inset-0 block opacity-0 will-change-transform"
      >
        {children}
      </span>
    </span>
  );
}
