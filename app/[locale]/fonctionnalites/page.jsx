import React from "react";
import Link from "next/link";
import Image from "next/image";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const metadata = {
  title: "Features - View4Sight",
  description: "Discover all View4Sight features for 3D point cloud visualization and collaboration.",
};

const features = [
  {
    title: "Visualize",
    description: "Navigate massive 3D datasets like a desktop app, directly in your browser.",
    icon: "/assets/images/custom-icons/visualisation-3d.svg",
    href: "/fonctionnalites/visualize",
    color: "primary"
  },
  {
    title: "Measure",
    description: "Survey-grade precision with professional measurement tools.",
    icon: "/assets/images/custom-icons/mesure-annotations.svg",
    href: "/fonctionnalites/measure",
    color: "success"
  },
  {
    title: "Collaborate",
    description: "Work together in real-time from anywhere in the world.",
    icon: "/assets/images/custom-icons/collaboration.svg",
    href: "/fonctionnalites/collaborate",
    color: "info"
  },
  {
    title: "Secure",
    description: "Enterprise-grade security with complete data control.",
    icon: "/assets/images/custom-icons/upload-share.svg",
    href: "/fonctionnalites/secure",
    color: "warning"
  }
];

export default function FeaturesPage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  
  return (
    <div className="section panel overflow-hidden">
      {/* Hero Section */}
      <div className="section-outer panel pt-6 xl:pt-9 pb-2 xl:pb-3">
        <div className="container max-w-4xl">
          <div className="section-inner panel text-center">
            <div className="hero-badge mx-auto">
              Features
            </div>
            <h1 className="h3 lg:h2 xl:h1 m-0 mt-3 mb-4">
              Powerful 3D Visualization Platform
            </h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 max-w-2xl mx-auto">
              Everything you need to visualize, measure, collaborate, and share your 3D point cloud data.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-6xl">
          <div className="row gy-4 xl:gy-6">
            {features.map((feature, index) => (
              <div key={index} className="col-12 md:col-6">
                <Link href={feature.href} className="text-decoration-none">
                  <div className="panel p-4 xl:p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3 h-100 hover:shadow-lg transition-all duration-300 hover:border-primary hover:border-opacity-20">
                    <div className="vstack gap-4">
                      <div className="hstack gap-4">
                        <div className={`w-16 h-16 bg-${feature.color} bg-opacity-10 rounded-2 d-flex align-items-center justify-content-center flex-shrink-0`}>
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={28}
                            height={28}
                          />
                        </div>
                        <div className="vstack gap-1">
                          <h3 className="h5 text-dark dark:text-white m-0">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-dark dark:text-white text-opacity-70 m-0">
                        {feature.description}
                      </p>
                      <div className="hstack gap-2 text-primary">
                        <span className="fs-7 fw-medium">Learn More</span>
                        <i className="unicon-arrow-right fs-8"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <CtaFinal />
    </div>
  );
} 