import Features from "@/components/view4sight/measure/Features";
import Hero from "@/components/view4sight/measure/Hero";
import Cta from "@/components/view4sight/measure/Cta";
import React from "react";

export const metadata = {
  title: "Mesurer - View4Sight | Précision topographique dans votre navigateur",
  description: "Mesure 3D au centimètre sur nuages de points, maillages et BIM. Distances, surfaces, volumes, coupes et profils calculés de façon reproductible pour vos contrôles.",
};

export default function MeasurePage() {
  return (
    <>
      <Hero />
      <Features />
      <Cta />
    </>
  );
} 