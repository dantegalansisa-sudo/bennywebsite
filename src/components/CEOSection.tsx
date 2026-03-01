"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Award } from "lucide-react";

export default function CEOSection() {
  return (
    <section id="ceo" className="bg-sky-light py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Photo */}
          <div className="lg:w-5/12 relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-sky-100 rounded-xl" />
            <div className="relative w-full aspect-[3/4] max-w-[400px] mx-auto bg-gradient-to-br from-[#EBF5FF] to-[#F0F9FF] rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/images/ceo.png"
                alt="Benny Céspedes — Fundador de BC Clima"
                fill
                className="object-cover rounded-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <User className="w-24 h-24 text-sky-300 opacity-60" />
            </div>
          </div>

          {/* Text */}
          <div className="lg:w-7/12 space-y-6">
            <p className="uppercase tracking-widest text-sm font-semibold text-sky-600">
              Nuestro Fundador
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-sky-900 font-[var(--font-outfit)]">
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
              de atención y calidad que le ha ganado la confianza de hogares y
              negocios en toda la ciudad.
            </p>
            <blockquote className="border-l-4 border-sky-600 pl-6 py-2">
              <p className="italic text-gray-dark text-lg leading-relaxed">
                <span className="text-sky-600 text-3xl font-serif leading-none">
                  &ldquo;
                </span>
                Mi compromiso es que cada cliente sienta la diferencia — no solo
                en la temperatura de su espacio, sino en la calidad del
                servicio.
                <span className="text-sky-600 text-3xl font-serif leading-none">
                  &rdquo;
                </span>
              </p>
            </blockquote>
            <div className="inline-flex items-center gap-3 bg-sky-100 text-sky-700 px-5 py-3 rounded-lg text-sm font-semibold">
              <Award className="w-5 h-5" />
              500+ Instalaciones &nbsp;|&nbsp; 10+ Años de Experiencia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
