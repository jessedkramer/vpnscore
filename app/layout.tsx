import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "VPNScore — Beste VPN Nederland 2026",
    template: "%s | VPNScore",
  },
  description:
    "Onafhankelijke VPN-vergelijking voor Nederland. Scores, reviews, streaming & privacy — kort en eerlijk.",
  metadataBase: new URL("https://vpnscore.nl"),
  openGraph: {
    title: "VPNScore — Beste VPN Nederland 2026",
    description: "Vergelijk NordVPN, Surfshark en Proton VPN met scores en koopadvies.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), var(--font)" }}>
        <SiteHeader />
        <div className="wrap main">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
