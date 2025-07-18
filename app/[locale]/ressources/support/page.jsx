import React from "react";
import HelpCenterHero from "@/components/view4sight/HelpCenterHero";
import HelpCenterFaq from "@/components/view4sight/HelpCenterFaq";
import HelpCenterResources from "@/components/view4sight/HelpCenterResources";

export const metadata = {
  title: "Support - View4Sight",
  description: "Get help and support for View4Sight. Find answers to your questions and contact our support team.",
};

export default function SupportPage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  
  return (
    <>
      <HelpCenterHero />
      <HelpCenterFaq />
      <HelpCenterResources />
    </>
  );
} 