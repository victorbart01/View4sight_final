import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import HelpCenterHero from "@/components/view4sight/HelpCenterHero";
import HelpCenterFaq from "@/components/view4sight/HelpCenterFaq";
import HelpCenterResources from "@/components/view4sight/HelpCenterResources";

export const generateMetadata = pageMetadata("support");

export default function SupportPage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  
  return (
    <div style={{ backgroundColor: "#0E0E0F" }}>
      <HelpCenterHero locale={locale} />
      <HelpCenterResources locale={locale} />
      <HelpCenterFaq locale={locale} />
    </div>
  );
} 