import Link from "next/link";

export default function UseCaseNotFound() {
  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg text-center">
          <div className="panel">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-3 d-inline-flex align-items-center justify-content-center mb-4">
              <span className="fs-1">📄</span>
            </div>
            <h1 className="h3 text-dark dark:text-white mb-3">
              Use Case Not Found
            </h1>
            <p className="text-dark dark:text-white text-opacity-70 mb-6">
              The use case you're looking for doesn't exist or has been moved.
            </p>
            <div className="hstack gap-3 justify-content-center">
              <Link href="/ressources" className="btn btn-primary">
                View All Use Cases
              </Link>
              <Link href="/" className="btn btn-outline-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 