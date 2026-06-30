"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { openContactModal } from "@/utlis/toggleContactModal";
import CtaFinal from "@/components/view4sight/CtaFinal";

// Convertit un hex (#RRGGBB) en rgba() — même helper que le menu déroulant
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Fond "dots" identique aux héros du site
const dotsBackground = {
  backgroundColor: "#1C1C1E",
  backgroundImage:
    "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1.5px), linear-gradient(180deg, rgba(14,14,14,0) calc(100% - 160px), #0e0e0e 100%)",
  backgroundSize: "24px 24px, 100% 100%",
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

// Composant FormatCarousel pour la feature "tous les formats" de Visualize
const FormatCarousel = () => {
  const formats = [
    { name: "LAS", svgPath: "/assets/images/file formats/LAS.svg" },
    { name: "E57", svgPath: "/assets/images/file formats/E57.svg" },
    { name: "IFC", svgPath: "/assets/images/file formats/IFC.svg" },
    { name: "DXF", svgPath: "/assets/images/file formats/DXF.svg" },
    { name: "ORTHO", svgPath: "/assets/images/file formats/ORTHO.svg" },
    { name: "PLY", svgPath: "/assets/images/file formats/PLY.svg" },
  ];

  // Dupliquer les formats pour créer l'effet infini
  const extendedFormats = [...formats, ...formats, ...formats];

  return (
    <div
      className="w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "#121212",
        padding: "2rem",
      }}
    >
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
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
          width: 100%;
        }
      `}</style>

      <div className="vstack gap-4 w-100">
        <div className="d-flex carousel-row">
          <div className="carousel-track-1">
            {extendedFormats.map((format, index) => (
              <div key={`row1-${index}`} className="carousel-item">
                <Image
                  src={format.svgPath}
                  alt={format.name}
                  width={50}
                  height={55}
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex carousel-row">
          <div className="carousel-track-2">
            {extendedFormats.map((format, index) => (
              <div key={`row2-${index}`} className="carousel-item">
                <Image
                  src={format.svgPath}
                  alt={format.name}
                  width={50}
                  height={55}
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Données des 4 catégories principales
// color = le code couleur de chaque catégorie, identique au menu déroulant (Header.jsx)
const categories = [
  {
    id: "visualize",
    title: "Visualize",
    titleFr: "Visualiser",
    description: "Navigate massive 3D datasets like a desktop app, directly in your browser.",
    descriptionFr: "Naviguez dans vos jeux de données 3D massifs comme une application desktop, directement dans votre navigateur.",
    iconSvg: "/assets/images/custom-icons/visualisation-3d.svg",
    image: "/assets/images/V4S-Snapshots.jpg",
    href: "/fonctionnalites/visualize",
    color: "#00FF00",
  },
  {
    id: "measure",
    title: "Measure",
    titleFr: "Mesurer",
    description: "Survey-grade precision with professional measurement tools.",
    descriptionFr: "Une précision de niveau géomètre avec des outils de mesure professionnels.",
    iconSvg: "/assets/images/custom-icons/mesure-annotations.svg",
    image: "/assets/images/Measure_hero.jpg",
    href: "/fonctionnalites/measure",
    color: "#FF0055",
  },
  {
    id: "collaborate",
    title: "Collaborate",
    titleFr: "Collaborer",
    description: "Work together in real-time, from field to office.",
    descriptionFr: "Travaillez ensemble en temps réel, du terrain au bureau.",
    iconSvg: "/assets/images/custom-icons/collaboration.svg",
    image: "/assets/images/Collaborate_hero.png",
    href: "/fonctionnalites/collaborate",
    color: "#FF4500",
  },
  {
    id: "secure",
    title: "Secure",
    titleFr: "Sécuriser",
    description: "Enterprise-grade data protection and hosting in France.",
    descriptionFr: "Protection de données de niveau entreprise avec hébergement en France.",
    iconSvg: "/assets/images/custom-icons/upload-share.svg",
    image: "/assets/images/secure_home.png",
    href: "/fonctionnalites/secure",
    color: "#00FFFF",
  },
];

export default function FeaturesPage() {
  const { t, isLoading, currentLanguage } = useTranslation();
  const isFr = currentLanguage === "fr";
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [expandedFeature, setExpandedFeature] = useState(0);

  const toggleFeature = (index) => {
    setExpandedFeature(index);
  };

  useEffect(() => {
    setExpandedFeature(0);
  }, [activeCategory]);

  // Récupère le contenu des pages dédiées pour l'accordéon de gauche
  const pageFeaturesByCategory = {
    visualize: !isLoading ? t("features_pages.visualize.features") : [],
    measure: !isLoading ? t("features_pages.measure.features") : [],
    collaborate: !isLoading ? t("features_pages.collaborate.features") : [],
    secure: !isLoading ? t("features_pages.secure.features") : [],
  };
  const currentFeatures = pageFeaturesByCategory[activeCategory.id] || [];

  // Média correspondant à la feature active
  const getFeatureMedia = (categoryId, index) => {
    switch (categoryId) {
      case "visualize":
        if (index === 0) return { type: "video", src: "/assets/videos/V4S-MassiveFiles.mp4" };
        if (index === 1) return { type: "video", src: "/assets/videos/V4S-SplitScreen.mp4" };
        if (index === 2) return { type: "video", src: "/assets/videos/V4S-WalkThrough.mp4" };
        if (index === 3) return { type: "component", component: <FormatCarousel /> };
        break;
      case "measure":
        if (index === 0) return { type: "video", src: "/assets/videos/V4S-Measures.mp4" };
        if (index === 1) return { type: "video", src: "/assets/videos/V4S-Clipping.mp4" };
        if (index === 2) return { type: "video", src: "/assets/videos/V4S-FlatnessControl.mp4" };
        if (index === 3) return { type: "image", src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80" };
        break;
      case "collaborate":
        if (index === 0) return { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80" };
        if (index === 1) return { type: "video", src: "/assets/videos/V4S-Comment.mp4" };
        if (index === 2) return { type: "video", src: "/assets/videos/V4S-SharedLink.mp4" };
        if (index === 3) return { type: "video", src: "/assets/videos/V4S-BIM.mp4" };
        break;
      case "secure":
        if (index === 0) return { type: "image", src: "/assets/images/cartefrance.svg", contain: true };
        if (index === 1) return { type: "image", src: "/assets/images/secure_home.svg", contain: true };
        if (index === 2) return { type: "image", src: "/assets/images/on-premise 1.svg", contain: true };
        if (index === 3) return { type: "image", src: "/assets/images/GDPR.svg", contain: true };
        break;
    }
    // Fallback sur l'image de la catégorie
    return { type: "image", src: activeCategory.image };
  };

  const currentMedia = getFeatureMedia(activeCategory.id, expandedFeature);

  return (
    <div style={{ backgroundColor: "#0E0E0F" }}>
      {/* ============ HERO (fond dots comme les autres héros) ============ */}
      <section
        id="hero_header"
        className="hero-header section panel overflow-hidden"
        style={dotsBackground}
      >
        <div className="section-outer panel pt-9 lg:pt-10 pb-5 lg:pb-7">
          <div className="container max-w-xl">
            <div className="section-inner panel">
              {/* Bloc titre centré */}
              <motion.div
                className="vstack items-center gap-2 lg:gap-3 max-w-850px mx-auto text-center"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="hero-badge mx-auto">
                  {t("features_overview.badge")}
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-dark dark:text-white"
                >
                  {t("features_overview.title_before")}{" "}
                  <span className="text-primary">View4Sight</span>{" "}
                  {t("features_overview.title_after")}
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 m-0"
                  style={{ maxWidth: "720px" }}
                >
                  {t("features_overview.subtitle")}
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="hstack gap-2 lg:gap-3 flex-wrap justify-center mt-2"
                >
                  <Link
                    href="/tarifs"
                    className="btn btn-md lg:btn-lg btn-primary rounded-pill px-3 lg:px-5 py-2 lg:py-3 text-white fw-medium fs-7 lg:fs-6"
                  >
                    <span>{t("features_overview.btn_primary")}</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180 ms-1" />
                  </Link>
                  <a
                    onClick={openContactModal}
                    role="button"
                    className="btn btn-md lg:btn-lg btn-outline-primary rounded-pill px-3 lg:px-5 py-2 lg:py-3 fw-medium fs-7 lg:fs-6 cursor-pointer"
                  >
                    {t("features_overview.btn_secondary")}
                  </a>
                </motion.div>
              </motion.div>

              {/* 4 catégories cliquables (onglets) */}
              <div className="row g-3 mt-6 lg:mt-8">
                {categories.map((cat, index) => {
                  const isActive = activeCategory.id === cat.id;
                  return (
                    <div key={cat.id} className="col-12 md:col-6 lg:col-3">
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + index * 0.08 }}
                        whileHover={{ y: -8 }}
                        style={{ height: "100%" }}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveCategory(cat)}
                          className="feature-card w-100 h-100 text-start px-4 py-3 rounded-5 position-relative overflow-hidden"
                          style={{
                            background: isActive
                              ? `linear-gradient(0deg, ${cat.color}22, ${cat.color}22), #1C1C1E`
                              : "#1C1C1E",
                            border: isActive ? `2px solid ${cat.color}66` : `1px solid ${cat.color}30`,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                            minHeight: "150px",
                          }}
                        >
                          {/* Boule lumineuse colorée en haut à droite (uniquement sur la vignette active) */}
                          {isActive && (
                            <span
                              className="glow-ball"
                              aria-hidden="true"
                              style={{
                                background: `radial-gradient(80% 80% at 100% 0%, ${cat.color}99 0%, ${cat.color}59 30%, ${cat.color}24 60%, ${cat.color}00 80%)`,
                              }}
                            />
                          )}
                          {/* Icône colorée — centrage en inline (les classes flex du template ne s'appliquent pas ici) */}
                          <div
                            className="mb-2"
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "14px",
                              backgroundColor: `${cat.color}14`,
                              border: `2px solid ${cat.color}40`,
                              boxShadow: `0 0 20px ${cat.color}50, inset 0 0 15px ${cat.color}30`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "24px",
                                height: "24px",
                                backgroundColor: cat.color,
                                WebkitMaskImage: `url(${cat.iconSvg})`,
                                maskImage: `url(${cat.iconSvg})`,
                                WebkitMaskRepeat: "no-repeat",
                                maskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",
                                maskPosition: "center",
                                WebkitMaskSize: "contain",
                                maskSize: "contain",
                                filter: `drop-shadow(0 0 4px ${cat.color}) brightness(1.3) saturate(1.5)`,
                              }}
                            />
                          </div>
                          <h3 className="h5 fw-bold mb-1 text-white">
                            {isFr ? cat.titleFr : cat.title}
                          </h3>
                          <p
                            className="mb-0 fs-7"
                            style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}
                          >
                            {isFr ? cat.descriptionFr : cat.description}
                          </p>
                        </button>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Boule lumineuse colorée des vignettes catégories */}
              <style jsx>{`
                .feature-card > *:not(.glow-ball) {
                  position: relative;
                  z-index: 1;
                }
                .feature-card .glow-ball {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  border-radius: inherit;
                  filter: blur(12px);
                  opacity: 0.9;
                  z-index: 0;
                  pointer-events: none;
                  transition: transform 0.35s ease, opacity 0.35s ease;
                }
                .feature-card:hover .glow-ball {
                  transform: translate(4px, -4px) scale(1.02);
                  opacity: 1;
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DÉTAIL : accordéon (gauche) + média (droite) ============ */}
      <section className="section panel">
        <div className="section-outer panel py-5 lg:py-8">
          <div className="container max-w-xl">
            <div className="row g-4 lg:g-6 align-items-center">
              {/* Colonne gauche : liste de features (accordéon) */}
              <div className="col-12 lg:col-5">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="d-flex flex-column"
                >
                  {currentFeatures.map((feature, index) => {
                    const isActive = expandedFeature === index;
                    return (
                      <div
                        key={index}
                        className="position-relative py-3 lg:py-4"
                        style={{
                          cursor: "pointer",
                          borderLeft: isActive
                            ? `3px solid ${activeCategory.color}`
                            : "3px solid rgba(255,255,255,0.1)",
                          transition: "all 0.3s ease",
                          paddingLeft: "2rem",
                        }}
                        onClick={() => toggleFeature(index)}
                      >
                        <h3
                          className={`fw-bold m-0 ${isActive ? "h5 lg:h4" : "h6"}`}
                          style={{
                            color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                            transition: "all 0.3s ease",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: feature.title || feature?.titleFr || "",
                          }}
                        />

                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? "0.75rem" : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <p
                            className="fs-6 m-0"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              lineHeight: 1.6,
                            }}
                            dangerouslySetInnerHTML={{
                              __html: feature.description || feature?.descriptionFr || "",
                            }}
                          />

                          <Link
                            href={activeCategory.href}
                            className="btn btn-link p-0 text-decoration-none fw-semibold d-inline-flex align-items-center fs-7 mt-3"
                          >
                            <span style={{ borderBottom: `1px solid ${activeCategory.color}`, color: "#fff" }}>
                              {t("features_overview.learn_more")}
                            </span>
                            <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180 ms-1 text-white" />
                          </Link>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Colonne droite : média (vidéo / image / composant) */}
              <div className="col-12 lg:col-7">
                <motion.div
                  key={`${activeCategory.id}-${expandedFeature}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className="w-100 position-relative overflow-hidden d-flex align-items-center justify-content-center"
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#121212",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                      minHeight: "460px",
                    }}
                  >
                    {/* Glow orange discret derrière le média */}
                    <div
                      aria-hidden="true"
                      className="position-absolute start-0 top-0 w-100 h-100"
                      style={{
                        background: `radial-gradient(60% 60% at 50% 0%, ${hexToRgba(activeCategory.color, 0.16)} 0%, transparent 60%)`,
                        filter: "blur(14px)",
                        zIndex: 0,
                        pointerEvents: "none",
                      }}
                    />

                    {currentMedia.type === "video" && (
                      <video
                        width={900}
                        height={600}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-100 h-100 position-relative"
                        style={{ objectFit: "cover", borderRadius: "16px", zIndex: 1 }}
                      >
                        <source src={currentMedia.src} type="video/mp4" />
                      </video>
                    )}

                    {currentMedia.type === "image" && (
                      <div className="w-100 h-100 d-flex align-items-center justify-content-center p-4 position-relative" style={{ zIndex: 1 }}>
                        <Image
                          src={currentMedia.src}
                          alt={activeCategory.title}
                          width={900}
                          height={600}
                          className={currentMedia.contain ? "h-auto w-auto" : "w-100 h-100"}
                          style={{
                            borderRadius: currentMedia.contain ? "0" : "16px",
                            display: "block",
                            objectFit: currentMedia.contain ? "contain" : "cover",
                            maxHeight: currentMedia.contain ? "400px" : "100%",
                          }}
                        />
                      </div>
                    )}

                    {currentMedia.type === "component" && (
                      <div className="w-100 h-100 position-relative" style={{ zIndex: 1 }}>
                        {currentMedia.component}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA final partagé (homogène avec le reste du site) ============ */}
      <CtaFinal />
    </div>
  );
}
