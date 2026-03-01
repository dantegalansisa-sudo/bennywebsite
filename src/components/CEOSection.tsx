"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Award } from "lucide-react";

export default function CEOSection() {
  return (
    <section id="ceo" className="bg-bg-alt py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Photo */}
          <div className="lg:w-5/12 relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-sky-100 rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full aspect-[3/4] max-w-[400px] mx-auto bg-gradient-to-br from-[#EBF5FF] to-[#F0F9FF] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/ceo.jpg"
                  alt="Benny Céspedes — Fundador de BC Clima"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <User className="w-24 h-24 text-sky-300/50" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:w-7/12 space-y-6">
            <motion.p
              className="uppercase tracking-[0.2em] text-sm font-semibold text-sky-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Nuestro Fundador
            </motion.p>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-sky-900 font-[var(--font-syne)] tracking-tight">
              Benny Céspedes
            </h2>

            <p className="text-lg text-gray-dark font-medium">
              Técnico en Climatización & Fundador de BC Clima
            </p>

            <p className="text-gray-text leading-relaxed">
              Benny Céspedes inició su carrera en el mundo de la climatización
              hace más de una década, movido por su pasión por la tecnología y
              el servicio al cliente. Lo que comenzó como un emprendimiento
              personal se ha convertido en una empresa de referencia en Santiago
              para todo lo relacionado con aires acondicionados.
            </p>

            <p className="text-gray-text leading-relaxed">
              Con formación técnica especializada y cientos de instalaciones
              exitosas en su historial, Benny lidera personalmente cada proyecto
              importante y se asegura de que cada cliente reciba el mismo nivel
              de atención y calidad.
            </p>

            <blockquote className="border-l-4 border-sky-500 pl-6 py-2">
              <p className="italic text-gray-dark text-lg leading-relaxed">
                <span className="text-sky-500 text-3xl font-serif leading-none">
                  &ldquo;
                </span>
                Mi compromiso es que cada cliente sienta la diferencia — no solo
                en la temperatura de su espacio, sino en la calidad del
                servicio.
                <span className="text-sky-500 text-3xl font-serif leading-none">
                  &rdquo;
                </span>
              </p>
            </blockquote>

            <div className="inline-flex items-center gap-3 bg-sky-100 text-sky-600 rounded-xl px-5 py-3 text-sm font-semibold">
              <Award className="w-5 h-5" />
              500+ Instalaciones &nbsp;|&nbsp; 10+ Años de Experiencia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
