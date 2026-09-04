import Link from "next/link";
import { Section } from "@/components/ui";
import { Heading } from "@/components/ui";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70svh] flex-col items-center justify-center pt-[var(--nav-height)] text-center">
      <p className="text-small mb-4">404</p>
      <Heading level="display">This page doesn&apos;t exist.</Heading>
      <p className="text-body-lg mt-4 max-w-md">
        The page you&apos;re looking for may have moved or never existed.
      </p>
      <div className="mt-10">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </Section>
  );
}
