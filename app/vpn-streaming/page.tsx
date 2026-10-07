import Link from "next/link";
import { AFFILIATE } from "../../lib/affiliates";

export const metadata = {
  title: "Beste VPN voor streaming Nederland 2026 | VPNScore",
  description:
    "VPN voor Netflix, Disney+ en sportstreamen in NL. Ranking met prijzen — kies direct.",
};

export default function Page() {
  return (
    <>
      <h1>Beste VPN voor streaming Nederland 2026</h1>
      <p className="muted">
        Streaming vraagt snelheid én servers die catalogi open houden. Hieronder: wie past het best —
        daarna door naar de aanbieding.
      </p>

      <div className="card card-winner">
        <h2 style={{ marginTop: 0 }}>Kort: #1 NordVPN</h2>
        <p>
          Meest stabiel voor Netflix en andere platforms. Surfshark is scherper op prijs en unlimited
          devices.
        </p>
        <div className="actions">
          <a className="btn" href={AFFILIATE.nord}>
            Bekijk aanbieding NordVPN
          </a>
          <a className="btn-quiet" href={AFFILIATE.surfshark}>
            Bekijk aanbieding Surfshark
          </a>
        </div>
        <p className="cta-trust card-trust">30 dagen geld-terug</p>
      </div>

      <h2>Vergelijking (streaming)</h2>
      <div className="table-wrap">
        <table className="compare">
          <thead>
            <tr>
              <th>VPN</th>
              <th>Streaming</th>
              <th className="th-price">Prijs</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner">
              <td>
                <strong>1. NordVPN</strong>{" "}
                <span className="winner-pill">Beste overall</span>
              </td>
              <td className="best" data-label="Streaming">
                Uitstekend
              </td>
              <td className="price" data-label="Prijs">
                <span className="price-prefix">Vanaf</span>
                <span className="price-main">
                  €3,39
                  <span className="price-unit">/mnd</span>
                </span>
                <span className="period-chip">2 jr</span>
                <span className="price-renew">daarna hoger</span>
              </td>
              <td className="cta-cell">
                <a className="btn btn-sm" href={AFFILIATE.nord}>
                  Bekijk aanbieding
                </a>
                <span className="cta-trust">30 dagen geld-terug</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>2. Surfshark</strong>
              </td>
              <td data-label="Streaming">Zeer goed</td>
              <td className="price" data-label="Prijs">
                <span className="price-prefix">Vanaf</span>
                <span className="price-main">
                  €1,99
                  <span className="price-unit">/mnd</span>
                </span>
                <span className="period-chip">2 jr</span>
                <span className="price-renew">daarna hoger</span>
              </td>
              <td className="cta-cell">
                <a className="btn-quiet btn-sm" href={AFFILIATE.surfshark}>
                  Bekijk aanbieding
                </a>
                <span className="cta-trust">30 dagen geld-terug</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>3. Proton VPN</strong>
              </td>
              <td data-label="Streaming">Wisselend</td>
              <td className="price" data-label="Prijs">
                <span className="price-prefix">Vanaf</span>
                <span className="price-main">
                  €2,99
                  <span className="price-unit">/mnd</span>
                </span>
                <span className="period-chip">2 jr</span>
                <span className="price-renew">daarna hoger</span>
              </td>
              <td className="cta-cell">
                <a className="btn-quiet btn-sm" href={AFFILIATE.proton}>
                  Bekijk aanbieding
                </a>
                <span className="cta-trust">30 dagen geld-terug</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="small muted table-note">
        Introductieprijzen bij 2-jaarsdeal; na afloop hoger. Check altijd de actuele aanbieding.
      </p>

      <h2>Netflix specifiek</h2>
      <p>
        Dieper in op Netflix-blokkeren en server-tips:{" "}
        <Link href="/vpn-netflix">VPN voor Netflix</Link>.
      </p>

      <h2>FAQ</h2>
      <div className="faq">
        <details open>
          <summary>Welke VPN voor Disney+ of sport?</summary>
          <p>
            Zelfde ranking: NordVPN eerst voor betrouwbaarheid, Surfshark als je budget en veel
            devices wilt.
          </p>
        </details>
        <details>
          <summary>Vertraagt een VPN 4K?</summary>
          <p>
            Bij een goede VPN merkbare drop is klein op glasvezel. Kies een server dichtbij of
            dedicated streaming-server.
          </p>
        </details>
      </div>

      <p>
        <Link href="/">← Terug naar ranking</Link>
      </p>
    </>
  );
}
