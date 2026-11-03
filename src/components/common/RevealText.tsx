"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type Segment = { text: string; className?: string };

/* ------------------------------------------------------------------ */
/* ScrubText — words light up one by one as the block scrolls into view */
/* Use inside a heading / paragraph. Colours come from each segment.   */
/* ------------------------------------------------------------------ */

function ScrubWord({
  word,
  className,
  progress,
  index,
  total,
}: {
  word: string;
  className?: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const opacity = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0.15, 1],
  );

  return (
    <motion.span className={className} style={{ opacity }}>
      {word}{" "}
    </motion.span>
  );
}

export function ScrubText({
  segments,
  className,
}: {
  segments: Segment[];
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.6"],
  });

  const words = segments.flatMap((s) =>
    s.text
      .split(" ")
      .filter(Boolean)
      .map((word) => ({ word, className: s.className })),
  );

  return (
    <span ref={ref} className={className}>
      {words.map((w, i) =>
        reduce ? (
          <span key={i} className={w.className}>
            {w.word}{" "}
          </span>
        ) : (
          <ScrubWord
            key={i}
            word={w.word}
            className={w.className}
            progress={scrollYProgress}
            index={i}
            total={words.length}
          />
        ),
      )}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* RiseText — each word slides up out of a mask once, on entering view  */
/* ------------------------------------------------------------------ */

export function RiseText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ").filter(Boolean);

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="-my-[0.1em] inline-block overflow-hidden py-[0.1em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.9, delay: i * 0.06, ease }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? "\u00a0" : null}
        </span>
      ))}
    </span>
  );
}
