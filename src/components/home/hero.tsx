





// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { PageFrameDecor } from "@/components/ui";
// import { FiArrowUpRight } from "react-icons/fi";

// const SKILLS = [
//   "Frontend Development",
//   "Creative Development",
//   "Problem Solving",
//   "React Js",
//   "Next JS",
//   "Typescript",
//   "Interaction",
//   "Motion",
//   "3D",
//   "Performance",
//   "Storytelling",
//   "Product Thinking",
// ];

// export function Hero() {
//   const trackRef = useRef<HTMLDivElement>(null);
//   const tweenRef = useRef<gsap.core.Tween | null>(null);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     // Kill any previous animation
//     tweenRef.current?.kill();

//     // Seamless infinite marquee
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
//         {/* <div className="grid h-full min-w-0 grid-rows-[minmax(0,1fr)_clamp(14rem,30vh,18rem)] max-md:grid-rows-[minmax(0,1fr)_auto]"> */}
// <div className="grid h-full min-w-0 grid-rows-[minmax(0,1fr)_clamp(11rem,22vh,14rem)] max-md:grid-rows-[minmax(0,1fr)_auto]">
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
//             <div className="flex min-w-0 items-start justify-end border-b-2 border-border p-3 sm:p-4 md:border-b-0 md:border-r-2 md:p-5">
//               <h1 className="type-display w-full text-left text-[clamp(1.5rem,3.1vw,2.85rem)] font-semibold uppercase leading-[1.02] tracking-tight">
//                 Creative frontend developer
//                 <br />
//                 who helps businesses
//                 <br />
//                 get noticed online
//               </h1>
//             </div>

//             {/* RIGHT */}
//             <div className="grid min-w-0 grid-rows-[1fr_auto]">

//               {/* Description + Explore work */}
//               <div className="grid min-w-0 grid-cols-1 border-b-2 border-border sm:grid-cols-[1fr_auto]">

//                 {/* Description */}
//             <div className="border-b-2 border-border p-3 sm:border-b-0 sm:border-r-2 sm:p-4 md:p-5">
//   <p className="max-w-full text-[0.75rem] leading-[1.45] sm:text-[0.9rem]">
//     <span className="font-semibold text-brand">2+ years</span> of experience
//     building digital products across e-commerce, HRMS, billing, and business
//     systems. I don&apos;t just build websites — I look at the business, the
//     audience, and the problem behind them.
//   </p>
// </div>

//                 {/* Explore work */}
//                 <Link
//                   href="/projects"
//                   className="group flex min-w-[7.5rem] flex-col items-start justify-between gap-2 p-2 transition-colors duration-200 hover:bg-brand sm:p-3 md:min-w-[12.5rem] md:p-4"
//                   aria-label="Explore work"
//                 >
//                   <span className="type-label whitespace-nowrap text-[0.7rem] text-brand transition-colors duration-200 group-hover:text-background sm:text-[0.8rem]">
//                     Explore Work
//                   </span>

//                   <span className="type-label self-end text-brand transition-colors duration-200 group-hover:text-background">
//                     <FiArrowUpRight
//                       aria-hidden="true"
//                       className="h-5 w-5 sm:h-[1.25rem] sm:w-[1.25rem]"
//                       strokeWidth={1.5}
//                     />
//                   </span>
//                 </Link>
//               </div>

//               {/* Infinite Marquee */}
//               <div className="relative flex min-h-12 items-center overflow-hidden border-t border-border font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground sm:text-[0.8rem] md:text-[0.85rem]">
//                 <div
//                   ref={trackRef}
//                   className="flex w-max shrink-0 items-center"
//                 >
//                   <MarqueeTrack />
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
//       aria-label={ariaHidden ? undefined : "Capabilities"}
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


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { PageFrameDecor } from "@/components/ui";
// import { FiArrowUpRight } from "react-icons/fi";

// const SKILLS = [
//   "Frontend Development",
//   "Creative Development",
//   "Problem Solving",
//   "React Js",
//   "Next JS",
//   "Typescript",
//   "Interaction",
//   "Motion",
//   "3D",
//   "Performance",
//   "Storytelling",
//   "Product Thinking",
// ];

