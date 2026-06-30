import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const generateMetadata = pageMetadata("docs");

const DOCS_T = {
  fr: {
    badge: "Documentation",
    title: "Documentation technique",
    subtitle: "Guides techniques complets, référence API et documentation d'intégration pour la plateforme View4Sight.",
    gettingStarted: "Prise en main",
    gettingStartedDesc: "Guides de démarrage rapide et tutoriels de base pour bien débuter avec View4Sight.",
    apiReference: "Référence API",
    apiReferenceDesc: "Documentation API complète pour intégrer View4Sight à vos applications.",
    comingSoon: "Bientôt disponible",
  },
  en: {
    badge: "Documentation",
    title: "Technical Documentation",
    subtitle: "Complete technical guides, API reference, and integration documentation for the View4Sight platform.",
    gettingStarted: "Getting Started",
    gettingStartedDesc: "Quick start guides and basic tutorials to get you up and running with View4Sight.",
    apiReference: "API Reference",
    apiReferenceDesc: "Complete API documentation for integrating View4Sight with your applications.",
    comingSoon: "Coming Soon",
  },
};

export default function DocsPage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale === "fr" ? "fr" : "en";
  const td = DOCS_T[locale];
  return (
    <div className="section panel overflow-hidden">
      {/* Hero Section */}
      <div className="section-outer panel pt-6 xl:pt-9 pb-2 xl:pb-3">
        <div className="container max-w-4xl">
          <div className="section-inner panel text-center">
            <div className="hero-badge mx-auto">
              {td.badge}
            </div>
            <h1 className="h3 lg:h2 xl:h1 m-0 mt-3 mb-4">
              {td.title}
            </h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 max-w-2xl mx-auto">
              {td.subtitle}
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
                    {td.gettingStarted}
                  </h3>
                  <p className="text-dark dark:text-white text-opacity-70 m-0">
                    {td.gettingStartedDesc}
                  </p>
                  <div className="hstack gap-2 text-primary">
                    <span className="fs-7 fw-medium">{td.comingSoon}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-12 md:col-6">
              <div className="panel p-4 xl:p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3 h-100">
                <div className="vstack gap-4">
                  <h3 className="h5 text-dark dark:text-white m-0">
                    {td.apiReference}
                  </h3>
                  <p className="text-dark dark:text-white text-opacity-70 m-0">
                    {td.apiReferenceDesc}
                  </p>
                  <div className="hstack gap-2 text-primary">
                    <span className="fs-7 fw-medium">{td.comingSoon}</span>
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