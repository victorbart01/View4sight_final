"use client";
import React from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Grâce à View4Sight, on a pu éviter 3 déplacements chantier et finaliser notre DOE en 48h.",
      author: "Géomètre-expert",
      location: "Lyon",
      avatar: "/assets/images/avatars/01.png",
      rating: 5
    },
    {
      id: 2,
      quote: "Notre client final a validé le livrable directement via la visite 3D. On a réduit nos allers-retours de moitié.",
      author: "Bureau d'études VRD",
      location: "Nantes", 
      avatar: "/assets/images/avatars/02.png",
      rating: 5
    },
    {
      id: 3,
      quote: "Enfin une solution française qui comprend nos contraintes de souveraineté. L'interface est intuitive, même pour nos clients non-techniques.",
      author: "Responsable Géomatique",
      location: "Toulouse",
      avatar: "/assets/images/avatars/03.png",
      rating: 5
    }
  ];

  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase">
                  Testimonials
                </span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Built by Geospatial Professionals,{" "}
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  for Professionals
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Discover how French surveying professionals are transforming their workflows with View4Sight.
              </p>
            </div>

            <div
              className="row child-cols-12 lg:child-cols-4 col-match g-2 lg:g-4"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 300});"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id}>
                  <div className="panel vstack gap-4 p-4 lg:p-6 rounded-2 bg-secondary dark:bg-gray-800 h-100">
                    {/* Rating stars */}
                    <div className="hstack gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="icon icon-1 unicon-star-filled text-warning"></i>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="fs-6 lg:fs-5 m-0 text-dark dark:text-white">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author info */}
                    <div className="hstack gap-3 mt-auto">
                      <div className="cstack w-48px h-48px rounded-circle overflow-hidden">
                        <Image
                          className="w-100 h-100 object-cover"
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="vstack gap-0">
                        <h6 className="h6 m-0">{testimonial.author}</h6>
                        <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats section */}
            <div 
              className="panel mt-6 lg:mt-8 p-4 lg:p-6 rounded-2 bg-primary-50 dark:bg-gray-800 text-center"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 600;"
            >
              <div className="row child-cols-4 lg:child-cols-3 col-match g-4">
                <div className="vstack gap-1">
                  <h4 className="h3 m-0 text-primary">30%</h4>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                    Reduction in client validation time
                  </p>
                </div>
                <div className="vstack gap-1">
                  <h4 className="h3 m-0 text-primary">50%</h4>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                    Fewer site visits required
                  </p>
                </div>
                <div className="vstack gap-1">
                  <h4 className="h3 m-0 text-primary">80%</h4>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                    Clearer communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 