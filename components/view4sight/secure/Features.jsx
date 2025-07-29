import React from "react";
import Image from "next/image";

const secureFeatures = [
  {
    id: "french-sovereignty",
    icon: "unicon-shield-check",
    iconBg: "#E3F2FD",
    iconColor: "#1976D2",
    title: "Your Projects Never Leave French Territory",
    subtitle: "French Data Sovereignty",
    description: "Unlike American cloud solutions, View4Sight keeps your sensitive data exclusively on French soil. ISO 27001 certified infrastructure with full GDPR compliance.",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "French Data Sovereignty Infrastructure",
  },
  {
    id: "user-permissions",
    icon: "unicon-lock-access",
    iconBg: "#FFF3E0",
    iconColor: "#F57C00",
    title: "Bank-Level Access Controls",
    subtitle: "Granular User Permissions",
    description: "Set precise viewing, downloading, and editing permissions for each user and project. Role-based access with audit trails for complete accountability.",
    imgSrc: "https://picsum.photos/900/600?random=2",
    altText: "Granular User Permission System",
  },
  {
    id: "on-premise",
    icon: "unicon-server",
    iconBg: "#E8F5E9",
    iconColor: "#388E3C",
    title: "Complete Control With Your Own Servers",
    subtitle: "On-Premise Deployment",
    description: "Install View4Sight on your own infrastructure for maximum security and control. Perfect for classified projects and strict compliance requirements.",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "On-Premise Deployment Options",
  },
  {
    id: "data-export",
    icon: "unicon-download-alt",
    iconBg: "#F3E5F5",
    iconColor: "#7B1FA2",
    title: "Export Your Data Anytime",
    subtitle: "Local Data Download",
    description: "Your data belongs to you. Download projects locally whenever needed, in original formats or processed versions. No vendor lock-in, ever.",
    imgSrc: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=600&q=80",
    altText: "Data Export and Download Features",
  }
];

export default function Features() {
  return (
    <div id="main_features" className="main-features section panel">
              <div className="section-outer panel py-8 lg:py-10 xl:py-12" style={{ backgroundColor: '#0e0e0e' }}>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack">
              {secureFeatures.map((feature, i) => (
                <div
                  key={feature.id}
                  className="feature-item panel"
                  style={{ 
                    marginBottom: i !== secureFeatures.length - 1 ? "8rem" : "0" 
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
                            boxShadow: "inset 0 1px 0 rgba(255, 59, 28, 0.2), 0 0 8px rgba(255, 59, 28, 0.15)"
                          }}
                        >
                          <i 
                            className={`icon icon-2 ${feature.icon}`}
                            style={{ 
                              color: "#FF3B1C",
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