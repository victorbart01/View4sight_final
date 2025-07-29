"use client";
import { view4sightTiers, enterprisePlan } from "@/data/view4sight-pricing";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

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

// Animated Price Component
const AnimatedPrice = ({ price, isYearly, tier }) => {
  const displayPrice = isYearly ? tier.yearlyPrice : tier.price;
  
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <h3 
        className="h3 lg:h2 price m-0 text-dark dark:text-white"
        style={{
          transition: 'all 0.3s ease',
          lineHeight: '1',
          display: 'inline-block'
        }}
      >
        {displayPrice}
      </h3>
      {displayPrice !== "Free" && (
        <span 
          className="text-dark dark:text-white text-opacity-70"
          style={{
            position: 'absolute',
            right: '-60px',
            bottom: '8px',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '1',
            whiteSpace: 'nowrap'
          }}
        >
          {tier.priceSuffix}
        </span>
      )}
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const { t, isLoading } = useTranslation();

  if (isLoading) {
    return (
      <div id="pricing_tiers" className="pricing-tiers section panel overflow-hidden">
        <div className="section-outer panel pb-6 xl:pb-8" style={{ paddingTop: '8rem' }}>
          <div className="container xl:max-w-xl">
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        .pricing-toggle {
          position: relative;
          background: #2D2D2D;
          border: none;
          border-radius: 14px;
          padding: 4px;
          display: flex;
          width: 240px;
          height: 44px;
          margin: 0 auto;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .dark .pricing-toggle {
          background: #2D2D2D;
        }
        
        .pricing-toggle-option {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 500;
          color: #999999;
          cursor: pointer;
          transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 10px;
          height: 36px;
          padding: 0 8px;
        }
        
        .dark .pricing-toggle-option {
          color: #999999;
        }
        
        .pricing-toggle-option.active {
          color: white;
        }
        
        .dark .pricing-toggle-option.active {
          color: white;
        }
        
        .pricing-toggle-bubble {
          position: absolute;
          top: 4px;
          left: 4px;
          height: 36px;
          background: #1A1A1A;
          border-radius: 10px;
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.25),
            0 1px 3px rgba(0, 0, 0, 0.15),
            inset 0 1px 2px rgba(255, 255, 255, 0.1);
          transform: translateX(0);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          width: calc(50% - 4px);
          z-index: 1;
        }
        
        .dark .pricing-toggle-bubble {
          background: #1A1A1A;
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.35),
            0 1px 3px rgba(0, 0, 0, 0.2),
            inset 0 1px 2px rgba(255, 255, 255, 0.1);
        }
        
        .pricing-toggle.yearly .pricing-toggle-bubble {
          transform: translateX(calc(100%));
        }
        
        .pricing-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #FE552E;
          color: white;
          font-size: 10px;
          font-weight: 600;
          padding: 3px 7px;
          border-radius: 10px;
          transform: scale(1);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 4px rgba(254, 85, 46, 0.3);
        }
        
        .pricing-toggle.yearly .pricing-badge {
          transform: scale(0);
        }
        
        .save-message {
          height: 24px;
          overflow: hidden;
          margin-top: 8px;
          margin-bottom: 16px;
        }
        
        .save-message-text {
          transform: translateY(0);
          opacity: 1;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
                      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 14px;
          font-weight: 500;
          color: #666666;
        }
        
        .dark .save-message-text {
          color: #999999;
        }
        
        .pricing-toggle.yearly .save-message-text {
          transform: translateY(-20px);
          opacity: 0;
        }
        
        .tier-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .tier-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12) !important;
        }
        
        .tier-highlighted {
          border: 2px solid #FE552E !important;
          box-shadow: 0 4px 20px rgba(254, 85, 46, 0.15) !important;
        }
        
        @keyframes priceChange {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .price-animate {
          animation: priceChange 0.6s ease-out;
        }
      `}</style>
      
      <div
        id="pricing_tiers"
        className="pricing-tiers section panel overflow-hidden"
      >
        <div className="section-outer panel pb-6 xl:pb-8" style={{ paddingTop: '8rem' }}>
          <div className="container xl:max-w-xl">
            <div className="section-inner panel">
              <div className="panel vstack gap-3 xl:gap-4">
                {/* Header */}
                <div
                  className="heading panel vstack items-center gap-2 text-center"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <h2 className="h4 md:h3 lg:h2 xl:h1 m-0">
                    {t('pricing.title')}
                  </h2>
                  <p className="fs-7 xl:fs-6 text-dark dark:text-white text-opacity-70 max-w-lg mx-auto">
                    {t('pricing.subtitle')}
                  </p>
                  
                                     {/* Animated Toggle */}
                   <div className="position-relative" style={{ marginTop: '2rem' }}>
                     <div className={`pricing-toggle ${isYearly ? 'yearly' : ''}`}>
                       <div className="pricing-toggle-bubble"></div>
                       <div 
                         className={`pricing-toggle-option ${!isYearly ? 'active' : ''}`}
                         onClick={() => setIsYearly(false)}
                       >
                         Mensuel
                       </div>
                       <div 
                         className={`pricing-toggle-option ${isYearly ? 'active' : ''}`}
                         onClick={() => setIsYearly(true)}
                       >
                         Annuel
                         <span className="pricing-badge">-20%</span>
                       </div>
                     </div>
                     
                     <div className="save-message">
                       <div className="save-message-text text-center">
                         Passez à l'annuel et économisez 20%
                       </div>
                     </div>
                  </div>
                </div>

                                 {/* Pricing cards */}
                 <div className="uc-switcher pricing-switcher" style={{ marginTop: '0.5rem' }}>
                  <div className="uc-active">
                    <div
                      className="row child-cols-12 md:child-cols-6 lg:child-cols-4 col-match justify-center g-2 lg:g-3"
                      data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                    >
                      {view4sightTiers.map((tier, index) => (
                        <div key={index}>
                          <div
                            className={`tier panel rounded-2 tier-card ${
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
                                   <AnimatedPrice price={tier.price} isYearly={isYearly} tier={tier} />
                                 </div>
                              </div>
                                                             <p className="desc fs-7 text-dark dark:text-white text-opacity-70 mb-0" style={{ marginTop: '1rem', marginBottom: '-0.75rem !important' }}>
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
    </>
  );
} 