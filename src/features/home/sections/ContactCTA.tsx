"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

export function ContactCTA() {
  return (
    <section className="container-main section">
      <motion.div
        className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-dark-surface px-8 py-12 text-dark-surface-foreground sm:flex-row sm:items-center sm:px-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <h2 className="text-heading-2 text-white">
            Looking for a frontend partner?
          </h2>
          <p className="text-body-sm mt-2 max-w-md text-white/70">
            {site.availability}. Tell me about the role, product, or idea.
          </p>
        </div>
        <Link href="/contact" className="btn btn-primary shrink-0">
          Start a conversation
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
