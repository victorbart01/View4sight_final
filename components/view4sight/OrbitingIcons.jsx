"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function OrbitingIcons() {
  const formats = [
    { name: "LAS", icon: "unicon-file-alt", delay: "0s", color: "#FE552E" },
    { name: "E57", icon: "unicon-cube", delay: "1s", color: "#7FC2C8" },
    { name: "IFC", icon: "unicon-building", delay: "2s", color: "#C54E34" },
    { name: "DXF", icon: "unicon-ruler-combined", delay: "3s", color: "#F6B44C" },
    { name: "Ortho", icon: "unicon-map", delay: "4s", color: "#E4DCCA" },
    { name: "PLY", icon: "unicon-layers-alt", delay: "5s", color: "#7FC2C8" }
  ];

  const [rotation, setRotation] = useState(0);
  const [orbitRadius, setOrbitRadius] = useState(150);
  const orbitRef = useRef(null);

  useEffect(() => {
    // Ajuster le rayon en fonction de la largeur d'écran
    const updateRadius = () => {
      setOrbitRadius(window.innerWidth <= 768 ? 100 : 150);
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);

    let animationId;
    const startTime = Date.now();
    const duration = 30000; // 30 seconds for full rotation

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      const currentRotation = progress * 360;
      
      setRotation(currentRotation);
      
      if (orbitRef.current) {
        orbitRef.current.style.transform = `rotate(${currentRotation}deg)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateRadius);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="orbiting-container position-relative d-flex align-items-center justify-content-center">
      {/* Logo View4Sight au centre */}
      <div className="central-logo position-absolute top-50 start-50 translate-middle z-index-2">
        <div className="logo-wrapper bg-dark rounded-circle p-3 shadow-lg d-flex align-items-center justify-content-center">
          <Image
            src="/assets/images/logo_v4s.svg"
            alt="View4Sight Logo"
            width="65"
            height="65"
            className="d-block"
          />
        </div>
      </div>

      {/* Anneaux radar */}
      <div className="radar-ring-inner position-absolute top-50 start-50 translate-middle"></div>
      <div className="radar-ring-outer position-absolute top-50 start-50 translate-middle"></div>

      {/* Icônes en orbite avec contre-rotation */}
      <div className="orbit-ring position-absolute" ref={orbitRef}>
        {formats.map((format, index) => {
          const angle = (360 / formats.length) * index;
          const radians = (angle * Math.PI) / 180;
          const x = Math.cos(radians) * orbitRadius;
          const y = Math.sin(radians) * orbitRadius;
          
          return (
            <div
              key={format.name}
              className="orbit-item position-absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
              }}
            >
              <div 
                className="orbit-content d-flex flex-column align-items-center"
                style={{
                  transform: `rotate(-${rotation}deg)`,
                  transition: 'none'
                }}
              >
                <div
                  className="format-icon rounded-circle d-flex align-items-center justify-content-center shadow"
                  style={{ backgroundColor: format.color }}
                >
                  <i className={`icon ${format.icon} text-white`} style={{ fontSize: '20px' }}></i>
                </div>
                <span className="format-label fs-8 fw-medium text-center mt-1 d-block">
                  {format.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .orbiting-container {
          width: 400px;
          height: 400px;
          margin: 2rem auto;
          margin-left: calc(50% + 20px);
          transform: translateX(-50%);
        }

        .central-logo .logo-wrapper {
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #2c2c2c !important;
        }

        .radar-ring-inner {
          width: 200px;
          height: 200px;
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 50%;
          z-index: 0;
        }

        .radar-ring-outer {
          width: 300px;
          height: 300px;
          border: 1px solid rgba(255, 255, 255, 0.02);
          border-radius: 50%;
          z-index: 0;
        }

        .orbit-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          z-index: 1;
          will-change: transform;
        }

        .orbit-item {
          z-index: 2;
          pointer-events: none;
        }

        .orbit-content {
          will-change: transform;
        }

        .format-icon {
          width: 50px;
          height: 50px;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
        }

        .format-label {
          color: #fff;
          opacity: 0.9;
          white-space: nowrap;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .orbiting-container {
            width: 280px;
            height: 280px;
            margin-left: calc(50% + 15px);
            transform: translateX(-50%);
          }
          
          .format-icon {
            width: 35px;
            height: 35px;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .central-logo .logo-wrapper {
            width: 70px;
            height: 70px;
          }
          
          .central-logo .logo-wrapper img {
            width: 50px;
            height: 50px;
          }
          
          .radar-ring-inner {
            width: 140px;
            height: 140px;
          }

          .radar-ring-outer {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
} 