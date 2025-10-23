import Header from "@/components/view4sight/Header";
import View4SightFooter from "@/components/view4sight/Footer";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Features - View4Sight | Complete 3D Data Platform",
  description: "Discover all View4Sight features organized by workflow: Visualize, Collaborate, Measure, and Automate your 3D data.",
};

const featureCategories = [
  {
    id: "visualize",
    title: "Visualize",
    description: "Navigate massive 3D datasets like a desktop app. Stream gigabyte point clouds smoothly in any browser.",
    href: "/fonctionnalites/visualize",
    icon: "unicon-eye",
    color: "#FE552E", // Lava Pulse - couleur principale View4Sight
    bgColor: "rgba(254, 85, 46, 0.1)",
    features: ["Streaming Technology", "First-Person Navigation", "Multiple Data Integration", "Universal Format Support"],
  },
  {
    id: "measure",
    title: "Measure",
    description: "Professional measurement tools for surveyors. Extract dimensions, volumes, and profiles with precision.",
    href: "/fonctionnalites/measure",
    icon: "unicon-ruler",
    color: "#3B82F6", // Bleu
    bgColor: "rgba(59, 130, 246, 0.1)",
    features: ["Distance & Area", "Volume Calculation", "Cross Sections", "Elevation Profiles"],
  },
  {
    id: "collaborate",
    title: "Collaborate",
    description: "Share your 3D data with clients and team members. Real-time annotations and secure access control.",
    href: "/fonctionnalites/collaborate",
    icon: "unicon-users-alt",
    color: "#10B981", // Vert
    bgColor: "rgba(16, 185, 129, 0.1)",
    features: ["Secure Sharing", "Real-time Annotations", "Version Control", "Client Presentations"],
  },
  {
    id: "secure",
    title: "Secure",
    description: "Enterprise-grade data protection and hosting in France.",
    href: "/fonctionnalites/secure",
    icon: "unicon-shield-check",
    color: "#6366F1", // Indigo
    bgColor: "rgba(99, 102, 241, 0.1)",
    features: ["ISO 27001", "French Hosting", "GDPR Compliant", "On-Premise Options"],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden">
        <Header />
        <div id="wrapper" className="wrap">
          {/* Hero Section */}
          <div className="hero-header section panel overflow-hidden">
            <div className="section-outer panel pb-10 pt-9 lg:py-10">
              <div className="container max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="vstack items-center gap-2 lg:gap-4 mt-2 sm:mt-4 lg:mt-0 mb-6 lg:mb-8 max-w-750px mx-auto text-center"
                    data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                  >
                    <div className="hero-badge mx-auto">
                      Features
                    </div>
                    <h1 className="h2 sm:h1 lg:display-6 xl:display-4 m-0">
                      Everything You Need <br className="d-none lg:d-block" />
                      For 3D Data Management
                    </h1>
                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                      From visualization to automation, View4Sight provides a complete platform
                      <br className="d-none sm:d-block" />
                      for managing your 3D geospatial data workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Categories Grid */}
          <div className="section panel">
            <div className="section-outer panel py-6 xl:py-8">
              <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="row g-4 lg:g-6">
                  {featureCategories.map((category, i) => (
                    <div key={category.id} className="col-12 sm:col-6">
                      <Link href={category.href} className="text-decoration-none">
                        <div
                          className="feature-card panel p-4 lg:p-6 bg-secondary bg-opacity-5 dark:bg-gray-800 rounded-2 h-100 hover:bg-opacity-10 transition-all"
                          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                        >
                          <div className="vstack gap-3">
                            <div 
                              className="w-64px h-64px rounded-2"
                              style={{ 
                                backgroundColor: category.bgColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <i 
                                className={`icon icon-2 ${category.icon}`}
                                style={{ color: category.color }}
                              ></i>
                            </div>
                            <div className="vstack gap-2">
                              <h3 className="h4 m-0 text-dark dark:text-white">{category.title}</h3>
                              <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                                {category.description}
                              </p>
                            </div>
                            <ul className="vstack gap-1 mt-2">
                              {category.features.map((feature, j) => (
                                <li key={j} className="hstack gap-2 fs-7 text-dark dark:text-white text-opacity-60">
                                  <i 
                                    className="unicon-checkmark-outline fs-6"
                                    style={{ color: category.color }}
                                  ></i>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="hstack gap-1 mt-2">
                              <span className="fw-medium" style={{ color: category.color }}>Learn more</span>
                              <i className="unicon-arrow-right" style={{ color: category.color }}></i>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="section panel">
            <div className="section-outer panel py-6 xl:py-8 bg-secondary dark:bg-gray-800">
              <div className="container max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center"
                    data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                  >
                    <h2 className="h3 sm:h1 xl:display-6 m-0">
                      See View4Sight in Action
                    </h2>
                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
                      Experience how easy 3D data management can be.
                    </p>
                    <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 lg:mt-2">
                      <Link
                        href="/tarifs"
                        className="btn btn-md lg:btn-lg btn-primary text-white"
                      >
                        Start your free trial
                      </Link>
                      <Link
                        href="/page-contact"
                        className="btn btn-md lg:btn-lg dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40"
                      >
                        Request a demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <View4SightFooter />
      </div>
    </>
  );
} 