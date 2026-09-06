import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  noGap?: boolean;
  bleed?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, noGap, bleed, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(!noGap && "section-gap", className)}
      {...props}
    >
      {bleed ? children : (
        <div className="container max-w-content">{children}</div>
      )}
    </section>
  ),
);

Section.displayName = "Section";

export { Section };