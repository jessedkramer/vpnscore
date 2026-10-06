import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <strong>VPNScore</strong>
          <p className="muted small">
            Onafhankelijke VPN-vergelijking voor Nederland. We verdienen mogelijk
            affiliate-commissie — dat beïnvloedt onze scores niet.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/#methode">Hoe we testen</Link>
          <Link href="/reviews/nordvpn">NordVPN review</Link>
          <Link href="/reviews/surfshark">Surfshark review</Link>
          <Link href="/vpn-netflix">VPN voor Netflix</Link>
          <Link href="/vpn-privacy">Privacy</Link>
        </div>
      </div>
      <div className="wrap disclosure">
        Laatst bijgewerkt: oktober 2026 · Scores kunnen wijzigen na nieuwe tests.
        {" "}Affiliate-links mogelijk; zie{" "}
        <Link href="/#methode">onze methode</Link>.
      </div>
    </footer>
  );
}
