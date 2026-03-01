import type { Metadata } from "next";
import { Syne, Figtree } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
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
      <body className={`${syne.variable} ${figtree.variable} antialiased noise`}>
        {children}
      </body>
    </html>
  );
}
