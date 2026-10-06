import Link from "next/link";
import { AFFILIATE } from "../../../lib/affiliates";

export const metadata = {
  title: "Proton VPN review 2026",
  description: "Proton VPN review: privacy, open source, streaming en prijs voor Nederland.",
};

export default function ProtonReviewPage() {
  return (
    <>
      <p className="badge-row"><span className="badge accent">Review</span><span className="badge">Score 8.5/10</span></p>
      <h1>Proton VPN review 2026 — beste voor privacy</h1>
      <p>
        Proton VPN (zelfde maker als Proton Mail) is onze privacy-keuze: Zwitserse jurisdictie,
        open source apps en een sterke no-logs reputatie. Streaming is wisselender dan Nord/Surfshark.
      </p>
      <div className="card">
        <div className="card-head">
          <h2 style={{ margin: 0 }}>Kort oordeel</h2>
          <span className="score">8.5/10</span>
        </div>
        <div className="pros-cons">
          <div className="pros"><strong>Plus</strong>Privacy · transparantie · Proton-ecosysteem</div>
          <div className="cons"><strong>Min</strong>Streaming wisselt · gratis plan beperkt</div>
        </div>
        <div className="actions">
          <a className="btn" href={AFFILIATE.proton}>Bekijk Proton VPN →</a>
          <Link className="btn-ghost" href="/">← Terug naar vergelijking</Link>
        </div>
      </div>
      <h2>Voor wie?</h2>
      <ul>
        <li>Je gebruikt al Proton Mail / Drive</li>
        <li>Privacy &gt; maximale streaming-betrouwbaarheid</li>
        <li>Je wilt open source clients</li>
      </ul>
      <p className="disclosure">Laatst bijgewerkt: oktober 2026 · Placeholder: [AFFILIATE_PROTON]</p>
    </>
  );
}
