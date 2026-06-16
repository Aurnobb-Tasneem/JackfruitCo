import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { processStats } from "@/lib/content";

export function ProductionProcess() {
  return (
    <section id="process" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            Production Process
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-5xl">
            Structured for consistency, monitored at every stage.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processStats.map((stat, idx) => (
            <Reveal
              key={stat.label}
              delay={idx * 0.1}
              className="border border-white/20 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
              <p className="mt-4 text-4xl font-black tracking-tight text-[#ff5231]">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75">{stat.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
