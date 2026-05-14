import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-fore border border-accent hover:bg-accent-dim hover:border-accent-dim",
  secondary:
    "bg-transparent text-fore border border-border hover:border-fore-dim",
  ghost:
    "bg-transparent text-fore-dim border border-transparent hover:text-fore hover:border-border",
};

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-3 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-colors duration-150 cursor-pointer select-none";
  const combined = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combined}
    >
      {children}
    </button>
  );
}
