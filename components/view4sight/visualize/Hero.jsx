"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden bg-white dark:bg-gray-800">
      <div className="position-absolute top-0 start-0 end-0 h-600px lg:h-screen bg-secondary dark:bg-gray-800 z-0" />
      <div className="section-outer panel pb-8 pt-8 lg:pt-10 lg:pb-8">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-2 lg:gap-4 mt-3 lg:mt-4 mb-4 lg:mb-6 max-w-750px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h3 sm:h2 lg:h1 xl:display-6 m-0">
                Navigate Massive 3D Datasets <br className="d-none lg:d-block" />
                Like a Desktop App
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Stream gigabyte point clouds smoothly in any browser.
                <br className="d-none sm:d-block" />
                No plugins, no downloads, no performance compromises.
              </p>
            </div>
            <div
              className="hero-scene panel max-w-950px mx-auto"
              data-anime="targets: >*; scale: [0.9, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
            >
              <div className="panel text-center overflow-hidden rounded-3 border border-5 border-dark dark:border-white dark:border-opacity-20">
                <Image
                  alt="View4Sight visualization dashboard"
                  src="/assets/images/mockup-view4sight.png"
                  width="1440"
                  height="1024"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 