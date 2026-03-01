"use client";

import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-r from-frost/[0.08] via-frost/[0.15] to-frost/[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-transparent to-void/80" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-frost/[0.05] rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-frost/[0.04] rounded-full blur-[80px]" />
      </div>

      <div className="frost-line absolute top-0 left-0 right-0" />
      <div className="frost-line absolute bottom-0 left-0 right-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Snowflake className="w-14 h-14 text-frost mx-auto opacity-60" />
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-[var(--font-syne)] tracking-tight">
            ¿Necesitas Climatizar{" "}
            <span className="text-frost glow-text">Tu Espacio?</span>
          </h2>

          <p className="text-mist text-lg max-w-xl mx-auto">
            Cotización gratis y sin compromiso. Respuesta en menos de 1 hora.
          </p>

          <a
            href="https://wa.me/18097429060?text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20para%20aire%20acondicionado%20en%20Santiago."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-frost text-void font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,212,255,0.35)] hover:scale-[1.02]"
          >
            Solicitar Cotización Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
