"use client";

import { motion } from "framer-motion";
import { Snowflake, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-white py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
        {/* Left column */}
        <motion.div
          className="lg:w-[55%] space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 text-sm font-medium px-4 py-2 rounded-full">
            <Snowflake className="w-4 h-4" />
            Servicio en todo Santiago
          </span>

          <h1 className="text-4xl lg:text-6xl font-bold text-sky-900 leading-tight font-[var(--font-outfit)]">
            Climatización Profesional para Tu Hogar y Negocio
          </h1>

          <p className="text-lg text-gray-text leading-relaxed max-w-xl">
            Instalación, mantenimiento y venta de aires acondicionados con
            garantía. Más de 10 años brindando confort y frescura a Santiago.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/18097429060?text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20para%20aire%20acondicionado%20en%20Santiago."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-center"
            >
              Solicitar Cotización
            </a>
            <a
              href="#servicios"
              className="border-2 border-sky-600 text-sky-600 hover:bg-sky-50 font-semibold px-8 py-3.5 rounded-lg transition-colors text-center"
            >
              Ver Servicios
            </a>
          </div>

          <div className="flex items-center gap-2 text-green text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Respuesta en menos de 1 hora
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          className="lg:w-[45%] relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-sky-100 rounded-2xl" />
          <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#EBF5FF] to-[#F0F9FF] rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
            <Image
              src="/images/hero-ac.png"
              alt="Aire acondicionado moderno"
              fill
              className="object-cover rounded-2xl"
              priority
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <Snowflake className="w-24 h-24 text-sky-300 opacity-60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
