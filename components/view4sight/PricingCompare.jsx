import React from "react";

export default function PricingCompare() {
  return (
    <div id="pricing_compare" className="pricing-compare section panel">
      <div className="section-outer panel pb-4 md:pb-6 xl:pb-10">
        <div className="container">
          <div
            className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="heading vstack gap-2 items-center panel text-center max-w-600px mx-auto">
              <h2 className="title h3 m-0">
                Compare View4Sight Plans
              </h2>
              <p className="fs-6 text-dark dark:text-white text-opacity-70">
                Choose the plan that fits your 3D visualization needs
              </p>
            </div>
            <div className="panel p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-black overflowx-auto">
              <table className="uc-table uc-table-divider">
                <thead className="table-head sticky-top z-1 bg-white text-dark dark:bg-gray-900 dark:text-white">
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="table-header-cell" scope="row">
                      <div className="text-transparent">
                        <span>Features</span>
                      </div>
                    </th>
                    <th className="table-header-cell w-1/4" scope="col">
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>Starter</span>
                        </div>
                        <div className="fs-7 text-gray-600">Free</div>
                      </div>
                    </th>
                    <th className="table-header-cell w-1/4" scope="col">
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>Team</span>
                        </div>
                        <div className="fs-7 text-gray-600">€79/month</div>
                      </div>
                    </th>
                    <th className="table-header-cell w-1/4" scope="col">
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>Studio</span>
                        </div>
                        <div className="fs-7 text-gray-600">€199/month</div>
                      </div>
                    </th>
                    <th className="table-header-cell w-1/4" scope="col">
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>Enterprise</span>
                        </div>
                        <div className="fs-7 text-gray-600">Custom</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={5} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>Core Features</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Storage
                        </span>
                      </div>
                    </th>
                    <td><span>15 GB</span></td>
                    <td><span>150 GB</span></td>
                    <td><span>500 GB</span></td>
                    <td><span>Unlimited</span></td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Users
                        </span>
                      </div>
                    </th>
                    <td><span>2 users</span></td>
                    <td><span>5 users</span></td>
                    <td><span>15 users</span></td>
                    <td><span>Unlimited</span></td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Active Projects
                        </span>
                      </div>
                    </th>
                    <td><span>3 projects</span></td>
                    <td><span>Unlimited</span></td>
                    <td><span>Unlimited</span></td>
                    <td><span>Unlimited</span></td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          File Formats
                        </span>
                      </div>
                    </th>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                  </tr>
                  
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={5} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>Advanced Features</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Annotations
                        </span>
                      </div>
                    </th>
                    <td><span>-</span></td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Embeddable Viewer
                        </span>
                      </div>
                    </th>
                    <td><span>-</span></td>
                    <td><span>-</span></td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          API Access
                        </span>
                      </div>
                    </th>
                    <td><span>-</span></td>
                    <td><span>-</span></td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          On-Premise Hosting
                        </span>
                      </div>
                    </th>
                    <td><span>-</span></td>
                    <td><span>-</span></td>
                    <td><span>-</span></td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Priority Support
                        </span>
                      </div>
                    </th>
                    <td><span>-</span></td>
                    <td><span>-</span></td>
                    <td><span>-</span></td>
                    <td>
                      <span className="cstack w-24px h-24px rounded-circle bg-primary text-white">
                        <i className="icon-narrow unicon-checkmark fw-bold" />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 