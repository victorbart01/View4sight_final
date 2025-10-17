"use client";

import React from "react";
import Image from "next/image";

// Nouveau composant pour la frise infinie des formats
const FormatCarousel = () => {
  const formats = [
    { name: "LAS", svgPath: "/assets/images/file formats/LAS.svg", color: "#2563EB" },
    { name: "E57", svgPath: "/assets/images/file formats/E57.svg", color: "#06B6D4" },
    { name: "IFC", svgPath: "/assets/images/file formats/IFC.svg", color: "#DC2626" },
    { name: "DXF", svgPath: "/assets/images/file formats/DXF.svg", color: "#F59E0B" },
    { name: "ORTHO", svgPath: "/assets/images/file formats/ORTHO.svg", color: "#8B5CF6" },
    { name: "PLY", svgPath: "/assets/images/file formats/PLY.svg", color: "#EC4899" },
  ];

  // Dupliquer les formats pour créer l'effet infini
  const extendedFormats = [...formats, ...formats, ...formats];

  return (
    <div 
      className="w-100"
      style={{
        backgroundColor: "#0E0E0E",
        borderRadius: "0.75rem",
        padding: "2rem 1.5rem",
        overflow: "hidden",
      }}
    >
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .carousel-track-1 {
          display: flex;
          gap: 2rem;
          animation: scroll-left 30s linear infinite;
          will-change: transform;
        }

        .carousel-track-2 {
          display: flex;
          gap: 2rem;
          animation: scroll-right 30s linear infinite;
          will-change: transform;
        }

        .carousel-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }

        .carousel-item:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(254, 85, 46, 0.1);
        }

        .carousel-row {
          overflow: hidden;
          position: relative;
          height: 120px;
        }
      `}</style>

      <div className="panel vstack gap-4">
        {/* Ligne 1 */}
        <div className="panel d-flex carousel-row">
          <div className="carousel-track-1">
            {extendedFormats.map((format, index) => (
              <div key={`row1-${index}`} className="carousel-item">
                <Image
                  src={format.svgPath}
                  alt={format.name}
                  width={50}
                  height={55}
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ligne 2 - Sens inverse pour effet alternant */}
        <div className="panel d-flex carousel-row">
          <div className="carousel-track-2">
            {extendedFormats.map((format, index) => (
              <div key={`row2-${index}`} className="carousel-item">
                <Image
                  src={format.svgPath}
                  alt={format.name}
                  width={50}
                  height={55}
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const visualizeFeatures = [
  {
    id: "streaming",
    icon: "/assets/images/custom-icons/soundcloud-logo-bold.svg",
    iconBg: "#E3F2FD",
    iconColor: "#1976D2",
    title: "Fichiers massifs. Chargement instantané.",
    subtitle: "",
    description: "Affichez des nuages de points et des modèles 3D de plusieurs gigaoctets sans sous-échantillonnage ni plugins. Déplacez-vous, faites pivoter et zoomez avec fluidité même sur un ordinateur portable bas de gamme.",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "Interface de streaming",
  },
  {
    id: "integration",
    icon: "/assets/images/custom-icons/stack-bold.svg",
    iconBg: "#E8F5E9",
    iconColor: "#388E3C",
    title: "Un espace unique pour toutes vos données",
    subtitle: "",
    description: "Superposez nuages de points, BIM, orthophotos, photos 360° et CAO dans une scène unique. Comparez projet vs tel que construit, suivez les évolutions dans le temps et validez les relevés sans exports successifs.",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "Intégration multi-données",
  },
  {
    id: "fpv",
    icon: "/assets/images/custom-icons/cardboard.svg",
    iconBg: "#FFF3E0",
    iconColor: "#F57C00",
    title: "Visitez le site en vue immersive",
    subtitle: "",
    description: "Passez en vue à la première personne pour explorer couloirs, niveaux et terrains avec des contrôles simples. La sensation d'être sur place, sans déplacement.",
    imgSrc: "https://picsum.photos/900/600?random=2",
    altText: "Mode de navigation à la première personne",
  },
  {
    id: "formats",
    icon: "/assets/images/custom-icons/file-image-bold.svg",
    iconBg: "#F3E5F5",
    iconColor: "#7B1FA2",
    title: "Tous vos formats, prêts à être visualisés",
    subtitle: "",
    description: "Prise en charge native de LAS/LAZ, E57, IFC, DXF, OBJ, etc. Pas de conversions. Pas de mauvaises surprises. Importez et visualisez les données telles qu'elles ont été capturées.",
    imgSrc: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "Compatibilité universelle des formats",
  }
];

export default function Features() {
  return (
    <div id="main_features" className="main-features section panel">
              <div className="section-outer panel py-8 lg:py-10 xl:py-12" style={{ backgroundColor: '#0e0e0e' }}>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack">
              {visualizeFeatures.map((feature, i) => (
                <div
                  key={feature.id}
                  className="feature-item panel"
                  style={{ 
                    marginBottom: i !== visualizeFeatures.length - 1 ? "8rem" : "0" 
                  }}
                  data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                >
                  <div className="row items-center g-6 lg:g-10 xl:g-12" style={{ minHeight: "500px" }}>
                    {/* Text Content */}
                    <div className={`col-12 lg:col-5 ${i % 2 === 0 ? 'order-1 lg:order-0' : 'order-1 lg:order-1'}`}>
                      <div className="panel vstack gap-4">
                        {/* Icon */}
                        <div 
                          className="d-inline-flex align-items-center justify-content-center rounded-3"
                          style={{
                            width: "64px",
                            height: "64px",
                            backgroundColor: "rgba(255, 59, 28, 0.05)",
                            border: "1px solid rgba(255, 59, 28, 0.3)",
                            boxShadow: "inset 0 1px 0 rgba(255, 59, 28, 0.2), 0 0 8px rgba(255, 59, 28, 0.15)"
                          }}
                        >
                          {feature.icon.startsWith('/assets/') ? (
                            <Image
                              src={feature.icon}
                              alt=""
                              width={36}
                              height={36}
                              style={{ 
                                filter: 'brightness(0) saturate(100%) invert(42%) sepia(97%) saturate(4466%) hue-rotate(356deg) brightness(103%) contrast(95%)',
                                margin: '0 auto',
                                verticalAlign: 'middle'
                              }}
                            />
                          ) : (
                            <i 
                              className={`icon icon-2 ${feature.icon}`}
                              style={{ 
                                color: "#FF3B1C",
                                fontSize: "28px"
                              }}
                            ></i>
                          )}
                        </div>
                        
                        {/* Title */}
                        <h3 className="h4 lg:h3 m-0 fw-bold">
                          {feature.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="fs-6 lg:fs-4 text-dark dark:text-white text-opacity-70 m-0 lh-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image/Video */}
                    <div className={`col-12 lg:col-7 ${i % 2 === 0 ? 'order-0 lg:order-1' : 'order-0 lg:order-0'}`}>
                      <div className="panel w-100 position-relative">
                        {i === 0 ? (
                          // Première feature: Vidéo V4S-MassiveFiles.mp4 sans décoration
                          <video
                            width={900}
                            height={600}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-100 h-auto"
                            style={{ 
                              objectFit: "cover",
                              aspectRatio: "3/2"
                            }}
                          >
                            <source src="/assets/videos/V4S-MassiveFiles.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : i === 1 ? (
                          // Deuxième feature: Vidéo V4S-SplitScreen.mp4
                          <video
                            width={900}
                            height={600}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-100 h-auto"
                            style={{ 
                              objectFit: "cover",
                              aspectRatio: "3/2"
                            }}
                          >
                            <source src="/assets/videos/V4S-SplitScreen.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : i === 2 ? (
                          // Troisième feature: Vidéo V4S-WalkThrough.mp4 sans décoration
                          <video
                            width={900}
                            height={600}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-100 h-auto"
                            style={{ 
                              objectFit: "cover",
                              aspectRatio: "3/2"
                            }}
                          >
                            <source src="/assets/videos/V4S-WalkThrough.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : i === 3 ? (
                          // Quatrième feature: Frise infinie des formats sur 2 lignes
                          <FormatCarousel />
                        ) : (
                          // Autres features: Images avec décoration
                          <div 
                            className="rounded-3 p-6 lg:p-8"
                            style={{
                              background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)"
                            }}
                          >
                            <div className="rounded-3 overflow-hidden shadow-lg">
                              <Image
                                src={feature.imgSrc}
                                width={900}
                                height={600}
                                alt={feature.altText}
                                className="w-100 h-auto"
                                style={{ 
                                  objectFit: "cover",
                                  aspectRatio: "3/2"
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 