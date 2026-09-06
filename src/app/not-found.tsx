import Link from "next/link";
import { FiAlertCircle } from "react-icons/fi";
import { Button, Heading, PageFrameDecor, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section
      bleed
      noGap
      className="relative min-h-[70svh] isolate overflow-hidden bg-background"
    >
      <PageFrameDecor />
      <div className="container-portfolio flex min-h-[70svh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <div
          className="mb-5 grid size-12 place-items-center border border-border text-muted-foreground [&_svg]:size-5"
          aria-hidden="true"
        >
          <FiAlertCircle />
        </div>
        <p className="type-label mb-5 text-muted-foreground">Error / 404</p>
        <Heading level="display" className="max-w-3xl [text-wrap:balance]">
          This page doesn&apos;t exist.
        </Heading>
        <p className="type-body mt-5 max-w-md text-muted-foreground">
          The page you&apos;re looking for may have moved or never existed.
        </p>
        <div className="mt-9">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
