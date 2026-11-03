"use client";

import { useRef, useState } from "react";
import { Check, Send } from "lucide-react";
import { FlipText } from "@/components/common/FlipText";
import { cn } from "@/lib/utils";
import { CONTACT_LIMITS, CONTACT_TOPICS, validateContact } from "@/lib/contact";
import { gsap, useIsoLayoutEffect, prefersReducedMotion } from "@/animations/gsap";
import type { ContactErrors, ContactField, ContactPayload, ContactResponse } from "@/types/contact";

const topics = CONTACT_TOPICS;
const REQUEST_TIMEOUT = 15_000;

const empty: ContactPayload = {
  name: "",
  email: "",
  phone: "",
  topic: topics[0],
  message: "",
  hp: "",
};

type Status = "idle" | "sending" | "sent" | "error";

/* ------------------------------------------------------------------ */
/* Field: label + control + animated underline + inline error.         */
/* ------------------------------------------------------------------ */
function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const line = useRef<HTMLSpanElement>(null);

  const focus = () => {
    if (line.current) gsap.to(line.current, { scaleX: 1, duration: 0.55, ease: "power4.out" });
  };
  const blur = () => {
    if (line.current) gsap.to(line.current, { scaleX: 0, duration: 0.45, ease: "power3.inOut" });
  };

  return (
    <div data-field data-field-id={id} onFocusCapture={focus} onBlurCapture={blur}>
      <label htmlFor={id} className="flex justify-between text-[13px] tracking-[-0.02em] text-[#6b6b6b]">
        <span>{label}</span>
        {optional && <span className="text-[#9a9a9a]">optional</span>}
      </label>

      <div className="relative">
        {children}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-px",
            error ? "bg-[#dc2626]" : "bg-black/20",
          )}
        />
        <span
          ref={line}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-black"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <p
        id={`${id}-error`}
        role={error ? "alert" : undefined}
        className="min-h-[1.25rem] pt-1 text-[12px] tracking-[-0.01em] text-[#dc2626]"
      >
        {error}
      </p>
    </div>
  );
}

