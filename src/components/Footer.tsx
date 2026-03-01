import { Snowflake, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0C2D48] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Snowflake className="w-7 h-7 text-sky-400" />
              <span className="text-xl font-bold font-[var(--font-outfit)]">
                BC<span className="font-normal text-sky-400">Clima</span>
              </span>
            </div>
            <p className="text-sky-200/70 text-sm leading-relaxed">
              Tu confort es nuestro compromiso
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/bennycespedes23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/18097429060"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@bcclima.com"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-[var(--font-outfit)]">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-sky-200/70">
              <li>Instalación</li>
              <li>Mantenimiento</li>
              <li>Reparación</li>
              <li>Venta de Equipos</li>
              <li>Emergencias 24/7</li>
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-[var(--font-outfit)]">
              Equipos
            </h4>
            <ul className="space-y-2 text-sm text-sky-200/70">
              <li>Split Inverter</li>
              <li>Split Convencional</li>
              <li>Cassette</li>
              <li>Piso-Techo</li>
              <li>Multi-Split</li>
              <li>Ducto</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-[var(--font-outfit)]">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-sky-200/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                809-742-9060
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-sky-400" />
                @bennycespedes23
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                info@bcclima.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                Santiago, RD
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sky-200/50">
          <p>
            &copy; 2026 BC Clima — Benny Céspedes. Todos los derechos
            reservados.
          </p>
          <p>
            Desarrollado por{" "}
            <span className="text-sky-400 font-medium">NEXIX Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
