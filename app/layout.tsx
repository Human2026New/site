import "./globals.css";
import "@/styles/hum.css";
import "@/styles/cosmic-dust.css";

import { Cinzel, Inter } from "next/font/google";
import TopBar from "@/components/TopBar";

/* =========================
   FONTES
========================= */
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-title",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata = {
  title: "HUMAN",
  description: "Um sistema humano.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${cinzel.variable} ${inter.variable}`}>
      <body>
        {/* Barra dourada superior */}
        <TopBar />

        {/* Poeira cósmica */}
        <div className="cosmic-dust" />

        {/* Conteúdo */}
        <div style={{ paddingTop: 70 }}>{children}</div>
      </body>
    </html>
  );
}
