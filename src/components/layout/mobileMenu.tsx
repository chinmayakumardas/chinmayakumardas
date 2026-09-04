import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui";

const MOBILE_NAV = [
  { label: "Selected work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About me", href: "/about" },
  { label: "Start a project", href: "/contact" },
];

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  panel?: boolean;
}

export function MobileMenu({
  open,
  onOpenChange,
  panel = false,
}: MobileMenuProps) {
  if (!panel) {
    return (
      <Button
        type="button"
        variant="ghost"
        size="default"
        onClick={() => onOpenChange(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="mobile-menu-trigger type-label flex items-center gap-3 rounded-none border-l border-border px-4"
      >
        {open ? (
          <X size={15} strokeWidth={1.5} />
        ) : (
          <Menu size={15} strokeWidth={1.5} />
        )}
        {open ? "Close" : "Menu"}
      </Button>
    );
  }

  return (
    <nav
      id="mobile-nav"
      className="col-span-full border-t border-border md:hidden"
    >
      <div className="type-label border-b border-border px-4 py-4 text-muted-foreground">
        Navigation
      </div>
      {MOBILE_NAV.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => onOpenChange(false)}
          className={`type-label flex min-h-14 items-center justify-between border-b border-border px-4 ${
            index === MOBILE_NAV.length - 1
              ? "bg-brand text-brand-foreground"
              : "hover:bg-muted"
          }`}
        >
          {item.label}
          <span aria-hidden="true" className="text-base leading-none">
            →
          </span>
        </Link>
      ))}
    </nav>
  );
}
