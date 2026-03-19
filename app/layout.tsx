import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Portafolio Personal",
    template: "%s | Portafolio Personal",
  },
  description:
    "Portafolio profesional construido con Next.js para presentar perfil, experiencia y proyectos destacados.",
  openGraph: {
    title: "Portafolio Personal",
    description:
      "Base inicial de un portafolio de desarrollador pensado para crecer con proyectos, casos de estudio y contenido tecnico.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${newsreader.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
