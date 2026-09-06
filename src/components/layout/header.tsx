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
    className="flex min-w-0 items-center px-4 sm:px-6"
  >
    <svg
      viewBox="0 0 24 24"
      className="size-[1.55rem] shrink-0 max-md:size-[1.3rem] max-[380px]:size-[1.1rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M20 4H10a6 6 0 0 0-6 6v4a6 6 0 0 0 6 6h10" />
      <path d="M4 10V4M4 20v-6" />
    </svg>

    <span className="-ml-[1px] whitespace-nowrap font-display text-[clamp(0.9rem,1.9vw,1.45rem)] font-bold uppercase leading-none tracking-[-0.08em] max-md:text-[clamp(0.9rem,4.7vw,1.18rem)] max-[380px]:text-[0.84rem]">
      HINMAYA
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
              className={`relative flex h-[var(--header-height)] items-start justify-start border-l border-border px-3 pt-[0.95rem] font-label text-[0.750rem] font-medium uppercase leading-none tracking-[0.08em] transition-colors duration-200 after:absolute after:bottom-[0.35rem] after:right-[0.35rem] after:size-[0.3rem] after:border-b after:border-r after:border-current after:opacity-55 ${
                item.label === "Contact us"
                  ? "text-brand hover:bg-brand hover:text-background focus-visible:bg-brand focus-visible:text-background after:hidden"
                  : "hover:bg-muted focus-visible:bg-muted"
              }`}
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
