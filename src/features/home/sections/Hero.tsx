"use client";

import Image from "next/image";
import { MotionConfig, motion, type Variants } from "motion/react";
import { ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FlipText } from "@/components/common/FlipText";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Load-in animation only (Motion). Hover = FlipText (same as header). */
/* ------------------------------------------------------------------ */

const stack: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.6, staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } },
};

const headlineLines = ["Creative", "Frontend", "Developer"] as const;

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

function WhatsAppLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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

/** Bottom-right info card on the photo. Static — no hover state. */
function InfoCard() {
  return (
    <motion.div
      className="absolute bottom-3 right-3 z-10 rounded-xl bg-white/85 px-3 py-2 text-[12px] leading-tight text-[#0a0a0a] backdrop-blur md:bottom-4 md:right-4 md:text-[13px]"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease }}
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
    </motion.div>
  );
}

/** Photo — a single instance; the panel around it re-flows per breakpoint. */
function Photo() {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0, y: 60, scale: 1.04, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.4, delay: 0.5, ease }}
    >
      <Image
        src="/images/profile-full.png"
        alt={`${site.name}, ${site.role}`}
        fill
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-contain object-bottom"
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Button sizing. Hover colours are pinned to the resting colours so   */
/* the background never changes — only the label flips (FlipText).     */
/* ------------------------------------------------------------------ */

const ctaBase =
  "h-11 shrink-0 gap-2 rounded-full px-5 text-[14px] font-medium tracking-[-0.01em] md:h-12 lg:px-6 lg:text-[15px] xl:h-14 xl:px-7 xl:text-[16px]";

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/*                                                                     */
/*  < md   : ONE card, stacked  → text on top, photo underneath        */
/*  md     : ONE card, 2 columns, height follows the content (no gap)  */
/*  lg+    : ONE card, 2 columns, fills the viewport under the header  */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        className="flex w-full flex-col px-[var(--page-x)] pb-1 pt-1 lg:min-h-[calc(100svh-2.75rem)] "
        aria-label="Introduction"
      >
        {/* The single rounded card — radius is the header's (--radius-header = 1.25rem) */}
        <motion.div
          className="relative grid flex-1 grid-cols-1 overflow-hidden rounded-[var(--radius-header)] bg-[#ececef] md:grid-cols-2 lg:max-h-[70rem]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
        >
          {/* ---------------- CONTENT ---------------- */}
          <div className="flex flex-col gap-8 p-5 sm:p-7 md:justify-between md:gap-8 md:p-7 lg:p-8 xl:p-10">
            {/* 1 · Identity + headline (the loudest thing on the page) */}
            <div>
              <motion.p
                className="mb-3 text-[clamp(1rem,1.4vw,1.25rem)] font-medium tracking-tight text-[#6b6b6b] md:mb-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease }}
              >
                Hi, I&apos;m <span className="text-[#0a0a0a]">{site.name}</span>
              </motion.p>

              <h1 className="font-heading text-[clamp(3rem,14vw,5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#0a0a0a] sm:text-[clamp(4rem,12vw,6.5rem)] md:text-[clamp(3rem,8.4vw,5.5rem)] lg:text-[clamp(3.25rem,min(7vw,10.5vh),8rem)]">
                {headlineLines.map((line, i) => (
                  <span key={line} className="block overflow-hidden pb-[0.08em]">
                    <motion.span
                      className="block"
                      initial={{ y: "110%", rotate: 2 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ duration: 1.1, delay: 0.4 + i * 0.1, ease }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
                <span className="sr-only"> — {site.name}</span>
              </h1>
            </div>

            {/* 2 · Supporting line  →  3 · Actions */}
            <motion.div
              className="max-w-[34rem]"
              variants={stack}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={item}
                className="mb-5 text-[clamp(0.95rem,1.25vw,1.2rem)] leading-snug tracking-tight text-[#3d3d3d] md:mb-6"
              >
                I design and build fast, conversion-focused websites that turn
                visitors into clients — made around your goals, not just a
                pretty screen.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap items-center gap-2 sm:flex-nowrap md:gap-3">
                <a
                  href="/work"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    ctaBase,
                    "bg-[#0a0a0a] text-white hover:bg-[#0a0a0a]"
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
                    "border-[#0a0a0a] bg-transparent text-[#0a0a0a] hover:bg-transparent hover:text-[#0a0a0a]"
                  )}
                >
                  <WhatsAppLogo className="size-5 text-[#25D366] lg:size-6" />
                  <FlipText>
                    <span className="xl:hidden">Message me</span>
                    <span className="hidden xl:inline">Message me on WhatsApp</span>
                  </FlipText>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* ---------------- PHOTO ---------------- */}
          {/* < md: sits under the text at a fixed ratio (no empty gap).
              md+ : fills the right half; height comes from the content column. */}
          <motion.div
            className="relative aspect-[5/4] overflow-hidden bg-[#ececef] sm:aspect-[16/10] md:aspect-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.12, ease }}
          >
            <div className="absolute inset-x-0 bottom-0 top-[6%]">
              <Photo />
            </div>
            <InfoCard />
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}