import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import studio from "@/assets/profile/studio-2.jpg";
import { CtaBand, MachineCard, PageHero } from "@/components/site/blocks";
import { machineCategories, machines, type MachineCategory } from "@/data/machines";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/machines/")({
  head: () => ({
    meta: [
      { title: "Our Machines | Nehan Enterprises" },
      { name: "description", content: "Filter making, filter combining, segment slicing and packing machinery: NE-3109, NE/FCM-1113, NE-2585, NE-0408 and NE-1409." },
      { property: "og:title", content: "Our Machines | Nehan Enterprises" },
      { property: "og:description", content: "Cigarette filter-making and packing machinery catalogue." },
    ],
  }),
  component: Machines,
});

function Machines() {
  const [cat, setCat] = useState<MachineCategory | "All">("All");
  const list = cat === "All" ? machines : machines.filter((m) => m.category === cat);
  return (
    <>
      <PageHero
        eyebrow="Nehan Enterprises"
        title="Our Machines"
        intro="Cigarette filter-making, filter-combining, filter-segment-cutting, bundle-packing and shoulder-box-packing machinery, designed for different production speeds and operational requirements."
        image={studio}
        imageAlt="Nehan Enterprises filter combiner machine"
      />
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {(["All", ...machineCategories] as const).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-sm border px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.12em] transition",
                  cat === c ? "border-navy bg-navy text-navy-foreground" : "border-border bg-card text-navy hover:border-brand",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((m) => <MachineCard key={m.slug} machine={m} />)}
          </div>
        </div>
      </section>
      <CtaBand title="Request Machinery Information" />
    </>
  );
}
