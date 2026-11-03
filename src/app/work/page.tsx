import type { Metadata } from "next";
import { WorkSection } from "@/features/work/components/WorkSection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Landing pages, UI/UX design and custom software — each project with the problem, what I built and the result.",
};

export default function WorkPage() {
  return <WorkSection />;
}
