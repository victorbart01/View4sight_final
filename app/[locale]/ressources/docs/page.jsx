import Link from "next/link";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const metadata = {
  title: "Documentation - View4Sight",
  description: "Technical documentation and API reference for View4Sight platform.",
};

export default function DocsPage({ params }) {
  return (
    <div className="section panel overflow-hidden">
      {/* Hero Section */}
      <div className="section-outer panel pt-6 xl:pt-9 pb-2 xl:pb-3">
        <div className="container max-w-4xl">
          <div className="section-inner panel text-center">
            <div className="hero-badge mx-auto">
              Documentation
            </div>
            <h1 className="h3 lg:h2 xl:h1 m-0 mt-3 mb-4">
              Technical Documentation
            </h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 max-w-2xl mx-auto">
              Complete technical guides, API reference, and integration documentation for View4Sight platform.
            </p>
          </div>
        </div>
      </div>

      {/* Documentation Categories */}
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-6xl">
          <div className="row gy-4 xl:gy-6">
            <div className="col-12 md:col-6">
              <div className="panel p-4 xl:p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3 h-100">
                <div className="vstack gap-4">
                  <h3 className="h5 text-dark dark:text-white m-0">
                    Getting Started
                  </h3>
                  <p className="text-dark dark:text-white text-opacity-70 m-0">
                    Quick start guides and basic tutorials to get you up and running with View4Sight.
                  </p>
                  <div className="hstack gap-2 text-primary">
                    <span className="fs-7 fw-medium">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-12 md:col-6">
              <div className="panel p-4 xl:p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3 h-100">
                <div className="vstack gap-4">
                  <h3 className="h5 text-dark dark:text-white m-0">
                    API Reference
                  </h3>
                  <p className="text-dark dark:text-white text-opacity-70 m-0">
                    Complete API documentation for integrating View4Sight with your applications.
                  </p>
                  <div className="hstack gap-2 text-primary">
                    <span className="fs-7 fw-medium">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <CtaFinal />
    </div>
  );
} 