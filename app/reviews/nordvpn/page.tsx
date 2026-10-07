import type { Metadata } from "next";
import Link from "next/link";
import { AFFILIATE } from "../../../lib/affiliates";

export const metadata: Metadata = {
  title: "NordVPN Review 2026 — score 9.2",
  description:
    "NordVPN review Nederland 2026: snelheid, streaming, privacy en prijs. Onze #1 overall — bekijk de aanbieding.",
  alternates: { canonical: "/reviews/nordvpn" },
};

export default function Page() {
  return (
    <>
      <h1>NordVPN Review 2026</h1>
      <p>
        <span className="score">9.2/10</span> — onze topkeuze voor de meeste Nederlanders.
      </p>
      <p className="muted">
        Snelheid, privacy, streaming en prijs — kort oordeel, daarna de aanbieding.
      </p>
      <div className="actions">
        <a className="btn" href={AFFILIATE.nord}>
          Bekijk aanbieding
        </a>
        <Link className="btn-ghost" href="/">
          Ranking
        </Link>
      </div>
      <p className="cta-trust card-trust">30 dagen geld-terug</p>

      <h2>Kort oordeel</h2>
      <div className="card card-winner">
        <p>
          Snelheid 9.5 · Privacy 9.0 · Streaming 9.0 · Apps 9.0 · Prijs 8.0 ·{" "}
          <strong>Totaal 9.2</strong>
        </p>
        <p>
          <strong>Voor wie?</strong> Betrouwbare, snelle VPN zonder gedoe.
        </p>
        <p>
          <strong>Niet ideaal als:</strong> unlimited devices tegen de laagste prijs (→ Surfshark).
        </p>
      </div>

      <h2>Snelheid & streaming</h2>
      <p>
        Prima voor 4K en downloads. Streaming werkt doorgaans goed; wissel van server bij een
        blokkade.
      </p>

      <h2>Privacy</h2>
      <ul>
        <li>No-logs (geaudit)</li>
        <li>Sterke encryptie</li>
        <li>Jurisdictie: Panama</li>
      </ul>

      <h2>Prijs</h2>
      <p>Beste deals op 1- of 2-jaar. Check altijd de actuele prijs.</p>
      <a className="btn" href={AFFILIATE.nord}>
        Bekijk aanbieding
      </a>

      <h2>Plus & min</h2>
      <p>
        <strong>Plus:</strong> snel · sterke streaming · Threat Protection
        <br />
        <strong>Min:</strong> duurder bij veel devices
      </p>

      <h2>Alternatieven</h2>
      <ul>
        <li>
          <Link href="/reviews/surfshark">Surfshark</Link> — goedkoper, unlimited devices
        </li>
        <li>
          <Link href="/reviews/proton-vpn">Proton VPN</Link> — privacy / open source
        </li>
        <li>
          <Link href="/nordvpn-vs-surfshark">NordVPN vs Surfshark</Link>
        </li>
      </ul>

      <div className="actions">
        <a className="btn" href={AFFILIATE.nord}>
          Bekijk aanbieding NordVPN
        </a>
        <Link className="btn-ghost" href="/vpn-streaming">
          Streaming-gids
        </Link>
      </div>
    </>
  );
}
