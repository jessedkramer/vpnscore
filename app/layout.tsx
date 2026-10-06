import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPN Score — Beste VPN Nederland 2026",
  description:
    "Onafhankelijke VPN-vergelijking voor Nederland. Scores, reviews en koopadvies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
