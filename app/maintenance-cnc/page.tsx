import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Maintenance & Dépannage CNC",
  description:
    "Intervention rapide sur machines-outils et commandes numériques. Expertise multimarque Siemens, FANUC, NUM, Heidenhain. Réparation de cartes électroniques, variateurs, servomoteurs.",
};

const capabilities = [
  {
    id: "CAP-01",
    title: "DÉPANNAGE SUR SITE",
    detail:
      "Intervention sous 4h pour toute panne : tours, fraiseuses, centres d'usinage, rectifieuses, aléseuses. Diagnostic complet sur armoire électrique et mécanique.",
  },
  {
    id: "CAP-02",
    title: "COMMANDES NUMÉRIQUES",
    detail:
      "Maîtrise avancée Siemens Sinumerik & Simatic, FANUC, NUM, Heidenhain, Schneider. Paramétrage, mise au point, remise en service après panne.",
  },
  {
    id: "CAP-03",
    title: "VARIATEURS & SERVOMOTEURS",
    detail:
      "Dépannage, paramétrage et remplacement de variateurs de vitesse, servomoteurs, broches, axes, capteurs et règles de mesure.",
  },
  {
    id: "CAP-04",
    title: "RÉPARATION EN ATELIER",
    detail:
      "Diagnostic et réparation de cartes électroniques industrielles, platines, commandes d'axes et alimentations. Banc de test dédié.",
  },
  {
    id: "CAP-05",
    title: "RAPPORTS NUMÉRIQUES",
    detail:
      "Formulaires digitaux sur application mobile. Rapports d'intervention instantanés avec traçabilité totale et envoi automatisé.",
  },
  {
    id: "CAP-06",
    title: "SECTEURS D'INTERVENTION",
    detail:
      "Métallurgie, usinage de précision, chimie, plasturgie, aéronautique, automobile. Lignes de production complexes et équipements critiques.",
  },
];

const brands = [
  { name: "SIEMENS SINUMERIK", systems: "840D / 810D / 802D / 808D" },
  { name: "SIEMENS SIMATIC", systems: "S7-300 / S7-400 / S7-1500" },
  { name: "FANUC", systems: "0i / 16i / 18i / 30i / 31i / 32i" },
  { name: "NUM", systems: "1060 / 1080 / Flexium" },
  { name: "HEIDENHAIN", systems: "TNC 124 / 310 / 320 / 530 / 640" },
  { name: "SCHNEIDER", systems: "Modicon M340 / Premium / Quantum" },
  { name: "BOSCH REXROTH", systems: "CNC 430 / Indramotion MTX" },
  { name: "MITSUBISHI", systems: "M70 / M700 / M800" },
];

export default function MaintenanceCNCPage() {
  return (
    <>
      {/* Page header */}
      <div className="border-b border-border px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="label-mono text-accent">[SVC-01]</span>
          <span className="label-mono text-fore-muted">MAINTENANCE & DÉPANNAGE CNC</span>
        </div>
        <Link href="/" className="label-mono text-fore-muted hover:text-fore transition-colors">
          ← ACCUEIL
        </Link>
      </div>

      {/* Hero */}
      {/* Hero image */}
      <div className="relative border-b border-border overflow-hidden" style={{ height: "400px" }}>
        <Image
          src="/images/cnc-machine.jpg"
          alt="Machine CNC en opération — Maintenance Unitek Automation"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(4,13,30,0.92) 0%, rgba(8,21,40,0.6) 60%, rgba(4,13,30,0.4) 100%)",
          }}
        />
        <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
          <p className="label-mono text-accent mb-4">[ MODULE CURATIF — CAP. EXPERT ]</p>
          <h1 className="display-lg text-fore max-w-4xl mb-4">
            EXPERTISE CNC.
            <br />
            <span className="text-fore-dim">RÉACTIVITÉ</span>
            <br />
            MAXIMALE.
          </h1>
        </div>
      </div>

      <div className="border-b border-border px-8 py-10">
        <p className="text-fore-dim leading-relaxed max-w-2xl" style={{ fontSize: "1.05rem" }}>
          Vos machines à l&rsquo;arrêt coûtent cher. Chaque heure non productive impacte votre
          TRS et génère des retards de livraison. Notre équipe de techniciens experts intervient
          sur site avec les outils adaptés pour un diagnostic immédiat et une remise en production
          rapide, quelle que soit la marque ou la génération de votre commande numérique.
        </p>
      </div>

      {/* Capabilities grid */}
      <section className="border-b border-border">
        <SectionLabel id="CAP" label="CAPACITÉS TECHNIQUES" className="px-8 py-5 border-b border-border" />
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "var(--color-border)" }}
        >
          {capabilities.map((cap) => (
            <div key={cap.id} className="bg-surface p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="label-mono text-accent">{cap.id}</span>
              </div>
              <h3
                className="text-fore font-black uppercase"
                style={{ fontSize: "1.1rem", letterSpacing: "-0.02em", fontFamily: "var(--font-sans)" }}
              >
                {cap.title}
              </h3>
              <div className="h-px bg-border" />
              <p className="text-fore-dim leading-relaxed" style={{ fontSize: "0.875rem" }}>
                {cap.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Brands matrix */}
      <section className="border-b border-border">
        <SectionLabel id="MRQ" label="MARQUES MAÎTRISÉES" className="px-8 py-5 border-b border-border" />
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--color-border)" }}
        >
          {brands.map((brand) => (
            <div key={brand.name} className="bg-surface px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                <span
                  className="text-fore font-bold uppercase"
                  style={{ fontSize: "0.9rem", letterSpacing: "-0.01em", fontFamily: "var(--font-sans)" }}
                >
                  {brand.name}
                </span>
              </div>
              <span className="data-mono text-fore-muted">{brand.systems}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="px-8 py-16 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="label-mono text-accent mb-2">[ DÉCLENCHER UNE INTERVENTION ]</p>
          <p
            className="text-fore font-black uppercase"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: "0.95", letterSpacing: "-0.025em", fontFamily: "var(--font-sans)" }}
          >
            PANNE EN COURS ?
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dim transition-colors font-mono text-sm font-medium uppercase tracking-widest text-fore"
        >
          <span className="w-2 h-2 bg-fore" />
          DÉCLARER UNE URGENCE CNC
        </Link>
      </div>
    </>
  );
}
