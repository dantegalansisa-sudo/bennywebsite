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
    badgeColor: "bg-sky-500 text-white",
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
    badgeColor: "bg-cyan-500 text-white",
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
    <section id="productos" className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-sky-500 mb-4">
            Equipos
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-sky-900 font-[var(--font-syne)] tracking-tight">
            Equipos Disponibles
          </h2>
          <p className="text-gray-text mt-4 max-w-xl mx-auto">
            Asesoría personalizada para elegir el equipo perfecto para tu espacio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                className="relative bg-white border border-sky-100 rounded-2xl p-8 card-shadow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {p.badge && (
                  <span
                    className={`absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full ${p.badgeColor}`}
                  >
                    {p.badge}
                  </span>
                )}

                {/* Icon area */}
                <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#EBF5FF] to-[#F0F9FF] rounded-xl flex items-center justify-center mb-6 group-hover:from-sky-100/80 group-hover:to-sky-50/80 transition-all duration-500">
                  <Icon className="w-16 h-16 text-sky-300/60 group-hover:text-sky-400/70 transition-all duration-500 group-hover:scale-110" />
                </div>

                <h3 className="text-xl font-bold text-sky-900 font-[var(--font-syne)] mb-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-gray-text leading-relaxed mb-4">
                  {p.description}
                </p>
                <p className="text-sky-500 font-bold text-lg mb-5 font-[var(--font-syne)]">
                  {p.price}
                </p>
                <a
                  href="https://wa.me/18097429060?text=Hola%2C%20me%20interesa%20un%20equipo%20de%20aire%20acondicionado."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 text-sm hover:shadow-[0_4px_15px_rgba(14,165,233,0.3)]"
                >
                  Consultar
                  <span className="text-white/70">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
