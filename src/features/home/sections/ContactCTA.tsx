"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";

const CAL_URL = "https://cal.com/itschinmay/15min";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ContactCTA() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="contact" className="w-full px-[var(--page-x)] py-5 lg:pb-14">
      <motion.div
        className="rounded-[1.75rem] bg-[#0a0a0a] px-6 py-14 text-white sm:rounded-[2.25rem] sm:px-10 sm:py-20 lg:rounded-[2.5rem] lg:py-28"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Centered content block — same spacing as the reference */}
        <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-[13px] text-white/80">Our Schedule</p>
            <h2 className="mt-5 max-w-[16ch] font-heading text-[clamp(1.6rem,2.7vw,2.4rem)] font-medium leading-[1.12] tracking-[-0.03em]">
              Choose a time that suits you and schedule.
            </h2>

            <p className="mt-10 max-w-[34ch] text-[13px] leading-relaxed text-white/80 sm:mt-14 sm:text-[14px]">
              Landing pages, UI/UX and custom software — let&apos;s talk about
              your project.
            </p>

            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-medium text-[#0a0a0a] sm:mt-10"
            >
              <FlipText>Book a 1:1 call</FlipText>
              <ArrowUpRight size={14} />
            </a>

            <div className="mt-8 flex items-center gap-2 text-[13px] text-white/80 sm:mt-10">
              <span>Message me on</span>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex size-6 items-center justify-center rounded-md bg-[#5fd68a] text-white"
              >
                <WhatsAppIcon className="size-3.5" />
              </a>
              <span>for a quick response</span>
            </div>
          </div>

          {/* Right — calendar */}
          <div className="relative h-[480px] overflow-hidden rounded-[1.25rem] bg-white sm:h-[510px]">
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-[#f2f2f2]" aria-hidden />
            )}
            <iframe
              src={`${CAL_URL}?theme=light&layout=month_view`}
              title="Book a 1:1 call with Chinmaya Kumar"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              className="relative size-full border-0"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating WhatsApp, right side */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-3 z-30 inline-flex size-10 items-center justify-center rounded-full bg-[#5fd68a] text-white transition-transform duration-300 hover:scale-110 active:scale-95 sm:right-4"
      >
        <WhatsAppIcon className="size-5" />
      </a>
    </section>
  );
}