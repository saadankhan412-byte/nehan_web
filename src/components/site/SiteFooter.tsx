import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { companies, telHref } from "@/data/company";
import { machines } from "@/data/machines";
import { logoCis, logoNehan } from "./Logos";
import { navItems } from "./SiteHeader";

const linkCls = "text-sm text-navy-foreground/75 transition-colors hover:text-brand-light";

function ContactBlock({ c }: { c: (typeof companies)["nehan"] | (typeof companies)["cis"] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy-foreground">{c.name}</h3>
      <ul className="mt-3 space-y-2">
        {c.phones.map((p) => (
          <li key={p}>
            <a href={telHref(p)} className={`${linkCls} inline-flex items-center gap-2`}>
              <Phone className="h-3.5 w-3.5" aria-hidden /> {p}
            </a>
          </li>
        ))}
        {c.emails.map((e) => (
          <li key={e}>
            <a href={`mailto:${e}`} className={`${linkCls} inline-flex items-center gap-2 break-all`}>
              <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden /> {e}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-wave text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="inline-flex items-center gap-4 rounded-md bg-card px-4 py-3">
            <img src={logoCis} alt="Crescent Industrial Services logo" className="h-12 w-auto" />
            <span className="h-10 w-px bg-border" aria-hidden />
            <img src={logoNehan} alt="Nehan Enterprises logo" className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/75">
            Engineering Excellence in Tobacco Machinery, Filter Manufacturing Solutions, and Precision Industrial Spare Parts.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em]">Navigate</h3>
          <ul className="mt-3 space-y-2">
            {navItems.map((n) => (
              <li key={n.to}><Link to={n.to} className={linkCls}>{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em]">Machinery</h3>
          <ul className="mt-3 space-y-2">
            {machines.map((m) => (
              <li key={m.slug}>
                <Link to="/machines/$slug" params={{ slug: m.slug }} className={linkCls}>{m.model} — {m.name}</Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.14em]">Spare Parts & Services</h3>
          <ul className="mt-3 space-y-2">
            <li><Link to="/spare-parts" className={linkCls}>Precision Spare Parts</Link></li>
            <li><Link to="/services" className={linkCls}>CNC Machining & Wire EDM</Link></li>
            <li><Link to="/services" className={linkCls}>Automation & Control Systems</Link></li>
          </ul>
        </div>

        <div className="space-y-8 lg:col-span-3">
          <ContactBlock c={companies.nehan} />
          <ContactBlock c={companies.cis} />
        </div>
      </div>
      <div className="border-t border-navy-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-navy-foreground/60 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Nehan Enterprises & Crescent Industrial Services. All rights reserved.</p>
          <p>Brand names are shown for compatibility reference only.</p>
        </div>
      </div>
    </footer>
  );
}
