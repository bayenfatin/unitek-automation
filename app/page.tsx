import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import ProofGallery from "@/components/home/ProofGallery";
import ExpertiseTicker from "@/components/home/ExpertiseTicker";
import CallToAction from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Unitek Automation — Maintenance Industrielle CNC & Maintenance 4.0",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <ProofGallery />
      <ExpertiseTicker />
      <CallToAction />
    </>
  );
}