const control =
  "w-full bg-transparent py-2.5 text-[17px] tracking-[-0.02em] text-[#0a0a0a] outline-none placeholder:text-black/30";

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */
export function ContactForm() {
  const root = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");
  const busy = useRef(false); // blocks double-submits before state has re-rendered

  /* entrance + success transition */
  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      if (status === "sent") {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from("[data-sent-icon]", { scale: 0, rotate: -45, duration: 0.8, ease: "back.out(2.4)" })
          .from("[data-sent-text]", { y: 24, opacity: 0, duration: 0.8, stagger: 0.1 }, 0.15);
      } else if (status === "idle") {
        gsap.from("[data-field], [data-chips], [data-submit]", {
          y: 28,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.07,
          delay: 0.15,
        });
      }
    }, el);
    return () => ctx.revert();
    // only re-run when the form flips between states
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status === "sent"]);

  const set = (key: keyof ContactPayload) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((prev) => (prev[key as ContactField] ? { ...prev, [key]: undefined } : prev));
  };

  const shake = (fields: ContactField[]) => {
    if (prefersReducedMotion() || !root.current) return;
    const first = root.current.querySelector<HTMLElement>(`[data-field-id="${fields[0]}"]`);
    first?.querySelector<HTMLElement>("input, textarea")?.focus();
    fields.forEach((f) => {
      const node = root.current?.querySelector(`[data-field-id="${f}"]`);
      if (node) gsap.fromTo(node, { x: -8 }, { x: 0, duration: 0.6, ease: "elastic.out(1, 0.35)" });
    });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy.current) return;

    const check = validateContact(values);
    setErrors(check.errors);
    if (!check.ok) {
      setStatus("idle");
      setNotice("");
      shake(Object.keys(check.errors) as ContactField[]);
      return;
    }

    busy.current = true;
    setStatus("sending");
    setNotice("");

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(check.data),
        signal: controller.signal,
      });
      const json = (await res.json().catch(() => null)) as ContactResponse | null;

      if (res.ok && json?.success) {
        setStatus("sent");
        return;
      }

      if (json?.errors) {
        setErrors(json.errors);
        shake(Object.keys(json.errors) as ContactField[]);
      }
      setNotice(json?.message ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch (err) {
      const timedOut = err instanceof DOMException && err.name === "AbortError";
      setNotice(
        timedOut
          ? "That took too long — please try again."
          : "Network problem — check your connection and try again.",
      );
      setStatus("error");
    } finally {
      window.clearTimeout(timer);
      busy.current = false;
    }
  }

  /* ---------------- success ---------------- */
  if (status === "sent") {
    return (
      <div
        ref={root}
        role="status"
        className="flex min-h-[22rem] flex-col items-start justify-center gap-5"
      >
        <span
          data-sent-icon
          className="flex size-16 items-center justify-center rounded-full bg-[#0a0a0a] text-white"
        >
          <Check className="size-7" />
        </span>
        <h3 data-sent-text className="type-mega text-[clamp(2.25rem,4.4vw,4rem)]">
          Message sent.
        </h3>
        <p data-sent-text className="max-w-[30ch] text-[16px] leading-snug tracking-[-0.02em] text-[#4a4a4a]">
          Thanks, {values.name.split(" ")[0]} — I&apos;ll reply to {values.email} soon.
        </p>
        <button
          data-sent-text
          type="button"
          onClick={() => {
            setValues(empty);
            setErrors({});
            setNotice("");
            setStatus("idle");
          }}
          className="cta cta-outline"
        >
          <FlipText>Send another</FlipText>
        </button>
      </div>
    );
  }

  /* ---------------- form ---------------- */
  return (
    <div ref={root}>
      <form onSubmit={onSubmit} noValidate className="space-y-1">
        {/* honeypot — hidden from people, bots fill it. Not named "company"/"website":
            browsers autofill those, which would silently drop real messages. */}
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="contact-hp">Leave this field empty</label>
          <input
            id="contact-hp"
            name="contact_hp"
            tabIndex={-1}
            autoComplete="off"
            data-lpignore="true"
            data-1p-ignore
            value={values.hp}
            onChange={set("hp")}
          />
        </div>

        <fieldset data-chips className="pb-5">
          <legend className="mb-2.5 text-[13px] tracking-[-0.02em] text-[#6b6b6b]">
            I&apos;m interested in
          </legend>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => {
              const active = values.topic === t;
              return (
                <label
                  key={t}
                  className={cn(
                    "cursor-pointer select-none rounded-full border px-4 py-2 text-[14px] tracking-[-0.02em] transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-black",
                    active
                      ? "border-[#0a0a0a] bg-[#0a0a0a] text-white"
                      : "border-black/20 text-[#0a0a0a] hover:border-black",
                  )}
                  onPointerDown={(e) =>
                    gsap.fromTo(e.currentTarget, { scale: 0.94 }, { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.4)" })
                  }
                >
                  <input
                    type="radio"
                    name="topic"
                    value={t}
                    checked={active}
                    onChange={() => setValues((v) => ({ ...v, topic: t }))}
                    className="sr-only"
                  />
                  {t}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="grid gap-x-8 sm:grid-cols-2">
          <Field id="name" label="Name" error={errors.name}>
            <input
              id="name"
              name="name"
              autoComplete="name"
              maxLength={CONTACT_LIMITS.name}
              value={values.name}
              onChange={set("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby="name-error"
              placeholder="Your name"
              className={control}
            />
          </Field>

          <Field id="email" label="Email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={CONTACT_LIMITS.email}
              value={values.email}
              onChange={set("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby="email-error"
              placeholder="you@company.com"
              className={control}
            />
          </Field>
        </div>

        <Field id="phone" label="Phone / WhatsApp" optional error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={CONTACT_LIMITS.phone}
            value={values.phone}
            onChange={set("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby="phone-error"
            placeholder="+91 …"
            className={control}
          />
        </Field>

        <Field id="message" label="Project details" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={CONTACT_LIMITS.message}
            value={values.message}
            onChange={set("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby="message-error"
            placeholder="What are you building, and by when?"
            className={cn(control, "resize-none")}
          />
        </Field>

        <div data-submit className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="cta cta-dark disabled:opacity-60"
          >
            <FlipText>{status === "sending" ? "Sending…" : "Send message"}</FlipText>
            <Send size={16} />
          </button>

          <p
            aria-live="polite"
            className={cn(
              "text-[13px] tracking-[-0.01em]",
              status === "error" ? "text-[#dc2626]" : "text-[#6b6b6b]",
            )}
          >
            {notice}
          </p>
        </div>
      </form>
    </div>
  );
}
