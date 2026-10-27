import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cog, Cpu, Gauge, Monitor, Network } from "lucide-react";
import hero from "@/assets/profile/hero.jpg";
import coNehan from "@/assets/profile/co-nehan.jpg";
import coCis from "@/assets/profile/co-cis.jpg";
import cnc from "@/assets/profile/cnc.jpg";
import part1 from "@/assets/profile/part-1.jpg";
import part3 from "@/assets/profile/part-3.jpg";
import part6 from "@/assets/profile/part-6.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand, MachineCard, SectionHeading, TitleBar } from "@/components/site/blocks";
import { DualLogo } from "@/components/site/Logos";
import { brands, materials } from "@/data/company";
import { MissionVisionValues } from "@/components/site/MissionVision";
import { machines } from "@/data/machines";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nehan Enterprises & Crescent Industrial Services | Tobacco Machinery & Spare Parts" },
      { name: "description", content: "Cigarette filter-making and packing machinery by Nehan Enterprises and precision tobacco-machinery spare parts by Crescent Industrial Services." },
      { property: "og:title", content: "Nehan Enterprises & Crescent Industrial Services" },
      { property: "og:description", content: "Engineering excellence in tobacco machinery, filter manufacturing solutions and precision industrial spare parts." },
    ],
  }),
  component: Home,
});

const capabilities = [
  { t: "5-Axis CNC Milling", d: "For complex geometries and precision components." },
  { t: "CNC Turning", d: "For accurate cylindrical and rotational parts." },
  { t: "Wire EDM", d: "For intricate profiles and detailed machining." },
  { t: "Precision Grinding", d: "For dimensional accuracy and surface finishing." },
  { t: "Custom Spare Parts", d: "Produced to approved drawings, samples and material specifications." },
];

