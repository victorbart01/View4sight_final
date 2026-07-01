import React from "react";
import { notFound } from "next/navigation";
import JobDetails from "@/components/view4sight/JobDetails";
import CareerOpenings from "@/components/view4sight/CareerOpenings";
import { jobDetailsData } from "@/data/view4sight-job-details";
import fr from "@/data/translations/fr.json";
import en from "@/data/translations/en.json";

const eyebrow = {
  fr: "Rejoindre View4Sight au poste de",
  en: "Join View4Sight as",
};

// Prefer the localized title/location from the translations (so /fr matches the
// careers list), and fall back to the raw job data if a translation is missing.
function getLocalizedJob(jobId, locale) {
  const source = locale === "fr" ? fr : en;
  const jobs = source?.careers?.jobs;
  const localized = Array.isArray(jobs) ? jobs.find((job) => job.id === jobId) : null;
  const fallback = jobDetailsData[jobId];
  return {
    title: localized?.title || fallback?.title,
    location: localized?.location || fallback?.location,
  };
}

export async function generateMetadata({ params }) {
  const { locale: rawLocale, id } = await params;
  const locale = rawLocale === "fr" ? "fr" : "en";
  const jobId = parseInt(id, 10);
  const job = getLocalizedJob(jobId, locale);

  if (!job.title) {
    return { title: "View4Sight" };
  }

  return {
    title: `${job.title} | View4Sight`,
    description:
      locale === "fr"
        ? `Rejoignez View4Sight au poste de ${job.title}.`
        : `Join View4Sight as ${job.title}.`,
  };
}

export default async function CareerDetailsPage({ params }) {
  const { locale: rawLocale, id } = await params;
  const locale = rawLocale === "fr" ? "fr" : "en";
  const jobId = parseInt(id, 10);

  if (!jobDetailsData[jobId]) {
    notFound();
  }

  const job = getLocalizedJob(jobId, locale);

  return (
    <div style={{ backgroundColor: "#0E0E0F" }}>
      <div id="hero_header" className="hero-header section panel overflow-hidden">
        <div className="section-outer panel pt-9 lg:pt-10 pb-4 sm:pb-6 xl:pb-9">
          <div className="container max-w-lg">
            <div className="section-inner panel">
              <div className="vstack items-center text-center gap-2 lg:gap-4">
                <span className="fs-6 fw-bold text-uppercase text-primary">
                  {eyebrow[locale]}
                </span>
                <h1 className="h2 sm:h1 lg:display-6 xl:display-5 max-w-600px my-0 mx-auto">
                  {job.title}
                </h1>
                <p className="fs-6 text-dark dark:text-white text-opacity-70 max-w-lg mx-auto">
                  {job.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <JobDetails jobId={jobId} />
      <CareerOpenings />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(jobDetailsData).map((id) => ({ id: String(id) }));
}
