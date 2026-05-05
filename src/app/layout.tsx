import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Santos | Desenvolvedor",
  description: "Portfólio de Gustavo Santos — Desenvolvedor Frontend e Full Stack especializado em React e Next.js.",
  keywords: ["desenvolvedor", "frontend", "next.js", "react", "typescript"],
  openGraph: {
    title: "Gustavo Santos | Desenvolvedor",
    description: "Portfólio de Gustavo Santos — Desenvolvedor Frontend",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
