"use client";

import { motion, type HTMLMotionProps, useMotionValue, useSpring, useTransform } from "framer-motion";

export function MagneticButton({
  children,
  className,
  ...props
}: HTMLMotionProps<"button">) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 250, damping: 18 });
  const y = useSpring(my, { stiffness: 250, damping: 18 });
  const rotate = useTransform(x, [-20, 20], [-2, 2]);

  return (
    <motion.button
      {...props}
      style={{ x, y, rotate }}
      className={className}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;
        mx.set(offsetX * 0.2);
        my.set(offsetY * 0.2);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {children}
    </motion.button>
  );
}
