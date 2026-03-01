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
    <section className="bg-white py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Cobertura
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-sky-900 font-[var(--font-outfit)]">
            Cobertura en Santiago
          </h2>
          <p className="text-gray-text mt-4 max-w-xl mx-auto">
            Servicio de instalación, mantenimiento y reparación en toda la ciudad
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {zones.map((zone, i) => (
            <span
              key={i}
              className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {zone}
            </span>
          ))}
        </motion.div>

        <div className="text-center space-y-5">
          <p className="text-gray-text text-sm">
            ¿No ves tu zona? Contáctanos — probablemente cubrimos tu área
          </p>
          <a
            href="https://wa.me/18097429060?text=Hola%2C%20quiero%20saber%20si%20cubren%20mi%20zona%20en%20Santiago."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Consultar Disponibilidad →
          </a>
        </div>
      </div>
    </section>
  );
}
