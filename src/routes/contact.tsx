import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { z } from "zod";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SectionHeading } from "@/components/site/blocks";
import { logoCis, logoNehan } from "@/components/site/Logos";
import { companies, telHref } from "@/data/company";
import { inquiryEndpoint, inquiryTypes } from "@/lib/inquiry";

const searchSchema = z.object({
  machine: z.string().max(150).optional(),
  business: z.enum(["nehan", "cis", "both"]).optional(),
  type: z.enum(inquiryTypes).optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: (s) => {
    const r = searchSchema.safeParse(s);
    return r.success ? r.data : {};
  },
  head: () => ({
    meta: [
      { title: "Contact Us | Nehan Enterprises & Crescent Industrial Services" },
      { name: "description", content: "Contact Nehan Enterprises for machinery and Crescent Industrial Services for precision spare parts. Request a quote online." },
      { property: "og:title", content: "Contact Nehan Enterprises & Crescent Industrial Services" },
      { property: "og:description", content: "Phone, email and quote request form for both companies." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const search = Route.useSearch();
  const cards = [
    { c: companies.nehan, logo: logoNehan },
    { c: companies.cis, logo: logoCis },
  ];
  return (
    <>
      <section className="bg-navy-wave">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <p className="eyebrow text-brand-light">Get in touch</p>
          <h1 className="mt-2 text-4xl font-bold uppercase text-navy-foreground sm:text-5xl">Contact Us</h1>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {cards.map(({ c, logo }) => (
              <div key={c.name} className="rounded-xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="rounded-md bg-card p-2"><img src={logo} alt={`${c.name} logo`} className="h-12 w-auto" /></span>
                  <h2 className="text-2xl font-semibold uppercase text-navy-foreground">{c.name}</h2>
                </div>
                <ul className="mt-6 space-y-2 text-navy-foreground">
                  {c.phones.map((p) => <li key={p}><a href={telHref(p)} className="inline-flex items-center gap-3 hover:text-brand-light"><Phone className="h-4 w-4" />{p}</a></li>)}
                  {c.emails.map((e) => <li key={e}><a href={`mailto:${e}`} className="inline-flex items-center gap-3 break-all hover:text-brand-light"><Mail className="h-4 w-4 shrink-0" />{e}</a></li>)}
                </ul>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {c.people.map((p) => (
                    <div key={p.name} className="rounded-md bg-brand px-4 py-2.5 text-navy-foreground">
                      <p className="font-display font-bold tracking-wide">{p.name}</p>
                      <p className="text-xs opacity-85">{p.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="bg-facets">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <SectionHeading align="center" eyebrow="Request a Quote" title="Send an Inquiry" intro="Tell us about your machinery requirements or the spare parts you need. Your inquiry is addressed to the company you select." />
          <div className="mt-10 rounded-md border border-border bg-card p-6 shadow-[var(--shadow-frame)] sm:p-8">
            <InquiryForm
              key={`${search.machine ?? ""}-${search.business ?? ""}-${search.type ?? ""}`}
              idPrefix="ct"
              defaultBusiness={search.business ?? "both"}
              defaultType={search.type ?? "Machinery"}
              defaultInterest={search.machine ?? ""}
            />
            {!inquiryEndpoint && (
              <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
                Online submission is not yet connected. After you complete the form, your email app will open with your inquiry ready to send to the selected company.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
