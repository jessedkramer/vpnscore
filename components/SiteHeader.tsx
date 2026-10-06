import Link from "next/link";

const links = [
  { href: "/", label: "Vergelijking" },
  { href: "/#methode", label: "Methode" },
  { href: "/reviews/nordvpn", label: "NordVPN" },
  { href: "/reviews/surfshark", label: "Surfshark" },
  { href: "/vpn-netflix", label: "Netflix" },
  { href: "/vpn-privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">VS</span>
          <span className="logo-text">VPNScore</span>
        </Link>
        <nav className="nav" aria-label="Hoofdmenu">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
