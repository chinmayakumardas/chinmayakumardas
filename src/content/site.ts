import { urls } from "./urls";

const email = "chinmayakumardas07@gmail.com";

export const site = {
  name: "Chinmaya Kumar",
  handle: "chinmayakumardas",
  role: "Creative Front-End Developer",
  shortTitle: "Creative Front-End Developer",
  description:
    "Chinmaya Kumar is a creative front-end developer in Bhubaneswar, India — landing pages, UI/UX design and custom software for brands that want to grow.",
  url: "https://chinmayakumardas.com",
  email,
  phone: "+91 6370073215",
  phoneHref: "tel:+916370073215",
  whatsapp: "https://wa.me/916370073215",
  location: "Bhubaneswar, India",
  availability: "Available for new projects",
  year: 2026,

  /** Primary call-to-action (replaces "Request a Quote").
   *  Swap `href` for a Calendly / Cal.com link whenever you have one. */
 letstalk: {
  label: "Lets talk",
  shortLabel: "Lets talk",
  href: "/contact",
},

  /** Only these five. Work / Services / Contact scroll to their home sections
   *  for now — point them at /work, /services, /contact when those pages exist. */
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
  ],

  social: urls.social,

  offers: ["Landing Pages", "UI/UX Design", "Custom Software"],

  services: [
    {
      index: "01",
      title: "Landing Pages",
      text: "Fast, responsive, conversion-focused pages that turn visitors into customers.",
      tags: ["Next.js", "GSAP", "SEO"],
      time: "1–2 weeks",
    },
    {
      index: "02",
      title: "UI/UX Design",
      text: "Clear flows and polished interfaces, designed in Figma and ready to build.",
      tags: ["Figma", "Prototype", "Design system"],
      time: "1–3 weeks",
    },
    {
      index: "03",
      title: "Custom Software Development",
      text: "Web apps, dashboards and internal tools built with Next.js, React and TypeScript.",
      tags: ["React", "TypeScript", "Dashboards"],
      time: "4+ weeks",
    },
  ],

  /** "What people come to me with" — dark scroller */
  needs: [
    { index: "01", quote: "\u201CMy site is slow and loses visitors\u201D", text: "I rebuild it on Next.js with optimised images and clean code, so pages load fast on any phone." },
    { index: "02", quote: "\u201CWe have a site, but it\u2019s outdated\u201D", text: "I keep what works, redesign what doesn\u2019t, and launch a modern site that fits your brand today." },
    { index: "03", quote: "\u201COur current site brings no leads\u201D", text: "I find the step where you lose people and rebuild the page around one clear action." },
    { index: "04", quote: "\u201CI need a landing page, fast\u201D", text: "A focused one-page site with motion and a clear offer, designed and live in one to two weeks." },
  ],

  pricing: [
    { title: "Website audit", text: "A review of your current site: speed, UX and conversion, with a clear list of what to fix first.", time: "2\u20133 days", price: "from \u20B93,000" },
    { title: "Landing page", text: "A single page built for one goal: structure, design, animation and a layout for every screen.", time: "1\u20132 weeks", price: "from \u20B912,000" },
    { title: "Corporate website", text: "A multi-page company site: services, case studies, team and a simple way for you to update it.", time: "3\u20135 weeks", price: "from \u20B930,000" },
    { title: "UI/UX design in Figma", text: "A unique design made from scratch: structure, style and a layout ready for development.", time: "1\u20133 weeks", price: "from \u20B910,000" },
    { title: "Custom software", text: "Web apps, dashboards and internal tools built with Next.js, React and TypeScript.", time: "4+ weeks", price: "On request" },
  ],

  approach: {
    statement: [
      "Goals first, pixels second.",
      "A pretty page won\u2019t solve the problem you came with.",
      "So I never start with design.",
    ],
    phases: [
      {
        index: "01",
        label: "start",
        steps: [
          {
            title: "Getting to know you",
            text: "We go through the project, business goals and what you expect from the site",
          },
          {
            title: "Research",
            text: "I study the niche, the competitors and the people who buy from you",
          },
        ],
      },
      {
        index: "02",
        label: "design",
        steps: [
          {
            title: "Structure and UX",
            text: "I map out the structure and the visitor\u2019s path, then build a prototype",
          },
          {
            title: "Visual concept",
            text: "I show 2\u20133 style options on the key screens and we pick the best one together",
          },
          {
            title: "UI design",
            text: "I take the Figma layouts to final, down to the smallest detail",
          },
        ],
      },
      {
        index: "03",
        label: "build and launch",
        steps: [
          {
            title: "Build",
            text: "I turn the design into clean Next.js and React code, add motion and wire everything up",
          },
          {
            title: "Testing and polish",
            text: "I test every page and screen size, fix what\u2019s off and fine-tune the details",
          },
          {
            title: "Launch and support",
            text: "I launch the site, hand over a guide and stay in touch",
          },
        ],
      },
    ],
  },

  projects: [
    {
      slug: "commerce-dashboard",
      headline: "Data you can trust",
      kicker: "in real time",
      title: "Commerce Analytics Dashboard",
      year: "2025",
      role: "Frontend + Design System",
      summary:
        "A high-performance analytics product with real-time charts, dark mode, and a documented component library used across the company.",
      tags: ["Next.js", "TypeScript", "Design System"],
      problem:
        "Teams struggled to understand sales performance across channels. Existing tools were slow, inconsistent, and hard to trust.",
      goals: [
        "Deliver real-time visibility into key metrics",
        "Establish a shared design system for the product suite",
        "Ship an accessible, dark-mode-first experience",
      ],
      approach:
        "Designed a modular card-based layout, defined tokens for color and spacing, and built the interface in Next.js with careful attention to data density and keyboard navigation.",
      outcome:
        "Faster decision-making for operators and a reusable system that reduced UI inconsistency across three products.",
    },
    {
      slug: "fintech-onboarding",
      headline: "Sign-up without drop-off",
      kicker: "on mobile",
      title: "Fintech Onboarding Flow",
      year: "2024",
      role: "Lead Frontend",
      summary:
        "A multi-step onboarding experience redesigned for clarity, reduced drop-off, and full WCAG AA compliance.",
      tags: ["React", "Accessibility", "Conversion"],
      problem:
        "High abandonment during account setup. Forms felt long, confusing, and unfriendly on mobile.",
      goals: [
        "Reduce time-to-complete",
        "Improve mobile completion rates",
        "Meet accessibility standards",
      ],
      approach:
        "Broke the flow into clear steps, added progressive disclosure, improved validation feedback, and audited every interactive element for keyboard and screen-reader support.",
      outcome:
        "Noticeably higher completion rates and a more confident first impression for new users.",
    },
    {
      slug: "agency-marketing-site",
      headline: "A brand with presence",
      kicker: "on the web",
      title: "Creative Agency Marketing Site",
      year: "2023",
      role: "Full Frontend",
      summary:
        "A marketing site with strong typography, scroll-driven storytelling, and a CMS-backed case study system.",
      tags: ["Next.js", "CMS", "Motion"],
      problem:
        "The previous site underrepresented the agency's work and felt dated compared to competitors.",
      goals: [
        "Showcase work with visual impact",
        "Make case studies easy to update",
        "Improve perceived quality of the brand",
      ],
      approach:
        "Led with typography and whitespace, built modular case study templates, and used purposeful motion on project reveals without sacrificing performance.",
      outcome:
        "A cleaner brand presence and a content system the team could maintain without developer help.",
    },
  ],
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "GitHub", href: site.social.github },
  { label: "Instagram", href: site.social.instagram },
  { label: "Twitter/X", href: site.social.x },
] as const;

export type Project = (typeof site.projects)[number];
