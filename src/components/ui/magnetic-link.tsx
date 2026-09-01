"use client";

import Link from "next/link";
import { useRef } from "react";
import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "ghost";
  strength?: number;
}

/**
 * A pill-shaped CTA that leans gently toward the cursor on hover.
 * No-ops under prefers-reduced-motion.
 */
export function MagneticLink({
  href,
  children,
  className,
  variant = "solid",
  strength = 0.35,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: ReactMouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }

  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,background-color,color] duration-300 ease-out will-change-transform";

  const variants = {
    solid: "bg-accent text-warm-light hover:bg-accent-highlight",
    ghost:
      "border border-border text-foreground hover:border-accent hover:text-accent",
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </Link>
  );
}