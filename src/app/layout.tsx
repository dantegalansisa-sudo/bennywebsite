import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BC Clima — Soluciones en Climatización | Santiago, RD",
  description:
    "Instalación, mantenimiento y venta de aires acondicionados en Santiago, República Dominicana. Benny Céspedes — Tu Confort es Nuestro Compromiso.",
  keywords: [
    "aire acondicionado santiago",
    "instalación aire acondicionado",
    "mantenimiento aire acondicionado",
    "BC Clima",
    "Benny Céspedes",
    "climatización santiago",
    "split inverter",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
