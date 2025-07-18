import React from "react";
import CareerHero from "@/components/view4sight/CareerHero";
import CareerOpenings from "@/components/view4sight/CareerOpenings";

export const metadata = {
  title: "Careers - View4Sight | Join Our Team",
  description: "Rejoignez View4Sight et aidez à révolutionner la visualisation de données 3D pour l'industrie de l'arpentage. Explorez les opportunités de carrière dans notre équipe innovante.",
};

export default function CareersPage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <CareerHero />
        <CareerOpenings />
      </div>
    </>
  );
} 