"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function Features() {
  const { t } = useTranslation();

  const secureFeatures = [
    {
      id: "french-sovereignty",
      icon: "/assets/images/custom-icons/shield-check-bold.svg",
      iconBg: "#E3F2FD",
      iconColor: "#1976D2",
      imgSrc: "/assets/images/cartefrance.svg",
      altText: "Hébergement souverain en France",
    },
    {
      id: "user-permissions",
      icon: "/assets/images/custom-icons/lock-key-bold.svg",
      iconBg: "#FFF3E0",
      iconColor: "#F57C00",
      imgSrc: "/assets/images/secure_home.svg",
      altText: "Permissions utilisateur granulaires",
    },
    {
      id: "on-premise",
      icon: "/assets/images/custom-icons/hard-drives-bold.svg",
      iconBg: "#E8F5E9",
      iconColor: "#388E3C",
      imgSrc: "/assets/images/on-premise 1.svg",
      altText: "Option de déploiement on‑premise",
    },
    {
      id: "data-export",
      icon: "/assets/images/custom-icons/download-simple-bold.svg",
      iconBg: "#F3E5F5",
      iconColor: "#7B1FA2",
      imgSrc: "/assets/images/GDPR.svg",
      altText: "Conformité GDPR et export sécurisé",
    }
  ];
  return (
    <div id="main_features" className="main-features section panel">
              <div className="section-outer panel py-8 lg:py-10 xl:py-12 uc-secure-feat" style={{ backgroundColor: '#0e0e0e' }}>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack">
              {secureFeatures.map((feature, i) => (
                <div
                  key={feature.id}
                  className="feature-item panel"
                  style={{
                    marginBottom: i !== secureFeatures.length - 1 ? "8rem" : "0"
                  }}
                >
                  <div className="row items-center g-6 lg:g-10 xl:g-12" style={{ minHeight: "500px" }}>
                    {/* Text Content */}
                    <div className={`col-12 lg:col-5 ${i % 2 === 0 ? 'order-1 lg:order-0' : 'order-1 lg:order-1'}`}>
                      <div
                        className="panel vstack gap-4"
                        data-anime="onview: -100; targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 150});"
                      >
                        {/* Icon */}
                        <div 
                          className="d-inline-flex items-center justify-content-center rounded-3"
                          style={{
                            width: "64px",
                            height: "64px",
                            backgroundColor: "rgba(255, 59, 28, 0.05)",
                            border: "1px solid rgba(255, 59, 28, 0.3)",
                            boxShadow: "inset 0 1px 0 rgba(255, 59, 28, 0.2), 0 0 8px rgba(255, 59, 28, 0.15)"
                          }}
                        >
                          {feature.icon.startsWith('/assets/') ? (
                            <Image
                              src={feature.icon}
                              alt=""
                              width={36}
                              height={36}
                              style={{
                                filter: 'brightness(0) saturate(100%) invert(42%) sepia(97%) saturate(4466%) hue-rotate(356deg) brightness(103%) contrast(95%)',
                                margin: '0 auto',
                                verticalAlign: 'middle'
                              }}
                            />
                          ) : (
                            <i
                              className={`icon icon-2 ${feature.icon}`}
                              style={{
                                color: "#FF3B1C",
                                fontSize: "28px"
                              }}
                            ></i>
                          )}
                        </div>
                        
                        {/* Title */}
                        <h3 className="h4 lg:h3 m-0 fw-bold">
                          {t(`features_pages.secure.features.${i}.title`)}
                        </h3>
                        
                        {/* Description */}
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 m-0 lh-lg">
                          {t(`features_pages.secure.features.${i}.description`)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className={`col-12 lg:col-7 ${i % 2 === 0 ? 'order-0 lg:order-1' : 'order-0 lg:order-0'}`}>
                      <div
                        className="panel w-100 position-relative d-flex justify-content-center"
                        data-anime="onview: -100; targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 600; delay: 200;"
                      >
                        <Image
                          src={feature.imgSrc}
                          width={420}
                          height={420}
                          alt={feature.altText}
                          className="h-auto"
                          style={{ 
                            objectFit: "contain",
                            aspectRatio: "1 / 1",
                            maxWidth: "70%",
                            width: "auto"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 