"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/content/site";

export function Capabilities() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8 lg:px-12">
      <motion.div
        className="rounded-[1.5rem] bg-[#0a0a0a] px-6 py-10 text-white sm:rounded-[1.75rem] sm:px-10 sm:py-14 lg:px-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[13px] text-white/40">/ Services</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
          <ul className="space-y-2">
            {site.services.map((item) => (
              <li
                key={item.title}
                className="group flex items-center justify-between"
              >
                <span className="font-heading text-[clamp(1.6rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-white transition-opacity group-hover:opacity-80">
                  {item.title}
                </span>
                <span className="text-[1.75rem] font-light text-white/25 sm:hidden">
                  +
                </span>
              </li>
            ))}
          </ul>

          <ol className="hidden flex-col items-end gap-2 text-[2rem] font-light text-white/25 sm:flex lg:text-[2.5rem]">
            {site.services.map((item) => (
              <li key={item.index}>{item.index}</li>
            ))}
          </ol>
        </div>

        <Link
          href="/about"
          className="mt-10 inline-flex h-11 items-center rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
        >
          all of our services +
        </Link>
      </motion.div>
    </section>
  );
}
