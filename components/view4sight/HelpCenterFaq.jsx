"use client";
import Accordion from "@/components/common/Accordion";
import React from "react";

const helpFaqs = [
  {
    question: "How do I upload my first 3D dataset?",
    answer: "Simply go to your dashboard, click 'New Project', drag and drop your files (LAS, E57, IFC, etc.), and our platform will automatically process them. The upload supports files up to 20GB depending on your plan."
  },
  {
    question: "What file formats are supported?",
    answer: "View4Sight supports all major 3D formats including LAS, E57, IFC, DXF, PLY, and ORTHO imagery. We also support various survey and point cloud formats from leading hardware manufacturers."
  },
  {
    question: "How do I share my 3D data with clients?",
    answer: "You can generate secure shareable links with custom permissions. Go to your project, click 'Share', set viewing permissions, and send the link. Recipients don't need an account to view your data."
  },
  {
    question: "Can I measure distances and volumes in the viewer?",
    answer: "Yes! Use our built-in measurement tools to calculate distances, areas, volumes, and create cross-sections. All measurements are precise and can be exported for documentation."
  },
  {
    question: "How do I upgrade or downgrade my plan?",
    answer: "Go to Settings > Billing in your dashboard. You can change plans anytime. Upgrades take effect immediately, downgrades at the next billing cycle. No data is lost during plan changes."
  },
  {
    question: "Is my data secure and where is it stored?",
    answer: "All data is encrypted in transit and at rest. We use French data centers and are fully GDPR compliant. You maintain full ownership of your data and can delete it anytime."
  },
  {
    question: "Can I integrate View4Sight with my existing tools?",
    answer: "Yes! We provide a comprehensive REST API and webhooks for custom integrations. Popular integrations include CAD software, survey equipment, and project management tools."
  },
  {
    question: "What if I need help during my free trial?",
    answer: "Our support team is available throughout your trial. Use the chat feature, email support, or schedule a demo call. We're committed to helping you succeed with View4Sight."
  }
];

export default function HelpCenterFaq() {
  return (
    <div id="faq" className="section panel overflow-hidden">
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-md">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div
              className="panel vstack gap-4 md:gap-6 lg:gap-8"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
                Frequently Asked Questions
              </h2>
              <div className="panel">
                <ul
                  className="gap-1 uc-accordion"
                  data-uc-accordion="targets: > li;"
                >
                  <Accordion 
                    faqData={helpFaqs}
                    parentClass="panel p-3 lg:p-4 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800" 
                  />
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 