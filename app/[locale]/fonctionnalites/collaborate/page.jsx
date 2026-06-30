import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import Hero from "@/components/view4sight/collaborate/Hero";
import Features from "@/components/view4sight/collaborate/Features";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const generateMetadata = pageMetadata("collaborate");

export default function CollaboratePage({ params }) {
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