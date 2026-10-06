import Link from "next/link";

export default function Page() {
  return (
    <main className="wrap">
      <nav className="nav"><Link href="/">← Terug</Link></nav>
      <p className="disclosure" style={{ borderTop: "none", marginTop: 0, paddingTop: 0 }}>
        Affiliate disclosure: we kunnen commissie ontvangen via links op deze pagina.
      </p>
      <h1>NordVPN Review 2026</h1>
      <p><span className="score">9.2/10</span> — onze topkeuze voor de meeste Nederlanders.</p>
      <a className="btn" href="#AFFILIATE_NORD">Naar NordVPN-aanbieding</a>

      <h2>Kort oordeel</h2>
      <div className="card">
        <p>Snelheid 9.5 · Privacy 9.0 · Streaming 9.0 · Apps 9.0 · Prijs 8.0</p>
        <p><strong>Voor wie?</strong> Iedereen die een betrouwbare, snelle VPN wil zonder gedoe.</p>
        <p><strong>Niet ideaal als:</strong> je onbeperkt devices nodig hebt tegen de laagste prijs (→ Surfshark).</p>
      </div>

      <h2>Plus &amp; min</h2>
      <p><strong>Plus:</strong> snel en stabiel, goede streaming, extra security-features.</p>
      <p><strong>Min:</strong> duurder bij veel apparaten; beste prijs alleen bij langere deals.</p>

      <h2>Conclusie</h2>
      <p>NordVPN is terecht onze #1 voor 2026: snel, betrouwbaar, weinig gedoe.</p>
      <a className="btn" href="#AFFILIATE_NORD">Probeer NordVPN</a>
      <p className="disclosure">Laatst bijgewerkt: oktober 2026</p>
    </main>
  );
}
