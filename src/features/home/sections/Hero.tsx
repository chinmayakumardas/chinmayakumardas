"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="w-full px-[var(--page-x)] pt-6 sm:pt-10 lg:pt-12">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <h1 className="font-heading text-[clamp(3.25rem,11.5vw,9.5rem)] font-bold leading-[0.86] tracking-[-0.045em] text-[#0a0a0a]">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease }}
            >
              Chinmaya
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
            >
              Kumar
            </motion.span>
          </span>
          <span className="sr-only"> — {site.role}</span>
        </h1>

        <motion.p
          className="max-w-[300px] text-[14px] leading-relaxed text-[#6b6b6b] sm:text-[15px] lg:max-w-[280px] lg:pb-3 lg:text-right"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
        >
          Creative front-end developer crafting landing pages, UI/UX and custom
          software that look sharp and work beautifully.
        </motion.p>
      </div>

      <motion.div
        className="mt-7 flex flex-col gap-4 border-t border-[#eee] pt-5 sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium tracking-wide text-[#9a9a9a] sm:text-[12px]">
          {site.offers.map((o) => (
            <span key={o}>{o}</span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[13px] text-[#6b6b6b]">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#8cc63f] opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-[#8cc63f]" />
          </span>
          <span className="font-medium text-[#0a0a0a]">{site.availability}</span>
          <span className="text-[#9a9a9a]">· {site.location}</span>
        </div>
      </motion.div>

      <motion.div
        className="relative mt-6 overflow-hidden rounded-[1.15rem] sm:mt-8 sm:rounded-[1.4rem]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease }}
      >
        <div className="relative aspect-[16/11] w-full sm:aspect-[21/10]">
          <Image
            src="/images/hero-workspace.jpg"
            alt="Designer's desk with laptop, notebook and camera"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
