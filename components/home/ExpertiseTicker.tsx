import { CNC_BRANDS } from "@/lib/data";

export default function ExpertiseTicker() {
  const doubled = [...CNC_BRANDS, ...CNC_BRANDS];

  return (
    <section className="border-b border-border overflow-hidden bg-surface-1">
      <div className="border-b border-border px-6 py-2 flex items-center justify-between">
        <span className="label-mono text-fore-muted">[ SYSTÈMES CNC MAÎTRISÉS ]</span>
        <span className="label-mono text-fore-muted">EXPERTISE MULTIMARQUE</span>
      </div>

      <div className="relative py-5 overflow-hidden">
        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex items-center gap-0 flex-shrink-0"
            >
              <span
                className="font-black text-fore uppercase px-8"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
                  letterSpacing: "-0.01em",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {brand}
              </span>
              <span
                className="text-accent font-black flex-shrink-0"
                style={{ fontSize: "0.8rem" }}
                aria-hidden="true"
              >
                ·
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
