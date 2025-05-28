"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import { openContactModal } from "@/utlis/toggleContactModal";

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
                  href={`/view4sight`}
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
                <li>
                  <Link className="text-none" href="/view4sight">
                    <span>Accueil</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-none" href="/fonctionnalites">
                    <span>Fonctionnalités</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-none" href="/page-pricing">
                    <span>Tarifs</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-none" href="/securite">
                    <span>Sécurité</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-none" href="/ressources">
                    <span>Ressources</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="uc-navbar-right">
              {/* Request Demo */}
              <div className="d-none xl:d-block">
                <a
                  className="text-none fw-medium"
                  onClick={openContactModal}
                  role="button"
                >
                  <span>Request a demo</span>
                </a>
              </div>
              
              {/* Login */}
              <div className="d-none lg:d-block">
                <Link className="text-none fw-medium" href={`/sign-in`}>
                  <span>Log in</span>
                </Link>
              </div>
              
              {/* Free Trial Button */}
              <Link
                className="btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex"
                href={`/page-pricing`}
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
  );
} 