// export function Hero() {
//   const trackRef = useRef<HTMLDivElement>(null);
//   const firstTrackRef = useRef<HTMLDivElement>(null);
//   const tweenRef = useRef<gsap.core.Tween | null>(null);

//   useEffect(() => {
//     const track = trackRef.current;
//     const firstTrack = firstTrackRef.current;

//     if (!track || !firstTrack) return;

//     const setupMarquee = () => {
//       tweenRef.current?.kill();

//       const width = firstTrack.getBoundingClientRect().width;

//       if (!width) return;

//       gsap.set(track, { x: 0 });

//       tweenRef.current = gsap.to(track, {
//         x: -width,
//         duration: 40,
//         ease: "none",
//         repeat: -1,
//       });
//     };

//     setupMarquee();

//     const observer = new ResizeObserver(setupMarquee);
//     observer.observe(firstTrack);

//     return () => {
//       tweenRef.current?.kill();
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <section className="w-full min-w-0">
//       <div
//         className="
//           relative
//           h-[calc(100svh-var(--header-height)-0.75rem)]
//           min-h-0
//           w-full
//           overflow-hidden
//           border-b
//           border-border
//         "
//       >
//         {/* =====================================================
//             MOBILE
//             Separate flex layout
//         ===================================================== */}
//         <div
//           className="
//             flex
//             h-full
//             min-h-0
//             w-full
//             flex-col
//             overflow-hidden
//             md:hidden
//           "
//         >
//           {/* Mobile Image */}
//           <div
//             className="
//               relative
//               flex
//               min-h-0
//               flex-1
//               items-end
//               justify-center
//               overflow-hidden
//               border-b
//               border-border
//               px-2
//               pb-2
//             "
//           >
//             <PageFrameDecor className="z-10" />

//             <Image
//               src="/images/profile.png"
//               alt="Illustrated portrait of Chinmaya Kumar Das"
//               width={460}
//               height={540}
//               priority
//               className="
//                 relative
//                 z-0
//                 h-auto
//                 max-h-full
//                 w-[min(76vw,23rem)]
//                 max-w-full
//                 object-contain
//                 object-bottom
//               "
//             />
//           </div>

//           {/* Mobile Headline */}
//           <div
//             className="
//               shrink-0
//               border-b-2
//               border-border
//               px-3
//               py-2
//             "
//           >
//             <h1
//               className="
//                 type-display
//                 w-full
//                 text-left
//                 text-[clamp(1.45rem,7vw,2.3rem)]
//                 font-semibold
//                 uppercase
//                 leading-[0.96]
//                 tracking-[-0.035em]
//               "
//             >
//               Creative frontend developer
//               <br />
//               who helps businesses
//               <br />
//               get noticed online
//             </h1>
//           </div>

//           {/* Mobile Description */}
//           <div
//             className="
//               shrink-0
//               border-b-2
//               border-border
//               px-3
//               py-2
//             "
//           >
//             <p
//               className="
//                 text-[clamp(0.76rem,3.5vw,0.98rem)]
//                 leading-[1.3]
//               "
//             >
//               <span className="font-semibold text-brand">2+ years</span> of
//               experience building digital products across e-commerce, HRMS,
//               billing, and business systems. I don&apos;t just build websites
//               — I look at the business, the audience, and the problem behind
//               them.
//             </p>
//           </div>

//           {/* Mobile Explore */}
//           <Link
//             href="/projects"
//             className="
//               group
//               flex
//               shrink-0
//               items-start
//               justify-between
//               border-b-2
//               border-border
//               px-3
//               py-2
//               transition-colors
//               duration-200
//               hover:bg-brand
//             "
//             aria-label="Explore work"
//           >
//             <span
//               className="
//                 type-label
//                 text-[clamp(0.7rem,3vw,0.85rem)]
//                 text-brand
//                 transition-colors
//                 group-hover:text-background
//               "
//             >
//               Explore Work
//             </span>

//             <FiArrowUpRight
//               aria-hidden="true"
//               className="
//                 h-5
//                 w-5
//                 shrink-0
//                 text-brand
//                 transition-colors
//                 group-hover:text-background
//               "
//               strokeWidth={1.5}
//             />
//           </Link>

