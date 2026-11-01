"use client";

import { motion } from "motion/react";
import { site } from "@/content/site";

export function AboutPreview() {
  return (
    <section className="w-full px-[var(--page-x)] py-14 sm:py-18 lg:py-20">
      <p className="text-[13px] text-[#9a9a9a]">/ About us</p>

      <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <motion.h2
          className="max-w-2xl font-heading text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Development, branding, content, consulting. One team, no juggling.
        </motion.h2>

        <motion.p
          className="max-w-xs text-[14px] leading-relaxed text-[#6b6b6b] sm:text-[15px] lg:pb-1 lg:text-right"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          Websites, content, social strategy, and the systems to keep it all
          running.
        </motion.p>
      </div>

      <motion.div
        className="mt-9 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-[#eee] pt-5 text-[13px] text-[#6b6b6b] sm:mt-11 sm:gap-x-9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {site.stats.map((s) => (
          <p key={s.label}>
            <span className="font-semibold text-[#0a0a0a]">{s.value}</span>
            <span className="text-[#9a9a9a]"> / {s.label}</span>
          </p>
        ))}
      </motion.div>
    </section>
  );
}
