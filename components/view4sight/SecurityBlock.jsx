"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function SecurityBlock() {
  const { t, tHtml, isLoading } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);

  const handleFeatureChange = useCallback((newIndex) => {
    if (newIndex !== activeFeature) {
      setActiveFeature(newIndex);
    }
  }, [activeFeature]);

  if (isLoading) {
    return (
      <div className="section panel overflow-hidden">
        <div className="section-outer panel py-8 xl:py-12 bg-gray-900">
          <div className="container max-w-6xl">
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get security features from translations
  const securityFeatures = t('security_block.features').map((feature, index) => ({
    id: index + 1,
    icon: [
      "/assets/images/common/icons/home.svg",
      "/assets/images/common/icons/database.svg", 
      "/assets/images/common/icons/settings.svg",
      "/assets/images/common/icons/check-circle.svg"
    ][index],
    iconColor: ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-orange-500"][index],
    title: feature.title,
    description: feature.description
  }));

  // Visual mapping for each security feature - standardized dimensions
  const featureVisuals = [
    {
      image: "/assets/images/cartefrance.svg",
      alt: "France Map - Sovereign Hosting",
      width: 400,
      height: 400
    },
    {
      image: "/assets/images/on-premise 1.svg",
      alt: "On-Premise Option",
      width: 400,
      height: 400
    },
    {
      image: "/assets/images/secure_home.svg",
      alt: "Granular Permissions",
      width: 400,
      height: 400
    },
    {
      image: "/assets/images/GDPR.svg",
      alt: "GDPR Compliance",
      width: 400,
      height: 400
    }
  ];

  const currentVisual = featureVisuals[activeFeature];

  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-8 xl:py-12 bg-gray-900">
        <div className="container max-w-6xl">
          <div className="section-inner panel">
            {/* Header */}
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-6 lg:mb-8 text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="hero-badge mx-auto">
                {t('security_block.badge')}
              </div>
              <h2 
                className="h3 lg:h2 xl:h1 m-0 text-white"
                dangerouslySetInnerHTML={tHtml('security_block.title')}
              />
              <p className="fs-6 xl:fs-5 text-white text-opacity-70 max-w-lg mx-auto">
                {t('security_block.subtitle')}
              </p>
            </div>

            {/* Main Content Layout */}
            <div
              className="row g-4 lg:g-6 mb-12 lg:mb-16"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 300});"
            >
              {/* Left: Interactive Visual */}
              <div className="col-12 lg:col-6">
                <div className="d-flex align-items-start justify-content-center h-100" style={{paddingTop: '0'}}>
                  <div 
                    className="panel d-flex align-items-center justify-content-center p-6 lg:p-8 rounded-2 lg:rounded-3 w-100 security-visual-container" 
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                      border: '1px solid rgba(255, 255, 255, 0.05)', 
                      maxWidth: '500px',
                      minHeight: '400px'
                    }}
                  >
                    <Image
                      key={activeFeature}
                      src={currentVisual.image}
                      alt={currentVisual.alt}
                      width={currentVisual.width}
                      height={currentVisual.height}
                      className="w-70 h-auto security-visual-fade fade-in"
                      style={{ 
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                      priority={activeFeature === 0}
                    />
                  </div>
                </div>
              </div>

              {/* Right: Security Features Grid */}
              <div className="col-12 lg:col-6">
                 <div className="row child-cols-12 sm:child-cols-6 col-match g-3 h-100" onMouseLeave={() => handleFeatureChange(0)}>
                   {securityFeatures.map((feature, index) => (
                     <div key={feature.id}>
                       <div 
                         className={`panel overflow-hidden rounded-3 h-100 position-relative security-feature-card ${activeFeature === index ? 'active' : ''}`}
                         data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: ${100 * index};"
                         onMouseEnter={() => handleFeatureChange(index)}
                         onFocus={() => handleFeatureChange(index)}
                         tabIndex={0}
                       >
                         {/* Gradient overlay for active state */}
                         {activeFeature === index && (
                           <div 
                             className="position-absolute top-0 start-0 w-100 h-100"
                             style={{
                               background: 'linear-gradient(135deg, rgba(254, 85, 46, 0.08) 0%, rgba(254, 85, 46, 0.02) 100%)',
                               borderRadius: 'inherit'
                             }}
                           />
                         )}
                         
                         <div className="p-4 lg:p-5 h-100 d-flex flex-column position-relative" style={{ zIndex: 1 }}>
                           {/* Icon */}
                           <div className="mb-3 lg:mb-4 d-flex align-items-center justify-content-start">
                             <Image
                               src={feature.icon}
                               alt=""
                               width="40"
                               height="40"
                               className="w-40px h-40px"
                               style={{ 
                                 filter: 'brightness(0) saturate(100%) invert(42%) sepia(97%) saturate(4466%) hue-rotate(356deg) brightness(103%) contrast(95%)'
                               }}
                             />
                           </div>

                           {/* Content */}
                           <div className="flex-grow-1">
                             <h5 
                               className="h5 fw-bold mb-3 lh-sm security-content-text"
                               style={{
                                 color: activeFeature === index ? '#1a1a1a' : '#ffffff',
                                 fontSize: '1.1rem'
                               }}
                             >
                               {feature.title}
                             </h5>
                             <p 
                               className="fs-6 mb-0 lh-base security-content-text"
                               style={{
                                 color: activeFeature === index ? '#4a4a4a' : 'rgba(255, 255, 255, 0.8)',
                                 fontSize: '0.9rem'
                               }}
                             >
                               {feature.description}
                             </p>
                           </div>

                           {/* Active indicator */}
                           {activeFeature === index && (
                             <div 
                               className="position-absolute"
                               style={{
                                 top: '20px',
                                 right: '20px',
                                 width: '10px',
                                 height: '10px',
                                 backgroundColor: '#FE552E',
                                 borderRadius: '50%',
                                 boxShadow: '0 0 10px rgba(254, 85, 46, 0.6)',
                                 animation: 'pulse 2s infinite'
                               }}
                             />
                           )}

                           {/* Bottom accent line for active state */}
                           {activeFeature === index && (
                             <div 
                               className="position-absolute bottom-0 start-0"
                               style={{
                                 width: '100%',
                                 height: '3px',
                                 background: 'linear-gradient(90deg, #FE552E 0%, rgba(254, 85, 46, 0.3) 100%)',
                                 borderRadius: '0 0 1rem 1rem'
                               }}
                             />
                           )}
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Trust Indicators */}
            <div 
              className="panel p-3 lg:p-4 rounded-3 text-center security-trust"
              style={{backgroundColor: '#E4DCCA', marginTop: '80px'}}
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 600;"
            >
              <div className="vstack gap-2">
                <h4 className="h4 lg:h3 mb-0 text-dark fw-bold">European privacy by design, not as an afterthought</h4>
                
                <div className="d-flex justify-content-center align-items-center certification-container" style={{minHeight: '160px', maxWidth: '1400px', margin: '0 auto', gap: 'clamp(24px, 8vw, 120px)'}}>
                  {/* ISO/CEI 27001 Certified */}
                  <div className="flex-shrink-0">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <div className="certification-image d-flex align-items-center justify-content-center" style={{height: '140px', width: '240px'}}>
                        <Image
                          src="/assets/images/Iso-test.svg"
                          alt="ISO/CEI 27001 Certified"
                          width={260}
                          height={140}
                          className="h-auto"
                          style={{maxHeight: '140px', maxWidth: '260px', objectFit: 'contain'}}
                        />
                      </div>
                    </div>
                  </div>

                  {/* GDPR Compliant */}
                  <div className="flex-shrink-0">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <div className="certification-image d-flex align-items-center justify-content-center" style={{height: '140px', width: '210px'}}>
                        <Image
                          src="/assets/images/gdpr_22.svg"
                          alt="GDPR Compliant"
                          width={210}
                          height={140}
                          className="h-auto"
                          style={{maxHeight: '140px', maxWidth: '210px', objectFit: 'contain'}}
                        />
                      </div>
                    </div>
                  </div>

                  {/* French Public Sector Ready */}
                  <div className="flex-shrink-0">
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <div className="certification-image d-flex align-items-center justify-content-center" style={{height: '140px', width: '210px'}}>
                        <Image
                          src="/assets/images/DSS-badge.svg"
                          alt="French Public Sector Ready"
                          width={210}
                          height={140}
                          className="h-auto"
                          style={{maxHeight: '140px', maxWidth: '210px', objectFit: 'contain'}}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <p className="fs-6 text-dark text-opacity-60 mb-0 mt-0 fst-italic">
                  Trusted by surveyors, public agencies, and infrastructure teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 