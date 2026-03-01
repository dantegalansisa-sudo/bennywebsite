"use client";

import { useState, useEffect } from "react";
import { Snowflake, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#ceo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-abyss/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,212,255,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Snowflake className="w-8 h-8 text-frost transition-transform duration-300 group-hover:rotate-90" />
            <div className="absolute inset-0 blur-lg bg-frost/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-bold font-[var(--font-syne)] text-white tracking-tight">
            BC<span className="text-frost font-normal">Clima</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm text-smoke hover:text-white transition-colors duration-300 font-medium group"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-frost group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:8097429060"
            className="flex items-center gap-2 text-sm text-mist hover:text-frost transition-colors duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            809-742-9060
          </a>
          <a
            href="https://wa.me/18097429060?text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20para%20aire%20acondicionado%20en%20Santiago."
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-frost/10 hover:bg-frost/20 text-frost text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 border border-frost/20 hover:border-frost/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
          >
            Cotización Gratis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white hover:text-frost transition-colors"
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-abyss/95 backdrop-blur-xl border-t border-glass-border"
          >
            <div className="px-6 pb-6 pt-4 space-y-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-3 text-ghost hover:text-frost font-medium transition-colors border-b border-glass-border"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:8097429060"
                  className="flex items-center gap-2 text-mist text-sm"
                >
                  <Phone className="w-4 h-4" />
                  809-742-9060
                </a>
                <a
                  href="https://wa.me/18097429060?text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20para%20aire%20acondicionado%20en%20Santiago."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-frost/10 text-frost text-sm font-semibold px-5 py-2.5 rounded-lg border border-frost/20"
                >
                  Cotización Gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
