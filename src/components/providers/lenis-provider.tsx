"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import type { ReactNode } from "react";

interface LenisProviderProps {
  children: ReactNode;
  wrapperRef: React.RefObject<HTMLDivElement | null>;
}

export function LenisProvider({ children, wrapperRef }: LenisProviderProps) {
  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return;
    }

    const lenis = new Lenis({
      wrapper,
      content: wrapper,
      autoRaf: false,
      smoothWheel: true,
      syncTouch: true,
    });

    let animationFrame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, [wrapperRef]);

  return <>{children}</>;
}
