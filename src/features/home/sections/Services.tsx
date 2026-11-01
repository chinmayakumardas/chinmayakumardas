"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";

export function Services() {
  return (
    <section id="services" className="w-full px-[var(--page-x)] py-5">
      <motion.div
        className="rounded-[1.35rem] bg-[#0a0a0a] px-6 py-10 text-white sm:rounded-[1.6rem] sm:px-10 sm:py-12 lg:px-12 lg:py-14"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[13px] text-white/40">/ Services</p>
        <h2 className="mt-3 max-w-xl font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
          What I can build for you.
        </h2>

        <ul className="mt-8 sm:mt-10">
          {site.services.map((s) => (
            <li
              key={s.title}
              className="group grid gap-2 border-t border-white/10 py-6 sm:grid-cols-[3.5rem_1.4fr_1fr] sm:items-baseline sm:gap-6 sm:py-8"
            >
              <span className="text-[13px] text-white/30">{s.index}</span>
              <h3 className="font-heading text-[clamp(1.55rem,3.6vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                {s.title}
              </h3>
              <p className="max-w-sm text-[14px] leading-relaxed text-white/55 sm:justify-self-end sm:text-[15px]">
                {s.text}
              </p>
            </li>
          ))}
          <li className="border-t border-white/10" aria-hidden />
        </ul>

        <Link
          href="/#contact"
          className="mt-8 inline-flex h-11 items-center rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
        >
          <FlipText>Start a project +</FlipText>
        </Link>
      </motion.div>
    </section>
  );
}
