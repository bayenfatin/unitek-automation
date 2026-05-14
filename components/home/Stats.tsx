import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section className="border-b border-border">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${STATS.length}, 1fr)`, gap: "1px", background: "var(--color-border)" }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.id}
            className="bg-surface flex flex-col justify-between p-8 lg:p-10 relative"
          >
            {/* Corner cross */}
            {i === 0 && (
              <span
                className="absolute top-3 left-3 font-mono text-xs text-border"
                aria-hidden="true"
              >
                +
              </span>
            )}

            <div className="flex flex-col gap-1">
              <span className="label-mono text-fore-muted">{stat.id}</span>
            </div>

            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-fore font-black"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 5rem)",
                    lineHeight: "0.9",
                    letterSpacing: "-0.04em",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {stat.value}
                </span>
                <span className="label-mono text-accent">{stat.unit}</span>
              </div>
              <p className="data-mono text-fore-muted mt-3">{stat.label}</p>
            </div>

            {/* Bottom accent line for first stat */}
            {i === 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
