"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const META = [
  { label: "Role", value: "Creative Frontend Developer" },
  { label: "Stack", value: "React · Next.js · TypeScript · Tailwind" },
  { label: "Status", value: "Available — 2026" },
];

const HEADLINE_LINES = ["Clean code.", "Bolder design."];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="pt-[76px]">
      <div className="container-portfolio flex min-h-[92vh] flex-col justify-center py-16 md:py-20">
        {/* Meta strip */}
        <div
          className={cn(
            "flex flex-wrap items-baseline gap-x-10 gap-y-2 border-t border-border pt-5 font-mono text-[11px] text-muted-foreground transition-all duration-700 ease-out",
            mounted ? "opacity-100" : "opacity-0"
          )}
        >
          {META.map((item) => (
            <span key={item.label}>
              <span className="text-muted-foreground/70">{item.label} — </span>
              <span className="text-foreground/80">{item.value}</span>
            </span>
          ))}
        </div>

        {/* Headline + caption */}
        <div className="mt-10 md:mt-14 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-medium leading-[0.85] tracking-[-0.045em]">
              {HEADLINE_LINES.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <span
                    className={cn(
                      "block transition-transform duration-[850ms] ease-out",
                      mounted ? "translate-y-0" : "translate-y-[105%]"
                    )}
                    style={{ transitionDelay: `${i * 90}ms` }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              className={cn(
                "mt-5 text-sm font-medium text-accent transition-all duration-700 ease-out md:text-base",
                mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              )}
              style={{ transitionDelay: "380ms" }}
            >
              Frontend development, done with intent.
            </p>
          </div>
        </div>

        {/* Body copy + CTA block */}
        <div className="mt-12 grid gap-10 border-t border-border pt-10 md:mt-16 md:grid-cols-12 md:items-stretch md:pt-12">
          <div
            className={cn(
              "flex flex-col justify-between gap-8 md:col-span-4 transition-all duration-700 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}
            style={{ transitionDelay: "480ms" }}
          >
            <p className="max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
              I turn interfaces into fast, considered experiences — from
              first sketch to shipped code.
            </p>

            <Link
              href="/work"
              className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground"
            >
              View selected work
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div
            className={cn(
              "md:col-span-4 transition-all duration-700 ease-out",
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}
            style={{ transitionDelay: "560ms" }}
          >
            <p className="max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
              Available for select freelance projects with ambitious
              brands and product teams.
            </p>
          </div>

          {/* Accent CTA block — the graphic anchor, standing in for a photo */}
          <div
            className={cn(
              "md:col-span-4 transition-all duration-[900ms] ease-out",
              mounted
                ? "scale-100 opacity-100"
                : "scale-[0.97] opacity-0"
            )}
            style={{ transitionDelay: "260ms", transformOrigin: "bottom right" }}
          >
            <Link
              href="/contact"
              className="group flex h-full min-h-[160px] flex-col justify-between rounded-[20px] bg-accent px-7 py-6 transition-colors duration-300 hover:bg-accent-highlight"
            >
              <span className="text-lg font-medium leading-snug text-accent-foreground">
                Let&apos;s work
                <br />
                together.
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-foreground">
                Start a project
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}