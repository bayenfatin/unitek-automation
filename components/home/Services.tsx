import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data";

const SERVICE_IMAGES: Record<string, string> = {
  "SVC-01": "/images/cnc-machine.jpg",
  "SVC-02": "/images/industrial-workshop.jpg",
  "SVC-03": "/images/factory-automation.jpg",
  "SVC-04": "/images/pcb-repair.jpg",
};

export default function Services() {
  return (
    <section className="border-b border-border">
      {/* Section header */}
      <div className="border-b border-border px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="label-mono text-accent">[SEC-02]</span>
          <span className="label-mono text-fore-muted">OFFRES DE SERVICE</span>
        </div>
        <span className="label-mono text-fore-muted">4 MODULES OPÉRATIONNELS</span>
      </div>

      {/* Services grid — 2×2 with 1px gap blueprint */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "1px",
          background: "var(--color-border)",
        }}
      >
        {SERVICES.map((svc) => (
          <ServiceCard key={svc.id} service={svc} imageUrl={SERVICE_IMAGES[svc.id]} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  imageUrl,
}: {
  service: (typeof SERVICES)[number];
  imageUrl: string;
}) {
  return (
    <div className="bg-surface flex flex-col group relative overflow-hidden">
      {/* Image header */}
      <div className="relative h-48 overflow-hidden border-b border-border">
        <Image
          src={imageUrl}
          alt={service.title.replace(/\n/g, " ")}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Blue gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(4,13,30,0.3) 0%, rgba(4,13,30,0.85) 100%)",
          }}
        />
        {/* Blue accent top line for primary service */}
        {service.accent && (
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
        )}
        {/* Image label */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
          <span className="label-mono text-accent">{service.id}</span>
          <span className="label-mono text-fore-muted">/ {service.subtitle}</span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-8 lg:p-10">
        {/* Index number */}
        <div className="flex items-start justify-between mb-4">
          <span
            className="font-black text-border"
            style={{
              fontSize: "3rem",
              lineHeight: "1",
              letterSpacing: "-0.05em",
              fontFamily: "var(--font-sans)",
            }}
            aria-hidden="true"
          >
            {service.index}
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-fore font-black uppercase mb-4"
          style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
            lineHeight: "0.95",
            letterSpacing: "-0.025em",
            fontFamily: "var(--font-sans)",
            whiteSpace: "pre-line",
          }}
        >
          {service.title}
        </h2>

        {/* Divider */}
        <div className="h-px bg-border mb-4" />

        {/* Description */}
        <p
          className="text-fore-dim leading-relaxed mb-6 flex-1"
          style={{ fontSize: "0.9rem" }}
        >
          {service.description}
        </p>

        {/* Capabilities list */}
        <ul className="flex flex-col gap-1.5 mb-8">
          {service.capabilities.map((cap) => (
            <li key={cap} className="flex items-center gap-3">
              <span className="label-mono text-accent">///</span>
              <span className="data-mono text-fore-dim">{cap}</span>
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <Link
          href={service.href}
          className="flex items-center justify-between border border-border hover:border-accent group/link transition-colors px-4 py-3"
        >
          <span className="font-mono text-xs text-fore-dim group-hover/link:text-fore transition-colors uppercase tracking-widest">
            VOIR LE MODULE
          </span>
          <span className="font-mono text-xs text-fore-dim group-hover/link:text-accent transition-colors">
            ///
          </span>
        </Link>
      </div>
    </div>
  );
}
