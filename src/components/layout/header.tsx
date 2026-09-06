"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { MobileMenu } from "./mobileMenu";

const NAV = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-border bg-background">
      <div className="grid w-full grid-cols-[1fr_auto] md:grid-cols-2">
        <div className="flex h-[var(--header-height)] items-center justify-start">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 px-4 sm:gap-3 sm:px-6"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-[2.65rem] shrink-0 max-md:size-9 max-[380px]:size-[1.9rem]"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              aria-hidden="true"
            >
              <path d="M12 2 21 7v10l-9 5-9-5V7z" />
              <path d="M12 2v20M3 7l9 5 9-5" />
            </svg>

            <span className="min-w-0 whitespace-nowrap font-display text-[clamp(0.82rem,1.7vw,1.35rem)] font-bold uppercase leading-none tracking-[-0.055em] max-md:text-[clamp(0.82rem,4.4vw,1.1rem)] max-[380px]:text-[0.78rem]">
              Chinmaya 
            </span>
          </Link>
        </div>

        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="hidden h-[var(--header-height)] grid-cols-5 md:grid"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex h-[var(--header-height)] items-start justify-start border-l border-border px-3 pt-[0.95rem] font-label text-[0.625rem] font-medium uppercase leading-none tracking-[0.08em] transition-colors duration-180 after:absolute after:bottom-[0.35rem] after:right-[0.35rem] after:size-[0.3rem] after:border-b after:border-r after:border-current after:opacity-55 hover:bg-muted focus-visible:bg-muted ${item.label === "Contact us" ? "text-brand hover:bg-brand hover:text-foreground focus-visible:bg-brand focus-visible:text-foreground after:hidden" : ""}`}
            >
              {item.label}

              {item.label === "Contact us" && (
                <FiArrowUpRight
                  aria-hidden="true"
                  className="absolute right-[0.35rem] bottom-2 leading-none text-current"
                  size={16}
                  strokeWidth={1.4}
                />
              )}
            </Link>
          ))}
        </motion.nav>

        <div className="flex justify-end md:hidden">
          <MobileMenu open={open} onOpenChange={setOpen} />
        </div>
      </div>

      <MobileMenu open={open} onOpenChange={setOpen} panel />
    </header>
  );
}
