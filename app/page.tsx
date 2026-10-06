import Link from "next/link";
import { AFFILIATE } from "../lib/affiliates";

const vpns = [
  {
    rank: 1,
    name: "NordVPN",
    score: "9.2",
    tag: "Beste overall",
    blurb: "Snelheid, streaming en Threat Protection — de veiligste allrounder voor NL.",
    plus: "Snel · stabiel · sterke streaming",
    min: "Duurder bij veel devices",
    href: "/reviews/nordvpn",
    deal: AFFILIATE.nord,
    cta: "Bekijk NordVPN-deal →",
  },
  {
    rank: 2,
    name: "Surfshark",
    score: "8.9",
    tag: "Beste prijs",
    blurb: "Onbeperkt apparaten en scherpe langetermijnprijs — ideaal voor gezin.",
    plus: "Unlimited devices · Camouflage Mode",
    min: "Iets minder premium merkgevoel",
    href: "/reviews/surfshark",
    deal: AFFILIATE.surfshark,
    cta: "Bekijk Surfshark-deal →",
  },
  {
    rank: 3,
    name: "Proton VPN",
    score: "8.5",
    tag: "Beste privacy",
    blurb: "Zwitserse privacy-focus, open source apps — zelfde maker als Proton Mail.",
    plus: "Privacy · transparantie",
    min: "Streaming wisselt · gratis plan beperkt",
    href: "/reviews/proton-vpn",
    deal: AFFILIATE.proton,
    cta: "Bekijk Proton VPN →",
  },
] as const;

