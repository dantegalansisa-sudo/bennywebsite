"use client";

import { motion } from "framer-motion";
import { Wrench, Clock, Zap, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  number: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Wrench, number: "500+", label: "Instalaciones Realizadas" },
  { icon: Clock, number: "10+", label: "Años de Experiencia" },
  { icon: Zap, number: "24/7", label: "Servicio de Emergencia" },
  { icon: ShieldCheck, number: "100%", label: "Garantía en Trabajos" },
];

export default function StatsBar() {
  return (
    <section className="bg-sky-500 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/15 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl lg:text-4xl font-extrabold text-white font-[var(--font-syne)] tracking-tight">
                  {s.number}
                </p>
                <p className="text-sky-100 text-sm mt-1">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
