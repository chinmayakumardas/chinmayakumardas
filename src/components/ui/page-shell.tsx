"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Cursor } from "@/components/layout/cursor";

export interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const pageRef = React.useRef<HTMLDivElement>(null);
  const transitionRef = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [showHeader, setShowHeader] = React.useState(true);

  React.useEffect(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) return;

    let lastScrollTop = scrollElement.scrollTop;

    const handleScroll = () => {
      const currentScrollTop = scrollElement.scrollTop;
      const difference = currentScrollTop - lastScrollTop;

      // Always show header at the very top
      if (currentScrollTop <= 10) {
        setShowHeader(true);
      }
      // Scrolling down
      else if (difference > 5) {
        setShowHeader(false);
      }
      // Scrolling up
      else if (difference < -5) {
        setShowHeader(true);
      }

      lastScrollTop = currentScrollTop;
    };

    scrollElement.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useLayoutEffect(() => {
    const page = pageRef.current;
    const transition = transitionRef.current;

    if (!page || !transition) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        page,
        { y: 18, opacity: 0.7 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
      );
      gsap.fromTo(
        transition,
        { scaleY: 1, transformOrigin: "top" },
        { scaleY: 0, duration: 0.65, delay: 0.05, ease: "power4.inOut" },
      );
    });

    return () => context.revert();
  }, [pathname]);

  return (
    <main
      className={cn(
        "box-border h-screen w-screen overflow-hidden bg-background p-1.5 text-foreground ",
        className,
      )}
    >
      <Cursor />
      <div
        ref={transitionRef}
        className="pointer-events-none fixed inset-0 z-[90] origin-bottom scale-y-0 bg-brand"
        aria-hidden="true"
      />
      <LenisProvider wrapperRef={scrollRef}>
        <div
          ref={scrollRef}
          className="box-border flex h-full w-full flex-col overflow-x-hidden overflow-y-auto overscroll-contain border border-border bg-background [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden sm:border-2"
        >
          {/* Sticky Header */}
          <div
            className={cn(
              "sticky top-0 z-50 shrink-0 transition-transform duration-300 ease-in-out",
              showHeader ? "translate-y-0" : "-translate-y-full",
            )}
          >
            <Header />
          </div>

          {/* Page Content */}
          <div ref={pageRef} className="flex  flex-col">
            {children}
            <Footer />
          </div>
        </div>
      </LenisProvider>
    </main>
  );
}
