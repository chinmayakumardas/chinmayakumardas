"use client";

import { motion } from "motion/react";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-10 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <motion.h1
          className="font-heading text-[clamp(3rem,12vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.045em] text-[#0a0a0a]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Qubesys
        </motion.h1>

        <motion.p
          className="max-w-[300px] text-[15px] leading-relaxed text-[#6b6b6b] sm:text-[16px] lg:pb-4 lg:text-right"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          We develop the websites, apps, and systems for your business. Digital
          and social, under one roof.
        </motion.p>
      </div>

      <motion.div
        className="mt-10 flex flex-col gap-4 border-t border-[#eee] pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.18 }}
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#9a9a9a]">
          <span className="font-medium text-[#6b6b6b]">Creative</span>
          <span>Pixel</span>
          <span>Mills Web Design</span>
          <span>Nymble</span>
        </div>
        <div className="flex items-center gap-2 text-[13px] text-[#6b6b6b]">
          <span className="tracking-tight text-[#f5a623]">★★★★★</span>
          <span className="font-medium text-[#0a0a0a]">4.9/5</span>
          <span className="text-[#9a9a9a]">· Serving customers since 18 years</span>
        </div>
      </motion.div>

      <motion.div
        className="mt-8 overflow-hidden rounded-[1.25rem] bg-[#f0f0f2] sm:mt-10 sm:rounded-[1.5rem]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]">
            <span className="text-[13px] font-medium tracking-wide text-white/40">
              Hero visual — desk workspace
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
