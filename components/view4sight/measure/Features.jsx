"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function Features() {
  const { t } = useTranslation();

  const measureFeatures = [
    {
      id: "3d-measurements",
      icon: "/assets/images/custom-icons/ruler-bold.svg",
      iconBg: "#FFF4E6",
      iconColor: "#FE552E",
      imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
      altText: "Interface des outils de mesure 3D",
    },
    {
      id: "cross-sections",
      icon: "/assets/images/custom-icons/scissors-bold.svg",
      iconBg: "#FFF3E0",
      iconColor: "#F57C00",
      imgSrc: "https://picsum.photos/900/600?random=2",
      altText: "Fonction de sections et profils",
    },
    {
      id: "flatness-controls",
      icon: "unicon-chart-line",
      iconBg: "#E8F5E9",
      iconColor: "#388E3C",
      imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
      altText: "Outils d'analyse de planéité",
    },
    {
      id: "object-attributes",
      icon: "/assets/images/custom-icons/tag-bold.svg",
      iconBg: "#F3E5F5",
      iconColor: "#7B1FA2",
      imgSrc: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
      altText: "Système de classification des objets",
    }
  ];
  return (
    <div id="main_features" className="main-features section panel">
              <div className="section-outer panel py-8 lg:py-10 xl:py-12" style={{ backgroundColor: '#0e0e0e' }}>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack">
              {measureFeatures.map((feature, i) => (
                <div
                  key={feature.id}
                  className="feature-item panel"
                  style={{ 
                    marginBottom: i !== measureFeatures.length - 1 ? "8rem" : "0" 
                  }}
                  data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                >
                  <div className="row items-center g-6 lg:g-10 xl:g-12" style={{ minHeight: "500px" }}>
                    {/* Text Content */}
                    <div className={`col-12 lg:col-5 ${i % 2 === 0 ? 'order-1 lg:order-0' : 'order-1 lg:order-1'}`}>
                      <div className="panel vstack gap-4 w-100">
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
                          {t(`features_pages.measure.features.${i}.title`)}
                        </h3>
                        
                        {/* Description */}
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 m-0 lh-lg">
                          {t(`features_pages.measure.features.${i}.description`)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image/Video */}
                    <div className={`col-12 lg:col-7 d-flex items-center ${i % 2 === 0 ? 'order-0 lg:order-1' : 'order-0 lg:order-0'}`}>
                      <div className="panel w-100 position-relative">
                        {i === 0 ? (
                          <video
                            width={900}
                            height={600}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-100 h-auto"
                            style={{ 
                              objectFit: "cover",
                              aspectRatio: "3/2"
                            }}
                          >
                            <source src="/assets/videos/V4S-Measures.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : i === 1 ? (
                          <video
                            width={900}
                            height={600}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-100 h-auto"
                            style={{ 
                              objectFit: "cover",
                              aspectRatio: "3/2"
                            }}
                          >
                            <source src="/assets/videos/V4S-Clipping.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : i === 2 ? (
                          // Troisième feature: Vidéo V4S-FlatnessControl.mp4 pour Flatness Controls
                          <video
                            width={900}
                            height={600}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-100 h-auto"
                            style={{ 
                              objectFit: "cover",
                              aspectRatio: "3/2"
                            }}
                          >
                            <source src="/assets/videos/V4S-FlatnessControl.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <div 
                            className="rounded-3 p-6 lg:p-8"
                            style={{
                              background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)"
                            }}
                          >
                            <div className="rounded-3 overflow-hidden shadow-lg">
                              <Image
                                src={feature.imgSrc}
                                width={900}
                                height={600}
                                alt={feature.altText}
                                className="w-100 h-auto"
                                style={{ 
                                  objectFit: "cover",
                                  aspectRatio: "3/2"
                                }}
                              />
                            </div>
                          </div>
                        )}
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