import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vpnscore.nl";
  const now = new Date();
  const paths = [
    "/",
    "/reviews/nordvpn",
    "/reviews/surfshark",
    "/reviews/proton-vpn",
    "/vpn-netflix",
    "/vpn-privacy",
  ];
  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
