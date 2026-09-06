import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageFrameDecorProps {
  className?: string;
}

const horizontalRuler =
  "repeating-linear-gradient(to right, var(--ruler) 0, var(--ruler) 1px, transparent 1px, transparent 7px)";

const verticalRuler =
  "repeating-linear-gradient(to bottom, var(--ruler) 0, var(--ruler) 1px, transparent 1px, transparent 7px)";

export function PageFrameDecor({ className }: PageFrameDecorProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
    >
      <span className="absolute top-1 left-1 z-10 inline-flex size-3 items-center justify-center font-mono text-[16px] font-medium leading-none text-foreground/70">
        +
      </span>
      <span className="absolute top-1 right-1 z-10 inline-flex size-3 items-center justify-center font-mono text-[16px] font-medium leading-none text-foreground/70">
        +
      </span>
      <span className="absolute bottom-1 left-1 z-10 inline-flex size-3 items-center justify-center font-mono text-[16px] font-medium leading-none text-foreground/70">
        +
      </span>
      <span className="absolute right-1 bottom-1 z-10 inline-flex size-3 items-center justify-center font-mono text-[16px] font-medium leading-none text-foreground/70">
        +
      </span>

      <div
        className="absolute top-2 right-2 left-2 h-2 opacity-30"
        style={{ backgroundImage: horizontalRuler }}
      />
      <div
        className="absolute right-2 bottom-2 left-2 h-2 opacity-30"
        style={{ backgroundImage: horizontalRuler }}
      />
      <div
        className="absolute top-2 bottom-2 left-2 w-2 opacity-30"
        style={{ backgroundImage: verticalRuler }}
      />
      <div
        className="absolute top-2 right-2 bottom-2 w-2 opacity-30"
        style={{ backgroundImage: verticalRuler }}
      />
    </div>
  );
}
