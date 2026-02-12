"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/* ═══════════════════════════════════════════════════
   NAANI'S CLOSET — 3D LOGO ENTRANCE ANIMATION
   Rainbow arc → Logo drop → Text reveal → Dissolve
   ═══════════════════════════════════════════════════ */

interface LogoIntroProps {
  onComplete: () => void;
}

export default function LogoIntro({ onComplete }: LogoIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D tilt on mouse move
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Apply 3D tilt to logo
  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.style.transform = `perspective(800px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`;
    }
  }, [mousePos]);

  // Main animation timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Dissolve the entire intro
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete,
          });
        },
      });

      // Stage 1: Rainbow arcs sweep in
      tl.fromTo(".rainbow-band", 
        { strokeDashoffset: 800 },
        { strokeDashoffset: 0, duration: 1.2, stagger: 0.08, ease: "power2.inOut" }
      )
      // Rainbow glow pulses
      .fromTo(".rainbow-glow", { opacity: 0 }, { opacity: 0.6, duration: 0.5 }, "-=0.5")

      // Stage 2: Logo drops in with bounce
      .fromTo(".logo-3d", 
        { y: -120, opacity: 0, scale: 0.5 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "bounce.out" },
        "-=0.3"
      )
      // Logo shadow appears
      .fromTo(".logo-shadow",
        { opacity: 0, scaleX: 0.3 },
        { opacity: 0.15, scaleX: 1, duration: 0.6, ease: "power2.out" },
        "-=0.6"
      )

      // Stage 3: Text reveals letter by letter
      .fromTo(".intro-letter",
        { opacity: 0, y: 20, rotateX: 90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.08, stagger: 0.04, ease: "back.out(2)" },
        "-=0.3"
      )
      // Subtitle fades in
      .fromTo(".intro-subtitle",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.1"
      )

      // Stage 4: Sparkles burst
      .fromTo(".intro-sparkle",
        { opacity: 0, scale: 0, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.3, stagger: 0.05, ease: "back.out(4)" },
        "-=0.3"
      )
      // Hold for a beat
      .to({}, { duration: 1.2 });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  const brandName = "Naani's Closet";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF9F5 0%, #FFF5EE 50%, #FDF2F8 100%)" }}
    >
      {/* ═══ ATMOSPHERIC PARTICLES ═══ */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              background: ["#F4B8C1", "#F9D4B0", "#F9E8A0", "#B8E0D2", "#D4C4E8"][i % 5],
              opacity: 0.3,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* ═══ RAINBOW ARC ═══ */}
      <svg
        viewBox="0 0 500 260"
        className="absolute w-[400px] md:w-[600px] h-auto"
        style={{ top: "15%", filter: "drop-shadow(0 4px 20px rgba(244,184,193,0.3))" }}
        fill="none"
      >
        {/* Rainbow glow (blurred behind) */}
        <ellipse className="rainbow-glow" cx="250" cy="230" rx="200" ry="180" fill="none"
          stroke="url(#rainbowGrad)" strokeWidth="30" opacity="0"
          style={{ filter: "blur(20px)" }} />

        {/* 5 rainbow bands matching logo */}
        <path className="rainbow-band" d="M50,240 Q50,50 250,50 Q450,50 450,240" 
          stroke="#D4C4E8" strokeWidth="8" strokeLinecap="round"
          strokeDasharray="800" strokeDashoffset="800" />
        <path className="rainbow-band" d="M70,240 Q70,70 250,70 Q430,70 430,240"
          stroke="#B8E0D2" strokeWidth="8" strokeLinecap="round"
          strokeDasharray="800" strokeDashoffset="800" />
        <path className="rainbow-band" d="M90,240 Q90,90 250,90 Q410,90 410,240"
          stroke="#F9E8A0" strokeWidth="8" strokeLinecap="round"
          strokeDasharray="800" strokeDashoffset="800" />
        <path className="rainbow-band" d="M110,240 Q110,110 250,110 Q390,110 390,240"
          stroke="#F9D4B0" strokeWidth="8" strokeLinecap="round"
          strokeDasharray="800" strokeDashoffset="800" />
        <path className="rainbow-band" d="M130,240 Q130,130 250,130 Q370,130 370,240"
          stroke="#F4B8C1" strokeWidth="8" strokeLinecap="round"
          strokeDasharray="800" strokeDashoffset="800" />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="rainbowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F4B8C1" />
            <stop offset="25%" stopColor="#F9D4B0" />
            <stop offset="50%" stopColor="#F9E8A0" />
            <stop offset="75%" stopColor="#B8E0D2" />
            <stop offset="100%" stopColor="#D4C4E8" />
          </linearGradient>
        </defs>

        {/* Small clouds at rainbow ends */}
        <g className="rainbow-band" style={{ strokeDashoffset: 0 }}>
          <ellipse cx="50" cy="235" rx="30" ry="15" fill="white" opacity="0.6" />
          <ellipse cx="35" cy="230" rx="20" ry="12" fill="white" opacity="0.4" />
          <ellipse cx="450" cy="235" rx="30" ry="15" fill="white" opacity="0.6" />
          <ellipse cx="465" cy="230" rx="20" ry="12" fill="white" opacity="0.4" />
        </g>
      </svg>

      {/* ═══ 3D LOGO ═══ */}
      <div className="relative z-10 flex flex-col items-center" style={{ marginTop: "60px" }}>
        <div className="logo-3d" style={{ opacity: 0, transformStyle: "preserve-3d" }}>
          <img
            ref={logoRef}
            src="/logo.jpg"
            alt="Naani's Closet"
            className="w-40 md:w-56 h-auto rounded-2xl"
            style={{
              transition: "transform 0.15s ease-out",
              boxShadow: "0 20px 60px rgba(244,184,193,0.35), 0 8px 20px rgba(212,196,232,0.2)",
            }}
          />
        </div>

        {/* Logo shadow on "floor" */}
        <div
          className="logo-shadow mt-4 w-32 md:w-44 h-4 rounded-full mx-auto"
          style={{
            background: "radial-gradient(ellipse, rgba(244,184,193,0.3) 0%, transparent 70%)",
            opacity: 0,
          }}
        />
      </div>

      {/* ═══ BRAND TEXT ═══ */}
      <div className="relative z-10 mt-8 text-center" style={{ perspective: "600px" }}>
        <h1 className="font-playfair text-[clamp(2.5rem,8vw,5rem)] leading-none tracking-tight flex flex-wrap justify-center">
          {brandName.split("").map((char, i) => (
            <span
              key={i}
              className="intro-letter inline-block"
              style={{
                opacity: 0,
                background: "linear-gradient(135deg, #2C2C2C 0%, #D88C9A 60%, #D4C4E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: i >= 7 ? "italic" : "normal", // "Closet" is italic
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="intro-subtitle font-inter text-sm md:text-base mt-4 tracking-widest uppercase" style={{ color: "#D88C9A", opacity: 0, letterSpacing: "0.3em" }}>
          Handcrafted with Love
        </p>
      </div>

      {/* ═══ SPARKLES ═══ */}
      {[
        { x: "15%", y: "25%", size: 16, color: "#F9E8A0" },
        { x: "82%", y: "20%", size: 14, color: "#F4B8C1" },
        { x: "10%", y: "70%", size: 12, color: "#B8E0D2" },
        { x: "88%", y: "65%", size: 14, color: "#D4C4E8" },
        { x: "25%", y: "80%", size: 10, color: "#F9D4B0" },
        { x: "72%", y: "78%", size: 12, color: "#F9E8A0" },
        { x: "50%", y: "12%", size: 10, color: "#F4B8C1" },
        { x: "35%", y: "15%", size: 8, color: "#B8E0D2" },
      ].map((s, i) => (
        <svg
          key={i}
          className="intro-sparkle absolute"
          style={{ left: s.x, top: s.y, opacity: 0, width: s.size, height: s.size }}
          viewBox="0 0 24 24"
          fill={s.color}
        >
          <polygon points="12,0 14,9 24,9 16,14 18,24 12,18 6,24 8,14 0,9 10,9" />
        </svg>
      ))}
    </div>
  );
}
