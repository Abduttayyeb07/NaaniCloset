"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import { featuredProducts } from "@/data/products";

export default function FeaturedCollection() {
  return (
    <SectionWrapper id="collections" className="py-32 md:py-48 bg-cream">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 space-y-4"
        >
          <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-dusty-rose font-semibold bg-dusty-rose/5 px-4 py-1.5 rounded-full inline-block">
            The Curation
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl text-charcoal leading-tight">
            Hand-picked for your <br />
            <span className="italic">Little One</span>
          </h2>
          <div className="w-12 h-px bg-charcoal/10 mx-auto pt-6" />
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {featuredProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F2EDE9] mb-6 rounded-[4px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              {/* Overlay elements */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur px-2.5 py-1 text-[9px] uppercase tracking-widest text-charcoal font-medium shadow-sm">
                  {product.age}
                </span>
              </div>
              <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <button className="w-full bg-white text-charcoal py-3 text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl border border-charcoal/5">
                  Quick View
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-1 text-left">
              <span className="text-[10px] uppercase tracking-widest text-charcoal/30 font-medium">
                {product.category}
              </span>
              <h3 className="font-playfair text-lg text-charcoal group-hover:text-dusty-rose transition-colors duration-300">
                {product.name}
              </h3>
              <p className="font-inter text-sm text-charcoal/60">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
