"use client";
import Accordion from "@/components/common/Accordion";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function FaqShort() {
  const { t, isLoading } = useTranslation();

  if (isLoading) {
    return (
      <div id="faq" className="faq section panel scrollSpysection">
        <div className="section-outer panel py-6 xl:py-10 bg-gray-900">
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

  // FAQ data from translations
  const view4sightFaqs = t('faq_short.items').map((item, index) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer
  }));

  return (
    <div id="faq" className="faq section panel scrollSpysection">
      <div className="section-outer panel py-6 xl:py-10 bg-gray-900">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="faq-inner panel row child-cols-12 lg:child-cols justify-between g-4">
              <div className="lg:col-5 sticky-element">
                <div
                  className="uc-sticky-placeholder"
                  style={{ height: 0, width: 0, margin: 0 }}
                  hidden=""
                />
                <div className="panel vstack items-start gap-2 uc-sticky">
                  <div className="cstack gap-1 py-1 px-3 border border-white border-opacity-30 rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                    <span className="fs-8 fw-bold text-uppercase text-white">{t('faq_short.badge')}</span>
                  </div>
                  <h2 className="h3 lg:h2 m-0 text-white">{t('faq_short.title')}</h2>
                  <p className="fs-6 lg:fs-5 text-white text-opacity-80">
                    {t('faq_short.subtitle')}
                  </p>
                  <a
                    href="mailto:pb@integral4.fr"
                    className="btn btn-sm lg:btn-md btn-primary px-3 mt-2"
                  >
                    <span>{t('faq_short.still_question')}</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                  </a>
                </div>
              </div>
              <div className="lg:col-6">
                <div className="panel">
                  <ul
                    className="gap-2 uc-accordion"
                    data-uc-accordion="targets: > li; multiple: true"
                  >
                    <Accordion 
                      faqData={view4sightFaqs}
                      parentClass="panel p-2 md:p-4 border rounded-1-5" 
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 