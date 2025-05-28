"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import OrbitingIcons from "./OrbitingIcons";

export default function MainFeatures() {
  return (
    <div id="features" className="features section panel scrollSpysection">
      <div className="section-outer panel pt-6 lg:pt-8 xl:pt-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase">
                  Main features
                </span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                Everything You Need in{" "}
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  One Platform
                </span>
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
                    className="panel vstack items-start gap-2 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h4 className="h4 lg:h3 m-0">Web-based 3D Viewer</h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                      Navigate massive point clouds smoothly in any browser—no plugins required. 
                      Your clients just need a web browser to explore your 3D data.
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
                    className="panel vstack items-start justify-between gap-2 p-3 lg:p-4 xl:p-6 pt-0 lg:pt-0 xl:pt-0"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div className="content vstack items-start gap-2">
                      <h4 className="h4 m-0">All Your Geospatial Files in One Place</h4>
                      <p className="fs-6 lg:fs-5 dark:text-white">
                        Native support for LAS, E57, IFC, DXF, and orthophotos with advanced coordinate system handling that actually works. 
                        No more juggling between incompatible tools.
                      </p>
                    </div>
                    <Link
                      href="/fonctionnalites"
                      className="btn btn-sm btn-secondary text-primary px-2 mt-2"
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
                      className="rounded-bottom-1-5 border border-top-0"
                      alt="BIM and Survey data fusion"
                      src="/assets/images/template/home-06-components.png"
                      width="800"
                      height="620"
                    />
                  </div>
                  <div
                    className="panel vstack items-start justify-between gap-2 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <div className="content vstack items-start gap-2">
                      <h4 className="h4 m-0">BIM + Survey Fusion</h4>
                      <p className="fs-6 lg:fs-5 dark:text-white">
                        Overlay point clouds with BIM models for perfect as-built comparisons. 
                        See exactly what was built vs. what was planned.
                      </p>
                    </div>
                    <Link
                      href="/fonctionnalites"
                      className="btn btn-sm btn-secondary text-primary px-2 mt-2"
                    >
                      <span>See comparison</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </Link>
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
                    className="panel vstack items-center gap-2 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h4 className="h4 m-0">Smart Annotations & Measurements</h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0 xl:px-4 text-center">
                      Add comments, measurements, and markup that stay precisely positioned in 3D space. 
                      Real-time collaboration with your entire team.
                    </p>
                    <div className="hstack gap-4 mt-3">
                      <div className="vstack items-center gap-1">
                        <i className="icon icon-2 unicon-ruler text-primary"></i>
                        <span className="fs-8 fw-medium">Measurements</span>
                      </div>
                      <div className="vstack items-center gap-1">
                        <i className="icon icon-2 unicon-comment text-primary"></i>
                        <span className="fs-8 fw-medium">Comments</span>
                      </div>
                      <div className="vstack items-center gap-1">
                        <i className="icon icon-2 unicon-users text-primary"></i>
                        <span className="fs-8 fw-medium">Collaboration</span>
                      </div>
                    </div>
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

            {/* Additional features list */}
            <div className="panel mt-6 lg:mt-8">
              <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-3 g-2 lg:g-4">
                <div className="panel text-center">
                  <div className="vstack gap-2">
                    <i className="icon icon-3 unicon-share text-primary mx-auto"></i>
                    <h5 className="h6 m-0">Flexible Sharing</h5>
                    <p className="fs-7 opacity-70">Generate secure project links with granular access control</p>
                  </div>
                </div>
                <div className="panel text-center">
                  <div className="vstack gap-2">
                    <i className="icon icon-3 unicon-code text-primary mx-auto"></i>
                    <h5 className="h6 m-0">API Ready</h5>
                    <p className="fs-7 opacity-70">Integrate with your existing workflow and white-label for clients</p>
                  </div>
                </div>
                <div className="panel text-center">
                  <div className="vstack gap-2">
                    <i className="icon icon-3 unicon-file text-primary mx-auto"></i>
                    <h5 className="h6 m-0">All Formats</h5>
                    <p className="fs-7 opacity-70">LAS, E57, IFC, DXF, orthophotos - we support them all</p>
                  </div>
                </div>
                <div className="panel text-center">
                  <div className="vstack gap-2">
                    <i className="icon icon-3 unicon-shield text-primary mx-auto"></i>
                    <h5 className="h6 m-0">French Hosting</h5>
                    <p className="fs-7 opacity-70">Your data stays in France with ISO 27001 certification</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 