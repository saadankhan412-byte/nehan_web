import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MachineCard, SectionHeading, UnderManufacturingBadge } from "@/components/site/blocks";
import { getMachine, machines } from "@/data/machines";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/machines/$slug")({
  loader: ({ params }) => {
    const machine = getMachine(params.slug);
    if (!machine) throw notFound();
    return { slug: machine.slug };
  },
  head: ({ loaderData }) => {
    const m = loaderData ? getMachine(loaderData.slug) : undefined;
    if (!m) return { meta: [{ title: "Machine not found | Nehan Enterprises" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${m.model} ${m.name} | Nehan Enterprises` },
        { name: "description", content: m.summary },
        { property: "og:title", content: `${m.model} ${m.name}` },
        { property: "og:description", content: m.summary },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold uppercase text-navy">Machine not found</h1>
      <Button asChild variant="brand" className="mt-6 h-11 px-5"><Link to="/machines">Back to machines</Link></Button>
    </div>
  ),
  component: MachineDetail,
});

function MachineDetail() {
  const { slug } = Route.useLoaderData();
  const m = getMachine(slug)!;
  const [active, setActive] = useState(0);
  const related = machines.filter((x) => x.slug !== m.slug).slice(0, 3);
  const title = `${m.model} ${m.name}`;

  return (
    <>
      <section className="bg-facets border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14">
          <Link to="/machines" className="inline-flex items-center gap-2 text-sm text-navy hover:text-brand"><ArrowLeft className="h-4 w-4" /> All machines</Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="photo-mount">
                <div className="photo-frame aspect-[4/3]">
                  <img src={m.images[active]} alt={`${title} — photo ${active + 1}`} width={676} height={507} decoding="async" className="h-full w-full bg-card object-contain" />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
                {m.images.map((src, i) => (
                  <button key={src} type="button" onClick={() => setActive(i)} aria-label={`Show photo ${i + 1}`} aria-pressed={active === i}
                    className={cn("aspect-[4/3] overflow-hidden border-2 transition", active === i ? "border-brand" : "border-card opacity-75 hover:opacity-100")}>
                    <img src={src} alt="" loading="lazy" width={676} height={507} decoding="async" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">{m.category} · Nehan Enterprises</p>
              <h1 className="mt-2 text-4xl font-bold uppercase leading-tight text-navy sm:text-5xl">{m.name}</h1>
              <p className="mt-2 font-display text-2xl font-semibold tracking-[0.12em] text-brand">{m.model}</p>
              <div className="mt-5 space-y-4 leading-relaxed text-foreground/80">
                {m.overview.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
              </div>
              {m.combination && (
                <div className="mt-5">
                  <p className="font-display text-sm font-semibold uppercase tracking-wider text-navy">Machine combination</p>
                  <ul className="mt-2 flex flex-wrap gap-2">{m.combination.map((c) => <li key={c} className="bg-navy px-3 py-1.5 text-sm text-navy-foreground">{c}</li>)}</ul>
                </div>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="brand" size="lg">
                  <Link to="/contact" search={{ machine: title, type: "Machinery", business: "nehan" }}>Request a Quote</Link>
                </Button>
                {m.specs && <Button asChild variant="outlineBrand" size="lg"><a href="#specs">Technical Specs</a></Button>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {(m.features || m.specs) && (
        <section className="bg-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
            {m.features && (
              <div>
                <SectionHeading title="Key Features" />
                <ul className="mt-6 space-y-3">
                  {m.features.map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
                      <p className="text-sm leading-relaxed text-foreground/80"><strong className="text-navy">{f.title}:</strong> {f.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {m.specs && (
              <div id="specs" className="scroll-mt-24">
                <SectionHeading title="Technical Specifications" />
                <div className="mt-6 overflow-x-auto rounded-md border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-navy text-navy-foreground">
                      <tr><th scope="col" className="px-4 py-3 font-display uppercase tracking-wider">Parameter</th><th scope="col" className="px-4 py-3 font-display uppercase tracking-wider">Specification</th></tr>
                    </thead>
                    <tbody>
                      {m.specs.map((s) => (
                        <tr key={s.label} className="border-t border-border odd:bg-muted/60">
                          <th scope="row" className="px-4 py-3 font-semibold text-navy">{s.label}</th>
                          <td className="px-4 py-3 text-foreground/85">
                            {s.value}
                            {s.confirm && <span className="ml-2 inline-block rounded-sm bg-warning/40 px-1.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-warning-foreground">Confirm for configuration</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {m.specNote && (
                  <p className="mt-4 flex gap-2 rounded-sm border border-warning bg-warning/15 p-3 text-xs leading-relaxed text-warning-foreground">
                    <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden /> <span><strong>Technical note:</strong> {m.specNote}</span>
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {(m.advantages || m.application) && (
        <section className="bg-navy-wave">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
            {m.advantages && (
              <div>
                <SectionHeading tone="dark" title="Performance Advantages" />
                <ul className="mt-6 grid gap-3">
                  {m.advantages.map((a) => <li key={a} className="border-l-2 border-brand-light bg-navy-foreground/5 px-4 py-2.5 text-sm text-navy-foreground">{a}</li>)}
                </ul>
              </div>
            )}
            {m.application && (
              <div>
                <SectionHeading tone="dark" title="Ideal Application" />
                <p className="mt-6 leading-relaxed text-navy-foreground/85">{m.application}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {m.underManufacturing && (
        <section className="bg-facets">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <SectionHeading eyebrow="Upgraded Manufacturing Technology" title="NE-3109 Units Under Manufacturing" intro="These photographs show NE-3109 filter making machines currently being manufactured. They are works in progress, not completed installations." />
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              {m.underManufacturing.map((u) => (
                <article key={u.title}>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold uppercase text-navy">{u.title}</h3>
                    <UnderManufacturingBadge />
                  </div>
                  <div className="photo-mount mt-4 grid grid-cols-2 gap-2">
                    {u.images.map((src, i) => (
                      <div key={src} className="photo-frame aspect-[4/3]"><img src={src} alt={`NE-3109 ${u.title}, in-progress photo ${i + 1}`} loading="lazy" width={676} height={507} decoding="async" className="h-full w-full bg-card object-contain" /></div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">{u.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading title="Related Machines" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <MachineCard key={r.slug} machine={r} />)}
          </div>
        </div>
      </section>
    </>
  );
}
