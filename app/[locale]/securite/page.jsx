import React from "react";
import Hero from "@/components/view4sight/secure/Hero";
import Features from "@/components/view4sight/secure/Features";
import Cta from "@/components/view4sight/secure/Cta";

export const metadata = {
  title: "Security - View4Sight",
  description: "Enterprise-grade security with French data hosting. Learn about our security measures and compliance.",
};

export default function SecurityPage({ params }) {
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