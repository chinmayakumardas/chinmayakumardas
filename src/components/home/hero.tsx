







// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { PageFrameDecor } from "@/components/ui";
// import { FiArrowUpRight } from "react-icons/fi";

// const SKILLS = [
//   "React",
//   "Next.js",
//   "TypeScript",
//   "AI systems",
//   "Automation",
//   "Design systems",
//   "Performance",
//   "Product thinking",
// ];

// export function Hero() {
//   const trackRef = useRef<HTMLDivElement>(null);
//   const tweenRef = useRef<gsap.core.Tween | null>(null);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     // Kill any previous animation
//     tweenRef.current?.kill();


//     // a seamless infinite marquee.
//     tweenRef.current = gsap.to(track, {
//       xPercent: -50,
//       duration: 40,
//       ease: "none",
//       repeat: -1,
//     });

//     return () => {
//       tweenRef.current?.kill();
//     };
//   }, []);

//   return (
//     <section>
//       <div className="relative h-[calc(100svh-var(--header-height))] overflow-hidden border-b border-border">
//       <div className="grid h-full min-w-0 grid-rows-[minmax(0,1fr)_clamp(14rem,30vh,18rem)] max-md:grid-rows-[minmax(0,1fr)_auto]">
//           {/* Image stage */}
//           <div className="relative flex min-h-0 items-end justify-center overflow-hidden border-b border-border px-3 pb-3 pt-6 sm:px-5 sm:pb-4 sm:pt-7">
//             <PageFrameDecor className="z-10" />

//             <Image
//               src="/images/profile.png"
//               alt="Illustrated portrait of Chinmaya Kumar Das"
//               width={460}
//               height={540}
//               priority
//               className="relative z-0 h-auto max-h-full w-[min(78vw,28rem)] max-w-full object-contain object-bottom md:h-full md:w-[min(62vw,38rem)] md:max-w-xl"
//             />
//           </div>

//           {/* Bottom band */}
//           <div className="grid min-h-0 min-w-0 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">

//             {/* LEFT — headline */}
       
         
//           <div className="flex min-w-0 items-start justify-end border-b-2 border-border p-3 sm:p-4 md:border-b-0 md:border-r-2 md:p-5">
//   <h1 className="type-display w-full text-left text-[clamp(1.5rem,3.1vw,2.85rem)] font-semibold uppercase leading-[1.02] tracking-tight">
//     Creative frontend developer
//     <br />
//     who helps businesses
//     <br />
//     get noticed online
//   </h1>
// </div>
//             {/* RIGHT */}
//             <div className="grid min-w-0 grid-rows-[1fr_auto]">

//               {/* Description + Explore work */}
//               <div className="grid min-w-0 grid-cols-1 border-b-2 border-border sm:grid-cols-[1fr_auto]">

//                 {/* Description */}
//                 <div className="border-b-2 border-border p-3 sm:border-b-0 sm:border-r-2 sm:p-4 md:p-5">
//                   <p className="max-w-full text-[0.75rem] leading-[1.45] sm:text-[0.9rem]">
//                   {/* <p className="max-w-full text-[0.75rem] leading-[1.45] sm:text-[0.8125rem]"> */}
//                     I design and build thoughtful interfaces, AI-powered
//                     workflows, and reliable systems that turn complex ideas
//                     into clear, usable products for teams doing meaningful
//                     work.
//                   </p>
//                 </div>

//                 {/* Explore more */}
               


// <div className="group flex min-w-[7.5rem] flex-col items-start justify-between gap-2 p-2 transition-colors duration-200 hover:bg-brand sm:p-3 md:min-w-[12.5rem] md:p-4">
//   <Link
//     href="/projects"
//     className="type-label whitespace-nowrap text-[0.7rem] text-brand transition-colors duration-200 group-hover:text-background sm:text-[0.8rem]"
//   >
//     Explore Work
//   </Link>

//   <Link
//     href="/projects"
//     className="type-label self-end text-brand transition-colors duration-200 group-hover:text-background"
//     aria-label="Explore work"
//   >
//     <FiArrowUpRight
//       aria-hidden="true"
//       className="h-5 w-5 sm:h-[1.25rem] sm:w-[1.25rem]"
//       strokeWidth={1.5}
//     />
//   </Link>
// </div>
//               </div>

//               {/* Infinite Marquee */}
//               <div className="relative flex min-h-12 items-center overflow-hidden border-t border-border font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground sm:text-[0.8rem] md:text-[0.85rem]">

//                 <div
//                   ref={trackRef}
//                   className="flex w-max shrink-0 items-center"
//                 >
//                   {/* First copy */}
//                   <MarqueeTrack />

