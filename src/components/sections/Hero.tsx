"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════
   NAANI'S CLOSET — SVG SCROLL STORYTELLING ENGINE
   A Wix-quality cinematic scroll experience.
   ═══════════════════════════════════════════════════ */

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          // markers: true, // uncomment for debugging
        },
      });

      /* ─── ACT 0 → 1: Title fades out, Sewing machine fades in ─── */
      tl.to(".hero-title", { opacity: 0, y: -60, scale: 0.95, duration: 0.8, ease: "power2.inOut" })
        .fromTo(".scene-atelier", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 }, "-=0.3")
        // Needle starts pumping
        .fromTo(".sewing-needle", { y: 0 }, { y: 12, duration: 0.08, repeat: 14, yoyo: true, ease: "power1.inOut" }, "-=0.8")
        // Thread appears and draws across
        .fromTo(".thread-line", { strokeDashoffset: 600 }, { strokeDashoffset: 0, duration: 1.5, ease: "power1.inOut" }, "-=1")
        // Fabric panels start appearing under needle
        .fromTo(".fabric-piece-1", { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 0.6, transformOrigin: "top center" }, "-=0.8")
        .fromTo(".fabric-piece-2", { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 0.6, transformOrigin: "top center" }, "-=0.3")

        /* ─── ACT 1 → 2: Atelier fades, Dress construction ─── */
        .to(".scene-atelier", { opacity: 0, y: -40, duration: 0.5 }, "+=0.3")
        .fromTo(".scene-dress", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)" }, "-=0.2")
        // Text for dress
        .fromTo(".text-dress", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
        // Stitch marks animate in
        .fromTo(".stitch-mark", { strokeDashoffset: 200 }, { strokeDashoffset: 0, duration: 1, stagger: 0.1 }, "-=0.5")
        // Dress pieces assemble
        .fromTo(".dress-bodice", { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.6")
        .fromTo(".dress-skirt", { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 0.6, transformOrigin: "top center", ease: "power2.out" }, "-=0.3")
        .fromTo(".dress-sleeve-l", { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.4 }, "-=0.4")
        .fromTo(".dress-sleeve-r", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4 }, "-=0.4")
        // Little sparkle
        .fromTo(".sparkle", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.3, stagger: 0.08, ease: "back.out(3)" }, "-=0.2")

        /* ─── ACT 2 → 3: Dress floats into the Closet ─── */
        .to(".text-dress", { opacity: 0, y: -20, duration: 0.3 }, "+=0.3")
        .to(".scene-dress", { scale: 0.5, y: -100, opacity: 0, duration: 0.8, ease: "power2.in" })
        .fromTo(".scene-closet", { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.4")
        // Closet door opens
        .fromTo(".closet-door-l", { rotateY: 0 }, { rotateY: -70, duration: 0.8, transformOrigin: "left center", ease: "power2.inOut" }, "-=0.6")
        .fromTo(".closet-door-r", { rotateY: 0 }, { rotateY: 70, duration: 0.8, transformOrigin: "right center", ease: "power2.inOut" }, "-=0.8")
        // Garments inside reveal
        .fromTo(".closet-garment", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3")
        // Final text
        .fromTo(".text-closet", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        // CTA button
        .fromTo(".cta-final", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-cream" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* ═══ BACKGROUND ATMOSPHERE ═══ */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-dusty-rose/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#FDE8D0]/10 rounded-full blur-[130px]" />
        </div>

        {/* ═══ ACT 0: BRAND TITLE ═══ */}
        <div className="hero-title absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-playfair text-[clamp(4rem,13vw,10rem)] leading-[0.85] text-charcoal tracking-tighter">
            Naani&apos;s <br />
            <span className="italic text-dusty-rose">Closet</span>
          </h1>
          <p className="mt-8 font-inter text-charcoal/40 text-sm md:text-base max-w-md leading-relaxed">
            Heirloom-quality toddler fashion, handcrafted with love.
          </p>
          <div className="mt-16 flex flex-col items-center gap-3 animate-bounce">
            <span className="font-inter text-[9px] uppercase tracking-[0.5em] text-charcoal/20">
              Scroll to unravel
            </span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-charcoal/15">
              <rect x="4" y="0" width="8" height="24" rx="4" stroke="currentColor" strokeWidth="1"/>
              <circle cx="8" cy="6" r="2" fill="currentColor" className="animate-[scrollDot_2s_infinite]" />
            </svg>
          </div>
        </div>

        {/* ═══ ACT 1: THE ATELIER — SEWING MACHINE ═══ */}
        <div className="scene-atelier absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0">
          <span className="font-inter text-[10px] uppercase tracking-[0.5em] text-charcoal/30 mb-8">The Atelier</span>
          <svg viewBox="0 0 400 300" className="w-[320px] md:w-[420px] h-auto" fill="none">
            {/* Table */}
            <rect x="40" y="220" width="320" height="12" rx="3" fill="#E8D5C4" />
            <rect x="60" y="232" width="12" height="50" rx="2" fill="#D4BFA8" />
            <rect x="328" y="232" width="12" height="50" rx="2" fill="#D4BFA8" />

            {/* Machine Body */}
            <rect x="120" y="140" width="160" height="80" rx="12" fill="#F7C8D0" />
            <rect x="130" y="150" width="140" height="60" rx="8" fill="#F0B8C2" />
            
            {/* Machine Arm (top) */}
            <rect x="120" y="90" width="30" height="60" rx="6" fill="#F7C8D0" />
            <rect x="115" y="80" width="170" height="20" rx="8" fill="#F7C8D0" />
            
            {/* Spool */}
            <circle cx="135" cy="78" r="10" fill="#D88C9A" />
            <circle cx="135" cy="78" r="4" fill="#C77B8A" />

            {/* Needle Assembly */}
            <g className="sewing-needle">
              <rect x="268" y="90" width="3" height="35" rx="1" fill="#888" />
              <polygon points="268,125 271,125 269.5,132" fill="#AAA" />
            </g>

            {/* Thread from spool to needle */}
            <path className="thread-line" d="M135 68 L135 50 L270 50 L270 90" 
              stroke="#D88C9A" strokeWidth="1.5" strokeDasharray="600" strokeDashoffset="600" fill="none" />

            {/* Fabric coming out */}
            <g className="fabric-piece-1" style={{ opacity: 0 }}>
              <rect x="250" y="210" width="100" height="12" rx="2" fill="#FADCE5" />
              <line x1="260" y1="213" x2="340" y2="213" stroke="#F0B8C2" strokeWidth="0.5" strokeDasharray="3,3" />
            </g>
            <g className="fabric-piece-2" style={{ opacity: 0 }}>
              <rect x="260" y="200" width="80" height="12" rx="2" fill="#F0D4DC" />
              <line x1="270" y1="203" x2="330" y2="203" stroke="#E8AABB" strokeWidth="0.5" strokeDasharray="3,3" />
            </g>

            {/* Detail: Stitch pattern on machine */}
            <circle cx="170" cy="175" r="3" fill="#E8AABB" />
            <circle cx="185" cy="175" r="3" fill="#E8AABB" />
            <circle cx="200" cy="175" r="3" fill="#E8AABB" />
            
            {/* Wheel */}
            <circle cx="260" cy="180" r="18" stroke="#D88C9A" strokeWidth="3" fill="none" />
            <circle cx="260" cy="180" r="4" fill="#D88C9A" />
          </svg>
          <p className="font-playfair text-xl md:text-2xl text-charcoal/70 mt-8 italic">
            Every stitch, a whisper of love...
          </p>
        </div>

        {/* ═══ ACT 2: THE DRESS — CONSTRUCTION ═══ */}
        <div className="scene-dress absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0">
          <div className="text-dress text-center mb-8">
            <span className="font-inter text-[10px] uppercase tracking-[0.5em] text-dusty-rose">The Garment</span>
          </div>
          <svg viewBox="0 0 300 400" className="w-[220px] md:w-[280px] h-auto" fill="none">
            {/* Hanger */}
            <path d="M150 30 L150 50" stroke="#888" strokeWidth="2" />
            <path d="M115 80 Q150 40 185 80" stroke="#888" strokeWidth="2.5" fill="none" />
            <circle cx="150" cy="28" r="5" stroke="#888" strokeWidth="2" fill="none" />

            {/* Dress Bodice */}
            <g className="dress-bodice" style={{ opacity: 0 }}>
              <path d="M115 80 L105 130 L195 130 L185 80 Z" fill="#F7C8D0" />
              {/* Neckline */}
              <path d="M125 80 Q150 100 175 80" stroke="#E8AABB" strokeWidth="1.5" fill="none" />
              {/* Center seam */}
              <line x1="150" y1="85" x2="150" y2="130" stroke="#E8AABB" strokeWidth="0.8" strokeDasharray="4,3" />
            </g>

            {/* Dress Skirt */}
            <g className="dress-skirt" style={{ opacity: 0 }}>
              <path d="M105 130 L75 340 L225 340 L195 130 Z" fill="#FADCE5" />
              {/* Pleats */}
              <line x1="120" y1="140" x2="95" y2="335" stroke="#F0C4D0" strokeWidth="0.8" />
              <line x1="150" y1="130" x2="150" y2="340" stroke="#F0C4D0" strokeWidth="0.8" />
              <line x1="180" y1="140" x2="205" y2="335" stroke="#F0C4D0" strokeWidth="0.8" />
              {/* Hem detail */}
              <path d="M75 335 Q100 345 125 335 Q150 345 175 335 Q200 345 225 335" stroke="#E8AABB" strokeWidth="1" fill="none" />
            </g>

            {/* Left Sleeve */}
            <g className="dress-sleeve-l" style={{ opacity: 0 }}>
              <path d="M115 80 L80 110 L90 125 L105 100 Z" fill="#F0D4DC" />
            </g>

            {/* Right Sleeve */}
            <g className="dress-sleeve-r" style={{ opacity: 0 }}>
              <path d="M185 80 L220 110 L210 125 L195 100 Z" fill="#F0D4DC" />
            </g>

            {/* Stitch marks around dress */}
            <path className="stitch-mark" d="M100 140 L95 150" stroke="#D88C9A" strokeWidth="1" strokeDasharray="200" strokeDashoffset="200" />
            <path className="stitch-mark" d="M200 140 L205 150" stroke="#D88C9A" strokeWidth="1" strokeDasharray="200" strokeDashoffset="200" />
            <path className="stitch-mark" d="M90 200 L85 210" stroke="#D88C9A" strokeWidth="1" strokeDasharray="200" strokeDashoffset="200" />
            <path className="stitch-mark" d="M210 200 L215 210" stroke="#D88C9A" strokeWidth="1" strokeDasharray="200" strokeDashoffset="200" />

            {/* Sparkles */}
            <g className="sparkle" style={{ opacity: 0 }}><polygon points="70,100 73,106 80,106 74,110 76,117 70,113 64,117 66,110 60,106 67,106" fill="#FFD700" /></g>
            <g className="sparkle" style={{ opacity: 0 }}><polygon points="230,90 232,94 237,94 233,97 234,102 230,99 226,102 227,97 223,94 228,94" fill="#FFD700" /></g>
            <g className="sparkle" style={{ opacity: 0 }}><polygon points="60,250 62,254 67,254 63,257 64,262 60,259 56,262 57,257 53,254 58,254" fill="#FFD700" /></g>
            <g className="sparkle" style={{ opacity: 0 }}><polygon points="240,270 242,274 247,274 243,277 244,282 240,279 236,282 237,277 233,274 238,274" fill="#FFD700" /></g>

            {/* Little bow */}
            <path d="M143 125 Q148 120 150 125 Q152 120 157 125" stroke="#D88C9A" strokeWidth="1.5" fill="none" />
          </svg>
          <p className="font-playfair text-xl md:text-2xl text-charcoal/70 mt-6 italic text-dress">
            A tiny outfit is born ✨
          </p>
        </div>

        {/* ═══ ACT 3: THE CLOSET — FINAL DESTINATION ═══ */}
        <div className="scene-closet absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0">
          <span className="font-inter text-[10px] uppercase tracking-[0.5em] text-charcoal/30 mb-8 text-closet opacity-0">The Collection</span>
          <div className="relative" style={{ perspective: "800px" }}>
            <svg viewBox="0 0 400 350" className="w-[320px] md:w-[440px] h-auto" fill="none">
              {/* Closet Frame */}
              <rect x="30" y="20" width="340" height="310" rx="6" fill="#3D2B1F" />
              <rect x="38" y="28" width="324" height="294" rx="4" fill="#4A3728" />
              
              {/* Left Door */}
              <g className="closet-door-l" style={{ transformOrigin: "38px 175px" }}>
                <rect x="38" y="28" width="162" height="294" rx="3" fill="#5C4033" />
                <rect x="45" y="35" width="148" height="280" rx="2" fill="#6B4F3C" stroke="#5C4033" strokeWidth="1" />
                <circle cx="185" cy="175" r="5" fill="#C4A77D" /> {/* Handle */}
              </g>

              {/* Right Door */}
              <g className="closet-door-r" style={{ transformOrigin: "362px 175px" }}>
                <rect x="200" y="28" width="162" height="294" rx="3" fill="#5C4033" />
                <rect x="207" y="35" width="148" height="280" rx="2" fill="#6B4F3C" stroke="#5C4033" strokeWidth="1" />
                <circle cx="215" cy="175" r="5" fill="#C4A77D" /> {/* Handle */}
              </g>

              {/* Inside: Rack */}
              <line x1="60" y1="75" x2="340" y2="75" stroke="#8B7355" strokeWidth="3" />

              {/* Garments hanging inside */}
              <g className="closet-garment" style={{ opacity: 0 }}>
                {/* Dress 1 - Pink */}
                <line x1="100" y1="75" x2="100" y2="90" stroke="#999" strokeWidth="1" />
                <path d="M85 90 L80 180 L120 180 L115 90 Z" fill="#F7C8D0" />
                <path d="M85 90 Q100 80 115 90" stroke="#E8AABB" strokeWidth="1" fill="none" />
              </g>

              <g className="closet-garment" style={{ opacity: 0 }}>
                {/* Dress 2 - Cream */}
                <line x1="160" y1="75" x2="160" y2="90" stroke="#999" strokeWidth="1" />
                <path d="M145 90 L138 190 L182 190 L175 90 Z" fill="#FCF5ED" />
                <path d="M145 90 Q160 80 175 90" stroke="#E8D5C4" strokeWidth="1" fill="none" />
              </g>

              <g className="closet-garment" style={{ opacity: 0 }}>
                {/* Dress 3 - Rose */}
                <line x1="220" y1="75" x2="220" y2="90" stroke="#999" strokeWidth="1" />
                <path d="M205 90 L198 185 L242 185 L235 90 Z" fill="#FADCE5" />
                <path d="M205 90 Q220 80 235 90" stroke="#F0B8C2" strokeWidth="1" fill="none" />
              </g>

              <g className="closet-garment" style={{ opacity: 0 }}>
                {/* Dress 4 - Lavender */}
                <line x1="280" y1="75" x2="280" y2="90" stroke="#999" strokeWidth="1" />
                <path d="M265 90 L258 175 L302 175 L295 90 Z" fill="#E8D5F0" />
                <path d="M265 90 Q280 80 295 90" stroke="#D4B8E0" strokeWidth="1" fill="none" />
              </g>

              {/* Shelf */}
              <rect x="50" y="230" width="300" height="4" fill="#8B7355" rx="1" />
              {/* Folded clothes on shelf */}
              <g className="closet-garment" style={{ opacity: 0 }}>
                <rect x="70" y="240" width="50" height="12" rx="2" fill="#F7C8D0" />
                <rect x="130" y="240" width="50" height="12" rx="2" fill="#FCF5ED" />
                <rect x="190" y="240" width="50" height="12" rx="2" fill="#E8D5F0" />
                <rect x="250" y="240" width="50" height="12" rx="2" fill="#FADCE5" />
              </g>
            </svg>
          </div>

          <div className="text-closet mt-8 text-center" style={{ opacity: 0 }}>
            <h2 className="font-playfair text-3xl md:text-5xl text-charcoal leading-tight tracking-tight">
              Welcome to <span className="italic text-dusty-rose">Naani&apos;s Closet</span>
            </h2>
            <p className="font-inter text-charcoal/40 text-sm mt-4 max-w-sm mx-auto">
              A sanctuary of tiny fashion, where every piece tells a story.
            </p>
          </div>

          <div className="cta-final mt-10" style={{ opacity: 0 }}>
            <Button variant="primary" className="px-14 py-5 rounded-none uppercase text-xs tracking-[0.3em] bg-charcoal text-white hover:bg-black transition-all shadow-2xl">
              Shop The Collection
            </Button>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
