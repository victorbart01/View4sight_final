"use client";
import React from "react";
import Context from "@/context/Context";
import { LanguageProvider } from "@/context/LanguageContext";
import "../../public/assets/css/main.scss";
import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../../public/assets/custom.scss";

import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import Cart from "@/components/common/Cart";
import { useEffect } from "react";
import anime from "animejs";
import { usePathname } from "next/navigation";
import BacktoTop from "@/components/common/BacktoTop";
import { ParallaxProvider } from "react-scroll-parallax";
import ContactModal from "@/components/modals/ContactModal";
import NewsletterModal from "@/components/modals/NewsletterModal";
import SearchModal from "@/components/modals/SearchModal";
import View4SightHeader from "@/components/view4sight/Header";
import View4SightFooter from "@/components/view4sight/Footer";
import ZohoChat from "@/components/view4sight/ZohoChat";
import { localeNames } from "@/lib/i18n";

export default function LocaleLayout({ children, params }) {
  const pathname = usePathname();
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  
  // Check if current page is login page
  const isLoginPage = pathname?.includes('/sign-in');
  
  // Validate locale
  const validLocale = Object.keys(localeNames).includes(locale) ? locale : 'en';
  const localeInfo = localeNames[validLocale];
  
  useEffect(() => {
    // Set document language and direction
    document.documentElement.lang = validLocale;
    document.documentElement.dir = localeInfo.direction;
  }, [validLocale, localeInfo.direction]);
  
  useEffect(() => {
    const elements = document.querySelectorAll("[data-anime]");

    // Intersection Observer callback function
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const dataAnime = element.getAttribute("data-anime");

          const modifieddataAnime = dataAnime.replace(
            /anime\.stagger\((\d+),\s*\{start:\s*(\d+)\}\)/,
            "$1,$2"
          );

          if (modifieddataAnime) {
            const parseAnimeData = (data) => {
              const settings = {};
              data.split(";").forEach((param) => {
                const [key, value] = param
                  .split(":")
                  .map((item) => item.trim());
                if (key && value) {
                  settings[key] = value;
                }
              });
              return settings;
            };

            const animeSettings = parseAnimeData(modifieddataAnime);

            let targets;
            if (animeSettings.targets === ">*") {
              targets = element.children;
            } else {
              targets = element?.querySelectorAll(animeSettings.targets);
            }

            // Apply Anime.js animation
            anime({
              loop: animeSettings.loop ? true : false,
              targets: targets,
              translateX: JSON.parse(animeSettings.translateX || "[0, 0]"),
              translateY: JSON.parse(animeSettings.translateY || "[48, 0]"),
              opacity: [0, 1],
              easing: animeSettings.easing || "spring(1, 80, 10, 0)",
              duration: Number(animeSettings.duration) || 450,
              delay: animeSettings.delay
                ? animeSettings.delay.includes(",")
                  ? anime.stagger(animeSettings.delay.split(",")[0] / 1, {
                      start: animeSettings.delay.split(",")[1] / 1,
                    })
                  : animeSettings.delay / 1
                : 0,
            });

            // Unobserve the element after animation triggers
            observer.unobserve(element);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [pathname]);

  return (
    <LanguageProvider>
      <Context>
        <ParallaxProvider>
          <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
            {/* Only show header if not on login page */}
            {!isLoginPage && <View4SightHeader />}
            <div id="wrapper" className="wrap">
              {children}
            </div>
            {/* Only show footer if not on login page */}
            {!isLoginPage && <View4SightFooter />}
          </div>
        </ParallaxProvider>
        <ContactModal />
        <NewsletterModal />
        <SearchModal />
        <Cart />
        <BacktoTop />
        {/* Chat Zoho - Ne pas afficher sur la page de connexion */}
        {!isLoginPage && <ZohoChat />}
      </Context>
    </LanguageProvider>
  );
} 