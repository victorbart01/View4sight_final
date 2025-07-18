import PricingSection from "@/components/view4sight/PricingSection";
import PricingCompare from "@/components/view4sight/PricingCompare";
import FaqShort from "@/components/view4sight/FaqShort";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const metadata = {
  title: "Pricing - View4Sight",
  description: "Flexible pricing plans for 3D point cloud visualization. Start with a 30-day free trial.",
};

export default function TarifsPage() {
  return (
    <>
      {/* Pricing Component */}
      <PricingSection />

      {/* Pricing Comparison Table */}
      <PricingCompare />

      {/* FAQ Section */}
      <FaqShort />

      {/* CTA Final */}
      <CtaFinal />
    </>
  );
} 