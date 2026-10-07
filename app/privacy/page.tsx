import Link from "next/link";

export const metadata = {
  title: "Privacybeleid | VPNScore",
  description: "Kort privacybeleid van VPNScore.nl — wat we wel en niet verzamelen.",
};

export default function Page() {
  return (
    <>
      <h1>Privacybeleid</h1>
      <p className="muted hero-lead">
        VPNScore.nl is een informatieve vergelijkingssite. We houden het bewust licht.
      </p>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Gegevens</h2>
        <p>
          We verkopen geen persoonsgegevens. Standaard hosting/analytics van ons platform (Vercel)
          kan technische logs bevatten (IP, user-agent) voor beveiliging en performance. Geen
          accountregistratie op deze site.
        </p>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Externe links</h2>
        <p>
          Klik je door naar een VPN-aanbieder (affiliate), dan gelden hun privacyvoorwaarden. Wij
          ontvangen mogelijk een commissie; jij betaalt niets extra.
        </p>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Contact</h2>
        <p>
          Vragen over deze site: via de beheerder van vpnscore.nl (Jesse Kramer / Kramer Corp.).
        </p>
      </div>

      <p>
        <Link href="/">← Terug naar de ranking</Link>
      </p>
    </>
  );
}
