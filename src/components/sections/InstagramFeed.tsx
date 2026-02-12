"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { instagramPosts } from "@/data/products";

export default function InstagramFeed() {
  return (
    <SectionWrapper id="instagram" className="py-20 md:py-28">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-0.5 bg-dusty-rose mx-auto mb-5"
        />
        <p className="font-inter text-xs uppercase tracking-[0.3em] text-dusty-rose mb-3">
          @naaniscloset
        </p>
        <h2 className="font-playfair text-3xl md:text-5xl text-charcoal">
          Tiny Style Inspo
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {instagramPosts.map((post, i) => (
          <motion.a
            key={post.id}
            href="#"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.07,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.04 }}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
          >
            <img
              src={post.image}
              alt="Instagram post"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-dusty-rose/0 group-hover:bg-dusty-rose/45 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  className="mx-auto mb-1"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
                <p className="text-white text-[10px] font-inter font-medium">
                  ♥ {post.likes.toLocaleString()}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center mt-8"
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 font-inter text-xs uppercase tracking-wider text-charcoal hover:text-dusty-rose transition-colors group"
        >
          Follow @naaniscloset
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
