import Image from "next/image";
import { partners } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-black/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">
            Our Partners
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-5xl">
            Trusted by leading global brands.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 items-center gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, idx) => (
            <Reveal
              key={partner.name}
              delay={idx * 0.06}
              className="group flex items-center justify-center"
            >
              <Image
                src={partner.image}
                alt={`${partner.name} logo`}
                width={240}
                height={120}
                className="max-h-16 w-auto object-contain opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
