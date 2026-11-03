"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";
import { SplitReveal } from "@/components/gsap/SplitReveal";
import { Marquee } from "@/components/gsap/Marquee";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Section, SectionLabel } from "@/components/layout/Section";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";

const CAL_NAMESPACE = "15min";

/** Home contact block. Email / phone / socials live in the footer and /contact. */
export function ContactCTA() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (!active) return;
      cal("ui", { hideEventTypeDetails: true, layout: "month_view", theme: "light" });
    })();
    return () => {
      active = false;
    };
  }, []);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const st = { trigger: "[data-contact-grid]", start: "top 80%", once: true } as const;
      gsap.from("[data-cta]", { y: 24, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.1, scrollTrigger: st });
      gsap.from("[data-cal]", { y: 70, opacity: 0, duration: 1.2, ease: "power4.out", scrollTrigger: st });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={root} id="contact" labelledBy="contact-title" tone="grey" fill className="overflow-hidden">
      {/* marquee place #2 — full-bleed band */}
      <Marquee
        items={["Let’s talk", "Say hello"]}
        speed={50}
        className="-mx-5 mb-8 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] sm:-mx-7 lg:-mx-8 lg:mb-10"
      />

      <div
        data-contact-grid
        className="grid flex-1 items-center gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14"
      >
        <div>
          <SectionLabel id="contact-title">Contacts</SectionLabel>
          <p className="type-mega mt-5 text-[clamp(2.5rem,5.4vw,5rem)]">
            <SplitReveal text="Got an idea? Let’s build it." />
          </p>
          <p className="mt-5 max-w-[34ch] text-[15px] leading-[1.6] tracking-[-0.015em] text-[#4a4a4a]">
            <SplitReveal text="Have a project, collaboration or opportunity in mind? Tell me what you need and I’ll suggest where to start." />
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link data-cta href="/contact" className="cta cta-dark">
              <FlipText>Contact me</FlipText>
              <ArrowUpRight size={16} />
            </Link>
            <a
              data-cta
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-outline gap-2.5 !pl-3"
            >
              <WhatsAppIcon className="size-8 shrink-0" />
              <FlipText>WhatsApp</FlipText>
            </a>
          </div>
        </div>

        <div
          data-cal
          data-lenis-prevent
          className="relative h-[460px] w-full min-w-0 overflow-hidden rounded-[1.25rem] bg-white sm:h-[490px] lg:ml-auto lg:h-[min(540px,calc(100svh-18rem))] lg:min-h-[440px] lg:max-w-[52rem]"
        >
          <Cal
            namespace={CAL_NAMESPACE}
            calLink="itschinmay/15min"
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "light" }}
          />
        </div>
      </div>
    </Section>
  );
}
