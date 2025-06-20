"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const [checkoutData, setCheckoutData] = useState({
    checkoutId: searchParams.get("checkout_id"),
    plan: searchParams.get("plan"),
    billing: searchParams.get("billing"),
  });

  return (
    <div className="section py-8 lg:py-10 xl:py-12">
      <div className="container max-w-lg">
        <div className="panel vstack items-center gap-4 lg:gap-6 text-center">
          {/* Success Icon */}
          <div className="icon-box cstack w-80px h-80px rounded-circle bg-success text-white">
            <i className="icon-2 unicon-checkmark fw-bold" />
          </div>

          {/* Header */}
          <div className="vstack gap-2">
            <h1 className="h3 lg:h2 m-0 text-dark dark:text-white">
              Payment Successful!
            </h1>
            <p className="fs-6 text-dark dark:text-white text-opacity-70 max-w-md mx-auto">
              Thank you for subscribing to View4Sight. Your account has been set up and you can start using our platform right away.
            </p>
          </div>

          {/* Plan Details */}
          {checkoutData.plan && (
            <div className="panel bg-primary bg-opacity-5 border border-primary border-opacity-15 rounded-2 p-4">
              <div className="vstack gap-2 text-center">
                <h4 className="h5 m-0 text-primary">
                  {checkoutData.plan} Plan - {checkoutData.billing === "yearly" ? "Yearly" : "Monthly"}
                </h4>
                <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                  You will receive a confirmation email shortly with your account details.
                </p>
              </div>
            </div>
          )}

          {/* Checkout ID */}
          {checkoutData.checkoutId && (
            <div className="panel bg-gray-50 dark:bg-gray-800 rounded p-3">
              <p className="fs-8 text-dark dark:text-white text-opacity-60 m-0">
                Order ID: <span className="fw-medium">{checkoutData.checkoutId}</span>
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="hstack gap-3 justify-center">
            <Link href="/view4sight" className="btn btn-md btn-primary">
              Access Platform
            </Link>
            <Link href="/page-contact" className="btn btn-md btn-outline-primary">
              Contact Support
            </Link>
          </div>

          {/* Additional Information */}
          <div className="panel bg-gray-25 dark:bg-gray-800 rounded-2 p-4 mt-4">
            <h5 className="h6 text-dark dark:text-white mb-3">What's Next?</h5>
            <ul className="nav-y gap-2 text-start">
              <li className="hstack gap-2">
                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fs-8 fw-bold flex-shrink-0" />
                <span className="fs-7 text-dark dark:text-white text-opacity-80">
                  Check your email for account setup instructions
                </span>
              </li>
              <li className="hstack gap-2">
                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fs-8 fw-bold flex-shrink-0" />
                <span className="fs-7 text-dark dark:text-white text-opacity-80">
                  Start uploading your first 3D point cloud files
                </span>
              </li>
              <li className="hstack gap-2">
                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fs-8 fw-bold flex-shrink-0" />
                <span className="fs-7 text-dark dark:text-white text-opacity-80">
                  Invite your team members to collaborate
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="section py-8 lg:py-10 xl:py-12">
        <div className="container max-w-lg">
          <div className="panel vstack items-center gap-4 lg:gap-6 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Loading confirmation details...</p>
          </div>
        </div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
} 