//                   {/* Exact duplicate */}
//                   <MarqueeTrack aria-hidden />
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function MarqueeTrack({
//   "aria-hidden": ariaHidden,
// }: {
//   "aria-hidden"?: boolean;
// }) {
//   return (
//     <div
//       className="flex shrink-0 items-center gap-5 pr-5"
//       aria-hidden={ariaHidden}
//       aria-label={ariaHidden ? undefined : "Skills"}
//     >
//       {SKILLS.map((item, i) => (
//         <span
//           key={`${item}-${i}`}
//           className="flex shrink-0 items-center gap-5"
//         >
//           <span className={i % 2 === 0 ? "text-brand" : undefined}>
//             {item}
//           </span>

//           <span aria-hidden="true">✦</span>
//         </span>
//       ))}
//     </div>
//   );
// }











"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PageFrameDecor } from "@/components/ui";
import { FiArrowUpRight } from "react-icons/fi";

const SKILLS = [
  "Frontend Development",
  "Creative Development",
  "Problem Solving",
  "React Js",
  "Next JS",
  "Typescript",
  "Interaction",
  "Motion",
  "3D",
  "Performance",
  "Storytelling",
  "Product Thinking",
];

export function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Kill any previous animation
    tweenRef.current?.kill();

    // Seamless infinite marquee
    tweenRef.current = gsap.to(track, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <section>
      <div className="relative h-[calc(100svh-var(--header-height))] overflow-hidden border-b border-border">
        <div className="grid h-full min-w-0 grid-rows-[minmax(0,1fr)_clamp(14rem,30vh,18rem)] max-md:grid-rows-[minmax(0,1fr)_auto]">

          {/* Image stage */}
          <div className="relative flex min-h-0 items-end justify-center overflow-hidden border-b border-border px-3 pb-3 pt-6 sm:px-5 sm:pb-4 sm:pt-7">
            <PageFrameDecor className="z-10" />

            <Image
              src="/images/profile.png"
              alt="Illustrated portrait of Chinmaya Kumar Das"
              width={460}
              height={540}
              priority
              className="relative z-0 h-auto max-h-full w-[min(78vw,28rem)] max-w-full object-contain object-bottom md:h-full md:w-[min(62vw,38rem)] md:max-w-xl"
            />
          </div>

          {/* Bottom band */}
          <div className="grid min-h-0 min-w-0 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">

            {/* LEFT — headline */}
            <div className="flex min-w-0 items-start justify-end border-b-2 border-border p-3 sm:p-4 md:border-b-0 md:border-r-2 md:p-5">
              <h1 className="type-display w-full text-left text-[clamp(1.5rem,3.1vw,2.85rem)] font-semibold uppercase leading-[1.02] tracking-tight">
                Creative frontend developer
                <br />
                who helps businesses
                <br />
                get noticed online
              </h1>
            </div>

            {/* RIGHT */}
            <div className="grid min-w-0 grid-rows-[1fr_auto]">

              {/* Description + Explore work */}
              <div className="grid min-w-0 grid-cols-1 border-b-2 border-border sm:grid-cols-[1fr_auto]">

                {/* Description */}
            <div className="border-b-2 border-border p-3 sm:border-b-0 sm:border-r-2 sm:p-4 md:p-5">
  <p className="max-w-full text-[0.75rem] leading-[1.45] sm:text-[0.9rem]">
    <span className="font-semibold text-brand">2+ years</span> of experience
    building digital products across e-commerce, HRMS, billing, and business
    systems. I don&apos;t just build websites — I look at the business, the
    audience, and the problem behind them.
  </p>
</div>

                {/* Explore work */}
                <Link
                  href="/projects"
                  className="group flex min-w-[7.5rem] flex-col items-start justify-between gap-2 p-2 transition-colors duration-200 hover:bg-brand sm:p-3 md:min-w-[12.5rem] md:p-4"
                  aria-label="Explore work"
                >
                  <span className="type-label whitespace-nowrap text-[0.7rem] text-brand transition-colors duration-200 group-hover:text-background sm:text-[0.8rem]">
                    Explore Work
                  </span>

                  <span className="type-label self-end text-brand transition-colors duration-200 group-hover:text-background">
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 sm:h-[1.25rem] sm:w-[1.25rem]"
                      strokeWidth={1.5}
                    />
                  </span>
                </Link>
              </div>

              {/* Infinite Marquee */}
              <div className="relative flex min-h-12 items-center overflow-hidden border-t border-border font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground sm:text-[0.8rem] md:text-[0.85rem]">
                <div
                  ref={trackRef}
                  className="flex w-max shrink-0 items-center"
                >
                  <MarqueeTrack />
                  <MarqueeTrack aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeTrack({
  "aria-hidden": ariaHidden,
}: {
  "aria-hidden"?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-5 pr-5"
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : "Capabilities"}
    >
      {SKILLS.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="flex shrink-0 items-center gap-5"
        >
          <span className={i % 2 === 0 ? "text-brand" : undefined}>
            {item}
          </span>

          <span aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  );
}
