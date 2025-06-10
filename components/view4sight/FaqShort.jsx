"use client";
import Accordion from "@/components/common/Accordion";
import React from "react";
import Link from "next/link";

export default function FaqShort() {
  // FAQ data specific to View4Sight
  const view4sightFaqs = [
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
    },
    {
      id: 5,
      question: "Do I need to install software?",
      answer: "No installation required. View4Sight runs entirely in your web browser, making it accessible from any device with an internet connection."
    },
    {
      id: 6,
      question: "How much storage do I get?",
      answer: "Our free plan includes 150GB of storage. Professional plans offer unlimited storage with additional collaboration features."
    }
  ];

  return (
    <div id="faq" className="faq section panel scrollSpysection">
      <div className="section-outer panel py-6 xl:py-10 bg-gray-900">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="faq-inner panel row child-cols-12 lg:child-cols justify-between g-4">
              <div className="lg:col-5 sticky-element">
                <div
                  className="uc-sticky-placeholder"
                  style={{ height: 0, width: 0, margin: 0 }}
                  hidden=""
                />
                <div className="panel vstack items-start gap-2 uc-sticky">
                  <div className="cstack gap-1 py-1 px-3 border border-white border-opacity-30 rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                    <span className="fs-8 fw-bold text-uppercase text-white">FAQs</span>
                  </div>
                  <h2 className="h3 lg:h2 m-0 text-white">Frequently Asked Questions</h2>
                  <p className="fs-6 lg:fs-5 text-white text-opacity-80">
                    Get answers to the most common questions about View4Sight's 3D visualization platform, data security, and geospatial file handling.
                  </p>
                  <a
                    href="mailto:pb@integral4.fr"
                    className="btn btn-sm lg:btn-md btn-primary px-3 mt-2"
                  >
                    <span>Still have a question?</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                  </a>
                </div>
              </div>
              <div className="lg:col-6">
                <div className="panel">
                  <ul
                    className="gap-2 uc-accordion"
                    data-uc-accordion="targets: > li; multiple: true"
                  >
                    <Accordion 
                      faqData={view4sightFaqs}
                      parentClass="panel p-2 md:p-4 border rounded-1-5" 
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 