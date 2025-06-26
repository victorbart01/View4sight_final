import React from "react";
import Image from "next/image";

const measureFeatures = [
  {
    id: "3d-measurements",
    icon: "/assets/images/custom-icons/ruler-bold.svg",
    iconBg: "#FFF4E6",
    iconColor: "#FE552E",
    title: "Measure Anything in True 3D Space",
    subtitle: "3D Measurements (Distance, Surface, Volume)",
    description: "Take precise distance, surface area, and volume measurements directly on your point clouds. Results match survey-grade desktop software accuracy.",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "3D Measurement Tools Interface",
  },
  {
    id: "cross-sections",
    icon: "unicon-layer-group",
    iconBg: "#FFF3E0",
    iconColor: "#F57C00",
    title: "Slice Through Your Data Instantly",
    subtitle: "Interactive Cross-Sections (\"Cutting on the fly\")",
    description: "Create interactive cross-sections and elevation views on the fly. Analyze internal structures and hidden details with precision, no pre-processing required.",
    imgSrc: "https://picsum.photos/900/600?random=2",
    altText: "Interactive Cross-Sections Feature",
  },
  {
    id: "flatness-controls",
    icon: "unicon-chart-line",
    iconBg: "#E8F5E9",
    iconColor: "#388E3C",
    title: "Professional Surveying Tools Built-In",
    subtitle: "Flatness Controls",
    description: "Advanced flatness analysis and deviation measurements for construction and surveying professionals. Built-in tools that understand your workflow.",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "Flatness Analysis Tools",
  },
  {
    id: "object-attributes",
    icon: "unicon-tag",
    iconBg: "#F3E5F5",
    iconColor: "#7B1FA2",
    title: "Classify and Highlight Objects by Type",
    subtitle: "Smart Object Attributes",
    description: "Add attributes to objects and classify them by type. Automatically highlight specific elements and create visual legends for better data understanding.",
    imgSrc: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "Object Classification System",
  }
];

export default function Features() {
  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel py-8 lg:py-10 xl:py-12">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack">
              {measureFeatures.map((feature, i) => (
                <div
                  key={feature.id}
                  className="feature-item panel"
                  style={{ 
                    marginBottom: i !== measureFeatures.length - 1 ? "8rem" : "0" 
                  }}
                  data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                >
                  <div className="row g-6 lg:g-10 xl:g-12" style={{ minHeight: "400px" }}>
                    {/* Text Content */}
                    <div className={`col-12 lg:col-5 d-flex align-items-center ${i % 2 === 0 ? 'order-1 lg:order-0' : 'order-1 lg:order-1'}`}>
                      <div className="panel vstack gap-4 w-100">
                        {/* Icon */}
                        <div 
                          className="d-inline-flex align-items-center justify-content-center rounded-2"
                          style={{
                            width: "64px",
                            height: "64px",
                            backgroundColor: feature.iconBg,
                          }}
                        >
                          {feature.icon.startsWith('/assets/') ? (
                            <Image
                              src={feature.icon}
                              alt=""
                              width={36}
                              height={36}
                              style={{ 
                                filter: 'brightness(0)',
                                margin: '0 auto',
                                verticalAlign: 'middle'
                              }}
                            />
                          ) : (
                            <i 
                              className={`icon icon-2 ${feature.icon}`}
                              style={{ 
                                color: feature.iconColor,
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
                    <div className={`col-12 lg:col-7 d-flex align-items-center ${i % 2 === 0 ? 'order-0 lg:order-1' : 'order-0 lg:order-0'}`}>
                      <div className="panel w-100 position-relative">
                        <div 
                          className="rounded-3 p-6 lg:p-8"
                          style={{
                            background: i === 0 
                              ? "linear-gradient(135deg, #FFF4E6 0%, #FFE7CC 100%)"
                              : "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)"
                          }}
                        >
                          <div className="rounded-3 overflow-hidden shadow-lg" style={{
                            border: i === 0 ? "6px solid rgba(255, 255, 255, 0.3)" : "none",
                            backdropFilter: i === 0 ? "blur(10px)" : "none",
                            background: i === 0 ? "rgba(255, 255, 255, 0.1)" : "transparent"
                          }}>
                            {i === 0 ? (
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
                                <source src="/assets/videos/V4S-Mesures.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            ) : (
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
                            )}
                          </div>
                        </div>
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