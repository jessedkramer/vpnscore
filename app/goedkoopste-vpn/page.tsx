import Link from "next/link";
import { AFFILIATE } from "../../lib/affiliates";

export const metadata = {
  title: "Goedkoopste VPN Nederland 2026 | VPNScore",
  description:
    "Welke VPN is het goedkoopst in NL? Vergelijk maandprijzen na introductie — Surfshark, NordVPN, Proton.",
};

export default function Page() {
  return (
    <>
      <h1>Goedkoopste VPN Nederland 2026</h1>
      <p className="muted">
        Kijk naar de echte maandprijs op 1- of 2-jaardeals — niet alleen de actiebanner. Hieronder de
        scherpste opties uit onze ranking.
      </p>

      <div className="card card-winner">
        <h2 style={{ marginTop: 0 }}>Kort: #1 op prijs — Surfshark</h2>
        <p>
          Vaak de laagste langetermijnprijs plus unlimited devices. NordVPN is duurder, maar sterker
          allround/streaming.
        </p>
        <div className="actions">
          <a className="btn" href={AFFILIATE.surfshark}>
            Bekijk aanbieding Surfshark
          </a>
          <a className="btn-quiet" href={AFFILIATE.nord}>
            Bekijk aanbieding NordVPN
          </a>
        </div>
        <p className="cta-trust card-trust">30 dagen geld-terug</p>
      </div>

      <h2>Prijsvergelijking</h2>
      <div className="table-wrap">
        <table className="compare">
          <thead>
            <tr>
              <th>VPN</th>
              <th className="th-price">Vanaf</th>
              <th>Apparaten</th>
              <th>Beste voor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="winner">
              <td>
                <strong>Surfshark</strong>{" "}
                <span className="winner-pill">Beste prijs</span>
              </td>
              <td className="price best" data-label="Vanaf">
                <span className="price-prefix">Vanaf</span>
                <span className="price-main">
                  €1,99
                  <span className="price-unit">/mnd</span>
                </span>
                <span className="period-chip">2 jr</span>
                <span className="price-renew">daarna hoger</span>
              </td>
              <td className="best" data-label="Apparaten">
                Unlimited
              </td>
              <td data-label="Beste voor">Budget / gezin</td>
              <td className="cta-cell">
                <a className="btn btn-sm" href={AFFILIATE.surfshark}>
                  Bekijk aanbieding
                </a>
                <span className="cta-trust">30 dagen geld-terug</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Proton VPN</strong>
              </td>
              <td className="price" data-label="Vanaf">
                <span className="price-prefix">Vanaf</span>
                <span className="price-main">
                  €2,99
                  <span className="price-unit">/mnd</span>
                </span>
                <span className="period-chip">2 jr</span>
                <span className="price-renew">daarna hoger</span>
              </td>
              <td data-label="Apparaten">Tot 10</td>
              <td data-label="Beste voor">Privacy</td>
              <td className="cta-cell">
                <a className="btn-quiet btn-sm" href={AFFILIATE.proton}>
                  Bekijk aanbieding
                </a>
                <span className="cta-trust">30 dagen geld-terug</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>NordVPN</strong>
              </td>
              <td className="price" data-label="Vanaf">
                <span className="price-prefix">Vanaf</span>
                <span className="price-main">
                  €3,39
                  <span className="price-unit">/mnd</span>
                </span>
                <span className="period-chip">2 jr</span>
                <span className="price-renew">daarna hoger</span>
              </td>
              <td data-label="Apparaten">Tot 10</td>
              <td data-label="Beste voor">Overall</td>
              <td className="cta-cell">
                <a className="btn-quiet btn-sm" href={AFFILIATE.nord}>
                  Bekijk aanbieding
                </a>
                <span className="cta-trust">30 dagen geld-terug</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="small muted table-note">
        Introductieprijzen bij 2-jaarsdeal; na afloop hoger. Check verlenging vóór je tekent.
      </p>

      <h2>FAQ</h2>
      <div className="faq">
        <details open>
          <summary>Is de goedkoopste VPN goed genoeg?</summary>
          <p>
            Surfshark is voor de meeste NL-gebruikers ruim voldoende. Wil je maximale
            streaming-stabiliteit, kies NordVPN.
          </p>
        </details>
        <details>
          <summary>Gratis VPN?</summary>
          <p>
            Meestal trager, sneller geblokkeerd of twijfelachtig met data. Liever een scherpe
            jaardeal.
          </p>
        </details>
      </div>

      <p>
        <Link href="/nordvpn-vs-surfshark">NordVPN vs Surfshark</Link>
        {" · "}
        <Link href="/">Volledige ranking</Link>
      </p>
    </>
  );
}
