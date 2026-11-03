// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import { site } from "@/content/site";
// import { capabilities, works, worksFor, type Work } from "@/content/work";
// import { FlipText } from "@/components/common/FlipText";
// import { Reveal } from "@/components/gsap/Reveal";
// import { SplitReveal } from "@/components/gsap/SplitReveal";
// import { Section, SectionLabel } from "@/components/layout/Section";

// const pad = (n: number) => String(n).padStart(2, "0");

// /** One project = one row in a list. No boxes: dashed rules and type only. */
// function WorkRow({ work, number }: { work: Work; number: number }) {
//   const facts = [
//     { label: "Challenge", value: work.challenge },
//     { label: "What I built", value: work.build },
//     { label: "Result", value: work.outcome },
//   ];

//   return (
//     <Reveal
//       as="li"
//       y={24}
//       className="grid gap-x-10 gap-y-5 border-t border-dashed border-black/25 py-7 lg:grid-cols-[0.8fr_1.2fr] lg:py-9"
//     >
//       {/* left — identity */}
//       <div>
//         <p className="text-[13px] tracking-[-0.02em] text-[#6b6b6b]">
//           {pad(number)} <span aria-hidden>·</span> {work.year}
//         </p>
//         <h3 className="type-item mt-2">{work.title}</h3>
//         <p className="mt-1.5 text-[14px] tracking-[-0.02em] text-[#4a4a4a]">
//           {work.client} <span aria-hidden>·</span> {work.role}
//         </p>
//         <p className="mt-3 text-[13px] tracking-[-0.01em] text-[#6b6b6b]">{work.stack.join(" / ")}</p>

//         {work.url && (
//           <a
//             href={work.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium tracking-[-0.02em]"
//           >
//             <FlipText>Visit site</FlipText>
//             <ArrowUpRight className="size-3.5" aria-hidden />
//           </a>
//         )}
//       </div>

//       {/* right — the story */}
//       <div>
//         <p className="max-w-[46ch] text-[16px] font-medium leading-snug tracking-[-0.03em] text-[#0a0a0a]">
//           {work.summary}
//         </p>

//         <dl className="mt-5">
//           {facts.map((f) => (
//             <div
//               key={f.label}
//               className="grid gap-x-6 gap-y-1 border-t border-dashed border-black/15 py-3 sm:grid-cols-[7.5rem_1fr]"
//             >
//               <dt className="text-[13px] tracking-[-0.02em] text-[#6b6b6b]">{f.label}</dt>
//               <dd className="max-w-[56ch] text-[14px] leading-[1.55] tracking-[-0.015em] text-[#2a2a2a]">{f.value}</dd>
//             </div>
//           ))}
//           <div className="grid gap-x-6 gap-y-1 border-t border-dashed border-black/15 py-3 sm:grid-cols-[7.5rem_1fr]">
//             <dt className="text-[13px] tracking-[-0.02em] text-[#6b6b6b]">Delivered</dt>
//             <dd className="text-[14px] tracking-[-0.015em] text-[#2a2a2a]">
//               {work.deliverables.join(", ")} <span className="text-[#6b6b6b]">· {work.duration}</span>
//             </dd>
//           </div>
//         </dl>
//       </div>
//     </Reveal>
//   );
// }

// /** /work — intro + index, then one section per capability, then a closing call to action. */
// export function WorkSection() {
//   return (
//     <>
//       {/* ---------- intro + index ---------- */}
//       <Section id="work-page" labelledBy="work-title" tone="grey" className="lg:justify-center">
//         <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
//           <div>
//             <SectionLabel id="work-title">Work</SectionLabel>
//             <h1 className="type-mega mt-5 text-[clamp(2.75rem,6vw,5.5rem)]">
//               <SplitReveal text="Selected work." mode="rise" />
//             </h1>
//             <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.6] tracking-[-0.015em] text-[#4a4a4a]">
//               Grouped by what I did. Every project shows the problem, what I built and the result.
//             </p>
//           </div>

