import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const OFFER_IMAGES: Record<string, string> = {
  "OFF-01": "/images/supervision-mobile.jpg",
  "OFF-02": "/images/supervision-dashboard.jpg",
  "OFF-03": "/images/supervision-scada.jpg",
  "OFF-04": "/images/supervision-amdec.jpg",
};

export const metadata: Metadata = {
  title: "Supervision & Pilotage Data",
  description:
    "Maintenance 4.0 : tableaux de bord Power BI, connectivité SCADA/GMAO, digitalisation des interventions, analyse MTTR et TRS. Pilotez votre parc machines par la donnée.",
};

const offers = [
  {
    id: "OFF-01",
    title: "DIGITALISATION DES INTERVENTIONS",
    description:
      "Remplacement des bons papier par des formulaires numériques sur application mobile pour vos techniciens. Standardisation de la collecte de données, automatisation de l'envoi des rapports journaliers, traçabilité totale de chaque intervention.",
    kpis: ["Rapport auto en fin d'intervention", "Traçabilité complète", "Zéro saisie manuelle double"],
  },
  {
    id: "OFF-02",
    title: "TABLEAUX DE BORD POWER BI",
    description:
      "Développement de dashboards interactifs pour analyser vos temps d'arrêt, identifier vos installations les plus critiques et visualiser vos performances en temps réel. Accès web et mobile pour la direction.",
    kpis: ["KPIs : TRS / MTTR / MTTF", "Arrêts critiques identifiés", "Tendances et prévisions"],
  },
  {
    id: "OFF-03",
    title: "CONNECTIVITÉ SCADA & GMAO",
    description:
      "Capacité à nettoyer et connecter des sources de données hétérogènes : systèmes SCADA, GMAO existantes (Carl Source, Infor EAM...), fichiers Excel, données automates. Unification de vos référentiels.",
    kpis: ["Carl Source / Infor EAM", "Données OPC-UA / SCADA", "Fichiers Excel / CSV structurés"],
  },
  {
    id: "OFF-04",
    title: "AMÉLIORATION CONTINUE",
    description:
      "Application structurée des méthodologies d'ingénierie AMDEC et 5 Pourquoi pour analyser les arrêts récurrents, identifier les causes racines et proposer des solutions techniques et organisationnelles durables.",
    kpis: ["Plans d'action documentés", "Workflows anomalies automatisés", "Suivi de l'efficacité"],
  },
];

