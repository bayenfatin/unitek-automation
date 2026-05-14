import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Unitek Automation — Maintenance CNC & Maintenance 4.0",
    template: "%s | Unitek Automation",
  },
  description:
    "Expert en maintenance industrielle, dépannage CNC, rétrofit de machines-outils et pilotage par la donnée. 30 ans d'expérience terrain. Saint-Fons, Rhône (69). Intervention <4h région lyonnaise.",
  keywords: [
    "maintenance industrielle",
    "dépannage CNC",
    "commandes numériques",
    "Siemens Sinumerik",
    "FANUC",
    "rétrofit machines-outils",
    "maintenance 4.0",
    "pilotage data",
    "Saint-Fons",
    "Lyon",
  ],
  openGraph: {
    title: "Unitek Automation — Maintenance CNC & Maintenance 4.0",
    description:
      "Expertise curative sur commandes numériques et pilotage par la donnée. 30 ans d'expérience terrain. Région lyonnaise.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Header />
        <main style={{ paddingTop: "68px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
