import { Hero } from "@/features/home/sections/Hero";
import { AboutPreview } from "@/features/home/sections/AboutPreview";
import { Capabilities } from "@/features/home/sections/Capabilities";
import { Testimonials } from "@/features/home/sections/Testimonials";
import { SelectedWork } from "@/features/home/sections/SelectedWork";
import { ContactCTA } from "@/features/home/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Capabilities />
      <Testimonials />
      <SelectedWork />
      <ContactCTA />
    </>
  );
}
