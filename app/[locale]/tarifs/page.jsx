import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import PricingSection from "@/components/view4sight/PricingSection";
import PricingCompare from "@/components/view4sight/PricingCompare";
import FaqShort from "@/components/view4sight/FaqShort";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const generateMetadata = pageMetadata("tarifs");

export default function TarifsPage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  
  return (
    <div style={{ backgroundColor: "#0E0E0F" }}>
      {/* Pricing Component */}
      <PricingSection />

      {/* Pricing Comparison Table */}
      <PricingCompare />

      {/* FAQ Section */}
      <FaqShort />

      {/* CTA Final */}
      <CtaFinal />
    </div>
  );
} 