import { valuesContent } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Values() {
  return (
    <section id="values" className="border-t border-black/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">Values</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight lg:text-5xl">
            Principles that shape every production decision.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {valuesContent.map((value, idx) => (
            <Reveal key={value.title} delay={idx * 0.08} className="border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold tracking-[0.16em] text-[#c72a09]">
                {(idx + 1).toString().padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/75">{value.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
