import { Hero } from "@/features/home/sections/Hero";
import { SelectedWork } from "@/features/home/sections/SelectedWork";
import { Services } from "@/features/home/sections/Services";
import { Approach } from "@/features/home/sections/Approach";
import { ContactCTA } from "@/features/home/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <Approach />
      <ContactCTA />
    </>
  );
}
