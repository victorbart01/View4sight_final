"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import { openContactModal } from "@/utlis/toggleContactModal";
import { homeLinks, links } from "@/data/menu";
import { services, featuresMenu } from "@/data/services";

// Contenu View4Sight pour le sous-menu Fonctionnalités
const view4sightFeatures = [
  {
    href: "/fonctionnalites/visualize",
    icon: "/assets/images/custom-icons/visualisation-3d.svg",
    title: "Visualize",
    description: "Navigate massive datasets"
  },
  {
    href: "/fonctionnalites/measure", 
    icon: "/assets/images/custom-icons/mesure-annotations.svg",
    title: "Measure",
    description: "Survey-grade precision"
  },
  {
    href: "/fonctionnalites/collaborate",
    icon: "/assets/images/custom-icons/collaboration.svg",
    title: "Collaborate",
    description: "Work together live"
  },
  {
    href: "/fonctionnalites/secure",
    icon: "/assets/images/custom-icons/upload-share.svg",
    title: "Secure",
    description: "Control & protect"
  }
];

// Contenu View4Sight pour le sous-menu Ressources
const view4sightResources = [
  {
    href: "/ressources/usecases",
    icon: "/assets/images/common/icons/target.svg",
    title: "Usecases",
    description: "Cas d'usage"
  },
  {
    href: "/ressources/tutorials", 
    icon: "/assets/images/common/icons/video.svg",
    title: "Tutorials",
    description: "Tutoriels vidéo"
  },
  {
    href: "/ressources/blog",
    icon: "/assets/images/common/icons/blog.svg",
    title: "Blog",
    description: "Articles & actualités"
  },
  {
    href: "/ressources/careers",
    icon: "/assets/images/common/icons/account.svg",
    title: "Recrutement",
    description: "Rejoignez l'équipe"
  }
];

