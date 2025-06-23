import JobDetails from "@/components/view4sight/JobDetails";
import CareerOpenings from "@/components/view4sight/CareerOpenings";
import { view4sightJobListings } from "@/data/view4sight-career";
import { jobDetailsData } from "@/data/view4sight-job-details";

export const metadata = {
  title: "Career Details - View4Sight",
  description: "Join View4Sight and help revolutionize 3D data visualization for the surveying industry.",
};

export default async function CareerDetailsPage(props) {
  const params = await props.params;
  const id = parseInt(params.id);
  const jobItem = view4sightJobListings.find((job) => job.id === id) || view4sightJobListings[0];
  const jobDetail = jobDetailsData[id] || jobDetailsData[1];

  return (
    <>
      <div
        id="hero_header"
        className="hero-header section panel overflow-hidden"
      >
        <div className="section-outer panel pt-9 lg:pt-10 pb-4 sm:pb-6 xl:pb-9">
          <div className="container max-w-lg">
            <div className="section-inner panel">
              <div className="vstack items-center text-center gap-2 lg:gap-4">
                <span className="fs-6 fw-bold text-uppercase text-primary">
                  Join View4Sight as
                </span>
                <h1 className="h2 sm:h1 lg:display-6 xl:display-5 max-w-600px my-0 mx-auto">
                  {jobDetail.title}
                </h1>
                <p className="fs-6 text-dark dark:text-white text-opacity-70 max-w-lg mx-auto">
                  {jobDetail.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <JobDetails jobId={id} />
      <CareerOpenings />
    </>
  );
} 