import type { Metadata } from "next";
import Link from "next/link";
import { AFFILIATE } from "../../lib/affiliates";

export const metadata: Metadata = {
  title: "VPN voor privacy Nederland 2026",
  description:
    "VPN voor privacy in NL: wat het wel/niet doet, en wie scoort op no-logs — Proton, NordVPN, Surfshark.",
  alternates: { canonical: "/vpn-privacy" },
};

export default function Page() {
  return (
    <>
      <h1>VPN voor privacy in Nederland 2026</h1>
      <p className="muted">
        Encryptie + ander IP — handig op openbare wifi en tegen tracking. Hieronder wie past.
      </p>

      <div className="card card-winner">
        <h2 style={{ marginTop: 0 }}>Kort advies</h2>
        <p>
          <strong>Privacy-first:</strong> Proton VPN
          <br />
          <strong>Allround:</strong> NordVPN
          <br />
          <strong>Privacy + budget/devices:</strong> Surfshark
        </p>
        <div className="actions">
          <a className="btn" href={AFFILIATE.proton}>
            Bekijk aanbieding Proton
          </a>
          <a className="btn-quiet" href={AFFILIATE.nord}>
            Bekijk aanbieding NordVPN
          </a>
        </div>
        <p className="cta-trust card-trust">30 dagen geld-terug</p>
      </div>

      <h2>Wat een VPN wél en níet doet</h2>
      <p>
        <strong>Wél:</strong> encryptie op openbare wifi, minder IP-tracking.
        <br />
        <strong>Niet:</strong> 100% onzichtbaarheid als je inlogt bij Google/Facebook.
      </p>

      <h2>Legaal in Nederland?</h2>
      <p>Ja. Illegaal gebruik blijft illegaal — de VPN zelf niet.</p>

      <h2>Waar letten we op?</h2>
      <ol>
        <li>No-logs + audits</li>
        <li>Jurisdictie</li>
        <li>Encryptie & kill switch</li>
        <li>Open source waar relevant</li>
      </ol>

      <p>
        <Link href="/reviews/proton-vpn">Proton VPN review</Link>
        {" · "}
        <Link href="/reviews/nordvpn">NordVPN review</Link>
        {" · "}
        <Link href="/over-ons">Over VPNScore</Link>
        {" · "}
        <Link href="/">Ranking</Link>
      </p>
    </>
  );
}
