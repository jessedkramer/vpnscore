import Link from "next/link";
import { AFFILIATE } from "../../lib/affiliates";

export const metadata = {
  title: "VPN voor Netflix Nederland 2026 | VPNScore",
  description:
    "Welke VPN werkt voor Netflix in Nederland? NordVPN vs Surfshark — ranking en aanbiedingen.",
};

export default function Page() {
  return (
    <>
      <h1>VPN voor Netflix Nederland 2026</h1>
      <p className="muted">
        Netflix blokkeert VPN's regelmatig. Hieronder wie het vaakst werkt — daarna door naar de
        aanbieding.
      </p>

      <div className="card card-winner">
        <h2 style={{ marginTop: 0 }}>Kort advies</h2>
        <p>
          <strong>Meest betrouwbaar:</strong> NordVPN
          <br />
          <strong>Goedkoop + veel devices:</strong> Surfshark
        </p>
        <div className="actions">
          <a className="btn" href={AFFILIATE.nord}>
            Bekijk aanbieding NordVPN
          </a>
          <a className="btn-ghost" href={AFFILIATE.surfshark}>
            Bekijk aanbieding Surfshark
          </a>
        </div>
      </div>

      <h2>Waarom een VPN voor Netflix?</h2>
      <ul>
        <li>Andere landencatalogus bekijken</li>
        <li>Veiliger streamen op openbare wifi</li>
      </ul>

      <h2>NordVPN</h2>
      <p>
        Sterk op streaming-servers. Lijkt een server geblokkeerd? Wissel van land/server.
      </p>
      <a className="btn" href={AFFILIATE.nord}>
        Bekijk aanbieding NordVPN
      </a>
      <p>
        <Link href="/reviews/nordvpn">Review</Link>
      </p>

      <h2>Surfshark</h2>
      <p>
        Vaak goedkoper; unlimited devices handig voor TV + telefoon + laptop tegelijk.
      </p>
      <a className="btn" href={AFFILIATE.surfshark}>
        Bekijk aanbieding Surfshark
      </a>
      <p>
        <Link href="/reviews/surfshark">Review</Link>
      </p>

      <h2>Tips bij blokkade</h2>
      <ol>
        <li>Andere server / land</li>
        <li>VPN even uit-aan</li>
        <li>Cache legen of privévenster</li>
      </ol>

      <p>
        <Link href="/vpn-streaming">VPN voor streaming</Link>
        {" · "}
        <Link href="/nordvpn-vs-surfshark">NordVPN vs Surfshark</Link>
        {" · "}
        <Link href="/">Ranking</Link>
      </p>
    </>
  );
}
