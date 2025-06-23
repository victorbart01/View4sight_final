import Link from "next/link";
import Image from "next/image";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const metadata = {
  title: "Resources - View4Sight",
  description: "Explore our use cases, tutorials, blog articles, and other resources to get the most out of View4Sight.",
};

const resourceCategories = [
  {
    title: "Use Cases",
    description: "Discover how professionals across different industries use View4Sight to transform their workflows.",
    icon: "/assets/images/common/icons/target.svg",
    href: "/ressources/use-cases",
    color: "primary",
    stats: "4 Industry Stories"
  },
  {
    title: "Blog",
    description: "Stay updated with the latest insights on 3D visualization, surveying best practices, and platform updates.",
    icon: "/assets/images/common/icons/blog.svg", 
    href: "/ressources/blog",
    color: "success",
    stats: "Latest Articles"
  },
  {
    title: "Tutorials",
    description: "Step-by-step video guides to help you master View4Sight's features and optimize your workflows.",
    icon: "/assets/images/common/icons/video.svg",
    href: "/ressources/tutorials",
    color: "info",
    stats: "Coming Soon"
  },
  {
    title: "Careers",
    description: "Join our team and help shape the future of 3D visualization technology.",
    icon: "/assets/images/common/icons/account.svg",
    href: "/ressources/carrieres",
    color: "warning",
    stats: "We're Hiring"
  }
];

export default function ResourcesPage() {
  return (
    <div className="section panel overflow-hidden">
      {/* Hero Section */}
      <div className="section-outer panel pt-6 xl:pt-9 pb-2 xl:pb-3">
        <div className="container max-w-4xl">
          <div className="section-inner panel text-center">
            <div className="hero-badge mx-auto">
              Resources
            </div>
            <h1 className="h3 lg:h2 xl:h1 m-0 mt-3 mb-4">
              Everything You Need to Succeed
            </h1>
            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70 max-w-2xl mx-auto">
              Explore our comprehensive collection of resources designed to help you get the most out of View4Sight.
            </p>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-6xl">
          <div className="row gy-4 xl:gy-6">
            {resourceCategories.map((category, index) => (
              <div key={index} className="col-12 md:col-6">
                <Link href={category.href} className="text-decoration-none">
                  <div className="panel p-4 xl:p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3 h-100 hover:shadow-lg transition-all duration-300 hover:border-primary hover:border-opacity-20">
                    <div className="vstack gap-4">
                      <div className="hstack gap-4">
                        <div className={`w-16 h-16 bg-${category.color} bg-opacity-10 rounded-2 d-flex align-items-center justify-content-center flex-shrink-0`}>
                          <Image
                            src={category.icon}
                            alt={category.title}
                            width={28}
                            height={28}
                            style={{
                              filter: category.color === 'primary' ? 
                                "brightness(0) saturate(100%) invert(38%) sepia(77%) saturate(2618%) hue-rotate(343deg) brightness(101%) contrast(94%)" :
                                category.color === 'success' ?
                                "brightness(0) saturate(100%) invert(48%) sepia(85%) saturate(2618%) hue-rotate(130deg) brightness(101%) contrast(94%)" :
                                category.color === 'info' ?
                                "brightness(0) saturate(100%) invert(48%) sepia(85%) saturate(2618%) hue-rotate(200deg) brightness(101%) contrast(94%)" :
                                "brightness(0) saturate(100%) invert(48%) sepia(85%) saturate(2618%) hue-rotate(35deg) brightness(101%) contrast(94%)"
                            }}
                          />
                        </div>
                        <div className="vstack gap-1">
                          <h3 className="h5 text-dark dark:text-white m-0">
                            {category.title}
                          </h3>
                          <span className={`fs-8 text-${category.color} fw-medium`}>
                            {category.stats}
                          </span>
                        </div>
                      </div>
                      <p className="text-dark dark:text-white text-opacity-70 m-0">
                        {category.description}
                      </p>
                      <div className="hstack gap-2 text-primary">
                        <span className="fs-7 fw-medium">Explore</span>
                        <i className="unicon-arrow-right fs-8"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="section-outer panel py-6 xl:py-8 bg-gray-25 dark:bg-gray-900">
        <div className="container max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="h4 text-dark dark:text-white mb-3">
              Quick Access
            </h2>
            <p className="text-dark dark:text-white text-opacity-70">
              Direct links to our most popular resources
            </p>
          </div>

          <div className="row gy-3">
            <div className="col-12 md:col-4">
              <Link href="/fonctionnalites" className="btn btn-outline-primary w-100 text-start">
                <div className="hstack gap-3">
                  <i className="unicon-layers"></i>
                  <div>
                    <div className="fw-medium">Platform Features</div>
                    <div className="fs-8 opacity-70">Explore capabilities</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 md:col-4">
              <Link href="/tarifs" className="btn btn-outline-primary w-100 text-start">
                <div className="hstack gap-3">
                  <i className="unicon-credit-card"></i>
                  <div>
                    <div className="fw-medium">Pricing Plans</div>
                    <div className="fs-8 opacity-70">Find your plan</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 md:col-4">
              <Link href="/securite" className="btn btn-outline-primary w-100 text-start">
                <div className="hstack gap-3">
                  <i className="unicon-shield-check"></i>
                  <div>
                    <div className="fw-medium">Security & Compliance</div>
                    <div className="fs-8 opacity-70">Learn about safety</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <CtaFinal />
    </div>
  );
} 