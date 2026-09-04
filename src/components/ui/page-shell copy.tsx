import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main
      className={cn(
        "min-h-screen bg-background px-2 py-2 text-foreground",
        className,
      )}
    >
      <div className="relative min-h-[calc(100vh-1rem)] border border-border">
        {/* Corner marks */}
        <span className="absolute -left-px -top-px text-[16px] leading-none">
          +
        </span>

        <span className="absolute -right-px -top-px text-[16px] leading-none">
          +
        </span>

        <span className="absolute -bottom-px -left-px text-[16px] leading-none">
          +
        </span>

        <span className="absolute -bottom-px -right-px text-[16px] leading-none">
          +
        </span>

        {/* Top ruler */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-6 right-6 top-2 h-2 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, var(--ruler) 0, var(--ruler) 1px, transparent 1px, transparent 7px)",
          }}
        />

        {/* Bottom ruler */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2 left-6 right-6 h-2 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, var(--ruler) 0, var(--ruler) 1px, transparent 1px, transparent 7px)",
          }}
        />

        {/* Left ruler */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-2 top-6 w-2 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, var(--ruler) 0, var(--ruler) 1px, transparent 1px, transparent 7px)",
          }}
        />

        {/* Right ruler */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 right-2 top-6 w-2 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, var(--ruler) 0, var(--ruler) 1px, transparent 1px, transparent 7px)",
          }}
        />

        {/* Page content */}
        <div className="relative z-10">{children}</div>
      </div>
    </main>
  );
}
