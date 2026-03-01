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
}

const products: Product[] = [
  {
    icon: Wind,
    title: "Split Inverter",
    description:
      "La tecnología más eficiente. Ahorra hasta un 60% de energía eléctrica comparado con equipos convencionales. Enfriamiento rápido y silencioso.",
    price: "Desde RD$18,000",
    badge: "Más Vendido",
  },
  {
    icon: Snowflake,
    title: "Split de Pared",
    description:
      "El clásico confiable. Ideal para habitaciones, oficinas y espacios medianos. Fácil mantenimiento y excelente rendimiento.",
    price: "Desde RD$12,000",
  },
  {
    icon: Fan,
    title: "Cassette / Techo",
    description:
      "Perfecto para locales comerciales, restaurantes y oficinas grandes. Distribución uniforme del aire en 360 grados.",
    price: "Consultar precio",
    badge: "Comercial",
  },
  {
    icon: ArrowUpDown,
    title: "Piso-Techo",
    description:
      "Ideal para espacios amplios sin cielo raso. Potente y versátil, se instala en el piso o en el techo según tu necesidad.",
    price: "Consultar precio",
  },
];

export default function Products() {
  return (
    <section id="productos" className="bg-white py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-sky-600 mb-4">
            Equipos
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-sky-900 font-[var(--font-outfit)]">
            Equipos Disponibles
          </h2>
          <p className="text-gray-text mt-4 max-w-xl mx-auto">
            Asesoría personalizada para elegir el equipo perfecto para tu espacio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                className="bg-white border border-sky-100 rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(2,132,199,0.12)] transition-shadow relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {p.badge && (
                  <span className="absolute top-6 right-6 bg-sky-100 text-sky-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
                {/* Placeholder image */}
                <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#EBF5FF] to-[#F0F9FF] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-16 h-16 text-sky-300 opacity-60" />
                </div>
                <h3 className="text-xl font-bold text-sky-900 font-[var(--font-outfit)] mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-text leading-relaxed mb-4">
                  {p.description}
                </p>
                <p className="text-sky-600 font-bold text-lg mb-5">{p.price}</p>
                <a
                  href="https://wa.me/18097429060?text=Hola%2C%20me%20interesa%20un%20equipo%20de%20aire%20acondicionado."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
                >
                  Consultar →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
