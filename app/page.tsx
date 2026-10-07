import Link from "next/link";
import { AFFILIATE } from "../lib/affiliates";

const vpns = [
  {
    rank: 1,
    name: "NordVPN",
    score: "9.2",
    tag: "Beste overall",
    price: "€3,39",
    period: "2 jr",
    devices: "Tot 10",
    streaming: "Uitstekend",
    privacy: "Sterk",
    blurb: "Snel, sterk op streaming en betrouwbaar voor dagelijks gebruik in NL.",
    plus: "Snelheid · streaming · Threat Protection",
    min: "Duurder bij veel devices",
    href: "/reviews/nordvpn",
    deal: AFFILIATE.nord,
    cta: "Bekijk aanbieding",
    winner: true,
  },
  {
    rank: 2,
    name: "Surfshark",
    score: "8.9",
    tag: "Beste prijs",
    price: "€1,99",
    period: "2 jr",
    devices: "Unlimited",
    streaming: "Zeer goed",
    privacy: "Goed",
    blurb: "Onbeperkt apparaten en scherpe jaardeals — sterk voor gezin of meerdere devices.",
    plus: "Unlimited devices · scherpe prijs",
    min: "Iets minder premium merkgevoel",
    href: "/reviews/surfshark",
    deal: AFFILIATE.surfshark,
    cta: "Bekijk aanbieding",
    winner: false,
  },
  {
    rank: 3,
    name: "Proton VPN",
    score: "8.5",
    tag: "Beste privacy",
    price: "€2,99",
    period: "2 jr",
    devices: "Tot 10",
    streaming: "Wisselend",
    privacy: "Top",
    blurb: "Zwitserse privacy en open source — dezelfde maker als Proton Mail.",
    plus: "Privacy · open source",
    min: "Streaming wisselt",
    href: "/reviews/proton-vpn",
    deal: AFFILIATE.proton,
    cta: "Bekijk aanbieding",
    winner: false,
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

  const winner = vpns[0];

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
        <p className="winner-line">
          <strong>Winnaar: {winner.name}</strong>
          <span className="muted">
            {" "}
            — {winner.tag.toLowerCase()} · vanaf {winner.price}/mnd
          </span>
        </p>
        <p className="muted hero-lead">
          NordVPN, Surfshark of Proton VPN — scores en prijzen naast elkaar, daarna kiezen.
        </p>
        <div className="actions">
          <a className="btn" href="#vergelijking">
            Bekijk de ranking
          </a>
          <a className="btn-ghost" href={winner.deal}>
            Bekijk {winner.name}-aanbieding
          </a>
        </div>
      </section>

      <h2 id="vergelijking">Vergelijking</h2>
      <div className="table-wrap">
        <table className="compare">
          <thead>
            <tr>
              <th>VPN</th>
              <th>Score</th>
              <th className="th-price">Prijs</th>
              <th>Beste voor</th>
              <th>Apparaten</th>
              <th>Streaming</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vpns.map((v) => (
              <tr key={v.name} className={v.winner ? "winner" : undefined}>
                <td>
                  <strong>
                    {v.rank}. {v.name}
                  </strong>
                  {v.winner ? (
                    <span className="winner-pill">{v.tag}</span>
                  ) : null}
                </td>
                <td className={v.rank === 1 ? "best" : undefined} data-label="Score">
                  {v.score}
                </td>
                <td className="price" data-label="Prijs">
                  <span className="price-prefix">Vanaf</span>
                  <span className="price-main">
                    {v.price}
                    <span className="price-unit">/mnd</span>
                  </span>
                  <span className="period-chip">{v.period}</span>
                  <span className="price-renew">daarna hoger</span>
                </td>
                <td data-label="Beste voor">{v.tag.replace("Beste ", "")}</td>
                <td
                  className={v.name === "Surfshark" ? "best" : undefined}
                  data-label="Apparaten"
                >
                  {v.devices}
                </td>
                <td
                  className={v.name === "NordVPN" ? "best" : undefined}
                  data-label="Streaming"
                >
                  {v.streaming}
                </td>
                <td className="cta-cell">
                  <a
                    className={v.winner ? "btn btn-sm" : "btn-quiet btn-sm"}
                    href={v.deal}
                  >
                    Bekijk aanbieding
                  </a>
                  <span className="cta-trust">30 dagen geld-terug</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="small muted table-note">
        Introductieprijzen bij 2-jaarsdeal; na afloop hoger. Check altijd de actuele aanbieding.
      </p>

      <h2 id="top3">Top 3</h2>
      {vpns.map((v) => (
        <article key={v.name} className={v.winner ? "card card-winner" : "card"}>
          <div className="card-head">
            <div>
              <h3>
                <span className="rank">{v.rank}</span>
                {v.name} <span className="tag">{v.tag}</span>
              </h3>
              <p style={{ margin: "0.35rem 0 0" }}>{v.blurb}</p>
              <p className="price-inline">
                Vanaf <strong>{v.price}</strong>/mnd
                <span className="period-chip">{v.period}</span>
              </p>
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
            <a className={v.winner ? "btn" : "btn-quiet"} href={v.deal}>
              {v.cta}
            </a>
            <Link className="btn-ghost" href={v.href}>
              Review
            </Link>
          </div>
          <p className="cta-trust card-trust">30 dagen geld-terug</p>
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
