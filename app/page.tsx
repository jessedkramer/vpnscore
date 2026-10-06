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

      <h1>Beste VPN Nederland 2026 — Vergelijking &amp; Scores</h1>
      <p>
        Op zoek naar de beste VPN in Nederland? Dan wil je vooral: snelheid, privacy,
        Netflix/streaming, en een eerlijke prijs. Hieronder onze actuele top — kort, zonder marketingpraat.
      </p>

      <h2>Snelle top 3</h2>
      <section className="card">
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
          <h2 style={{ margin: 0 }}>1. NordVPN</h2>
          <span className="score">9.2/10</span>
        </div>
        <p>Beste voor snelheid + streaming. Prijs: zie actuele deal.</p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a className="btn" href="#AFFILIATE_NORD">Bekijk NordVPN-deal →</a>
          <Link href="/reviews/nordvpn">Volledige review →</Link>
        </div>
      </section>

      <section className="card">
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
          <h2 style={{ margin: 0 }}>2. Surfshark</h2>
          <span className="score">8.9/10</span>
        </div>
        <p>Beste voor prijs / onbeperkt devices.</p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a className="btn" href="#AFFILIATE_SURFSHARK">Bekijk Surfshark-deal →</a>
          <Link href="/reviews/surfshark">Volledige review →</Link>
        </div>
      </section>

      <section className="card">
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
          <h2 style={{ margin: 0 }}>3. Proton VPN</h2>
          <span className="score">8.5/10</span>
        </div>
        <p>Beste voor privacy &amp; open source.</p>
        <a className="btn" href="#AFFILIATE_PROTON">Bekijk Proton VPN →</a>
      </section>

      <h2>Waar letten we op?</h2>
      <ol>
        <li><strong>Snelheid</strong> — bruikbaar voor 4K en videobellen</li>
        <li><strong>Privacy</strong> — no-logs, jurisdictie, audits</li>
        <li><strong>Streaming</strong> — Netflix NL/US, Disney+, etc.</li>
        <li><strong>Apparaten</strong> — hoeveel tegelijk</li>
        <li><strong>Prijs</strong> — echte maandprijs na introductie</li>
        <li><strong>Gebruiksgemak</strong> — apps NL/ENG, installatie</li>
      </ol>

      <h2>1. NordVPN — beste overall (9.2/10)</h2>
      <p>Sterk op snelheid, grote serverkeuze, en betrouwbare streaming. Goede keuze als je “gewoon de beste” wilt zonder gedoe.</p>
      <p><strong>Plus:</strong> snel, stabiel, Threat Protection<br/><strong>Min:</strong> duurder dan Surfshark bij veel devices</p>
      <a className="btn" href="#AFFILIATE_NORD">Bekijk NordVPN-deal →</a>
      <p><Link href="/reviews/nordvpn">Uitgebreide review →</Link></p>

      <h2>2. Surfshark — beste prijs (8.9/10)</h2>
      <p>Onbeperkt apparaten, scherpe langetermijnprijs. Ideaal voor gezin of als je telefoon, laptop én TV tegelijk wilt beveiligen.</p>
      <p><strong>Plus:</strong> unlimited devices, Camouflage Mode<br/><strong>Min:</strong> iets minder “premium” merkgevoel dan Nord</p>
      <a className="btn" href="#AFFILIATE_SURFSHARK">Bekijk Surfshark-deal →</a>
      <p><Link href="/reviews/surfshark">Uitgebreide review →</Link></p>

      <h2>3. Proton VPN — beste privacy (8.5/10)</h2>
      <p>Zwitserse privacy-focus, open source apps, sterke reputatie (zelfde maker als Proton Mail). Gratis tier bestaat, maar limited.</p>
      <p><strong>Plus:</strong> privacy, transparantie<br/><strong>Min:</strong> streaming wisselt; gratis plan beperkt</p>
      <a className="btn" href="#AFFILIATE_PROTON">Bekijk Proton VPN →</a>

      <h2>Welke VPN kiezen?</h2>
      <ul>
        <li><strong>Wil je de veiligste allrounder?</strong> → NordVPN</li>
        <li><strong>Veel apparaten, budget?</strong> → Surfshark</li>
        <li><strong>Maximale privacy / Proton-ecosysteem?</strong> → Proton VPN</li>
      </ul>

      <h2>FAQ</h2>
      <p><strong>Is een VPN legaal in Nederland?</strong><br/>Ja. Illegaal gebruik (fraude, etc.) blijft illegaal — de VPN zelf niet.</p>
      <p><strong>Heb ik een VPN nodig met glasvezel?</strong><br/>Niet voor snelheid. Wel voor privacy op openbare wifi, streaming-regio&apos;s, en minder tracking.</p>
      <p><strong>Welke VPN is het goedkoopst?</strong><br/>Vaak Surfshark op 2-jaar deal. Vergelijk altijd de prijs ná de actieperiode.</p>

      <p className="disclosure">Laatst bijgewerkt: oktober 2026. Scores kunnen wijzigen na nieuwe tests. Affiliate-links volgen na goedkeuring ([AFFILIATE_NORD] / [AFFILIATE_SURFSHARK] / [AFFILIATE_PROTON]).</p>
    </main>
  );
}
