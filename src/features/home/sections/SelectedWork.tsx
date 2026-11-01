"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/content/site";

export function SelectedWork() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[13px] text-[#9a9a9a]">/ Blog</p>
          <h2 className="mt-2 font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] text-[#0a0a0a]">
            Latest updates from us.
          </h2>
          <p className="mt-2 max-w-md text-[15px] text-[#6b6b6b]">
            Strategies, lessons, and behind-the-scenes from the world of content
            and digital growth.
          </p>
        </div>
        <Link
          href="/work"
          className="inline-flex h-10 items-center rounded-full border border-[#e5e5e5] px-5 text-[13px] font-medium text-[#0a0a0a] transition-colors hover:bg-[#f5f5f5]"
        >
          View all blogs +
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.blogs.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{
              delay: i * 0.07,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link href={`/projects/${post.slug}`} className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-[1rem] bg-[#f0f0f2] transition-transform duration-300 group-hover:scale-[1.015]" />
              <p className="mt-3 text-[12px] text-[#9a9a9a]">{post.date}</p>
              <h3 className="mt-1 font-heading text-[17px] font-semibold tracking-tight text-[#0a0a0a]">
                {post.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-[#6b6b6b]">
                {post.excerpt}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
