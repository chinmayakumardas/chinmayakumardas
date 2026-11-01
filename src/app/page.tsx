import { Hero } from "@/features/home/sections/Hero";
import { SelectedWork } from "@/features/home/sections/SelectedWork";
import { AboutPreview } from "@/features/home/sections/AboutPreview";
import { Capabilities } from "@/features/home/sections/Capabilities";
import { ContactCTA } from "@/features/home/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutPreview />
      <Capabilities />
      <ContactCTA />
    </>
  );
}
