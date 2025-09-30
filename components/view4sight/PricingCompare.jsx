"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function PricingCompare() {
  const { t } = useTranslation();
  return (
    <div id="pricing_compare" className="pricing-compare section panel">
      <div className="section-outer panel pb-4 md:pb-6 xl:pb-10">
        <div className="container">
          <div
            className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="heading vstack gap-2 items-center panel text-center max-w-600px mx-auto">
              <h2 className="title h3 m-0">{t('pricing.compare.title')}</h2>
              <p className="fs-6 text-dark dark:text-white text-opacity-70">{t('pricing.compare.subtitle')}</p>
            </div>
            <div className="panel p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-black overflowx-auto">
              <table className="uc-table uc-table-divider">
                <thead className="table-head sticky-top z-1 bg-white text-dark dark:bg-gray-900 dark:text-white">
                  <tr className="table-row border-white dark:border-gray-900">
                    <th className="table-header-cell" scope="row">
                      <div className="text-transparent">
                        <span>{t('pricing.compare.columns.features')}</span>
                      </div>
                    </th>
                    <th className="table-header-cell w-1/4" scope="col">
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>{t('pricing.plans.starter.name')}</span>
                        </div>
                        <div className="fs-7 text-gray-600">{t('pricing.plans.starter.price')}</div>
                      </div>
                    </th>
                    <th className="table-header-cell w-1/4" scope="col">
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>{t('pricing.plans.team.name')}</span>
                        </div>
                        <div className="fs-7 text-gray-600">{`${t('pricing.plans.team.price')}${t('pricing.plans.team.period') || ''}`}</div>
                      </div>
                    </th>
                    <th className="table-header-cell w-1/4" scope="col">
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>{t('pricing.plans.studio.name')}</span>
                        </div>
                        <div className="fs-7 text-gray-600">{`${t('pricing.plans.studio.price')}${t('pricing.plans.studio.period') || ''}`}</div>
                      </div>
                    </th>
                    <th className="table-header-cell w-1/4" scope="col">
                      <div className="title">
                        <div className="h6 lg:h5 mt-4 mb-2">
                          <span>{t('pricing.plans.enterprise.name')}</span>
                        </div>
                        <div className="fs-7 text-gray-600">{t('pricing.plans.enterprise.price')}</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                    <th colSpan={5} scope="colgroup">
                      <div className="h6 m-0 text-dark dark:text-white">
                        <span>{t('pricing.compare.groups.core')}</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-white dark:border-gray-900">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">{t('pricing.compare.rows.storage')}</span>
                      </div>
                    </th>
                    <td><span>{t('pricing.compare.values.storage_starter')}</span></td>
                    <td><span>{t('pricing.compare.values.storage_team')}</span></td>
                    <td><span>{t('pricing.compare.values.storage_studio')}</span></td>
                    <td><span>{t('pricing.compare.values.unlimited')}</span></td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">{t('pricing.compare.rows.users')}</span>
                      </div>
                    </th>
                    <td><span>{t('pricing.compare.values.users_starter')}</span></td>
                    <td><span>{t('pricing.compare.values.users_team')}</span></td>
                    <td><span>{t('pricing.compare.values.users_studio')}</span></td>
                    <td><span>{t('pricing.compare.values.unlimited')}</span></td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">{t('pricing.compare.rows.active_projects')}</span>
                      </div>
                    </th>
                    <td><span>{t('pricing.compare.values.projects_starter')}</span></td>
                    <td><span>{t('pricing.compare.values.unlimited')}</span></td>
                    <td><span>{t('pricing.compare.values.unlimited')}</span></td>
                    <td><span>{t('pricing.compare.values.unlimited')}</span></td>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">{t('pricing.compare.rows.file_formats')}</span>
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
                        <span>{t('pricing.compare.groups.advanced')}</span>
                      </div>
                    </th>
                  </tr>
                  <tr className="table-row border-gray-100 dark:border-gray-600">
                    <th scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">{t('pricing.compare.rows.annotations')}</span>
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
                        <span className="fs-5 fw-bold text-dark dark:text-white">{t('pricing.compare.rows.embeddable_viewer')}</span>
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
                        <span className="fs-5 fw-bold text-dark dark:text-white">{t('pricing.compare.rows.api_access')}</span>
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
                        <span className="fs-5 fw-bold text-dark dark:text-white">{t('pricing.compare.rows.on_premise')}</span>
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
                        <span className="fs-5 fw-bold text-dark dark:text-white">{t('pricing.compare.rows.priority_support')}</span>
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