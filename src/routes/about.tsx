import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import factory from "@/assets/profile/factory.jpg";
import coNehan from "@/assets/profile/co-nehan.jpg";
import coCis from "@/assets/profile/co-cis.jpg";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/blocks";
import { MissionVisionValues } from "@/components/site/MissionVision";
import { logoCis, logoNehan } from "@/components/site/Logos";
import { brands, companies, telHref } from "@/data/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Nehan Enterprises & Crescent Industrial Services" },
      { name: "description", content: "Nehan Enterprises (17+ years, filter-making & packing machinery) and Crescent Industrial Services (40 years, precision tobacco machinery spare parts)." },
      { property: "og:title", content: "About Nehan Enterprises & Crescent Industrial Services" },
      { property: "og:description", content: "Two complementary engineering companies serving tobacco manufacturers." },
    ],
  }),
  component: About,
});

function About() {
  const list = [
    { c: companies.nehan, logo: logoNehan, img: coNehan, spec: "Cigarette filter-making, filter-combining, bundle-packing, shoulder-box-packing and filter-segment-cutting machinery.", body: "Nehan Enterprises specializes in high-performance cigarette filter-making and packing machinery, backed by over 17 years of engineering experience. We provide automated and reliable production solutions designed to improve operational efficiency, optimize material utilization, and meet diverse manufacturing requirements." },
    { c: companies.cis, logo: logoCis, img: coCis, spec: `Precision spare parts compatible with ${brands.join(", ")} machinery — CNC machining, wire EDM, turning and precision grinding.`, body: "Crescent Industrial Services specializes in high-quality tobacco machinery spare parts, bringing 40 years of industry experience. Through advanced machining technologies, precision engineering, and specialized materials, the company manufactures components compatible with leading machinery brands." },
  ];
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Complementary Engineering Capabilities"
        intro="Together, Nehan Enterprises and Crescent Industrial Services support tobacco manufacturers with production machinery, precision components, and dependable industrial solutions."
        image={factory}
        imageAlt="Industrial production hall"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl space-y-16 px-4 py-20 sm:px-6">
          {list.map(({ c, logo, img, spec, body }, i) => (
            <article key={c.name} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="photo-mount">
                <div className="photo-frame aspect-[4/3]"><img src={img} alt={`${c.name} work`} loading="lazy" className="h-full w-full object-cover" /></div>
              </div>
              <div>
                <img src={logo} alt={`${c.name} logo`} className="h-16 w-auto" />
                <h2 className="mt-4 text-3xl font-semibold uppercase text-brand">{c.name}</h2>
                <p className="mt-1 font-display font-semibold uppercase tracking-[0.1em] text-navy">{c.experience}</p>
                <p className="mt-4 leading-relaxed text-foreground/80">{body}</p>
                <p className="mt-4 border-l-2 border-brand bg-muted px-4 py-3 text-sm text-navy"><strong>Specialization:</strong> {spec}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <MissionVisionValues />

      <section className="bg-facets">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Leadership" title="Directors & Leadership" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[companies.nehan, companies.cis].map((c) => (
              <div key={c.name} className="rounded-xl bg-navy-wave p-6 text-navy-foreground shadow-[var(--shadow-frame)] sm:p-8">
                <h3 className="text-xl font-semibold uppercase">{c.name}</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {c.people.map((p) => (
                    <div key={p.name} className="rounded-md bg-brand px-4 py-3">
                      <p className="font-display text-lg font-bold tracking-wide">{p.name}</p>
                      <p className="text-xs text-navy-foreground/85">{p.role}</p>
                    </div>
                  ))}
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  {c.phones.map((ph) => (
                    <li key={ph}><a className="inline-flex items-center gap-2 hover:text-brand-light" href={telHref(ph)}><Phone className="h-4 w-4" />{ph}</a></li>
                  ))}
                  {c.emails.map((e) => (
                    <li key={e}><a className="inline-flex items-center gap-2 break-all hover:text-brand-light" href={`mailto:${e}`}><Mail className="h-4 w-4 shrink-0" />{e}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
