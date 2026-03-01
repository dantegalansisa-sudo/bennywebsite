"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const zones = [
  "Centro de Santiago",
  "Los Jardines",
  "Reparto del Este",
  "Gurabo",
  "Villa Olga",
  "Los Salados",
  "Pontezuela",
  "La Trinitaria",
  "Cienfuegos",
  "Tamboril",
  "Licey al Medio",
  "Puñal",
  "Y más zonas aledañas",
];

export default function Coverage() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-deep/30" />
      <div className="frost-line absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-frost/10 text-frost px-3 py-1.5 rounded-full text-sm font-medium border border-frost/15 mb-6">
            <MapPin className="w-4 h-4" />
            Cobertura
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-[var(--font-syne)] tracking-tight">
            Cobertura en Santiago
          </h2>
          <p className="text-mist mt-4 max-w-xl mx-auto">
            Servicio de instalación, mantenimiento y reparación en toda la ciudad
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {zones.map((zone, i) => (
            <motion.span
              key={i}
              className="glass px-4 py-2.5 rounded-full text-sm font-medium text-ghost hover:text-frost hover:bg-frost/10 hover:border-frost/20 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ scale: 1.05 }}
            >
              {zone}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="text-center space-y-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-smoke text-sm">
            ¿No ves tu zona? Contáctanos — probablemente cubrimos tu área
          </p>
          <a
            href="https://wa.me/18097429060?text=Hola%2C%20quiero%20saber%20si%20cubren%20mi%20zona%20en%20Santiago."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-frost/10 hover:bg-frost/20 text-frost font-semibold px-6 py-3 rounded-xl transition-all duration-300 border border-frost/20 hover:border-frost/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
          >
            Consultar Disponibilidad
            <span className="text-frost/60">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
