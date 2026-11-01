"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between rounded-b-2xl bg-white px-5 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] sm:h-16 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="shrink-0 font-heading text-[18px] font-semibold tracking-tight text-[#0a0a0a] sm:text-[20px]"
          >
            Qubesys
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {site.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 text-[13px] font-medium transition-colors",
                    active
                      ? "text-[#0a0a0a]"
                      : "text-[#6b6b6b] hover:text-[#0a0a0a]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden h-9 items-center rounded-full bg-[#0a0a0a] px-5 text-[13px] font-medium text-white transition-opacity hover:opacity-90 md:inline-flex"
            >
              Request a Quote
            </Link>
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-full bg-[#f0f0f2] text-[#0a0a0a] transition-transform active:scale-95 md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Plus size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/30 p-3 pt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="w-full max-w-md overflow-hidden rounded-[1.35rem] bg-white shadow-2xl"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4">
                <span className="font-heading text-[16px] font-semibold text-[#0a0a0a]">
                  Qubesys
                </span>
                <button
                  type="button"
                  className="inline-flex size-8 items-center justify-center rounded-full bg-[#f0f0f2] text-[#0a0a0a]"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>
              <nav className="px-5">
                {site.nav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-t border-black/[0.06] py-[14px] text-[17px] font-medium text-[#0a0a0a]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-black/[0.06] px-5 py-6 text-center">
                <a
                  href={`mailto:${site.email}`}
                  className="text-[15px] font-medium text-[#0a0a0a]"
                >
                  {site.email}
                </a>
                <p className="mt-1 text-[13px] text-[#6b6b6b]">Based in Dubai.</p>
                <div className="mt-3 flex justify-center gap-4">
                  {Object.entries(site.social).map(([key, href]) => (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] capitalize text-[#6b6b6b] hover:text-[#0a0a0a]"
                    >
                      {key === "x" ? "Twitter/X" : key}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
