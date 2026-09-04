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
      <span className="absolute -left-px -top-px text-[15px] leading-none">
        +
      </span>
      <span className="absolute -right-px -top-px text-[15px] leading-none">
        +
      </span>
      <span className="absolute -bottom-px -left-px text-[15px] leading-none">
        +
      </span>
      <span className="absolute -bottom-px -right-px text-[15px] leading-none">
        +
      </span>

      <div
        className="absolute left-6 right-6 top-2 h-2 opacity-30"
        style={{ backgroundImage: horizontalRuler }}
      />
      <div
        className="absolute bottom-2 left-6 right-6 h-2 opacity-30"
        style={{ backgroundImage: horizontalRuler }}
      />
      <div
        className="absolute bottom-6 left-2 top-6 w-2 opacity-30"
        style={{ backgroundImage: verticalRuler }}
      />
      <div
        className="absolute bottom-6 right-2 top-6 w-2 opacity-30"
        style={{ backgroundImage: verticalRuler }}
      />
    </div>
  );
}
