import React from "react";
import Link from "next/link";

export default function BreadCumb({ category }) {
  return (
    <div className="container max-w-xl">
      <nav className="mb-4 pt-6">
        <div className="hstack gap-2 fs-7 text-dark dark:text-white text-opacity-50">
          <Link href="/" className="text-decoration-none hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/ressources" className="text-decoration-none hover:text-primary">
            Resources
          </Link>
          <span>/</span>
          <span className="text-dark dark:text-white text-opacity-70">
            {category ? category : "Blog"}
          </span>
        </div>
      </nav>
    </div>
  );
} 