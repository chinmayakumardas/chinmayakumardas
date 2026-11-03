"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";

/**
 * Dashed guide line with a travelling dot.
 *  mode="scrub" → dot + solid fill follow the scroll through the PARENT element
 *  mode="loop"  → dot just glides back and forth forever
 * Place it inside a `relative` parent. Size/position it with className.
 */
export function DotLine({
  axis = "y",
  mode = "scrub",
  tone = "dark",
  className,
}: {
  axis?: "x" | "y";
  mode?: "scrub" | "loop";
  tone?: "dark" | "light";
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  const dot = useRef<HTMLSpanElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    const d = dot.current;
    if (!el || !d || prefersReducedMotion()) return;
    const prop = axis === "y" ? "top" : "left";

    const ctx = gsap.context(() => {
      if (mode === "loop") {
        gsap.fromTo(
          d,
          { [prop]: "0%" },
          { [prop]: "100%", duration: 3.4, ease: "power1.inOut", repeat: -1, yoyo: true },
        );
        return;
      }
      const st = {
        trigger: el.parentElement,
        start: "top 65%",
        end: "bottom 65%",
        scrub: 0.4,
      };
      gsap.fromTo(d, { [prop]: "0%" }, { [prop]: "100%", ease: "none", scrollTrigger: st });
      if (fill.current) {
        gsap.fromTo(
          fill.current,
          axis === "y" ? { scaleY: 0 } : { scaleX: 0 },
          { ...(axis === "y" ? { scaleY: 1 } : { scaleX: 1 }), ease: "none", scrollTrigger: st },
        );
      }
    }, el);

    return () => ctx.revert();
  }, [axis, mode]);

  const dark = tone === "dark";

  return (
    <div
      ref={root}
      aria-hidden
      className={cn(
        "pointer-events-none absolute",
        axis === "y" ? "inset-y-0 w-px" : "inset-x-0 h-px",
        className,
      )}
    >
      <span
        className={cn(
          "absolute inset-0 border-dashed",
          axis === "y" ? "border-l" : "border-t",
          dark ? "border-black/30" : "border-white/30",
        )}
      />
      {mode === "scrub" && (
        <span
          ref={fill}
          className={cn(
            "absolute inset-0",
            axis === "y" ? "origin-top" : "origin-left",
            dark ? "bg-black" : "bg-white",
          )}
          style={{ transform: axis === "y" ? "scaleY(0)" : "scaleX(0)" }}
        />
      )}
      <span
        ref={dot}
        className={cn(
          "absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4",
          dark ? "bg-black ring-white/70" : "bg-white ring-black/30",
        )}
        style={axis === "y" ? { left: "50%", top: 0 } : { top: "50%", left: 0 }}
      />
    </div>
  );
}
