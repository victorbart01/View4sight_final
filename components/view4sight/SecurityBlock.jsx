"use client";
import React from "react";
import Image from "next/image";

export default function SecurityBlock() {
  const securityFeatures = [
    {
      id: 1,
      icon: "🇫🇷",
      title: "Sovereign Hosting",
      description: "Data centers located in France"
    },
    {
      id: 2,
      icon: "🏢",
      title: "On-premise Option", 
      description: "Complete control for sensitive projects"
    },
    {
      id: 3,
      icon: "🛡️",
      title: "Enterprise-grade Security",
      description: "ISO 27001 certification and robust access controls"
    },
    {
      id: 4,
      icon: "📋",
      title: "GDPR Compliance",
      description: "Built for European privacy standards from day one"
    }
  ];

  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase">
                  Security & Sovereignty
                </span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Your Data Stays Where It Belongs:{" "}
                <span className="d-inline-flex px-1 bg-white text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  In France
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Unlike American cloud solutions, View4Sight keeps your sensitive project data on French soil. 
                ISO 27001 certified infrastructure, GDPR compliant, and built to meet public sector requirements.
              </p>
            </div>

            <div
              className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 300});"
            >
              {securityFeatures.map((feature) => (
                <div key={feature.id}>
                  <div className="panel vstack items-center gap-3 p-4 lg:p-6 rounded-2 bg-white dark:bg-gray-700 text-center h-100">
                    <div className="cstack w-64px h-64px rounded-circle bg-primary-50 dark:bg-primary-900">
                      <span className="fs-2">{feature.icon}</span>
                    </div>
                    <div className="vstack gap-2">
                      <h5 className="h6 lg:h5 m-0">{feature.title}</h5>
                      <p className="fs-7 lg:fs-6 text-dark dark:text-white text-opacity-70 m-0">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div 
              className="panel mt-6 lg:mt-8 p-4 lg:p-6 rounded-2 bg-white dark:bg-gray-700 text-center"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 600;"
            >
              <div className="vstack gap-3">
                <h4 className="h5 lg:h4 m-0">Trusted by French Public Sector</h4>
                <div className="hstack justify-center gap-4 flex-wrap">
                  <div className="hstack gap-2">
                    <i className="icon icon-1 unicon-shield text-success"></i>
                    <span className="fs-7 fw-medium">ISO/CEI 27001 Certified</span>
                  </div>
                  <div className="hstack gap-2">
                    <i className="icon icon-1 unicon-check text-success"></i>
                    <span className="fs-7 fw-medium">GDPR Compliant</span>
                  </div>
                  <div className="hstack gap-2">
                    <i className="icon icon-1 unicon-globe text-primary"></i>
                    <span className="fs-7 fw-medium">French Public Sector Ready</span>
                  </div>
                </div>
                <p className="fs-7 text-dark dark:text-white text-opacity-50 m-0">
                  10+ years experience in laser scanning and photogrammetry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 