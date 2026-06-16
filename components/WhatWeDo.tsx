import { Reveal } from "./Reveal";
import { whatWeDo } from "@/lib/content";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-t border-black/10 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-black/60">
            {whatWeDo.lead}
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
            Sourcing, development, production, and logistics under one accountable structure.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/75">
            {whatWeDo.body}
          </p>
        </Reveal>

        <Reveal delay={0.12} className="grid gap-8">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c72a09]">
              Core Statements
            </h3>
            <ul className="space-y-2 text-black/80">
              {whatWeDo.supportPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#c72a09]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c72a09]">
              Product Coverage
            </h3>
            <div className="flex flex-wrap gap-3">
              {whatWeDo.productCoverage.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm text-black/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
