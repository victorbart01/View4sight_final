import Link from "next/link";
import Image from "next/image";
import CtaFinal from "@/components/view4sight/CtaFinal";

export const metadata = {
  title: "Resources - View4Sight",
  description: "Explore our use cases, tutorials, blog articles, and other resources to get the most out of View4Sight.",
};

const resourceCategories = [
  {
    title: "Support",
    description: "Get help and support for View4Sight. Find answers to your questions and contact our support team.",
    icon: "/assets/images/common/icons/support.svg",
    href: "/ressources/support",
    color: "primary",
    stats: "24/7 Support"
  },
  {
    title: "Use Cases",
    description: "Discover how professionals across different industries use View4Sight to transform their workflows.",
    icon: "/assets/images/common/icons/target.svg",
    href: "/ressources/use-cases",
    color: "success",
    stats: "4 Industry Stories"
  },
  {
    title: "Blog",
    description: "Stay updated with the latest insights on 3D visualization, surveying best practices, and platform updates.",
    icon: "/assets/images/common/icons/blog.svg", 
    href: "/ressources/blog",
    color: "info",
    stats: "Latest Articles"
  }
];

export default function ResourcesPage({ params }) {
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

      {/* CTA Final */}
      <CtaFinal />
    </div>
  );
} 