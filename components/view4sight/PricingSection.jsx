"use client";
import { view4sightTiers, enterprisePlan } from "@/data/view4sight-pricing";
import Link from "next/link";
import React, { useState } from "react";

// Function to handle Polar checkout
const handleCheckout = async (tier, isYearly) => {
  // Free tier redirects to sign-in
  if (tier.plan === "Starter") {
    window.location.href = "/sign-in";
    return;
  }

  try {
    const productId = isYearly ? tier.polarProductIdYearly : tier.polarProductIdMonthly;
    
    if (!productId) {
      console.error("No product ID found for this plan");
      return;
    }

    const response = await fetch("/api/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
        planName: tier.plan,
        isYearly: isYearly,
      }),
    });

    const data = await response.json();

    if (data.checkoutUrl) {
      // Redirect to Polar checkout
      window.location.href = data.checkoutUrl;
    } else {
      console.error("Failed to create checkout session:", data.error);
    }
  } catch (error) {
    console.error("Error creating checkout:", error);
  }
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel pb-6 xl:pb-8" style={{ paddingTop: '8rem' }}>
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 xl:gap-6">
              {/* Header */}
              <div
                className="heading panel vstack items-center gap-2 text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="h4 md:h3 lg:h2 xl:h1 m-0">
                  Simple Pricing That Grows With Your Team
                </h2>
                <p className="fs-7 xl:fs-6 text-dark dark:text-white text-opacity-70 max-w-lg mx-auto">
                  Start free, scale as you grow. No per-viewer fees, no hidden costs, no long-term contracts.
                </p>
                <div className="position-relative">
                  <ul
                    className="uc-switcher-nav nav-x gap-0 p-narrow border rounded-2 fs-7 fw-medium"
                    data-uc-switcher="connect: .pricing-switcher;"
                  >
                    <li className={!isYearly ? "uc-active" : ""}>
                      <a
                        onClick={() => setIsYearly(false)}
                        className="text-none w-128px cstack p-1"
                      >
                        Monthly
                      </a>
                    </li>
                    <li className={isYearly ? "uc-active" : ""}>
                      <a
                        onClick={() => setIsYearly(true)}
                        className="text-none w-128px cstack p-1 position-relative"
                      >
                        Yearly
                        <span className="position-absolute top-0 start-100 translate-middle badge bg-primary text-white fs-8 rounded-pill">
                          -20%
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="fs-7 text-primary mt-2 mb-0 fw-medium" style={{ height: '20px', visibility: !isYearly ? 'visible' : 'hidden' }}>
                    Switch to yearly and save 20%
                  </p>
                </div>
              </div>

              {/* Pricing cards */}
              <div className="uc-switcher pricing-switcher mt-2">
                <div className="uc-active">
                  <div
                    className="row child-cols-12 md:child-cols-6 lg:child-cols-4 col-match justify-center g-2 lg:g-3"
                    data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                  >
                    {view4sightTiers.map((tier, index) => (
                      <div key={index}>
                        <div
                          className={`tier panel rounded-2 ${
                            tier.highlight 
                              ? "bg-white dark:bg-gray-800 position-relative tier-highlighted shadow-lg" 
                              : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                          } text-dark h-100`}
                          style={{ 
                            display: 'grid', 
                            gridTemplateRows: '200px 1fr auto'
                          }}
                        >
                          {tier.highlight && (
                            <span className="position-absolute top-0 end-0 d-inline-flex py-narrow px-2 bg-primary rounded-pill text-white fs-8 fw-medium m-2">
                              Popular
                            </span>
                          )}
                          <header className="tier-header p-3 lg:p-4 pb-0 d-flex flex-column justify-content-between" style={{ paddingBottom: '0 !important' }}>
                            <div>
                              <h5 className="h5 m-0 text-dark dark:text-white">
                                {tier.plan}
                              </h5>
                              <div className="d-flex gap-narrow items-end mt-1">
                                <h3 className="h3 lg:h2 price m-0 text-dark dark:text-white">
                                  {isYearly ? tier.yearlyPrice : tier.price}
                                </h3>
                                {tier.price !== "Free" && (
                                  <span className="fs-6 mb-1 text-dark dark:text-white text-opacity-70">
                                    {tier.priceSuffix}
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="desc fs-7 text-dark dark:text-white text-opacity-70 mb-0" style={{ marginBottom: '-0.75rem !important' }}>
                              {tier.description}
                            </p>
                          </header>
                          <div className="tier-body px-3 lg:px-4 pt-0 pb-3">
                            <h6 className="fs-7 fw-medium text-dark dark:text-white mb-2" style={{ marginTop: '-1rem !important' }}>
                              Includes:
                            </h6>
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
                              <button
                                className={`btn btn-md ${
                                  tier.highlight 
                                    ? "btn-primary" 
                                    : "btn-dark dark:btn-white"
                                } w-100 rounded`}
                                onClick={() => handleCheckout(tier, isYearly)}
                              >
                                <span>{tier.buttonText}</span>
                              </button>
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
                Prices exclude any applicable taxes. 
                <Link href="/securite" className="text-primary ms-1">Learn about security</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 