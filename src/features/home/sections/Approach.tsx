"use client";

import { motion } from "motion/react";
import { site } from "@/content/site";

export function Approach() {
  return (
    <section
      id="approach"
      className="w-full px-[var(--page-x)] py-16 sm:py-20 lg:py-24"
    >
      <p className="text-[13px] text-[#9a9a9a]">/ Approach</p>
      <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <h2 className="max-w-2xl font-heading text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a]">
          A simple, clear process from first call to launch.
        </h2>
        <p className="max-w-xs text-[14px] leading-relaxed text-[#6b6b6b] sm:text-[15px] lg:pb-1 lg:text-right">
          No surprises — you always know what&apos;s happening and what&apos;s next.
        </p>
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {site.approach.map((step, i) => (
          <motion.div
            key={step.title}
            className="border-t border-[#e5e5e5] pt-5"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              delay: i * 0.08,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-[13px] text-[#9a9a9a]">{step.index}</span>
            <h3 className="mt-6 font-heading text-[clamp(1.5rem,2.4vw,2rem)] font-semibold tracking-[-0.03em] text-[#0a0a0a] sm:mt-10">
              {step.title}
            </h3>
            <p className="mt-2 max-w-[260px] text-[14px] leading-relaxed text-[#6b6b6b]">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
