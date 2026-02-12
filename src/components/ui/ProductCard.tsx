"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  index?: number;
}

export default function ProductCard({ product, onQuickView, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group cursor-pointer"
      onClick={() => onQuickView?.(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F2EDE9] mb-4 rounded-[4px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Subtle Overlay Elements */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-0.5 text-[8px] uppercase tracking-[0.2em] text-charcoal font-bold shadow-sm rounded-sm">
            {product.age}
          </span>
        </div>

        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full bg-white text-charcoal py-2.5 text-[9px] uppercase tracking-[0.2em] font-bold shadow-xl border border-charcoal/5">
            Quick View
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="space-y-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-playfair text-base text-charcoal group-hover:text-dusty-rose transition-colors duration-300 leading-tight">
            {product.name}
          </h3>
          <p className="font-inter text-sm text-charcoal/50 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <p className="font-inter text-[9px] uppercase tracking-[0.2em] text-charcoal/25 font-medium">
          {product.category}
        </p>
      </div>
    </motion.div>
  );
}
