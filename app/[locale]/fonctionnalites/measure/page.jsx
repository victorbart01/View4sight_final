import React from "react";
import Hero from "@/components/view4sight/measure/Hero";
import Features from "@/components/view4sight/measure/Features";
import Cta from "@/components/view4sight/measure/Cta";

export const metadata = {
  title: "Measure - View4Sight",
  description: "Survey-grade precision with professional measurement tools.",
};

export default function MeasurePage({ params }) {
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