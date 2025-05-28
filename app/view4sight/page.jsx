import Hero from "@/components/view4sight/Hero";
import PainBenefits from "@/components/view4sight/PainBenefits";
import MainFeatures from "@/components/view4sight/MainFeatures";
import ClientLogos from "@/components/view4sight/ClientLogos";
import Testimonials from "@/components/view4sight/Testimonials";
import SecurityBlock from "@/components/view4sight/SecurityBlock";
import FaqShort from "@/components/view4sight/FaqShort";
import CtaFinal from "@/components/view4sight/CtaFinal";
import VideoComponent from "@/components/homes/home-6/VideoComponent";
import KeyFeatures from "@/components/homes/home-6/KeyFeatures";

export const metadata = {
  title: "View4Sight - Visualisation 3D et Partage de Nuages de Points",
  description: "Partagez vos nuages de points 3D et fichiers BIM dans n'importe quel navigateur. Solution SaaS française pour géomètres-experts et bureaux d'études.",
};

export default function View4SightHomepage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Client Logos */}
      <ClientLogos />
      
      {/* 3. Main Features x3 */}
      <MainFeatures />
      
      {/* 4. Video Component */}
      <VideoComponent />
      
      {/* 5. Key Features */}
      <KeyFeatures />
      
      {/* 6. Testimonials */}
      <Testimonials />
      
      {/* 7. Security Block */}
      <SecurityBlock />
      
      {/* 8. Pain/Benefits Section */}
      <PainBenefits />
      
      {/* 9. FAQ Short */}
      <FaqShort />
      
      {/* 10. CTA Final */}
      <CtaFinal />
    </>
  );
} 