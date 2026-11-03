"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site, type Project } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";
import { SplitReveal } from "@/components/gsap/SplitReveal";
import { SectionLabel } from "@/components/layout/Section";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";

/** Screen colours inside the device frame — add `image: "/images/work/x.png"` to a project to replace. */
const screens = [
  "from-[#3d1a0f] via-[#2a120b] to-[#140805]",
  "from-[#1a1a2e] via-[#12121f] to-[#08080f]",
  "from-[#1a2420] via-[#111a17] to-[#080d0b]",
];

type ProjectWithImage = Project & { image?: string };

/**
 * One project card (follows the reference):
 *   top     headline ←→ kicker
 *   middle  device mockup over a faded tag ticker, index + role beside it
 *   bottom  solution ←→ project name
 * Each fact appears once.
 */
function ProjectCard({ project, index: i, total }: { project: ProjectWithImage; index: number; total: number }) {
  return (
    <article
      data-card
      className="group relative isolate flex min-h-[30rem] flex-col justify-between overflow-hidden rounded-[var(--radius-header)] bg-gradient-to-br from-[#f3f3f3] via-[#e6e6e8] to-[#dadadd] p-5 shadow-[0_-12px_30px_-20px_rgb(0_0_0/0.25)] sm:p-7 sticky top-[3.25rem] h-[calc(100svh-4.25rem)] max-h-[52rem] lg:p-8"
    >
      <Link
        href={`/work/${project.slug}`}
        aria-label={`${project.title} — view case study`}
        className="absolute inset-0 z-20 rounded-[var(--radius-header)]"
      />

      {/* static dashed centre guide */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 hidden border-l border-dashed border-black/10 md:block"
      />

      {/* faded ticker of tags behind the device (marquee place #1) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 overflow-hidden"
      >
        <div className="marquee flex w-max">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 gap-6 pr-6 text-[clamp(1.25rem,2.2vw,1.875rem)] font-medium leading-none tracking-[-0.05em] text-black/25"
            >
              {Array.from({ length: 4 }, () => project.tags).flat().map((t, n) => (
                <span key={`${t}-${n}`} className="whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* top */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="type-title max-w-[11ch] text-[#0a0a0a]">
          <SplitReveal text={project.headline} />
        </h3>
        <p className="type-title text-right text-[#0a0a0a]">
          <SplitReveal text={project.kicker} delay={0.12} />
        </p>
      </div>

      {/* middle */}
      <div
        data-device
        className="relative z-10 mx-auto my-8 w-[min(100%,34rem)] md:my-4 md:w-[min(54%,34rem)] lg:w-[min(44%,36rem)] [@media(min-height:900px)]:lg:w-[min(46%,40rem)]"
      >
        <div className="relative aspect-[3/2] rounded-[1.25rem] bg-[#141414] p-[3.5%] shadow-[0_30px_60px_-30px_rgb(0_0_0/0.5)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]">
          <div
            className={`relative size-full overflow-hidden rounded-[0.6rem] bg-gradient-to-br ${screens[i % screens.length]}`}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            )}
          </div>
        </div>

        <p className="mt-3 text-[13px] leading-snug tracking-[-0.02em] text-[#0a0a0a] lg:absolute lg:left-[calc(100%+0.75rem)] lg:top-0 lg:mt-0 lg:w-36">
          0{i + 1}
          <span className="text-[#8a8a8a]"> / 0{total}</span>
          <br />
          {project.role}
          <br />
          <span className="text-[#8a8a8a]">{project.year}</span>
        </p>
      </div>

      {/* bottom */}
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-[22rem]">
          <p className="text-[13px] tracking-[-0.02em] text-[#6b6b6b]">Solution</p>
          <p className="mt-1 line-clamp-3 text-[14px] leading-snug tracking-[-0.02em] text-[#0a0a0a]">
            {project.summary}
          </p>
        </div>
        <div className="flex items-end gap-4">
          <p className="type-title max-w-[12ch] text-right text-[#0a0a0a]">
            <SplitReveal text={project.title} delay={0.1} />
          </p>
          <span
            data-arrow
            aria-hidden
            className="mb-1 hidden size-11 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-white md:flex"
          >
            <ArrowUpRight className="size-5" />
          </span>
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  const root = useRef<HTMLElement>(null);
  const total = site.projects.length;

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const cleanups: Array<() => void> = [];
    const on = <K extends keyof HTMLElementEventMap>(
      target: HTMLElement,
      type: K,
      fn: (e: HTMLElementEventMap[K]) => void,
    ) => {
      target.addEventListener(type, fn);
      cleanups.push(() => target.removeEventListener(type, fn));
    };

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-card]").forEach((card) => {
        const device = card.querySelector<HTMLElement>("[data-device]");
        const arrow = card.querySelector<HTMLElement>("[data-arrow]");

        /* device wipes up into place */
        if (device) {
          gsap.fromTo(
            device,
            { clipPath: "inset(100% 0% 0% 0% round 1.25rem)", y: 40 },
            {
              clipPath: "inset(0% 0% 0% 0% round 1.25rem)",
              y: 0,
              duration: 1.3,
              ease: "power4.out",
              scrollTrigger: { trigger: card, start: "top 75%", once: true },
            },
          );
        }

        /* arrow turns on hover */
        if (arrow) {
          on(card, "pointerenter", () => gsap.to(arrow, { rotate: 45, duration: 0.5, ease: "power3.out" }));
          on(card, "pointerleave", () => gsap.to(arrow, { rotate: 0, duration: 0.5, ease: "power3.out" }));
        }

        /* gentle mouse parallax on the device (desktop only) */
        if (device && window.matchMedia("(hover: hover) and (min-width: 1024px)").matches) {
          const xTo = gsap.quickTo(device, "x", { duration: 0.9, ease: "power3" });
          on(card, "pointermove", (e) => {
            const r = card.getBoundingClientRect();
            xTo(((e.clientX - r.left) / r.width - 0.5) * 36);
          });
          on(card, "pointerleave", () => xTo(0));
        }
      });
    }, el);

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      id="work"
      aria-labelledby="work-title"
      className="w-full px-[var(--page-x)] py-12 sm:py-16 lg:py-20"
    >
      <div className="mb-5 text-center">
        <SectionLabel id="work-title">Recent work</SectionLabel>
      </div>

      {/* sticky on every screen size: each card slides over the one before it */}
      <div className="flex flex-col gap-3 md:gap-6">
        {site.projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} total={total} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/work" className="cta cta-outline">
          <FlipText>More work +</FlipText>
        </Link>
      </div>
    </section>
  );
}
