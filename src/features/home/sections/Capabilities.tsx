"use client";

import { motion } from "motion/react";
import { site } from "@/content/site";

export function Capabilities() {
  return (
    <section className="surface-dark">
      <div className="container-main section">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-label text-white/50">Capabilities</p>
          <h2 className="text-heading-2 mt-2 max-w-xl text-white">
            Design thinking meets front-end craft
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
            >
              <h3 className="text-heading-3 text-white">{item.title}</h3>
              <p className="text-body-sm mt-2 text-white/65">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
