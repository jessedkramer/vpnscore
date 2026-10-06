import Link from "next/link";
import { AFFILIATE } from "../lib/affiliates";

const vpns = [
  {
    rank: 1,
    name: "NordVPN",
    score: "9.2",
    tag: "Beste overall",
    blurb: "Snel, sterk op streaming en betrouwbaar voor dagelijks gebruik in NL.",
    plus: "Snelheid · streaming · Threat Protection",
    min: "Duurder bij veel devices",
    href: "/reviews/nordvpn",
    deal: AFFILIATE.nord,
    cta: "Kies NordVPN",
  },
  {
    rank: 2,
    name: "Surfshark",
    score: "8.9",
    tag: "Beste prijs",
    blurb: "Onbeperkt apparaten en scherpe jaardeals — sterk voor gezin of meerdere devices.",
    plus: "Unlimited devices · scherpe prijs",
    min: "Iets minder premium merkgevoel",
    href: "/reviews/surfshark",
    deal: AFFILIATE.surfshark,
    cta: "Kies Surfshark",
  },
  {
    rank: 3,
    name: "Proton VPN",
    score: "8.5",
    tag: "Beste privacy",
    blurb: "Zwitserse privacy en open source — dezelfde maker als Proton Mail.",
    plus: "Privacy · open source",
    min: "Streaming wisselt",
    href: "/reviews/proton-vpn",
    deal: AFFILIATE.proton,
    cta: "Kies Proton VPN",
  },
] as const;

const faqItems = [
  {
    q: "Welke VPN past bij mij?",
    a: "Allround en streaming: NordVPN. Budget of veel devices: Surfshark. Privacy eerst: Proton VPN.",
  },
  {
    q: "Wat is de beste VPN voor Netflix?",
    a: "Voor betrouwbaarheid: NordVPN. Voor prijs: Surfshark. Meer details in onze Netflix-gids.",
  },
  {
    q: "Is een VPN legaal in Nederland?",
    a: "Ja. Illegaal gebruik blijft illegaal — de VPN zelf niet.",
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
    description: "Vergelijk de beste VPN's voor Nederland en kies direct.",
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

      <section className="hero">
        <h1>Beste VPN Nederland 2026</h1>
        <p className="muted hero-lead">
          NordVPN, Surfshark of Proton VPN — scores naast elkaar, daarna kiezen.
        </p>
        <div className="actions">
          <a className="btn" href="#vergelijking">
            Bekijk de ranking
          </a>
          <Link className="btn-ghost" href="/vpn-netflix">
            VPN voor Netflix
          </Link>
        </div>
      </section>

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
              <td>
                <strong>1. NordVPN</strong>
              </td>
              <td className="best" data-label="Score">
                9.2
              </td>
              <td data-label="Beste voor">Overall</td>
              <td data-label="Apparaten">Tot 10</td>
              <td className="best" data-label="Streaming">
                Uitstekend
              </td>
              <td data-label="Privacy">Sterk</td>
              <td>
                <a className="btn btn-sm" href={AFFILIATE.nord}>
                  Kies NordVPN
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>2. Surfshark</strong>
              </td>
              <td data-label="Score">
                8.9
              </td>
              <td data-label="Beste voor">Prijs / gezin</td>
              <td className="best" data-label="Apparaten">
                Unlimited
              </td>
              <td data-label="Streaming">Zeer goed</td>
              <td data-label="Privacy">Goed</td>
              <td>
                <a className="btn btn-sm" href={AFFILIATE.surfshark}>
                  Kies Surfshark
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>3. Proton VPN</strong>
              </td>
              <td data-label="Score">
                8.5
              </td>
              <td data-label="Beste voor">Privacy</td>
              <td data-label="Apparaten">Tot 10</td>
              <td data-label="Streaming">Wisselend</td>
              <td className="best" data-label="Privacy">
                Top
              </td>
              <td>
                <a className="btn btn-sm" href={AFFILIATE.proton}>
                  Kies Proton
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="top3">Top 3</h2>
      {vpns.map((v) => (
        <article key={v.name} className="card">
          <div className="card-head">
            <div>
              <h3>
                <span className="rank">{v.rank}</span>
                {v.name}{" "}
                <span className="tag">{v.tag}</span>
              </h3>
              <p style={{ margin: "0.35rem 0 0" }}>{v.blurb}</p>
            </div>
            <span className="score">{v.score}/10</span>
          </div>
          <div className="pros-cons">
            <div className="pros">
              <strong>Plus</strong>
              {v.plus}
            </div>
            <div className="cons">
              <strong>Min</strong>
              {v.min}
            </div>
          </div>
          <div className="actions">
            <a className="btn" href={v.deal}>
              {v.cta}
            </a>
            <Link className="btn-ghost" href={v.href}>
              Review
            </Link>
          </div>
        </article>
      ))}

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
