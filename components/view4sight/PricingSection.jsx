import { view4sightTiers, enterprisePlan } from "@/data/view4sight-pricing";
import Link from "next/link";
import React from "react";

export default function PricingSection() {
  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 xl:py-6">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 xl:gap-6">
              {/* Header */}
              <div
                className="heading panel vstack items-center gap-2 text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <div className="hero-badge mx-auto">
                  Pricing Plans
                </div>
                <h2 className="h3 lg:h2 m-0">
                  Find the perfect plan for your team
                </h2>
                <p className="fs-7 xl:fs-6 text-dark dark:text-white text-opacity-70 max-w-lg mx-auto">
                  Start with a 30-day free trial. No credit card required.
                </p>
              </div>

              {/* Pricing cards */}
              <div className="content panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match justify-center g-2 lg:g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                >
                  {view4sightTiers.map((tier, index) => (
                    <div key={index}>
                      <div
                        className={`tier panel vstack justify-between rounded-2 ${
                          tier.highlight 
                            ? "bg-white dark:bg-gray-900 position-relative border-2 border-primary shadow-lg" 
                            : "bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
                        } text-dark h-100`}
                      >
                        {tier.highlight && (
                          <span className="position-absolute top-0 end-0 d-inline-flex py-narrow px-2 bg-primary rounded-pill text-white fs-8 fw-medium m-2">
                            Popular
                          </span>
                        )}
                        <header className="tier-header vstack gap-1 items-center p-3 lg:p-4 pb-0">
                          <span className="icon-box cstack w-40px h-40px rounded-circle bg-primary text-white">
                            <i className={`icon-1 ${tier.icon} fs-6 fw-bold`} />
                          </span>
                          <h5 className="h5 m-0 text-dark dark:text-white">
                            {tier.plan}
                          </h5>
                          <div className="d-flex gap-narrow items-end mt-1">
                            <h3 className="h3 lg:h2 price m-0 text-dark dark:text-white">
                              {tier.price}
                            </h3>
                            {tier.priceSuffix && (
                              <span className="fs-6 mb-1 text-dark dark:text-white text-opacity-70">
                                {tier.priceSuffix}
                              </span>
                            )}
                          </div>
                          <p className="desc fs-7 text-dark dark:text-white text-opacity-70 mb-0">
                            {tier.description}
                          </p>
                        </header>
                        <div className="tier-body p-3 lg:p-4 flex-grow-1 pb-3">
                          <ul className="nav-y gap-2 text-start">
                            {tier.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="hstack items-start gap-2"
                              >
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fs-8 fw-bold flex-shrink-0 mt-narrow" />
                                <span className="fs-7 text-dark dark:text-white text-opacity-80">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <footer className="tier-footer p-3 lg:p-4 mt-auto border-top border-gray-200 dark:border-gray-700">
                          <div className="vstack gap-1">
                            <Link
                              className={`btn btn-md ${
                                tier.highlight 
                                  ? "btn-primary" 
                                  : "btn-dark dark:btn-white"
                              } w-100 rounded`}
                              href={"/sign-up"}
                            >
                              <span>{tier.buttonText}</span>
                            </Link>
                            <small className="d-block text-center text-dark dark:text-white text-opacity-60">
                              {tier.footerText || "No credit card required"}
                            </small>
                          </div>
                        </footer>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise section */}
              <div 
                className="panel mt-3"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 600;"
              >
                <div className="bg-secondary dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2 p-4 lg:p-5 position-relative overflow-hidden">
                  <div className="position-absolute top-0 end-0 w-50 h-100 bg-gradient-45 from-primary to-transparent opacity-5 z-0"></div>
                  <div className="row items-center g-4 position-relative z-1">
                    <div className="col-12 lg:col-8">
                      <div className="vstack gap-3">
                        <div className="hstack gap-3 items-center">
                          <span className="icon-box cstack w-48px h-48px rounded-circle bg-primary text-white">
                            <i className="icon-1 unicon-building fw-bold" />
                          </span>
                          <div>
                            <h3 className="h4 mb-1 text-dark dark:text-white">{enterprisePlan.title}</h3>
                            <p className="fs-6 m-0 text-dark dark:text-white text-opacity-70">
                              {enterprisePlan.description}
                            </p>
                          </div>
                        </div>
                        <div className="row child-cols-12 sm:child-cols-6 g-2 mt-2">
                          {enterprisePlan.features.map((feature, idx) => (
                            <div key={idx}>
                              <div className="hstack gap-2">
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fs-8 fw-bold flex-shrink-0" />
                                <div>
                                  <span className="fs-7 fw-medium text-dark dark:text-white">{feature.title}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 lg:col-4 text-center text-lg-end">
                      <div className="vstack gap-3">
                        <div>
                          <h4 className="h4 m-0 text-dark dark:text-white">Let's talk</h4>
                          <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-0">
                            Custom pricing
                          </p>
                        </div>
                        <Link href={enterprisePlan.buttonLink} className="btn btn-md btn-primary">
                          {enterprisePlan.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom note */}
              <p
                className="text-center text-dark dark:text-white text-opacity-60 fs-7"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                All prices exclude applicable taxes. 
                <Link href="/securite" className="text-primary ms-1">Learn about security</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 