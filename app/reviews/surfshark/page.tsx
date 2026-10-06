import Link from "next/link";

export default function Page() {
  return (
    <main className="wrap">
      <nav className="nav"><Link href="/">← Terug</Link></nav>
      <p className="disclosure" style={{ borderTop: "none", marginTop: 0, paddingTop: 0 }}>
        Affiliate disclosure: we kunnen commissie ontvangen via links op deze pagina.
      </p>
      <h1>Surfshark Review 2026</h1>
      <p><span className="score">8.9/10</span> — beste prijs/kwaliteit, vooral bij veel apparaten.</p>
      <a className="btn" href="#AFFILIATE_SURFSHARK">Naar Surfshark-aanbieding</a>

      <h2>Kort oordeel</h2>
      <div className="card">
        <p>Snelheid 8.5 · Privacy 8.5 · Streaming 8.5 · Apps 8.5 · Prijs 9.5</p>
        <p><strong>Voor wie?</strong> Gezinnen, multi-device, budgetbewust.</p>
        <p><strong>Niet ideaal als:</strong> je alleen de merknaam #1 wilt (→ NordVPN).</p>
      </div>

      <h2>Onbeperkt apparaten</h2>
      <p>Het grote pluspunt: één abonnement, zoveel devices als je wilt.</p>

      <h2>Plus &amp; min</h2>
      <p><strong>Plus:</strong> unlimited devices, scherpe langetermijnprijs, ruim feature-pakket.</p>
      <p><strong>Min:</strong> iets minder premium merkgevoel dan Nord.</p>

      <h2>Conclusie</h2>
      <p>Surfshark wint op prijs en devices. Voor de meeste huishoudens in NL is dit de slimste deal.</p>
      <a className="btn" href="#AFFILIATE_SURFSHARK">Probeer Surfshark</a>
      <p className="disclosure">Laatst bijgewerkt: oktober 2026</p>
    </main>
  );
}
