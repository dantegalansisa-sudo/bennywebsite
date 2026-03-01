"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Instalaciones Realizadas" },
  { number: "10+", label: "Años de Experiencia" },
  { number: "24/7", label: "Servicio de Emergencia" },
  { number: "100%", label: "Garantía en Todos los Trabajos" },
];

export default function StatsBar() {
  return (
    <section className="bg-sky-600 py-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-3xl lg:text-4xl font-bold text-white font-[var(--font-outfit)]">
                {s.number}
              </p>
              <p className="text-sky-100 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
