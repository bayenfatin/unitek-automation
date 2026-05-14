"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY_INFO } from "@/lib/data";

const urgencyLevels = [
  { id: "URG-1", label: "URGENCE — PRODUCTION À L'ARRÊT", value: "urgence" },
  { id: "URG-2", label: "PANNE EN COURS — PRODUCTION DÉGRADÉE", value: "panne" },
  { id: "URG-3", label: "PROJET RÉTROFIT / MODERNISATION", value: "retrofit" },
  { id: "URG-4", label: "AUDIT DATA / MAINTENANCE 4.0", value: "data" },
];

const machineTypes = [
  "CENTRE D'USINAGE",
  "TOUR CNC",
  "FRAISEUSE",
  "RECTIFIEUSE",
  "ALÉSEUSE",
  "LIGNE DE PRODUCTION",
  "AUTRE",
];

const cncBrands = [
  "SIEMENS SINUMERIK",
  "FANUC",
  "NUM",
  "HEIDENHAIN",
  "SCHNEIDER",
  "BOSCH REXROTH",
  "MITSUBISHI",
  "AUTRE / INCONNU",
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [urgency, setUrgency] = useState("");
  const [machine, setMachine] = useState("");
  const [brand, setBrand] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: "1fr 420px",
        gap: "1px",
        background: "var(--color-border)",
        minHeight: "calc(100vh - 200px)",
      }}
    >
      {/* Form area */}
      <div className="bg-surface p-8 lg:p-12">
        {sent ? (
          <div className="flex flex-col items-start gap-6 py-16">
            <span className="label-mono text-terminal">[ DEMANDE TRANSMISE ]</span>
            <h2
              className="text-fore font-black uppercase"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: "0.92",
                letterSpacing: "-0.035em",
                fontFamily: "var(--font-sans)",
              }}
            >
              DEMANDE
              <br />
              ENREGISTRÉE.
            </h2>
            <div className="h-px w-full bg-border" />
            <p
              className="text-fore-dim leading-relaxed max-w-md"
              style={{ fontSize: "0.95rem" }}
            >
              Notre équipe technique a reçu votre demande. En cas d&rsquo;urgence
              production, nous vous rappelons sous 30 minutes. Pour les projets,
              sous 24h.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-6 py-3 border border-border hover:border-fore-muted transition-colors font-mono text-xs font-medium uppercase tracking-widest text-fore"
            >
              ← RETOUR À L&rsquo;ACCUEIL
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <p className="label-mono text-accent mb-2">[ ÉTAPE {step} / 3 ]</p>
              <div className="flex gap-1 mb-6">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className="h-0.5 flex-1 transition-colors"
                    style={{
                      background:
                        s <= step
                          ? "var(--color-accent)"
                          : "var(--color-border)",
                    }}
                  />
                ))}
              </div>
            </div>

            {step === 1 && (
              <div className="flex flex-col gap-4">
                <h2
                  className="text-fore font-black uppercase"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    lineHeight: "0.95",
                    letterSpacing: "-0.025em",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  QUELLE EST VOTRE
                  <br />
                  SITUATION ?
                </h2>
                <p className="data-mono text-fore-muted mb-4">
                  Sélectionnez le niveau d&rsquo;urgence
                </p>
                <div className="flex flex-col gap-2">
                  {urgencyLevels.map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => {
                        setUrgency(level.value);
                        setStep(2);
                      }}
                      className="flex items-center justify-between border transition-colors px-5 py-4 text-left group cursor-pointer"
                      style={{
                        borderColor:
                          urgency === level.value
                            ? "var(--color-accent)"
                            : "var(--color-border)",
                        background:
                          urgency === level.value
                            ? "var(--color-surface-1)"
                            : "transparent",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="label-mono text-fore-muted">
                          {level.id}
                        </span>
                        <span
                          className="font-mono text-xs text-fore uppercase"
                          style={{ letterSpacing: "0.06em" }}
                        >
                          {level.label}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-fore-muted group-hover:text-accent transition-colors">
                        ///
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-4">
                <h2
                  className="text-fore font-black uppercase"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    lineHeight: "0.95",
                    letterSpacing: "-0.025em",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  TYPE DE MACHINE
                  <br />
                  CONCERNÉE ?
                </h2>
                <p className="data-mono text-fore-muted mb-4">
                  Sélectionnez le type d&rsquo;équipement
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {machineTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setMachine(type);
                        setStep(3);
                      }}
                      className="flex items-center gap-3 border transition-colors px-4 py-3 text-left cursor-pointer"
                      style={{
                        borderColor:
                          machine === type
                            ? "var(--color-accent)"
                            : "var(--color-border)",
                        background:
                          machine === type
                            ? "var(--color-surface-1)"
                            : "transparent",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 flex-shrink-0"
                        style={{
                          background:
                            machine === type
                              ? "var(--color-accent)"
                              : "var(--color-fore-muted)",
                        }}
                      />
                      <span className="font-mono text-xs text-fore uppercase tracking-wider">
                        {type}
                      </span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="label-mono text-fore-muted hover:text-fore transition-colors text-left mt-2 cursor-pointer"
                >
                  ← RETOUR
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-6">
                <h2
                  className="text-fore font-black uppercase"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    lineHeight: "0.95",
                    letterSpacing: "-0.025em",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  VOS COORDONNÉES
                  <br />& DÉTAILS.
                </h2>

                <div className="flex flex-col gap-1">
                  <label className="label-mono text-fore-muted">MARQUE CNC</label>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="border border-border bg-surface text-fore font-mono text-xs uppercase px-4 py-3 focus:border-fore-muted outline-none appearance-none tracking-wider cursor-pointer"
                    required
                  >
                    <option value="">SÉLECTIONNER...</option>
                    {cncBrands.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="label-mono text-fore-muted">
                      NOM / PRÉNOM *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="JEAN DUPONT"
                      className="border border-border bg-surface text-fore font-mono text-xs uppercase px-4 py-3 focus:border-fore-muted outline-none placeholder:text-fore-muted tracking-wider"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="label-mono text-fore-muted">
                      ENTREPRISE *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MA SOCIÉTÉ SAS"
                      className="border border-border bg-surface text-fore font-mono text-xs uppercase px-4 py-3 focus:border-fore-muted outline-none placeholder:text-fore-muted tracking-wider"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="label-mono text-fore-muted">
                      TÉLÉPHONE *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 XX XX XX XX"
                      className="border border-border bg-surface text-fore font-mono text-xs uppercase px-4 py-3 focus:border-fore-muted outline-none placeholder:text-fore-muted tracking-wider"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="label-mono text-fore-muted">EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="NOM@SOCIETE.FR"
                      className="border border-border bg-surface text-fore font-mono text-xs lowercase px-4 py-3 focus:border-fore-muted outline-none placeholder:text-fore-muted tracking-wider"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="label-mono text-fore-muted">
                    DESCRIPTION DE LA PANNE / DU BESOIN *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="DÉCRIRE ICI LE SYMPTÔME, LA MACHINE, L'ALARME AFFICHÉE..."
                    className="border border-border bg-surface text-fore font-mono text-xs uppercase px-4 py-3 focus:border-fore-muted outline-none placeholder:text-fore-muted tracking-wider resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-accent hover:bg-accent-dim transition-colors font-mono text-sm font-medium uppercase tracking-widest text-fore cursor-pointer"
                >
                  <span className="w-2 h-2 bg-fore" />
                  ENVOYER LA DEMANDE
                </button>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="label-mono text-fore-muted hover:text-fore transition-colors text-left cursor-pointer"
                >
                  ← RETOUR
                </button>
              </div>
            )}
          </form>
        )}
      </div>

      {/* Right sidebar — contact info */}
      <div className="bg-surface-1 flex flex-col">
        <div className="border-b border-border px-6 py-4">
          <p className="label-mono text-fore-muted">[ COORDONNÉES DIRECTES ]</p>
        </div>

        <div className="flex flex-col divide-y divide-border">
          <div className="px-6 py-5">
            <p className="label-mono text-accent mb-2">URGENCES 24/7</p>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="data-mono text-fore hover:text-accent transition-colors"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
          <div className="px-6 py-5">
            <p className="label-mono text-accent mb-2">EMAIL</p>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="data-mono text-fore hover:text-accent transition-colors text-xs"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
          <div className="px-6 py-5">
            <p className="label-mono text-accent mb-2">LOCALISATION</p>
            <p className="data-mono text-fore-dim leading-relaxed text-xs">
              {COMPANY_INFO.city}
              <br />
              {COMPANY_INFO.department}
              <br />
              {COMPANY_INFO.coords}
            </p>
          </div>
          <div className="px-6 py-5">
            <p className="label-mono text-accent mb-3">DÉLAIS DE RÉPONSE</p>
            <div className="flex flex-col gap-2">
              {[
                { type: "URGENCE PRODUCTION", delay: "< 30 MIN" },
                { type: "PANNE DÉGRADÉE", delay: "< 2H" },
                { type: "PROJET / AUDIT", delay: "< 24H" },
              ].map((item) => (
                <div key={item.type} className="flex items-center justify-between">
                  <span
                    className="data-mono text-fore-muted"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {item.type}
                  </span>
                  <span
                    className="data-mono text-terminal"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {item.delay}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto border-t border-border px-6 py-4">
          <p className="label-mono text-fore-muted">
            {COMPANY_INFO.unit} — {COMPANY_INFO.rev}
          </p>
        </div>
      </div>
    </div>
  );
}
