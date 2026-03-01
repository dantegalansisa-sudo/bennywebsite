import { Snowflake, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-abyss border-t border-glass-border">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-frost/[0.03] rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Snowflake className="w-7 h-7 text-frost" />
              <span className="text-xl font-bold font-[var(--font-syne)] text-white tracking-tight">
                BC<span className="font-normal text-frost">Clima</span>
              </span>
            </div>
            <p className="text-smoke text-sm leading-relaxed">
              Tu confort es nuestro compromiso
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/bennycespedes23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:bg-frost/10 hover:text-frost text-smoke transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/18097429060"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:bg-frost/10 hover:text-frost text-smoke transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@bcclima.com"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:bg-frost/10 hover:text-frost text-smoke transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-[var(--font-syne)] text-sm tracking-wide">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-sm text-smoke">
              <li className="hover:text-frost transition-colors duration-300 cursor-default">Instalación</li>
              <li className="hover:text-frost transition-colors duration-300 cursor-default">Mantenimiento</li>
              <li className="hover:text-frost transition-colors duration-300 cursor-default">Reparación</li>
              <li className="hover:text-frost transition-colors duration-300 cursor-default">Venta de Equipos</li>
              <li className="hover:text-frost transition-colors duration-300 cursor-default">Emergencias 24/7</li>
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-[var(--font-syne)] text-sm tracking-wide">
              Equipos
            </h4>
            <ul className="space-y-2.5 text-sm text-smoke">
              <li className="hover:text-frost transition-colors duration-300 cursor-default">Split Inverter</li>
              <li className="hover:text-frost transition-colors duration-300 cursor-default">Split Convencional</li>
              <li className="hover:text-frost transition-colors duration-300 cursor-default">Cassette</li>
              <li className="hover:text-frost transition-colors duration-300 cursor-default">Piso-Techo</li>
              <li className="hover:text-frost transition-colors duration-300 cursor-default">Multi-Split</li>
              <li className="hover:text-frost transition-colors duration-300 cursor-default">Ducto</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-[var(--font-syne)] text-sm tracking-wide">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-smoke">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-frost/60" />
                809-742-9060
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-frost/60" />
                @bennycespedes23
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-frost/60" />
                info@bcclima.com
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-frost/60" />
                Santiago, RD
              </li>
            </ul>
          </div>
        </div>

        <div className="frost-line mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-smoke/60">
          <p>
            &copy; 2026 BC Clima — Benny Céspedes. Todos los derechos
            reservados.
          </p>
          <p>
            Desarrollado por{" "}
            <span className="text-frost/60 font-medium">NEXIX Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
