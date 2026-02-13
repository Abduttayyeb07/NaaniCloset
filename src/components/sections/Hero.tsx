"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════
   NAANI'S CLOSET — 3D SVG SCROLL STORYTELLING
   Logo-derived pastel rainbow palette + 3D depth
   ═══════════════════════════════════════════════════ */

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. CONSTANT NEEDLE MOTION (Infinite Loop)
      gsap.to(".sewing-needle", {
        y: 12,
        duration: 0.15,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // 2. SCROLL TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      /* ─── ENTRANCE (ACT 0) ─── */
      const entranceTl = gsap.timeline();
      entranceTl.fromTo(".rainbow-band", 
        { strokeDashoffset: 800 },
        { strokeDashoffset: 0, duration: 1.5, stagger: 0.1, ease: "power2.inOut" }
      )
      .fromTo(".hero-main-title", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );

      /* ─── SCROLL STORY ─── */
      tl.to(".hero-intro-group", { opacity: 0, y: -60, scale: 0.95, duration: 1 })
        .to(".scene-rainbow", { opacity: 0, y: -40, duration: 1 }, "<")
        .fromTo(".scene-atelier", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 }, "-=0.5")
        .fromTo(".atelier-text", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=1")
        // Thread draws
        .fromTo(".thread-line", { strokeDashoffset: 700 }, { strokeDashoffset: 0, duration: 2, ease: "power1.inOut" }, "-=1.5")
        // Fabric emerges
        .fromTo(".fabric-piece-1", { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.8, transformOrigin: "left center" }, "-=1")
        .fromTo(".fabric-piece-2", { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.8, transformOrigin: "left center" }, "-=0.5")
        .fromTo(".fabric-piece-3", { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.8, transformOrigin: "left center" }, "-=0.3")

        .to(".atelier-text", { opacity: 0, y: -20, duration: 0.3 }, "+=0.4")
        .to(".scene-atelier", { opacity: 0, y: -60, scale: 0.85, duration: 0.8 })
        .fromTo(".scene-dress", { opacity: 0, scale: 0.6, rotateY: -30 }, { opacity: 1, scale: 1, rotateY: 0, duration: 1.2, ease: "back.out(1.4)" }, "-=0.3")
        .fromTo(".dress-text", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.6")
        .fromTo(".dress-bodice", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.6, ease: "bounce.out" }, "-=0.8")
        .fromTo(".dress-skirt", { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 0.8, transformOrigin: "top center", ease: "elastic.out(1, 0.5)" }, "-=0.3")
        .fromTo(".dress-sleeve-l", { opacity: 0, x: 30, rotate: 15 }, { opacity: 1, x: 0, rotate: 0, duration: 0.5 }, "-=0.5")
        .fromTo(".dress-sleeve-r", { opacity: 0, x: -30, rotate: -15 }, { opacity: 1, x: 0, rotate: 0, duration: 0.5 }, "-=0.5")
        .fromTo(".stitch-mark", { strokeDashoffset: 200 }, { strokeDashoffset: 0, duration: 0.8, stagger: 0.08 }, "-=0.4")
        .fromTo(".sparkle", { opacity: 0, scale: 0, rotation: -90 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.3, stagger: 0.06, ease: "back.out(4)" }, "-=0.2")
        .fromTo(".dress-bow", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.4, ease: "elastic.out(1.2, 0.4)" }, "-=0.2")

        .to(".dress-text", { opacity: 0, y: -20, duration: 0.3 }, "+=0.5")
        .to(".scene-dress", { scale: 0.35, y: -180, x: 0, opacity: 0, duration: 1, ease: "power3.in" })
        .fromTo(".scene-closet", { opacity: 0, y: 120, rotateX: 10 }, { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: "power3.out" }, "-=0.4")
        .fromTo(".closet-door-l", { rotateY: 0 }, { rotateY: -75, duration: 1, transformOrigin: "left center", ease: "power2.inOut" }, "-=0.6")
        .fromTo(".closet-door-r", { rotateY: 0 }, { rotateY: 75, duration: 1, transformOrigin: "right center", ease: "power2.inOut" }, "-=1")
        .fromTo(".closet-garment", { opacity: 0, y: 30, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "back.out(1.5)" }, "-=0.3")
        .fromTo(".shelf-item", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, "-=0.3")
        .fromTo(".closet-text", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.2")
        .fromTo(".cta-final", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative" style={{ height: "600vh", background: "linear-gradient(180deg, #FFFFFF 0%, #F9F9F9 50%, #FFFFFF 100%)" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center" style={{ perspective: "1500px" }}>
        
        {/* ═══ ATMOSPHERIC BACKGROUND ═══ */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full blur-[200px] opacity-10" style={{ background: "radial-gradient(circle, #E9A7B3, #F0C3A4)" }} />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full blur-[180px] opacity-10" style={{ background: "radial-gradient(circle, #C3B9E0, #B0D4CF)" }} />
        </div>

        {/* ═══ RAINBOW ARC (PERSISTENT & DARKER) ═══ */}
        <div className="scene-rainbow absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 500 260" className="w-[450px] md:w-[700px] h-auto opacity-70">
            <path className="rainbow-band" d="M50,240 Q50,50 250,50 Q450,50 450,240" stroke="#9A8CC7" strokeWidth="8" fill="none" strokeDasharray="800" strokeDashoffset="800" />
            <path className="rainbow-band" d="M70,240 Q70,70 250,70 Q430,70 430,240" stroke="#7CB3AB" strokeWidth="8" fill="none" strokeDasharray="800" strokeDashoffset="800" />
            <path className="rainbow-band" d="M90,240 Q90,90 250,90 Q410,90 410,240" stroke="#71A8B1" strokeWidth="8" fill="none" strokeDasharray="800" strokeDashoffset="800" />
            <path className="rainbow-band" d="M110,240 Q110,110 250,110 Q390,110 390,240" stroke="#DB9A6E" strokeWidth="8" fill="none" strokeDasharray="800" strokeDashoffset="800" />
            <path className="rainbow-band" d="M130,240 Q130,130 250,130 Q370,130 370,240" stroke="#B87A87" strokeWidth="8" fill="none" strokeDasharray="800" strokeDashoffset="800" />
          </svg>
        </div>

        {/* ═══ ACT 0: BRAND ENTRANCE (LOGO REMOVED) ═══ */}
        <div className="hero-intro-group absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <div className="hero-main-title">
            <h1 className="font-playfair text-[clamp(3.5rem,11vw,8rem)] leading-[0.85] tracking-tighter" style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #D88C9A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Handcrafted <br />
              <span className="italic">with Love</span>
            </h1>
            <p className="mt-8 font-inter text-[#444444] text-sm md:text-base font-medium max-w-sm mx-auto leading-relaxed">
              Traditional kids&apos; ethnic wear and handcrafted heirlooms, stitched one story at a time.
            </p>
            <div className="mt-14 flex flex-col items-center gap-4">
              <span className="font-inter text-[9px] uppercase tracking-[0.6em] text-charcoal/30 font-bold">
                SCROLL TO UNRAVEL THE STORY
              </span>
              <div className="w-px h-16 bg-gradient-to-b from-charcoal/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* ═══ ACT 1: THE ATELIER — 3D SEWING MACHINE ═══ */}
        <div className="scene-atelier absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0" style={{ transformStyle: "preserve-3d" }}>
          <svg viewBox="0 0 440 340" className="w-[340px] md:w-[480px] h-auto drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* 3D gradient for machine body */}
              <linearGradient id="machineBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F0C3A4" />
                <stop offset="50%" stopColor="#E9A7B3" />
                <stop offset="100%" stopColor="#D88C9A" />
              </linearGradient>
              <linearGradient id="machineArm" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E9A7B3" />
                <stop offset="100%" stopColor="#D88C9A" />
              </linearGradient>
              <linearGradient id="tableGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F9F9F9" />
                <stop offset="100%" stopColor="#EEEEEE" />
              </linearGradient>
              <linearGradient id="fabricGrad1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C3B9E0" />
                <stop offset="100%" stopColor="#ECEAF4" />
              </linearGradient>
              <linearGradient id="fabricGrad2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#B0D4CF" />
                <stop offset="100%" stopColor="#E5F1F0" />
              </linearGradient>
              <linearGradient id="fabricGrad3" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E9A7B3" />
                <stop offset="100%" stopColor="#F8E7EA" />
              </linearGradient>
              <filter id="shadow3d">
                <feDropShadow dx="4" dy="6" stdDeviation="6" floodColor="#E9A7B3" floodOpacity="0.2" />
              </filter>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Table with 3D depth */}
            <rect x="30" y="240" width="380" height="16" rx="4" fill="url(#tableGrad)" filter="url(#shadow3d)" />
            {/* Table edge (3D side) */}
            <rect x="30" y="254" width="380" height="6" rx="2" fill="#D4C080" />
            {/* Legs */}
            <rect x="60" y="256" width="14" height="55" rx="3" fill="#E8D48A" />
            <rect x="366" y="256" width="14" height="55" rx="3" fill="#D4C080" />

            {/* Machine Body — 3D with gradient */}
            <g filter="url(#shadow3d)">
              <rect x="130" y="150" width="180" height="90" rx="14" fill="url(#machineBody)" />
              {/* 3D highlight strip */}
              <rect x="135" y="155" width="170" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
              {/* Face detail */}
              <rect x="145" y="170" width="150" height="55" rx="8" fill="rgba(255,255,255,0.12)" />
            </g>

            {/* Machine Arm (top) — 3D */}
            <rect x="130" y="95" width="34" height="65" rx="8" fill="url(#machineArm)" />
            <rect x="125" y="82" width="190" height="24" rx="10" fill="url(#machineArm)" filter="url(#shadow3d)" />
            {/* Arm highlight */}
            <rect x="130" y="84" width="180" height="6" rx="3" fill="rgba(255,255,255,0.25)" />

            {/* Spool — 3D */}
            <circle cx="147" cy="78" r="14" fill="#D88C9A" />
            <circle cx="147" cy="78" r="8" fill="#C77B8A" />
            <circle cx="147" cy="78" r="3" fill="#B06878" />
            {/* Spool highlight */}
            <circle cx="143" cy="74" r="4" fill="rgba(255,255,255,0.35)" />

            {/* Needle Assembly — animated */}
            <g className="sewing-needle">
              <rect x="298" y="95" width="4" height="42" rx="2" fill="url(#machineArm)" />
              <rect x="298.5" y="95" width="3" height="42" rx="1" fill="#AAA" />
              <polygon points="298,137 302,137 300,146" fill="#CCC" />
              {/* Needle eye */}
              <circle cx="300" cy="142" r="1" fill="#888" />
            </g>

            {/* Thread from spool to needle */}
            <path className="thread-line" d="M147 64 L147 45 L220 45 L300 45 L300 95" 
              stroke="#D88C9A" strokeWidth="1.8" strokeDasharray="700" strokeDashoffset="700" fill="none" strokeLinecap="round" />

            {/* Fabric pieces emerging — using logo colors */}
            <g className="fabric-piece-1" style={{ opacity: 0 }}>
              <rect x="280" y="228" width="115" height="14" rx="3" fill="url(#fabricGrad1)" />
              <line x1="290" y1="233" x2="385" y2="233" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" strokeDasharray="4,3" />
            </g>
            <g className="fabric-piece-2" style={{ opacity: 0 }}>
              <rect x="290" y="215" width="95" height="14" rx="3" fill="url(#fabricGrad2)" />
              <line x1="300" y1="220" x2="375" y2="220" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" strokeDasharray="4,3" />
            </g>
            <g className="fabric-piece-3" style={{ opacity: 0 }}>
              <rect x="285" y="202" width="105" height="14" rx="3" fill="url(#fabricGrad3)" />
              <line x1="295" y1="207" x2="380" y2="207" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" strokeDasharray="4,3" />
            </g>

            {/* Dial details — 3D */}
            <circle cx="180" cy="195" r="5" fill="#E8AABB" />
            <circle cx="180" cy="195" r="2" fill="#D88C9A" />
            <circle cx="200" cy="195" r="5" fill="#D4C4E8" />
            <circle cx="200" cy="195" r="2" fill="#B8A0D0" />
            <circle cx="220" cy="195" r="5" fill="#B8E0D2" />
            <circle cx="220" cy="195" r="2" fill="#90C8B8" />

            {/* Wheel — 3D with shading */}
            <circle cx="280" cy="200" r="22" fill="rgba(255,255,255,0.1)" stroke="#D88C9A" strokeWidth="4" />
            <circle cx="280" cy="200" r="6" fill="#D88C9A" />
            <circle cx="278" cy="198" r="3" fill="rgba(255,255,255,0.3)" />

            {/* Rainbow curve (logo element) */}
            <path d="M50 280 Q60 250 80 240" stroke="#F4B8C1" strokeWidth="2" fill="none" opacity="0.3" />
            <path d="M55 285 Q65 255 85 245" stroke="#F9D4B0" strokeWidth="2" fill="none" opacity="0.3" />
            <path d="M60 290 Q70 260 90 250" stroke="#B8E0D2" strokeWidth="2" fill="none" opacity="0.3" />
          </svg>
          <p className="atelier-text font-playfair text-xl md:text-2xl italic mt-8 opacity-0" style={{ color: "#1A1A1A" }}>
            Where every stitch begins...
          </p>
        </div>

        {/* ═══ ACT 2: THE GARMENT — 3D ETHNIC WEAR ═══ */}
        <div className="scene-dress absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0" style={{ transformStyle: "preserve-3d" }}>
          <div className="dress-text text-center mb-6 opacity-0">
            <span className="font-inter text-[10px] uppercase tracking-[0.5em]" style={{ color: "#D88C9A" }}>Crafting Ethnic Heirlooms</span>
          </div>
          <svg viewBox="0 0 320 440" className="w-[240px] md:w-[300px] h-auto drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bodiceGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F9D4B0" />
                <stop offset="100%" stopColor="#F4B8C1" />
              </linearGradient>
              <linearGradient id="skirtGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F4B8C1" />
                <stop offset="40%" stopColor="#FCE4E8" />
                <stop offset="100%" stopColor="#D4C4E8" />
              </linearGradient>
              <linearGradient id="sleeveGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#B8E0D2" />
                <stop offset="100%" stopColor="#D0F0E4" />
              </linearGradient>
              <filter id="dressGlow">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#D88C9A" floodOpacity="0.2" />
              </filter>
            </defs>

            {/* Hanger — metallic 3D */}
            <path d="M160 30 L160 55" stroke="#BBB" strokeWidth="2.5" />
            <path d="M120 88 Q160 42 200 88" stroke="url(#machineArm)" strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="160" cy="28" r="7" stroke="#BBB" strokeWidth="2.5" fill="none" />
            {/* Hanger hook highlight */}
            <circle cx="158" cy="26" r="2" fill="rgba(255,255,255,0.5)" />

            {/* Ethnic Wear pieces with 3D depth */}
            <g filter="url(#dressGlow)">
              {/* Kurta/Top */}
              <g className="dress-bodice" style={{ opacity: 0 }}>
                <path d="M120 88 L105 160 L215 160 L200 88 Z" fill="url(#bodiceGrad)" />
                {/* Gold trimming at neck */}
                <path d="M130 88 Q160 105 190 88" stroke="#F9E8A0" strokeWidth="3" fill="none" />
                {/* Ethnic center pattern (Buta) */}
                <circle cx="160" cy="120" r="4" fill="#F9E8A0" />
                <circle cx="160" cy="132" r="3" fill="#F9E8A0" />
                <circle cx="160" cy="144" r="2" fill="#F9E8A0" />
              </g>

              {/* Flared Lehenga Skirt */}
              <g className="dress-skirt" style={{ opacity: 0 }}>
                <path d="M105 165 L50 380 L270 380 L215 165 Z" fill="url(#skirtGrad)" />
                {/* Gold Border (Gota Patti) */}
                <path d="M50 365 L270 365 L270 380 L50 380 Z" fill="#F9E8A0" opacity="0.8" />
                {/* Vertical Panels (Kalis) */}
                <line x1="125" y1="165" x2="90" y2="365" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="160" y1="160" x2="160" y2="365" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="195" y1="165" x2="230" y2="365" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </g>

              {/* Dupatta Drape (Ethnic Detail) */}
              <g className="dress-bow" style={{ opacity: 0 }}>
                <path d="M120 88 Q80 120 70 280" stroke="#C3B9E0" strokeWidth="10" fill="none" opacity="0.6" strokeLinecap="round" />
                <path d="M120 88 Q80 120 70 280" stroke="white" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4,4" />
              </g>

              {/* Sleeves */}
              <g className="dress-sleeve-l" style={{ opacity: 0 }}>
                <path d="M120 88 L90 130 L105 140 L115 105 Z" fill="url(#sleeveGrad)" />
              </g>
              <g className="dress-sleeve-r" style={{ opacity: 0 }}>
                <path d="M200 88 L230 130 L215 140 L205 105 Z" fill="url(#sleeveGrad)" />
              </g>
            </g>

            {/* Ethnic Sparkles */}
            <g className="sparkle" style={{ opacity: 0 }}><polygon points="60,110 63,118 72,118 65,123 67,132 60,127 53,132 55,123 48,118 57,118" fill="#F9E8A0" /></g>
            <g className="sparkle" style={{ opacity: 0 }}><polygon points="260,95 262,101 269,101 264,105 265,112 260,108 255,112 256,105 251,101 258,101" fill="#F9E8A0" /></g>
          </svg>
          <p className="dress-text font-playfair text-xl md:text-2xl italic mt-4 opacity-0" style={{ color: "#1A1A1A" }}>
            A traditional heirloom comes to life ✨
          </p>
        </div>

        {/* ═══ ACT 3: THE CLOSET — 3D WARDROBE ═══ */}
        <div className="scene-closet absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0" style={{ transformStyle: "preserve-3d" }}>
          <div className="relative" style={{ perspective: "1000px" }}>
            <svg viewBox="0 0 440 400" className="w-[340px] md:w-[500px] h-auto drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="closetWood" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B6F4A" />
                  <stop offset="50%" stopColor="#6B4F3C" />
                  <stop offset="100%" stopColor="#4A3728" />
                </linearGradient>
                <linearGradient id="closetInner" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFF9F5" />
                  <stop offset="100%" stopColor="#F5EDE5" />
                </linearGradient>
                <linearGradient id="doorGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7D6040" />
                  <stop offset="100%" stopColor="#5C4033" />
                </linearGradient>
                <filter id="closetShadow">
                  <feDropShadow dx="6" dy="10" stdDeviation="14" floodColor="#3D2B1F" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Closet Frame — 3D wooden */}
              <g filter="url(#closetShadow)">
                <rect x="30" y="20" width="380" height="350" rx="8" fill="url(#closetWood)" />
                {/* Inner wall */}
                <rect x="42" y="32" width="356" height="326" rx="4" fill="url(#closetInner)" />
              </g>

              {/* Top molding — 3D highlight */}
              <rect x="25" y="15" width="390" height="12" rx="4" fill="#9B7F58" />
              <rect x="25" y="15" width="390" height="4" rx="2" fill="rgba(255,255,255,0.2)" />

              {/* Left Door — 3D with perspective */}
              <g className="closet-door-l" style={{ transformOrigin: "42px 195px" }}>
                <rect x="42" y="32" width="178" height="326" rx="4" fill="url(#doorGrad)" />
                {/* Panel detail */}
                <rect x="55" y="50" width="152" height="135" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <rect x="55" y="200" width="152" height="135" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                {/* Handle */}
                <circle cx="210" cy="195" r="7" fill="#C4A77D" stroke="#B8976D" strokeWidth="1" />
                <circle cx="208" cy="193" r="2" fill="rgba(255,255,255,0.4)" />
              </g>

              {/* Right Door — 3D */}
              <g className="closet-door-r" style={{ transformOrigin: "398px 195px" }}>
                <rect x="220" y="32" width="178" height="326" rx="4" fill="url(#doorGrad)" />
                <rect x="233" y="50" width="152" height="135" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <rect x="233" y="200" width="152" height="135" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="230" cy="195" r="7" fill="#C4A77D" stroke="#B8976D" strokeWidth="1" />
                <circle cx="228" cy="193" r="2" fill="rgba(255,255,255,0.4)" />
              </g>

              {/* ── Inside: Rack ── */}
              <line x1="60" y1="85" x2="380" y2="85" stroke="#9B7F58" strokeWidth="4" strokeLinecap="round" />

              {/* Garment 1 — Ethnic Frock */}
              <g className="closet-garment" style={{ opacity: 0 }}>
                <line x1="110" y1="85" x2="110" y2="100" stroke="#BBB" strokeWidth="1.5" />
                <path d="M90 100 L75 210 L145 210 L130 100 Z" fill="url(#bodiceGrad)" />
                <path d="M75 195 L145 195" stroke="#F9E8A0" strokeWidth="3" />
              </g>

              {/* Garment 2 — Ethnic Kurta */}
              <g className="closet-garment" style={{ opacity: 0 }}>
                <line x1="180" y1="85" x2="180" y2="100" stroke="#BBB" strokeWidth="1.5" />
                <path d="M165 100 L155 210 L205 210 L195 100 Z" fill="url(#sleeveGrad)" />
                <path d="M180 100 L180 140" stroke="#F9E8A0" strokeWidth="1.5" />
              </g>

              {/* Garment 3 — Anarkali */}
              <g className="closet-garment" style={{ opacity: 0 }}>
                <line x1="250" y1="85" x2="250" y2="100" stroke="#BBB" strokeWidth="1.5" />
                <path d="M225 100 L200 220 L300 220 L275 100 Z" fill="#D4C4E8" />
                <circle cx="250" cy="120" r="3" fill="#F9E8A0" />
              </g>

              {/* Garment 4 — Ethnic Vest/Sherwani */}
              <g className="closet-garment" style={{ opacity: 0 }}>
                <line x1="330" y1="85" x2="330" y2="100" stroke="#BBB" strokeWidth="1.5" />
                <path d="M312 100 L305 200 L355 200 L348 100 Z" fill="#F9D4B0" />
                <line x1="333" y1="100" x2="333" y2="200" stroke="#5C4033" strokeOpacity="0.2" />
              </g>

              {/* Shelf */}
              <rect x="55" y="260" width="330" height="5" fill="#9B7F58" rx="2" />
              <rect x="55" y="265" width="330" height="3" fill="#7D6040" rx="1" />

              {/* Folded items on shelf */}
              <g className="shelf-item" style={{ opacity: 0 }}>
                <rect x="75" y="270" width="55" height="14" rx="3" fill="#F4B8C1" />
                <rect x="75" y="270" width="55" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
              </g>
              <g className="shelf-item" style={{ opacity: 0 }}>
                <rect x="145" y="270" width="55" height="14" rx="3" fill="#B8E0D2" />
                <rect x="145" y="270" width="55" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
              </g>
              <g className="shelf-item" style={{ opacity: 0 }}>
                <rect x="215" y="270" width="55" height="14" rx="3" fill="#D4C4E8" />
                <rect x="215" y="270" width="55" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
              </g>
              <g className="shelf-item" style={{ opacity: 0 }}>
                <rect x="285" y="270" width="55" height="14" rx="3" fill="#F9D4B0" />
                <rect x="285" y="270" width="55" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
              </g>

              {/* Bottom shelf items */}
              <rect x="55" y="310" width="330" height="5" fill="#9B7F58" rx="2" />
              <g className="shelf-item" style={{ opacity: 0 }}>
                <rect x="80" y="320" width="45" height="20" rx="4" fill="#F9E8A0" />
                <rect x="80" y="320" width="45" height="5" rx="3" fill="rgba(255,255,255,0.25)" />
              </g>
              <g className="shelf-item" style={{ opacity: 0 }}>
                <rect x="195" y="320" width="45" height="20" rx="4" fill="#FCE4E8" />
                <rect x="195" y="320" width="45" height="5" rx="3" fill="rgba(255,255,255,0.25)" />
              </g>
              <g className="shelf-item" style={{ opacity: 0 }}>
                <rect x="315" y="320" width="45" height="20" rx="4" fill="#D0F0E4" />
                <rect x="315" y="320" width="45" height="5" rx="3" fill="rgba(255,255,255,0.25)" />
              </g>
            </svg>
          </div>

          <div className="closet-text mt-8 text-center" style={{ opacity: 0 }}>
            <h2 className="font-playfair text-3xl md:text-5xl leading-tight tracking-tight">
              <span style={{ background: "linear-gradient(135deg, #2C2C2C 0%, #D88C9A 50%, #D4C4E8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Welcome to Naani&apos;s Closet
              </span>
            </h2>
            <p className="font-inter text-sm mt-3 max-w-sm mx-auto font-medium" style={{ color: "#444444" }}>
              A curated collection of handcrafted love, ready for tiny adventures.
            </p>
          </div>

          <div className="cta-final mt-8" style={{ opacity: 0 }}>
            <Button variant="primary" className="px-14 py-5 rounded-full uppercase text-xs tracking-[0.3em] text-white shadow-2xl transition-all hover:shadow-3xl hover:scale-105" style={{ background: "linear-gradient(135deg, #D88C9A, #D4C4E8)" }}>
              Shop The Collection
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
