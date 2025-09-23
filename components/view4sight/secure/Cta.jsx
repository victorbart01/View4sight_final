"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function Cta() {
  const { t, isLoading } = useTranslation();

  if (isLoading) {
    return (
      <div id="cta" className="cta section panel  scrollSpysection">
        <div className="section-outer panel py-4 sm:py-6 xl:py-8 bg-white text-dark rounded-2 lg:rounded-3 mx-2 overflow-hidden border border-gray-200">
          <div className="container xl:max-w-xl">
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
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
    <div id="cta" className="cta section panel  scrollSpysection">
      <div className="section-outer panel py-4 sm:py-6 xl:py-8 bg-white text-dark rounded-2 lg:rounded-3 mx-2 overflow-hidden border border-gray-200">
        <div className="container xl:max-w-xl">
          <div className="section-inner vstack lg:hstack items-center gap-4 lg:gap-6 text-center ltr:lg:text-start rtl:lg:text-end flex-sm-column home-6-cta">
            <div
              className="content panel vstack items-center lg:items-start justify-center gap-2 lg:max-w-3/5 px-4 lg:px-0 "
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h2 xl:display-5 text-dark">
                {t('features_pages.cta.title')}
              </h2>
              <p className="fs-5 my-0 text-dark text-opacity-70">
                {t('features_pages.cta.subtitle')}
              </p>
              <Link
                href="/tarifs"
                className="btn btn-md btn-primary min-w-150px px-3 mt-4"
              >
                <span>{t('features_pages.cta.button')}</span>
                <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
              </Link>
            </div>
            <div
              className="image-wrap lg:max-w-1/2 mt-2"
              data-anime="onview:-100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;"
            >
              <Image
                className="image"
                alt="security-tools"
                src="/assets/images/Collaborate_hero.png"
                width="1280"
                height="800"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 