export default function SupervisionDataPage() {
  return (
    <>
      <div className="border-b border-border px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="label-mono text-accent">[SVC-03]</span>
          <span className="label-mono text-fore-muted">SUPERVISION & PILOTAGE DATA</span>
        </div>
        <Link href="/" className="label-mono text-fore-muted hover:text-fore transition-colors">
          ← ACCUEIL
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative border-b border-border overflow-hidden" style={{ height: "400px" }}>
        <Image
          src="/images/factory-automation.jpg"
          alt="Supervision data et tableaux de bord industriels — Unitek Automation"
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
          <p className="label-mono text-accent mb-4">[ MODULE MAINTENANCE 4.0 — DATA ENGINEERING ]</p>
          <h1 className="display-lg text-fore max-w-4xl mb-4">
            VOS DONNÉES.
            <br />
            <span className="text-fore-dim">VOTRE</span>
            <br />
            AVANTAGE.
          </h1>
        </div>
      </div>

      <div className="border-b border-border px-8 py-10">
        <p className="text-fore-dim leading-relaxed max-w-2xl" style={{ fontSize: "1.05rem" }}>
          La maintenance réactive coûte 3 à 5 fois plus cher que la maintenance prédictive. Vos
          machines génèrent déjà des données précieuses. Nous les collectons, les structurons et
          les transformons en tableaux de bord actionnables pour que chaque décision de maintenance
          soit fondée sur des faits, et non sur des intuitions.
        </p>
      </div>

      {/* KPI bar */}
      <div
        className="grid border-b border-border"
        style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--color-border)" }}
      >
        {[
          { metric: "TRS", full: "TAUX DE RENDEMENT SYNTHÉTIQUE", desc: "Disponibilité × Performance × Qualité" },
          { metric: "MTTR", full: "MEAN TIME TO REPAIR", desc: "Temps moyen de remise en service" },
          { metric: "MTTF", full: "MEAN TIME TO FAILURE", desc: "Temps moyen entre pannes" },
          { metric: "OEE", full: "OVERALL EQUIPMENT EFFECTIVENESS", desc: "Indicateur global de performance" },
        ].map((kpi) => (
          <div key={kpi.metric} className="bg-surface p-6 flex flex-col gap-2">
            <span
              className="text-accent font-black"
              style={{ fontSize: "2rem", lineHeight: "0.9", letterSpacing: "-0.04em", fontFamily: "var(--font-sans)" }}
            >
              {kpi.metric}
            </span>
            <p className="label-mono text-fore" style={{ fontSize: "0.6rem" }}>{kpi.full}</p>
            <p className="data-mono text-fore-muted" style={{ fontSize: "0.7rem" }}>{kpi.desc}</p>
          </div>
        ))}
      </div>

      {/* Offers */}
      <section className="border-b border-border">
        <SectionLabel id="OFF" label="MODULES DATA & DIGITALISATION" className="px-8 py-5 border-b border-border" />
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--color-border)" }}
        >
          {offers.map((offer) => (
            <div key={offer.id} className="bg-surface flex flex-col group overflow-hidden">
              {/* Image header */}
              <div className="relative h-52 overflow-hidden border-b border-border flex-shrink-0">
                <Image
                  src={OFFER_IMAGES[offer.id]}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(4,13,30,0.25) 0%, rgba(4,13,30,0.82) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-end justify-between">
                  <span className="label-mono text-accent">{offer.id}</span>
                  <span className="label-mono text-fore-muted">/ {offer.title.split(" ")[0]}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-8 flex-1">
                <h3
                  className="text-fore font-black uppercase"
                  style={{ fontSize: "1.15rem", lineHeight: "1", letterSpacing: "-0.02em", fontFamily: "var(--font-sans)" }}
                >
                  {offer.title}
                </h3>
                <div className="h-px bg-border" />
                <p className="text-fore-dim leading-relaxed flex-1" style={{ fontSize: "0.875rem" }}>
                  {offer.description}
                </p>
                <ul className="flex flex-col gap-1.5 mt-2">
                  {offer.kpis.map((kpi) => (
                    <li key={kpi} className="flex items-center gap-3">
                      <span className="label-mono text-terminal">///</span>
                      <span className="data-mono text-fore-dim">{kpi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-b border-border px-8 py-8">
        <SectionLabel id="TEC" label="TECHNOLOGIES UTILISÉES" className="mb-6" />
        <div className="flex flex-wrap gap-3">
          {[
            "POWER BI",
            "PYTHON / PANDAS",
            "SQL / DATA CLEANING",
            "OPC-UA",
            "CARL SOURCE",
            "INFOR EAM",
            "MODBUS / PROFIBUS",
            "REST API",
            "EXCEL AVANCÉ",
            "SCADA SCHNEIDER",
          ].map((tech) => (
            <div
              key={tech}
              className="border border-border px-4 py-2 flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-accent flex-shrink-0" />
              <span className="data-mono text-fore-dim">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="px-8 py-16 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="label-mono text-accent mb-2">[ DÉMARRER VOTRE TRANSFORMATION DATA ]</p>
          <p
            className="text-fore font-black uppercase"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: "0.95", letterSpacing: "-0.025em", fontFamily: "var(--font-sans)" }}
          >
            PILOTEZ VOTRE
            <br />
            PRODUCTION.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dim transition-colors font-mono text-sm font-medium uppercase tracking-widest text-fore"
        >
          <span className="w-2 h-2 bg-fore" />
          ANALYSER MON PARC MACHINES
        </Link>
      </div>
    </>
  );
}
