import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import Hero from "@/components/view4sight/visualize/Hero";
import Features from "@/components/view4sight/visualize/Features";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const generateMetadata = pageMetadata("visualize");

export default function VisualizePage({ params }) {
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