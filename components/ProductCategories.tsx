"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { productCategories } from "@/lib/content";
import { Reveal } from "./Reveal";

function ParallaxCard({
  title,
  moq,
  image,
  items,
}: {
  title: string;
  moq: string;
  image: string;
  items: readonly string[];
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <article className="overflow-hidden border border-black/10 bg-white">
      <div className="relative h-64 overflow-hidden">
        <motion.div style={{ y }} className="h-[120%]">
          <Image
            src={image}
            alt={title}
            width={1280}
            height={900}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#c72a09]">MOQ: {moq}</p>
        <ul className="space-y-1 text-sm text-black/75">
          {items.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ProductCategories() {
  return (
    <section id="categories" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">
            Product Categories
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight lg:text-5xl">
            Flexible category support with clear MOQ expectations.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, idx) => (
            <Reveal key={category.title} delay={idx * 0.1}>
              <ParallaxCard {...category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
