import type { Metadata } from "next";
import Link from "next/link";
import { AFFILIATE } from "../../../lib/affiliates";

export const metadata: Metadata = {
  title: "Proton VPN Review 2026 — beste privacy",
  description:
    "Proton VPN review Nederland 2026: Zwitserse privacy, open source, Proton-ecosysteem. Bekijk de aanbieding.",
  alternates: { canonical: "/reviews/proton-vpn" },
};

export default function Page() {
  return (
    <>
      <h1>Proton VPN Review 2026</h1>
      <p>
        <span className="score">8.5/10</span> — beste privacy in onze ranking.
      </p>
      <p className="muted">
        Zelfde maker als Proton Mail — open source apps, Zwitserse privacy-focus.
      </p>
      <div className="actions">
        <a className="btn" href={AFFILIATE.proton}>
          Bekijk aanbieding
        </a>
        <Link className="btn-ghost" href="/">
          Ranking
        </Link>
      </div>
      <p className="cta-trust card-trust">30 dagen geld-terug</p>

      <h2>Kort oordeel</h2>
      <div className="card">
        <p>
          <strong>Voor wie?</strong> Privacy eerst, of je zit al in Proton.
        </p>
        <p>
          <strong>Niet ideaal als:</strong> streaming je #1 is (→ NordVPN).
        </p>
      </div>

      <h2>Privacy</h2>
      <p>
        Sterke no-logs-reputatie, open source clients, jurisdictie Zwitserland.
      </p>

      <h2>Streaming & prijs</h2>
      <p>
        Streaming wisselt meer dan bij Nord/Surfshark. Check de actuele Plus-deal.
      </p>

      <h2>Plus & min</h2>
      <p>
        <strong>Plus:</strong> privacy · open source · Proton-ecosysteem
        <br />
        <strong>Min:</strong> streaming wisselt
      </p>

      <h2>Alternatieven</h2>
      <ul>
        <li>
          <Link href="/reviews/nordvpn">NordVPN</Link> — allround + streaming
        </li>
        <li>
          <Link href="/vpn-privacy">VPN voor privacy</Link>
        </li>
      </ul>

      <div className="actions">
        <a className="btn" href={AFFILIATE.proton}>
          Bekijk aanbieding Proton VPN
        </a>
        <Link className="btn-ghost" href="/vpn-privacy">
          Privacy-gids
        </Link>
      </div>
    </>
  );
}
