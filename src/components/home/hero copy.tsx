import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="blueprint-surface hero-visual relative flex items-center justify-center border-b border-border px-4 py-8 md:px-12">
      

      
      
       
     
      </div>

      <div className="grid md:grid-cols-[1.35fr_1fr_0.42fr]">
        <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
          <h1 className="type-display max-w-3xl text-[clamp(2rem,3.8vw,4.25rem)] font-bold uppercase leading-[0.92]">
            Digital products that feel inevitable.
          </h1>
        </div>

    

     
      </div>
    </section>
  );
}
