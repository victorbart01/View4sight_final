import React from "react";
import Image from "next/image";

const collaborateFeatures = [
  {
    id: "real-time-collaboration",
    icon: "custom-svg",
    iconSvg: "/assets/images/custom-icons/navigation-arrow-bold.svg",
    iconBg: "#E3F2FD",
    iconColor: "#1976D2",
    title: "See Your Team Working Live",
    subtitle: "Real-Time Multi-User Collaboration",
    description: "Multiple users can navigate, measure, and annotate the same project simultaneously. See cursors and actions from teammates in real-time.",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "Real-Time Multi-User Collaboration Interface",
  },
  {
    id: "smart-annotations",
    icon: "custom-svg",
    iconSvg: "/assets/images/custom-icons/chat-text-bold.svg",
    iconBg: "#FFF3E0",
    iconColor: "#F57C00",
    title: "Comments That Stay Exactly Where You Put Them",
    subtitle: "Smart Annotations That Stick",
    description: "Add annotations, markups, and comments that remain precisely positioned in 3D space. Perfect for site inspections and progress tracking.",
    imgSrc: "https://picsum.photos/900/600?random=2",
    altText: "Smart 3D Annotations Feature",
  },
  {
    id: "instant-link-sharing",
    icon: "custom-svg",
    iconSvg: "/assets/images/custom-icons/export-bold.svg",
    iconBg: "#E8F5E9",
    iconColor: "#388E3C",
    title: "Share 3D Data With a Simple Link",
    subtitle: "Instant Link Sharing",
    description: "Send a web link, they view instantly. No software installation required for stakeholders. Works on phones, tablets, and computers.",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "Instant Link Sharing System",
  },
  {
    id: "bim-integration",
    icon: "unicon-layers-alt",
    iconBg: "#F3E5F5",
    iconColor: "#7B1FA2",
    title: "Overlay Design Models with Reality Data",
    subtitle: "BIM Model Integration",
    description: "Compare as-built point clouds with original BIM designs. Spot discrepancies instantly and collaborate on construction progress with your entire team.",
    imgSrc: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "BIM Model Integration Comparison",
  }
];

export default function Features() {
  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel py-8 lg:py-10 xl:py-12" style={{ backgroundColor: '#090909' }}>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack">
              {collaborateFeatures.map((feature, i) => (
                <div
                  key={feature.id}
                  className="feature-item panel"
                  style={{ 
                    marginBottom: i !== collaborateFeatures.length - 1 ? "8rem" : "0" 
                  }}
                  data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                >
                  <div className="row align-items-center g-6 lg:g-10 xl:g-12">
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
                            boxShadow: "inset 0 1px 0 rgba(255, 59, 28, 0.2), 0 0 8px rgba(255, 59, 28, 0.15)",
                            position: "relative"
                          }}
                        >
                          {feature.iconSvg ? (
                            <Image
                              src={feature.iconSvg}
                              width={36}
                              height={36}
                              alt={`${feature.title} icon`}
                              style={{ 
                                width: "36px",
                                height: "36px",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                filter: 'brightness(0) saturate(100%) invert(42%) sepia(97%) saturate(4466%) hue-rotate(356deg) brightness(103%) contrast(95%)'
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
                        <h3 className="h2 lg:h1 m-0 fw-bold">
                          {feature.title}
                        </h3>
                        
                        {/* Subtitle */}
                        <p className="fs-5 lg:fs-4 text-dark dark:text-white text-opacity-80 m-0 lh-sm">
                          {feature.subtitle}
                        </p>
                        
                        {/* Description */}
                        <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0 lh-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image/Video */}
                    <div className={`col-12 lg:col-7 ${i % 2 === 0 ? 'order-0 lg:order-1' : 'order-0 lg:order-0'}`}>
                      <div className="panel w-100 position-relative">
                        {i === 1 ? (
                          // Deuxième feature: Vidéo V4S-Comment.mp4 sans décoration
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
                            <source src="/assets/videos/V4S-Comment.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : i === 2 ? (
                          // Troisième feature: Vidéo V4S-SharedLink.mp4 sans décoration
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
                            <source src="/assets/videos/V4S-SharedLink.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : i === 3 ? (
                          // Quatrième feature: Vidéo V4S-BIM.mp4 sans décoration
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
                            <source src="/assets/videos/V4S-BIM.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
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