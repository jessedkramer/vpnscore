import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <strong>VPNScore</strong>
          <p className="muted small">
            VPN-vergelijking voor Nederland. Laatst bijgewerkt: oktober 2026.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/reviews/nordvpn">NordVPN review</Link>
          <Link href="/reviews/surfshark">Surfshark review</Link>
          <Link href="/vpn-streaming">Streaming</Link>
          <Link href="/goedkoopste-vpn">Goedkoopste VPN</Link>
          <Link href="/nordvpn-vs-surfshark">Nord vs Surfshark</Link>
          <Link href="/vpn-netflix">Netflix</Link>
        </div>
      </div>
      <div className="wrap disclosure">
        Sommige links zijn affiliate — jij betaalt niets extra.
      </div>
    </footer>
  );
}
