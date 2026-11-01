"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { getLenis } from "@/components/providers/SmoothScroll";
import { HeaderDesktop } from "./header/HeaderDesktop";
import { HeaderMobile } from "./header/HeaderMobile";

/**
 * Header orchestrator.
 *  - HeaderMobile  → below lg
 *  - HeaderDesktop → lg and up
 * Both share open-state, the page dim, scroll-lock and one GSAP motion hook.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(0);
  const backdropRef = useRef<HTMLDivElement>(null);
  const firstRun = useRef(true);

  const setMenu = useCallback((next: boolean) => {
    setOpen(next);
    if (next) setSession((s) => s + 1);
    document.documentElement.classList.toggle("menu-open", next);
    const lenis = getLenis();
    if (next) lenis?.stop();
    else lenis?.start();
  }, []);

  const close = useCallback(() => setMenu(false), [setMenu]);

  // Page dim fade
  useEffect(() => {
    const el = backdropRef.current;
    if (!el) return;
    const instant = firstRun.current;
    firstRun.current = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tween = gsap.to(el, {
      autoAlpha: open ? 1 : 0,
      duration: instant || reduce ? 0 : open ? 0.6 : 0.5,
      ease: "power2.inOut",
      overwrite: "auto",
    });
    return () => {
      tween.kill();
    };
  }, [open]);

  // Esc closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setMenu]);

  // Switching between mobile ↔ desktop layout closes the menu
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setMenu(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [setMenu]);

  // Never leave scroll locked
  useEffect(() => {
    return () => {
      document.documentElement.classList.remove("menu-open");
      getLenis()?.start();
    };
  }, []);

  const toggle = () => setMenu(!open);

  return (
    <>
      <div
        ref={backdropRef}
        onClick={close}
        data-lenis-prevent
        aria-hidden="true"
        className="invisible fixed inset-0 z-40 bg-black/30 opacity-0"
      />
      <HeaderMobile open={open} session={session} onToggle={toggle} onClose={close} />
      <HeaderDesktop open={open} session={session} onToggle={toggle} onClose={close} />
    </>
  );
}
