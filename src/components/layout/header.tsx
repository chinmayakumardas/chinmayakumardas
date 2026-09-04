"use client";

import { useState } from "react";
import Link from "next/link";
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
        <div className="header-row flex items-center">
          <Link href="/" className="flex items-center gap-3 px-6">
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

            <span className="header-logo-name hidden sm:inline uppercase">
              Chinmaya Kumar
            </span>
          </Link>
        </div>

        <nav className="header-row hidden grid-cols-5 md:grid">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`header-cell ${item.label === "Contact us" ? "text-brand" : ""}`}
            >
              {item.label}

              {item.label === "Contact us" && (
                <span aria-hidden="true" className="header-arrow">
                  →
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex justify-end md:hidden">
          <MobileMenu open={open} onOpenChange={setOpen} />
        </div>
      </div>

      {open && <MobileMenu open={open} onOpenChange={setOpen} panel />}
    </header>
  );
}
