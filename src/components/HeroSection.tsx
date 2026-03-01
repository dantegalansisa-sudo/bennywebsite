"use client";

import { motion } from "framer-motion";
import { Snowflake, CheckCircle, ArrowDown } from "lucide-react";
import Image from "next/image";

function FloatingSnowflake({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute text-frost/10"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 180, 360],
        opacity: [0.1, 0.2, 0.1],
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
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-void via-abyss to-deep" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-frost/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-frost/[0.02] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-frost/[0.015] rounded-full blur-[150px]" />
      </div>

      {/* Floating snowflakes */}
      <FloatingSnowflake delay={0} x="10%" y="20%" size={24} />
      <FloatingSnowflake delay={2} x="85%" y="15%" size={18} />
      <FloatingSnowflake delay={4} x="70%" y="70%" size={28} />
      <FloatingSnowflake delay={1} x="25%" y="75%" size={16} />
      <FloatingSnowflake delay={3} x="55%" y="30%" size={20} />
      <FloatingSnowflake delay={5} x="90%" y="55%" size={14} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20 lg:pt-0 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left column */}
          <div className="lg:w-[58%] space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 shimmer text-frost text-sm font-medium px-4 py-2 rounded-full border border-frost/20">
                <Snowflake className="w-4 h-4" />
                Servicio en todo Santiago
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] font-[var(--font-syne)] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Climatización{" "}
              <span className="text-frost glow-text">Profesional</span>{" "}
              para Tu Espacio
            </motion.h1>

            <motion.p
              className="text-lg text-mist leading-relaxed max-w-lg"
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
                className="group relative bg-frost text-void font-bold px-8 py-4 rounded-xl transition-all duration-300 text-center hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] hover:scale-[1.02]"
              >
                Solicitar Cotización
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#servicios"
                className="border border-smoke/30 text-ghost hover:text-white hover:border-frost/40 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-center hover:bg-frost/5"
              >
                Ver Servicios
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-mint text-sm font-medium"
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
            {/* Glow behind card */}
            <div className="absolute -inset-8 bg-frost/[0.06] rounded-3xl blur-2xl" />

            <div className="relative gradient-border rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-steel to-deep flex items-center justify-center overflow-hidden">
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
                <div className="flex flex-col items-center gap-4">
                  <Snowflake className="w-20 h-20 text-frost/30 animate-float" />
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-frost/30 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-frost/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
                    <div className="w-2 h-2 rounded-full bg-frost/10 animate-pulse" style={{ animationDelay: "1s" }} />
                  </div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4 flex justify-between">
                <div className="text-center">
                  <p className="text-frost font-bold text-lg font-[var(--font-syne)]">500+</p>
                  <p className="text-smoke text-xs">Instalaciones</p>
                </div>
                <div className="w-px bg-glass-border" />
                <div className="text-center">
                  <p className="text-frost font-bold text-lg font-[var(--font-syne)]">10+</p>
                  <p className="text-smoke text-xs">Años</p>
                </div>
                <div className="w-px bg-glass-border" />
                <div className="text-center">
                  <p className="text-frost font-bold text-lg font-[var(--font-syne)]">24/7</p>
                  <p className="text-smoke text-xs">Emergencia</p>
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
        <ArrowDown className="w-5 h-5 text-frost/40" />
      </motion.div>
    </section>
  );
}
