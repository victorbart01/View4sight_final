"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedPath, locales } from "@/lib/i18n";
import LanguageSelector from "./LanguageSelector";

const view4sightSocialLinks = [
  { href: "https://linkedin.com/company/view4sight", iconClass: "unicon-logo-linkedin" },
  { href: "https://twitter.com/view4sight", iconClass: "unicon-logo-x-filled" },
  { href: "https://github.com/view4sight", iconClass: "unicon-logo-github" },
];

export default function View4SightFooter() {
  const pathname = usePathname();
  const { t, isLoading } = useTranslation();

  // Extract current locale from pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentLocale = locales.includes(pathSegments[0]) ? pathSegments[0] : 'en';

  // Helper function to create locale-aware links
  const createLocalizedLink = (path) => {
    return getLocalizedPath(path, currentLocale);
  };

  // Generate footer links from translations (localized)
  const view4sightFooterLinks = [
    {
      title: t('footer.sections.product'),
      links: [
        { href: createLocalizedLink("/fonctionnalites"), label: t('footer.links.features') },
        { href: createLocalizedLink("/tarifs"), label: t('footer.links.pricing') },
        { href: createLocalizedLink("/securite"), label: t('footer.links.security') },
        { href: createLocalizedLink("/page-contact"), label: t('footer.links.request_demo') },
      ],
    },
    {
      title: t('footer.sections.resources'), 
      links: [
        { href: createLocalizedLink("/ressources/use-cases"), label: t('footer.links.use_cases') },
        { href: createLocalizedLink("/ressources"), label: t('footer.links.documentation') },
        { href: createLocalizedLink("/ressources"), label: t('footer.links.support_center') },
        { href: createLocalizedLink("/ressources"), label: t('footer.links.tutorials') },
      ],
    },
    {
      title: t('footer.sections.company'),
      links: [
        { href: createLocalizedLink("/ressources"), label: t('footer.links.blog') },
        { href: createLocalizedLink("/ressources"), label: t('footer.links.careers') },
        { href: createLocalizedLink("/page-privacy"), label: t('footer.links.privacy') },
        { href: createLocalizedLink("/page-terms"), label: t('footer.links.terms') },
      ],
    },
  ];

  if (isLoading) {
    return (
      <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
        <div className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
          <div className="container max-w-xl">
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
      <div className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                {/* Logo et description */}
                <div className="col-12 lg:col-5">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-3">
                      <Link href={createLocalizedLink("/")}>
                        <Image
                          className="text-primary"
                          alt="View4Sight"
                          src="/assets/images/logo_v4s_light.png"
                          width="160"
                          height="40"
                          style={{ height: "40px", objectFit: "contain" }}
                        />
                      </Link>
                      <p className="text-gray-300 dark:text-gray-400">
                        {t('footer.description')}
                      </p>
                    </div>
                    <div className="vstack gap-2">
                      <ul className="nav-x gap-3">
                        {view4sightSocialLinks.map((link, index) => (
                          <li key={index}>
                            <a 
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-primary transition-colors"
                            >
                              <i className={`icon icon-2 ${link.iconClass}`} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Colonnes de liens */}
                {view4sightFooterLinks.map((section, index) => (
                  <div key={index} className="col-6 lg:col">
                    <div className="panel">
                      <h6 className="text-white fw-medium mb-3">{section.title}</h6>
                      <ul className="nav-y gap-2 fw-normal">
                        {section.links.map((link, i) => (
                          <li key={i}>
                            <Link 
                              href={link.href} 
                              className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer bottom */}
            <div className="uc-footer-bottom panel hstack gap-4 justify-between pt-4 lg:pt-6 border-top border-gray-700 dark:text-white">
              <div className="d-flex align-items-center">
                <p className="text-gray-400 m-0">
                  {t('footer.copyright', { year: new Date().getFullYear() })}
                </p>
              </div>

              <div className="hstack gap-3">
                {/* GDPR and France hosting */}
                <div className="d-flex align-items-center gap-2">
                  <i className="unicon-shield-check text-primary"></i>
                  <span className="fs-7 text-gray-300">{t('footer.gdpr_compliant')}</span>
                </div>
                <div className="vr bg-gray-700" />
                <div className="d-flex align-items-center gap-2">
                  <i className="unicon-servers text-primary"></i>
                  <span className="fs-7 text-gray-300">{t('footer.hosted_france')}</span>
                </div>
                <div className="vr bg-gray-700" />
                
                {/* Language Selector */}
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 