//           {/* ===================================================
//               MOBILE MARQUEE
//               Always visible
//           =================================================== */}
//           <div
//             className="
//               relative
//               flex
//               h-9
//               min-h-9
//               w-full
//               shrink-0
//               items-center
//               overflow-hidden
//               border-t
//               border-border
//               font-mono
//               text-[0.58rem]
//               uppercase
//               tracking-[0.08em]
//               text-muted-foreground
//             "
//           >
//             <div
//               ref={trackRef}
//               className="
//                 flex
//                 w-max
//                 shrink-0
//                 items-center
//                 will-change-transform
//               "
//             >
//               <MarqueeTrack ref={firstTrackRef} />
//               <MarqueeTrack aria-hidden />
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             TABLET + DESKTOP
//             Existing composition
//         ===================================================== */}
//         <div
//           className="
//             hidden
//             h-full
//             min-w-0
//             grid-rows-[minmax(0,1fr)_clamp(9rem,18vh,11.5rem)]
//             md:grid
//           "
//         >
//           {/* Image */}
//           <div
//             className="
//               relative
//               flex
//               min-h-0
//               items-end
//               justify-center
//               overflow-hidden
//               border-b
//               border-border
//               px-5
//               pb-3
//               pt-3
//             "
//           >
//             <PageFrameDecor className="z-10" />

//             <Image
//               src="/images/profile.png"
//               alt="Illustrated portrait of Chinmaya Kumar Das"
//               width={460}
//               height={540}
//               priority
//               className="
//                 relative
//                 z-0
//                 h-full
//                 w-[min(50vw,30rem)]
//                 max-w-lg
//                 object-contain
//                 object-bottom

//                 lg:w-[min(46vw,32rem)]
//               "
//             />
//           </div>

//           {/* Bottom */}
//           <div
//             className="
//               grid
//               min-h-0
//               min-w-0
//               md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]
//             "
//           >
//             {/* Headline */}
//             <div
//               className="
//                 flex
//                 min-w-0
//                 items-start
//                 justify-start
//                 border-r-2
//                 border-border
//                 px-4
//                 py-3
//                 lg:px-5
//               "
//             >
//               <h1
//                 className="
//                   type-display
//                   w-full
//                   text-left
//                   text-[clamp(1rem,1.85vw,2.05rem)]
//                   font-semibold
//                   uppercase
//                   leading-[0.98]
//                   tracking-[-0.035em]
//                 "
//               >
//                 Creative frontend developer
//                 <br />
//                 who helps businesses
//                 <br />
//                 get noticed online
//               </h1>
//             </div>

//             {/* Right */}
//             <div
//               className="
//                 grid
//                 min-w-0
//                 grid-rows-[minmax(0,1fr)_auto]
//               "
//             >
//               {/* Description + Explore */}
//               <div
//                 className="
//                   grid
//                   min-h-0
//                   min-w-0
//                   grid-cols-[minmax(0,1fr)_auto]
//                   border-b-2
//                   border-border
//                 "
//               >
//                 {/* Description */}
//                 <div
//                   className="
//                     flex
//                     min-w-0
//                     items-start
//                     justify-start
//                     border-r-2
//                     border-border
//                     px-4
//                     py-3
//                     lg:px-5
//                   "
//                 >
//                   <p
//                     className="
//                       w-full
//                       max-w-full
//                       text-[clamp(0.65rem,0.76vw,0.84rem)]
//                       leading-[1.3]
//                     "
//                   >
//                     <span className="font-semibold text-brand">
//                       2+ years
//                     </span>{" "}
//                     of experience building digital products across
//                     e-commerce, HRMS, billing, and business systems. I
//                     don&apos;t just build websites — I look at the business,
//                     the audience, and the problem behind them.
//                   </p>
//                 </div>

//                 {/* Explore */}
//                 <Link
//                   href="/projects"
//                   className="
//                     group
//                     flex
//                     min-w-[8.5rem]
//                     flex-col
//                     items-start
//                     justify-between
//                     p-3
//                     transition-colors
//                     duration-200
//                     hover:bg-brand

