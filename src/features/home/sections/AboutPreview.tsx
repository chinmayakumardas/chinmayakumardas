"use client";

import { motion } from "motion/react";
import { site } from "@/content/site";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <p className="text-[13px] text-[#9a9a9a]">/ About us</p>

      <motion.h2
        className="mt-3 max-w-3xl font-heading text-[clamp(1.85rem,4.8vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Development, branding, content, consulting. One team, no juggling.
      </motion.h2>

      <motion.p
        className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6b6b6b] sm:text-[16px]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        Websites, content, social strategy, and the systems to keep it all
        running.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#eee] pt-6 text-[13px] text-[#6b6b6b] sm:mt-12 sm:gap-x-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.12 }}
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
