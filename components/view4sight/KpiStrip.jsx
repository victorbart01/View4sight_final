"use client";
import React from "react";

export default function KpiStrip() {
  const kpis = [
    {
      id: 1,
      value: "30%",
      description: "Reduction in client validation time",
      animation: "onview: -100; targets: this; textContent: [0, 30]; easing: easeOutCubic; duration: 1000; delay: 200;"
    },
    {
      id: 2,
      value: "50%",
      description: "Fewer site visits required",
      animation: "onview: -100; targets: this; textContent: [0, 50]; easing: easeOutCubic; duration: 1000; delay: 400;"
    },
    {
      id: 3,
      value: "80%",
      description: "Clearer communication with stakeholders",
      animation: "onview: -100; targets: this; textContent: [0, 80]; easing: easeOutCubic; duration: 1000; delay: 600;"
    },
    {
      id: 4,
      value: "150GB",
      description: "Free storage included",
      animation: "onview: -100; targets: this; textContent: [0, 150]; easing: easeOutCubic; duration: 1000; delay: 800;"
    }
  ];

  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-gray-800">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 lg:gap-6">
              <h2
                className="h4 sm:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Proven Results for Geospatial Professionals
              </h2>
              
              <div
                className="panel p-5 lg:py-9 rounded-2 bg-white dark:bg-gray-800"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                <div className="row child-cols-6 lg:child-cols-4 col-match g-4 text-center">
                  {kpis.map((kpi) => (
                    <div key={kpi.id}>
                      <div className="panel vstack gap-1">
                        <h4 className="h2 xl:display-5 m-0 text-primary">
                          {kpi.id === 4 ? (
                            <>
                              <span data-anime={kpi.animation}>150</span>
                              <span className="fs-4">GB</span>
                            </>
                          ) : (
                            <>
                              <span data-anime={kpi.animation}>{kpi.value.replace('%', '')}</span>
                              <span className="fs-4">%</span>
                            </>
                          )}
                        </h4>
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                          {kpi.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials section */}
              <div 
                className="panel text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 400;"
              >
                <div className="hstack justify-center gap-4 flex-wrap">
                  <div className="hstack gap-2">
                    <i className="icon icon-1 unicon-shield text-success"></i>
                    <span className="fs-7 fw-medium">ISO 27001 Certified</span>
                  </div>
                  <div className="hstack gap-2">
                    <span className="fs-7 fw-medium">🇫🇷</span>
                    <span className="fs-7 fw-medium">Hosted in France</span>
                  </div>
                  <div className="hstack gap-2">
                    <i className="icon icon-1 unicon-check text-success"></i>
                    <span className="fs-7 fw-medium">GDPR Compliant</span>
                  </div>
                  <div className="hstack gap-2">
                    <i className="icon icon-1 unicon-users text-primary"></i>
                    <span className="fs-7 fw-medium">10+ years experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 