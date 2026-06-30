import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import Hero from "@/components/view4sight/secure/Hero";
import Features from "@/components/view4sight/secure/Features";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const generateMetadata = pageMetadata("secure");

export default function SecurePage({ params }) {
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