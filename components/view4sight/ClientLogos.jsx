"use client";
import React from "react";
import Image from "next/image";
import Brands from "@/components/common/Brands";

export default function ClientLogos() {
  return (
    <div
      id="companies_sponsores"
      className="companies-sponsores section panel overflow-hidden"
    >
      <div className="section-outer panel pt-6 pb-3">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="brands panel overflow-hidden"
              data-anime="onview: true; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;"
            >
              <div className="block-panel panel">
                <div className="element-brands text-primary dark:text-white mask-x">
                  <Brands />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 