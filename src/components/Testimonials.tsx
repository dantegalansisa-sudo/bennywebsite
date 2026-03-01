"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void to-deep/30" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-frost/[0.02] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-frost mb-4">
            Testimonios
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-[var(--font-syne)] tracking-tight">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="group glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-500 gradient-border relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-frost/15 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-ember text-ember"
                  />
                ))}
              </div>

              <p className="text-ghost leading-relaxed mb-6 italic text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-glass-border">
                <p className="font-semibold text-white font-[var(--font-syne)]">
                  {t.name}
                </p>
                <p className="text-smoke text-sm mt-0.5">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
