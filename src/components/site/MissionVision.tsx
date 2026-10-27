import { Cog, Handshake, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import { coreValues, mission, vision } from "@/data/company";

const valueIcons = [ShieldCheck, Handshake, TrendingUp, Cog, Lightbulb];

export function MissionVisionValues() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="space-y-10">
          <div>
            <h2 className="rule-brand text-3xl font-semibold uppercase text-brand">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-foreground/80">{mission}</p>
          </div>
          <div>
            <h2 className="rule-brand text-3xl font-semibold uppercase text-brand">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-foreground/80">{vision}</p>
          </div>
        </div>
        <div>
          <h2 className="rule-brand text-3xl font-semibold uppercase text-brand">Core Values</h2>
          <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {coreValues.map((v, i) => {
              const Icon = valueIcons[i] ?? Cog;
              return (
                <li key={v} className="flex flex-col items-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-navy-foreground ring-4 ring-accent">
                    <Icon className="h-7 w-7" aria-hidden />
                  </span>
                  <span className="mt-3 text-sm font-semibold text-navy">{v}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
