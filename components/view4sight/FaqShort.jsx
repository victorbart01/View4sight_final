"use client";
import React, { useState } from "react";

export default function FaqShort() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "What file formats do you support?",
      answer: "All major geospatial formats including LAS, LAZ, E57, PLY for point clouds; IFC, DWG, DXF for BIM; TIFF, GeoTIFF for orthophotos; and 360° imagery formats."
    },
    {
      id: 2,
      question: "How do you handle large datasets?",
      answer: "Our streaming technology optimizes data delivery. Files are processed server-side and streamed efficiently to browsers, handling multi-gigabyte datasets smoothly."
    },
    {
      id: 3,
      question: "Can I control who sees my data?",
      answer: "Absolutely. Granular access controls let you set viewing permissions, download restrictions, and project-specific access for each collaborator."
    },
    {
      id: 4,
      question: "What about data sovereignty?",
      answer: "Your data is hosted on French servers with ISO 27001 certification. We also offer on-premise installations for complete control."
    }
  ];

  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase">
                  FAQ
                </span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Frequently Asked{" "}
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  Questions
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Get answers to the most common questions about View4Sight.
              </p>
            </div>

            <div
              className="panel vstack gap-2"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 300});"
            >
              {faqs.map((faq, index) => (
                <div key={faq.id} className="panel">
                  <div className="panel border rounded-2 overflow-hidden">
                    <button
                      className={`panel w-100 text-start p-4 lg:p-5 bg-white dark:bg-gray-800 hover:bg-secondary dark:hover:bg-gray-700 transition-colors ${
                        activeIndex === index ? 'bg-secondary dark:bg-gray-700' : ''
                      }`}
                      onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                    >
                      <div className="hstack justify-between items-center gap-3">
                        <h5 className="h6 lg:h5 m-0">{faq.question}</h5>
                        <i className={`icon icon-1 unicon-chevron-down transition-transform ${
                          activeIndex === index ? 'rotate-180' : ''
                        }`}></i>
                      </div>
                    </button>
                    
                    {activeIndex === index && (
                      <div className="panel p-4 lg:p-5 pt-0 lg:pt-0 bg-white dark:bg-gray-800">
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 m-0">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional help */}
            <div 
              className="panel mt-6 lg:mt-8 p-4 lg:p-6 rounded-2 bg-primary-50 dark:bg-gray-800 text-center"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 600;"
            >
              <div className="vstack gap-3">
                <h4 className="h5 lg:h4 m-0">Still have questions?</h4>
                <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                  Our team is here to help you get started with View4Sight.
                </p>
                <div className="hstack justify-center gap-3">
                  <a 
                    href="mailto:hello@view4sight.com" 
                    className="btn btn-sm btn-primary"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="/fonctionnalites" 
                    className="btn btn-sm btn-outline-primary"
                  >
                    View Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 