//                     lg:min-w-[10rem]
//                     lg:p-4
//                   "
//                   aria-label="Explore work"
//                 >
//                   <span
//                     className="
//                       type-label
//                       whitespace-nowrap
//                       text-[0.72rem]
//                       text-brand
//                       transition-colors
//                       group-hover:text-background

//                       lg:text-[0.78rem]
//                     "
//                   >
//                     Explore Work
//                   </span>

//                   <span
//                     className="
//                       self-end
//                       text-brand
//                       transition-colors
//                       group-hover:text-background
//                     "
//                   >
//                     <FiArrowUpRight
//                       aria-hidden="true"
//                       className="h-5 w-5"
//                       strokeWidth={1.5}
//                     />
//                   </span>
//                 </Link>
//               </div>

//               {/* Desktop Marquee */}
//               <div
//                 className="
//                   relative
//                   flex
//                   h-10
//                   min-h-10
//                   w-full
//                   items-center
//                   overflow-hidden
//                   border-t
//                   border-border
//                   font-mono
//                   text-[0.68rem]
//                   uppercase
//                   tracking-[0.08em]
//                   text-muted-foreground

//                   lg:text-[0.72rem]
//                 "
//               >
//                 <div
//                   ref={trackRef}
//                   className="
//                     flex
//                     w-max
//                     shrink-0
//                     items-center
//                     will-change-transform
//                   "
//                 >
//                   <MarqueeTrack ref={firstTrackRef} />
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

// /* ===============================================================
//    MARQUEE TRACK
// =============================================================== */

// import { forwardRef } from "react";

// const MarqueeTrack = forwardRef<
//   HTMLDivElement,
//   {
//     "aria-hidden"?: boolean;
//   }
// >(function MarqueeTrack({ "aria-hidden": ariaHidden }, ref) {
//   return (
//     <div
//       ref={ref}
//       className="
//         flex
//         shrink-0
//         items-center
//         gap-4
//         pr-4

//         sm:gap-5
//         sm:pr-5
//       "
//       aria-hidden={ariaHidden}
//       aria-label={ariaHidden ? undefined : "Capabilities"}
//     >
//       {SKILLS.map((item, i) => (
//         <span
//           key={`${item}-${i}`}
//           className="
//             flex
//             shrink-0
//             items-center
//             gap-4

//             sm:gap-5
//           "
//         >
//           <span className={i % 2 === 0 ? "text-brand" : undefined}>
//             {item}
//           </span>

//           <span aria-hidden="true">✦</span>
//         </span>
//       ))}
//     </div>
//   );
// });


