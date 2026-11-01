import { site } from "./site";

export type MenuLink = { label: string; href: string };
export type MenuItem = MenuLink & { children?: MenuLink[] };

/** Drop-down menu — same five pages as the main nav, each broken into 2–3 sub links. */
export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "My story", href: "/about" },
      { label: "How I work", href: "/#approach" },
    ],
  },
  {
    label: "Work",
    href: "/#work",
    children: [
      { label: "Recent projects", href: "/#work" },
      { label: "All work", href: "/work" },
    ],
  },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Landing Pages", href: "/#services" },
      { label: "UI/UX Design", href: "/#services" },
      { label: "Custom Software", href: "/#services" },
    ],
  },
  {
    label: "Contact",
    href: "/#contact",
    children: [
      { label: "Book a 1:1 call", href: site.bookCall.href },
      { label: "Email me", href: `mailto:${site.email}` },
      { label: "WhatsApp", href: site.whatsapp },
    ],
  },
];
