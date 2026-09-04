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
        <div className="header-row header-brand-cell flex items-center justify-center md:justify-start">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 px-4 sm:gap-3 sm:px-6"
          >
            <svg
              viewBox="0 0 24 24"
              className="header-logo-mark"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              aria-hidden="true"
            >
              <path d="M12 2 21 7v10l-9 5-9-5V7z" />
              <path d="M12 2v20M3 7l9 5 9-5" />
            </svg>

            <span className="header-logo-name uppercase">Chinmaya Kumar</span>
          </Link>
        </div>

        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="header-row hidden grid-cols-5 md:grid"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`header-cell ${item.label === "Contact us" ? "header-cell-contact" : ""}`}
            >
              {item.label}

              {item.label === "Contact us" && (
                <FiArrowUpRight
                  aria-hidden="true"
                  className="header-arrow"
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
