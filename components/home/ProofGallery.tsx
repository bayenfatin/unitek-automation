import Image from "next/image";

const GALLERY_ITEMS = [
  {
    id: "IMG-01",
    src: "/images/cnc-machine.jpg",
    alt: "Usinage CNC de précision",
    label: "USINAGE CNC",
    sub: "Fraisage haute précision",
  },
  {
    id: "IMG-02",
    src: "/images/cnc-control-panel.jpg",
    alt: "Pupitre de commande numérique industriel",
    label: "COMMANDE NUMÉRIQUE",
    sub: "Pupitre opérateur",
  },
  {
    id: "IMG-03",
    src: "/images/factory-automation.jpg",
    alt: "Automatisation industrielle et robotique",
    label: "AUTOMATISATION",
    sub: "Ligne de production",
  },
  {
    id: "IMG-04",
    src: "/images/pcb-repair.jpg",
    alt: "Réparation de carte électronique industrielle",
    label: "ÉLECTRONIQUE",
    sub: "Réparation cartes",
  },
];

export default function ProofGallery() {
  return (
    <section className="border-b border-border">
      {/* Section header */}
      <div className="border-b border-border px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="label-mono text-accent">[SEC-03]</span>
          <span className="label-mono text-fore-muted">EXPERTISE TERRAIN</span>
        </div>
        <span className="label-mono text-fore-muted">ACTIVITÉS RÉELLES</span>
      </div>

      {/* 4-column image gallery with metadata overlay */}
      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--color-border)" }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <div key={item.id} className="relative group overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            {/* Dark blue gradient */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(180deg, rgba(4,13,30,0.2) 0%, rgba(4,13,30,0.75) 70%, rgba(4,13,30,0.95) 100%)",
              }}
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "rgba(21,88,208,0.15)" }}
            />
            {/* Top label */}
            <div className="absolute top-4 left-4">
              <span className="label-mono text-fore-muted">{item.id}</span>
            </div>
            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                className="text-fore font-black uppercase mb-1"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1",
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {item.label}
              </p>
              <p className="data-mono text-fore-dim">{item.sub}</p>
            </div>
            {/* Accent line bottom — only first item */}
            {i === 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
