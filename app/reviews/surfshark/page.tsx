import type { Metadata } from "next";
import Link from "next/link";
import { AFFILIATE } from "../../../lib/affiliates";

export const metadata: Metadata = {
  title: "Surfshark Review 2026 — beste prijs",
  description:
    "Surfshark review Nederland 2026: unlimited devices, scherpe jaardeals, streaming. Bekijk de aanbieding.",
  alternates: { canonical: "/reviews/surfshark" },
};

export default function Page() {
  return (
    <>
      <h1>Surfshark Review 2026</h1>
      <p>
        <span className="score">8.9/10</span> — beste prijs / gezin in onze ranking.
      </p>
      <p className="muted">
        Onbeperkt apparaten en scherpe langetermijnprijs — sterk als budget telt.
      </p>
      <div className="actions">
        <a className="btn" href={AFFILIATE.surfshark}>
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
          <strong>Voor wie?</strong> Gezin of veel devices, scherpe jaardeal.
        </p>
        <p>
          <strong>Niet ideaal als:</strong> maximale streaming-stabiliteit (→ NordVPN).
        </p>
      </div>

      <h2>Prijs & devices</h2>
      <p>
        Vaak de laagste 2-jaars prijs in onze tabel, plus unlimited devices.
      </p>

      <h2>Streaming & privacy</h2>
      <p>
        Streaming is zeer goed; privacy degelijk. Sterk prijs-kwaliteit.
      </p>

      <h2>Plus & min</h2>
      <p>
        <strong>Plus:</strong> unlimited devices · scherpe prijs
        <br />
        <strong>Min:</strong> iets minder premium merkgevoel
      </p>

      <h2>Alternatieven</h2>
      <ul>
        <li>
          <Link href="/reviews/nordvpn">NordVPN</Link> — sterker overall/streaming
        </li>
        <li>
          <Link href="/goedkoopste-vpn">Goedkoopste VPN</Link>
        </li>
        <li>
          <Link href="/nordvpn-vs-surfshark">NordVPN vs Surfshark</Link>
        </li>
      </ul>

      <div className="actions">
        <a className="btn" href={AFFILIATE.surfshark}>
          Bekijk aanbieding Surfshark
        </a>
        <Link className="btn-ghost" href="/goedkoopste-vpn">
          Prijsvergelijking
        </Link>
      </div>
    </>
  );
}