const automation = [
  { i: Cpu, t: "PLC-Based Control Systems", d: "Siemens, Fatek, Leadshine and HCFA platforms, as specified for individual machine configurations." },
  { i: Gauge, t: "Servo Drive Technology", d: "Designed to support precise motion control and consistent machine operation." },
  { i: Monitor, t: "Touchscreen HMI", d: "Operator-friendly interfaces for machine monitoring and control." },
  { i: Network, t: "Factory Network Connectivity", d: "Interfaces for factory information systems and network integration." },
  { i: Cog, t: "Flexible Production Speeds", d: "Machinery configurations for both low-speed and high-speed production requirements." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep">
        <img src={hero} alt="Nehan Enterprises filter-making machinery line in a production hall" className="absolute inset-0 h-full w-full object-cover object-center" width={1587} height={1075} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/5" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:py-32">
          <div className="max-w-2xl reveal">
            <p className="eyebrow text-brand-light">Nehan Enterprises · Crescent Industrial Services</p>
            <h1 className="mt-4 text-4xl font-bold uppercase leading-[1.04] text-navy-foreground sm:text-5xl lg:text-6xl">
              Engineering Excellence in <span className="text-brand-light">Tobacco Machinery</span> & Precision Spare Parts
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/85">
              Nehan Enterprises builds cigarette filter-making and packing machinery. Crescent Industrial Services manufactures
              precision spare parts for leading tobacco machinery brands. Together, one dependable engineering partner.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg">
                <Link to="/machines">Explore Our Machines <ArrowRight /></Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/contact" search={{}}>Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-2 bg-brand" aria-hidden />
      </section>

      {/* INTRO */}
      <section className="bg-facets">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Who we are" title="Our Companies & Expertise" intro="Two complementary capabilities supporting tobacco manufacturers with production machinery, precision components and dependable industrial solutions." />
            <div className="rounded-md bg-card px-5 py-3 shadow-[var(--shadow-card)]"><DualLogo /></div>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { img: coNehan, name: "Nehan Enterprises", exp: "17+ Years of Engineering Excellence", text: "Specialized in the manufacturing of cigarette filter-making, filter-combining, bundle-packing, shoulder-box-packing and filter-segment-cutting machinery, designed for different production speeds and operational requirements.", to: "/machines" as const, cta: "Explore machinery" },
              { img: coCis, name: "Crescent Industrial Services", exp: "40 Years of Tobacco Industry Experience", text: "Focused on manufacturing high-precision spare parts for tobacco machinery using advanced CNC machining, wire EDM, turning and precision grinding technologies.", to: "/spare-parts" as const, cta: "Explore spare parts" },
            ].map((c) => (
              <article key={c.name} className="flex flex-col gap-6 rounded-2xl bg-navy-wave p-5 shadow-[var(--shadow-frame)] sm:flex-row sm:p-6">
                <img src={c.img} alt={`${c.name} capability`} loading="lazy" className="h-56 w-full rounded-xl border-4 border-card object-cover sm:h-auto sm:w-44" />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-medium text-brand-light">{c.name}</h3>
                  <p className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.1em] text-navy-foreground">{c.exp}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-foreground/80">{c.text}</p>
                  <Link to={c.to} className="mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.12em] text-navy-foreground hover:text-brand-light">
                    {c.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MACHINES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="text-center">
            <SectionHeading align="center" eyebrow="Featured machinery" title="Our Machines" />
            <div className="mt-4"><TitleBar>Nehan Enterprises</TitleBar></div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {machines.map((m) => <MachineCard key={m.slug} machine={m} />)}
            <div className="flex flex-col justify-center rounded-md border-2 border-dashed border-brand/40 p-8">
              <h3 className="text-2xl font-semibold uppercase text-navy">Need a specific configuration?</h3>
              <p className="mt-3 text-sm text-muted-foreground">Machinery solutions designed for different production speeds and operational requirements.</p>
              <Button asChild variant="outlineBrand" className="mt-6 h-11 self-start px-5">
                <Link to="/contact" search={{ type: "Machinery", business: "nehan" }}>Discuss requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SPARE PARTS */}
      <section className="bg-facets">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Crescent Industrial Services" title="Our Spare Parts" intro="Precision-engineered components for tobacco machinery, with a focus on dimensional accuracy, material quality, durability and compatibility with specified equipment." />
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {capabilities.map((c) => (
                <li key={c.t} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
                  <span className="w-48 shrink-0 font-display font-semibold uppercase tracking-wide text-navy">{c.t}</span>
                  <span className="text-sm text-muted-foreground">{c.d}</span>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-8">Machinery brands supported</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {brands.map((b) => (
                <li key={b} className="border border-navy/20 bg-card px-4 py-2 font-display text-sm font-semibold tracking-[0.18em] text-navy">{b}</li>
              ))}
            </ul>
            <Button asChild variant="brand" size="lg" className="mt-8">
              <Link to="/spare-parts">View Spare Parts <ArrowRight /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[part1, part3, part6, cnc].map((src, i) => (
              <div key={src} className="photo-mount !p-2">
                <div className="photo-frame aspect-square">
                  <img src={src} alt={i === 3 ? "5-axis CNC milling of a precision component" : "Precision spare parts manufactured by Crescent Industrial Services"} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-navy-wave">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading tone="dark" eyebrow="Technology & manufacturing capabilities" title="Advanced Automation. Advanced Manufacturing." />
          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h3 className="text-xl font-semibold uppercase text-navy-foreground">Nehan Enterprises</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {automation.map(({ i: Icon, t, d }) => (
                  <div key={t} className="rounded-md border border-navy-foreground/15 bg-navy-foreground/5 p-5">
                    <Icon className="h-6 w-6 text-brand-light" aria-hidden />
                    <p className="mt-3 font-display font-semibold uppercase tracking-wide text-navy-foreground">{t}</p>
                    <p className="mt-1 text-sm text-navy-foreground/75">{d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold uppercase text-navy-foreground">Crescent Industrial Services</h3>
              <p className="mt-5 text-sm leading-relaxed text-navy-foreground/80">5-axis CNC milling, CNC turning, wire EDM and precision grinding, using specialized materials selected according to component application:</p>
              <ul className="mt-5 space-y-2">
                {materials.map((m) => (
                  <li key={m} className="flex items-center gap-3 border-l-2 border-brand-light bg-navy-foreground/5 px-4 py-2.5 text-sm text-navy-foreground">{m}</li>
                ))}
              </ul>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.12em] text-brand-light hover:text-navy-foreground">
                Services & Technology <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <MissionVisionValues />

      <CtaBand />
    </>
  );
}
