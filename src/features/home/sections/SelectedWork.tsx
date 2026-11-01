"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";

const covers = [
  "from-[#3d1a0f] via-[#2a120b] to-[#140805]",
  "from-[#1a1a2e] via-[#12121f] to-[#08080f]",
  "from-[#1a2420] via-[#111a17] to-[#080d0b]",
];

export function SelectedWork() {
  return (
    <section
      id="work"
      className="w-full px-[var(--page-x)] py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[13px] text-[#9a9a9a]">/ Selected work</p>
          <h2 className="mt-2 font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-[#0a0a0a]">
            Recent projects.
          </h2>
          <p className="mt-2 max-w-md text-[15px] text-[#6b6b6b]">
            A few things I&apos;ve designed and built recently — interfaces,
            products and marketing sites.
          </p>
        </div>
        <Link
          href="/work"
          className="inline-flex h-10 items-center rounded-full border border-[#e5e5e5] px-5 text-[13px] font-medium text-[#0a0a0a] transition-colors hover:bg-[#f5f5f5]"
        >
          <FlipText>View all work +</FlipText>
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{
              delay: i * 0.08,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link href={`/work/${p.slug}`} className="group block">
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-gradient-to-br ${covers[i % covers.length]}`}
              >
                <span className="absolute left-4 top-4 text-[12px] text-white/50">
                  {p.year}
                </span>
                <span className="absolute right-4 top-4 inline-flex size-9 translate-y-1 items-center justify-center rounded-full bg-white text-[#0a0a0a] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>
                <span className="absolute bottom-3 left-4 font-heading text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-none tracking-[-0.05em] text-white/90 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                  0{i + 1}
                </span>
                <div className="absolute bottom-4 right-4 flex max-w-[55%] flex-wrap justify-end gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-3 text-[12px] text-[#9a9a9a]">
                {p.role} · {p.year}
              </p>
              <h3 className="mt-1 font-heading text-[18px] font-semibold tracking-tight text-[#0a0a0a]">
                {p.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-[#6b6b6b]">
                {p.summary}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
