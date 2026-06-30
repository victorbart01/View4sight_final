import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import CareerHero from "@/components/view4sight/CareerHero";
import CareerOpenings from "@/components/view4sight/CareerOpenings";

export const generateMetadata = pageMetadata("careers");

export default function CareersPage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  
  return (
    <div style={{ backgroundColor: "#0E0E0F" }}>
      <CareerHero />
      <CareerOpenings />
    </div>
  );
} 