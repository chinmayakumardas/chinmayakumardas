"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "gsap";

/**
 * One GSAP timeline that opens / closes a header menu.
 * The header shell itself grows downward (panel height 0 → auto), then:
 *  - the + icon rotates into an X
 *  - inline nav items fade out
 *  - row labels rise through a mask, divider lines draw in
 *  - image reveals with a clip + slow zoom-out
 *  - footer details fade up
 *
 * Elements are found by data attributes inside `scope`:
 *  [data-panel] [data-icon] [data-nav-item] [data-row-text] [data-row-line]
 *  [data-image] [data-image-inner] [data-fade]
 */
export function useMenuMotion(
  open: boolean,
  scope: RefObject<HTMLElement | null>
) {
  const first = useRef(true);

  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    const q = gsap.utils.selector(root);
    const panel = q("[data-panel]");
    const icon = q("[data-icon]");
    const navItems = q("[data-nav-item]");
    const texts = q("[data-row-text]");
    const lines = q("[data-row-line]");
    const image = q("[data-image]");
    const imageInner = q("[data-image-inner]");
    const fades = q("[data-fade], [data-slot='accordion-trigger'] > svg");

    const instant = first.current;
    first.current = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const k = instant || reduce ? 0 : 1;
    const d = (n: number) => n * k;

    const tl = gsap.timeline({ defaults: { overwrite: "auto" } });

    if (open) {
      tl.to(panel, { height: "auto", duration: d(0.85), ease: "power4.inOut" }, 0)
        .to(icon, { rotate: 45, duration: d(0.75), ease: "power3.inOut" }, 0)
        .to(
          navItems,
          {
            autoAlpha: 0,
            y: -8,
            duration: d(0.3),
            stagger: d(0.03),
            ease: "power2.out",
          },
          0
        )
        .fromTo(
          lines,
          { scaleX: 0 },
          { scaleX: 1, duration: d(1), stagger: d(0.07), ease: "power3.inOut" },
          0.2
        )
        .fromTo(
          texts,
          { yPercent: 115 },
          { yPercent: 0, duration: d(0.95), stagger: d(0.07), ease: "power4.out" },
          0.28
        )
        .fromTo(
          image,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: d(1), ease: "power4.inOut" },
          0.2
        )
        .fromTo(
          imageInner,
          { scale: 1.3 },
          { scale: 1, duration: d(1.5), ease: "power3.out" },
          0.2
        )
        .fromTo(
          fades,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: d(0.8), stagger: d(0.06), ease: "power3.out" },
          0.5
        );
    } else {
      tl.to(fades, { autoAlpha: 0, y: 8, duration: d(0.22), ease: "power2.in" }, 0)
        .to(texts, { yPercent: 115, duration: d(0.35), stagger: d(0.02), ease: "power3.in" }, 0)
        .to(lines, { scaleX: 0, duration: d(0.35), ease: "power3.in" }, 0)
        .to(image, { clipPath: "inset(0% 0% 100% 0%)", duration: d(0.45), ease: "power3.in" }, 0)
        .to(panel, { height: 0, duration: d(0.7), ease: "power4.inOut" }, 0.12)
        .to(icon, { rotate: 0, duration: d(0.65), ease: "power3.inOut" }, 0)
        .to(
          navItems,
          {
            autoAlpha: 1,
            y: 0,
            duration: d(0.45),
            stagger: d(0.04),
            ease: "power3.out",
          },
          0.4
        )
        .add(() => {
          panel.forEach((el) => {
            el.scrollTop = 0;
          });
        });
    }

    if (instant) tl.progress(1);

    return () => {
      tl.kill();
    };
  }, [open, scope]);
}
