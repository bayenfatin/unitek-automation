import Link from "next/link";
import { COMPANY_INFO } from "@/lib/data";

export default function CallToAction() {
  return (
    <section className="border-b border-border">
      {/* Section header */}
      <div className="border-b border-border px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="label-mono text-accent">[SEC-04]</span>
          <span className="label-mono text-fore-muted">TUNNEL DE QUALIFICATION</span>
        </div>
        <span className="label-mono text-fore-muted">ACTIVATION INTERVENTION</span>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--color-border)" }}>

        {/* Left — Emergency contact */}
        <div className="bg-surface p-10 lg:p-16 flex flex-col justify-between">
          <div>
            <span className="label-mono text-accent block mb-4">[ URGENCE PANNE ]</span>
            <h2
              className="text-fore font-black uppercase mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 4.5rem)",
                lineHeight: "0.92",
                letterSpacing: "-0.035em",
                fontFamily: "var(--font-sans)",
              }}
            >
              MACHINE
              <br />
              À L&rsquo;ARRÊT ?
            </h2>
            <p
              className="text-fore-dim leading-relaxed mb-8"
              style={{ fontSize: "0.95rem", maxWidth: "440px" }}
            >
              Nos techniciens interviennent sous 4h dans la région lyonnaise pour
              tout arrêt sur commande numérique, variateur, servomoteur ou carte
              électronique. Zéro temps de traitement.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="label-mono text-fore-muted">OU</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="flex gap-4">
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-accent hover:bg-accent-dim transition-colors font-mono text-sm font-medium uppercase tracking-widest text-fore"
              >
                <span className="w-2 h-2 bg-fore flex-shrink-0" />
                DÉCLARER UNE URGENCE
              </Link>
            </div>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-between border border-border hover:border-fore-muted transition-colors px-6 py-4 group"
            >
              <span className="label-mono text-fore-muted group-hover:text-fore transition-colors">
                APPEL DIRECT
              </span>
              <span className="data-mono text-fore">{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Right — Maintenance 4.0 offer */}
        <div className="bg-surface-1 p-10 lg:p-16 flex flex-col justify-between">
          <div>
            <span className="label-mono text-accent block mb-4">[ PARTENARIAT LONG TERME ]</span>
            <h2
              className="text-fore font-black uppercase mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 4.5rem)",
                lineHeight: "0.92",
                letterSpacing: "-0.035em",
                fontFamily: "var(--font-sans)",
              }}
            >
              PILOTEZ
              <br />
              PAR LA DATA.
            </h2>
            <p
              className="text-fore-dim leading-relaxed mb-8"
              style={{ fontSize: "0.95rem", maxWidth: "440px" }}
            >
              Transformez vos données de maintenance en levier de performance.
              Tableaux de bord Power BI, connectivité SCADA/GMAO, analyse AMDEC,
              amélioration continue structurée. Votre parc machines sous contrôle.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { label: "DIAGNOSTIQUER MON PARC MACHINES", href: "/contact" },
              { label: "VOIR L'OFFRE SUPERVISION DATA", href: "/supervision-data" },
              { label: "PLANIFIER UN RÉTROFIT", href: "/retrofit-ingenierie" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between border border-border hover:border-fore-muted transition-colors px-5 py-3 group"
              >
                <span className="font-mono text-xs text-fore-dim group-hover:text-fore transition-colors uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-fore-muted group-hover:text-accent transition-colors">
                  ///
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom proof band */}
      <div
        className="grid border-t border-border"
        style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--color-border)" }}
      >
        {[
          { label: "SECTEURS", value: "MÉTALLURGIE · CHIMIE · AÉRO · AUTO" },
          { label: "CERTIFICATIONS", value: "SIEMENS · FANUC · NUM · HEIDENHAIN" },
          { label: "MÉTHODES", value: "AMDEC · 5 POURQUOI · POWER BI · SCADA" },
        ].map((item) => (
          <div key={item.label} className="bg-surface px-8 py-5 flex flex-col gap-1">
            <span className="label-mono text-accent">{item.label}</span>
            <span className="data-mono text-fore-dim">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
