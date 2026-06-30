"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function Testimonials() {
  const { t, tHtml, isLoading } = useTranslation();

  if (isLoading) {
    return (
      <div className="section panel">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  // Get testimonial data from translations
  const featuredTestimonial = {
    id: 1,
    quote: t('testimonials.featured.quote'),
    author: t('testimonials.featured.author'),
    position: t('testimonials.featured.position'),
    company: t('testimonials.featured.company'),
    avatar: "/assets/images/testimonials/pierre_moreau.jpeg"
  };

  // Result KPIs from translations (the boost/click icon is shown on the last one)
  const resultsRaw = t('testimonials.results');
  const realResults = (Array.isArray(resultsRaw) ? resultsRaw : []).map((r, i) => ({
    label: r.label,
    value: r.value,
    suffix: r.suffix,
    boost: i === 2,
  }));

  return (
    <div className="section panel overflow-hidden">
      <style>{`
        .v4s-testi-block { width: 100%; }
        .v4s-testi-row {
          display: flex;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          min-height: 320px;
        }
        .v4s-testi-photo {
          flex-shrink: 0; width: 300px; align-self: stretch;
          object-fit: cover; object-position: center 25%;
          background: #1E2027;
        }
        .v4s-testi-quote-card {
          flex: 1; display: flex; flex-direction: column; justify-content: space-between;
          gap: 28px; padding: clamp(32px, 3.5vw, 52px);
          background: linear-gradient(135deg, #FE552E 0%, #C0431F 52%, #2A1410 100%);
          position: relative; overflow: hidden;
        }
        .v4s-testi-quote-card::before {
          content: ''; position: absolute; top: -30%; right: -10%;
          width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 65%);
          pointer-events: none;
        }
        .v4s-testi-eyebrow {
          display: block; font-size: 12px; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; color: rgba(255,255,255,0.82); margin-bottom: 20px;
          position: relative;
        }
        .v4s-testi-quote {
          font-size: clamp(1.2rem, 1.9vw, 1.6rem); line-height: 1.45;
          letter-spacing: -0.01em; font-weight: 500; color: #fff; margin: 0;
          position: relative;
        }
        .v4s-testi-author { display: flex; flex-direction: column; gap: 3px; position: relative; }
        .v4s-testi-name { font-weight: 700; font-size: 1.1rem; line-height: 1.2; color: #fff; }
        .v4s-testi-role { font-size: 0.875rem; line-height: 1.35; color: rgba(255,255,255,0.75); }

        .v4s-kpi-row {
          display: flex; margin-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .v4s-kpi { flex: 1; padding: 32px 8px 6px 0; }
        .v4s-kpi + .v4s-kpi {
          border-left: 1px solid rgba(255,255,255,0.1);
          padding-left: clamp(20px, 3vw, 44px);
        }
        .v4s-kpi__label {
          display: block; font-size: 11.5px; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; color: rgba(255,255,255,0.42); margin-bottom: 14px;
        }
        .v4s-kpi__num {
          display: flex; align-items: flex-end; gap: 10px;
          font-weight: 800; line-height: 0.88; letter-spacing: -0.03em;
          color: #FE552E; font-size: clamp(3rem, 5vw, 4.4rem);
        }
        .v4s-kpi__metric {
          font-size: 0.95rem; font-weight: 600; line-height: 1.2;
          letter-spacing: normal;
          color: rgba(255,255,255,0.7); max-width: 13ch; padding-bottom: 6px;
        }
        .v4s-kpi__clickwrap {
          position: relative; display: inline-flex; align-items: center; justify-content: center;
          width: 46px; height: 46px; margin: 0 6px 12px; flex-shrink: 0;
        }
        .v4s-kpi__clickicon { width: 30px; height: 30px; position: relative; z-index: 2; }
        .v4s-kpi__clickicon path { fill: none !important; }
        .v4s-kpi__ripple {
          position: absolute; inset: 0; margin: auto; width: 36px; height: 36px;
          border-radius: 50%; border: 1.5px solid rgba(254,85,46,0.55);
          animation: v4sClickPulse 2.4s ease-out infinite;
        }
        .v4s-kpi__ripple.r2 { animation-delay: 1.2s; }
        @keyframes v4sClickPulse {
          0% { transform: scale(0.5); opacity: 0.85; }
          100% { transform: scale(2); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .v4s-kpi__ripple { animation: none; }
        }
        @media (max-width: 991px) {
          .v4s-testi-row { flex-direction: column; min-height: 0; }
          .v4s-testi-photo { width: 100%; height: 260px; align-self: auto; }

          /* Les 3 KPI restent sur une seule ligne horizontale en mobile :
             chaque KPI devient une mini-colonne CENTRÉE (label / chiffre / texte dessous),
             pour un rendu équilibré avec une marge égale des deux côtés de l'écran */
          .v4s-kpi-row { flex-direction: row; margin-top: 24px; }
          .v4s-kpi {
            flex: 1; min-width: 0; padding: 18px 8px 4px;
            display: flex; flex-direction: column; align-items: center; text-align: center;
          }
          .v4s-kpi + .v4s-kpi { border-left: 1px solid rgba(255,255,255,0.1); }
          .v4s-kpi__label {
            font-size: clamp(9px, 1.3vw, 11.5px); letter-spacing: .06em;
            margin-bottom: 10px; line-height: 1.25; min-height: 2.5em;
          }
          .v4s-kpi__num {
            flex-direction: column; align-items: center; gap: 3px;
            font-size: clamp(1.9rem, 9vw, 3.4rem);
          }
          .v4s-kpi__metric {
            font-size: clamp(0.72rem, 1.7vw, 0.95rem);
            max-width: none; padding-bottom: 0;
          }
          .v4s-kpi__clickwrap { width: 32px; height: 32px; margin: 4px 0; }
          .v4s-kpi__clickicon { width: 21px; height: 21px; }
          .v4s-kpi__ripple { width: 25px; height: 25px; }
        }
      `}</style>
        <div className="section-outer panel py-6 xl:py-9 bg-gray-900">
          <div className="container max-w-xl">
            <div className="section-inner panel">
              <div
                className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                {/* Header */}
                <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                  <div className="hero-badge mx-auto">
                    {t('testimonials.badge')}
                  </div>
                  <h2 
                    className="h3 lg:h2 xl:h1 m-0"
                    dangerouslySetInnerHTML={tHtml('testimonials.title')}
                  />
                  <p
                    className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 max-w-lg mx-auto"
                    dangerouslySetInnerHTML={tHtml('testimonials.subtitle')}
                  />
                </div>

              {/* Editorial testimonial + KPI row */}
              <div className="v4s-testi-block mt-6 lg:mt-8">

                {/* Testimonial: photo panel + gradient quote */}
                <div className="v4s-testi-row">
                  <img
                    src={featuredTestimonial.avatar}
                    alt={featuredTestimonial.author}
                    className="v4s-testi-photo"
                  />
                  <div className="v4s-testi-quote-card">
                    <div>
                      <span className="v4s-testi-eyebrow">{t('testimonials.eyebrow')}</span>
                      <p className="v4s-testi-quote">
                        &ldquo;{featuredTestimonial.quote}&rdquo;
                      </p>
                    </div>
                    <div className="v4s-testi-author">
                      <span className="v4s-testi-name">{featuredTestimonial.author}</span>
                      <span className="v4s-testi-role">{featuredTestimonial.position} &middot; {featuredTestimonial.company}</span>
                    </div>
                  </div>
                </div>

                {/* KPI row */}
                <div className="v4s-kpi-row">
                  {realResults.map((stat, i) => (
                    <div className="v4s-kpi" key={i}>
                      <span className="v4s-kpi__label">{stat.label}</span>
                      <div className="v4s-kpi__num">
                        {stat.value}
                        {stat.boost && (
                          <span className="v4s-kpi__clickwrap" aria-hidden="true">
                            <span className="v4s-kpi__ripple"></span>
                            <span className="v4s-kpi__ripple r2"></span>
                            <svg className="v4s-kpi__clickicon" viewBox="0 0 24 24" style={{ stroke: '#FE552E', fill: 'none' }} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 4.1 12 6" />
                              <path d="m5.1 8-2.9-.8" />
                              <path d="m6 12-1.9 2" />
                              <path d="M7.2 2.2 8 5.1" />
                              <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
                            </svg>
                          </span>
                        )}
                        <span className="v4s-kpi__metric">{stat.suffix}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 