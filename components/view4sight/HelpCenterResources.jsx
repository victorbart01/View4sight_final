"use client";
import React from "react";
import Image from "next/image";

const helpResources = [
  {
    id: 1,
    lightIcon: "/assets/images/custom-icons/icon-quick-starter.svg",
    darkIcon: "/assets/images/custom-icons/icon-quick-starter.svg",
    altText: "guide-icon",
    title: "Getting Started Guide",
    description: "Learn the basics of uploading and visualizing your 3D data",
    linkText: "Read Guide",
    linkUrl: "/ressources/guides/getting-started",
  },
  {
    id: 2,
    lightIcon: "/assets/images/custom-icons/icon-video-tuto.svg",
    darkIcon: "/assets/images/custom-icons/icon-video-tuto.svg",
    altText: "video-icon",
    title: "Video Tutorials",
    description: "Step-by-step video tutorials for all platform features",
    linkText: "Watch Videos",
    linkUrl: "/ressources/tutorials",
  },
  {
    id: 3,
    lightIcon: "/assets/images/custom-icons/icon-live-chat.svg",
    darkIcon: "/assets/images/custom-icons/icon-live-chat.svg",
    altText: "chat-icon",
    title: "Live Chat Support",
    description: "Chat with our support team for immediate assistance",
    linkText: "Start Chat",
    linkUrl: "chat",
  },
  {
    id: 4,
    lightIcon: "/assets/images/custom-icons/icon-internet.svg",
    darkIcon: "/assets/images/custom-icons/icon-internet.svg",
    altText: "status-icon",
    title: "System Status",
    description: "Check current platform status and recent updates",
    linkText: "View Status",
    linkUrl: "/status",
  },
];

export default function HelpCenterResources() {
  const openZohoChat = () => {
    if (window.$zoho && window.$zoho.salesiq && window.$zoho.salesiq.chat) {
      window.$zoho.salesiq.chat.start();
    }
  };

  return (
    <div id="helpful-links" className="section panel overflow-hidden">
      <div className="section-outer panel pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Explore Our Help Resources
              </h2>
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-3 g-2 xl:g-3 justify-between col-match"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {helpResources.map((resource) => (
                  <div key={resource.id}>
                    <div className="panel vstack gap-2 items-center text-center px-3 py-4 lg:py-6 xl:py-8 rounded-2 bg-secondary dark:bg-gray-800 lg:hover:-translate-y-2 duration-150 transition-all">
                      <div className="cstack mb-2">
                        <Image
                          className="w-64px lg:w-80px d-block dark:d-none"
                          src={resource.lightIcon}
                          width={100}
                          height={100}
                          alt={resource.altText}
                        />
                        <Image
                          className="w-64px lg:w-80px d-none dark:d-block"
                          src={resource.darkIcon}
                          width={100}
                          height={100}
                          alt={`${resource.altText}-dark`}
                        />
                      </div>
                      <h5 className="h5 m-0">{resource.title}</h5>
                      <p className="fs-6 opacity-70 dark:opacity-80">
                        {resource.description}
                      </p>
                      {resource.linkUrl === "chat" ? (
                        <button
                          onClick={openZohoChat}
                          className="uc-link fw-bold hstack gap-narrow justify-center bg-transparent border-0 text-inherit"
                        >
                          <span>{resource.linkText}</span>
                          <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                        </button>
                      ) : (
                        <a
                          href={resource.linkUrl}
                          className="uc-link fw-bold hstack gap-narrow justify-center"
                        >
                          <span>{resource.linkText}</span>
                          <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 