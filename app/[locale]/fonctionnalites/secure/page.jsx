import React from "react";
import Hero from "@/components/view4sight/secure/Hero";
import Features from "@/components/view4sight/secure/Features";
import Cta from "@/components/view4sight/secure/Cta";

export const metadata = {
  title: "Sécurité - View4Sight | Données sécurisées et souveraines",
  description: "Pendant que d'autres envoient vos données à l'étranger, View4Sight les garde à la maison. Certifié ISO, RGPD natif, approuvé par le secteur public.",
};

export default function SecurePage({ params }) {
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