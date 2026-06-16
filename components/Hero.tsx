"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/content";
import { Marquee } from "./Marquee";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl gap-10 px-6 pb-14 lg:grid-cols-2 lg:items-end lg:px-10">
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-black/65"
          >
            {heroContent.eyebrow}
          </motion.p>

          <div className="leading-[0.88]">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: "easeOut" }}
              className="text-[14vw] font-black tracking-[-0.05em] text-[#c72a09] sm:text-[12vw] lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6.5rem]"
            >
              {heroContent.titleMain}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-2 text-2xl font-bold tracking-tight lg:text-3xl"
            >
              {heroContent.titleSub}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-xl text-base leading-relaxed text-black/75 lg:text-lg"
          >
            {heroContent.tagline}
          </motion.p>

          <MagneticButton
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#c72a09] hover:border-[#c72a09]"
          >
            Start A Project
          </MagneticButton>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[560px] lg:mr-0 lg:ml-auto lg:justify-self-end"
        >
          <div className="absolute -left-4 top-6 h-40 w-20 bg-[#c72a09] sm:-left-8" />
          <div className="absolute -bottom-5 right-4 h-20 w-36 border-2 border-[#c72a09]" />
          <div className="relative overflow-hidden border border-black/15 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.14)]">
            <Image
              src="/images/hero.jpg"
              alt="Fashion production visual"
              width={1200}
              height={1500}
              priority
              className="h-[540px] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <Marquee items={[...heroContent.marquee]} />
    </section>
  );
}
