"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";
import {
  BAR_BG,
  Logo,
  MenuFooter,
  MenuImage,
  MenuList,
  MenuToggle,
  CtaLink,
  useClock,
} from "./shared";
import { useMenuMotion } from "./useMenuMotion";

type Props = {
  open: boolean;
  session: number;
  onToggle: () => void;
  onClose: () => void;
};

/** Mobile + tablet header (below lg). Compact bar, single-column menu. */
export function HeaderMobile({ open, session, onToggle, onClose }: Props) {
  const clock = useClock();
  const shell = useRef<HTMLDivElement>(null);

  useMenuMotion(open, shell);

  return (
    // Fixed-height slot: the shell below grows OVER the page, never pushes it.
    <header className="sticky top-0 z-50 h-10 lg:hidden">
      <div
        ref={shell}
        className={cn(
          "absolute inset-x-[var(--page-x)] top-0 overflow-hidden rounded-b-[1rem]",
          BAR_BG
        )}
      >
        {/* Bar */}
        <div className="flex h-10 items-center gap-3 px-3.5 sm:px-4">
          <Logo className="text-[19px]" onClick={onClose} />

          <time
            className="hidden text-[12px] text-[#6b6b6b] md:block"
            suppressHydrationWarning
          >
            {clock}
          </time>

          <div className="ml-auto flex items-center gap-1.5">
            <CtaLink className="h-7 px-3 text-[12px]" onClick={onClose} />
            <MenuToggle
              open={open}
              controls="menu-panel-mobile"
              onClick={onToggle}
              className="size-7"
            />
          </div>
        </div>

        {/* Panel (grows downward from the bar) */}
        <div
          id="menu-panel-mobile"
          data-panel
          data-lenis-prevent
          inert={!open}
          className="h-0 overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ maxHeight: "calc(100dvh - 2.75rem)" }}
        >
          <div className="flex flex-col gap-5 px-3.5 pb-4 pt-0.5 sm:px-4">
            <MenuList
              session={session}
              onNavigate={onClose}
              rowClass="py-3.5 text-[clamp(1.4rem,6vw,1.9rem)] font-normal leading-tight tracking-[-0.03em] text-[#0a0a0a]"
            />
            <MenuImage className="hidden h-40 sm:block sm:h-52" />
            <MenuFooter />
          </div>
        </div>
      </div>
    </header>
  );
}
