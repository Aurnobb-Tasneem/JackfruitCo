import {
  BadgeCheck,
  ClipboardCheck,
  Globe,
  Palette,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { servicesContent } from "@/lib/content";
import { Reveal } from "./Reveal";

const iconByIndex: LucideIcon[] = [Globe, Palette, ShieldCheck, BadgeCheck, ClipboardCheck, Truck];

export function Services() {
  return (
    <section id="services" className="border-t border-black/10 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">Services</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight lg:text-5xl">
            A complete operating model from concept alignment to on-time delivery.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicesContent.map((service, idx) => {
            const Icon = iconByIndex[idx];
            return (
              <Reveal
                key={service.title}
                delay={idx * 0.07}
                className="group border border-black/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-black/25"
              >
                <Icon size={20} className="text-[#c72a09]" />
                <h3 className="mt-4 text-xl font-bold tracking-tight">{service.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-black/75">
                  {service.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
