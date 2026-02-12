"use client";

import SectionWrapper from "../ui/SectionWrapper";

const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "#" },
    { label: "Best Sellers", href: "#" },
    { label: "Dresses & Frocks", href: "#" },
    { label: "Rompers & Onesies", href: "#" },
  ],
  help: [
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Contact Naani", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/90 pt-12 pb-8">
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 border-b border-white/5 pb-12">
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-6">
            <img src="/logo.jpg" alt="Naani's Closet" className="h-9 w-auto brightness-200 contrast-125" />
            <p className="font-playfair text-xl md:text-2xl font-medium leading-tight max-w-sm text-white">
              Heirloom quality for the <span className="text-blush italic">tiny humans</span> in your life.
            </p>
            <div className="flex gap-6 pt-2">
              {["Instagram", "TikTok", "Pinterest"].map(social => (
                <a key={social} href="#" className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-blush transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-inter text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="font-inter text-xs text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="font-inter text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Support</h4>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="font-inter text-xs text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-inter text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Newsletter</h4>
            <div className="space-y-3">
              <p className="font-inter text-xs text-white/50 leading-relaxed">
                Join our circle for early access and tiny stories.
              </p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-2.5 font-inter text-xs focus:outline-none focus:border-blush/30 transition-colors placeholder:text-white/20"
                />
                <button className="absolute right-0 top-0 bottom-0 px-3 text-white/40 hover:text-blush transition-colors">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/30">
            © 2026 Naani&apos;s Closet. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map(link => (
              <a key={link.label} href={link.href} className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}
