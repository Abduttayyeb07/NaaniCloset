import { useEffect } from "react";
import { motion } from "framer-motion";

interface MobileNavProps {
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileNav({ onClose, links }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed inset-0 z-50 bg-cream flex flex-col"
    >
      {/* Close */}
      <div className="flex justify-end p-5">
        <button onClick={onClose} className="p-2 cursor-pointer" aria-label="Close menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-charcoal">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <nav className="flex flex-col items-center justify-center flex-1 gap-8">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
            href={link.href}
            onClick={onClose}
            className="font-playfair text-4xl text-charcoal hover:text-dusty-rose transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      <div className="pb-8 flex justify-center">
        <img src="/logo.jpg" alt="Naani's Closet" className="h-10 w-auto" />
      </div>
    </motion.div>
  );
}
