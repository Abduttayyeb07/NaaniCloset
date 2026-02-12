"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-inter font-medium rounded-full transition-colors cursor-pointer text-sm md:text-base";

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-white px-8 py-3.5 hover:bg-dusty-rose shadow-soft hover:shadow-soft-lg",
  secondary:
    "border-2 border-charcoal text-charcoal px-8 py-3 hover:bg-charcoal hover:text-white",
  ghost:
    "text-charcoal px-6 py-3 hover:text-dusty-rose",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
