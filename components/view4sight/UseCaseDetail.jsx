import Link from "next/link";
import Image from "next/image";

export default function UseCaseDetail({ useCase }) {
  return (
    <div className="section panel overflow-hidden">
      {/* Hero Section */}
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="mb-4">
            <div className="hstack gap-2 fs-7 text-dark dark:text-white text-opacity-50">
              <Link href="/ressources" className="text-decoration-none hover:text-primary">
                Resources
              </Link>
              <span>/</span>
              <Link href="/ressources/use-cases" className="text-decoration-none hover:text-primary">
                Use Cases
              </Link>
              <span>/</span>
              <span className="text-dark dark:text-white text-opacity-70">
                {useCase.category}
              </span>
            </div>
          </nav>

          <div className="row gy-4 xl:gy-6 items-center">
            <div className="col-12 lg:col-7">
              <div className="hero-badge">
                {useCase.category}
              </div>
              <h1 className="h3 lg:h2 xl:h1 m-0 mt-3 mb-4">
                {useCase.title}
              </h1>
              <p className="h6 text-dark dark:text-white text-opacity-70 fw-normal mb-4">
                {useCase.subtitle}
              </p>
              <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-6">
                {useCase.hero.description}
              </p>
            </div>

            <div className="col-12 lg:col-5">
              <div className="panel p-4 bg-gray-25 dark:bg-gray-800 rounded-3">
                <Image
                  src={useCase.hero.image}
                  alt={useCase.title}
                  width={500}
                  height={300}
                  className="w-100 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="section-outer panel py-6 xl:py-8 bg-gray-25 dark:bg-gray-900">
        <div className="container max-w-4xl">
          <div className="row gy-4 xl:gy-6">
            <div className="col-12 lg:col-4">
              <h2 className="h4 text-dark dark:text-white mb-3">
                {useCase.challenge.title}
              </h2>
              <p className="text-dark dark:text-white text-opacity-70">
                {useCase.challenge.description}
              </p>
            </div>
            <div className="col-12 lg:col-8">
              <div className="vstack gap-3">
                {useCase.challenge.points.map((point, index) => (
                  <div key={index} className="hstack gap-3">
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mt-1">
                      <i className="unicon-close fs-8 text-red-600 dark:text-red-400"></i>
                    </div>
                    <p className="text-dark dark:text-white text-opacity-70 m-0">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="section-outer panel py-6 xl:py-8">
        <div className="container max-w-4xl">
          <div className="row gy-4 xl:gy-6">
            <div className="col-12 lg:col-4">
              <h2 className="h4 text-dark dark:text-white mb-3">
                {useCase.solution.title}
              </h2>
              <p className="text-dark dark:text-white text-opacity-70">
                {useCase.solution.description}
              </p>
            </div>
            <div className="col-12 lg:col-8">
              <div className="vstack gap-4">
                {useCase.solution.features.map((feature, index) => (
                  <div key={index} className="panel p-4 bg-primary bg-opacity-5 border border-primary border-opacity-10 rounded-2">
                    <div className="hstack gap-3">
                      <div className="w-8 h-8 bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                        <i className="unicon-check fs-7 text-primary"></i>
                      </div>
                      <div>
                        <h4 className="h6 text-dark dark:text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-dark dark:text-white text-opacity-70 m-0 fs-7">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="section-outer panel py-6 xl:py-8 bg-gray-25 dark:bg-gray-900">
        <div className="container max-w-5xl">
          <div className="text-center mb-6">
            <h2 className="h4 text-dark dark:text-white mb-3">
              {useCase.results.title}
            </h2>
          </div>

          <div className="row gy-4">
            {useCase.results.metrics.map((metric, index) => (
              <div key={index} className="col-6 lg:col-3">
                <div className="panel p-4 bg-white dark:bg-gray-800 rounded-3 text-center h-100">
                  <div className="h3 text-primary m-0 fw-bold mb-2">
                    {metric.value}
                  </div>
                  <div className="fs-6 text-dark dark:text-white fw-medium mb-1">
                    {metric.label}
                  </div>
                  <div className="fs-8 text-dark dark:text-white text-opacity-50">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="section-outer panel py-6 xl:py-8">
        <div className="container max-w-4xl">
          <div className="panel p-6 xl:p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3">
            <div className="row gy-4 items-center">
              <div className="col-12 lg:col-8">
                <div className="mb-4">
                  <i className="unicon-quote-left fs-3 text-primary text-opacity-20"></i>
                </div>
                <blockquote className="fs-5 text-dark dark:text-white fw-medium mb-4 leading-relaxed">
                  {useCase.testimonial.quote}
                </blockquote>
                <div className="hstack gap-3">
                  <Image
                    src={useCase.testimonial.image}
                    alt={useCase.testimonial.author}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-circle object-cover"
                  />
                  <div>
                    <div className="fs-6 text-dark dark:text-white fw-medium">
                      {useCase.testimonial.author}
                    </div>
                    <div className="fs-7 text-dark dark:text-white text-opacity-70">
                      {useCase.testimonial.role}, {useCase.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-4">
                <div className="text-center lg:text-end">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-3 d-inline-flex align-items-center justify-content-center mb-3">
                    <span className="fs-2">🏆</span>
                  </div>
                  <div className="fs-7 text-dark dark:text-white text-opacity-50">
                    Customer Success Story
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Style View4Sight */}
      <div id="cta" className="cta section panel">
        <div className="section-outer panel py-4 sm:py-6 xl:py-8 bg-gray-900 text-white rounded-2 lg:rounded-3 mx-2 overflow-hidden">
          <div className="container xl:max-w-xl">
            <div className="section-inner vstack lg:hstack items-center gap-4 lg:gap-6 text-center ltr:lg:text-start rtl:lg:text-end flex-sm-column home-6-cta">
              <div
                className="content panel vstack items-center lg:items-start justify-center gap-2 lg:max-w-3/5 px-4 lg:px-0"
                data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="h2 xl:display-5 text-white">
                  Ready to achieve similar results?
                </h2>
                <p className="fs-5 my-0 text-white text-opacity-80">
                  Start your 30-day free trial. No credit card required.
                </p>
                <Link
                  href="/tarifs"
                  className="btn btn-md btn-primary min-w-150px px-3 mt-4"
                >
                  <span>Try View4Sight</span>
                  <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                </Link>
              </div>
              <div
                className="image-wrap lg:max-w-1/2 mt-2"
                data-anime="onview:-100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;"
              >
                <Image
                  className="image"
                  alt="success-story"
                  src="/assets/images/template/home-06-builder-tools.png"
                  width="1280"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Use Cases - Style minimaliste */}
      <div className="section-outer panel py-6 xl:py-8">
        <div className="container max-w-3xl text-center">
          <h3 className="h5 text-dark dark:text-white mb-3">
            Explore More Success Stories
          </h3>
          <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
            Discover how other industries are transforming their workflows with View4Sight
          </p>
          <Link href="/ressources" className="btn btn-outline-primary">
            View All Use Cases
          </Link>
        </div>
      </div>
    </div>
  );
} 