"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgeDollarSign, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: ShieldCheck,
    title: "Garantía en Todo",
    description:
      "Todos nuestros trabajos tienen garantía. Si algo no funciona correctamente, volvemos sin costo adicional.",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description:
      "Respondemos tu cotización en menos de 1 hora y agendamos la visita en menos de 24 horas en Santiago.",
  },
  {
    icon: BadgeDollarSign,
    title: "Precio Justo",
    description:
      "Precios competitivos y transparentes. Te decimos el costo exacto antes de empezar — sin sorpresas.",
  },
  {
    icon: Star,
    title: "Técnicos Certificados",
    description:
      "Personal capacitado y con experiencia. Conocemos todas las marcas y tipos de sistemas de climatización.",
  },
];

export default function WhyChooseUs() {
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
            ¿Por qué elegirnos?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-sky-900 font-[var(--font-outfit)]">
            La Diferencia BC Clima
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-sky-900 font-[var(--font-outfit)] mb-3">
                  {r.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {r.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
