"use client";
import React from "react";
import Link from "next/link";
import { openContactModal } from "@/utlis/toggleContactModal";

export default function CtaFinal() {
  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9 bg-primary text-white">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 lg:gap-6 text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              {/* Main CTA */}
              <div className="vstack gap-3 lg:gap-4">
                <h2 className="h2 lg:h1 xl:display-6 m-0">
                  Ready to Transform How You Share 3D Data?
                </h2>
                <p className="fs-5 lg:fs-4 text-white text-opacity-90 max-w-600px mx-auto">
                  Join 100+ French surveying professionals who trust View4Sight 
                  for their geospatial data sharing and collaboration.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="vstack sm:hstack justify-center gap-2 lg:gap-3 mt-2">
                <Link
                  href="/page-pricing"
                  className="btn btn-lg btn-secondary text-primary px-4 lg:px-6"
                >
                  <span>Start Your Free Trial Now</span>
                  <i className="icon icon-narrow unicon-arrow-right fw-bold ms-1" />
                </Link>
                <a
                  onClick={openContactModal}
                  className="btn btn-lg btn-outline-white px-4 lg:px-6"
                  data-uc-toggle=""
                >
                  <span>Request a Demo</span>
                  <i className="icon icon-narrow unicon-play fw-bold ms-1" />
                </a>
              </div>

              {/* Risk Reversal */}
              <div className="vstack gap-2 mt-3">
                <div className="hstack justify-center gap-4 flex-wrap">
                  <div className="hstack gap-2">
                    <i className="icon icon-1 unicon-check text-white"></i>
                    <span className="fs-7 fw-medium">30-day free trial</span>
                  </div>
                  <div className="hstack gap-2">
                    <i className="icon icon-1 unicon-check text-white"></i>
                    <span className="fs-7 fw-medium">No credit card required</span>
                  </div>
                  <div className="hstack gap-2">
                    <i className="icon icon-1 unicon-check text-white"></i>
                    <span className="fs-7 fw-medium">Cancel anytime</span>
                  </div>
                  <div className="hstack gap-2">
                    <i className="icon icon-1 unicon-check text-white"></i>
                    <span className="fs-7 fw-medium">Your data stays yours</span>
                  </div>
                </div>
              </div>

              {/* Urgency/Bonus */}
              <div className="panel p-4 lg:p-5 rounded-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20">
                <div className="vstack gap-2 text-center">
                  <h5 className="h6 lg:h5 m-0 text-warning">
                    🚀 Limited Time Offer
                  </h5>
                  <p className="fs-7 lg:fs-6 text-white text-opacity-90 m-0">
                    Early adopters get priority access to new features and direct input on our roadmap. 
                    Plus 150GB of storage included in your free trial.
                  </p>
                </div>
              </div>

              {/* Contact Alternative */}
              <div className="vstack gap-2 mt-4">
                <p className="fs-7 text-white text-opacity-70 m-0">
                  Need a custom demo for your team?
                </p>
                <a 
                  href="mailto:hello@view4sight.com"
                  className="uc-link text-white fw-medium"
                >
                  Contact our team directly at hello@view4sight.com
                </a>
              </div>

              {/* Trust indicators */}
              <div className="hstack justify-center gap-4 flex-wrap mt-4 pt-4 border-top border-white border-opacity-20">
                <div className="hstack gap-2">
                  <span className="fs-7 fw-medium">🇫🇷</span>
                  <span className="fs-7 fw-medium text-white text-opacity-80">Hosted in France</span>
                </div>
                <div className="hstack gap-2">
                  <i className="icon icon-1 unicon-shield text-white"></i>
                  <span className="fs-7 fw-medium text-white text-opacity-80">ISO 27001 Certified</span>
                </div>
                <div className="hstack gap-2">
                  <i className="icon icon-1 unicon-users text-white"></i>
                  <span className="fs-7 fw-medium text-white text-opacity-80">10+ years experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 