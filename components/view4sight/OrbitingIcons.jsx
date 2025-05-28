"use client";
import React from "react";
import Image from "next/image";

export default function OrbitingIcons() {
  const formats = [
    { name: "LAS", icon: "unicon-file-alt", delay: "0s", color: "#FE552E" },
    { name: "E57", icon: "unicon-cube", delay: "1s", color: "#7FC2C8" },
    { name: "IFC", icon: "unicon-building", delay: "2s", color: "#C54E34" },
    { name: "DXF", icon: "unicon-ruler-combined", delay: "3s", color: "#F6B44C" },
    { name: "Orthophoto", icon: "unicon-map", delay: "4s", color: "#E4DCCA" },
    { name: "PLY", icon: "unicon-layers-alt", delay: "5s", color: "#7FC2C8" }
  ];

  return (
    <div className="orbiting-container position-relative d-flex align-items-center justify-content-center">
      {/* Logo View4Sight au centre */}
      <div className="central-logo position-absolute top-50 start-50 translate-middle z-index-2">
        <div className="logo-wrapper bg-dark rounded-circle p-3 shadow-lg d-flex align-items-center justify-content-center">
          <Image
            src="/assets/images/logo_v4s.svg"
            alt="View4Sight Logo"
            width="50"
            height="50"
            className="d-block"
          />
        </div>
      </div>

      {/* Icônes en orbite */}
      <div className="orbit-ring position-absolute">
        {formats.map((format, index) => (
          <div
            key={format.name}
            className="orbit-item position-absolute"
            style={{
              "--delay": format.delay,
              "--rotation": `${(360 / formats.length) * index}deg`
            }}
          >
            <div
              className="format-icon rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ backgroundColor: format.color }}
            >
              <i className={`icon ${format.icon} text-white`} style={{ fontSize: '16px' }}></i>
            </div>
            <span className="format-label fs-8 fw-medium text-center mt-1 d-block">
              {format.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .orbiting-container {
          width: 300px;
          height: 300px;
          margin: 2rem auto;
        }

        .central-logo .logo-wrapper {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #2c2c2c !important;
        }

        .orbit-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: rotate 20s linear infinite;
        }

        .orbit-item {
          top: 50%;
          left: 50%;
          transform-origin: 0 0;
          transform: 
            translate(-50%, -50%) 
            rotate(var(--rotation)) 
            translateX(80px);
          animation-delay: var(--delay);
        }

        .format-icon {
          width: 28px;
          height: 28px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(calc(-1 * var(--rotation)));
          animation: counter-rotate 20s linear infinite;
        }

        .format-label {
          color: #fff;
          opacity: 0.9;
          white-space: nowrap;
          transform: rotate(calc(-1 * var(--rotation)));
          animation: counter-rotate 20s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counter-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .orbiting-container {
            width: 220px;
            height: 220px;
          }
          
          .orbit-item {
            transform: 
              translate(-50%, -50%) 
              rotate(var(--rotation)) 
              translateX(80px);
          }
          
          .format-icon {
            width: 28px;
            height: 28px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: rotate(calc(-1 * var(--rotation)));
            animation: counter-rotate 20s linear infinite;
          }
          
          .central-logo .logo-wrapper {
            width: 55px;
            height: 55px;
          }
          
          .central-logo .logo-wrapper img {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </div>
  );
} 