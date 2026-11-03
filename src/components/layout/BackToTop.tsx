"use client";

import { ArrowUp } from "lucide-react";
import { getLenis } from "@/components/providers/SmoothScroll";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => {
        const lenis = getLenis();
        if (lenis) lenis.scrollTo(0, { duration: 1.6 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="inline-flex h-10 items-center gap-2 rounded-full bg-black/[0.07] px-4 text-[13px] font-medium tracking-[-0.02em] text-[#0a0a0a] transition-colors hover:bg-black/[0.12]"
    >
      Back to top
      <ArrowUp className="size-3.5" />
    </button>
  );
}
