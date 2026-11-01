"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/content/site";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8 lg:px-12 lg:pb-16">
      <motion.div
        className="rounded-[1.5rem] bg-[#0a0a0a] px-6 py-12 text-white sm:rounded-[1.75rem] sm:px-10 sm:py-16 lg:px-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[16px] leading-relaxed text-white/60 sm:text-[17px]">
          We help you grow your online or offline business with our
          cost-effective solutions.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-5 block text-[clamp(1.35rem,4vw,1.75rem)] font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          {site.email}
        </a>
        <p className="mt-1.5 text-[14px] text-white/40">{site.location}</p>

        <Link
          href="/contact"
          className="mt-10 inline-flex h-11 items-center rounded-full bg-white px-6 text-[13px] font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
        >
          Get in touch →
        </Link>
      </motion.div>
    </section>
  );
}
