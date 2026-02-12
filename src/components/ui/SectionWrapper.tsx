"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full max-w-7xl mx-auto px-5 md:px-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}
