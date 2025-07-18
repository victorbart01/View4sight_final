"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function SecurityBlock() {
  const { t, tHtml, isLoading } = useTranslation();

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
                            {/* Left: Shield Image */}
              <div className="col-12 lg:col-5">
                <div className="d-flex align-items-start justify-content-center h-100" style={{paddingTop: '0'}}>
                  <div className="panel d-flex align-items-center justify-content-center p-6 lg:p-8 rounded-2 lg:rounded-3 w-100" style={{backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', maxWidth: '400px'}}>
                    <Image
                      src="/assets/images/secure_shield.png"
                      alt="Security Shield - Data Protection in France"
                      width="350"
                      height="350"
                      className="w-70 h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Security Features Grid */}
              <div className="col-12 lg:col-7">
                 <div className="row child-cols-12 sm:child-cols-6 col-match g-2 h-100">
                   {securityFeatures.map((feature, index) => (
                     <div key={feature.id}>
                       <div 
                         className={`panel vstack items-start overflow-hidden ${
                           index === 0 ? 'bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white' :
                           index === 1 ? 'uc-dark' :
                           index === 2 ? 'bg-gray-800 uc-dark' :
                           'bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white'
                         } rounded-2 lg:rounded-3 h-100`}
                         style={index === 1 ? {backgroundColor: '#7FC2C8'} : {}}
                         data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: ${100 * index};"
                       >
                         {/* Background effects for certain cards */}
                         {index === 1 && (
                           <>
                             <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                             <div className="position-absolute d-inline-block w-300px h-300px rounded-circle start-50 blur-10 translate-middle blend-soft-light" style={{background: 'linear-gradient(45deg, #7FC2C8, white)'}} />
                           </>
                         )}
                         {index === 2 && (
                           <>
                             <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                             <div className="position-absolute d-inline-block w-300px h-300px rounded-circle start-50 blur-10 translate-middle blend-soft-light" style={{background: 'linear-gradient(45deg, #7FC2C8, white)'}} />
                           </>
                         )}
                         
                         <div
                           className="panel vstack items-start gap-2 lg:gap-3 p-3 lg:p-4 h-100 justify-content-between"
                           data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                         >
                           <div className="vstack items-start gap-2 lg:gap-3">
                             <div className={`w-40px h-40px lg:w-44px lg:h-44px rounded-2 ${feature.iconColor} d-flex align-items-center justify-content-center`}>
                               <Image
                                 src={feature.icon}
                                 alt=""
                                 width="20"
                                 height="20"
                                 className="w-20px h-20px lg:w-24px lg:h-24px"
                                 style={{filter: 'brightness(0) invert(1)'}}
                               />
                             </div>
                             <h5 className="h6 lg:h5 m-0 fw-bold">{feature.title}</h5>
                             <p className="fs-7 lg:fs-6 m-0">
                               <span style={{ opacity: 0.7 }}>
                                 {feature.description}
                               </span>
                             </p>
                           </div>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Trust Indicators */}
            <div 
              className="panel p-6 lg:p-8 rounded-3 text-center security-trust"
              style={{backgroundColor: '#E4DCCA', marginTop: '80px'}}
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 600;"
            >
              <div className="vstack gap-6">
                <h4 className="h4 lg:h3 m-0 text-dark fw-bold">European privacy by design, not as an afterthought</h4>
                                 <div className="hstack justify-center gap-6 lg:gap-8 flex-wrap">
                   <div className="d-flex align-items-center gap-3">
                     <div className="w-32px h-32px rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{backgroundColor: '#28a745'}}>
                       <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{display: 'block', margin: 'auto'}}>
                         <path d="M6 10l2 2 6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                     </div>
                     <span className="fs-5 fw-medium text-dark lh-1">ISO/CEI 27001 Certified</span>
                   </div>
                   <div className="d-flex align-items-center gap-3">
                     <div className="w-32px h-32px rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{backgroundColor: '#28a745'}}>
                       <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{display: 'block', margin: 'auto'}}>
                         <path d="M6 10l2 2 6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                     </div>
                     <span className="fs-5 fw-medium text-dark lh-1">GDPR Compliant</span>
                   </div>
                   <div className="d-flex align-items-center gap-3">
                     <div className="w-32px h-32px rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{backgroundColor: '#28a745'}}>
                       <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{display: 'block', margin: 'auto'}}>
                         <path d="M6 10l2 2 6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                     </div>
                     <span className="fs-5 fw-medium text-dark lh-1">French Public Sector Ready</span>
                   </div>
                 </div>
                <p className="fs-6 text-dark text-opacity-60 m-0 fst-italic">
                  Backed by France's leading surveying experts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 