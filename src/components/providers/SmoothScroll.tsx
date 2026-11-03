"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/animations/gsap";

let lenisInstance: Lenis | null = null;

/** Lets other components (e.g. the header menu) pause / resume smooth scroll. */
export function getLenis() {
  return lenisInstance;
}

/**
 * Lenis drives the scroll, GSAP's ticker drives Lenis, and ScrollTrigger is
 * told about every scroll frame — so every scrubbed animation stays in sync.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.config({ ignoreMobileResize: true });

    // Smooth-scroll to #sections (works even while the menu has scroll locked)
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;

      let hash = "";
      if (href.startsWith("#")) hash = href;
      else if (href.startsWith("/#") && window.location.pathname === "/")
        hash = href.slice(1);
      if (hash.length < 2) return;

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target, { offset: -56, duration: 1.4, force: true });
      window.history.pushState(null, "", hash);
    };
    document.addEventListener("click", onClick, true);

    // Images / fonts change heights — re-measure every trigger once all is loaded.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
}
