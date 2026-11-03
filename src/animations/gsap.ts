import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** One place that registers GSAP plugins — import gsap from here, never from "gsap". */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** useLayoutEffect in the browser, useEffect on the server (no SSR warning). */
export const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const EASE_OUT = "power4.out";

export { gsap, ScrollTrigger };