const faqItems = [
  {
    q: "Is een VPN legaal in Nederland?",
    a: "Ja. Illegaal gebruik (fraude, etc.) blijft illegaal — de VPN zelf niet.",
  },
  {
    q: "Heb ik een VPN nodig met glasvezel?",
    a: "Niet voor snelheid. Wel voor privacy op openbare wifi, streaming-regio's, en minder tracking.",
  },
  {
    q: "Welke VPN is het goedkoopst?",
    a: "Vaak Surfshark op 2-jaar deal. Vergelijk altijd de prijs ná de actieperiode.",
  },
  {
    q: "Wat is de beste VPN voor Netflix in NL?",
    a: "Voor betrouwbaarheid kiezen we NordVPN. Surfshark is sterker op prijs en unlimited devices. Zie ook onze Netflix-gids.",
  },
  {
    q: "Verdient VPNScore aan deze reviews?",
    a: "Ja, via affiliate-links. Jij betaalt niets extra. Scores volgen vaste criteria — geen betaalde #1-plek.",
  },
  {
    q: "Hoe vaak updaten jullie de scores?",
    a: "Bij grote prijs-/featurewijzigingen of nieuwe tests. Laatste update: oktober 2026.",
  },
] as const;

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Beste VPN Nederland 2026",
    itemListElement: vpns.map((v) => ({
      "@type": "ListItem",
      position: v.rank,
      name: v.name,
      url: `https://vpnscore.nl${v.href}`,
    })),
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VPNScore",
    url: "https://vpnscore.nl",
    description:
      "Onafhankelijke VPN-vergelijking voor Nederland met scores, reviews en koopadvies.",
    inLanguage: "nl-NL",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="disclosure" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
        Affiliate disclosure: VPNScore kan commissie ontvangen als je via onze links een VPN afsluit.
        Dat kost jou niets extra. We testen en vergelijken onafhankelijk — geen betaalde ranking.
      </p>

      <section className="hero">
        <div className="badge-row">
          <span className="badge accent">Update okt 2026</span>
          <span className="badge">NL-focus</span>
          <span className="badge">Onafhankelijke scores</span>
          <span className="badge">Vaste testcriteria</span>
        </div>
        <h1>Beste VPN Nederland 2026 — getest & vergeleken</h1>
        <p className="muted" style={{ fontSize: "1.05rem", maxWidth: "42rem" }}>
          Snelheid, privacy, Netflix/streaming en eerlijke prijs — zonder marketingpraat.
          Side-by-side tabel + reviews zodat je in 30 seconden kiest.
        </p>
        <div className="actions">
          <a className="btn" href="#top3">Bekijk top 3 →</a>
          <Link className="btn-ghost" href="/vpn-netflix">VPN voor Netflix</Link>
          <Link className="btn-ghost" href="/vpn-privacy">Privacy-gids</Link>
        </div>
      </section>

      <div className="trust-bar" aria-label="Waarom VPNScore">
        <div className="trust-item"><strong>Scores 1–10</strong><span>Zelfde criteria per VPN</span></div>
        <div className="trust-item"><strong>NL-gebruik</strong><span>Streaming & glasvezel</span></div>
        <div className="trust-item"><strong>Transparant</strong><span>Affiliate ≠ ranking</span></div>
        <div className="trust-item"><strong>Mobiel-first</strong><span>Snel & leesbaar</span></div>
      </div>

      <h2>Vergelijkingstabel</h2>
      <div className="table-wrap">
        <table className="compare">
          <thead>
            <tr>
              <th>VPN</th>
              <th>Score</th>
              <th>Beste voor</th>
              <th>Apparaten</th>
              <th>Streaming</th>
              <th>Privacy</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>NordVPN</strong></td>
              <td className="best">9.2</td>
              <td>Overall / snelheid</td>
              <td>Tot 10</td>
              <td className="best">Uitstekend</td>
              <td>Sterk (audits)</td>
              <td><a className="btn" href={AFFILIATE.nord} style={{ padding: "0.4rem 0.7rem", fontSize: "0.8rem" }}>Deal</a></td>
            </tr>
            <tr>
              <td><strong>Surfshark</strong></td>
              <td>8.9</td>
              <td>Prijs / gezin</td>
              <td className="best">Unlimited</td>
              <td>Zeer goed</td>
              <td>Goed</td>
              <td><a className="btn" href={AFFILIATE.surfshark} style={{ padding: "0.4rem 0.7rem", fontSize: "0.8rem" }}>Deal</a></td>
            </tr>
            <tr>
              <td><strong>Proton VPN</strong></td>
              <td>8.5</td>
              <td>Privacy</td>
              <td>Tot 10 (Plus)</td>
              <td>Wisselend</td>
              <td className="best">Top (CH / OSS)</td>
              <td><a className="btn" href={AFFILIATE.proton} style={{ padding: "0.4rem 0.7rem", fontSize: "0.8rem" }}>Deal</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="top3">Onze top 3</h2>
      {vpns.map((v) => (
        <article key={v.name} className="card">
          <div className="card-head">
            <div>
              <h3>
                <span className="rank">{v.rank}</span>
                {v.name}{" "}
                <span className="badge" style={{ marginLeft: "0.35rem" }}>{v.tag}</span>
              </h3>
              <p style={{ margin: "0.35rem 0 0" }}>{v.blurb}</p>
            </div>
            <span className="score">{v.score}/10</span>
          </div>
          <div className="pros-cons">
            <div className="pros"><strong>Plus</strong>{v.plus}</div>
            <div className="cons"><strong>Min</strong>{v.min}</div>
          </div>
          <div className="actions">
            <a className="btn" href={v.deal}>{v.cta}</a>
            <Link className="btn-ghost" href={v.href}>Volledige review</Link>
          </div>
        </article>
      ))}

      <h2>Hoe we testen</h2>
      <div className="card">
        <p style={{ marginTop: 0 }}>
          Elke VPN scoort op dezelfde zes criteria (snelheid, privacy, streaming, apparaten, prijs, gemak).
          We kijken naar NL-relevant gebruik: glasvezel, Netflix/Disney+, openbare wifi en apps op telefoon + laptop.
          Affiliate-inkomsten beïnvloeden de ranking niet — wel vermelden we deals transparant.
        </p>
        <p className="small muted" style={{ marginBottom: 0 }}>
          Geen lab met 50 serverlocaties (nog): wel consistente, herhaalbare checks en eerlijke minpunten.
        </p>
      </div>

      <h2>Waar letten we op?</h2>
      <ol>
        <li><strong>Snelheid</strong> — bruikbaar voor 4K en videobellen</li>
        <li><strong>Privacy</strong> — no-logs, jurisdictie, audits</li>
        <li><strong>Streaming</strong> — Netflix NL/US, Disney+, etc.</li>
        <li><strong>Apparaten</strong> — hoeveel tegelijk</li>
        <li><strong>Prijs</strong> — echte maandprijs na introductie</li>
        <li><strong>Gebruiksgemak</strong> — apps NL/ENG, installatie</li>
      </ol>

      <h2>Welke VPN kiezen?</h2>
      <ul>
        <li><strong>Veiligste allrounder?</strong> → <Link href="/reviews/nordvpn">NordVPN</Link></li>
        <li><strong>Veel apparaten, budget?</strong> → <Link href="/reviews/surfshark">Surfshark</Link></li>
        <li><strong>Maximale privacy / Proton-ecosysteem?</strong> → <Link href="/reviews/proton-vpn">Proton VPN</Link></li>
      </ul>
      <p>
        Ook handig: <Link href="/vpn-netflix">VPN voor Netflix</Link> ·{" "}
        <Link href="/vpn-privacy">VPN voor privacy</Link>
      </p>

      <h2>FAQ</h2>
      <div className="faq">
        {faqItems.map((item, i) => (
          <details key={item.q} open={i === 0}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
