"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/content/site";

export function Capabilities() {
  return (
    <section id="services" className="scroll-mt-14 w-full px-[var(--page-x)] py-5">
      <motion.div
        className="rounded-[1.35rem] bg-[#0a0a0a] px-6 py-10 text-white sm:rounded-[1.6rem] sm:px-10 sm:py-12 lg:px-12 lg:py-14"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[13px] text-white/40">/ Services</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10">
          <ul className="space-y-1.5">
            {site.services.map((item) => (
              <li
                key={item.title}
                className="group flex items-center justify-between gap-4"
              >
                <span className="flex items-center gap-3 font-heading text-[clamp(1.55rem,4vw,2.6rem)] font-semibold tracking-[-0.02em] text-white transition-opacity group-hover:opacity-75">
                  {item.title === "CRM & ERPs" && (
                    <span
                      className="inline-block size-7 shrink-0 rounded-md sm:size-8"
                      style={{
                        background:
                          "linear-gradient(135deg, #ff6b35, #f7c948, #4ecdc4, #5b7cfa)",
                      }}
                      aria-hidden
                    />
                  )}
                  {item.title === "Websites & Apps" && (
                    <span
                      className="inline-block size-6 shrink-0 rounded-sm bg-white/90 sm:size-7"
                      aria-hidden
                    />
                  )}
                  {item.title}
                </span>
                <span className="shrink-0 text-[1.5rem] font-light text-white/30 sm:hidden">
                  +
                </span>
              </li>
            ))}
          </ul>

          <ol className="hidden flex-col items-end gap-1.5 text-[1.85rem] font-light leading-none text-white/25 sm:flex lg:text-[2.25rem]">
            {site.services.map((item) => (
              <li key={item.index} className="py-1">
                {item.index}
              </li>
            ))}
          </ol>
        </div>

        <Link
          href="/about"
          className="mt-9 inline-flex h-11 items-center rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
        >
          all of our services +
        </Link>
      </motion.div>
    </section>
  );
}
