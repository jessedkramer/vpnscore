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
  metadataBase: new URL("https://vpnscore.nl"),
  title: {
    default: "Beste VPN Nederland 2026 — Vergelijk & kies | VPNScore",
    template: "%s | VPNScore",
  },
  description:
    "Vergelijk NordVPN, Surfshark en Proton VPN voor Nederland. Scores, prijzen en directe links naar de aanbieding.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beste VPN Nederland 2026 | VPNScore",
    description:
      "Ranking met scores en prijzen — kies NordVPN, Surfshark of Proton VPN.",
    url: "https://vpnscore.nl",
    siteName: "VPNScore",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Beste VPN Nederland 2026 | VPNScore",
    description:
      "Vergelijk VPN's voor NL — scores, prijzen, daarna kiezen.",
  },
  robots: {
    index: true,
    follow: true,
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
