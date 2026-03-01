"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cada cuánto debo hacerle mantenimiento a mi aire?",
    a: "Lo recomendable es cada 3 meses para uso residencial y cada 2 meses para uso comercial. Un mantenimiento regular ahorra energía, extiende la vida del equipo y mejora la calidad del aire.",
  },
  {
    q: "¿Cómo sé qué capacidad de aire necesito?",
    a: "La capacidad depende del tamaño del espacio, la cantidad de ventanas, el piso y la orientación al sol. Como referencia general: habitación pequeña (9,000 BTU), sala mediana (12,000-18,000 BTU), local comercial (24,000-60,000 BTU). En la visita técnica evaluamos tu espacio gratis.",
  },
  {
    q: "¿Cuánto toma una instalación?",
    a: "Una instalación estándar de split toma entre 3 y 5 horas. Instalaciones más complejas (cassette, ducto, multi-split) pueden tomar un día completo. Te damos fecha exacta al confirmar.",
  },
  {
    q: "¿Inverter o convencional — cuál me conviene?",
    a: "El inverter ahorra hasta un 60% de energía y es más silencioso, pero cuesta más inicialmente. Si usas el aire más de 8 horas al día, el inverter se paga solo en ahorro eléctrico en pocos meses. Te asesoramos según tu caso.",
  },
  {
    q: "¿Incluyen garantía?",
    a: "Sí. Ofrecemos garantía de fábrica en equipos nuevos (1-5 años según la marca) y garantía en nuestra instalación y mano de obra. Si algo falla por nuestro trabajo, lo corregimos sin costo.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-deep/30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-frost mb-4">
            Preguntas Frecuentes
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-[var(--font-syne)] tracking-tight">
            ¿Tienes Dudas?
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="glass rounded-xl overflow-hidden gradient-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.03] transition-colors duration-300"
              >
                <span className="font-semibold text-ghost pr-4 font-[var(--font-syne)]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-frost flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-mist leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
