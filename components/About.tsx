"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutContent } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

export function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="about" className="border-t border-black/10 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">About</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-5xl">{aboutContent.title}</h2>
          <p className="mt-5 max-w-xl text-black/75">{aboutContent.body}</p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-black/55">Established</p>
              <p className="mt-2 text-4xl font-black tracking-tight text-[#c72a09]">
                <Counter target={aboutContent.established} />
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-black/55">Experience</p>
              <p className="mt-2 text-4xl font-black tracking-tight text-[#c72a09]">
                <Counter target={aboutContent.experience} suffix="+ yrs" />
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {aboutContent.markets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]"
              >
                {market} Market
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-[440px] overflow-hidden border border-black/10">
            <motion.div style={{ y }} className="h-[120%]">
              <Image
                src={aboutContent.image}
                alt="Factory production environment"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
