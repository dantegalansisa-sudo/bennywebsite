"use client";

import { motion } from "framer-motion";
import { Snowflake, CheckCircle, ArrowDown } from "lucide-react";
import Image from "next/image";

function FloatingSnowflake({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute text-sky-200"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 180, 360],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Snowflake style={{ width: size, height: size }} />
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-50/60 rounded-full blur-[100px]" />
      </div>

      {/* Floating snowflakes */}
      <FloatingSnowflake delay={0} x="10%" y="20%" size={20} />
      <FloatingSnowflake delay={2} x="85%" y="15%" size={16} />
      <FloatingSnowflake delay={4} x="75%" y="70%" size={22} />
      <FloatingSnowflake delay={1} x="20%" y="75%" size={14} />
      <FloatingSnowflake delay={3} x="55%" y="25%" size={18} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20 lg:pt-0 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left column */}
          <div className="lg:w-[58%] space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 shimmer text-sky-600 text-sm font-medium px-4 py-2 rounded-full border border-sky-200">
                <Snowflake className="w-4 h-4" />
                Servicio en todo Santiago
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-sky-900 leading-[1.05] font-[var(--font-syne)] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Climatización{" "}
              <span className="text-sky-500">Profesional</span>{" "}
              para Tu Espacio
            </motion.h1>

            <motion.p
              className="text-lg text-gray-text leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Instalación, mantenimiento y venta de aires acondicionados con
              garantía. Más de 10 años brindando confort y frescura a Santiago.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="https://wa.me/18097429060?text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20para%20aire%20acondicionado%20en%20Santiago."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-center hover:shadow-[0_8px_25px_rgba(14,165,233,0.3)] hover:scale-[1.02]"
              >
                Solicitar Cotización
              </a>
              <a
                href="#servicios"
                className="border-2 border-sky-500 text-sky-500 hover:bg-sky-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-center"
              >
                Ver Servicios
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-green text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <CheckCircle className="w-4 h-4" />
              Respuesta en menos de 1 hora
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            className="lg:w-[42%] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Decorative offset shadow */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-sky-100 rounded-2xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#EBF5FF] to-[#F0F9FF] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/hero-ac.png"
                  alt="Aire acondicionado moderno"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <Snowflake className="w-20 h-20 text-sky-300/50 animate-float" />
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 flex justify-between shadow-sm">
                <div className="text-center">
                  <p className="text-sky-500 font-bold text-lg font-[var(--font-syne)]">500+</p>
                  <p className="text-gray-text text-xs">Instalaciones</p>
                </div>
                <div className="w-px bg-sky-100" />
                <div className="text-center">
                  <p className="text-sky-500 font-bold text-lg font-[var(--font-syne)]">10+</p>
                  <p className="text-gray-text text-xs">Años</p>
                </div>
                <div className="w-px bg-sky-100" />
                <div className="text-center">
                  <p className="text-sky-500 font-bold text-lg font-[var(--font-syne)]">24/7</p>
                  <p className="text-gray-text text-xs">Emergencia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-sky-300" />
      </motion.div>
    </section>
  );
}
