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
      "Respondemos tu cotización en menos de 1 hora y agendamos la visita en menos de 24 horas.",
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
      "Personal capacitado con experiencia. Conocemos todas las marcas y sistemas de climatización.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-bg-alt py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-sky-500 mb-4">
            ¿Por qué elegirnos?
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-sky-900 font-[var(--font-syne)] tracking-tight">
            La Diferencia BC Clima
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-7 card-shadow text-center border border-sky-100/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-sky-100 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-sky-500" />
                </div>
                <h3 className="text-lg font-bold text-sky-900 font-[var(--font-syne)] mb-3 tracking-tight">
                  {r.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed">
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
