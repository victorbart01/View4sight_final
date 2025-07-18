"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function KpiStrip() {
  const { t, isLoading } = useTranslation();

  if (isLoading) {
    return (
      <div className="section panel">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  // Get first 3 KPIs from translations (excluding storage)
  const kpis = t('kpi_strip').slice(0, 3).map((kpi, index) => ({
    id: index + 1,
    value: kpi.value,
    description: kpi.description,
    animation: [
      "onview: -100; targets: this; textContent: [0, 30]; easing: easeOutCubic; duration: 1000; delay: 200;",
      "onview: -100; targets: this; textContent: [0, 50]; easing: easeOutCubic; duration: 1000; delay: 400;",
      "onview: -100; targets: this; textContent: [0, 80]; easing: easeOutCubic; duration: 1000; delay: 600;"
    ][index]
  }));

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
                <div className="row child-cols-4 col-match g-4 text-center justify-content-center">
                  {kpis.map((kpi) => (
                    <div key={kpi.id}>
                      <div className="panel vstack gap-1">
                        <h4 className="h2 xl:display-5 m-0 text-primary">
                          <span data-anime={kpi.animation}>{kpi.value.replace('%', '')}</span>
                          <span className="fs-4">%</span>
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