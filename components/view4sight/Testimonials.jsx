"use client";
import React from "react";
import Image from "next/image";

export default function Testimonials() {

  // Témoignage principal mis en avant
  const featuredTestimonial = {
    id: 1,
    quote: "Grâce à View4Sight, on a pu éviter 3 déplacements chantier et finaliser notre DOE en 48h. Enfin une solution française qui comprend nos contraintes de souveraineté données.",
    author: "Pierre Moreau",
    position: "Géomètre-expert",
    company: "Cabinet Moreau & Associés",
    location: "Lyon",
    avatar: "/assets/images/common/login.webp"
  };

  // Statistiques avec design minimaliste
  const realResults = [
    {
      percentage: "50%",
      description: "Faster Client Approvals"
    },
    {
      percentage: "70%", 
      description: "Fewer Site Visits Required"
    },
    {
      percentage: "3x",
      description: "Faster File Sharing"
    },
    {
      percentage: "90%",
      description: "Client Satisfaction Rate"
    }
  ];

  return (
    <div className="section panel overflow-hidden">
        <div className="section-outer panel py-6 xl:py-9">
          <div className="container max-w-lg">
            <div className="section-inner panel">
              <div
                className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                {/* Header */}
                <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                  <div className="hero-badge mx-auto">
                    Testimonials
                  </div>
                  <h2 className="h3 lg:h2 xl:h1 m-0">
                  Real Results from Real Teams<br />
                  </h2>
                  <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 max-w-lg mx-auto">
                  Discover how View4Sight helps surveying and engineering professionals save time and deliver better results.
                  </p>
                </div>

                {/* Témoignage principal */}
                <div
                  className="row child-cols-12 justify-center col-match g-2 lg:g-3"
                  data-uc-grid=""
                >
                  <div>
                    <div className="panel vstack justify-between gap-3 rounded-2 bg-secondary dark:bg-gray-800 overflow-hidden">
                      <div
                        className="row child-cols-12 col-match g-0"
                        data-uc-grid=""
                      >
                        <div className="sm:col-6 lg:col-8">
                          <div className="panel vstack justify-between gap-3 px-3 py-4 lg:px-5 lg:py-6">
                            <div className="panel vstack items-start gap-3">
                              {/* Logo/Entreprise */}
                              <div className="panel">
                                <div className="hstack h-48px">
                                  <div className="d-flex align-items-center gap-2">
                                    <div className="w-40px h-40px rounded-circle bg-primary-50 dark:bg-primary-900 d-flex align-items-center justify-content-center">
                                      <span className="text-primary fw-bold">GM</span>
                                    </div>
                                    <div className="vstack gap-0">
                                      <span className="fw-bold text-dark dark:text-white">{featuredTestimonial.company}</span>
                                      <span className="fs-7 text-dark dark:text-white text-opacity-70">{featuredTestimonial.location}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Quote */}
                              <p className="fs-5 lg:fs-4 xl:fs-3 fw-medium text-dark dark:text-white">
                                "{featuredTestimonial.quote}"
                              </p>
                            </div>
                            
                            {/* Author info */}
                            <div className="panel mt-2 lg:mt-4">
                              <div className="panel vstack items-start gap-0 lg:gap-1">
                                <h6 className="h6 lg:h5 m-0">{featuredTestimonial.author}</h6>
                                <span className="fs-7 lg:h6 opacity-70">
                                  {featuredTestimonial.position}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Image section */}
                        <div className="sm:col-6 lg:col-4">
                          <div className="panel overflow-hidden h-100">
                            <figure className="featured-image m-0 rounded ratio ratio-1x1 h-100 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="View4Sight customer testimonial"
                                src={featuredTestimonial.avatar}
                                width="1500"
                                height="1000"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Statistiques directement après le témoignage */}
              <div 
                className="panel mt-6 lg:mt-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 600;"
              >
                {/* Grille des statistiques - Design amélioré */}
                <div className="row child-cols-6 lg:child-cols-4 col-match g-4 lg:g-6">
                  {realResults.map((result, index) => (
                    <div key={index} className="col">
                      <div className="panel vstack items-center gap-3 p-4 lg:p-6 text-center rounded-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xs hover:shadow-sm uc-transition-all-medium position-relative overflow-hidden">
                        {/* Accent coloré en haut */}
                        <div className="position-absolute top-0 start-0 w-100 h-2px bg-primary"></div>
                        
                        {/* Chiffre en très gros avec couleur */}
                        <div className="h1 lg:display-6 xl:display-5 fw-black text-primary m-0" style={{fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', lineHeight: '1'}}>
                          {result.percentage}
                        </div>
                        
                        {/* Description simple */}
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-80 m-0 fw-medium">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
} 