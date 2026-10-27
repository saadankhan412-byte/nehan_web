import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DualLogo } from "./Logos";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/machines", label: "Our Machines" },
  { to: "/spare-parts", label: "Spare Parts" },
  { to: "/services", label: "Services & Technology" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="h-1 bg-brand" aria-hidden />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" aria-label="Nehan Enterprises & Crescent Industrial Services — home" onClick={() => setOpen(false)}>
          <DualLogo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-sm px-3 py-2 font-display text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-navy transition-colors hover:text-brand data-[status=active]:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="brand" size="sm" className="hidden h-10 px-4 sm:inline-flex">
            <Link to="/contact" search={{}}>Request a Quote</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-card lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 font-display text-sm font-semibold uppercase tracking-[0.1em] text-navy data-[status=active]:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button asChild variant="brand" className="w-full">
                <Link to="/contact" search={{}} onClick={() => setOpen(false)}>Request a Quote</Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
