"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function PainBenefits() {
  const { t, tHtml, isLoading } = useTranslation();

  if (isLoading) {
    return (
      <div className="section panel overflow-hidden">
        <div className="section-outer panel py-8 xl:py-12 bg-gray-900">
          <div className="container max-w-7xl">
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
  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-8 xl:py-12 bg-gray-900">
        <div className="container max-w-7xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
          >
            {/* Header Section */}
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-8 xl:mb-10 max-w-4xl mx-auto text-center">
              <div className="hero-badge mx-auto">
                {t('pain_benefits.badge')}
              </div>
              <h2 
                className="h3 lg:h2 xl:h1 m-0 text-white"
                dangerouslySetInnerHTML={tHtml('pain_benefits.title')}
              />
              <p className="fs-6 xl:fs-5 text-white text-opacity-70 max-w-lg mx-auto">
                {t('pain_benefits.subtitle')}
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="position-relative" style={{marginTop: '3rem'}}>
              <div className="row g-4 xl:g-6">
                
                {/* Left Column: Current Challenges */}
                <div className="col-12 lg:col-6">
                  {/* Column Title positioned here, just above the cards */}
                  <div className="text-center mb-3">
                    <h3 className="h4 xl:h3 text-danger m-0 fw-bold">{t('pain_benefits.problems_title')}</h3>
                  </div>
                  
                  <div className="panel vstack gap-4 xl:gap-5">
                    {t('pain_benefits.problems').map((problem, index) => (
                      <div key={index} className="panel overflow-hidden rounded-2 lg:rounded-3" style={{background: 'linear-gradient(135deg, rgba(220, 53, 69, 0.12) 0%, rgba(220, 53, 69, 0.06) 100%)', border: '1px solid rgba(220, 53, 69, 0.25)', minHeight: '180px'}}>
                        <div className="panel vstack items-start gap-3 p-4 lg:p-5 xl:p-6 h-100 justify-content-between">
                          <div className="hstack gap-4 w-100 align-items-center">
                            <div className="flex-shrink-0 d-flex align-items-center justify-content-center">
                              <Image
                                src="/assets/images/custom-icons/cross.svg"
                                alt="Challenge"
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="vstack gap-1 flex-grow-1">
                              <h4 className="h5 xl:h4 m-0 fw-bold text-white">
                                {problem.title}
                              </h4>
                              <div className="w-32px h-2px bg-danger rounded-pill"></div>
                            </div>
                          </div>
                          <p className="fs-6 xl:fs-5 m-0 lh-relaxed text-white" style={{ opacity: 0.85 }}>
                            {problem.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: View4Sight Solutions */}
                <div className="col-12 lg:col-6">
                  {/* Column Title positioned here, just above the cards */}
                  <div className="text-center mb-3">
                    <h3 className="h4 xl:h3 text-success m-0 fw-bold">{t('pain_benefits.solutions_title')}</h3>
                  </div>
                  
                  <div className="panel vstack gap-4 xl:gap-5">
                    {t('pain_benefits.solutions').map((solution, index) => (
                      <div key={index} className="panel overflow-hidden rounded-2 lg:rounded-3" style={{background: 'linear-gradient(135deg, rgba(25, 135, 84, 0.12) 0%, rgba(25, 135, 84, 0.06) 100%)', border: '1px solid rgba(25, 135, 84, 0.25)', minHeight: '180px'}}>
                        <div className="panel vstack items-start gap-3 p-4 lg:p-5 xl:p-6 h-100 justify-content-between">
                          <div className="hstack gap-4 w-100 align-items-center">
                            <div className="flex-shrink-0 d-flex align-items-center justify-content-center">
                              <Image
                                src="/assets/images/custom-icons/check.svg"
                                alt="Solution"
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="vstack gap-1 flex-grow-1">
                              <h4 className="h5 xl:h4 m-0 fw-bold text-white">
                                {solution.title}
                              </h4>
                              <div className="w-32px h-2px bg-success rounded-pill"></div>
                            </div>
                          </div>
                          <p className="fs-6 xl:fs-5 m-0 lh-relaxed text-white" style={{ opacity: 0.85 }}>
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Transition Arrow */}
              <div className="position-absolute d-none lg:block" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10}}>
                <div className="w-80px h-80px rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{background: 'linear-gradient(45deg, #FE552E, #C54E34)'}}>
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path d="M13 4L21 10M21 10L13 16M21 10H3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 