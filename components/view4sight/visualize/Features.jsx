import React from "react";
import Image from "next/image";

const visualizeFeatures = [
  {
    id: "streaming",
    icon: "unicon-cloud-download",
    iconBg: "#E3F2FD",
    iconColor: "#1976D2",
    title: "Massive Files, Instant Loading",
    subtitle: "Stream gigabyte point clouds smoothly in any browser.",
    description: "Our streaming technology processes multi-gigabyte datasets server-side and delivers optimized content to browsers. No plugins, no downloads, no performance compromises. Whether you're in real estate, urban planning, or environmental science, our tools are designed to help you make better decisions faster.",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "Streaming Technology Interface",
  },
  {
    id: "fpv",
    icon: "unicon-eye",
    iconBg: "#FFF3E0",
    iconColor: "#F57C00",
    title: "Walk Through Your Data Like Being There",
    subtitle: "Navigate your point clouds with first-person precision.",
    description: "Switch to first-person view and navigate your point clouds like a video game. Perfect for site inspections, virtual walkthroughs, and immersive client presentations. Experience your data from ground level with smooth, intuitive controls that anyone can master.",
    imgSrc: "https://picsum.photos/900/600?random=2",
    altText: "First-Person Navigation Mode",
  },
  {
    id: "integration",
    icon: "unicon-layers",
    iconBg: "#E8F5E9",
    iconColor: "#388E3C",
    title: "All Your Data in One View",
    subtitle: "Unlock deeper insights with domain-specific spatial analysis.",
    description: "Combine point clouds, BIM models, orthophotos, and 360° images in a single interface. Estimate wind power production, calculate aspect-slope or visualize how many hours of sunlight on specific dates. Perfect for monitoring changes over time or validating survey data against design models.",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "Multiple Data Integration",
  },
  {
    id: "formats",
    icon: "unicon-file-check",
    iconBg: "#F3E5F5",
    iconColor: "#7B1FA2",
    title: "Every Format You Use, Ready to View",
    subtitle: "Universal compatibility with survey-grade precision.",
    description: "Native support for LAS, E57, IFC, DXF, OBJ, and more. Advanced coordinate system handling that actually works with survey-grade precision. No more format conversion headaches - just upload and visualize your data exactly as captured.",
    imgSrc: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "Universal Format Support",
  }
];

export default function Features() {
  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel py-8 lg:py-10 xl:py-12">
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
                  <div className="row align-items-center g-6 lg:g-10 xl:g-12">
                    {/* Text Content */}
                    <div className={`col-12 lg:col-5 ${i % 2 === 0 ? 'order-1 lg:order-0' : 'order-1 lg:order-1'}`}>
                      <div className="panel vstack gap-4">
                        {/* Icon */}
                        <div 
                          className="d-inline-flex align-items-center justify-content-center rounded-2"
                          style={{
                            width: "64px",
                            height: "64px",
                            backgroundColor: feature.iconBg,
                          }}
                        >
                          <i 
                            className={`icon icon-2 ${feature.icon}`}
                            style={{ 
                              color: feature.iconColor,
                              fontSize: "28px"
                            }}
                          ></i>
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
                    
                    {/* Image */}
                    <div className={`col-12 lg:col-7 ${i % 2 === 0 ? 'order-0 lg:order-1' : 'order-0 lg:order-0'}`}>
                      <div className="panel w-100 position-relative">
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