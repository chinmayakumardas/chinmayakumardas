import { urls } from "./urls";

export const site = {
  name: "Chinmaya Kumar Das",
  title: "Front-End Developer & Digital Experience Designer",
  shortTitle: "Frontend Developer & Designer",
  description:
    "I combine design thinking and front-end development to create digital experiences that are visually clear, intuitive, functional, and aligned with business goals.",
  url: urls.website,
  email: "hello@chinmayakumardas.com",
  location: "India · Remote-friendly",
  availability: "Open to roles, collaborations & freelance",

  nav: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],

  social: urls.social,

  capabilities: [
    {
      title: "Website Design",
      description: "Clear, conversion-focused layouts with strong visual hierarchy.",
    },
    {
      title: "UI / UX Design",
      description: "Interfaces that feel intuitive and reduce friction for users.",
    },
    {
      title: "Design Systems",
      description: "Token-driven components teams can reuse and scale.",
    },
    {
      title: "Front-End Development",
      description: "React, Next.js, TypeScript — performant and maintainable code.",
    },
    {
      title: "Responsive Development",
      description: "Experiences that work cleanly across devices and breakpoints.",
    },
    {
      title: "Interactive Experiences",
      description: "Purposeful motion that guides attention without distraction.",
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

export type Project = (typeof site.projects)[number];
