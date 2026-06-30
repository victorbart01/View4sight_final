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

  // Card icons stay in code (not translatable); titles/descriptions come from i18n.
  const cardIcons = [
    (
      <svg viewBox="0 0 24 24" fill="none" style={{ stroke: '#fff', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true">
        <rect x="3" y="4" width="18" height="7" rx="1.5" />
        <rect x="3" y="13" width="18" height="7" rx="1.5" />
        <line x1="6.5" y1="7.5" x2="6.51" y2="7.5" />
        <line x1="6.5" y1="16.5" x2="6.51" y2="16.5" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" style={{ stroke: '#fff', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <line x1="9.5" y1="7" x2="9.5" y2="7.01" />
        <line x1="14.5" y1="7" x2="14.5" y2="7.01" />
        <line x1="9.5" y1="11" x2="9.5" y2="11.01" />
        <line x1="14.5" y1="11" x2="14.5" y2="11.01" />
        <path d="M10.5 21v-3a1.5 1.5 0 0 1 3 0v3" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" style={{ stroke: '#fff', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true">
        <path d="M12 3l7 3v5c0 4-3 7.4-7 8.5C8 18.4 5 15 5 11V6l7-3z" />
        <path d="M9.5 10.8h5" />
        <path d="M12 10.8v3" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" style={{ stroke: '#fff', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M8.5 12l2.3 2.3 4.7-4.7" />
      </svg>
    ),
  ];
  const securityFeatures = Array.isArray(t('security_block.features')) ? t('security_block.features') : [];

  return (
    <div className="section panel overflow-hidden">
      <style>{`
        .v4s-secure-visual {
          min-height: 340px;
          background: radial-gradient(120% 120% at 50% 0%, #161617 0%, #0d0d0f 62%);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .v4s-secure-visual__grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 34px 34px;
          -webkit-mask-image: radial-gradient(72% 72% at 50% 45%, #000 0%, transparent 78%);
          mask-image: radial-gradient(72% 72% at 50% 45%, #000 0%, transparent 78%);
        }
        .v4s-secure-visual__glow {
          position: absolute; left: 50%; top: 47%;
          width: 340px; height: 340px; transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%);
          filter: blur(10px);
        }
        .v4s-secure-visual__map {
          position: absolute; left: 50%; top: 46%;
          width: 82%; aspect-ratio: 711 / 688; transform: translate(-50%, -50%);
          background: linear-gradient(90deg,
            #3a55c0 0%, #6377c4 24%, #dfe4ee 50%, #d07567 76%, #c43d33 100%);
          -webkit-mask-image:
            url('/assets/images/cartefrance.svg'),
            radial-gradient(circle at center, #000 1.4px, transparent 1.85px);
          mask-image:
            url('/assets/images/cartefrance.svg'),
            radial-gradient(circle at center, #000 1.4px, transparent 1.85px);
          -webkit-mask-repeat: no-repeat, repeat;
          mask-repeat: no-repeat, repeat;
          -webkit-mask-size: contain, 8.5px 8.5px;
          mask-size: contain, 8.5px 8.5px;
          -webkit-mask-position: center, center;
          mask-position: center, center;
          -webkit-mask-composite: source-in;
          mask-composite: intersect;
          opacity: 0.95;
          filter: drop-shadow(0 10px 26px rgba(0,0,0,0.5));
        }
        .v4s-secure-visual__badge {
          position: absolute; left: 50%; top: 48%; transform: translate(-50%, -50%);
          z-index: 2; width: 132px; height: 132px;
          display: flex; align-items: center; justify-content: center;
        }
        .v4s-secure-visual__disc {
          position: relative; z-index: 2;
          width: 100px; height: 100px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: radial-gradient(120% 120% at 50% 0%, #1a1a1c 0%, #0b0b0d 100%);
          border: 1px solid rgba(254,85,46,0.4);
          box-shadow: 0 18px 42px -10px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05);
        }
        .v4s-secure-visual__ring {
          position: absolute; inset: 0; margin: auto;
          width: 100px; height: 100px; border-radius: 50%;
          border: 1px solid rgba(254,85,46,0.5);
          animation: v4sPulse 3.2s ease-out infinite;
        }
        .v4s-secure-visual__ring--2 { animation-delay: 1.6s; }
        @keyframes v4sPulse {
          0% { transform: scale(1); opacity: 0.65; }
          100% { transform: scale(2.15); opacity: 0; }
        }
        .v4s-secure-card {
          border: 1px solid rgba(255,255,255,0.06);
          transition: transform .3s cubic-bezier(.2,.7,.3,1), border-color .3s ease, box-shadow .3s ease;
        }
        .v4s-secure-card::after {
          content: ''; position: absolute; top: 0; left: 0;
          height: 2px; width: 100%;
          background: linear-gradient(90deg, #FE552E, rgba(254,85,46,0));
          transform: scaleX(0); transform-origin: left;
          transition: transform .45s cubic-bezier(.2,.7,.3,1);
          pointer-events: none;
        }
        .v4s-secure-card:hover {
          transform: translateY(-5px);
          border-color: rgba(254,85,46,0.5);
          box-shadow: 0 26px 50px -26px rgba(254,85,46,0.45), 0 18px 38px -24px rgba(0,0,0,0.9);
        }
        .v4s-secure-card:hover::after { transform: scaleX(1); }
        .v4s-secure-card__glow {
          position: absolute; top: -45%; right: -32%;
          width: 220px; height: 220px; border-radius: 50%;
          background: radial-gradient(circle, rgba(254,85,46,0.16) 0%, rgba(254,85,46,0) 70%);
          pointer-events: none; opacity: 0.7;
          transition: opacity .35s ease, transform .45s ease;
        }
        .v4s-secure-card:hover .v4s-secure-card__glow {
          opacity: 1; transform: scale(1.35);
        }
        .v4s-secure-card__icon {
          width: 46px; height: 46px; border-radius: 12px;
          display: inline-flex; align-items: center; justify-content: center;
          background: linear-gradient(145deg, #FE552E 0%, #E8431F 100%);
          border: 1px solid rgba(255,255,255,0.16);
          box-shadow: 0 8px 18px -8px rgba(254,85,46,0.65);
          transition: transform .3s cubic-bezier(.2,.7,.3,1), box-shadow .3s ease;
        }
        .v4s-secure-card:hover .v4s-secure-card__icon {
          transform: translateY(-2px) scale(1.08);
          box-shadow: 0 12px 26px -6px rgba(254,85,46,0.85);
        }
        .v4s-secure-card__icon svg { width: 23px; height: 23px; display: block; }
        .v4s-secure-card__icon svg path,
        .v4s-secure-card__icon svg rect,
        .v4s-secure-card__icon svg circle,
        .v4s-secure-card__icon svg line { fill: none !important; }
        @media (prefers-reduced-motion: reduce) {
          .v4s-secure-visual__ring, .v4s-secure-visual__dot { animation: none; }
        }
        /* Mobile : la carte est trop grande pour une carte basse (haut à l'étroit).
           On donne plus de hauteur et on recentre verticalement pour des marges égales. */
        @media (max-width: 991px) {
          .v4s-secure-visual { min-height: 400px; }
          .v4s-secure-visual__map { width: 76%; top: 48%; }
          .v4s-secure-visual__grid {
            -webkit-mask-image: radial-gradient(78% 70% at 50% 48%, #000 0%, transparent 80%);
            mask-image: radial-gradient(78% 70% at 50% 48%, #000 0%, transparent 80%);
          }
        }
      `}</style>
      <div className="section-outer panel py-8 xl:py-12 bg-gray-900">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            {/* Header */}
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-6 lg:mb-8 text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="d-inline-flex align-items-center px-3 py-1 rounded-pill border border-primary border-opacity-20" style={{ backgroundColor: 'rgba(254, 85, 46, 0.1)' }}>
                <span className="fs-8 fw-bold text-uppercase text-primary tracking-wide">{t('security_block.badge')}</span>
              </div>
              <h2
                className="h3 lg:h2 xl:h1 m-0 text-white"
                dangerouslySetInnerHTML={tHtml('security_block.title')}
              />
              <p
                className="fs-6 xl:fs-5 text-white text-opacity-70 max-w-3xl mx-auto"
                dangerouslySetInnerHTML={tHtml('security_block.subtitle')}
              />
            </div>

            {/* Main Content Layout - Bento Grid */}
            <div
              className="row g-4 mb-8 lg:mb-12"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 300});"
            >
              {/* Left: Sovereign hosting visual */}
              <div className="col-12 lg:col-5">
                <div className="v4s-secure-visual h-100 rounded-3 position-relative overflow-hidden d-flex align-items-center justify-content-center">
                  <span className="v4s-secure-visual__grid" aria-hidden="true"></span>
                  <span className="v4s-secure-visual__glow" aria-hidden="true"></span>
                  <span className="v4s-secure-visual__map" aria-hidden="true"></span>

                  {/* Shield badge */}
                  <div className="v4s-secure-visual__badge">
                    <span className="v4s-secure-visual__ring" aria-hidden="true"></span>
                    <span className="v4s-secure-visual__ring v4s-secure-visual__ring--2" aria-hidden="true"></span>
                    <span className="v4s-secure-visual__disc">
                      <svg width="54" height="54" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Données sécurisées et hébergées en France">
                        <path d="M12 2.25l7 3.111v5.139c0 4.43-2.985 7.86-7 8.998-4.015-1.139-7-4.568-7-8.998V5.361l7-3.111z" style={{ fill: 'url(#v4sShield)' }} />
                        <path d="M8.75 12.1l2.2 2.2 4.3-4.3" style={{ fill: 'none', stroke: '#fff' }} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                          <linearGradient id="v4sShield" x1="5" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FE552E" />
                            <stop offset="1" stopColor="#C54E34" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Security Features Grid (2x2) */}
              <div className="col-12 lg:col-7">
                 <div className="row child-cols-12 md:child-cols-6 col-match g-4 h-100">
                    {securityFeatures.map((feature, i) => (
                    <div key={i}>
                        <div className="v4s-secure-card panel bg-gray-800 p-4 lg:p-5 rounded-2 lg:rounded-3 h-100 position-relative overflow-hidden">
                           <span className="v4s-secure-card__glow" aria-hidden="true"></span>
                           <div className="position-relative">
                             <div className="mb-4">
                               <span className="v4s-secure-card__icon">
                                 {cardIcons[i]}
                               </span>
                             </div>
                             <h3 className="h5 lg:h4 fw-bold mb-2 text-white">
                               {feature.title}
                             </h3>
                             <p className="fs-6 mb-0 lh-base text-white text-opacity-60">
                               {feature.description}
                             </p>
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
                <h4 className="h4 lg:h3 mb-0 text-dark fw-bold">{t('security_block.trust_title')}</h4>
                
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
                  {t('security_block.trust_subtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 