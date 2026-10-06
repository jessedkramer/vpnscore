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

export default function HomePage() {
  return (
    <>
      <p className="disclosure" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
        Affiliate disclosure: VPNScore kan commissie ontvangen als je via onze links een VPN afsluit.
        Dat kost jou niets extra. We testen en vergelijken onafhankelijk.
      </p>

      <section className="hero">
        <div className="badge-row">
          <span className="badge accent">Update okt 2026</span>
          <span className="badge">NL-focus</span>
          <span className="badge">Onafhankelijke scores</span>
        </div>
        <h1>Beste VPN Nederland 2026 — getest &amp; vergeleken</h1>
        <p className="muted" style={{ fontSize: "1.05rem", maxWidth: "42rem" }}>
          Snelheid, privacy, Netflix/streaming en eerlijke prijs — zonder marketingpraat.
          Onze top 3 hieronder, met een side-by-side tabel zodat je in 30 seconden kiest.
        </p>
      </section>

      <div className="trust-bar" aria-label="Waarom VPNScore">
        <div className="trust-item"><strong>Scores 1–10</strong><span>Zelfde criteria per VPN</span></div>
        <div className="trust-item"><strong>NL-gebruik</strong><span>Streaming &amp; glasvezel</span></div>
        <div className="trust-item"><strong>Transparant</strong><span>Affiliate disclosure</span></div>
        <div className="trust-item"><strong>Mobiel-first</strong><span>Snel &amp; leesbaar</span></div>
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
            </tr>
            <tr>
              <td><strong>Surfshark</strong></td>
              <td>8.9</td>
              <td>Prijs / gezin</td>
              <td className="best">Unlimited</td>
              <td>Zeer goed</td>
              <td>Goed</td>
            </tr>
            <tr>
              <td><strong>Proton VPN</strong></td>
              <td>8.5</td>
              <td>Privacy</td>
              <td>Tot 10 (Plus)</td>
              <td>Wisselend</td>
              <td className="best">Top (CH / OSS)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Onze top 3</h2>
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
        <li><strong>Veiligste allrounder?</strong> → NordVPN</li>
        <li><strong>Veel apparaten, budget?</strong> → Surfshark</li>
        <li><strong>Maximale privacy / Proton-ecosysteem?</strong> → Proton VPN</li>
      </ul>
      <p>
        Ook handig: <Link href="/vpn-netflix">VPN voor Netflix</Link> ·{" "}
        <Link href="/vpn-privacy">VPN voor privacy</Link>
      </p>

      <h2>FAQ</h2>
      <div className="faq">
        <details open>
          <summary>Is een VPN legaal in Nederland?</summary>
          <p>Ja. Illegaal gebruik (fraude, etc.) blijft illegaal — de VPN zelf niet.</p>
        </details>
        <details>
          <summary>Heb ik een VPN nodig met glasvezel?</summary>
          <p>Niet voor snelheid. Wel voor privacy op openbare wifi, streaming-regio&apos;s, en minder tracking.</p>
        </details>
        <details>
          <summary>Welke VPN is het goedkoopst?</summary>
          <p>Vaak Surfshark op 2-jaar deal. Vergelijk altijd de prijs ná de actieperiode.</p>
        </details>
      </div>
    </>
  );
}
