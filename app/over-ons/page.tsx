import Link from "next/link";

export const metadata = {
  title: "Over VPNScore | VPN-vergelijking Nederland",
  description:
    "VPNScore vergelijkt VPN’s voor Nederlanders: ranking, prijzen en duidelijke CTAs — zonder ruis.",
};

export default function Page() {
  return (
    <>
      <h1>Over VPNScore</h1>
      <p className="muted hero-lead">
        VPNScore is een Nederlandse VPN-vergelijker. We zetten de beste opties naast elkaar — score,
        prijs en use-case — zodat je snel kunt kiezen.
      </p>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Wat je hier vindt</h2>
        <ul>
          <li>Een actuele ranking voor Nederland (2026)</li>
          <li>Use-case pagina’s (streaming, prijs, privacy, Netflix)</li>
          <li>Reviews en een vs-pagina (NordVPN vs Surfshark)</li>
          <li>Eerlijke affiliate-disclosure in de footer</li>
        </ul>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Hoe we verdienen</h2>
        <p>
          Sommige links zijn affiliate. Jij betaalt niets extra; wij kunnen een commissie krijgen als
          je via onze link een abonnement neemt. Dat verandert onze rankingcriteria niet — zie{" "}
          <Link href="/hoe-we-testen">hoe we testen</Link>.
        </p>
      </div>

      <p>
        <Link href="/">← Terug naar de ranking</Link>
      </p>
    </>
  );
}
