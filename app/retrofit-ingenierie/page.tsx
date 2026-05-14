import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Rétrofit & Ingénierie",
  description:
    "Modernisation des pupitres et commandes numériques obsolètes. Rétrofit de machines-outils, analyse AMDEC, fiabilisation mécanique et électrique. Région lyonnaise.",
};

const phases = [
  {
    id: "PH-01",
    phase: "DIAGNOSTIC",
    title: "AUDIT DE L'EXISTANT",
    detail:
      "Analyse complète de votre parc machines : identification des équipements obsolètes, criticité des pannes, disponibilité des pièces de rechange, coût des arrêts. Rapport d'audit détaillé.",
  },
  {
    id: "PH-02",
    phase: "ANALYSE",
    title: "AMDEC & CAUSES RACINES",
    detail:
      "Application de la méthode AMDEC (Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité) et des 5 Pourquoi pour identifier les causes racines des dysfonctionnements chroniques.",
  },
  {
    id: "PH-03",
    phase: "INGÉNIERIE",
    title: "CONCEPTION DU RÉTROFIT",
    detail:
      "Définition de la solution technique optimale : remplacement du pupitre CNC, modernisation des variateurs, mise à niveau des actionneurs. Cahier des charges précis et planning d'intervention.",
  },
  {
    id: "PH-04",
    phase: "EXÉCUTION",
    title: "MISE EN ŒUVRE",
    detail:
      "Réalisation du rétrofit en minimisant les temps d'arrêt de production. Câblage, programmation, paramétrage et tests complets avant remise en service.",
  },
  {
    id: "PH-05",
    phase: "VALIDATION",
    title: "MISE EN SERVICE & FORMATION",
    detail:
      "Tests de réception avec vos équipes, validation des performances, formation des opérateurs et du personnel de maintenance à la nouvelle solution.",
  },
  {
    id: "PH-06",
    phase: "SUIVI",
    title: "AMÉLIORATION CONTINUE",
    detail:
      "Mise en place de nouveaux workflows automatisés pour le traitement des anomalies. Suivi des KPIs de fiabilité post-rétrofit via tableaux de bord.",
  },
];

export default function RetrofitIngenieriePage() {
  return (
    <>
      <div className="border-b border-border px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="label-mono text-accent">[SVC-02]</span>
          <span className="label-mono text-fore-muted">RÉTROFIT & INGÉNIERIE</span>
        </div>
        <Link href="/" className="label-mono text-fore-muted hover:text-fore transition-colors">
          ← ACCUEIL
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative border-b border-border overflow-hidden" style={{ height: "400px" }}>
        <Image
          src="/images/industrial-workshop.jpg"
          alt="Atelier industriel — Rétrofit machines-outils Unitek Automation"
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
          <p className="label-mono text-accent mb-4">[ MODULE RÉTROFIT — INGÉNIERIE SYSTÈME ]</p>
          <h1 className="display-lg text-fore max-w-4xl mb-4">
            MODERNISEZ.
            <br />
            <span className="text-fore-dim">NE RACHETEZ</span>
            <br />
            PAS.
          </h1>
        </div>
      </div>

      <div className="border-b border-border px-8 py-10">
        <p className="text-fore-dim leading-relaxed max-w-2xl" style={{ fontSize: "1.05rem" }}>
          Une machine-outil représente un investissement considérable. L&rsquo;obsolescence de sa
          commande numérique ne justifie pas son remplacement. Le rétrofit modernise votre
          équipement à une fraction du coût d&rsquo;une machine neuve, en intégrant les technologies
          actuelles et en éliminant les causes racines de vos pannes chroniques.
        </p>
      </div>

      <section className="border-b border-border">
        <SectionLabel id="PHR" label="MÉTHODOLOGIE D'INTERVENTION" className="px-8 py-5 border-b border-border" />
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--color-border)" }}
        >
          {phases.map((phase) => (
            <div key={phase.id} className="bg-surface p-8 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="label-mono text-accent">{phase.id}</span>
                <span className="label-mono text-fore-muted">/ {phase.phase}</span>
              </div>
              <h3
                className="text-fore font-black uppercase"
                style={{ fontSize: "1.1rem", letterSpacing: "-0.02em", fontFamily: "var(--font-sans)" }}
              >
                {phase.title}
              </h3>
              <div className="h-px bg-border" />
              <p className="text-fore-dim leading-relaxed" style={{ fontSize: "0.875rem" }}>
                {phase.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Value proposition band */}
      <section className="border-b border-border">
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "var(--color-border)" }}
        >
          {[
            { metric: "60-70%", label: "ÉCONOMIE vs MACHINE NEUVE", sub: "Coût moyen d'un rétrofit complet" },
            { metric: "AMDEC", label: "ANALYSE MODES DE DÉFAILLANCE", sub: "Élimination des causes racines" },
            { metric: "∞", label: "DURÉE DE VIE PROLONGÉE", sub: "Infrastructure mécanique conservée" },
          ].map((item) => (
            <div key={item.metric} className="bg-surface p-10 flex flex-col gap-3">
              <span
                className="text-accent font-black"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "0.9", letterSpacing: "-0.04em", fontFamily: "var(--font-sans)" }}
              >
                {item.metric}
              </span>
              <p className="label-mono text-fore">{item.label}</p>
              <p className="data-mono text-fore-muted">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-8 py-16 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="label-mono text-accent mb-2">[ PLANIFIER UN AUDIT ]</p>
          <p
            className="text-fore font-black uppercase"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: "0.95", letterSpacing: "-0.025em", fontFamily: "var(--font-sans)" }}
          >
            VOTRE PARC MACHINES
            <br />
            MÉRITE MIEUX.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dim transition-colors font-mono text-sm font-medium uppercase tracking-widest text-fore"
        >
          <span className="w-2 h-2 bg-fore" />
          DEMANDER UN AUDIT RÉTROFIT
        </Link>
      </div>
    </>
  );
}
