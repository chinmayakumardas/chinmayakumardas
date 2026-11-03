import type { Metadata } from "next";
import { ContactSection } from "@/features/contact/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell me about your project — I'll reply with where to start.",
};

export default function ContactPage() {
  return <ContactSection />;
}
