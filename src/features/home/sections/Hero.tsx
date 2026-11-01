"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="container-main section">
      <motion.p
        className="text-label mb-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {site.shortTitle}
      </motion.p>

      <motion.h1
        className="text-display max-w-4xl text-foreground"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        {site.name}
      </motion.h1>

      <motion.p
        className="text-body-lg text-muted mt-6 max-w-xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.12 }}
      >
        {site.description}
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Link href="/work" className="btn btn-primary">
          View selected work
          <ArrowRight size={16} />
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Get in touch
        </Link>
      </motion.div>
    </section>
  );
}
