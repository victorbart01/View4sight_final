import Features from "@/components/view4sight/secure/Features";
import Hero from "@/components/view4sight/secure/Hero";
import Cta from "@/components/view4sight/secure/Cta";
import React from "react";

export const metadata = {
  title: "Sécurité - View4Sight | Données sécurisées et souveraines",
  description: "Pendant que d'autres envoient vos données à l'étranger, View4Sight les garde à la maison. Certifié ISO, RGPD natif, approuvé par le secteur public.",
};

export default function SecurePage() {
  return (
    <>
      <Hero />
      <Features />
      <Cta />
    </>
  );
} 