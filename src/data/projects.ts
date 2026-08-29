import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-one",

    title: "Project One",

    description:
      "A modern web application built with a focus on performance, interaction, and user experience.",

    image: "/projects/project-one.webp",

    technologies: [
      "Next.js",
      "TypeScript",
      "React",
    ],

    liveUrl: "https://example.com",

    githubUrl: "https://github.com/",

    featured: true,
  },

  {
    id: "project-two",

    title: "Project Two",

    description:
      "An interactive digital experience combining modern frontend development and animation.",

    image: "/projects/project-two.webp",

    technologies: [
      "React",
      "TypeScript",
      "GSAP",
    ],

    liveUrl: "https://example.com",

    featured: false,
  },
];