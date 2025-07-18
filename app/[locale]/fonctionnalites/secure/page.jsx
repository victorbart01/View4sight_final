import React from "react";
import Hero from "@/components/view4sight/secure/Hero";
import Features from "@/components/view4sight/secure/Features";
import Cta from "@/components/view4sight/secure/Cta";

export const metadata = {
  title: "Secure - View4Sight",
  description: "Enterprise-grade security with complete data control.",
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