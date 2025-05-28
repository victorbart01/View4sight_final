"use client";
import { brands } from "@/data/brands";
import Image from "next/image";

export default function Brands() {
  // Dupliquer les logos pour un défilement continu
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="brands-container overflow-hidden">
      <div className="brands-scroll">
        {duplicatedBrands.map((brand, index) => {
          // Réduire la taille de tous les logos de 20%
          const isBrand06 = brand.src.includes('brand-06.svg');
          const baseWidth = isBrand06 ? 165 : 165; // Taille de base uniforme
          const baseHeight = isBrand06 ? 48 : 48;   // Taille de base uniforme
          
          // Réduction de 20% pour tous les logos
          const logoWidth = Math.round(baseWidth * 0.8);   // 165 * 0.8 = 132
          const logoHeight = Math.round(baseHeight * 0.8);  // 48 * 0.8 = 38
          
          return (
            <div
              className="brand-item d-inline-flex align-items-center justify-content-center"
              key={index}
              style={{ minWidth: '200px', marginRight: '40px' }}
            >
              <Image
                className="brand-item-image h-32px"
                src={brand.src}
                width={logoWidth}
                height={logoHeight}
                alt={brand.alt}
              />
            </div>
          );
        })}
      </div>
      
      <style jsx>{`
        .brands-container {
          width: 100%;
          white-space: nowrap;
        }
        
        .brands-scroll {
          display: inline-flex;
          animation: scroll-left 45s linear infinite;
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .brands-container:hover .brands-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
