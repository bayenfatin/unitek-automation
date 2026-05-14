import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/data";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-surface">
      {/* Top info bar */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "1fr auto" }}>
        <div className="px-6 py-1.5 border-r border-border">
          <span className="label-mono text-fore-muted">
            {COMPANY_INFO.city} ({COMPANY_INFO.department}) — {COMPANY_INFO.rev} — EX. {COMPANY_INFO.legacy}
          </span>
        </div>
        <div className="px-6 py-1.5">
          <span className="label-mono text-fore-muted">{COMPANY_INFO.unit}</span>
        </div>
      </div>

      {/* Main nav row */}
      <div
        className="grid items-stretch"
        style={{ gridTemplateColumns: "260px 1fr auto" }}
      >
        {/* Logo zone */}
        <Link
          href="/"
          className="px-6 py-3 border-r border-border flex flex-col justify-center gap-1 hover:bg-surface-1 transition-colors"
        >
          <Image
            src="/unitek-logo.png"
            alt="Unitek Automation"
            width={140}
            height={40}
            className="object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
            priority
          />
          <span className="label-mono text-fore-muted">AUTOMATION</span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-stretch overflow-x-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="flex flex-col justify-center px-5 py-3 border-r border-border hover:bg-surface-1 transition-colors group flex-shrink-0"
            >
              <span className="label-mono text-fore-muted group-hover:text-accent transition-colors">
                {link.id}
              </span>
              <span
                className="font-mono text-xs font-medium text-fore uppercase mt-0.5 group-hover:text-accent-light transition-colors"
                style={{ letterSpacing: "0.05em" }}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Urgence CTA */}
        <a
          href="/contact"
          className="flex items-center gap-3 px-6 py-3 bg-accent hover:bg-accent-dim transition-colors h-full flex-shrink-0"
        >
          <span
            className="font-mono text-xs font-medium text-fore uppercase"
            style={{ letterSpacing: "0.1em" }}
          >
            URGENCE ///
          </span>
        </a>
      </div>
    </header>
  );
}
