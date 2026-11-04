
/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type ProjectCategory =
  | "landing-pages"
  | "ui-ux-design"
  | "custom-software";

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  headline: string;
  kicker?: string;

  category: ProjectCategory;

  year: string;
  client?: string;
  role: string;
  duration?: string;

  summary: string;
  tags: string[];

  /* Display controls */
  display: {
    featured: boolean;
    sections: {
      cover: boolean;
      gallery: boolean;
      overview: boolean;
      caseStudy: boolean;
      results: boolean;
    };
  };

  /* Media */
  cover?: ProjectMedia;
  gallery?: ProjectMedia[];

  /* Project information */
  overview?: {
    challenge?: string;
    solution?: string;
  };

  /* Optional case study */
  caseStudy?: {
    goals?: string[];
    approach?: string;
    outcome?: string;
  };

  /* Optional measurable results */
  results?: {
    value: string;
    label: string;
  }[];

  /* External links */
  links?: {
    live?: string;
    prototype?: string;
    github?: string;
  };

  /* SEO */
  seo: {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    noIndex?: boolean;
  };
};

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  /* ------------------------------------------------------------------------ */
  /* 01. Agency Marketing Website                                             */
  /* ------------------------------------------------------------------------ */

  {
    slug: "agency-marketing-site",

    title: "Creative Agency Marketing Site",
    headline: "A brand with presence",
    kicker: "Built for the digital world",

    category: "landing-pages",

    year: "2026",
    client: "Creative Agency",
    role: "Design + Front-end Development",
    duration: "4 weeks",

    summary:
      "A modern marketing website built around strong typography, visual storytelling and purposeful motion.",

    tags: ["Next.js", "GSAP", "CMS"],

    display: {
      featured: true,

      sections: {
        cover: true,
        gallery: true,
        overview: true,
        caseStudy: true,
        results: false,
      },
    },

    cover: {
      type: "image",
      src: "/projects/agency-marketing-site/cover.webp",
      alt: "Creative agency marketing website",
    },

    gallery: [
      {
        type: "image",
        src: "/projects/agency-marketing-site/homepage.webp",
        alt: "Website homepage",
      },
      {
        type: "image",
        src: "/projects/agency-marketing-site/mobile.webp",
        alt: "Mobile website design",
      },
      {
        type: "video",
        src: "/projects/agency-marketing-site/demo.mp4",
        poster: "/projects/agency-marketing-site/demo-poster.webp",
        caption: "Website interaction preview",
      },
    ],

    overview: {
      challenge:
        "The previous website did not communicate the quality of the agency's work.",

      solution:
        "Created a modern website with reusable case study templates, strong typography and purposeful animations.",
    },

    caseStudy: {
      goals: [
        "Improve brand presentation",
        "Showcase agency projects",
        "Create reusable content templates",
      ],

      approach:
        "Focused on typography, whitespace, responsive layouts and performance-conscious animations.",

      outcome:
        "A cleaner brand presence and a maintainable website experience.",
    },

    links: {
      live: "https://example.com",
    },

    seo: {
      title: "Creative Agency Website Design & Development",
      description:
        "Explore a creative agency marketing website designed and developed using Next.js, GSAP and reusable content templates.",

      keywords: [
        "Creative agency website",
        "Next.js development",
        "Website design",
      ],

      canonical:
        "https://chinmayakumardas.com/work/agency-marketing-site",

      ogImage: "/projects/agency-marketing-site/og-image.webp",

      noIndex: false,
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 02. Fintech Onboarding                                                   */
  /* ------------------------------------------------------------------------ */

  {
    slug: "fintech-onboarding",

    title: "Fintech Onboarding Flow",
    headline: "Sign-up without friction",
    kicker: "A better first experience",

    category: "ui-ux-design",

    year: "2025",
    client: "Fintech Product",
    role: "UI/UX Design + Front-end",
    duration: "6 weeks",

    summary:
      "A multi-step onboarding experience designed to make account creation simpler and more intuitive.",

    tags: ["React", "Figma", "Accessibility"],

    display: {
      featured: true,

      sections: {
        cover: true,
        gallery: true,
        overview: true,
        caseStudy: true,
        results: false,
      },
    },

    cover: {
      type: "image",
      src: "/projects/fintech-onboarding/cover.webp",
      alt: "Fintech onboarding interface",
    },

    gallery: [
      {
        type: "image",
        src: "/projects/fintech-onboarding/screen-01.webp",
        alt: "Onboarding welcome screen",
      },
      {
        type: "image",
        src: "/projects/fintech-onboarding/screen-02.webp",
        alt: "Account information form",
      },
    ],

    overview: {
      challenge:
        "Users abandoned account setup because forms felt long and confusing on mobile.",

      solution:
        "Introduced clear steps, progressive disclosure and improved validation feedback.",
    },

    caseStudy: {
      goals: [
        "Simplify account creation",
        "Improve mobile usability",
        "Improve accessibility",
      ],

      approach:
        "Mapped the onboarding journey, designed a clear interface and improved form interactions.",

      outcome:
        "A more understandable onboarding experience with consistent interface patterns.",
    },

    seo: {
      title: "Fintech Onboarding UI/UX Design Case Study",
      description:
        "Explore a fintech onboarding experience focused on accessible forms, intuitive user flows and improved mobile usability.",

      ogImage: "/projects/fintech-onboarding/og-image.webp",
      noIndex: false,
    },
  },

  /* ------------------------------------------------------------------------ */
  /* 03. Commerce Dashboard                                                   */
  /* ------------------------------------------------------------------------ */

  {
    slug: "commerce-dashboard",

    title: "Commerce Analytics Dashboard",
    headline: "Data you can trust",
    kicker: "Insights in real time",

    category: "custom-software",

    year: "2025",
    client: "E-commerce Team",
    role: "Front-end + Design System",
    duration: "8 weeks",

    summary:
      "An analytics dashboard with real-time charts, dark mode and a reusable component system.",

    tags: ["Next.js", "TypeScript", "Charts"],

    display: {
      featured: true,

      sections: {
        cover: true,
        gallery: true,
        overview: true,
        caseStudy: false,
        results: true,
      },
    },

    cover: {
      type: "image",
      src: "/projects/commerce-dashboard/cover.webp",
      alt: "Commerce analytics dashboard",
    },

    gallery: [
      {
        type: "image",
        src: "/projects/commerce-dashboard/dashboard.webp",
        alt: "Analytics dashboard",
      },
      {
        type: "video",
        src: "/projects/commerce-dashboard/demo.mp4",
        caption: "Dashboard interaction demo",
      },
    ],

    overview: {
      challenge:
        "Teams struggled to understand sales performance across different channels.",

      solution:
        "Built a modular analytics dashboard with clear data visualisation and reusable components.",
    },

    results: [
      {
        value: "3",
        label: "Products using the shared design system",
      },
    ],

    links: {
      github: "https://github.com/example",
    },

    seo: {
      title: "Commerce Analytics Dashboard Development",
      description:
        "Explore an analytics dashboard built with Next.js and TypeScript, featuring real-time charts and a reusable design system.",

      ogImage: "/projects/commerce-dashboard/og-image.webp",
      noIndex: false,
    },
  },
];

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/** Homepage projects */
export const featuredProjects = projects.filter(
  (project) => project.display.featured
);

/** Find project using its URL slug */
export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

/** Filter projects by category */
export const getProjectsByCategory = (category: ProjectCategory) =>
  projects.filter((project) => project.category === category);
