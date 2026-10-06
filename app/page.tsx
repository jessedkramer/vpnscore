import Link from "next/link";

export default function HomePage() {
  return (
    <main className="wrap">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/reviews/nordvpn">NordVPN</Link>
        <Link href="/reviews/surfshark">Surfshark</Link>
        <Link href="/vpn-netflix">VPN voor Netflix</Link>
        <Link href="/vpn-privacy">Privacy</Link>
      </nav>

      <p className="disclosure" style={{ borderTop: "none", marginTop: 0, paddingTop: 0 }}>
        Affiliate disclosure: VPNScore kan commissie ontvangen als je via onze links een VPN afsluit. Dat kost jou niets extra. We testen en vergelijken onafhankelijk.
      </p>

      <h1>Beste VPN Nederland 2026</h1>
      <p>
        Op zoek naar de beste VPN in Nederland? Dan wil je vooral: snelheid, privacy,
        Netflix/streaming, en een eerlijke prijs. Hieronder onze actuele top.
      </p>

      <h2>Snelle top 3</h2>
      <section className="card">
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
          <h2 style={{ margin: 0 }}>1. NordVPN</h2>
          <span className="score">9.2/10</span>
        </div>
        <p>Beste overall — snelheid + streaming.</p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a className="btn" href="#AFFILIATE_NORD">Bekijk NordVPN-deal</a>
          <Link href="/reviews/nordvpn">Volledige review →</Link>
        </div>
      </section>

      <section className="card">
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
          <h2 style={{ margin: 0 }}>2. Surfshark</h2>
          <span className="score">8.9/10</span>
        </div>
        <p>Beste prijs — onbeperkt apparaten.</p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a className="btn" href="#AFFILIATE_SURFSHARK">Bekijk Surfshark-deal</a>
          <Link href="/reviews/surfshark">Volledige review →</Link>
        </div>
      </section>

      <section className="card">
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
          <h2 style={{ margin: 0 }}>3. Proton VPN</h2>
          <span className="score">8.5/10</span>
        </div>
        <p>Beste privacy — open source / Proton-ecosysteem.</p>
        <a className="btn" href="#AFFILIATE_PROTON">Bekijk Proton VPN</a>
      </section>

      <h2>Welke VPN kiezen?</h2>
      <ul>
        <li><strong>Veiligste allrounder?</strong> → NordVPN</li>
        <li><strong>Veel apparaten, budget?</strong> → Surfshark</li>
        <li><strong>Maximale privacy?</strong> → Proton VPN</li>
      </ul>

      <h2>FAQ</h2>
      <p><strong>Is een VPN legaal in Nederland?</strong><br/>Ja. Illegaal gebruik blijft illegaal — de VPN zelf niet.</p>
      <p><strong>Heb ik een VPN nodig met glasvezel?</strong><br/>Niet voor snelheid. Wel voor privacy op openbare wifi en streaming-regio&apos;s.</p>

      <p className="disclosure">Laatst bijgewerkt: oktober 2026. Scores kunnen wijzigen na nieuwe tests. Affiliate-links volgen na goedkeuring.</p>
    </main>
  );
}
