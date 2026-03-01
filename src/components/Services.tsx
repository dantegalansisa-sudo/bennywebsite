"use client";

import { motion } from "framer-motion";
import { Wrench, Settings, Zap, ShoppingBag, CheckCircle } from "lucide-react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  listTitle: string;
  items: string[];
  button: string;
  image: string;
  imageAlt: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    title: "Instalación Profesional",
    description:
      "Instalación certificada de aires acondicionados residenciales y comerciales. Split, multi-split, cassette, ducto y piso-techo. Trabajamos con todas las marcas: Samsung, LG, Carrier, Daikin, Midea, Gree y más.",
    listTitle: "Incluye:",
    items: [
      "Evaluación del espacio y carga térmica",
      "Instalación eléctrica y tubería de cobre",
      "Soporte y base para unidad externa",
      "Prueba de funcionamiento y calibración",
      "Garantía de instalación",
    ],
    button: "Solicitar Instalación",
    image: "/images/installation.png",
    imageAlt: "Técnico instalando aire acondicionado",
  },
  {
    icon: Settings,
    title: "Mantenimiento de Aires",
    description:
      "El mantenimiento regular extiende la vida útil de tu equipo, mejora su eficiencia y reduce el consumo eléctrico. Ofrecemos planes de mantenimiento preventivo y servicio correctivo.",
    listTitle: "Incluye:",
    items: [
      "Limpieza profunda de filtros y serpentín",
      "Verificación de gas refrigerante",
      "Limpieza de drenaje",
      "Revisión eléctrica completa",
      "Diagnóstico de rendimiento",
    ],
    button: "Programar Mantenimiento",
    image: "/images/maintenance.png",
    imageAlt: "Técnico realizando mantenimiento",
  },
  {
    icon: Zap,
    title: "Reparación Express",
    description:
      "¿Tu aire no enfría, hace ruido o gotea? Nuestros técnicos certificados diagnostican y reparan cualquier falla en el menor tiempo posible. Servicio de emergencia 24/7.",
    listTitle: "Problemas que resolvemos:",
    items: [
      "No enfría o enfría poco",
      "Goteo de agua",
      "Ruidos extraños",
      "Mal olor al encender",
      "Fallas eléctricas y compresor",
    ],
    button: "Reportar Problema",
    image: "/images/ac-unit-1.png",
    imageAlt: "Reparación de aire acondicionado",
  },
  {
    icon: ShoppingBag,
    title: "Venta de Aires Acondicionados",
    description:
      "Vendemos equipos nuevos de las mejores marcas con garantía de fábrica. Te asesoramos en la selección del equipo correcto según tu espacio, uso y presupuesto. Incluimos instalación.",
    listTitle: "Marcas y tipos:",
    items: [
      "Samsung, LG, Carrier, Daikin, Midea, Gree, Toshiba",
      "Split de pared · Inverter · Multi-split",
      "Cassette · Piso-techo · Ducto",
    ],
    button: "Ver Equipos Disponibles",
    image: "/images/ac-unit-2.png",
    imageAlt: "Aires acondicionados disponibles",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative">
      {services.map((service, i) => {
        const isEven = i % 2 === 1;
        const Icon = service.icon;

        return (
          <div
            key={i}
            className={`relative py-28 lg:py-36 overflow-hidden ${
              isEven ? "bg-deep/50" : ""
            }`}
          >
            {/* Ambient glow */}
            <div
              className={`absolute w-[500px] h-[500px] bg-frost/[0.03] rounded-full blur-[120px] ${
                isEven ? "top-0 right-0" : "bottom-0 left-0"
              }`}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
              <motion.div
                className={`flex flex-col ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-16`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative gradient-border rounded-2xl overflow-hidden">
                    <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-steel to-deep flex items-center justify-center overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <Icon className="w-20 h-20 text-frost/20" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-frost/10 text-frost px-3 py-1.5 rounded-full text-sm font-medium border border-frost/15">
                    <Icon className="w-4 h-4" />
                    Servicio
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white font-[var(--font-syne)] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-mist leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <p className="font-semibold text-ghost mb-3">
                      {service.listTitle}
                    </p>
                    <ul className="space-y-2.5">
                      {service.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-mist"
                        >
                          <CheckCircle className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/18097429060?text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20para%20aire%20acondicionado%20en%20Santiago."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-frost/10 hover:bg-frost/20 text-frost font-semibold px-6 py-3 rounded-xl transition-all duration-300 border border-frost/20 hover:border-frost/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
                  >
                    {service.button}
                    <span className="text-frost/60">→</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
