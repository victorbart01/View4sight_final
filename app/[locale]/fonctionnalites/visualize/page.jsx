import React from "react";
import Hero from "@/components/view4sight/visualize/Hero";
import Features from "@/components/view4sight/visualize/Features";
import Cta from "@/components/view4sight/visualize/Cta";

export const metadata = {
  title: "Visualiser - View4Sight | Visualisez des projets 3D massifs en ligne, en toute fluidité",
  description: "Streamez des nuages de points de plusieurs gigaoctets directement dans le navigateur. Aucun plugin, aucun téléchargement, sans compromis sur les performances.",
};

export default function VisualizePage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  
  return (
    <>
      <Hero />
      <Features />
      <Cta />
    </>
  );
} 