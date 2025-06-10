import React from "react";
import Link from "next/link";

export default function KeyFeatures() {
  const features = [
    {
      id: 1,
      icon: "🖥️",
      iconColor: "#FF6B35", // Orange
      title: "Web-based Viewer",
      description: "Navigate massive point clouds smoothly in any browser"
    },
    {
      id: 2,
      icon: "📁",
      iconColor: "#4ECDC4", // Teal
      title: "Universal Formats",
      description: "Support for LAS, E57, IFC, DXF, and orthophotos"
    },
    {
      id: 3,
      icon: "🔗",
      iconColor: "#45B7D1", // Blue
      title: "Instant Sharing",
      description: "Generate secure project links with access control"
    },
    {
      id: 4,
      icon: "📏",
      iconColor: "#F39C12", // Yellow
      title: "Smart Measurements",
      description: "Real-time annotations and precise 3D measurements"
    },
    {
      id: 5,
      icon: "🏗️",
      iconColor: "#9B59B6", // Purple
      title: "BIM Integration",
      description: "Overlay point clouds with BIM models seamlessly"
    },
    {
      id: 6,
      icon: "🇫🇷",
      iconColor: "#E74C3C", // Red
      title: "French Hosting",
      description: "Your data stays in France with ISO 27001 certification"
    },
    {
      id: 7,
      icon: "🔌",
      iconColor: "#2ECC71", // Green
      title: "API Ready",
      description: "Integrate with your existing workflow and tools"
    },
    {
      id: 8,
      icon: "👥",
      iconColor: "#8E44AD", // Dark Purple
      title: "Team Collaboration",
      description: "Real-time collaboration with unlimited viewers"
    }
  ];

  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden scrollSpysection"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8">
            
            {/* Header avec pastille et titre */}
            <div
              className="panel vstack items-center gap-2 xl:gap-3 text-center"
              data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="hero-badge mx-auto">
                Key Features
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Everything You Need<br />
                in One Platform
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 max-w-lg mx-auto">
                Powerful tools designed specifically for geospatial professionals to visualize, share, and collaborate on 3D data.
              </p>
            </div>

            {/* Grille des fonctionnalités */}
            <div
              className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-3 lg:g-4"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {features.map((feature) => (
                <div key={feature.id}>
                  <div className="feature-card panel vstack gap-3 p-4 lg:p-5 rounded-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-secondary hover:shadow-lg transition-all duration-300 h-100">
                    <div className="feature-icon d-flex align-items-center justify-content-center w-48px h-48px rounded-2" style={{ backgroundColor: `${feature.iconColor}15`, border: `2px solid ${feature.iconColor}30` }}>
                      <span className="fs-2" style={{ filter: `hue-rotate(0deg)` }}>
                        {feature.icon}
                      </span>
                    </div>
                    <div className="vstack gap-2">
                      <h4 className="h6 lg:h5 m-0 text-dark dark:text-white">
                        {feature.title}
                      </h4>
                      <p className="fs-7 lg:fs-6 text-dark dark:text-white text-opacity-70 m-0">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton vers la page Features */}
            <div
              className="text-center"
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
