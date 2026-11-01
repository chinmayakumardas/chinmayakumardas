"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import { site } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";
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

/** Desktop header (lg and up). Hidden below lg — HeaderMobile takes over. */
export function HeaderDesktop({ open, session, onToggle, onClose }: Props) {
  const pathname = usePathname();
  const clock = useClock();
  const shell = useRef<HTMLDivElement>(null);

  useMenuMotion(open, shell);

  return (
    // Fixed-height slot: the shell below grows OVER the page, never pushes it.
    <header className="sticky top-0 z-50 hidden h-11 lg:block">
      <div
        ref={shell}
        className={cn(
          "absolute inset-x-[var(--page-x)] top-0 overflow-hidden rounded-b-[1.25rem]",
          BAR_BG
        )}
      >
        {/* Bar */}
        <div className="flex h-11 items-center gap-4 px-5">
          <Logo className="text-[21px]" onClick={onClose} />

          <time
            className="min-w-[128px] text-[13px] text-[#6b6b6b]"
            suppressHydrationWarning
          >
            {clock}
          </time>

          <div className="ml-auto flex items-center gap-2">
            <nav aria-label="Primary" className="mr-1 flex items-center">
              {site.nav.map((item) => {
                // Anchor links (/#work …) are never "active" — only real pages
                const isAnchor = item.href.includes("#");
                const active =
                  !isAnchor &&
                  (item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    data-nav-item
                    className={cn(
                      "px-2.5 py-1.5 text-[13px] font-medium transition-colors xl:px-3",
                      active
                        ? "text-[#0a0a0a]"
                        : "text-[#6b6b6b] hover:text-[#0a0a0a]"
                    )}
                  >
                    <FlipText>{item.label}</FlipText>
                  </Link>
                );
              })}
            </nav>

            <CtaLink className="h-8 px-4 text-[13px]" onClick={onClose} />
            <MenuToggle
              open={open}
              controls="menu-panel-desktop"
              onClick={onToggle}
              className="size-8"
            />
          </div>
        </div>

        {/* Panel (grows downward from the bar) */}
        <div
          id="menu-panel-desktop"
          data-panel
          data-lenis-prevent
          inert={!open}
          className="h-0 overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ maxHeight: "calc(100dvh - 3.25rem)" }}
        >
          <div className="grid grid-cols-2 gap-10 px-5 pb-5 pt-1">
            <MenuList
              session={session}
              onNavigate={onClose}
              rowClass="py-[1.05rem] text-[clamp(1.6rem,2.1vw,2rem)] font-normal leading-tight tracking-[-0.03em] text-[#0a0a0a]"
            />
            <MenuImage className="min-h-[260px]" />
            <MenuFooter className="col-span-2 mt-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
