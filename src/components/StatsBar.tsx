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
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-steel to-deep" />
      <div className="frost-line absolute top-0 left-0 right-0" />
      <div className="frost-line absolute bottom-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                className="glass rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-frost/10 flex items-center justify-center group-hover:bg-frost/15 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-frost" />
                </div>
                <p className="text-3xl lg:text-4xl font-extrabold text-white font-[var(--font-syne)] tracking-tight">
                  {s.number}
                </p>
                <p className="text-mist text-sm mt-2">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
