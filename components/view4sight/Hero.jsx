"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";
import { useTranslation } from "@/hooks/useTranslation";

export default function Hero() {
  const { t, tHtml, isLoading } = useTranslation();

  if (isLoading) {
    return (
      <div id="hero_header" className="hero-header section panel overflow-hidden">
        <div className="position-cover bg-secondary dark:bg-gray-800" />
        <div className="section-outer panel pt-9 pb-2">
          <div className="container max-w-xl">
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '500px' }}>
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
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-cover bg-secondary dark:bg-gray-800" />
      <div className="section-outer panel pt-9 pb-2">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols justify-center md:justify-between items-center g-0">
              <div className="col-12 sm:col-10 md:col-6">
                <div
                  className="panel vstack gap-5 text-start py-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  {/* Groupe pastille + titre avec espacement harmonisé */}
                  <div className="vstack gap-3">
                    {/* Pastille d'annonce discrète */}
                    <div className="hero-badge">
                      {t('hero.badge')}
                    </div>
                    
                    {/* Titre principal avec hiérarchie forte */}
                    <div className="vstack gap-1">
                      <h1 
                        className="h2 xl:display-5 fw-bold mb-0 text-dark dark:text-white"
                        style={{lineHeight: '1.44'}}
                        dangerouslySetInnerHTML={tHtml('hero.title')}
                      />
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p 
                    className="fs-5 lg:fs-4 text-dark dark:text-white text-opacity-80 lh-base mb-0 pe-lg-4"
                    dangerouslySetInnerHTML={tHtml('hero.subtitle')}
                  />
                  
                  {/* Boutons CTA avec style amélioré */}
                  <div className="hstack gap-3 flex-wrap">
                    <Link
                      href={`/tarifs`}
                      className="btn btn-lg btn-primary rounded-pill px-5 py-3 text-white fw-medium fs-6"
                    >
                      {t('hero.cta_primary')}
                    </Link>
                    <a
                      onClick={openContactModal}
                      className="btn btn-lg btn-outline-primary rounded-pill px-5 py-3 fw-medium fs-6 cursor-pointer"
                      role="button"
                    >
                      {t('hero.cta_secondary')}
                    </a>
                  </div>
                  
                  {/* Points clés avec icônes check-circle */}
                  <div className="hstack gap-4 flex-wrap justify-center lg:justify-start">
                    <div className="hstack gap-1 items-center">
                      <Image
                        alt="Check"
                        src="/assets/images/common/icons/check-circle.svg"
                        width="16"
                        height="16"
                        className="flex-shrink-0 text-primary"
                      />
                      <span className="fs-8 text-dark dark:text-white fw-bold text-nowrap">30-day free trial</span>
                    </div>
                    <div className="hstack gap-1 items-center">
                      <Image
                        alt="Check"
                        src="/assets/images/common/icons/check-circle.svg"
                        width="16"
                        height="16"
                        className="flex-shrink-0 text-primary"
                      />
                      <span className="fs-8 text-dark dark:text-white fw-bold text-nowrap">No credit card required</span>
                    </div>
                    <div className="hstack gap-1 items-center">
                      <Image
                        alt="Check"
                        src="/assets/images/common/icons/check-circle.svg"
                        width="16"
                        height="16"
                        className="flex-shrink-0 text-primary"
                      />
                      <span className="fs-8 text-dark dark:text-white fw-bold text-nowrap">150GB storage included</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div
                  className="expand-container mt-4 lg:mt-4 ltr:ms-2 rtl:me-2"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  {/* Remplacé par la capture d'écran de View4Sight */}
                  <Image
                    className="d-block"
                    alt="View4Sight 3D Point Cloud Viewer"
                    src="/assets/images/hero-mockup.png"
                    width="1492"
                    height="1250"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 