"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";

const stats = [
  { label: "Handcrafted Pieces", value: "2,500+" },
  { label: "Happy Families", value: "1,200+" },
  { label: "Years of Love", value: "15+" },
];

export default function StorySection() {
  return (
    <section id="about" className="bg-[#1A1A1A] py-32 md:py-56 overflow-hidden">
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          
          {/* Visual Story */}
          <div className="relative group">
            <div className="aspect-[3/4] rounded-sm overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1544126592-807daa2b567b?q=80&w=1000&auto=format&fit=crop" 
                alt="Naani's Workshop" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-charcoal/20" />
            </div>
            {/* Float badge */}
            <motion.div 
              style={{ rotate: -8 }}
              className="absolute -bottom-8 -right-8 md:-right-12 bg-white p-8 md:p-12 shadow-2xl max-w-[240px]"
            >
              <div className="space-y-4">
                <div className="w-8 h-px bg-dusty-rose" />
                <p className="font-playfair text-xl md:text-2xl text-charcoal leading-tight">
                  Handmade with <span className="italic">Naani&apos;s Love</span>
                </p>
                <div className="flex gap-2">
                  <span className="text-[9px] uppercase tracking-widest text-charcoal/30">GOTS Organic</span>
                  <span className="text-[9px] uppercase tracking-widest text-charcoal/30">Plastic Free</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Written Story */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-white/30">Our Heritage</span>
              <h2 className="font-playfair text-4xl md:text-7xl text-white leading-tight">
                Stitches That <br />
                <span className="text-blush italic">Tell Stories.</span>
              </h2>
            </div>
            
            <p className="font-inter text-lg text-white/50 leading-relaxed font-light">
              It started in a sun-drenched corner of Naani&apos;s workshop, where the rhythmic hum of her old sewing machine became the heartbeat of our family. 
              Today, we carry that same warmth into every piece we create—using only soft, gentle threads that are as kind to the earth as they are to your little human.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <p className="font-playfair text-3xl text-white">{stat.value}</p>
                  <p className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/30">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </SectionWrapper>
    </section>
  );
}
