import { Hero } from "@/features/home/sections/Hero";
import { SelectedWork } from "@/features/home/sections/SelectedWork";
import { Needs } from "@/features/home/sections/Needs";
import { Approach } from "@/features/home/sections/Approach";
import { Services } from "@/features/home/sections/Services";
import { ContactCTA } from "@/features/home/sections/ContactCTA";

/** Home follows the reference: hero → work → needs → approach → services → contact. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Needs />
      <Approach />
      <Services />
      <ContactCTA />
    </>
  );
}
