"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function OrbitingIcons() {
  const formats = [
    { name: "LAS", svgPath: "/assets/images/file formats/LAS.svg", delay: "0s" },
    { name: "E57", svgPath: "/assets/images/file formats/E57.svg", delay: "1s" },
    { name: "IFC", svgPath: "/assets/images/file formats/IFC.svg", delay: "2s" },
    { name: "DXF", svgPath: "/assets/images/file formats/DXF.svg", delay: "3s" },
    { name: "ORTHO", svgPath: "/assets/images/file formats/ORTHO.svg", delay: "4s" },
    { name: "PLY", svgPath: "/assets/images/file formats/PLY.svg", delay: "5s" }
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
            width="55"
            height="55"
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
                <div className="format-svg-container">
                  <Image
                    src={format.svgPath}
                    alt={`${format.name} file format`}
                    width="50"
                    height="55"
                    className="format-svg"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .orbiting-container {
          width: 400px;
          height: 400px;
          margin: 0.5rem auto;
          margin-left: calc(50% + 20px);
          transform: translateX(-50%);
        }

        .central-logo .logo-wrapper {
          width: 110px;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(44, 44, 44, 0.1) !important;
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

        .format-svg-container {
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
          transition: transform 0.3s ease;
        }

        .format-svg-container:hover {
          transform: scale(1.1);
        }

        .format-svg {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
          transition: filter 0.3s ease;
        }

        .format-svg:hover {
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4));
        }

        /* Responsive */
        @media (max-width: 768px) {
          .orbiting-container {
            width: 280px;
            height: 280px;
            margin-left: calc(50% + 15px);
            transform: translateX(-50%);
          }
          
          .format-svg {
            width: 35px;
            height: auto;
          }
          
          .central-logo .logo-wrapper {
            width: 70px;
            height: 70px;
          }
          
          .central-logo .logo-wrapper img {
            width: 45px;
            height: 45px;
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