import { site } from "./site";

/**
 * WORK — one place for every project shown on /work.
 *
 * Add a project: copy an object in `works`, change the fields, set `capability`
 * to one of the three ids below. The page groups and numbers them automatically.
 *
 * NOTE: these entries are SAMPLES (the first three mirror `site.projects`).
 * Replace them with real projects; add `url` only when a live link exists.
 */

/* ------------------------------------------------------------------ */
/* Capabilities — the three things you sell. Copy comes from site.ts.  */
/* ------------------------------------------------------------------ */

const [landing, design, software] = site.services;

export const capabilities = [
  { id: "landing-pages", index: landing.index, title: landing.title, text: landing.text, time: landing.time },
  { id: "ui-ux-design", index: design.index, title: design.title, text: design.text, time: design.time },
  { id: "custom-software", index: software.index, title: software.title, text: software.text, time: software.time },
] as const;

export type CapabilityId = (typeof capabilities)[number]["id"];

/* ------------------------------------------------------------------ */
/* Work                                                                */
/* ------------------------------------------------------------------ */

export type Work = {
  /** url-safe id, unique — reserved for /work/[slug] later */
  slug: string;
  title: string;
  capability: CapabilityId;
  year: string;
  /** sector or client name */
  client: string;
  /** what you did on the project */
  role: string;
  /** how long it took, e.g. "2 weeks" */
  duration: string;
  /** one sentence: what it is */
  summary: string;
  /** the problem */
  challenge: string;
  /** what you built / designed */
  build: string;
  /** what changed afterwards — add real numbers when you have them */
  outcome: string;
  stack: string[];
  deliverables: string[];
  /** live site, optional */
  url?: string;
};

export const works: Work[] = [
  /* ---------- Landing pages ---------- */
  {
    slug: "agency-marketing-site",
    title: "Creative Agency Marketing Site",
    capability: "landing-pages",
    year: "2023",
    client: "Creative agency",
    role: "Design + front-end",
    duration: "4 weeks",
    summary: "A marketing site with strong typography, scroll-driven storytelling and a CMS-backed case study system.",
    challenge: "The previous site undersold the agency’s work and felt dated next to its competitors.",
    build:
      "Led with typography and whitespace, built reusable case-study templates, and used motion on project reveals without hurting performance.",
    outcome: "A cleaner brand presence and a content system the team can update without a developer.",
    stack: ["Next.js", "GSAP", "CMS"],
    deliverables: ["Site design", "Case-study templates", "CMS setup"],
  },
  {
    slug: "product-launch-page",
    title: "Product Launch Landing Page",
    capability: "landing-pages",
    year: "2025",
    client: "Software startup",
    role: "Design + front-end",
    duration: "1 week",
    summary: "A single-page launch site with one clear action: join the waitlist.",
    challenge: "The team needed a page live before launch day, with a message that fits in one screen on a phone.",
    build:
      "Wrote the page structure around one call to action, designed every screen size in Figma, then built it in Next.js with optimised images.",
    outcome: "Live on schedule, fast on mobile, and easy for the team to change copy without touching code.",
    stack: ["Next.js", "Tailwind CSS", "SEO"],
    deliverables: ["Landing page", "Waitlist form", "SEO basics"],
  },

  /* ---------- UI/UX design ---------- */
  {
    slug: "fintech-onboarding",
    title: "Fintech Onboarding Flow",
    capability: "ui-ux-design",
    year: "2024",
    client: "Fintech product",
    role: "Lead front-end",
    duration: "6 weeks",
    summary: "A multi-step onboarding flow redesigned for clarity, less drop-off and WCAG AA accessibility.",
    challenge: "Many people abandoned account setup. The forms felt long, confusing and unfriendly on mobile.",
    build:
      "Split the flow into clear steps, added progressive disclosure and better validation messages, and audited every control for keyboard and screen-reader use.",
    outcome: "Higher completion rates and a more confident first impression for new users.",
    stack: ["React", "Figma", "Accessibility"],
    deliverables: ["User flow", "Prototype", "UI kit", "Accessibility audit"],
  },
  {
    slug: "booking-app-design",
    title: "Mobile Booking App Design",
    capability: "ui-ux-design",
    year: "2025",
    client: "Local services",
    role: "UI/UX design",
    duration: "3 weeks",
    summary: "An app design for booking a service in three taps, handed over ready to build.",
    challenge: "Customers called to book because the existing booking page took too many steps.",
    build:
      "Mapped the shortest path from home screen to confirmed booking, tested a clickable prototype, then finished the screens and a small design system.",
    outcome: "A tested design with every state covered, so developers can build without guessing.",
    stack: ["Figma", "Prototype", "Design system"],
    deliverables: ["User flow", "Clickable prototype", "Design system", "Developer handoff"],
  },

  /* ---------- Custom software ---------- */
  {
    slug: "commerce-dashboard",
    title: "Commerce Analytics Dashboard",
    capability: "custom-software",
    year: "2025",
    client: "E-commerce team",
    role: "Front-end + design system",
    duration: "8 weeks",
    summary: "An analytics product with real-time charts, dark mode and a documented component library.",
    challenge: "Teams couldn’t see how sales performed across channels. The existing tools were slow and hard to trust.",
    build:
      "Defined colour and spacing tokens, built a modular dashboard in Next.js, and tuned data density and keyboard navigation.",
    outcome: "Faster decisions for operators and one shared system that reduced UI inconsistency across three products.",
    stack: ["Next.js", "TypeScript", "Design system"],
    deliverables: ["Dashboard", "Component library", "Dark mode"],
  },
  {
    slug: "inventory-tool",
    title: "Internal Inventory Tool",
    capability: "custom-software",
    year: "2024",
    client: "Small retailer",
    role: "Full-stack",
    duration: "5 weeks",
    summary: "A web tool that replaced a shared spreadsheet for tracking stock and reorders.",
    challenge: "Stock counts lived in a spreadsheet that several people edited at once, so numbers were often wrong.",
    build:
      "Built a simple app with roles, a stock history log and low-stock alerts, using the same screens the team already knew.",
    outcome: "One reliable source of stock numbers and no more overwritten spreadsheet cells.",
    stack: ["React", "TypeScript", "Node.js"],
    deliverables: ["Web app", "User roles", "Stock history", "Alerts"],
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export const worksFor = (id: CapabilityId) => works.filter((w) => w.capability === id);
