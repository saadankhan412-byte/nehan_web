import { Link } from "@tanstack/react-router";
import { ArrowRight, Construction } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import type { Machine } from "@/data/machines";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className={cn("eyebrow", tone === "dark" && "text-brand-light")}>{eyebrow}</p>}
      <h2
        className={cn(
          "mt-2 text-3xl font-semibold uppercase leading-tight sm:text-4xl",
          tone === "dark" ? "text-navy-foreground" : "text-brand",
        )}
      >
        {title}
      </h2>
      {intro && (
        <div className={cn("mt-4 leading-relaxed", tone === "dark" ? "text-navy-foreground/80" : "text-muted-foreground")}>
          {intro}
        </div>
      )}
    </div>
  );
}

/** Black title bar used in the profile ("Nehan Enterprises", "Crescent Industrial Services") */
export function TitleBar({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-navy-deep px-5 py-1.5 font-display text-lg font-medium tracking-wide text-navy-foreground sm:text-xl">
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="bg-facets border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2">
        <div className="reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold uppercase leading-[1.05] text-navy sm:text-5xl">{title}</h1>
          <div className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80">{intro}</div>
        </div>
        {image && (
          <div className="photo-mount reveal">
            <div className="photo-frame aspect-[4/3]">
              <img src={image} alt={imageAlt ?? ""} className="h-full w-full object-cover" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function UnderManufacturingBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm bg-warning px-2 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-warning-foreground",
        className,
      )}
    >
      <Construction className="h-3.5 w-3.5" aria-hidden /> Under manufacturing
    </span>
  );
}

export function MachineCard({ machine }: { machine: Machine }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
      <div className="photo-mount !p-2">
        <div className="photo-frame relative aspect-[4/3]">
          <img
            src={machine.images[0]}
            alt={`${machine.model} ${machine.name}`}
            loading="lazy"
            width={676} height={507} decoding="async"
            className="h-full w-full bg-card object-contain"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-display text-sm font-bold tracking-[0.12em] text-brand">{machine.model}</span>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">· {machine.category}</span>
        </div>
        <h3 className="mt-1 text-xl font-semibold leading-snug text-navy">{machine.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{machine.summary}</p>
        {machine.underManufacturing && (
          <p className="mt-3 text-xs text-muted-foreground">
            <UnderManufacturingBadge className="mr-2" /> Upgraded units currently in production
          </p>
        )}
        <Link
          to="/machines/$slug"
          params={{ slug: machine.slug }}
          className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.12em] text-brand hover:text-navy"
          aria-label={`View details: ${machine.model} ${machine.name}`}
        >
          View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export function CtaBand({
  title = "Discuss Your Machinery or Spare-Parts Requirements",
  text = "Share your production requirements, drawings or samples with our engineering teams. We'll review them and respond with the right machinery or component solution.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy-wave">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-brand-light">Inquiries</p>
          <h2 className="mt-2 text-3xl font-semibold uppercase text-navy-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 leading-relaxed text-navy-foreground/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="brand" size="lg">
            <Link to="/contact" search={{}}>Request a Quote</Link>
          </Button>
          <Button asChild variant="onDark" size="lg">
            <Link to="/spare-parts" hash="inquiry">Submit Part Drawings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