"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, forwardRef } from "react";
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
  // Separate refs so mobile + desktop can both run
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const mobileFirstTrackRef = useRef<HTMLDivElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const desktopFirstTrackRef = useRef<HTMLDivElement>(null);

  const mobileTweenRef = useRef<gsap.core.Tween | null>(null);
  const desktopTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const setupMarquee = (
      track: HTMLDivElement | null,
      firstTrack: HTMLDivElement | null,
      tweenRef: React.MutableRefObject<gsap.core.Tween | null>
    ) => {
      if (!track || !firstTrack) return () => {};

      const run = () => {
        tweenRef.current?.kill();

        const width = firstTrack.getBoundingClientRect().width;
        if (!width) return;

        gsap.set(track, { x: 0 });

        tweenRef.current = gsap.to(track, {
          x: -width,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      };

      run();

      const observer = new ResizeObserver(run);
      observer.observe(firstTrack);

      return () => {
        tweenRef.current?.kill();
        observer.disconnect();
      };
    };

    const cleanMobile = setupMarquee(
      mobileTrackRef.current,
      mobileFirstTrackRef.current,
      mobileTweenRef
    );
    const cleanDesktop = setupMarquee(
      desktopTrackRef.current,
      desktopFirstTrackRef.current,
      desktopTweenRef
    );

    return () => {
      cleanMobile();
      cleanDesktop();
    };
  }, []);

  return (
    <section className="w-full min-w-0">
      <div
        className="
          relative
          h-[calc(100svh-var(--header-height)-0.75rem)]
          min-h-0
          w-full
          overflow-hidden
          border-b
          border-border
        "
      >
        {/* =====================================================
            MOBILE
            Separate flex layout
        ===================================================== */}
        <div
          className="
            flex
            h-full
            min-h-0
            w-full
            flex-col
            overflow-hidden
            md:hidden
          "
        >
          {/* Mobile Image */}
          <div
            className="
              relative
              flex
              min-h-0
              flex-1
              items-end
              justify-center
              overflow-hidden
              border-b
              border-border
              px-2
              pb-2
            "
          >
            <PageFrameDecor className="z-10" />

            <Image
              src="/images/profile.png"
              alt="Illustrated portrait of Chinmaya Kumar Das"
              width={460}
              height={540}
              priority
              className="
                relative
                z-0
                h-auto
                max-h-full
                w-[min(76vw,23rem)]
                max-w-full
                object-contain
                object-bottom
              "
            />
          </div>

          {/* Mobile Headline */}
          <div
            className="
              shrink-0
              border-b-2
              border-border
              px-3
              py-2
            "
          >
            <h1
              className="
                type-display
                w-full
                text-left
                text-[clamp(1.45rem,7vw,2.3rem)]
                font-semibold
                uppercase
                leading-[0.96]
                tracking-[-0.035em]
              "
            >
              Creative frontend developer
              <br />
              who helps businesses
              <br />
              get noticed online
            </h1>
          </div>

          {/* Mobile Description */}
          <div
            className="
              shrink-0
              border-b-2
              border-border
              px-3
              py-2
            "
          >
            <p
              className="
                text-[clamp(0.76rem,3.5vw,0.98rem)]
                leading-[1.3]
              "
            >
              <span className="font-semibold text-brand">2+ years</span> of
              experience building digital products across e-commerce, HRMS,
              billing, and business systems. I don&apos;t just build websites
              — I look at the business, the audience, and the problem behind
              them.
            </p>
          </div>

          {/* Mobile Explore */}
          <Link
            href="/projects"
            className="
              group
              flex
              shrink-0
              items-start
              justify-between
              border-b-2
              border-border
              px-3
              py-2
              transition-colors
              duration-200
              hover:bg-brand
            "
            aria-label="Explore work"
          >
            <span
              className="
                type-label
                text-[clamp(0.7rem,3vw,0.85rem)]
                text-brand
                transition-colors
                group-hover:text-background
              "
            >
              Explore Work
            </span>

            <FiArrowUpRight
              aria-hidden="true"
              className="
                h-5
                w-5
                shrink-0
                text-brand
                transition-colors
                group-hover:text-background
              "
              strokeWidth={1.5}
            />
          </Link>

          {/* ===================================================
              MOBILE MARQUEE
              Always visible
          =================================================== */}
          <div
            className="
              relative
              flex
              h-9
              min-h-9
              w-full
              shrink-0
              items-center
              overflow-hidden
              border-t
              border-border
              font-mono
              text-[0.58rem]
              uppercase
              tracking-[0.08em]
              text-muted-foreground
            "
          >
            <div
              ref={mobileTrackRef}
              className="
                flex
                w-max
                shrink-0
                items-center
                will-change-transform
              "
            >
              <MarqueeTrack ref={mobileFirstTrackRef} />
              <MarqueeTrack aria-hidden />
            </div>
          </div>
        </div>

        {/* =====================================================
            TABLET + DESKTOP
            Existing composition
        ===================================================== */}
        <div
          className="
            hidden
            h-full
            min-w-0
            grid-rows-[minmax(0,1fr)_clamp(9rem,18vh,11.5rem)]
            md:grid
          "
        >
          {/* Image */}
          <div
            className="
              relative
              flex
              min-h-0
              items-end
              justify-center
              overflow-hidden
              border-b
              border-border
              px-5
              pb-3
              pt-3
            "
          >
            <PageFrameDecor className="z-10" />

            <Image
              src="/images/profile.png"
              alt="Illustrated portrait of Chinmaya Kumar Das"
              width={460}
              height={540}
              priority
              className="
                relative
                z-0
                h-full
                w-[min(50vw,30rem)]
                max-w-lg
                object-contain
                object-bottom

                lg:w-[min(46vw,32rem)]
              "
            />
          </div>

          {/* Bottom */}
          <div
            className="
              grid
              min-h-0
              min-w-0
              md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]
            "
          >
            {/* Headline */}
            <div
              className="
                flex
                min-w-0
                items-start
                justify-start
                border-r-2
                border-border
                px-4
                py-3
                lg:px-5
              "
            >
              <h1
                className="
                  type-display
                  w-full
                  text-left
                  text-[clamp(1rem,1.85vw,2.05rem)]
                  font-semibold
                  uppercase
                  leading-[0.98]
                  tracking-[-0.035em]
                "
              >
                Creative frontend developer
                <br />
                who helps businesses
                <br />
                get noticed online
              </h1>
            </div>

            {/* Right */}
            <div
              className="
                grid
                min-w-0
                grid-rows-[minmax(0,1fr)_auto]
              "
            >
              {/* Description + Explore */}
              <div
                className="
                  grid
                  min-h-0
                  min-w-0
                  grid-cols-[minmax(0,1fr)_auto]
                  border-b-2
                  border-border
                "
              >
                {/* Description */}
                <div
                  className="
                    flex
                    min-w-0
                    items-start
                    justify-start
                    border-r-2
                    border-border
                    px-4
                    py-3
                    lg:px-5
                  "
                >
                  <p
                    className="
                      w-full
                      max-w-full
                      text-[clamp(0.65rem,0.76vw,0.84rem)]
                      leading-[1.3]
                    "
                  >
                    <span className="font-semibold text-brand">
                      2+ years
                    </span>{" "}
                    of experience building digital products across
                    e-commerce, HRMS, billing, and business systems. I
                    don&apos;t just build websites — I look at the business,
                    the audience, and the problem behind them.
                  </p>
                </div>

                {/* Explore */}
                <Link
                  href="/projects"
                  className="
                    group
                    flex
                    min-w-[8.5rem]
                    flex-col
                    items-start
                    justify-between
                    p-3
                    transition-colors
                    duration-200
                    hover:bg-brand

                    lg:min-w-[10rem]
                    lg:p-4
                  "
                  aria-label="Explore work"
                >
                  <span
                    className="
                      type-label
                      whitespace-nowrap
                      text-[0.72rem]
                      text-brand
                      transition-colors
                      group-hover:text-background

                      lg:text-[0.78rem]
                    "
                  >
                    Explore Work
                  </span>

                  <span
                    className="
                      self-end
                      text-brand
                      transition-colors
                      group-hover:text-background
                    "
                  >
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.5}
                    />
                  </span>
                </Link>
              </div>

              {/* Desktop Marquee */}
              <div
                className="
                  relative
                  flex
                  h-10
                  min-h-10
                  w-full
                  items-center
                  overflow-hidden
                  border-t
                  border-border
                  font-mono
                  text-[0.68rem]
                  uppercase
                  tracking-[0.08em]
                  text-muted-foreground

                  lg:text-[0.72rem]
                "
              >
                <div
                  ref={desktopTrackRef}
                  className="
                    flex
                    w-max
                    shrink-0
                    items-center
                    will-change-transform
                  "
                >
                  <MarqueeTrack ref={desktopFirstTrackRef} />
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

/* ===============================================================
   MARQUEE TRACK
=============================================================== */

const MarqueeTrack = forwardRef<
  HTMLDivElement,
  {
    "aria-hidden"?: boolean;
  }
>(function MarqueeTrack({ "aria-hidden": ariaHidden }, ref) {
  return (
    <div
      ref={ref}
      className="
        flex
        shrink-0
        items-center
        gap-4
        pr-4

        sm:gap-5
        sm:pr-5
      "
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : "Capabilities"}
    >
      {SKILLS.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="
            flex
            shrink-0
            items-center
            gap-4

            sm:gap-5
          "
        >
          <span className={i % 2 === 0 ? "text-brand" : undefined}>
            {item}
          </span>

          <span aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  );
});