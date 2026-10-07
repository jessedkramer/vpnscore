import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <strong>VPNScore</strong>
          <p className="muted small">
            Onafhankelijke VPN-vergelijking voor Nederland. Laatst bijgewerkt: oktober 2026.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/">Beste VPN ranking</Link>
          <Link href="/vpn-streaming">Streaming</Link>
          <Link href="/goedkoopste-vpn">Goedkoopste VPN</Link>
          <Link href="/nordvpn-vs-surfshark">Nord vs Surfshark</Link>
          <Link href="/vpn-netflix">Netflix</Link>
          <Link href="/vpn-privacy">Privacy</Link>
          <Link href="/reviews/nordvpn">NordVPN review</Link>
          <Link href="/reviews/surfshark">Surfshark review</Link>
          <Link href="/reviews/proton-vpn">Proton VPN review</Link>
          <Link href="/hoe-we-testen">Hoe we testen</Link>
          <Link href="/over-ons">Over VPNScore</Link>
          <Link href="/privacy">Privacybeleid</Link>
        </div>
      </div>
      <div className="wrap disclosure">
        Sommige links zijn affiliate — jij betaalt niets extra. We verdienen een commissie als je via
        onze link een abonnement afsluit.
      </div>
    </footer>
  );
}
