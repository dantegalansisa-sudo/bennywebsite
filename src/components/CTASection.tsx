"use client";

import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-sky-600 py-24">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Snowflake className="w-16 h-16 text-white mx-auto opacity-90" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-[var(--font-outfit)]">
            ¿Necesitas Climatizar Tu Espacio?
          </h2>
          <p className="text-sky-100 text-lg max-w-xl mx-auto">
            Cotización gratis y sin compromiso. Respuesta en menos de 1 hora.
          </p>
          <a
            href="https://wa.me/18097429060?text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20para%20aire%20acondicionado%20en%20Santiago."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-sky-600 font-bold px-8 py-4 rounded-lg hover:bg-sky-50 transition-colors text-lg"
          >
            Solicitar Cotización Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
