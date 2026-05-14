interface SectionLabelProps {
  id: string;
  label: string;
  className?: string;
}

export default function SectionLabel({ id, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="label-mono text-accent">[{id}]</span>
      <span className="label-mono">{label}</span>
      <span className="flex-1 h-px bg-border" />
    </div>
  );
}
