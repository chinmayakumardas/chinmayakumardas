"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FlipText } from "@/components/common/FlipText";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";

const headlineLines = ["Creative", "Frontend", "Developer"] as const;

/** Inline SVG flag — emoji flags don't render on Windows. */
function IndiaFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 16"
      aria-hidden
      className={cn("overflow-hidden rounded-[2px] ring-1 ring-black/10", className)}
    >
      <rect width="24" height="5.34" fill="#FF9933" />
      <rect y="5.33" width="24" height="5.34" fill="#FFFFFF" />
      <rect y="10.66" width="24" height="5.34" fill="#138808" />
      <circle cx="12" cy="8" r="2" fill="none" stroke="#000080" strokeWidth="0.6" />
      <circle cx="12" cy="8" r="0.5" fill="#000080" />
    </svg>
  );
}

const ctaBase =
  "h-11 shrink-0 gap-2 rounded-full px-5 text-[14px] font-medium tracking-[-0.01em] md:h-12 lg:px-6 lg:text-[15px] xl:h-14 xl:px-7 xl:text-[16px]";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-card]", { opacity: 0, y: 36, duration: 1 })
        .from("[data-eyebrow]", { opacity: 0, y: 14, duration: 0.8 }, 0.25)
        .from("[data-line]", { yPercent: 112, rotate: 2, duration: 1.2, stagger: 0.1 }, 0.3)
        .from("[data-photo]", { opacity: 0, y: 60, scale: 1.06, duration: 1.5 }, 0.3)
        .from("[data-fade]", { opacity: 0, y: 20, duration: 0.9, stagger: 0.09 }, 0.85)
        .from("[data-info]", { opacity: 0, y: 14, duration: 0.8 }, 1.2);

      /* the portrait drifts a little slower than the page */
      gsap.to("[data-photo]", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="flex w-full flex-col px-[var(--page-x)] pb-1 pt-1 lg:min-h-[calc(100svh-2.75rem)]"
      aria-label="Introduction"
    >
      <div
        data-card
        className="relative grid flex-1 grid-cols-1 overflow-hidden rounded-[var(--radius-header)] bg-[#ececef] md:grid-cols-2 lg:max-h-[70rem]"
      >
        {/* ---------------- CONTENT ---------------- */}
        <div className="flex flex-col gap-8 p-5 sm:p-7 md:justify-between md:gap-8 md:p-7 lg:p-8 xl:p-10">
          <div>
            <p
              data-eyebrow
              className="mb-3 text-[clamp(1rem,1.3vw,1.2rem)] font-medium tracking-[-0.04em] text-[#6b6b6b] md:mb-4"
            >
              Hi, I&apos;m <span className="text-[#0a0a0a]">{site.name}</span>
            </p>

            <h1 className="type-display text-[clamp(3rem,13vw,5rem)] text-[#0a0a0a] sm:text-[clamp(3.5rem,11vw,6rem)] md:text-[clamp(2.75rem,7.6vw,5.5rem)] lg:text-[clamp(3rem,min(6.6vw,11vh),7.5rem)]">
              {headlineLines.map((line) => (
                <span key={line} className="block overflow-hidden pb-[0.08em]">
                  <span data-line className="block">
                    {line}
                  </span>
                </span>
              ))}
              <span className="sr-only"> — {site.name}</span>
            </h1>
          </div>

          <div className="max-w-[32rem]">
            <p
              data-fade
              className="mb-5 text-[clamp(0.95rem,1.15vw,1.1rem)] leading-snug tracking-[-0.03em] text-[#3d3d3d] md:mb-6"
            >
              I design and build fast, conversion-focused websites that turn
              visitors into clients — made around your goals, not just a pretty
              screen.
            </p>

            <div data-fade className="flex flex-wrap items-center gap-2 sm:flex-nowrap md:gap-3">
              <a
                href="/work"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  ctaBase,
                  "bg-[#0a0a0a] text-white hover:bg-[#0a0a0a]",
                )}
              >
                <FlipText>View my work</FlipText>
                <ArrowDown />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message me on WhatsApp"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  ctaBase,
                  "border-[#0a0a0a] bg-transparent text-[#0a0a0a] hover:bg-transparent hover:text-[#0a0a0a]",
                )}
              >
                <WhatsAppIcon className="size-6 shrink-0 lg:size-7" />
                <FlipText>
                  <span className="xl:hidden">Message me</span>
                  <span className="hidden xl:inline">Message me on WhatsApp</span>
                </FlipText>
              </a>
            </div>
          </div>
        </div>

        {/* ---------------- PHOTO ---------------- */}
        <div className="relative aspect-[5/4] overflow-hidden bg-[#ececef] sm:aspect-[16/10] md:aspect-auto">
          <div className="absolute inset-x-0 bottom-0 top-[6%]">
            <div data-photo className="absolute inset-0">
              <Image
                src="/images/profile-full.png"
                alt={`${site.name}, ${site.role}`}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          <div
            data-info
            className="absolute bottom-3 right-3 z-10 rounded-xl bg-white/85 px-3 py-2 text-[12px] leading-tight text-[#0a0a0a] backdrop-blur md:bottom-4 md:right-4 md:text-[13px]"
          >
            <p className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#8cc63f] opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-[#8cc63f]" />
              </span>
              Available for freelance
            </p>
            <p className="mt-1.5 flex items-center gap-2 text-[#6b6b6b]">
              <IndiaFlag className="h-3 w-[18px]" />
              Based in India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
