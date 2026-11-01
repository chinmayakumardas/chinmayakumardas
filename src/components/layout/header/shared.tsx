"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

import { site, socialLinks } from "@/content/site";
import { menuItems } from "@/content/menu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FlipText } from "@/components/common/FlipText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const BAR_BG = "bg-[#ececef]";

/* ---------- small pieces ---------- */

/** Owner's local time (Bhubaneswar) — e.g. "Nov 1, 2:21 PM IST" */
export function useClock() {
  const [label, setLabel] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    const tick = () => setLabel(`${formatter.format(new Date())} IST`);
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 15000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  return label;
}

export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${site.name} — home`}
      className={cn(
        "shrink-0 font-heading font-semibold leading-none tracking-[-0.06em] text-[#0a0a0a]",
        className
      )}
    >
      <FlipText>
        chinmaya<span className="text-[#8cc63f]">kumar</span>
      </FlipText>
    </Link>
  );
}

/** Primary call-to-action: "Book a 1:1 call" */
export function CtaLink({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={site.bookCall.href}
      onClick={onClick}
      className={cn(
        buttonVariants({ variant: "default", size: "default" }),
        "rounded-full bg-[#0a0a0a] font-medium tracking-[-0.01em] text-white hover:bg-[#0a0a0a]/85",
        className
      )}
    >
      <FlipText>
        <span className="sm:hidden">{site.bookCall.shortLabel}</span>
        <span className="hidden sm:inline">{site.bookCall.label}</span>
      </FlipText>
    </Link>
  );
}

export function MenuToggle({
  open,
  controls,
  onClick,
  className,
}: {
  open: boolean;
  controls: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? "Close menu" : "Open menu"}
      className={cn(
        buttonVariants({ variant: "secondary", size: "icon" }),
        "rounded-full bg-white text-[#0a0a0a] hover:bg-white/70",
        className
      )}
    >
      <span data-icon className="inline-flex">
        <Plus size={18} strokeWidth={1.75} />
      </span>
    </button>
  );
}

/* ---------- menu body (used by both mobile + desktop) ---------- */

function Line() {
  return (
    <span
      data-row-line
      aria-hidden
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-black/15"
    />
  );
}

function Mask({ children }: { children: React.ReactNode }) {
  return (
    <span className="block overflow-hidden py-[0.1em]">
      <span data-row-text className="block">
        <FlipText>{children}</FlipText>
      </span>
    </span>
  );
}

export function MenuList({
  session,
  onNavigate,
  rowClass,
}: {
  /** changes on every open → accordion starts collapsed each time */
  session: number;
  onNavigate: () => void;
  rowClass: string;
}) {
  return (
    <Accordion key={session} multiple={false} aria-label="Menu">
      {menuItems.map((item) => {
        if (!item.children) {
          return (
            <div key={item.label} className="relative">
              <Link
                href={item.href}
                onClick={onNavigate}
                className={cn(rowClass, "flex items-center justify-between gap-4")}
              >
                <Mask>{item.label}</Mask>
                <ArrowUpRight
                  data-fade
                  aria-hidden
                  strokeWidth={1.5}
                  className="size-5 shrink-0 opacity-60"
                />
              </Link>
              <Line />
            </div>
          );
        }

        return (
          <AccordionItem
            key={item.label}
            value={item.label}
            className="relative border-b-0"
          >
            <AccordionTrigger className={rowClass}>
              <Mask>{item.label}</Mask>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-wrap gap-2">
                {item.children.map((sub) => (
                  <li key={sub.label}>
                    <Link
                      href={sub.href}
                      onClick={onNavigate}
                      className={cn(
                        buttonVariants({ variant: "secondary", size: "lg" }),
                        "h-9 rounded-full bg-white px-4 text-[13px] font-medium text-[#0a0a0a] hover:bg-white/70"
                      )}
                    >
                      <FlipText>{sub.label}</FlipText>
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
            <Line />
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export function MenuImage({ className }: { className?: string }) {
  return (
    <div
      data-image
      className={cn(
        "relative overflow-hidden rounded-[1.1rem] bg-[#1a1a1a]",
        className
      )}
    >
      <div data-image-inner className="absolute inset-0">
        <Image
          src="/images/menu-workspace.jpg"
          alt="Workspace"
          fill
          loading="eager"
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export function MenuFooter({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div data-fade>
        <a
          href={`mailto:${site.email}`}
          className="block break-all text-[16px] font-normal tracking-[-0.02em] text-[#0a0a0a] sm:text-[19px]"
        >
          <FlipText>{site.email}</FlipText>
        </a>
        <a
          href={site.phoneHref}
          className="mt-1 block text-[14px] tracking-[-0.01em] text-[#0a0a0a]"
        >
          <FlipText>{site.phone}</FlipText>
        </a>
        <p className="mt-1 text-[14px] tracking-[-0.01em] text-[#6b6b6b]">
          Based in {site.location}.
        </p>
      </div>

      <div data-fade className="flex flex-wrap gap-x-5 gap-y-2">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] tracking-[-0.01em] text-[#0a0a0a]"
          >
            <FlipText>{s.label}</FlipText>
          </a>
        ))}
      </div>
    </div>
  );
}
