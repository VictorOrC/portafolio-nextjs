import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Victor Orduño | Full Stack Developer",
    template: "%s | Victor Orduño",
  },
  description: "Portafolio profesional moderno de Victor Orduño, Desarrollador Full Stack.",
  openGraph: {
    title: "Victor Orduño | Full Stack Developer",
    description: "Desarrollo de productos web y moviles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <nav className="shell" style={{ padding: '2rem 0 0', display: 'block' }}>
          <div className="nav">
            <a href="/" className="logo">VO<span className="text-gradient">.</span></a>
            <div className="nav-links">
              <a href="/#perfil">Perfil</a>
              <a href="/#stack">Stack</a>
              <a href="/projects">Proyectos</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="shell footer" style={{ padding: '3rem 0', gap: 0, marginTop: '2rem' }}>
          <p>&copy; {new Date().getFullYear()} Victor Eduardo Orduño Castaños. <br /> Construido con Next.js y CSS Puro.</p>
        </footer>
      </body>
    </html>
  );
}
