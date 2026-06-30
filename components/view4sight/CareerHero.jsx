"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function CareerHero() {
  const { t, isLoading } = useTranslation();
  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden"
      style={{
        backgroundColor: "#1C1C1E",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.5px), linear-gradient(180deg, rgba(14,14,14,0) calc(100% - 160px), #0e0e0e 100%)",
        backgroundSize: "24px 24px, 100% 100%",
      }}
    >
      <div className="section-outer panel pt-9 lg:pt-10 pb-4 sm:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-850px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                {isLoading ? "" : t('careers.hero.title')}
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                {isLoading ? "" : t('careers.hero.subtitle')}
              </p>
            </div>
            <div className="panel">
              <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded lg:rounded-2 uc-transition-toggle overflow-hidden">
                <Image
                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                  alt="View4Sight Career"
                  src="/assets/images/career.webp"
                  width="1500"
                  height="1000"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 