"use client";
import { openSearchModal } from "@/utlis/toggleSearchModal";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Notfound() {
  const { t, tHtml, isLoading } = useTranslation();

  if (isLoading) {
    return (
      <div className="section py-6 sm:py-9">
        <div className="container max-w-xl">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section py-6 sm:py-9">
      <div className="container max-w-xl">
        <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
          <h2 className="display-5 sm:display-2 fw-normal text-gray-200">
            404
          </h2>
          <h1 className="h3 sm:h1 m-0">{t('not_found.title')}</h1>
          <p 
            className="fs-6"
            dangerouslySetInnerHTML={tHtml('not_found.description')}
          />
          <Link
            href={`/`}
            className="btn btn-sm sm:btn-md btn-primary text-white my-2 sm:my-0"
          >
            {t('not_found.go_home')}
          </Link>
          <p>
            {t('not_found.search_text')}{' '}
            <a className="uc-link" onClick={openSearchModal} data-uc-toggle>
              {t('not_found.search_link')}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 