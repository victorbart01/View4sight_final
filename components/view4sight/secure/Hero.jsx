"use client";
import { useTranslation } from "@/hooks/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

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
      <div className="section-outer panel pt-8 lg:pt-10" style={{ paddingBottom: "44px" }}>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 lg:gap-4 mt-3 lg:mt-4 mb-4 lg:mb-6 max-w-750px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 
                className="h3 sm:h2 lg:h1 xl:display-6 m-0"
                dangerouslySetInnerHTML={{ __html: t('features_pages.secure.hero.title') }}
              />
              <p 
                className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70"
                dangerouslySetInnerHTML={{ __html: t('features_pages.secure.hero.subtitle') }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 