"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
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

  return (
    <main
      className={cn(
        "box-border h-screen w-screen overflow-hidden bg-background p-1.5 text-foreground sm:p-2",
        className,
      )}
    >
      <LenisProvider wrapperRef={scrollRef}>
        <div
          ref={scrollRef}
          className="page-scrollbar-hide box-border flex h-full w-full flex-col overflow-x-hidden overflow-y-auto border border-border bg-background sm:border-2"
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
          <div className="flex min-h-0 flex-1 flex-col">
            {children}
            <Footer />
          </div>
        </div>
      </LenisProvider>
    </main>
  );
}
