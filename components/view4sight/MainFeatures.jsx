"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import OrbitingIcons from "./OrbitingIcons";

export default function MainFeatures() {
  return (
    <div id="features" className="features section panel scrollSpysection">
      <div className="section-outer panel pt-3 lg:pt-4 xl:pt-5 bg-gray-900">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="hero-badge mx-auto">
                Main features
              </div>
                            <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                Everything You Need<br />
                in One Platform
              </h2>
              <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                View4Sight handles the complete workflow from data upload to client delivery. 
                Support for all major formats with advanced coordinate system handling that actually works.
              </p>
            </div>
            
            <div className="row child-cols-12 lg:child-cols-5 col-match g-2">
              
              {/* Feature 1: Web-based 3D Viewer */}
              <div className="lg:col-7">
                <div
                  className="panel overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 0;"
                >
                  <div
                    className="panel vstack items-start gap-3 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h4 className="h4 lg:h3 m-0">Web-based 3D Viewer</h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                      <span style={{ opacity: 0.7 }}>
                        Navigate massive point clouds smoothly in any browser—no plugins required. 
                        Your clients just need a web browser to explore your 3D data.
                      </span>
                    </p>
                    <Link href="/fonctionnalites" className="btn btn-sm btn-primary px-2 mt-2">
                      <span>Try it now</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </Link>
                  </div>
                  <div className="panel ltr:ps-3 ltr:lg:ps-4 ltr:xl:ps-6 rtl:pe-3 rtl:lg:pe-4 rtl:xl:pe-6">
                    {/* TODO: Remplacer par capture d'écran du viewer 3D */}
                    <Image
                      className="ltr:rounded-top-start-1-5 rtl:rounded-top-end-1-5"
                      alt="View4Sight 3D Point Cloud Viewer"
                      src="/assets/images/template/home-06-main-app.png"
                      width="1280"
                      height="837"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2: All Formats Support */}
              <div>
                <div
                  className="panel vstack items-start overflow-hidden bg-primary-700 rounded-2 lg:rounded-3 uc-dark"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
                >
                  <div
                    className="position-cover opacity-70 bg-cover"
                    style={{ backgroundPosition: "50% 85%" }}
                    data-src="/assets/images/template/feature-06-bg-masked.png"
                    data-uc-img=""
                  />
                  <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                  <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                  <div className="panel p-3">
                    {/* Composant d'icônes en orbite pour illustrer les formats supportés */}
                    <OrbitingIcons />
                  </div>
                  <div
                    className="panel vstack items-start justify-between gap-3 p-3 lg:p-4 xl:p-6 pt-0 lg:pt-0 xl:pt-0"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div className="content vstack items-start gap-3">
                      <h4 className="h4 lg:h3 m-0">All Your Geospatial Files in One Place</h4>
                      <p className="fs-6 md:fs-5 lg:fs-4 dark:text-white">
                        <span style={{ opacity: 0.7 }}>
                          Native support for LAS, E57, IFC, DXF, and orthophotos with advanced coordinate system handling that actually works. 
                          No more juggling between incompatible tools.
                        </span>
                      </p>
                    </div>
                    <Link
                      href="#faq"
                      className="text-secondary fw-medium text-decoration-none d-inline-flex align-items-center gap-1 mt-2"
                      style={{ fontSize: '14px' }}
                    >
                      <span>See all formats</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Feature 3: BIM + Survey Fusion */}
              <div>
                <div
                  className="panel vstack items-start overflow-hidden bg-gray-800 rounded-2 lg:rounded-3 uc-dark"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
                >
                  <div
                    className="position-cover opacity-70 bg-cover"
                    style={{ backgroundPosition: "50% 85%" }}
                    data-src="/assets/images/template/feature-06-bg-masked-2.png"
                    data-uc-img=""
                  />
                  <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                  <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                  <div className="panel px-3 lg:px-4 xl:px-6">
                    {/* TODO: Remplacer par capture d'écran BIM + Survey */}
                    <Image
                      className="rounded-bottom-1-5"
                      alt="BIM and Survey data fusion"
                      src="/assets/images/template/home-06-components.png"
                      width="800"
                      height="620"
                    />
                  </div>
                  <div
                    className="panel vstack items-start justify-between gap-3 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div className="content vstack items-start gap-3">
                      <h4 className="h4 lg:h3 m-0">
                        Secure Data.<br />
                        Precise Permissions.<br />
                        Simple Sharing.
                      </h4>
                      <p className="fs-6 md:fs-5 lg:fs-4 dark:text-white">
                        <span style={{ opacity: 0.7 }}>
                          Share 3D scans with anyone — no install needed.<br />
                          Grant the right access to the right people, instantly.<br />
                          Your data stays encrypted, safe, and under control.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4: Smart Annotations */}
              <div className="lg:col-7">
                <div
                  className="panel vstack items-start overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                >
                  <div
                    className="panel vstack items-center gap-3 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h4 className="h4 lg:h3 m-0">Smart Annotations & Measurements</h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0 xl:px-4 text-center">
                      <span style={{ opacity: 0.7 }}>
                        Add comments, measurements, and markup that stay precisely positioned in 3D space. 
                        Real-time collaboration with your entire team.
                      </span>
                    </p>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    {/* TODO: Remplacer par capture d'écran des annotations */}
                    <Image
                      alt="Smart annotations and measurements"
                      src="/assets/images/template/home-06-builder-tools.png"
                      width="1280"
                      height="800"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Bouton vers la page Features */}
            <div
              className="text-center mt-6 lg:mt-8"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 800;"
            >
              <Link
                href="/fonctionnalites"
                className="btn btn-lg btn-outline-primary rounded-pill px-5 py-3"
              >
                <span>Discover all features</span>
                <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180 ms-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 