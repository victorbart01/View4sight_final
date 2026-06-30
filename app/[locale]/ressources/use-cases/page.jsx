import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import Link from "next/link";
import UseCasesOverview from "@/components/view4sight/UseCasesOverview";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const generateMetadata = pageMetadata("useCases");

const heroCopy = {
  fr: {
    badge: "Industries",
    title: ["Conçu pour le relevé 3D.", "Adopté dans chaque secteur."],
    subtitle:
      "De l'urbanisme au patrimoine, découvrez comment les professionnels du relevé utilisent View4Sight pour livrer plus vite, réduire leurs coûts et convaincre leurs clients.",
    primary: { label: "Essai gratuit", href: "/sign-up" },
    secondary: { label: "Demander une démo", href: "/page-contact" },
  },
  en: {
    badge: "Industries",
    title: ["Built for 3D surveying.", "Trusted across industries."],
    subtitle:
      "From urban planning to heritage, see how surveying professionals use View4Sight to deliver faster, cut costs and win over their clients.",
    primary: { label: "Start free trial", href: "/sign-up" },
    secondary: { label: "Get in touch", href: "/page-contact" },
  },
};

export default function UseCasesPage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  const copy = heroCopy[locale] || heroCopy.fr;

  return (
    <>
      <div style={{ backgroundColor: "#0E0E0F" }}>
        <div
          style={{
            paddingTop: "80px",
            backgroundColor: "#1C1C1E",
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.5px), linear-gradient(180deg, rgba(14,14,15,0) calc(100% - 130px), #0E0E0F 100%)",
            backgroundSize: "24px 24px, 100% 100%",
          }}
        >
          <div className="section panel overflow-hidden" style={{ backgroundColor: "transparent" }}>
            {/* Section Hero */}
            <div className="section-outer panel pt-6 xl:pt-9 pb-2 xl:pb-3">
            <div className="container max-w-4xl">
              <div className="section-inner panel text-center">
                <div className="hero-badge mx-auto">
                  {copy.badge}
                </div>
                <h1 className="h3 lg:h2 xl:h1 m-0 mt-3 mb-4 max-w-3xl mx-auto">
                  {copy.title[0]}
                  <br />
                  {copy.title[1]}
                </h1>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 mx-auto" style={{ maxWidth: "770px" }}>
                  {copy.subtitle}
                </p>
                <div className="hstack gap-2 mt-4 flex-wrap" style={{ justifyContent: "center" }}>
                  <Link href={copy.primary.href} className="btn btn-md lg:btn-lg btn-primary rounded-pill px-3 lg:px-4 py-2 lg:py-3">
                    <span>{copy.primary.label}</span>
                  </Link>
                  <Link href={copy.secondary.href} className="btn btn-md lg:btn-lg btn-outline-primary rounded-pill px-3 lg:px-4 py-2 lg:py-3">
                    <span>{copy.secondary.label}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>

        {/* Use Cases Overview (on the dark base) */}
        <UseCasesOverview locale={locale} />

        {/* CTA Final (on the dark base) */}
        <CtaFinal />
      </div>
    </>
  );
} 