import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XXVI Foro Nacional de Filosofía | Programación",
  description:
    "Programación del XXVI Foro Nacional de Filosofía de la Universidad del Atlántico.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
