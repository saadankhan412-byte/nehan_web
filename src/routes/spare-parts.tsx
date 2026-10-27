import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import coCis from "@/assets/profile/co-cis.jpg";
import cnc from "@/assets/profile/cnc.jpg";
import p1 from "@/assets/profile/part-1.jpg";
import p2 from "@/assets/profile/part-2.jpg";
import p3 from "@/assets/profile/part-3.jpg";
import p4 from "@/assets/profile/part-4.jpg";
import p5 from "@/assets/profile/part-5.jpg";
import p6 from "@/assets/profile/part-6.jpg";
import p7 from "@/assets/profile/part-7.jpg";
import p10 from "@/assets/profile/part-10.jpg";
import p12 from "@/assets/profile/part-12.jpg";
import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHero, SectionHeading, TitleBar } from "@/components/site/blocks";
import { brands, companies, materials } from "@/data/company";

export const Route = createFileRoute("/spare-parts")({
  head: () => ({
    meta: [
      { title: "Spare Parts | Crescent Industrial Services" },
      { name: "description", content: "Precision-engineered tobacco machinery spare parts compatible with HAUNI, MOLINS, G.D, FOCKE, SASIB and SCHMERMUND machinery." },
      { property: "og:title", content: "Precision Spare Parts | Crescent Industrial Services" },
      { property: "og:description", content: "CNC milling, turning, wire EDM and precision grinding for tobacco machinery components." },
    ],
  }),
  component: SpareParts,
});

const gallery = [p1, p2, p3, p4, p5, p6, p7, p10, p12];
const processes = [
  { t: "5-Axis CNC Milling", d: "For complex geometries and precision components." },
  { t: "CNC Turning", d: "For accurate cylindrical and rotational parts." },
  { t: "Wire EDM", d: "For intricate profiles and detailed machining." },
  { t: "Precision Grinding", d: "For dimensional accuracy and surface finishing." },
];

function SpareParts() {
  return (
    <>
      <PageHero
        eyebrow="Crescent Industrial Services · 40 years"
        title="Our Spare Parts"
        intro="We manufacture precision-engineered components for tobacco machinery, with a focus on dimensional accuracy, material quality, durability, and compatibility with specified equipment."
        image={coCis}
        imageAlt="Precision machined spare parts"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
          <TitleBar>Machinery brands supported</TitleBar>
          <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((b) => (
              <li key={b} className="border-b-2 border-brand bg-muted px-3 py-4 font-display text-lg font-semibold tracking-[0.18em] text-navy">{b}</li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground">Our spare-parts capabilities are aligned with established industry requirements for precision components used in cigarette-making, filter-production, and packing machinery. Brand names indicate compatibility only.</p>
        </div>
      </section>

      <section className="bg-facets">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="Product showcase" title="Precision-Engineered Components" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div key={src} className="photo-mount !p-2">
                <div className="photo-frame aspect-square"><img src={src} alt={`Crescent Industrial Services spare parts, set ${i + 1}`} loading="lazy" className="h-full w-full object-cover" width={560} height={560} decoding="async" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-wave">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading tone="dark" eyebrow="Advanced manufacturing" title="Machining & Materials" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {processes.map((p) => (
                <div key={p.t} className="border-t-2 border-brand-light bg-navy-foreground/5 p-4">
                  <p className="font-display font-semibold uppercase tracking-wide text-navy-foreground">{p.t}</p>
                  <p className="mt-1 text-sm text-navy-foreground/75">{p.d}</p>
                </div>
              ))}
            </div>
            <p className="eyebrow mt-8 text-brand-light">Specialized materials</p>
            <p className="mt-2 text-sm text-navy-foreground/80">Selected according to component application:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {materials.map((m) => <li key={m} className="rounded-sm border border-navy-foreground/25 px-3 py-1.5 text-sm text-navy-foreground">{m}</li>)}
            </ul>
          </div>
          <div className="photo-mount"><div className="photo-frame aspect-square"><img src={cnc} alt="5-axis CNC milling of a precision component" loading="lazy" className="h-full w-full object-cover" /></div></div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-20 bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3">
          <div>
            <SectionHeading eyebrow="Custom manufacturing" title="Spare-Parts Inquiry" intro="Production of components according to approved technical drawings, samples, material specifications, and dimensional requirements." />
            <div className="mt-6 flex gap-3 border-l-2 border-brand bg-muted p-4 text-sm text-navy">
              <FileText className="h-5 w-5 shrink-0 text-brand" aria-hidden />
              <p>Send us your drawings, samples or component requirements for evaluation. Mention the machine brand and part reference where known.</p>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p className="font-semibold text-navy">{companies.cis.name}</p>
              {companies.cis.phones.map((p) => <p key={p}>{p}</p>)}
              {companies.cis.emails.map((e) => <p key={e} className="break-all">{e}</p>)}
            </div>
          </div>
          <div className="rounded-md border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:col-span-2 sm:p-8">
            <InquiryForm idPrefix="sp" defaultBusiness="cis" defaultType="Spare Parts" lockBusiness />
          </div>
        </div>
      </section>
    </>
  );
}
