"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="w-full px-[var(--page-x)] py-6 lg:pb-16"
    >
      <motion.div
        className="rounded-[1.5rem] bg-[#0a0a0a] px-6 py-12 text-white sm:rounded-[1.75rem] sm:px-10 sm:py-16 lg:px-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[13px] text-white/40">/ Contact</p>
        <h2 className="mt-3 max-w-3xl font-heading text-[clamp(2rem,5.5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
          Have a project in mind? Let&apos;s talk it through.
        </h2>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60 sm:text-[16px]">
          Landing pages, UI/UX or custom software — tell me what you&apos;re
          building and we&apos;ll find the best way to get it live.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href={site.letstalk.href}
            className="inline-flex h-11 items-center rounded-full bg-white px-6 text-[13px] font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
          >
            <FlipText>{site.letstalk.label} →</FlipText>
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-11 items-center rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
          >
            <FlipText>Send an email</FlipText>
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
          >
            <FlipText>WhatsApp</FlipText>
          </a>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-6 text-[14px] sm:grid-cols-3">
          <div>
            <p className="text-white/40">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block break-all text-white"
            >
              <FlipText>{site.email}</FlipText>
            </a>
          </div>
          <div>
            <p className="text-white/40">Phone</p>
            <a href={site.phoneHref} className="mt-1 block text-white">
              <FlipText>{site.phone}</FlipText>
            </a>
          </div>
          <div>
            <p className="text-white/40">Based in</p>
            <p className="mt-1 text-white">{site.location}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
