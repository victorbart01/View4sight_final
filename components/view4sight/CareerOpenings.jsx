"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function CareerOpenings() {
  const { t } = useTranslation();
  const jobsRaw = t('careers.jobs');
  const jobs = Array.isArray(jobsRaw) ? jobsRaw : [];
  return (
    <div
      id="career_openings"
      className="career-openings section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 max-w-850px mx-auto">
              <h2
                className="h4 sm:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                {t('careers.openings_title')}
              </h2>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 col-match g-2 sm:g-3"
                  data-uc-grid=""
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {jobs.map((job, index) => (
                    <div key={index}>
                      <div className="panel vstack justify-end items-end gap-1 p-3 rounded lg:rounded-2" style={{ backgroundColor: "#29292E" }}>
                        <div className="vstack gap-narrow">
                          <h5 className="h6 lg:h5 m-0">{job.title}</h5>
                          <span className="fs-6 text-dark dark:text-white text-opacity-70">
                            {job.location}
                          </span>
                        </div>
                        <Link
                          href={`/ressources/carrieres/${job.id}`}
                          className="uc-link fs-7 fw-bold d-inline-flex items-center gap-narrow border-bottom pb-narrow"
                        >
                          <span>{t('careers.apply')}</span>
                          <i className="icon icon-narrow unicon-arrow-up-right fw-bold rtl:-rotate-90" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 