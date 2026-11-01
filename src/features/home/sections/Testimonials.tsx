"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/content/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const items = site.testimonials;
  const current = items[index];

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8 lg:px-12">
      <motion.div
        className="rounded-[1.5rem] bg-[#0a0a0a] px-6 py-10 text-white sm:rounded-[1.75rem] sm:px-10 sm:py-14 lg:px-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[13px] text-white/40">/ Testimonials</p>
            <h2 className="mt-3 max-w-md font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
              Success stories from our clients.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Desktop: show all three */}
        <div className="mt-10 hidden gap-4 lg:grid lg:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-[#f5a623] tracking-tight">★★★★★</div>
              <p className="mt-4 text-[15px] leading-relaxed text-white/85">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-[14px] font-medium text-white">{t.name}</p>
                <p className="mt-0.5 text-[13px] text-white/40">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / tablet: carousel */}
        <div className="mt-8 lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-[#f5a623] tracking-tight">★★★★★</div>
              <p className="mt-4 text-[15px] leading-relaxed text-white/85">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-[14px] font-medium text-white">
                  {current.name}
                </p>
                <p className="mt-0.5 text-[13px] text-white/40">
                  {current.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center lg:justify-start">
          <button
            type="button"
            className="inline-flex h-11 items-center rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
          >
            View all testimonials →
          </button>
        </div>
      </motion.div>
    </section>
  );
}
