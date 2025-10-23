"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import { usePathname } from "next/navigation";
import { getLocalizedPath, locales } from "@/lib/i18n";
import { useTranslation } from "@/hooks/useTranslation";

// This function is no longer needed - we use CSS mask instead for better color accuracy

// Feature colors mapping
const featureColors = {
  "visualize": "#00FF00",
  "measure": "#FF0055",
  "collaborate": "#FF4500",
  "secure": "#00FFFF"
};

export default function View4SightMobileMenu() {
  const pathname = usePathname();
  const [expandedMenu, setExpandedMenu] = useState(-1);
  const elementRef = useRef(null);
  const containerRef = useRef(null);
  const { t } = useTranslation();

  // Extract current locale from pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentLocale = locales.includes(pathSegments[0]) ? pathSegments[0] : 'en';

  // Helper function to create locale-aware links
  const createLocalizedLink = (path) => {
    return getLocalizedPath(path, currentLocale);
  };

  // Define menu structure with translations
  const view4sightMenuItems = [
    {
      label: t('navigation.home'),
      href: createLocalizedLink("/")
    },
    {
      label: t('navigation.features'),
      subItems: [
        {
          label: t('features.visualize.title'),
          href: createLocalizedLink("/fonctionnalites/visualize"),
          description: t('features.visualize.description'),
          icon: "/assets/images/custom-icons/visualisation-3d.svg",
          color: featureColors.visualize
        },
        {
          label: t('features.measure.title'),
          href: createLocalizedLink("/fonctionnalites/measure"),
          description: t('features.measure.description'),
          icon: "/assets/images/custom-icons/mesure-annotations.svg",
          color: featureColors.measure
        },
        {
          label: t('features.collaborate.title'),
          href: createLocalizedLink("/fonctionnalites/collaborate"),
          description: t('features.collaborate.description'),
          icon: "/assets/images/custom-icons/collaboration.svg",
          color: featureColors.collaborate
        },
        {
          label: t('features.secure.title'),
          href: createLocalizedLink("/fonctionnalites/secure"),
          description: t('features.secure.description'),
          icon: "/assets/images/custom-icons/upload-share.svg",
          color: featureColors.secure
        }
      ]
    },
    {
      label: t('navigation.pricing'),
      href: createLocalizedLink("/tarifs")
    },
    {
      label: t('navigation.security'),
      href: createLocalizedLink("/securite")
    },
    {
      label: t('navigation.resources'),
      subItems: [
        {
          label: t('resources_menu.use_cases.title'),
          href: createLocalizedLink("/ressources/use-cases"),
          description: t('resources_menu.use_cases.description'),
          icon: "/assets/images/common/icons/target.svg"
        },
        {
          label: t('resources_menu.blog.title'),
          href: createLocalizedLink("/ressources/blog"),
          description: t('resources_menu.blog.description'),
          icon: "/assets/images/common/icons/blog.svg"
        },
        {
          label: t('resources_menu.careers.title'),
          href: createLocalizedLink("/ressources/carrieres"),
          description: t('resources_menu.careers.description'),
          icon: "/assets/images/common/icons/account.svg"
        }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        containerRef.current.contains(event.target) &&
        elementRef.current &&
        !elementRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  const isMenuActive = (menu) => {
    if (menu.href) {
      return pathname === menu.href || pathname.startsWith(menu.href + "/");
    }
    if (menu.subItems) {
      return menu.subItems.some((subItem) => 
        pathname === subItem.href || pathname.startsWith(subItem.href + "/")
      );
    }
    return false;
  };

  const toggleSubmenu = (index) => {
    setExpandedMenu(expandedMenu === index ? -1 : index);
  };

  return (
    <>
      <style jsx global>{`
        .view4sight-mobile-menu {
          position: fixed !important;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          display: none !important;
        }
        
        .view4sight-mobile-menu.active {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
        }
        
        .menu-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: 320px;
          height: 100vh;
          background: #222222;
          color: white;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
        }
        
        .view4sight-mobile-menu.active .menu-panel {
          transform: translateX(0);
        }
        
        .menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 20px;
          border-bottom: 1px solid #333;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
        }
        
        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          transition: background-color 0.2s ease;
        }
        
        .close-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .menu-content {
          flex: 1;
          padding: 12px 0;
          overflow-y: auto;
        }
        
        .menu-item {
          margin-bottom: 0;
        }
        
        .menu-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .menu-link:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
        }
        
        .menu-link.active {
          background-color: rgba(254, 85, 46, 0.1);
          border-left-color: #FE552E;
          color: #FE552E;
        }
        
        .menu-text {
          flex: 1;
        }
        
        .arrow-icon {
          width: 16px;
          height: 16px;
          transform: rotate(0deg);
          transition: transform 0.2s ease;
          margin-left: 8px;
        }
        
        .arrow-icon.expanded {
          transform: rotate(90deg);
        }
        
        .submenu {
          background-color: rgba(0, 0, 0, 0.2);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        
        .submenu.expanded {
          max-height: 500px;
        }
        
        .submenu-item {
          padding: 0;
        }
        
        .submenu-link {
          display: block;
          padding: 12px 20px;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.2s ease;
          border-radius: 8px;
          margin: 2px 0;
        }
        
        .submenu-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateX(4px);
        }
        
        .submenu-link.active {
          background-color: rgba(254, 85, 46, 0.2);
          color: #FE552E;
        }
        
        .submenu-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .submenu-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background-color: rgba(254, 85, 46, 0.1);
          border: 1px solid rgba(254, 85, 46, 0.2);
          flex-shrink: 0;
        }
        
        .submenu-text {
          flex: 1;
        }
        
        .submenu-label {
          font-weight: 500;
          font-size: 14px;
        }
        
        .submenu-description {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 2px;
        }
        
        .menu-footer {
          padding: 24px 20px;
          border-top: 1px solid #333;
          background: #1a1a1a;
        }
        
        .footer-btn {
          width: 100%;
          padding: 14px 24px;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          min-height: 50px;
        }
        
        .btn-login {
          background: #FE552E;
          color: white;
          border: 2px solid #FE552E;
        }
        
        .btn-login:hover {
          background: #E6452A;
          border-color: #E6452A;
          color: white;
          text-decoration: none;
          transform: translateY(-1px);
        }
        
        .btn-get-started {
          background: #FE552E;
          color: white;
          margin-bottom: 0;
          border: 2px solid #FE552E;
        }
        
        .btn-get-started:hover {
          background: #E6452A;
          border-color: #E6452A;
          color: white;
          text-decoration: none;
          transform: translateY(-1px);
        }
        
        @media (max-width: 400px) {
          .menu-panel {
            width: 280px;
          }
        }
      `}</style>
      
      <div
        ref={containerRef}
        id="uc-menu-panel"
        className="view4sight-mobile-menu"
        style={{
          display: 'none',
          opacity: 0,
          visibility: 'hidden',
          pointerEvents: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.5)',
          transition: 'opacity 0.3s ease, visibility 0.3s ease'
        }}
      >
        <div 
          ref={elementRef} 
          className="menu-panel"
          style={{
            transform: 'translateX(100%)',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '320px',
            height: '100vh',
            background: '#222222',
            color: 'white',
            transition: 'transform 0.3s ease',
            boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Header avec logo et bouton fermer */}
          <div className="menu-header">
            <div className="logo-container">
              <Link href={createLocalizedLink("/")} className="text-decoration-none">
                <Image
                  src="/assets/images/logo_v4s_light.png"
                  alt="View4Sight"
                  width="140"
                  height="35"
                  style={{ 
                    height: "35px", 
                    width: "auto", 
                    objectFit: "contain",
                    display: "block"
                  }}
                  priority
                />
              </Link>
            </div>
            <button
              className="close-btn"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Menu principal */}
          <div className="menu-content">
            {view4sightMenuItems.map((item, index) => (
              <div key={index} className="menu-item">
                {item.href ? (
                  // Lien simple
                  <Link
                    href={item.href}
                    className={`menu-link ${isMenuActive(item) ? 'active' : ''}`}
                  >
                    <span className="menu-text">{item.label}</span>
                  </Link>
                ) : (
                  // Item avec sous-menu
                  <>
                    <button
                      className={`menu-link w-100 text-start border-0 bg-transparent ${isMenuActive(item) ? 'active' : ''}`}
                      onClick={() => toggleSubmenu(index)}
                    >
                      <span className="menu-text">{item.label}</span>
                      <svg
                        className={`arrow-icon ${expandedMenu === index ? 'expanded' : ''}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    
                    {/* Sous-menu */}
                    <div className={`submenu ${expandedMenu === index ? 'expanded' : ''}`}>
                      {item.subItems?.map((subItem, subIndex) => (
                        <div key={subIndex} className="submenu-item">
                          <Link
                            href={subItem.href}
                            className={`submenu-link ${pathname === subItem.href || pathname.startsWith(subItem.href + "/") ? 'active' : ''}`}
                          >
                            <div className="submenu-content">
                              {subItem.icon && (
                                <div className="submenu-icon">
                                  {subItem.color ? (
                                    <div
                                      style={{
                                        width: "24px",
                                        height: "24px",
                                        backgroundColor: subItem.color,
                                        WebkitMaskImage: `url(${subItem.icon})`,
                                        maskImage: `url(${subItem.icon})`,
                                        WebkitMaskRepeat: "no-repeat",
                                        maskRepeat: "no-repeat",
                                        WebkitMaskPosition: "center",
                                        maskPosition: "center",
                                        WebkitMaskSize: "contain",
                                        maskSize: "contain",
                                        filter: `drop-shadow(0 0 3px ${subItem.color}) brightness(1.2)`
                                      }}
                                    />
                                  ) : (
                                    <Image
                                      src={subItem.icon}
                                      alt={subItem.label}
                                      width={24}
                                      height={24}
                                      style={{
                                        width: "24px",
                                        height: "24px",
                                        filter: "brightness(0) saturate(100%) invert(38%) sepia(77%) saturate(2618%) hue-rotate(343deg) brightness(101%) contrast(94%)"
                                      }}
                                    />
                                  )}
                                </div>
                              )}
                              <div className="submenu-text">
                                <div className="submenu-label">{subItem.label}</div>
                                {subItem.description && (
                                  <div className="submenu-description">{subItem.description}</div>
                                )}
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Footer avec boutons CTA */}
          <div className="menu-footer">
            <a 
              href="https://app.view4sight.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn btn-login"
            >
              {t('navigation.login')}
            </a>
            <Link href={createLocalizedLink("/tarifs")} className="footer-btn btn-get-started">
              {t('navigation.start_free_trial')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 