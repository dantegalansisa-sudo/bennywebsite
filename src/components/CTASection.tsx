"use client";

import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-sky-500 py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
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
            <Snowflake className="w-14 h-14 text-white mx-auto opacity-80" />
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-[var(--font-syne)] tracking-tight">
            ¿Necesitas Climatizar Tu Espacio?
          </h2>

          <p className="text-sky-100 text-lg max-w-xl mx-auto">
            Cotización gratis y sin compromiso. Respuesta en menos de 1 hora.
          </p>

          <a
            href="https://wa.me/18097429060?text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20para%20aire%20acondicionado%20en%20Santiago."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-sky-500 font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:scale-[1.02]"
          >
            Solicitar Cotización Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
