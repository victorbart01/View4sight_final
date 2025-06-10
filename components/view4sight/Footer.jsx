import React from "react";
import Link from "next/link";
import Image from "next/image";

// Données spécifiques à View4sight
const view4sightFooterLinks = [
  {
    title: "Product",
    links: [
      { href: "/fonctionnalites", label: "Features" },
      { href: "/tarifs", label: "Pricing" },
      { href: "/securite", label: "Security" },
      { href: "/page-contact", label: "Request Demo" },
    ],
  },
  {
    title: "Resources", 
    links: [
      { href: "/ressources", label: "Documentation" },
      { href: "/ressources", label: "Support Center" },
      { href: "/ressources", label: "Tutorials" },
      { href: "/ressources", label: "API Reference" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/page-about", label: "About Us" },
      { href: "/page-contact", label: "Contact" },
      { href: "/ressources", label: "Blog" },
      { href: "/ressources", label: "Careers" },
    ],
  },
];

const view4sightSocialLinks = [
  { href: "https://linkedin.com/company/view4sight", iconClass: "unicon-logo-linkedin" },
  { href: "https://twitter.com/view4sight", iconClass: "unicon-logo-x-filled" },
  { href: "https://github.com/view4sight", iconClass: "unicon-logo-github" },
];

export default function View4SightFooter() {
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
                      <Link href="/view4sight">
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
                        The leading web-based platform for 3D point cloud visualization and collaboration. 
                        Transform your survey data into interactive experiences accessible from any browser.
                      </p>
                    </div>
                    <div className="vstack gap-2">
                      <h6 className="text-white fw-medium mb-2">French Data Sovereignty</h6>
                      <div className="hstack gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <i className="unicon-shield-check text-primary"></i>
                          <span className="fs-7 text-gray-300">GDPR Compliant</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <i className="unicon-servers text-primary"></i>
                          <span className="fs-7 text-gray-300">Hosted in France</span>
                        </div>
                      </div>
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
            <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top border-gray-700 dark:text-white">
              <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-2 lg:gap-4">
                <p className="text-gray-400 m-0">
                  View4Sight © {new Date().getFullYear()}, All rights reserved.
                </p>
                <ul className="nav-x gap-3 fw-normal">
                  <li>
                    <Link href="/page-privacy" className="text-gray-400 hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/page-terms" className="text-gray-400 hover:text-primary transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/securite" className="text-gray-400 hover:text-primary transition-colors">
                      Security
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="hstack justify-center lg:justify-end gap-3">
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
                <div className="vr bg-gray-700" />
                <div className="d-flex align-items-center gap-2">
                  <i className="unicon-heart text-primary fs-8"></i>
                  <span className="fs-7 text-gray-400">Made in France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 