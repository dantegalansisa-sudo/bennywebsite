"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Award } from "lucide-react";

export default function CEOSection() {
  return (
    <section id="ceo" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep/50 to-void" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-frost/[0.03] rounded-full blur-[100px] -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Photo */}
          <div className="lg:w-5/12 relative">
            <div className="absolute -inset-4 bg-frost/[0.05] rounded-2xl blur-xl" />
            <div className="relative gradient-border rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[3/4] max-w-[400px] mx-auto bg-gradient-to-br from-steel to-deep flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/ceo.jpg"
                  alt="Benny Céspedes — Fundador de BC Clima"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <User className="w-24 h-24 text-frost/20" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:w-7/12 space-y-6">
            <motion.p
              className="uppercase tracking-[0.2em] text-sm font-semibold text-frost"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Nuestro Fundador
            </motion.p>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white font-[var(--font-syne)] tracking-tight">
              Benny Céspedes
            </h2>

            <p className="text-lg text-ice-muted font-medium">
              Técnico en Climatización & Fundador de BC Clima
            </p>

            <p className="text-mist leading-relaxed">
              Benny Céspedes inició su carrera en el mundo de la climatización
              hace más de una década, movido por su pasión por la tecnología y
              el servicio al cliente. Lo que comenzó como un emprendimiento
              personal se ha convertido en una empresa de referencia en Santiago
              para todo lo relacionado con aires acondicionados.
            </p>

            <p className="text-mist leading-relaxed">
              Con formación técnica especializada y cientos de instalaciones
              exitosas en su historial, Benny lidera personalmente cada proyecto
              importante y se asegura de que cada cliente reciba el mismo nivel
              de atención y calidad.
            </p>

            <blockquote className="relative border-l-2 border-frost/40 pl-6 py-3">
              <div className="absolute -left-px top-0 w-0.5 h-full bg-gradient-to-b from-frost to-transparent" />
              <p className="italic text-ghost text-lg leading-relaxed">
                <span className="text-frost text-3xl font-serif leading-none">
                  &ldquo;
                </span>
                Mi compromiso es que cada cliente sienta la diferencia — no solo
                en la temperatura de su espacio, sino en la calidad del
                servicio.
                <span className="text-frost text-3xl font-serif leading-none">
                  &rdquo;
                </span>
              </p>
            </blockquote>

            <div className="inline-flex items-center gap-3 glass rounded-xl px-5 py-3 text-sm font-semibold text-frost">
              <Award className="w-5 h-5" />
              500+ Instalaciones &nbsp;|&nbsp; 10+ Años de Experiencia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
