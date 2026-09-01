// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";

// export default function Home() {
//   return (
//     <main>
//       <section className="min-h-screen">
//         <div className="container-portfolio flex min-h-screen flex-col">

      

//           {/* Hero */}
//           <div className="grid flex-1 items-end gap-12 pb-8 pt-20 md:grid-cols-12 md:pb-12 md:pt-24">

//             {/* Typography */}
//             <div className="md:col-span-8">
//               <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
//                 AI Engineer / Full Stack Developer
//               </p>

//               <h1 className="max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em]">
//                 AI Building digital
//                 <br />
//                 experiences
//                 <br />
//                 with intelligence.
//               </h1>

//               <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
//                 <p className="max-w-md text-small leading-relaxed text-muted-foreground ">
//                   I design and build intelligent products, scalable web
//                   applications, and thoughtful digital experiences.
//                 </p>

//                 <a
//                   href="/projects"
//                   className="group inline-flex w-fit items-center gap-2 text-sm font-medium"
//                 >
//                   View selected work
//                   <ArrowUpRight
//                     className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                     aria-hidden="true"
//                   />
//                 </a>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="md:col-span-4 md:pb-2">
//               <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted">
//                 <Image
//                   src="/images/hero.jpg"
//                   alt="Chinmaya Kumar Das"
//                   fill
//                   priority
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }


import { Hero } from "@/components/sections/home/hero";

export default function Home() {
  return <Hero />;
}