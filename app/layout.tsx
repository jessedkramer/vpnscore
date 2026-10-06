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
    "Vergelijk de beste VPN's voor Nederland. Ranking, scores en directe links naar NordVPN, Surfshark en Proton VPN.",
  metadataBase: new URL("https://vpnscore.nl"),
  openGraph: {
    title: "VPNScore — Beste VPN Nederland 2026",
    description: "Vergelijk NordVPN, Surfshark en Proton VPN — scores naast elkaar, daarna kiezen.",
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