//           <nav aria-label="Work by service">
//             <ul>
//               {capabilities.map((c) => (
//                 <li key={c.id}>
//                   <a
//                     href={`#${c.id}`}
//                     className="flex items-baseline justify-between gap-4 border-t border-dashed border-black/25 py-3.5"
//                   >
//                     <span className="text-[clamp(1rem,1.5vw,1.375rem)] font-medium tracking-[-0.04em]">
//                       <FlipText>{`${c.index} ${c.title}`}</FlipText>
//                     </span>
//                     <span className="text-[13px] tracking-[-0.02em] text-[#6b6b6b]">
//                       {worksFor(c.id).length} {worksFor(c.id).length === 1 ? "project" : "projects"}
//                     </span>
//                   </a>
//                 </li>
//               ))}
//               <li className="border-t border-dashed border-black/25 pt-3.5 text-[13px] tracking-[-0.02em] text-[#6b6b6b]">
//                 {works.length} projects in total
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </Section>

//       {/* ---------- one section per capability ---------- */}
//       {capabilities.map((c) => {
//         const items = worksFor(c.id);
//         if (items.length === 0) return null;

//         return (
//           <Section key={c.id} id={c.id} labelledBy={`${c.id}-title`} tone="white">
//             <div className="grid gap-x-10 gap-y-4 pb-6 lg:grid-cols-[0.8fr_1.2fr] lg:pb-8">
//               <div>
//                 <p className="text-[13px] tracking-[-0.02em] text-[#6b6b6b]">{c.index}</p>
//                 <SectionLabel id={`${c.id}-title`}>{c.title}</SectionLabel>
//               </div>
//               <p className="max-w-[46ch] text-[15px] leading-[1.6] tracking-[-0.015em] text-[#4a4a4a]">
//                 {c.text} <span className="text-[#6b6b6b]">Typical time: {c.time}.</span>
//               </p>
//             </div>

//             <ol>
//               {items.map((w, i) => (
//                 <WorkRow key={w.slug} work={w} number={i + 1} />
//               ))}
//             </ol>
//           </Section>
//         );
//       })}

//       {/* ---------- closing call to action ---------- */}
//       <Section id="work-cta" labelledBy="work-cta-title" tone="dark">
//         <h2 id="work-cta-title" className="sr-only">
//           Start a project
//         </h2>
//         <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
//           <p className="type-statement max-w-[20ch]">
//             <SplitReveal text="Have something like this in mind?" />
//           </p>
//           <Link href={site.letstalk.href} className="cta bg-white text-[#0a0a0a]">
//             <FlipText>{site.letstalk.label}</FlipText>
//           </Link>
//         </div>
//       </Section>
//     </>
//   );
// }


import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { works, type Work } from "@/content/work";
import { Reveal } from "@/components/gsap/Reveal";
import { SplitReveal } from "@/components/gsap/SplitReveal";
import { Section, SectionLabel } from "@/components/layout/Section";

const pad = (n: number) => String(n).padStart(2, "0");

/** One project = one row in the work index. */

function WorkRow({ work, number }: { work: Work; number: number }) {
  return (
    <Reveal
      as="li"
      y={24}
      className="border-t border-dashed border-black/25"
    >
      <Link
        href={`/work/${work.slug}`}
        aria-label={`View ${work.title} project`}
        className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 sm:py-7"
      >
        <span className="text-[13px] tracking-[-0.02em] text-[#6b6b6b]">
          {pad(number)}
        </span>

        <div>
          <h2 className="type-item transition-opacity group-hover:opacity-60">
            {work.title}
          </h2>

          <p className="mt-1.5 text-[14px] tracking-[-0.02em] text-[#6b6b6b]">
            {work.client} <span aria-hidden>·</span> {work.year}
          </p>
        </div>

        <span className="flex size-10 items-center justify-center rounded-full border border-black/15 transition-colors group-hover:bg-black group-hover:text-white">
          <ArrowUpRight className="size-4" aria-hidden />
        </span>
      </Link>
    </Reveal>
  );
}


/** /work — introduction and complete project index. */
export function WorkSection() {
  return (
    <Section
      id="work-page"
      labelledBy="work-title"
      tone="grey"
      className="lg:justify-center"
    >
      <div>
        <SectionLabel id="work-title">Work</SectionLabel>

        <h1 className="type-mega mt-5 text-[clamp(2.75rem,6vw,5.5rem)]">
          <SplitReveal text="Selected work." mode="rise" />
        </h1>
      </div>

      <ol className="mt-12">
        {works.map((work, index) => (
          <WorkRow
            key={work.slug}
            work={work}
            number={index + 1}
          />
        ))}

      
      </ol>
    </Section>
  );
}
