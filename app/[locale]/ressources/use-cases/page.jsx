import React from "react";
import UseCasesOverview from "@/components/view4sight/UseCasesOverview";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const metadata = {
  title: "Use Cases - View4Sight",
  description: "Découvrez comment les professionnels de différents secteurs utilisent View4Sight pour transformer leurs workflows 3D.",
};

export default function UseCasesPage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <div className="section panel overflow-hidden">
          {/* Section Hero */}
          <div className="section-outer panel pt-6 xl:pt-9 pb-2 xl:pb-3">
            <div className="container max-w-4xl">
              <div className="section-inner panel text-center">
                <div className="hero-badge mx-auto">
                  Industries
                </div>
                <h1 className="h3 lg:h2 xl:h1 m-0 mt-3 mb-4">
                  Trusted Across Multiple Domains
                </h1>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 max-w-2xl mx-auto">
                  View4Sight supports any asset type, from any domain, so you and your clients can make better decisions in real-time.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases Overview */}
          <UseCasesOverview />
          
          {/* CTA Final */}
          <CtaFinal />
        </div>
      </div>
    </>
  );
} 