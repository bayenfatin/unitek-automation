import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-1 mt-0">
      <div className="border-b border-border px-6 py-3">
        <div className="flex items-center justify-between">
          <span className="label-mono text-fore-muted">
            [ UNITEK AUTOMATION — SYSTÈME DE NAVIGATION ]
          </span>
          <span className="label-mono text-fore-muted">
            {COMPANY_INFO.coords}
          </span>
        </div>
      </div>

      <div
        className="grid border-b border-border"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        <div className="p-8 border-r border-border">
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/unitek-logo.png"
                alt="Unitek Automation"
                width={150}
                height={44}
                className="object-contain mb-2"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="label-mono text-fore-muted">
                Ex. {COMPANY_INFO.legacy} — Depuis {COMPANY_INFO.since}
              </p>
            </div>
            <div className="h-px bg-border" />
            <p className="data-mono text-fore-muted text-xs leading-relaxed">
              Maintenance industrielle experte.
              <br />
              CNC, Rétrofit, Pilotage Data.
              <br />
              {COMPANY_INFO.city}, Rhône.
            </p>
          </div>
        </div>

        <div className="p-8 border-r border-border">
          <p className="label-mono text-accent mb-4">[ NAVIGATION ]</p>
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="flex items-center gap-3 group"
              >
                <span className="label-mono text-fore-muted group-hover:text-accent transition-colors">
                  {link.id}
                </span>
                <span
                  className="font-mono text-xs text-fore-dim group-hover:text-fore transition-colors uppercase"
                  style={{ letterSpacing: "0.06em" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-8 border-r border-border">
          <p className="label-mono text-accent mb-4">[ SECTEURS ]</p>
          <ul className="flex flex-col gap-2">
            {[
              "Métallurgie & Usinage",
              "Chimie & Plasturgie",
              "Aéronautique",
              "Automobile",
              "Industrie générale",
            ].map((sector) => (
              <li key={sector} className="flex items-center gap-2">
                <span className="label-mono text-fore-muted">///</span>
                <span className="data-mono text-fore-dim text-xs">{sector}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8">
          <p className="label-mono text-accent mb-4">[ CONTACT ]</p>
          <div className="flex flex-col gap-3">
            <div>
              <p className="label-mono text-fore-muted">TÉLÉPHONE</p>
              <p className="data-mono text-fore text-xs mt-1">
                {COMPANY_INFO.phone}
              </p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <p className="label-mono text-fore-muted">EMAIL</p>
              <p className="data-mono text-fore text-xs mt-1">
                {COMPANY_INFO.email}
              </p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <p className="label-mono text-fore-muted">ADRESSE</p>
              <p className="data-mono text-fore text-xs mt-1 leading-relaxed">
                {COMPANY_INFO.city}
                <br />
                {COMPANY_INFO.department}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-3 flex items-center justify-between">
        <span className="label-mono text-fore-muted">
          © {new Date().getFullYear()} UNITEK AUTOMATION — TOUS DROITS RÉSERVÉS
        </span>
        <span className="label-mono text-fore-muted">
          MAINTENANCE 4.0 — {COMPANY_INFO.rev}
        </span>
      </div>
    </footer>
  );
}
