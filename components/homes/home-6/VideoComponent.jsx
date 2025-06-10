"use client";

import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
import { useParallax } from "react-scroll-parallax";
export default function VideoComponent() {
  const [isOpen, setOpen] = useState(false);
  const parallax = useParallax({
    scale: [0.8, 1],
  });

  return (
    <>
      <div
        id="how_it_works"
        ref={parallax.ref}
        className="how-it-works section panel scrollSpysection bg-gray-900"
        style={{backgroundColor: '#0e0e0f'}}
      >
        <div
          className="section-outer panel py-6 lg:py-8 xl:py-10 bg-gray-900"
          style={{backgroundColor: '#0e0e0f'}}
          data-anime="onscroll: .how-it-works; onscroll-trigger: 1; translateY: [80, 0]; scale: [0.8, 1]; opacity: [0, 1]; easing: linear;"
        >
          <div className="container xl:max-w-xl">
            
            {/* Titre et description */}
            <div className="vstack gap-2 xl:gap-3 mb-4 lg:mb-6 text-center">
              <div className="hero-badge mx-auto">
                Video demo
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 text-white">
                How It Works
              </h2>
              <p className="fs-6 xl:fs-5 text-white text-opacity-70 max-w-lg mx-auto">
                The platform is designed to help you visualize, automate, and build geospatial data workflows.
              </p>
            </div>
            <div className="panel overflow-hidden ratio ratio-16x9 rounded-2 lg:rounded-3 border border-2 border-gray-600">
              <video
                src="/assets/images/media/lexend_vid_home-6.webm"
                preload="none"
                loop
                autoPlay
                poster="/assets/images/media/lexend_vid_home-6.jpg"
                muted
                playsInline
                data-uc-cover
                data-uc-video="autoplay: true;"
              ></video>
              <div className="position-cover bg-black bg-opacity-40">
                <a
                  onClick={() => setOpen(true)}
                  className="position-absolute top-50 start-50 translate-middle uc-link w-64px lg:w-100px h-64px lg:h-100px rounded-circle cstack bg-white bg-opacity-70 backdrop-2 text-primary"
                >
                  <i className="icon-3 unicon-play fw-bold"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        isOpen={isOpen}
        src="/assets/images/media/lexend_vid_home-6.webm"
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}
