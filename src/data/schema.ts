import { siteConfig } from "@/data/site";
import { socials } from "@/data/social";

import type {
  PersonSchema,
  WebsiteSchema,
} from "@/types/schema";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

export const personSchema: PersonSchema = {
  "@context": "https://schema.org",

  "@type": "Person",

  "@id": personId,

  name: siteConfig.name,

  givenName: "Chinmaya",

  familyName: "Das",

  url: siteConfig.url,

  image: `${siteConfig.url}${siteConfig.image}`,

  jobTitle: siteConfig.role,

  description: siteConfig.description,

  sameAs: socials.map((social) => social.href),

  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "GSAP",
    "Motion",
    "React Three Fiber",
    "Three.js",
    "Artificial Intelligence",
    "Generative AI",
    "LLMs",
    "AI Agents",
    "Automation",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
  ],
};

export const websiteSchema: WebsiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": websiteId,

  name: siteConfig.name,

  url: siteConfig.url,

  description: siteConfig.description,

  inLanguage: siteConfig.locale,

  publisher: {
    "@id": personId,
  },

  author: {
    "@id": personId,
  },

  mainEntity: {
    "@id": personId,
  },

  copyrightHolder: {
    "@id": personId,
  },
};