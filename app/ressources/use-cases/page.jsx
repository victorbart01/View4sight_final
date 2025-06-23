import Link from "next/link";
import View4SightHeader from "@/components/view4sight/Header";
import View4SightFooter from "@/components/view4sight/Footer";
import UseCasesOverview from "@/components/view4sight/UseCasesOverview";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const metadata = {
  title: "Use Cases - View4Sight",
  description: "Discover how professionals across different industries use View4Sight to transform their 3D workflows.",
};

export default function UseCasesPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <View4SightHeader />
        <div id="wrapper" className="wrap" style={{ marginTop: "80px" }}>
          <div className="section panel overflow-hidden">
            {/* Hero Section */}
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
        <View4SightFooter />
      </div>
    </>
  );
} 