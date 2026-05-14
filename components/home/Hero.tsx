import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/data";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col border-b border-border overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Background image full-width ─────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cnc-machine.jpg"
          alt="Machine CNC en opération"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(4,13,30,0.97) 0%, rgba(4,13,30,0.88) 55%, rgba(4,13,30,0.60) 100%)",
          }}
        />
        {/* CRT scanlines on the image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.055) 3px, rgba(0,0,0,0.055) 4px)",
          }}
        />
      </div>

      {/* ── System bar ───────────────────────────────────────────── */}
      <div className="relative z-20 border-b border-border px-6 py-2 flex items-center justify-between bg-surface/70 backdrop-blur-sm">
        <span className="label-mono text-fore-muted">
          [ DIAGNOSTIC SYSTÈME ACTIF — {COMPANY_INFO.unit} ]
        </span>
        <div className="flex items-center gap-2">
          <span className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-terminal" />
          <span className="label-mono text-terminal">OPÉRATIONNEL</span>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="relative z-20 flex-1 flex flex-col justify-between px-8 lg:px-16 py-12 max-w-5xl">

        {/* Top metadata row */}
        <div className="flex items-center gap-6">
          <span className="label-mono text-fore-muted">
            SAINT-FONS (69) — MAINTENANCE INDUSTRIELLE
          </span>
          <span className="h-3 w-px bg-border" />
          <span className="label-mono text-accent">DEPUIS {COMPANY_INFO.since}</span>
        </div>

        {/* Central block — heading + description + CTAs */}
        <div className="flex flex-col gap-8 py-6">
          <div>
            <span className="label-mono text-accent block mb-4">
              [ PROPOSITION DE VALEUR ]
            </span>
            <h1
              className="text-fore font-black uppercase"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 6.5rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.035em",
                fontFamily: "var(--font-sans)",
              }}
            >
              MAINTENANCE
              <br />
              <span className="text-accent">HAUTE</span>
              <br />
              PRÉCISION.
            </h1>
          </div>

          <div
            className="h-px bg-border"
            style={{ maxWidth: "520px" }}
          />

          <p
            className="text-fore-dim leading-relaxed"
            style={{ fontSize: "1rem", maxWidth: "520px" }}
          >
            De l&rsquo;expertise curative sur commandes numériques jusqu&rsquo;au
            pilotage par la donnée. Vos équipements critiques entre les mains
            d&rsquo;experts terrain avec{" "}
            <span className="text-fore font-semibold">30 ans d&rsquo;expérience</span>.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dim transition-colors font-mono text-xs font-medium uppercase tracking-widest text-fore"
            >
              <span className="w-1.5 h-1.5 bg-fore flex-shrink-0" />
              URGENCE PANNE CNC
            </Link>
            <Link
              href="/supervision-data"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border hover:border-accent hover:text-accent-light transition-colors font-mono text-xs font-medium uppercase tracking-widest text-fore"
            >
              OFFRE MAINTENANCE 4.0
              <span className="text-fore-muted font-mono">///</span>
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}
