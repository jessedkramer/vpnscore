import Link from "next/link";

const links = [
  { href: "/#vergelijking", label: "Vergelijking" },
  { href: "/vpn-streaming", label: "Streaming" },
  { href: "/goedkoopste-vpn", label: "Goedkoopste" },
  { href: "/nordvpn-vs-surfshark", label: "Nord vs Surfshark" },
  { href: "/reviews/nordvpn", label: "Reviews" },
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
