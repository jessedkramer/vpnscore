import Link from "next/link";

export const metadata = {
  title: "Hoe we VPN’s testen | VPNScore",
  description:
    "Korte uitleg van onze VPNScore-criteria: snelheid, streaming, privacy, prijs en gebruiksgemak.",
};

export default function Page() {
  return (
    <>
      <h1>Hoe we testen</h1>
      <p className="muted hero-lead">
        Geen methodologie-muur — wel duidelijk waar de scores op rusten. We wegen vooral wat voor
        Nederlandse gebruikers telt.
      </p>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Criteria</h2>
        <ul>
          <li>
            <strong>Snelheid &amp; stabiliteit</strong> — bruikbaar op glasvezel en mobiel
          </li>
          <li>
            <strong>Streaming</strong> — Netflix en gangbare platforms in NL
          </li>
          <li>
            <strong>Privacy</strong> — jurisdictie, logs-beleid, audits waar beschikbaar
          </li>
          <li>
            <strong>Prijs</strong> — echte langetermijnprijs (1–2 jaar), niet alleen de actiebanner
          </li>
          <li>
            <strong>Apparaten &amp; apps</strong> — limieten, apps, kill switch
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Wat we níet doen</h2>
        <p>
          We kopiëren geen concurrentieteksten. Prijzen kunnen wijzigen — check altijd de actuele
          aanbieding. Affiliatelinks staan duidelijk in de footer.
        </p>
      </div>

      <div className="actions">
        <Link className="btn" href="/#vergelijking">
          Bekijk de ranking
        </Link>
        <Link className="btn-ghost" href="/over-ons">
          Over VPNScore
        </Link>
      </div>
    </>
  );
}
