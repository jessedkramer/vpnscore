import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vpnscore.nl";
  const now = new Date();
  const low = new Set(["/over-ons", "/privacy", "/hoe-we-testen"]);
  const paths = [
    "/",
    "/reviews/nordvpn",
    "/reviews/surfshark",
    "/reviews/proton-vpn",
    "/vpn-netflix",
    "/vpn-privacy",
    "/vpn-streaming",
    "/goedkoopste-vpn",
    "/nordvpn-vs-surfshark",
    "/hoe-we-testen",
    "/over-ons",
    "/privacy",
  ];
  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : low.has(path) ? 0.5 : 0.8,
  }));
}
