import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
// import { BehindTheInterface } from "@/components/home/behind-the-interface";
import { HowIThink } from "@/components/home/how-i-think";
import { Capabilities } from "@/components/home/capabilities";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <main>
      <Hero />
       <SelectedWork />
      {/* <BehindTheInterface /> */}
      
      
      <HowIThink />
      <Capabilities /> 
      <FinalCTA />
    </main>
  );
}