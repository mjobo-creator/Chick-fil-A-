import { motion } from 'motion/react';
import React, { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  width?: "fit-content" | "100%";
  key?: React.Key;
}

export default function ScrollReveal({ children, delay = 0, className = "", width = "100%" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.165, 0.84, 0.44, 1] }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
