"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sewingMachineRef = useRef<SVGSVGElement>(null);
  const threadRef = useRef<SVGPathElement>(null);
  const dressRef = useRef<HTMLDivElement>(null);
  const closetRef = useRef<HTMLDivElement>(null);
  const hangerRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: false,
        },
      });

      // Phase 1: Sewing machine appears and starts working
      tl.fromTo(
        ".sewing-machine",
        { opacity: 0, scale: 0.6, y: 60 },
        { opacity: 1, scale: 1, y: 0, duration: 1.5 }
      )
        .fromTo(
          ".sewing-needle",
          { y: 0 },
          { y: -8, duration: 0.15, repeat: 12, yoyo: true },
          "<0.5"
        )
        // Phase 2: Thread comes out flowing
        .fromTo(
          ".thread-line",
          { strokeDashoffset: 800 },
          { strokeDashoffset: 0, duration: 3 },
          "<0.3"
        )
        .fromTo(
          ".thread-glow",
          { opacity: 0 },
          { opacity: 0.6, duration: 1 },
          "<"
        )
        // Phase 3: Fabric forms
        .fromTo(
          ".fabric-piece",
          { scaleY: 0, opacity: 0, transformOrigin: "top center" },
          { scaleY: 1, opacity: 1, duration: 2, ease: "power2.out" },
          "-=1.5"
        )
        // Progress text: "Crafting..."
        .fromTo(
          ".progress-crafting",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          "<"
        )
        .to(".progress-crafting", { opacity: 0, y: -20, duration: 0.8 }, "+=0.5")
        // Phase 4: Dress forms from fabric
        .fromTo(
          ".dress-forming",
          { opacity: 0, scale: 0.3, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 2.5, ease: "back.out(1.4)" }
        )
        // Sparkle burst
        .fromTo(
          ".sparkle",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.06, ease: "back.out(2)" },
          "-=1.5"
        )
        .to(
          ".sparkle",
          { scale: 0, opacity: 0, duration: 0.6, stagger: 0.04 },
          "+=0.3"
        )
        // Progress text: "Ready!"
        .fromTo(
          ".progress-ready",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          "-=1"
        )
        .to(".progress-ready", { opacity: 0, y: -20, duration: 0.8 }, "+=0.3")
        // Phase 5: Sewing machine fades back
        .to(
          ".sewing-machine",
          { opacity: 0.15, scale: 0.85, x: -100, duration: 2 },
          "-=1"
        )
        // Phase 6: Closet appears
        .fromTo(
          ".closet-container",
          { opacity: 0, x: 120, scale: 0.8 },
          { opacity: 1, x: 0, scale: 1, duration: 2.5, ease: "power3.out" }
        )
        // Closet doors open
        .fromTo(
          ".closet-door-left",
          { rotateY: 0 },
          { rotateY: -75, duration: 1.5, ease: "power2.inOut" },
          "-=1"
        )
        .fromTo(
          ".closet-door-right",
          { rotateY: 0 },
          { rotateY: 75, duration: 1.5, ease: "power2.inOut" },
          "<"
        )
        // Phase 7: Dress floats into closet
        .to(
          ".dress-forming",
          {
            x: 60,
            y: -30,
            scale: 0.65,
            duration: 2.5,
            ease: "power2.inOut",
          },
          "-=0.5"
        )
        // Hanger appears inside closet
        .fromTo(
          ".hanger-inside",
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=1.5"
        )
        // Final: Dress settles in closet
        .to(
          ".dress-forming",
          { scale: 0.55, opacity: 0.9, duration: 1 },
          "-=0.3"
        )
        // Doors close gently
        .to(".closet-door-left", { rotateY: -15, duration: 1.2, ease: "power1.inOut" }, "+=0.3")
        .to(".closet-door-right", { rotateY: 15, duration: 1.2, ease: "power1.inOut" }, "<")
        // Final text
        .fromTo(
          ".progress-final",
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power2.out" },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-white via-cream to-blush-light"
      style={{ height: "400vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating stars */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-blush animate-float"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.5}s`,
                fontSize: `${8 + Math.random() * 14}px`,
                opacity: 0.3,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        {/* Main animation stage */}
        <div className="relative w-full max-w-4xl mx-auto px-5 flex items-center justify-center" style={{ minHeight: "420px" }}>
          {/* Sewing Machine SVG */}
          <div className="sewing-machine absolute left-[8%] md:left-[12%] top-1/2 -translate-y-1/2">
            <svg
              ref={sewingMachineRef}
              width="220"
              height="200"
              viewBox="0 0 220 200"
              fill="none"
              className="drop-shadow-lg"
            >
              {/* Machine body */}
              <rect x="30" y="60" width="160" height="80" rx="12" fill="#2B2B2B" />
              <rect x="40" y="50" width="60" height="20" rx="8" fill="#D88C9A" />
              {/* Top arm */}
              <rect x="50" y="30" width="14" height="35" rx="5" fill="#2B2B2B" />
              <rect x="44" y="20" width="26" height="16" rx="6" fill="#D88C9A" />
              {/* Needle */}
              <rect className="sewing-needle" x="55" y="36" width="4" height="28" rx="2" fill="#F7C8D0" />
              <circle className="sewing-needle" cx="57" cy="65" r="2" fill="#D88C9A" />
              {/* Wheel */}
              <circle cx="160" cy="100" r="22" stroke="#D88C9A" strokeWidth="3" fill="none" />
              <circle cx="160" cy="100" r="4" fill="#D88C9A" />
              {/* Base / table */}
              <rect x="15" y="140" width="190" height="10" rx="4" fill="#2B2B2B" />
              <rect x="25" y="150" width="10" height="35" rx="3" fill="#6B6B6B" />
              <rect x="185" y="150" width="10" height="35" rx="3" fill="#6B6B6B" />
              {/* Spool */}
              <ellipse cx="68" cy="28" rx="8" ry="5" fill="#F7C8D0" />
              {/* Decorative dots */}
              <circle cx="90" cy="90" r="3" fill="#F7C8D0" opacity="0.5" />
              <circle cx="105" cy="90" r="3" fill="#F7C8D0" opacity="0.5" />
              <circle cx="120" cy="90" r="3" fill="#F7C8D0" opacity="0.5" />
            </svg>
          </div>

          {/* Thread line flowing from machine */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 420"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              ref={threadRef}
              className="thread-line"
              d="M200 200 C260 180, 300 220, 340 190 S420 210, 460 195 S540 220, 560 200"
              stroke="#D88C9A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="800"
              strokeDashoffset="800"
              fill="none"
            />
            <path
              className="thread-glow"
              d="M200 200 C260 180, 300 220, 340 190 S420 210, 460 195 S540 220, 560 200"
              stroke="#F7C8D0"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0"
              filter="blur(4px)"
            />
          </svg>

          {/* Fabric piece forming */}
          <div className="fabric-piece absolute left-[45%] top-[38%] -translate-x-1/2 w-20 h-28 rounded-b-xl bg-gradient-to-b from-blush to-dusty-rose opacity-0" />

          {/* Dress forming */}
          <div ref={dressRef} className="dress-forming absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 opacity-0">
            <svg width="140" height="200" viewBox="0 0 140 200" fill="none">
              {/* Hanger hook */}
              <path d="M70 5 C70 0, 75 -2, 78 2" stroke="#D88C9A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Hanger */}
              <path d="M40 25 L70 12 L100 25" stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" fill="none" />
              {/* Dress body */}
              <path
                d="M45 25 L38 55 Q35 62, 40 65 L42 80 Q25 120, 20 165 Q18 180, 35 185 L105 185 Q122 180, 120 165 Q115 120, 98 80 L100 65 Q105 62, 102 55 L95 25 Z"
                fill="url(#dressGradient)"
                stroke="#D88C9A"
                strokeWidth="1.5"
              />
              {/* Neckline */}
              <path d="M55 25 Q70 35, 85 25" stroke="#D88C9A" strokeWidth="1.5" fill="none" />
              {/* Waist belt */}
              <rect x="40" y="75" width="60" height="5" rx="2" fill="#D88C9A" opacity="0.5" />
              {/* Skirt detail lines */}
              <path d="M50 90 Q45 140, 35 180" stroke="#D88C9A" strokeWidth="0.8" opacity="0.3" fill="none" />
              <path d="M70 85 Q70 140, 70 185" stroke="#D88C9A" strokeWidth="0.8" opacity="0.3" fill="none" />
              <path d="M90 90 Q95 140, 105 180" stroke="#D88C9A" strokeWidth="0.8" opacity="0.3" fill="none" />
              {/* Flower decoration */}
              <circle cx="65" cy="100" r="3" fill="#F7C8D0" />
              <circle cx="75" cy="115" r="2" fill="#F7C8D0" opacity="0.7" />
              <circle cx="58" cy="130" r="2.5" fill="#F7C8D0" opacity="0.6" />
              <defs>
                <linearGradient id="dressGradient" x1="70" y1="25" x2="70" y2="185" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FDE8EC" />
                  <stop offset="0.5" stopColor="#F7C8D0" />
                  <stop offset="1" stopColor="#D88C9A" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Sparkles */}
          <div ref={sparklesRef} className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="sparkle absolute text-dusty-rose"
                style={{
                  left: `${-60 + Math.cos((i / 10) * Math.PI * 2) * 80}px`,
                  top: `${-60 + Math.sin((i / 10) * Math.PI * 2) * 80}px`,
                  fontSize: `${14 + Math.random() * 10}px`,
                }}
              >
                ✦
              </span>
            ))}
          </div>

          {/* Closet */}
          <div
            ref={closetRef}
            className="closet-container absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 opacity-0"
            style={{ perspective: "600px" }}
          >
            <svg width="180" height="240" viewBox="0 0 180 240" fill="none">
              {/* Closet body */}
              <rect x="10" y="10" width="160" height="210" rx="8" fill="#2B2B2B" />
              <rect x="15" y="15" width="150" height="200" rx="6" fill="#3a3a3a" />
              {/* Inner back */}
              <rect x="22" y="22" width="136" height="186" rx="4" fill="#4a4a4a" />
              {/* Rod */}
              <rect x="30" y="40" width="120" height="3" rx="1.5" fill="#D88C9A" />
              {/* Door left */}
              <rect
                className="closet-door-left"
                x="15"
                y="15"
                width="75"
                height="200"
                rx="4"
                fill="#FFF4E6"
                stroke="#D88C9A"
                strokeWidth="1"
                style={{ transformOrigin: "15px 115px" }}
              />
              {/* Door right */}
              <rect
                className="closet-door-right"
                x="90"
                y="15"
                width="75"
                height="200"
                rx="4"
                fill="#FFF4E6"
                stroke="#D88C9A"
                strokeWidth="1"
                style={{ transformOrigin: "165px 115px" }}
              />
              {/* Door handles */}
              <circle className="closet-door-left" cx="82" cy="115" r="4" fill="#D88C9A" style={{ transformOrigin: "15px 115px" }} />
              <circle className="closet-door-right" cx="98" cy="115" r="4" fill="#D88C9A" style={{ transformOrigin: "165px 115px" }} />
              {/* Crown molding */}
              <rect x="5" y="5" width="170" height="8" rx="3" fill="#2B2B2B" />
              {/* Feet */}
              <rect x="20" y="220" width="12" height="12" rx="3" fill="#2B2B2B" />
              <rect x="148" y="220" width="12" height="12" rx="3" fill="#2B2B2B" />
              {/* Hanger inside */}
              <g className="hanger-inside" opacity="0">
                <path d="M80 38 C80 30, 90 28, 95 33" stroke="#F7C8D0" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M60 55 L88 42 L116 55" stroke="#F7C8D0" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>
            </svg>
          </div>
        </div>

        {/* Progress text */}
        <div ref={progressTextRef} className="absolute bottom-[12%] left-0 right-0 text-center">
          <p className="progress-crafting font-playfair text-2xl md:text-4xl text-charcoal opacity-0">
            Crafting with love...
          </p>
          <p className="progress-ready font-playfair text-2xl md:text-4xl text-dusty-rose opacity-0 absolute inset-0 flex items-center justify-center">
            ✨ Your dress is ready
          </p>
          <p className="progress-final font-playfair text-2xl md:text-4xl text-charcoal opacity-0 absolute inset-0 flex items-center justify-center">
            Safe in <span className="text-dusty-rose ml-2">Naani&apos;s Closet</span> 💕
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-text-light font-inter text-xs tracking-widest uppercase opacity-50">
          ↓ Scroll to watch the story
        </div>
      </div>
    </section>
  );
}
