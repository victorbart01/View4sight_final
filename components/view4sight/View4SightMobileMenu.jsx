"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import { usePathname } from "next/navigation";
import { getLocalizedPath, locales } from "@/lib/i18n";

// Menu items base pour View4Sight (chemins relatifs)
const view4sightMenuItemsBase = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    subItems: [
      {
        label: "Visualize",
        href: "/fonctionnalites/visualize",
        description: "Navigate massive datasets"
      },
      {
        label: "Measure", 
        href: "/fonctionnalites/measure",
        description: "Survey-grade precision"
      },
      {
        label: "Collaborate",
        href: "/fonctionnalites/collaborate",
        description: "Work together live"
      },
      {
        label: "Secure",
        href: "/fonctionnalites/secure",
        description: "Control & protect"
      }
    ]
  },
  {
    label: "Pricing",
    href: "/tarifs",
  },
  {
    label: "Security",
    href: "/securite",
  },
  {
    label: "Resources",
    subItems: [
      {
        label: "Use Cases",
        href: "/ressources/use-cases",
        description: "Real-world applications"
      },
      {
        label: "Tutorials",
        href: "/ressources/tutorials",
        description: "Video guides & how-tos"
      },
      {
        label: "Blog",
        href: "/ressources/blog",
        description: "Latest news & insights"
      },
      {
        label: "Recrutement",
        href: "/ressources/carrieres",
        description: "Join our team"
      },
      {
        label: "Support",
        href: "/ressources/support", 
        description: "Help center"
      },
      {
        label: "Documentation",
        href: "/ressources/docs",
        description: "Technical documentation"
      }
    ]
  }
];

export default function View4SightMobileMenu() {
  const pathname = usePathname();
  const [expandedMenu, setExpandedMenu] = useState(-1);
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  // Extract current locale from pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentLocale = locales.includes(pathSegments[0]) ? pathSegments[0] : 'en';

  // Helper function to create locale-aware links
  const createLocalizedLink = (path) => {
    return getLocalizedPath(path, currentLocale);
  };

  // Create localized version of menu items
  const localizeMenuItem = (item) => {
    const localizedItem = { ...item };
    if (item.href) {
      localizedItem.href = createLocalizedLink(item.href);
    }
    if (item.subItems) {
      localizedItem.subItems = item.subItems.map(subItem => ({
        ...subItem,
        href: createLocalizedLink(subItem.href)
      }));
    }
    return localizedItem;
  };

  const view4sightMenuItems = view4sightMenuItemsBase.map(localizeMenuItem);

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
          padding: 14px 20px 14px 40px;
          border-left: 3px solid transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }
        
        .submenu-item:last-child {
          border-bottom: none;
        }
        
        .submenu-link {
          display: block;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 15px;
          line-height: 1.4;
          transition: all 0.2s ease;
          padding: 4px 0;
        }
        
        .submenu-link:hover {
          color: #FE552E;
        }
        
        .submenu-link.active {
          color: #FE552E;
        }
        
        .submenu-description {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
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
                            <div>{subItem.label}</div>
                            {subItem.description && (
                              <div className="submenu-description">{subItem.description}</div>
                            )}
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
              Log in
            </a>
            <Link href={createLocalizedLink("/tarifs")} className="footer-btn btn-get-started">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 