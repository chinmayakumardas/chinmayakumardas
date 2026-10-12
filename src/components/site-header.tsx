
"use client";

import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Chinmaya Kumar Das — Home"
      className={`flex items-center gap-3 ${className}`}
    >
      <span className="grid size-9 place-items-center rounded-full border border-border text-sm font-semibold tracking-tighter">
        CD
      </span>
      <span className="text-sm font-medium tracking-tight sm:text-base">
        Chinmaya Kumar Das
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container-site flex h-20 items-center justify-between">
        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav
                className="mt-10 flex flex-col gap-6 px-4 text-lg"
                aria-label="Mobile navigation"
              >
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Logo className="mr-auto md:mr-0" />

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-8 text-sm md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/75 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact CTA */}
        <Button
          variant="outline"
          className="ml-auto gap-2 rounded-full border-border bg-transparent sm:ml-0"
          asChild
        >
          <Link href="/contact">
            <span className="hidden sm:inline">Let&apos;s Talk</span>
            <span className="sm:hidden">Contact</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
