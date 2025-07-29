"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import OrbitingIcons from "./OrbitingIcons";
import { useTranslation } from "@/hooks/useTranslation";

export default function MainFeatures() {
  const { t, tHtml, isLoading } = useTranslation();

  if (isLoading) {
    return (
      <div id="features" className="features section panel scrollSpysection">
        <div className="section-outer panel pt-3 lg:pt-4 xl:pt-5 bg-gray-900">
          <div className="container xl:max-w-xl">
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
    <div id="features" className="features section panel scrollSpysection">
      <div className="section-outer panel pt-3 lg:pt-4 xl:pt-5 bg-gray-900">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="hero-badge mx-auto">
                {t('main_features.badge')}
              </div>
              <h2 
                className="h3 lg:h2 xl:h1 m-0 px-2"
                dangerouslySetInnerHTML={tHtml('main_features.title')}
              />
              <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                {t('main_features.subtitle')}
              </p>
            </div>
            
            <div className="row child-cols-12 lg:child-cols-5 col-match g-2">
              
              {/* Feature 1: Web-based 3D Viewer */}
              <div className="lg:col-7">
                <div
                  className="panel overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 0;"
                >
                  <div
                    className="panel vstack items-start gap-3 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h4 className="h4 lg:h3 m-0">{t('main_features.features.web_viewer.title')}</h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                      <span style={{ opacity: 0.7 }}>
                        {t('main_features.features.web_viewer.description')}
                      </span>
                    </p>
                    <Link href="/fonctionnalites" className="btn btn-sm btn-primary px-2 mt-2">
                      <span>{t('main_features.features.web_viewer.cta')}</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </Link>
                  </div>
                  <div className="panel ltr:ps-3 ltr:lg:ps-4 ltr:xl:ps-6 rtl:pe-3 rtl:lg:pe-4 rtl:xl:pe-6">
                    {/* TODO: Remplacer par capture d'écran du viewer 3D */}
                    <Image
                      className="ltr:rounded-top-start-1-5 rtl:rounded-top-end-1-5"
                      alt="View4Sight 3D Point Cloud Viewer"
                      src="/assets/images/web_based.png"
                      width="1280"
                      height="837"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2: All Formats Support */}
              <div>
                <div
                  className="panel vstack items-start overflow-hidden bg-primary-700 rounded-2 lg:rounded-3 uc-dark"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
                >
                  <div
                    className="position-cover opacity-70 bg-cover"
                    style={{ backgroundPosition: "50% 85%" }}
                    data-src="/assets/images/template/feature-06-bg-masked.png"
                    data-uc-img=""
                  />
                  <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                  <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                  <div className="panel p-3">
                    {/* Composant d'icônes en orbite pour illustrer les formats supportés */}
                    <OrbitingIcons />
                  </div>
                  <div
                    className="panel vstack items-start justify-between gap-3 p-3 lg:p-4 xl:p-6 pt-0 lg:pt-0 xl:pt-0"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div className="content vstack items-start gap-3">
                      <h4 className="h4 lg:h3 m-0">{t('main_features.features.all_formats.title')}</h4>
                      <p className="fs-6 md:fs-5 lg:fs-4 dark:text-white">
                        <span style={{ opacity: 0.7 }}>
                          {t('main_features.features.all_formats.description')}
                        </span>
                      </p>
                    </div>
                    <Link
                      href="#faq"
                      className="text-secondary fw-medium text-decoration-none d-inline-flex align-items-center gap-1 mt-2"
                      style={{ fontSize: '14px' }}
                    >
                      <span>{t('main_features.features.all_formats.cta')}</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Feature 3: BIM + Survey Fusion */}
              <div>
                <div
                  className="panel vstack items-start overflow-hidden bg-gray-800 rounded-2 lg:rounded-3 uc-dark"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
                >
                  <div
                    className="position-cover opacity-70 bg-cover"
                    style={{ backgroundPosition: "50% 85%" }}
                    data-src="/assets/images/template/feature-06-bg-masked-2.png"
                    data-uc-img=""
                  />
                  <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                  <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                  <div className="panel px-3 lg:px-4 xl:px-6">
                    {/* TODO: Remplacer par capture d'écran BIM + Survey */}
                    <Image
                      className="rounded-bottom-1-5"
                      alt="BIM and Survey data fusion"
                      src="/assets/images/secure_home.png"
                      width="800"
                      height="620"
                    />
                  </div>
                  <div
                    className="panel vstack items-start justify-between gap-3 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div className="content vstack items-start gap-3">
                      <h4 
                        className="h4 lg:h3 m-0"
                        dangerouslySetInnerHTML={tHtml('main_features.features.data_security.title')}
                      />
                      <p 
                        className="fs-6 md:fs-5 lg:fs-4 dark:text-white"
                        style={{ opacity: 0.7 }}
                        dangerouslySetInnerHTML={tHtml('main_features.features.data_security.description')}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4: Smart Annotations */}
              <div className="lg:col-7">
                <div
                  className="panel vstack items-start overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                >
                  <div
                    className="panel vstack items-start gap-3 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h4 className="h4 lg:h3 m-0">{t('main_features.features.smart_annotations.title')}</h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0" style={{ opacity: 0.7 }}>
                      <span 
                        dangerouslySetInnerHTML={{ 
                          __html: t('main_features.features.smart_annotations.description') 
                        }}
                      />
                    </p>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    {/* TODO: Remplacer par capture d'écran des annotations */}
                    <Image
                      alt="Smart annotations and measurements"
                      src="/assets/images/Collaborate_hero.png"
                      width="1280"
                      height="800"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Bouton vers la page Features */}
            <div
              className="text-center mt-6 lg:mt-8"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 800;"
            >
              <Link
                href="/fonctionnalites"
                className="btn btn-lg btn-outline-primary rounded-pill px-5 py-3"
              >
                <span>{t('main_features.discover_all')}</span>
                <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180 ms-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 