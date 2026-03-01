"use client";

import { useState } from "react";
import { Snowflake, Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Productos", href: "#productos" },
  { label: "Sobre Nosotros", href: "#ceo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <Snowflake className="w-8 h-8 text-sky-600" />
          <span className="text-xl font-bold text-sky-900 font-[var(--font-outfit)]">
            BC<span className="font-normal text-sky-600">Clima</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-dark hover:text-sky-600 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:8097429060"
            className="flex items-center gap-2 text-sm text-gray-text"
          >
            <Phone className="w-4 h-4" />
            809-742-9060
          </a>
          <a
            href="https://wa.me/18097429060?text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20para%20aire%20acondicionado%20en%20Santiago."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Cotización Gratis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-sky-900"
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t px-8 pb-6 pt-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-dark hover:text-sky-600 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:8097429060"
            className="flex items-center gap-2 text-gray-text text-sm"
          >
            <Phone className="w-4 h-4" />
            809-742-9060
          </a>
          <a
            href="https://wa.me/18097429060?text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20para%20aire%20acondicionado%20en%20Santiago."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Cotización Gratis
          </a>
        </div>
      )}
    </nav>
  );
}
