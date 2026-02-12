"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Product } from "@/data/products";
import Button from "./Button";
import { useState } from "react";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");

  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-soft-lg overflow-hidden max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 pointer-events-auto max-h-[90vh] overflow-y-auto">
              {/* Image */}
              <div className="relative aspect-[3/4] md:aspect-auto bg-cream">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Details */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="text-xs text-text-light font-inter uppercase tracking-widest mb-2">
                  {product.category}
                </p>
                <h2 className="font-playfair text-3xl text-charcoal leading-tight mb-3">
                  {product.name}
                </h2>
                <p className="font-inter text-2xl text-dusty-rose font-semibold mb-5">
                  ${product.price.toFixed(2)}
                </p>
                <p className="font-inter text-text-light text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Sizes */}
                <div className="mb-6">
                  <p className="font-inter text-xs text-text-light uppercase tracking-wider mb-3">
                    Size
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-full border-2 font-inter text-sm font-medium transition-colors cursor-pointer ${
                          selectedSize === size
                            ? "border-dusty-rose bg-blush-light text-charcoal"
                            : "border-gray-200 text-text-light hover:border-dusty-rose"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="primary" className="flex-1">
                    Add to Cart
                  </Button>
                  <Button variant="secondary" onClick={onClose}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
