"use client";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function Newsletter() {
  const { t } = useTranslation();
  return (
    <div
      id="blog_newsletter"
      className="blog-newsletter section panel overflow-hidden"
    >
      <div className="section-outer panel pb-4 lg:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel p-3 py-6 lg:p-6 xl:p-8 rounded-2 bg-secondary dark:bg-gray-800 overflow-hidden">
            <div
              className="row child-cols-12 md:child-cols g-6 justify-between items-center"
              data-uc-grid=""
            >
              <div>
                <div className="vstack gap-2 max-w-500px xl:max-w-600px">
                  <h2 className="h4 md:h3 lg:h2 m-0">{t('blog.newsletter.title')}</h2>
                  <p className="fs-6 lg:fs-5">
                    {t('blog.newsletter.subtitle')}
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row child-cols g-1 mt-1 xl:mt-2"
                  >
                    <div>
                      <input
                        className="form-control h-48px xl:h-56px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        type="email"
                        placeholder={t('blog.newsletter.placeholder')}
                        required
                      />
                    </div>
                    <div className="col-12 sm:col-auto">
                      <button className="btn btn-md h-48px xl:h-56px w-100 lg:min-w-150px xl:min-w-200px btn-primary text-white">
                        {t('blog.newsletter.button')}
                      </button>
                    </div>
                  </form>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70">
                    {t('blog.newsletter.privacy')}
                  </p>
                </div>
              </div>
              <div className="md:col-auto d-none md:d-block">
                <Image
                  className="w-250px lg:w-300px xl:w-400px d-block dark:d-none"
                  alt="newsletter"
                  src="/assets/images/template/newsletter.svg"
                  width="500"
                  height="372"
                />
                <Image
                  className="w-250px lg:w-300px xl:w-400px d-none dark:d-block"
                  alt="newsletter-dark"
                  src="/assets/images/template/newsletter-dark.svg"
                  width="500"
                  height="372"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 