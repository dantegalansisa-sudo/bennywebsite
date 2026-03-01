"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Benny me instaló un inverter de 18,000 BTU y la diferencia es increíble. Profesional, puntual y el precio fue justo. Mi recibo de luz bajó un 40%. Totalmente recomendado.",
    name: "Carlos M.",
    detail: "Instalación Residencial, Los Jardines",
  },
  {
    text: "Tenemos 6 aires en la oficina y BC Clima nos hace el mantenimiento cada 3 meses. Son puntuales, limpian todo perfecto y los equipos funcionan como nuevos. Excelente servicio.",
    name: "María P.",
    detail: "Mantenimiento Comercial, Centro de Santiago",
  },
  {
    text: "Mi aire dejó de enfriar un domingo en la noche y Benny vino al día siguiente a primera hora. Era una fuga de gas, lo reparó en el momento. Servicio de emergencia real.",
    name: "José R.",
    detail: "Reparación de Emergencia, Villa Olga",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sky-light py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-sky-600 mb-4">
            Testimonios
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-sky-900 font-[var(--font-outfit)]">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-dark leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sky-900">{t.name}</p>
                <p className="text-gray-text text-sm">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
