import HelpCenterHero from "@/components/view4sight/HelpCenterHero";
import HelpCenterResources from "@/components/view4sight/HelpCenterResources";
import HelpCenterFaq from "@/components/view4sight/HelpCenterFaq";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const metadata = {
  title: "Support Center - View4Sight",
  description: "Get help and support for View4Sight. Find answers to your questions, explore our guides, and contact our support team.",
};

export default function SupportPage() {
  return (
    <>
      <HelpCenterHero />
      <HelpCenterResources />
      <HelpCenterFaq />
      <CtaFinal />
    </>
  );
} 