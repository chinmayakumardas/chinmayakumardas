
// "use client";

// import { useEffect } from "react";
// import Link from "next/link";
// import Cal, { getCalApi } from "@calcom/embed-react";
// import { motion } from "motion/react";
// import { ArrowUpRight } from "lucide-react";
// import { site } from "@/content/site";
// import { FlipText } from "@/components/common/FlipText";

// const CAL_NAMESPACE = "15min";

// function WhatsAppIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       aria-hidden="true"
//       className={className}
//       fill="currentColor"
//     >
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//     </svg>
//   );
// }

// export function ContactCTA() {
//   useEffect(() => {
//     let active = true;

//     (async () => {
//       const cal = await getCalApi({ namespace: CAL_NAMESPACE });

//       if (!active) return;

//       cal("ui", {
//         hideEventTypeDetails: true,
//         layout: "month_view",
//         theme: "light",
//       });
//     })();

//     return () => {
//       active = false;
//     };
//   }, []);

//   return (
//     <section
//       id="contact"
//       aria-label="Get in touch"
//       className="w-full scroll-mt-12 px-[var(--page-x)] py-5 lg:pb-14"
//     >
//       <motion.div
//         className="rounded-[1.75rem] bg-[#ececef] px-6 py-10 sm:rounded-[2.25rem] sm:px-10 sm:py-12 lg:rounded-[2.5rem] lg:py-14"
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-8%" }}
//         transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//       >
//         <div className="mx-auto grid max-w-[1100px] items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
//           {/* LEFT CONTENT */}
//           <div className="flex flex-col justify-center">
//             <p className="text-[12px] font-medium text-[#858585] sm:text-[13px]">
//               / Get in touch
//             </p>

//             <h2 className="mt-4 max-w-[16ch] font-heading text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.045em] text-[#0a0a0a]">
//               Let&apos;s connect.
//             </h2>

//             <p className="mt-5 max-w-[34ch] text-[13px] leading-[1.75] text-[#666] sm:text-[14px]">
//               Have a project, collaboration or opportunity in mind?
//               I&apos;d love to hear from you. Let&apos;s create something
//               meaningful together.
//             </p>

//             <div className="mt-7">
//               <Link
//                 href="/contact"
//                 className="inline-flex h-10 items-center gap-2 rounded-full bg-[#0a0a0a] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#292929] sm:h-11"
//               >
//                 <FlipText>Contact me</FlipText>
//                 <ArrowUpRight size={14} />
//               </Link>
//             </div>

//             <div className="mt-7 flex flex-wrap items-center gap-2 text-[12px] text-[#777] sm:mt-9 sm:text-[13px]">
//               <span>Message me on WhatsApp for a quick response</span>

//               <a
//                 href={site.whatsapp}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Chat on WhatsApp"
//                 className="inline-flex size-6 items-center justify-center rounded-md bg-[#25D366] text-white transition-transform hover:scale-110"
//               >
//                 <WhatsAppIcon className="size-3.5" />
//               </a>
//             </div>
//           </div>

//           {/* RIGHT CALENDAR */}
//           <div className="relative h-[460px] min-w-0 overflow-hidden rounded-[1.25rem] bg-white sm:h-[490px] lg:h-[510px]">
//             <Cal
//               namespace={CAL_NAMESPACE}
//               calLink="itschinmay/15min"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 overflow: "auto",
//               }}
//               config={{
//                 layout: "month_view",
//                 useSlotsViewOnSmallScreen: "true",
//                 theme: "light",
//               }}
//             />
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


"use client";

import { useEffect } from "react";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { FlipText } from "@/components/common/FlipText";

const CAL_NAMESPACE = "15min";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M27.2 15.5a11.2 11.2 0 0 1-16.6 9.8L4 27l1.8-6.4A11.2 11.2 0 1 1 27.2 15.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2 10.5c.3-.7.7-.7 1-.7h.8c.3 0 .5.1.7.5l1.2 2.8c.1.3.1.5-.1.8l-.9 1.1c-.2.2-.2.4 0 .7.8 1.4 1.9 2.5 3.3 3.3.3.2.5.2.7-.1l1.1-1.3c.2-.3.5-.3.8-.2l2.6 1.2c.3.2.5.3.5.6 0 .4-.2 1.7-1.2 2.4-.8.6-1.8.9-3 .6-1.2-.3-2.8-.9-4.8-2.7-1.6-1.4-2.7-3.1-3-4.4-.4-1.3-.1-2.7.3-3.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ContactCTA() {
  useEffect(() => {
    let active = true;

    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });

      if (!active) return;

      cal("ui", {
        hideEventTypeDetails: true,
        layout: "month_view",
        theme: "light",
      });
    })();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="contact"
      aria-label="Get in touch"
      className="w-full scroll-mt-12 px-[var(--page-x)] py-5 lg:pb-14"
    >
      <motion.div
        className="rounded-[1.75rem] bg-[#ececef] px-6 py-10 sm:rounded-[2.25rem] sm:px-10 sm:py-12 lg:rounded-[2.5rem] lg:py-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="mx-auto grid max-w-[1100px] items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <h2 className="max-w-[16ch] font-heading text-[clamp(2.2rem,4.3vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.045em] text-[#0a0a0a]">
              Let&apos;s connect.
            </h2>

            <p className="mt-5 max-w-[36ch] text-[14px] leading-[1.8] text-[#666] sm:text-[15px]">
              Have a project, collaboration or opportunity in mind?
              I&apos;d love to hear from you. Let&apos;s create something
              meaningful together.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0a0a0a] px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#292929]"
              >
                <FlipText>Contact me</FlipText>
                <ArrowUpRight size={15} />
              </Link>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-[#111] px-5 text-[14px] font-medium text-[#111] transition-colors hover:bg-white/60"
              >
                <WhatsAppIcon className="size-7 shrink-0 text-[#25D366]" />
                <span>Message me for a quick response</span>
              </a>
            </div>
          </div>

          {/* RIGHT CALENDAR */}
          <div className="relative h-[460px] min-w-0 overflow-hidden rounded-[1.25rem] bg-white sm:h-[490px] lg:h-[510px]">
            <Cal
              namespace={CAL_NAMESPACE}
              calLink="itschinmay/15min"
              style={{
                width: "100%",
                height: "100%",
                overflow: "auto",
              }}
              config={{
                layout: "month_view",
                useSlotsViewOnSmallScreen: "true",
                theme: "light",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
