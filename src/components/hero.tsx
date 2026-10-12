"use client";

import Link from "next/link";
import { ArrowUpRight, Code2, Layers, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";

const skills = [
  { icon: Code2, label: "Frontend" },
  { icon: Layers, label: "UI Systems" },
  { icon: Zap, label: "Motion" },
];

export function Hero() {
  return (
    <section className="section-dark glow-hero grain relative min-h-[720px] md:min-h-[820px]">
      {/* Soft bottom fade */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-glow-deep/50 via-transparent to-transparent"
        aria-hidden
      />

      <SiteHeader />

      <div className="container-site relative z-10 flex min-h-[720px] flex-col justify-between pb-10 pt-28 md:min-h-[820px] md:pb-14 md:pt-36">
        {/* Top: copy */}
        <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="glass rounded-md border-foreground/30 px-3 py-1.5 font-mono text-[11px] font-normal uppercase tracking-wider text-foreground"
          >
            <Sparkles className="size-3.5" />
            Creative Frontend Developer
          </Badge>

          <h1 className="heading-display mt-6 text-foreground">
            Building interfaces
            <br className="hidden sm:block" />
            that feel alive
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/85 md:mt-6">
            I craft polished, performant web experiences with thoughtful design
            systems, clean code, and subtle motion — for products people
            actually enjoy using.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="h-12 gap-3 rounded-full pl-5 pr-1.5 hover:shadow-glow"
            >
              <Link href="/#work">
                View Selected Work
                <span className="grid size-9 place-items-center rounded-full bg-primary-foreground text-primary">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="glass h-12 gap-3 rounded-full border-foreground/30 bg-transparent pl-5 pr-1.5 text-foreground hover:bg-foreground/10 hover:text-foreground"
            >
              <Link href="/#contact">
                Get in Touch
                <span className="grid size-9 place-items-center rounded-full bg-foreground text-background">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom: skill chips */}
        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <ul className="flex flex-wrap gap-2.5">
            {skills.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              >
                <Icon className="size-3.5 text-glow-amber" aria-hidden />
                {label}
              </li>
            ))}
          </ul>

          <p className="max-w-xs text-xs leading-relaxed text-foreground/60 sm:text-right">
            Available for select freelance projects &amp; collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}