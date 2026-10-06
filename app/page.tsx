import Link from "next/link";
import { AFFILIATE } from "../lib/affiliates";

const LAST_UPDATED = "6 oktober 2026";

const vpns = [
  {
    rank: 1,
    name: "NordVPN",
    score: "9.2",
    tag: "Overall",
    blurb: "Sterk op snelheid en streaming, plus Threat Protection. Solide allrounder voor NL-gebruik.",
    plus: "Snel · stabiel · goede streaming",
    min: "Duurder bij veel devices",
    href: "/reviews/nordvpn",
    deal: AFFILIATE.nord,
    cta: "Bekijk NordVPN →",
  },
  {
    rank: 2,
    name: "Surfshark",
    score: "8.9",
    tag: "Prijs / devices",
    blurb: "Onbeperkt apparaten en vaak scherpe langetermijnprijs. Handig voor gezin of meerdere devices.",
    plus: "Unlimited devices · Camouflage Mode",
    min: "Iets minder premium merkgevoel",
    href: "/reviews/surfshark",
    deal: AFFILIATE.surfshark,
    cta: "Bekijk Surfshark →",
  },
  {
    rank: 3,
    name: "Proton VPN",
    score: "8.5",
    tag: "Privacy",
    blurb: "Zwitserse privacy-focus en open source apps — zelfde maker als Proton Mail.",
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
    a: "Ja. Illegaal gebruik blijft illegaal — de VPN zelf niet. Wij moedigen geen illegaal gebruik aan.",
  },
  {
    q: "Heb ik een VPN nodig met glasvezel?",
    a: "Niet voor snelheid. Wel nuttig op openbare wifi, bij streaming over regio’s, en als je minder tracking wilt.",
  },
  {
    q: "Welke VPN is het goedkoopst?",
    a: "Vaak Surfshark op een 1- of 2-jaarabonnement. Kijk altijd naar de prijs na de introductieperiode.",
  },
  {
    q: "Wat is de beste VPN voor Netflix in NL?",
    a: "Op betrouwbaarheid zetten we NordVPN hoger. Surfshark is sterker op prijs en unlimited devices. Details: onze Netflix-gids.",
  },
  {
    q: "Verdient VPNScore aan deze reviews?",
    a: "Ja. Als je via onze links een abonnement afsluit, kunnen we commissie ontvangen. Jij betaalt niets extra. De ranking volgt vaste criteria — geen betaalde #1.",
  },
  {
    q: "Hoe objectief zijn jullie scores?",
    a: "Zelfde zes criteria voor elke VPN. We noemen minpunten expliciet. We hebben (nog) geen groot lab; wel herhaalbare NL-gerichte checks. Scores kunnen wijzigen bij nieuwe info.",
  },
  {
    q: "Hoe vaak updaten jullie de pagina?",
    a: `Bij relevante prijs- of featurewijzigingen. Laatst bijgewerkt: ${LAST_UPDATED}.`,
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
        Transparantie: via sommige links kunnen we een affiliate-commissie ontvangen. Dat verandert de prijs
        voor jou niet. Ranking volgt vaste criteria — geen betaalde plekken.
      </p>

      <section className="hero">
        <div className="badge-row">
          <span className="badge accent">Bijgewerkt {LAST_UPDATED}</span>
          <span className="badge">NL-focus · vaste criteria</span>
        </div>
        <h1>VPN vergelijken Nederland 2026</h1>
        <p className="muted" style={{ fontSize: "1.05rem", maxWidth: "42rem" }}>
          Overzicht van NordVPN, Surfshark en Proton VPN op snelheid, privacy, streaming en prijs.
          Geen hype — wel scores, minpunten en hoe we tot die scores komen.
        </p>
        <p className="small muted" style={{ margin: 0 }}>
          Laatst bijgewerkt: <strong>{LAST_UPDATED}</strong>
        </p>
        <div className="actions">
          <a className="btn" href="#vergelijking">Naar vergelijking</a>
          <a className="btn-ghost" href="#methode">Hoe we testen</a>
          <Link className="btn-ghost" href="/vpn-netflix">Netflix</Link>
          <Link className="btn-ghost" href="/vpn-privacy">Privacy</Link>
        </div>
      </section>

      <div className="trust-bar" aria-label="Waarom VPNScore">
        <div className="trust-item"><strong>Zelfde lat</strong><span>6 criteria per VPN</span></div>
        <div className="trust-item"><strong>NL-context</strong><span>Streaming & glasvezel</span></div>
        <div className="trust-item"><strong>Eerlijk over geld</strong><span>Affiliate ≠ ranking</span></div>
        <div className="trust-item"><strong>Minpunten zichtbaar</strong><span>Geen perfecte scores</span></div>
      </div>

      <h2 id="methode">Hoe we testen</h2>
      <div className="card">
        <p style={{ marginTop: 0 }}>
          Elke VPN krijgt dezelfde zes criteria: snelheid, privacy, streaming, apparaten, prijs en gebruiksgemak.
          We toetsen vooral NL-relevant gebruik (glasvezel, Netflix/Disney+, openbare wifi, telefoon + laptop).
        </p>
        <p>
          <strong>Wat we niet claimen:</strong> een laboratorium met tientallen serverlocaties of “de enige juiste”
          ranking. Wel: vaste lat, zichtbare minpunten, en updates als er iets wezenlijks wijzigt.
        </p>
        <p className="small muted" style={{ marginBottom: 0 }}>
          Bronnen per claim staan in de reviews (o.a. audits/no-logs waar relevant). Laatst bijgewerkt: {LAST_UPDATED}.
        </p>
      </div>

      <h2>Criteria</h2>
      <ol>
        <li><strong>Snelheid</strong> — bruikbaar voor 4K en videobellen</li>
        <li><strong>Privacy</strong> — no-logs, jurisdictie, audits</li>
        <li><strong>Streaming</strong> — Netflix NL/US, Disney+, enz.</li>
        <li><strong>Apparaten</strong> — hoeveel tegelijk</li>
        <li><strong>Prijs</strong> — echte maandprijs na introductie</li>
        <li><strong>Gebruiksgemak</strong> — apps en installatie</li>
      </ol>

      <h2 id="vergelijking">Vergelijking</h2>
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
              <td className="best" data-label="Score">9.2</td>
              <td data-label="Beste voor">Overall / snelheid</td>
              <td data-label="Apparaten">Tot 10</td>
              <td className="best" data-label="Streaming">Uitstekend</td>
              <td data-label="Privacy">Sterk (audits)</td>
              <td>
                <a className="btn-ghost" href={AFFILIATE.nord} style={{ padding: "0.4rem 0.7rem", fontSize: "0.8rem" }}>
                  Bekijk
                </a>
              </td>
            </tr>
            <tr>
              <td><strong>Surfshark</strong></td>
              <td data-label="Score">8.9</td>
              <td data-label="Beste voor">Prijs / gezin</td>
              <td className="best" data-label="Apparaten">Unlimited</td>
              <td data-label="Streaming">Zeer goed</td>
              <td data-label="Privacy">Goed</td>
              <td>
                <a className="btn-ghost" href={AFFILIATE.surfshark} style={{ padding: "0.4rem 0.7rem", fontSize: "0.8rem" }}>
                  Bekijk
                </a>
              </td>
            </tr>
            <tr>
              <td><strong>Proton VPN</strong></td>
              <td data-label="Score">8.5</td>
              <td data-label="Beste voor">Privacy</td>
              <td data-label="Apparaten">Tot 10 (Plus)</td>
              <td data-label="Streaming">Wisselend</td>
              <td className="best" data-label="Privacy">Top (CH / OSS)</td>
              <td>
                <a className="btn-ghost" href={AFFILIATE.proton} style={{ padding: "0.4rem 0.7rem", fontSize: "0.8rem" }}>
                  Bekijk
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="top3">Top 3 toegelicht</h2>
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
            <Link className="btn" href={v.href}>Lees review</Link>
            <a className="btn-ghost" href={v.deal}>{v.cta}</a>
          </div>
          <p className="small muted" style={{ marginBottom: 0 }}>
            Externe link kan affiliate zijn.
          </p>
        </article>
      ))}

      <h2>Welke past bij jou?</h2>
      <ul>
        <li><strong>Allround / streaming:</strong> <Link href="/reviews/nordvpn">NordVPN</Link></li>
        <li><strong>Budget / veel devices:</strong> <Link href="/reviews/surfshark">Surfshark</Link></li>
        <li><strong>Privacy / Proton-ecosysteem:</strong> <Link href="/reviews/proton-vpn">Proton VPN</Link></li>
      </ul>
      <p>
        Verder: <Link href="/vpn-netflix">VPN voor Netflix</Link> ·{" "}
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