export default function View4SightHeader() {
  const prevScrollPos = useRef(0);
  const ticking = useRef(false);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollPos = window.scrollY;
          const isScrollingUp = currentScrollPos < prevScrollPos.current;

          if (currentScrollPos <= 80) {
            setScrollingUp(false);
          } else if (isScrollingUp !== scrollingUp) {
            setScrollingUp(isScrollingUp);
          }

          prevScrollPos.current = currentScrollPos;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingUp]);

  return (
    <>
      <style jsx>{`
        .nav-hover-effect {
          padding: 0.5rem 0.75rem !important;
          border-radius: 0.5rem !important;
          transition: all 0.2s ease !important;
        }
        .nav-hover-effect:hover {
          background-color: rgba(0, 0, 0, 0.05) !important;
        }
        :global(.dark) .nav-hover-effect:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        :global(.demo-hover-effect:hover .mockup-container) {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08) !important;
        }
      `}</style>
    <header
      className={`uc-header header-default uc-navbar-sticky-wrap z-999 uc-sticky ${
        scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
      }`}
    >
      <nav
        className={`uc-navbar-container uc-navbar-float ft-tertiary z-1 ${
          scrollingUp ? "uc-navbar-sticky" : "uc-navbar-transparent"
        }`}
      >
        <div className="container max-w-xl">
          <div className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white">
            <div className="uc-navbar-left">
              {/* Logo View4Sight */}
              <div className="uc-logo text-dark dark:text-white">
                <Link
                  className="panel text-none"
                  href={`/`}
                  style={{ width: 160 }}
                >
                  <Image
                    className="d-block dark:d-none"
                    alt="View4Sight"
                    src="/assets/images/logo_v4s_dark.png"
                    width="160"
                    height="40"
                    style={{ height: "40px", objectFit: "contain" }}
                  />
                  <Image
                    className="d-none dark:d-block"
                    alt="View4Sight Light"
                    src="/assets/images/logo_v4s_light.png"
                    width="160"
                    height="40"
                    style={{ height: "40px", objectFit: "contain" }}
                  />
                </Link>
              </div>
              
              {/* Navigation principale */}
              <ul className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-2">
                <li className="has-dd-menu" style={{ position: "relative" }}>
                  <a href="#" role="button" aria-haspopup="true" className="nav-hover-effect text-none">
                    Features{" "}
                    <span
                      data-uc-navbar-parent-icon=""
                      className="uc-icon uc-navbar-parent-icon"
                    >
                      <svg width={12} height={12} viewBox="0 0 12 12">
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          points="1 3.5 6 8.5 11 3.5"
                        />
                      </svg>
                    </span>
                  </a>
                  <div 
                    className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar overflow-hidden uc-drop"
                    data-uc-drop="mode: click; offset: -8; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150; pos: bottom-right;"
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.15)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
                      borderRadius: "12px",
                      width: "750px",
                      backgroundColor: "#ffffff"
                    }}
                  >
                        <div className="row child-cols-6 g-0 col-match">
                          <div>
                            <div className="p-2 h-100 d-flex flex-column justify-content-center">
                              <div className="d-flex flex-column" style={{ gap: "8px" }}>
                                {view4sightFeatures.map((feature, index) => (
                                  <Link
                                    key={index}
                                    className="d-flex align-items-center text-none rounded-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 p-1"
                                    href={feature.href}
                                    style={{ gap: "14px" }}
                                  >
                                    <div className="d-flex align-items-center justify-content-center" style={{
                                      width: "44px",
                                      height: "44px", 
                                      borderRadius: "10px",
                                      backgroundColor: "rgba(254, 85, 46, 0.1)",
                                      border: "1px solid rgba(254, 85, 46, 0.2)",
                                      flexShrink: 0,
                                      position: "relative"
                                    }}>
                                      <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={22}
                                        height={22}
                                        style={{ 
                                          width: "22px", 
                                          height: "22px",
                                          filter: "brightness(0) saturate(100%) invert(38%) sepia(77%) saturate(2618%) hue-rotate(343deg) brightness(101%) contrast(94%)",
                                          display: "block",
                                          margin: "auto",
                                          position: "absolute",
                                          top: "50%",
                                          left: "50%",
                                          transform: "translate(-50%, -50%)"
                                        }}
                                      />
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="fw-bold m-0 dark:text-white" style={{ 
                                        fontSize: "15px",
                                        lineHeight: "1.2",
                                        color: "#1e293b",
                                        marginBottom: "2px"
                                      }}>
                                        {feature.title}
                                      </h6>
                                      <p className="m-0" style={{ 
                                        fontSize: "12px",
                                        lineHeight: "1.3",
                                        color: "rgba(255, 255, 255, 0.7)"
                                      }}>
                                        {feature.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div>
                            <Link 
                              href="/tarifs"
                              className="text-none d-block h-100 demo-hover-effect"
                              style={{ textDecoration: "none" }}
                            >
                              <div className="p-2 h-100 d-flex flex-column justify-content-center transition-all demo-background" style={{
                                background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                                borderRadius: "0 12px 12px 0",
                                cursor: "pointer",
                                transition: "all 0.3s ease"
                              }}>
                                <div className="text-center">
                                  {/* Browser mockup avec vraie interface View4Sight */}
                                  <div className="position-relative overflow-hidden bg-white shadow-sm mx-auto mb-4 mockup-container" style={{
                                    width: "320px",
                                    height: "200px",
                                    border: "1px solid #e2e8f0",
                                    borderRadius: "8px",
                                    transition: "all 0.3s ease"
                                  }}>
                                    {/* Browser header */}
                                    <div className="position-relative px-3 py-1" style={{
                                      background: "#f8fafc",
                                      borderBottom: "1px solid #e2e8f0",
                                      height: "28px"
                                    }}>
                                      <div className="d-flex position-absolute" style={{ 
                                        gap: "4px",
                                        left: "8px",
                                        top: "50%",
                                        transform: "translateY(-50%)"
                                      }}>
                                        <div style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#ff5f57"}}></div>
                                        <div style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#ffbd2e"}}></div>
                                        <div style={{width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#28ca42"}}></div>
                                      </div>
                                      <div className="position-absolute px-3" style={{
                                        background: "white",
                                        border: "1px solid #e2e8f0",
                                        borderRadius: "4px",
                                        fontSize: "9px",
                                        color: "#64748b",
                                        textAlign: "center",
                                        height: "18px",
                                        lineHeight: "16px",
                                        width: "140px",
                                        left: "50%",
                                        top: "50%",
                                        transform: "translate(-50%, -50%)"
                                      }}>
                                        view4sight.com
                                      </div>
                                    </div>
                                    
                                    {/* Interface View4Sight réelle */}
                                    <div className="position-relative" style={{ height: "172px" }}>
                                      <Image
                                        src="/assets/images/mockup-view4sight.png"
                                        alt="Interface View4Sight - Cathédrale de Chartes"
                                        width={320}
                                        height={172}
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                          objectPosition: "center top",
                                          transition: "all 0.3s ease"
                                        }}
                                      />
                                    </div>
                                  </div>
                                  
                                  {/* Title and description */}
                                  <h5 className="fw-bold mb-2" style={{
                                    fontSize: "18px",
                                    color: "#1e293b",
                                    lineHeight: "1.3",
                                    transition: "color 0.3s ease"
                                  }}>
                                    View4Sight
                                  </h5>
                                  <p className="m-0" style={{
                                    fontSize: "14px",
                                    color: "#64748b",
                                    lineHeight: "1.4",
                                    transition: "color 0.3s ease"
                                  }}>
                                    Disponible directement dans votre navigateur
                                  </p>
                                </div>
                              </div>
                  </Link>
                          </div>
                        </div>
                      </div>
                </li>
                <li>
                  <Link className="text-none nav-hover-effect" href="/tarifs">
                    <span>Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-none nav-hover-effect" href="/securite">
                    <span>Security</span>
                  </Link>
                </li>
                <li className="has-dd-menu" style={{ position: "relative" }}>
                  <a href="#" role="button" aria-haspopup="true" className="nav-hover-effect text-none">
                    Ressources{" "}
                    <span
                      data-uc-navbar-parent-icon=""
                      className="uc-icon uc-navbar-parent-icon"
                    >
                      <svg width={12} height={12} viewBox="0 0 12 12">
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          points="1 3.5 6 8.5 11 3.5"
                        />
                      </svg>
                    </span>
                  </a>
                  <div 
                    className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar overflow-hidden uc-drop"
                    data-uc-drop="mode: click; offset: -8; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150; pos: bottom-right;"
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.15)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
                      borderRadius: "12px",
                      width: "700px",
                      backgroundColor: "#ffffff"
                    }}
                  >
                        <div className="row g-0 col-match">
                          <div className="col-5">
                            <div className="px-2 py-1 h-100 d-flex flex-column justify-content-center">
                              <div className="d-flex flex-column" style={{ gap: "6px" }}>
                                {view4sightResources.map((resource, index) => (
                                  <Link
                                    key={index}
                                    className="d-flex align-items-center text-none rounded-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 p-1"
                                    href={resource.href}
                                    style={{ gap: "10px" }}
                                  >
                                    <div className="d-flex align-items-center justify-content-center" style={{
                                      width: "44px",
                                      height: "44px", 
                                      borderRadius: "10px",
                                      backgroundColor: "rgba(254, 85, 46, 0.1)",
                                      border: "1px solid rgba(254, 85, 46, 0.2)",
                                      flexShrink: 0,
                                      position: "relative"
                                    }}>
                                      <Image
                                        src={resource.icon}
                                        alt={resource.title}
                                        width={22}
                                        height={22}
                                        style={{ 
                                          width: "22px", 
                                          height: "22px",
                                          filter: "brightness(0) saturate(100%) invert(38%) sepia(77%) saturate(2618%) hue-rotate(343deg) brightness(101%) contrast(94%)",
                                          display: "block",
                                          margin: "auto",
                                          position: "absolute",
                                          top: "50%",
                                          left: "50%",
                                          transform: "translate(-50%, -50%)"
                                        }}
                                      />
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="fw-bold m-0 dark:text-white" style={{ 
                                        fontSize: "15px",
                                        lineHeight: "1.2",
                                        color: "#1e293b",
                                        marginBottom: "2px"
                                      }}>
                                        {resource.title}
                                      </h6>
                                      <p className="m-0" style={{ 
                                        fontSize: "12px",
                                        lineHeight: "1.3",
                                        color: "#64748b"
                                      }}>
                                        {resource.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="col-7">
                            <div className="d-flex flex-column h-100" style={{ gap: "0px" }}>
                              {/* Section Centre d'aide - Top */}
                              <Link 
                                href="/ressources/support"
                                className="text-none d-block demo-hover-effect"
                                style={{ textDecoration: "none", flex: "1" }}
                              >
                                <div className="p-2 h-100 d-flex align-items-center justify-content-center transition-all support-hover" style={{
                                  background: "#222222",
                                  borderRadius: "0 12px 0 0",
                                  cursor: "pointer",
                                  transition: "all 0.3s ease",
                                  minHeight: "70px"
                                }}>
                                  <Image
                                    src="/assets/images/support-mockup.svg"
                                    alt="Centre d'aide"
                                    width={180}
                                    height={60}
                                    style={{
                                      maxWidth: "100%",
                                      height: "auto"
                                    }}
                                  />
                                </div>
                              </Link>

                              {/* Section Documentation - Bottom */}
                              <Link 
                                href="/ressources/docs"
                                className="text-none d-block demo-hover-effect"
                                style={{ textDecoration: "none", flex: "1" }}
                              >
                                <div className="p-2 h-100 d-flex align-items-center justify-content-center transition-all docs-hover" style={{
                                  background: "#222222",
                                  borderRadius: "0 0 12px 0",
                                  cursor: "pointer",
                                  transition: "all 0.3s ease",
                                  minHeight: "70px"
                                }}>
                                  <Image
                                    src="/assets/images/docs-mockup.svg"
                                    alt="Documentation"
                                    width={180}
                                    height={60}
                                    style={{
                                      maxWidth: "100%",
                                      height: "auto"
                                    }}
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                </li>
              </ul>
            </div>
            
            <div className="uc-navbar-right">
              {/* Request Demo */}
              <div className="d-none xl:d-block">
                <a
                  className="text-none fw-medium nav-hover-effect"
                  onClick={openContactModal}
                  role="button"
                >
                  <span>Request a demo</span>
                </a>
              </div>
              
              {/* Login */}
              <div className="d-none lg:d-block">
                <Link className="text-none fw-medium nav-hover-effect" href={`/sign-in`}>
                  <span>Log in</span>
                </Link>
              </div>
              
              {/* Free Trial Button */}
              <Link
                className="btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex"
                href={`/tarifs`}
              >
                Start free trial
              </Link>
              
              {/* Mobile Menu Toggle */}
              <a
                className="d-block lg:d-none uc-icon uc-navbar-toggle-icon"
                onClick={openMobileMenu}
              >
                <svg width={20} height={20} viewBox="0 0 20 20">
                  <rect className="line-1" y={3} width={20} height={2} />
                  <rect className="line-2" y={9} width={20} height={2} />
                  <rect className="line-3" y={9} width={20} height={2} />
                  <rect className="line-4" y={15} width={20} height={2} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    
    <style jsx>{`
      .support-hover:hover {
        background: #2a2a2a !important;
        transform: scale(1.02);
      }
      
      .docs-hover:hover {
        background: #2a2a2a !important;
        transform: scale(1.02);
      }
    `}</style>
    </>
  );
} 