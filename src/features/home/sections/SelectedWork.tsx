"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function SelectedWork() {
  return (
    <section className="container-main section">
      <div className="mb-10 flex flex-col gap-3 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-label">Selected work</p>
          <h2 className="text-heading-2 mt-2 text-foreground">
            Projects that ship
          </h2>
        </div>
        <Link
          href="/work"
          className="text-body-sm text-muted transition-colors hover:text-foreground"
        >
          View all →
        </Link>
      </div>

      <div className="grid gap-4">
        {site.projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 sm:flex-row sm:items-center sm:justify-between sm:p-8"
            >
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="text-heading-3 text-foreground">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-border px-2 py-0.5 text-caption">
                    {project.year}
                  </span>
                </div>
                <p className="text-body-sm text-muted">{project.role}</p>
                <p className="text-body-sm text-muted mt-3 max-w-2xl">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-2.5 py-1 text-caption"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight
                size={22}
                className="shrink-0 text-foreground opacity-0 transition-opacity group-hover:opacity-100"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
