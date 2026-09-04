import * as React from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "hero" | "display" | "h1" | "h2" | "h3";

const LEVEL_TAG: Record<HeadingLevel, keyof React.JSX.IntrinsicElements> = {
  hero: "h1",
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

const LEVEL_CLASS: Record<HeadingLevel, string> = {
  hero: "text-hero",
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
};

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Heading({
  level = "h2",
  as,
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = as ?? LEVEL_TAG[level];

  return React.createElement(
    Tag,
    {
      className: cn(LEVEL_CLASS[level], "text-foreground", className),
      ...props,
    },
    children,
  );
}