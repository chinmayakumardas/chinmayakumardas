export const site = {
  name: "Qubesys",
  title: "Websites, Apps & Digital Systems",
  shortTitle: "Digital & Social, Under One Roof",
  description:
    "We develop the websites, apps, and systems for your business. Digital and social, under one roof.",
  url: "https://qubesys.com",
  email: "help@qubesys.com",
  location: "Available for Dubai",
  availability: "Serving customers since 18 years",

  nav: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Apps" },
    { href: "/about", label: "Services" },
    { href: "/work", label: "Customers" },
    { href: "/about", label: "Partner" },
    { href: "/contact", label: "Blog" },
  ],

  social: {
    x: "https://twitter.com/qubesys",
    instagram: "https://www.instagram.com/qubesys",
    linkedin: "https://www.linkedin.com/company/qubesys",
  },

  stats: [
    { value: "18+", label: "Years of Experience" },
    { value: "1M+", label: "followers online" },
    { value: "34+", label: "Countries customers served" },
    { value: "97%", label: "Customer satisfaction rate" },
    { value: "340+", label: "Projects completed" },
  ],

  services: [
    { title: "Websites & Apps", index: "1" },
    { title: "CRM & ERPs", index: "2" },
    { title: "Content Creation", index: "3" },
    { title: "Strategy & Consulting", index: "4" },
  ],

  testimonials: [
    {
      quote:
        "Truly miracle. Did an outstanding job immediately after discussion. And the quality, simply perfect.",
      name: "Steven Goh",
      role: "IT Manager, Canon Singapore",
      rating: 5,
    },
    {
      quote:
        "From the first discussion to launch, the work was organized and dependable. The final site reflects our company much better.",
      name: "Glen Dunn",
      role: "BB Exports LLC",
      rating: 5,
    },
    {
      quote:
        "Working with QubeSys Team is like having your own personal programmer looking out for me. It's terrific!",
      name: "Brett Guff",
      role: "Head Correspondent, Economic Times",
      rating: 5,
    },
  ],

  blogs: [
    {
      date: "Sep 15, 2026",
      title: "All in One Social Content Creator & Auto Poster to all Social Media Channels",
      excerpt:
        "Turn one long video into branded short-form clips, then schedule them across every channel from one workflow.",
      slug: "social-content-creator",
    },
    {
      date: "Jul 15, 2026",
      title: "SocioFit is Coming Soon to Android and iOS",
      excerpt:
        "SocioFit turns your workouts into clean, shareable stickers with real numbers, your city, and the moment it happened.",
      slug: "sociofit-coming-soon",
    },
    {
      date: "Jun 26, 2026",
      title: "Personal Branding for Business Owners: Why It Matters Now",
      excerpt:
        "Customers trust people more than logos. Here's why building your personal brand as an owner drives real growth for your business.",
      slug: "personal-branding",
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
