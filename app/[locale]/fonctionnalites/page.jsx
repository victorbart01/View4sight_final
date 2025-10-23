"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Données des 4 catégories principales
const categories = [
  {
    id: "visualize",
    title: "Visualize",
    titleFr: "Visualiser",
    description: "Navigate massive 3D datasets like a desktop app, directly in your browser.",
    descriptionFr: "Naviguez dans vos jeux de données 3D massifs comme une application desktop, directement dans votre navigateur.",
    iconSvg: "/assets/images/custom-icons/visualisation-3d.svg",
    color: "#00FF00",
    bgColor: "#F0FFF4",
    image: "/assets/images/V4S-Snapshots.jpg",
    features: [
      {
        title: "Real-time rendering",
        titleFr: "Rendu en temps réel",
        description: "Visualisez instantanément vos nuages de points avec un rendu 3D fluide et réactif."
      },
      {
        title: "Multi-format support",
        titleFr: "Support multi-formats",
        description: "Compatible LAS, E57, IFC, DXF, PLY et bien d'autres formats standards."
      },
      {
        title: "Custom backgrounds",
        titleFr: "Arrière-plans personnalisés",
        description: "Ajoutez des cartes, images satellite ou fonds personnalisés à vos visualisations."
      },
      {
        title: "Layer control",
        titleFr: "Gestion des calques",
        description: "Organisez et contrôlez l'affichage de vos données par calques."
      }
    ],
    href: "/fonctionnalites/visualize"
  },
  {
    id: "measure",
    title: "Measure",
    titleFr: "Mesurer",
    description: "Survey-grade precision with professional measurement tools.",
    descriptionFr: "Une précision de niveau géomètre avec des outils de mesure professionnels.",
    iconSvg: "/assets/images/custom-icons/mesure-annotations.svg",
    color: "#FF0055",
    bgColor: "#FFF5F3",
    image: "/assets/images/Measure_hero.jpg",
    features: [
      {
        title: "Distance & angles",
        titleFr: "Distances & angles",
        description: "Mesurez avec précision distances, hauteurs et angles directement dans la scène 3D."
      },
      {
        title: "Surface & volume",
        titleFr: "Surface & volume",
        description: "Calculez automatiquement surfaces et volumes pour vos projets."
      },
      {
        title: "Snap to geometry",
        titleFr: "Accrochage géométrique",
        description: "Accrochez-vous précisément aux points, arêtes et surfaces."
      },
      {
        title: "Export measurements",
        titleFr: "Export des mesures",
        description: "Exportez vos mesures en CSV, PDF ou intégrez-les dans vos rapports."
      }
    ],
    href: "/fonctionnalites/measure"
  },
  {
    id: "collaborate",
    title: "Collaborate",
    titleFr: "Collaborer",
    description: "Work together in real-time, from field to office.",
    descriptionFr: "Travaillez ensemble en temps réel, du terrain au bureau.",
    iconSvg: "/assets/images/custom-icons/collaboration.svg",
    color: "#FF4500",
    bgColor: "#FFF5F3",
    image: "/assets/images/Collaborate_hero.png",
    features: [
      {
        title: "Shared annotations",
        titleFr: "Annotations partagées",
        description: "Ajoutez des notes, commentaires et annotations visibles par toute l'équipe."
      },
      {
        title: "Live comments",
        titleFr: "Commentaires en direct",
        description: "Discutez en temps réel directement sur les points d'intérêt du projet."
      },
      {
        title: "Multi-user sync",
        titleFr: "Synchronisation multi-utilisateurs",
        description: "Tous les membres de l'équipe voient les mêmes données en temps réel."
      },
      {
        title: "Role-based access",
        titleFr: "Contrôle d'accès par rôle",
        description: "Gérez les permissions et accès selon les rôles de chaque utilisateur."
      }
    ],
    href: "/fonctionnalites/collaborate"
  },
  {
    id: "secure",
    title: "Secure",
    titleFr: "Sécuriser",
    description: "Enterprise-grade data protection and hosting in France.",
    descriptionFr: "Protection de données de niveau entreprise avec hébergement en France.",
    iconSvg: "/assets/images/custom-icons/upload-share.svg",
    color: "#00FFFF",
    bgColor: "#F8F7FF",
    image: "/assets/images/secure_home.png",
    features: [
      {
        title: "Access control",
        titleFr: "Contrôle d'accès",
        description: "Gérez finement qui peut voir, modifier ou télécharger vos données."
      },
      {
        title: "ISO 27001 certified",
        titleFr: "Certifié ISO 27001",
        description: "Nos processus de sécurité sont certifiés aux plus hauts standards."
      },
      {
        title: "GDPR compliant",
        titleFr: "Conforme RGPD",
        description: "Hébergement 100% français, conforme aux réglementations européennes."
      },
      {
        title: "On-premise option",
        titleFr: "Option on-premise",
        description: "Déployez View4Sight sur vos propres serveurs pour un contrôle total."
      }
    ],
    href: "/fonctionnalites/secure"
  }
];

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [expandedFeature, setExpandedFeature] = useState(null);

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <div className="position-relative" style={{ 
      backgroundColor: "#0E0E0E", 
      minHeight: "100vh",
      paddingTop: "80px",
      paddingBottom: "80px"
    }}>
      
      {/* Hero Section Premium */}
      <section className="position-relative overflow-hidden" style={{ 
        paddingTop: "140px", 
        paddingBottom: "120px",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center"
      }}>
        {/* Background avec grille animée */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            backgroundImage: `
              linear-gradient(rgba(255, 75, 43, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 75, 43, 0.03) 1px, transparent 1px),
              radial-gradient(circle at 20% 30%, rgba(255, 75, 43, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(30, 144, 255, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(60, 229, 119, 0.04) 0%, transparent 60%)
            `,
            backgroundSize: "80px 80px, 80px 80px, 100% 100%, 100% 100%, 100% 100%",
            zIndex: 0,
            opacity: 0.4
          }} 
        />

        {/* Gradient overlays pour plus de profondeur */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "radial-gradient(ellipse at top, rgba(255, 75, 43, 0.1) 0%, transparent 50%)",
            zIndex: 0
          }}
        />
        
        <div className="container position-relative" style={{ maxWidth: "1400px", zIndex: 1 }}>
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              style={{ 
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                fontWeight: "800",
                lineHeight: "1.1",
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em"
              }}
            >
              <span className="text-white">
                Découvrez tout ce que
              </span>
              <br />
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #FF4B2B 0%, #FF6B4A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  position: "relative",
                  display: "inline-block"
                }}
              >
                View4Sight
                <span 
                  className="position-absolute"
                  style={{
                    content: '""',
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "8px",
                    background: "linear-gradient(90deg, #FF4B2B, transparent)",
                    filter: "blur(8px)",
                    opacity: "0.6"
                  }}
                />
              </span>
              <span className="text-white"> peut faire</span>
              <br />
              <span className="text-white">pour vous</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              style={{ 
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "800px", 
                margin: "0 auto 2.5rem",
                lineHeight: "1.6",
                fontWeight: "400"
              }}
            >
              Visualisez, mesurez, collaborez et sécurisez vos données 3D —<br className="d-none d-md-block" />
              sur une seule plateforme web.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="d-flex gap-4 flex-wrap justify-content-center align-items-center mx-auto mb-6"
              style={{ maxWidth: "fit-content" }}
            >
              <Link 
                href="/tarifs" 
                className="btn btn-lg px-5 py-3 fw-semibold text-white position-relative overflow-hidden"
                style={{ 
                  backgroundColor: "#FF4B2B",
                  border: "none",
                  borderRadius: "14px",
                  fontSize: "18px",
                  boxShadow: "0 8px 32px rgba(255, 75, 43, 0.4)",
                  transition: "all 0.3s ease",
                  zIndex: 1
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#E63E1F";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(255, 75, 43, 0.6)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FF4B2B";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(255, 75, 43, 0.4)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Essayer gratuitement
                <ArrowRight className="ms-2 d-inline-block" size={20} style={{ verticalAlign: "middle" }} />
              </Link>
              
              <Link 
                href="/ressources/support" 
                className="btn btn-lg px-5 py-3 fw-semibold position-relative"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  borderRadius: "14px",
                  fontSize: "18px",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Voir une démo
              </Link>
            </motion.div>
            
            {/* 4 vignettes des catégories cliquables */}
            <motion.div 
              variants={fadeInUp}
              className="container mt-6"
              style={{ maxWidth: "1400px", marginTop: "4rem" }}
            >
              <div className="row g-4">
                {categories.map((cat, index) => (
                  <div key={cat.id} className="col-12 lg:col-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -8 }}
                    >
                      <div
                        className="h-100 p-4 rounded-5 position-relative"
                        style={{
                          backgroundColor: activeCategory.id === cat.id ? `${cat.color}08` : "rgba(255, 255, 255, 0.02)",
                          border: activeCategory.id === cat.id ? `2px solid ${cat.color}` : `1px solid ${cat.color}40`,
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          boxShadow: activeCategory.id === cat.id ? `0 0 24px ${cat.color}60, inset 0 0 20px ${cat.color}20` : `0 0 12px ${cat.color}30`,
                          minHeight: "160px"
                        }}
                        onClick={() => setActiveCategory(cat)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `${cat.color}10`;
                          e.currentTarget.style.boxShadow = `0 0 32px ${cat.color}70, 0 0 60px ${cat.color}40, inset 0 0 20px ${cat.color}30`;
                          e.currentTarget.style.borderColor = cat.color;
                          e.currentTarget.style.transform = "translateY(-12px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = activeCategory.id === cat.id ? `${cat.color}08` : "rgba(255, 255, 255, 0.02)";
                          e.currentTarget.style.boxShadow = activeCategory.id === cat.id ? `0 0 24px ${cat.color}60, inset 0 0 20px ${cat.color}20` : `0 0 12px ${cat.color}30`;
                          e.currentTarget.style.borderColor = activeCategory.id === cat.id ? cat.color : `${cat.color}40`;
                          e.currentTarget.style.transform = "translateY(-8px)";
                        }}
                      >
                        {/* Icône en haut à gauche */}
                        <div 
                          className="mb-3"
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "14px",
                            backgroundColor: `${cat.color}18`,
                            border: `2px solid ${cat.color}60`,
                            boxShadow: `0 0 20px ${cat.color}50, inset 0 0 15px ${cat.color}30`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
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
                              filter: `drop-shadow(0 0 4px ${cat.color}) brightness(1.3) saturate(1.5)`
                            }}
                          />
                        </div>

                        {/* Titre - aligné à gauche */}
                        <h3 
                          className="h5 fw-bold mb-2"
                          style={{ color: "#ffffff", textAlign: "left" }}
                        >
                          {cat.title}
                        </h3>

                        {/* Description - alignée à gauche */}
                        <p 
                          className="mb-0"
                          style={{ 
                            color: "rgba(255,255,255,0.7)",
                            fontSize: "13px",
                            lineHeight: "1.5",
                            textAlign: "left"
                          }}
                        >
                          {cat.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animation CSS pour le pulse */}
        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.6;
              transform: scale(1.1);
            }
          }
        `}</style>
      </section>

      {/* Section détaillée : Colonne gauche (features) + Colonne droite (screenshot) */}
      <section className="container" style={{ maxWidth: "1400px" }}>
        <div className="row g-4">
          {/* Colonne gauche - Features list avec accordéon */}
          <div className="col-12 lg:col-5">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-5 rounded-4"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              {/* Titre de la catégorie active */}
              <div className="mb-4">
                <div 
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    backgroundColor: `${activeCategory.color}15`,
                    border: `2px solid ${activeCategory.color}40`
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      backgroundColor: activeCategory.color,
                      WebkitMaskImage: `url(${activeCategory.iconSvg})`,
                      maskImage: `url(${activeCategory.iconSvg})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      filter: `drop-shadow(0 0 4px ${activeCategory.color}) brightness(1.3) saturate(1.5)`
                    }}
                  />
                </div>
                
                <h2 className="h2 fw-bold mb-3" style={{ color: "#ffffff" }}>
                  {activeCategory.title}
                </h2>
                
                <p className="mb-4" style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: "1.6" }}>
                  {activeCategory.description}
                </p>

                <Link 
                  href={activeCategory.href}
                  className="btn btn-lg px-4 rounded-3"
                  style={{
                    backgroundColor: activeCategory.color,
                    border: "none",
                    color: "#fff",
                    fontWeight: "500",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.9";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Learn more
                </Link>
              </div>

              {/* Accordéon des features */}
              <div className="mt-5">
                {activeCategory.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="border-bottom"
                    style={{ borderColor: "rgba(255,255,255,0.1) !important" }}
                  >
                    <button
                      className="w-100 d-flex justify-content-between align-items-center py-3 bg-transparent border-0 text-start"
                      onClick={() => toggleFeature(index)}
                      style={{
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <span 
                        className="h6 mb-0 fw-semibold"
                        style={{ 
                          color: expandedFeature === index ? activeCategory.color : "#ffffff",
                          fontSize: "16px"
                        }}
                      >
                        {feature.title}
                      </span>
                      <ChevronDown 
                        size={20} 
                        style={{
                          color: expandedFeature === index ? activeCategory.color : "rgba(255,255,255,0.5)",
                          transform: expandedFeature === index ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease"
                        }}
                      />
                    </button>
                    
                    {expandedFeature === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pb-3"
                      >
                        <p 
                          className="mb-0 ps-0"
                          style={{ 
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "14px",
                            lineHeight: "1.6"
                          }}
                        >
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Colonne droite - Screenshot/Mockup */}
          <div className="col-12 lg:col-7">
            <motion.div
              key={activeCategory.id + "-image"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div 
                className="w-100 rounded-4 overflow-hidden position-relative"
                style={{
                  backgroundColor: "#1a1a1a",
                  padding: "12px",
                  boxShadow: `0 20px 60px ${activeCategory.color}30`,
                  border: `1px solid ${activeCategory.color}20`
                }}
              >
                {/* Browser header simulation */}
                <div 
                  className="d-flex align-items-center gap-2 px-3 py-2 mb-2"
                  style={{
                    backgroundColor: "#0a0a0a",
                    borderRadius: "8px 8px 0 0"
                  }}
                >
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FF5F57" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#28CA42" }} />
                </div>

                {/* Screenshot */}
                <div className="position-relative">
                  <Image
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    width={800}
                    height={500}
                    className="w-100 h-auto"
                    style={{ 
                      borderRadius: "4px",
                      display: "block"
                    }}
                  />
                  
                  {/* Overlay gradient pour effet premium */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: `linear-gradient(135deg, ${activeCategory.color}15 0%, transparent 50%)`,
                      pointerEvents: "none"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container text-center mt-6" style={{ maxWidth: "800px", marginTop: "120px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="h2 fw-bold mb-4" style={{ color: "#ffffff" }}>
            Ready to revolutionize your 3D workflows?
          </h2>
          <p className="fs-5 mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
            Start your free 30-day trial with full access to all features.
          </p>
          
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link 
              href="/tarifs" 
              className="btn btn-lg px-5 py-3 fw-semibold text-white"
              style={{ 
                backgroundColor: "#FF4B2B",
                border: "none",
                borderRadius: "12px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#E63E1F";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 24px rgba(255, 75, 43, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#FF4B2B";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Start Free Trial
              <ArrowRight className="ms-2 d-inline-block" size={20} style={{ verticalAlign: "middle" }} />
            </Link>
            
            <Link 
              href="/ressources/support" 
              className="btn btn-lg px-5 py-3 fw-semibold"
              style={{ 
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "2px solid rgba(255,255,255,0.2)",
                color: "#fff",
                borderRadius: "12px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                e.target.style.borderColor = "rgba(255,255,255,0.4)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255,255,255,0.05)";
                e.target.style.borderColor = "rgba(255,255,255,0.2)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Request a Demo
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
