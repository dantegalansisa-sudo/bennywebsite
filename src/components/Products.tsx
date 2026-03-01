"use client";

import { motion } from "framer-motion";
import { Wind, Snowflake, Fan, ArrowUpDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Product {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  badge?: string;
  badgeColor?: string;
}

const products: Product[] = [
  {
    icon: Wind,
    title: "Split Inverter",
    description:
      "La tecnología más eficiente. Ahorra hasta un 60% de energía eléctrica. Enfriamiento rápido y silencioso.",
    price: "Desde RD$18,000",
    badge: "Más Vendido",
    badgeColor: "bg-ember/20 text-ember border-ember/30",
  },
  {
    icon: Snowflake,
    title: "Split de Pared",
    description:
      "El clásico confiable. Ideal para habitaciones, oficinas y espacios medianos. Fácil mantenimiento.",
    price: "Desde RD$12,000",
  },
  {
    icon: Fan,
    title: "Cassette / Techo",
    description:
      "Perfecto para locales comerciales, restaurantes y oficinas grandes. Distribución uniforme 360°.",
    price: "Consultar precio",
    badge: "Comercial",
    badgeColor: "bg-frost/10 text-frost border-frost/20",
  },
  {
    icon: ArrowUpDown,
    title: "Piso-Techo",
    description:
      "Ideal para espacios amplios sin cielo raso. Potente y versátil, se instala en el piso o techo.",
    price: "Consultar precio",
  },
];

export default function Products() {
  return (
    <section id="productos" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-deep/30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-frost/[0.02] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-frost mb-4">
            Equipos
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white font-[var(--font-syne)] tracking-tight">
            Equipos Disponibles
          </h2>
          <p className="text-mist mt-4 max-w-xl mx-auto">
            Asesoría personalizada para elegir el equipo perfecto para tu espacio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                className="group relative glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-500 gradient-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {p.badge && (
                  <span
                    className={`absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full border ${p.badgeColor}`}
                  >
                    {p.badge}
                  </span>
                )}

                {/* Icon area */}
                <div className="w-full aspect-[16/9] bg-gradient-to-br from-steel/60 to-deep/60 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:from-frost/[0.06] group-hover:to-frost/[0.02] transition-all duration-500">
                  <Icon className="w-16 h-16 text-frost/25 group-hover:text-frost/40 transition-all duration-500 group-hover:scale-110" />
                  {/* Decorative corner lines */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-frost/10" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-frost/10" />
                </div>

                <h3 className="text-xl font-bold text-white font-[var(--font-syne)] mb-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-mist leading-relaxed mb-4">
                  {p.description}
                </p>
                <p className="text-frost font-bold text-lg mb-5 font-[var(--font-syne)]">
                  {p.price}
                </p>
                <a
                  href="https://wa.me/18097429060?text=Hola%2C%20me%20interesa%20un%20equipo%20de%20aire%20acondicionado."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-frost/10 hover:bg-frost/20 text-frost font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 text-sm border border-frost/15 hover:border-frost/30"
                >
                  Consultar
                  <span className="text-frost/60">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
