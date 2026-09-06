import Link from "next/link";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui";

const MOBILE_NAV = [
  { label: "Selected work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About me", href: "/about" },
  { label: "Start a project", href: "/contact" },
];

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  panel?: boolean;
}

export function MobileMenu({
  open,
  onOpenChange,
  panel = false,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!panel) return;

    const panelElement = panelRef.current;
    if (!panelElement) return;

    const context = gsap.context(() => {
      gsap.to(panelElement, {
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
        duration: 0.5,
        ease: "power3.out",
        overwrite: true,
      });

      if (open) {
        gsap.fromTo(
          ".mobile-menu-item",
          { y: -10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.045,
            delay: 0.08,
            ease: "power2.out",
            overwrite: true,
          },
        );
      }
    }, panelElement);

    return () => context.revert();
  }, [open, panel]);

  if (!panel) {
    return (
      <Button
        type="button"
        variant="ghost"
        size="default"
        onClick={() => onOpenChange(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="h-[var(--header-height)] w-24 rounded-none border-l border-border px-4 font-label text-[0.625rem] uppercase leading-none tracking-[0.14em]"
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={open ? "close" : "menu"}
            initial={{ opacity: 0, rotate: open ? -45 : 45, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: open ? 45 : -45, scale: 0.8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex"
          >
            {open ? <FiX size={15} /> : <FiMenu size={15} />}
          </motion.span>
        </AnimatePresence>
        {open ? "Close" : "Menu"}
      </Button>
    );
  }

  return (
    <nav
      id="mobile-nav"
      ref={panelRef}
      aria-hidden={!open}
      className="absolute inset-x-0 top-full z-[60] col-span-full h-0 max-h-[calc(100svh-var(--header-height)-2rem)] overflow-hidden overflow-y-auto border-t border-border bg-background opacity-0 md:hidden"
    >
      <div className="border-b border-border px-4 py-4 font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] text-muted-foreground">
        Navigation
      </div>
      {MOBILE_NAV.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => onOpenChange(false)}
          className={`group flex min-h-14 items-center justify-between border-b border-border px-4 font-label text-[0.625rem] uppercase leading-none tracking-[0.14em] ${
            index === MOBILE_NAV.length - 1
              ? "bg-brand text-brand-foreground hover:bg-brand hover:text-foreground focus-visible:bg-brand focus-visible:text-foreground"
              : "hover:bg-muted"
          }`}
        >
          {item.label}
          <FiArrowUpRight
            aria-hidden="true"
            className="transition-transform duration-180 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
            size={16}
          />
        </Link>
      ))}
    </nav>
  );
}
