import type { ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";

/**
 * DESIGN SYSTEM — page building blocks.
 *
 * Every page is a stack of <Section>s. A Section is a rounded card that sits
 * inside the page gutter. Pick a `tone`, optionally `fill` it to one screen
 * (large screens only), and put a <SectionLabel> + content inside.
 *
 *   <Section id="x" tone="lavender" fill labelledBy="x-title">
 *     <SectionLabel id="x-title">Services</SectionLabel>
 *     …
 *   </Section>
 */

const tones = {
  grey: "bg-[#ececef] text-[#0a0a0a]",
  white: "bg-white text-[#0a0a0a] ring-1 ring-black/10",
  lavender: "bg-[var(--surface-services)] text-[#0a0a0a]",
  dark: "bg-[#141414] text-white",
} as const;

export type SectionTone = keyof typeof tones;

export function Section({
  id,
  labelledBy,
  tone = "grey",
  fill = false,
  className,
  children,
  ref,
}: {
  id?: string;
  labelledBy?: string;
  tone?: SectionTone;
  /** ~one screen tall on large screens */
  fill?: boolean;
  className?: string;
  children: ReactNode;
  ref?: Ref<HTMLElement>;
}) {
  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={labelledBy}
      className="w-full scroll-mt-12 px-[var(--page-x)] py-1"
    >
      <div
        className={cn(
          "rounded-[var(--radius-header)] p-5 sm:p-7 lg:p-8",
          tones[tone],
          fill && "fill-screen",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** "(Approach)" — the small light label that opens every section. */
export function SectionLabel({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="type-label">
      ({children})
    </h2>
  );
}
