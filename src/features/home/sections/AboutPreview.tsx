"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { site } from "@/content/site";

export function AboutPreview() {
  return (
    <section className="container-main section">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-label">About</p>
          <h2 className="text-heading-2 mt-2 text-foreground">
            Building experiences that feel inevitable
          </h2>
        </motion.div>

        <motion.div
          className="space-y-5 md:col-span-7"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <p className="text-body text-muted">
            I&apos;m {site.name} — a front-end developer and digital experience
            designer with nearly two years of experience. I care about clarity,
            performance, and the details that make products feel considered.
          </p>
          <p className="text-body text-muted">
            My work sits at the intersection of design systems and modern React /
            Next.js engineering. I ship interfaces that are accessible,
            maintainable, and aligned with business goals.
          </p>
          <Link
            href="/about"
            className="text-body-sm text-deep inline-flex transition-opacity hover:opacity-70"
          >
            More about me →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
