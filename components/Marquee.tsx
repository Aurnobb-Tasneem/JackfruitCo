"use client";

import { motion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-black/15 bg-[#c72a09] py-3 text-white">
      <motion.div
        className="flex min-w-max gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.22em]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, idx) => (
          <span key={`${item}-${idx}`} className="pl-8">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
