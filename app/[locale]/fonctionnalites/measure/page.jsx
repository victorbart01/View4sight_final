import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import Hero from "@/components/view4sight/measure/Hero";
import Features from "@/components/view4sight/measure/Features";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const generateMetadata = pageMetadata("measure");

export default function MeasurePage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  
  return (
    <>
      <Hero />
      <Features />
      <CtaFinal />
    </>
  );
} 