"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import type { ReactNode, RefObject } from "react";

interface LenisProviderProps {
  children: ReactNode;
  wrapperRef: RefObject<HTMLDivElement | null>;
}

export function LenisProvider({
  children,
  wrapperRef,
}: LenisProviderProps) {
  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    const lenis = new Lenis({
      wrapper,
      content: wrapper,
      autoRaf: false,
      smoothWheel: true,
      syncTouch: false,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [wrapperRef]);

  return <>{children}</>;
}