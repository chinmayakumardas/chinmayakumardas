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
    },
    {
      index: "02",
      title: "UI/UX Design",
      text: "Clear flows and polished interfaces, designed in Figma and ready to build.",
    },
    {
      index: "03",
      title: "Custom Software Development",
      text: "Web apps, dashboards and internal tools built with Next.js, React and TypeScript.",
    },
  ],

  approach: [
    {
      index: "01",
      title: "Discover",
      text: "We talk goals, users and scope, so we build the right thing first.",
    },
    {
      index: "02",
      title: "Design",
      text: "Wireframes and polished UI, reviewed with you before a line of code.",
    },
    {
      index: "03",
      title: "Build",
      text: "Clean, accessible, responsive front-end with modern, maintainable code.",
    },
    {
      index: "04",
      title: "Launch",
      text: "Testing, performance tuning, deployment and support after go-live.",
    },
  ],

  projects: [
    {
      slug: "commerce-dashboard",
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
