"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileNav from "@/components/layout/MobileNav";

const navLinks = [
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "Our Story", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/80 backdrop-blur-xl border-b border-charcoal/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Nav Links */}
          <nav className="hidden md:flex flex-1 items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-inter text-[12px] uppercase tracking-[0.2em] text-charcoal/60 hover:text-charcoal transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <a href="#" className="flex items-center group">
              <img
                src="/logo.jpg"
                alt="Naani's Closet"
                className={`transition-all duration-700 ease-out ${scrolled ? "h-9" : "h-12"}`}
              />
            </a>
          </div>

          {/* Right: Right Nav + Icons */}
          <div className="flex-1 flex items-center justify-end gap-6">
            <nav className="hidden md:flex items-center gap-8 mr-4">
              {navLinks.slice(2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-inter text-[12px] uppercase tracking-[0.2em] text-charcoal/60 hover:text-charcoal transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                className="relative p-2 text-charcoal/70 hover:text-charcoal transition-colors"
                aria-label="Cart"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-dusty-rose text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              <button
                className="md:hidden p-2 text-charcoal/70"
                onClick={() => setMobileOpen(true)}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="16" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} links={navLinks} />}
      </AnimatePresence>
    </>
  );
}
