import Hero from "@/components/view4sight/Hero";
import PainBenefits from "@/components/view4sight/PainBenefits";
import MainFeatures from "@/components/view4sight/MainFeatures";
import ClientLogos from "@/components/view4sight/ClientLogos";
import Testimonials from "@/components/view4sight/Testimonials";
import SecurityBlock from "@/components/view4sight/SecurityBlock";
import FaqShort from "@/components/view4sight/FaqShort";
import CtaFinal from "@/components/view4sight/CtaFinal";
import VideoComponent from "@/components/homes/home-6/VideoComponent";

export const metadata = {
  title: "View4Sight - 3D Point Cloud Visualization & Sharing",
  description: "Share your 3D point clouds and BIM files in any browser. French SaaS solution for surveyors and engineering firms.",
};

export default function View4SightHomepage() {
  return (
    <div style={{backgroundColor: '#0e0e0f', minHeight: '100vh'}}>
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Client Logos */}
      <ClientLogos />
      
      {/* 3. Main Features x3 */}
      <MainFeatures />
      
      {/* 4. Video Component */}
      <VideoComponent />
      
      {/* 5. Testimonials */}
      <Testimonials />
      
      {/* 6. Security Block */}
      <SecurityBlock />
      
      {/* 7. Pain/Benefits Section */}
      <PainBenefits />
      
      {/* 8. FAQ Short */}
      <FaqShort />
      
      {/* 9. CTA Final */}
      <CtaFinal />
    </div>
  );
}
