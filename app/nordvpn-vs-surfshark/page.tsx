import Link from "next/link";
import { AFFILIATE } from "../../lib/affiliates";

export const metadata = {
  title: "NordVPN vs Surfshark 2026 — welke kiezen? | VPNScore",
  description:
    "NordVPN of Surfshark? Scores, prijs, devices en streaming naast elkaar — daarna direct naar de aanbieding.",
};

export default function Page() {
  return (
    <>
      <h1>NordVPN vs Surfshark 2026</h1>
      <p className="muted">
        Twee topkeuzes voor NL. Kort verschil: NordVPN wint overall/streaming, Surfshark wint op
        prijs en unlimited devices.
      </p>

      <div className="card card-winner">
        <p style={{ marginTop: 0 }}>
          <strong>Kies NordVPN</strong> als je allround wilt (snelheid + streaming).
          <br />
          <strong>Kies Surfshark</strong> als je budget of veel apparaten belangrijker vindt.
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

      <h2>Side-by-side</h2>
      <div className="table-wrap">
        <table className="compare">
          <thead>
            <tr>
              <th></th>
              <th>NordVPN</th>
              <th>Surfshark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Score</strong>
              </td>
              <td className="best" data-label="NordVPN">
                9.2
              </td>
              <td data-label="Surfshark">8.9</td>
            </tr>
            <tr>
              <td>
                <strong>Prijs (2 jr)</strong>
              </td>
              <td data-label="NordVPN">vanaf €3,39/mnd</td>
              <td className="best" data-label="Surfshark">
                vanaf €1,99/mnd
              </td>
            </tr>
            <tr>
              <td>
                <strong>Apparaten</strong>
              </td>
              <td data-label="NordVPN">Tot 10</td>
              <td className="best" data-label="Surfshark">
                Unlimited
              </td>
            </tr>
            <tr>
              <td>
                <strong>Streaming</strong>
              </td>
              <td className="best" data-label="NordVPN">
                Uitstekend
              </td>
              <td data-label="Surfshark">Zeer goed</td>
            </tr>
            <tr>
              <td>
                <strong>Privacy</strong>
              </td>
              <td data-label="NordVPN">Sterk (audits)</td>
              <td data-label="Surfshark">Goed</td>
            </tr>
            <tr>
              <td>
                <strong>Beste voor</strong>
              </td>
              <td data-label="NordVPN">Overall</td>
              <td data-label="Surfshark">Prijs / gezin</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Verdict</h2>
      <p>
        Twijfel je nog? Start met{" "}
        <a href={AFFILIATE.nord}>
          <strong>NordVPN</strong>
        </a>{" "}
        voor de veiligste allround-keuze, of met{" "}
        <a href={AFFILIATE.surfshark}>
          <strong>Surfshark</strong>
        </a>{" "}
        als de prijs doorslaggevend is.
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

      <p style={{ marginTop: "1.5rem" }}>
        <Link href="/goedkoopste-vpn">Goedkoopste VPN</Link>
        {" · "}
        <Link href="/vpn-streaming">VPN voor streaming</Link>
        {" · "}
        <Link href="/">Volledige ranking</Link>
      </p>
    </>
  );
}
