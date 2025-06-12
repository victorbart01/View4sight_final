"use client";
import Link from "next/link";
import Image from "next/image";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-cover bg-secondary dark:bg-gray-800" />
      <div className="section-outer panel pt-9 pb-6">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols justify-center lg:justify-between items-center g-0">
              <div className="col-12 sm:col-10 md:col-8 lg:col-6">
                <div
                  className="panel vstack gap-5 sm:text-center lg:text-start rtl:lg:text-end py-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  {/* Groupe pastille + titre avec espacement harmonisé */}
                  <div className="vstack gap-3">
                    {/* Pastille d'annonce discrète */}
                    <div className="hero-badge">
                      3D point cloud viewer
                    </div>
                    
                    {/* Titre principal avec hiérarchie forte */}
                    <div className="vstack gap-1">
                      <h1 className="h2 xl:display-5 fw-bold mb-0 lh-sm text-dark dark:text-white">
                        No CAD License.
                      </h1>
                      <h1 className="h2 xl:display-5 fw-bold mb-0 lh-sm text-dark dark:text-white">
                        No Plugin Hell.
                      </h1>
                      <h1 className="h2 xl:display-5 fw-bold mb-0 lh-sm">
                        <span className="text-primary dark:text-secondary">
                          Just Upload & Go.
                        </span>
                      </h1>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="fs-5 lg:fs-4 text-dark dark:text-white text-opacity-80 lh-base mb-0 pe-lg-4">
                    Turn massive point clouds into collaborative workspaces.<br />
                    Real-time measurements, smart annotations, instant sharing.<br />
                    Zero software required.
                  </p>
                  
                  {/* Boutons CTA avec style amélioré */}
                  <div className="hstack gap-3 flex-wrap">
                    <Link
                      href={`/tarifs`}
                      className="btn btn-lg btn-primary rounded-pill px-5 py-3 text-white fw-medium fs-6"
                    >
                      Get started
                    </Link>
                    <a
                      onClick={openContactModal}
                      className="btn btn-lg btn-outline-primary rounded-pill px-5 py-3 fw-medium fs-6 cursor-pointer"
                      role="button"
                    >
                      See how it works
                    </a>
                  </div>
                  
                  {/* Points clés avec icônes check-circle */}
                  <div className="hstack gap-4 flex-wrap">
                    <div className="hstack gap-1 align-items-center">
                      <Image
                        src="/assets/images/common/icons/check-circle.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        className="flex-shrink-0 text-primary"
                      />
                      <span className="fs-8 text-dark dark:text-white fw-bold text-nowrap">
                        30-day free trial
                      </span>
                    </div>
                    <div className="hstack gap-1 align-items-center">
                      <Image
                        src="/assets/images/common/icons/check-circle.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        className="flex-shrink-0 text-primary"
                      />
                      <span className="fs-8 text-dark dark:text-white fw-bold text-nowrap">
                        No credit card required
                      </span>
                    </div>
                    <div className="hstack gap-1 align-items-center">
                      <Image
                        src="/assets/images/common/icons/check-circle.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        className="flex-shrink-0 text-primary"
                      />
                      <span className="fs-8 text-dark dark:text-white fw-bold text-nowrap">
                        150GB storage included
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div
                  className="expand-container mt-4 lg:mt-4 ltr:ms-2 rtl:me-2"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  {/* TODO: Remplacer par une capture d'écran de View4Sight */}
                  <Image
                    className="ltr:d-block rtl:d-none"
                    alt="View4Sight 3D Point Cloud Viewer"
                    src="/assets/images/template/hero-mockup.png"
                    width="1492"
                    height="1250"
                  />
                  <Image
                    className="ltr:d-none rtl:d-block"
                    alt="View4Sight 3D Point Cloud Viewer RTL"
                    src="/assets/images/template/hero-mockup-rtl.png"
                    width="1492"
                    height="1250"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 