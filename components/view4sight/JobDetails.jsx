import { jobDetailsData, view4sightBenefitsDetail } from "@/data/view4sight-job-details";
import React from "react";

export default function JobDetails({ jobId }) {
  const job = jobDetailsData[jobId] || jobDetailsData[1];

  return (
    <div id="job_details" className="job-details section panel pb-6 xl:pb-9">
      <div className="section-outer panel">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
              <div className="row g-3 gy-6 lg:g-6 lg:gy-8" data-uc-grid="">
                <div className="col-12 md:col-8 md:order-2">
                  <div className="panel fs-5 vstack gap-2">
                    <p>
                      {job.description}
                    </p>
                    <h3 className="h5 mt-2 mb-0">Tasks:</h3>
                    <ul className="m-0">
                      {job.tasks.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <h3 className="h5 mt-2 mb-0">Requirements:</h3>
                    <ul className="m-0">
                      {job.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <h3 className="h5 mt-2 mb-0">Benefits:</h3>
                    <div className="row child-cols-6 col-match g-1">
                      {view4sightBenefitsDetail.map((benefit, index) => (
                        <div key={index}>
                          <div className="panel hstack gap-1">
                            <i className="icon icon-1 unicon-checkmark-outline text-primary" />
                            <span className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
                              {benefit}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-12 md:col-4 order-1">
                  <div data-uc-sticky="end: #job_details; offset: 80; media: @m;">
                    <div className="panel vstack gap-3 lg:gap-4 p-2 lg:p-3 rounded bg-secondary dark:bg-gray-800">
                      <h4 className="h5 m-0 pb-2 border-bottom">Job details</h4>
                      <div className="vstack gap-2">
                        <div className="hstack gap-1">
                          <i className="icon-1 unicon-portfolio" />
                          <h5 className="h6 m-0">Job type</h5>
                        </div>
                        <div className="hstack gap-narrow fs-7 fw-bold">
                          {job.type.map((type, index) => (
                            <span key={index} className="px-1 py-narrow bg-white dark:bg-gray-800 rounded">
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="vstack gap-1">
                        <div className="hstack gap-1">
                          <i className="icon-1 unicon-location" />
                          <h5 className="h6 m-0">Location</h5>
                        </div>
                        <div className="hstack gap-narrow fs-7 fw-bold">
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="vstack gap-1">
                        <div className="hstack gap-1">
                          <i className="icon-1 unicon-money" />
                          <h5 className="h6 m-0">Salary</h5>
                        </div>
                        <div className="hstack gap-narrow fs-7 fw-bold">
                          <span>{job.salary}</span>
                        </div>
                      </div>
                      <div>
                        <a
                          href="#apply"
                          className="btn btn-md btn-primary text-white w-100"
                        >
                          Apply job
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 