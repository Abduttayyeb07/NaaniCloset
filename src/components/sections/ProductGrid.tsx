"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import ProductCard from "../ui/ProductCard";
import QuickViewModal from "../ui/QuickViewModal";
import { products, Product } from "@/data/products";

const categories = ["All", ...new Set(products.map((p) => p.category))];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <SectionWrapper id="shop" className="py-32 md:py-48 bg-white">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-xl">
            <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-charcoal/30 mb-4 block">
              The Archive
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl text-charcoal leading-tight">
              Essential Pieces for <br />
              <span className="italic">Every Tiny Moment</span>
            </h2>
          </div>
          
          {/* Category filter */}
          <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-[10px] uppercase tracking-widest px-6 py-3 border-b-2 transition-all duration-500 whitespace-nowrap ${
                  activeCategory === cat
                    ? "border-charcoal text-charcoal font-bold"
                    : "border-transparent text-charcoal/20 hover:text-charcoal/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
                index={i}
              />
            ))}
          </AnimatePresence>
        </div>
      </SectionWrapper>

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
