import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Urgence CNC",
  description:
    "Déclenchez une intervention d'urgence ou qualifiez votre besoin en maintenance industrielle. Formulaire intelligent : type de machine, marque CNC, niveau d'urgence.",
};

export default function ContactPage() {
  return (
    <>
      <div className="border-b border-border px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="label-mono text-accent">[SVC-04]</span>
          <span className="label-mono text-fore-muted">
            TUNNEL DE QUALIFICATION — CONTACT
          </span>
        </div>
        <Link
          href="/"
          className="label-mono text-fore-muted hover:text-fore transition-colors"
        >
          ← ACCUEIL
        </Link>
      </div>
      <ContactForm />
    </>
  );
}
