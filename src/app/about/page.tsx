import { PortfolioPage } from "@/components/ui/portfolio-page";

export default function Home() {
  return (
    <PortfolioPage
      eyebrow="About / the person behind the work"
      title="I make complex things feel obvious."
      intro="I am an AI engineer and full-stack product builder focused on the space where useful technology meets careful interface design. I work from the first question to the final, shipped detail."
      items={[
        {
          label: "Approach",
          title: "Clarity before decoration",
          description:
            "The best interface is often the one that makes the next decision feel natural. I use structure, motion, and language to remove friction.",
        },
        {
          label: "Working style",
          title: "Close to the real problem",
          description:
            "I collaborate with founders and teams directly, keeping technical decisions tied to the people and workflows the product serves.",
        },
        {
          label: "Toolkit",
          title: "React, AI, and systems",
          description:
            "Next.js, TypeScript, modern AI APIs, and a practical eye for performance, accessibility, and maintainability.",
        },
        {
          label: "Now",
          title: "Open for select work",
          description:
            "Available for product direction, frontend systems, and AI-powered workflows that deserve a considered build.",
        },
      ]}
    />
  );
}
