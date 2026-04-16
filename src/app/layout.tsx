import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariachi Nuevo Tecalitlán | Desde 1965",
  description: "El Mariachi que representa a México con dignidad, orgullo y profunda entrega artística. Seis décadas preservando la esencia de la música mexicana. Reserva tu evento hoy.",
  keywords: ["Mariachi", "Nuevo Tecalitlán", "Música mexicana", "Guadalajara", "Tradición", "Contratar mariachi", "Bodas", "Eventos"],
  authors: [{ name: "Mariachi Nuevo Tecalitlán" }],
  openGraph: {
    title: "Mariachi Nuevo Tecalitlán | Desde 1965",
    description: "60 años de tradición y excelencia en la música mexicana",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎺</text></svg>" />
      </head>
      <body className="min-h-full antialiased">
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="/images/mariachi (bg).png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        {children}
      </body>
    </html>
  );
}
