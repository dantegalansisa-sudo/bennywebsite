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
  placeholderIcon: LucideIcon;
}

const services: Service[] = [
  {
    icon: Wrench,
    title: "Instalación Profesional",
    description:
      "Instalación certificada de aires acondicionados residenciales y comerciales. Split, multi-split, cassette, ducto y piso-techo. Trabajamos con todas las marcas: Samsung, LG, Carrier, Daikin, Midea, Gree y más. Cada instalación incluye evaluación del espacio, recomendación de capacidad correcta (BTU) y pruebas de funcionamiento.",
    listTitle: "Incluye:",
    items: [
      "Evaluación del espacio y carga térmica",
      "Instalación eléctrica y tubería de cobre",
      "Soporte y base para unidad externa",
      "Prueba de funcionamiento y calibración",
      "Garantía de instalación",
    ],
    button: "Solicitar Instalación →",
    image: "/images/installation.png",
    imageAlt: "Técnico instalando aire acondicionado",
    placeholderIcon: Wrench,
  },
  {
    icon: Settings,
    title: "Mantenimiento de Aires",
    description:
      "El mantenimiento regular extiende la vida útil de tu equipo, mejora su eficiencia y reduce el consumo eléctrico. Ofrecemos planes de mantenimiento preventivo periódico y servicio correctivo para reparaciones urgentes.",
    listTitle: "Incluye:",
    items: [
      "Limpieza profunda de filtros y serpentín",
      "Verificación de gas refrigerante",
      "Limpieza de drenaje",
      "Revisión eléctrica completa",
      "Diagnóstico de rendimiento",
    ],
    button: "Programar Mantenimiento →",
    image: "/images/maintenance.png",
    imageAlt: "Técnico realizando mantenimiento",
    placeholderIcon: Settings,
  },
  {
    icon: Zap,
    title: "Reparación Express",
    description:
      "¿Tu aire no enfría, hace ruido o gotea? Nuestros técnicos certificados diagnostican y reparan cualquier falla en el menor tiempo posible. Servicio de emergencia disponible 24/7 para clientes en Santiago.",
    listTitle: "Problemas comunes que resolvemos:",
    items: [
      "No enfría o enfría poco",
      "Goteo de agua",
      "Ruidos extraños",
      "Mal olor al encender",
      "Fallas eléctricas",
      "Compresor dañado",
    ],
    button: "Reportar Problema →",
    image: "/images/ac-unit-1.png",
    imageAlt: "Reparación de aire acondicionado",
    placeholderIcon: Zap,
  },
  {
    icon: ShoppingBag,
    title: "Venta de Aires Acondicionados",
    description:
      "Vendemos equipos nuevos de las mejores marcas con garantía de fábrica. Te asesoramos en la selección del equipo correcto según el tamaño de tu espacio, uso y presupuesto. Incluimos instalación en el precio.",
    listTitle: "Marcas y tipos:",
    items: [
      "Samsung, LG, Carrier, Daikin, Midea, Gree, Toshiba",
      "Split de pared · Inverter · Multi-split",
      "Cassette · Piso-techo · Ducto",
    ],
    button: "Ver Equipos Disponibles →",
    image: "/images/ac-unit-2.png",
    imageAlt: "Aires acondicionados disponibles",
    placeholderIcon: ShoppingBag,
  },
];

function ImagePlaceholder({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#EBF5FF] to-[#F0F9FF] rounded-xl flex items-center justify-center relative overflow-hidden">
      <Icon className="w-20 h-20 text-sky-300 opacity-60" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios">
      {services.map((service, i) => {
        const isEven = i % 2 === 1;
        const bg = isEven ? "bg-sky-light" : "bg-white";
        const Icon = service.icon;

        return (
          <div key={i} className={`${bg} py-28 lg:py-36`}>
            <div className="max-w-6xl mx-auto px-8">
              <motion.div
                className={`flex flex-col ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-16`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover rounded-xl"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <ImagePlaceholder icon={service.placeholderIcon} />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 px-3 py-1.5 rounded-full text-sm font-medium">
                    <Icon className="w-4 h-4" />
                    Servicio
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-sky-900 font-[var(--font-outfit)]">
                    {service.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <p className="font-semibold text-gray-dark mb-3">
                      {service.listTitle}
                    </p>
                    <ul className="space-y-2">
                      {service.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-gray-text"
                        >
                          <CheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://wa.me/18097429060?text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20para%20aire%20acondicionado%20en%20Santiago."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    {service.button}
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
