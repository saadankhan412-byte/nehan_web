import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, Factory, PenTool, ScanLine, Wrench } from "lucide-react";
import factory from "@/assets/profile/factory.jpg";
import cnc from "@/assets/profile/cnc.jpg";
import studio1 from "@/assets/profile/studio-1.jpg";
import part4 from "@/assets/profile/part-4.jpg";
import fcm1 from "@/assets/profile/fcm1113-1.jpg";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/blocks";
import { materials } from "@/data/company";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Technology | Nehan Enterprises & Crescent Industrial Services" },
      { name: "description", content: "Machinery manufacturing, precision CNC machining, wire EDM & grinding, automation & control systems and custom spare-parts manufacturing." },
      { property: "og:title", content: "Services & Technology" },
      { property: "og:description", content: "Advanced automation and advanced manufacturing for the tobacco industry." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Factory, by: "Nehan Enterprises", t: "Industrial Machinery Manufacturing", d: "Manufacturing cigarette filter-making, combining, cutting, and packing machinery for varied production requirements.", img: studio1, link: { to: "/machines" as const, label: "View machines" } },
  { icon: Wrench, by: "Crescent Industrial Services", t: "Precision CNC Machining", d: "Manufacturing complex industrial components using advanced multi-axis CNC milling and CNC turning processes.", img: cnc },
  { icon: ScanLine, by: "Crescent Industrial Services", t: "Wire EDM & Precision Grinding", d: "Specialized machining processes for intricate geometries, accurate dimensions, and refined surface finishes.", img: part4 },
  { icon: Cpu, by: "Nehan Enterprises", t: "Automation & Control Systems", d: "Integration of PLC controls, servo drives, and touchscreen HMI interfaces using specified automation platforms.", img: fcm1 },
  { icon: PenTool, by: "Crescent Industrial Services", t: "Custom Spare Parts Manufacturing", d: "Production of components according to approved technical drawings, samples, material specifications, and dimensional requirements.", img: factory, link: { to: "/spare-parts" as const, label: "Submit a part inquiry" } },
];

const nehanTech = [
  ["PLC-Based Control Systems", "Siemens, Fatek, Leadshine, and HCFA platforms, as specified for individual machine configurations."],
  ["Servo Drive Technology", "Designed to support precise motion control and consistent machine operation."],
  ["Touchscreen HMI", "Operator-friendly interfaces for machine monitoring and control."],
  ["Flexible Production Speeds", "Machinery configurations for both low-speed and high-speed production requirements."],
  ["Material Efficiency", "Design priorities include reducing unnecessary material waste and optimizing raw-material utilization."],
];
const cisTech = [
  ["5-Axis CNC Milling", "For complex geometries and precision components."],
  ["CNC Turning", "For accurate cylindrical and rotational parts."],
  ["Wire EDM", "For intricate profiles and detailed machining."],
  ["Precision Grinding", "For dimensional accuracy and surface finishing."],
  ["Specialized Materials", `${materials.join(", ")} — selected according to component application.`],
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services & Technology" title="Our Services" intro="From complete filter-making and packing machinery to precision-machined spare parts — engineered by two specialist companies." image={factory} imageAlt="Industrial manufacturing facility" />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl space-y-14 px-4 py-20 sm:px-6">
          {services.map((s, i) => (
            <article key={s.t} className="grid items-center gap-8 md:grid-cols-2">
              <div className={i % 2 ? "md:order-2" : ""}>
                <div className="photo-mount !p-2"><div className="photo-frame aspect-[16/10]"><img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover" /></div></div>
              </div>
              <div>
                <span className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-navy-foreground"><s.icon className="h-5 w-5" aria-hidden /></span>
                  <span className="font-display text-4xl font-bold text-silver">0{i + 1}</span>
                </span>
                <h2 className="mt-4 text-2xl font-semibold uppercase text-brand sm:text-3xl">{s.t}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{s.by}</p>
                <p className="mt-4 leading-relaxed text-foreground/80">{s.d}</p>
                {s.link && <Link to={s.link.to} className="mt-4 inline-block font-display text-sm font-semibold uppercase tracking-[0.12em] text-brand hover:text-navy">{s.link.label} →</Link>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-facets">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading align="center" title="Technology & Manufacturing Capabilities" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { h: "Advanced Automation", c: "Nehan Enterprises", rows: nehanTech },
              { h: "Advanced Manufacturing", c: "Crescent Industrial Services", rows: cisTech },
            ].map((b) => (
              <div key={b.h} className="rounded-md bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
                <h3 className="text-2xl font-bold uppercase text-navy">{b.h}</h3>
                <p className="font-display text-lg font-semibold text-brand">{b.c}</p>
                <dl className="mt-6 divide-y divide-border">
                  {b.rows.map(([t, d]) => (
                    <div key={t} className="py-3">
                      <dt className="font-semibold text-navy">{t}</dt>
                      <dd className="mt-0.5 text-sm text-muted-foreground">{d}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
