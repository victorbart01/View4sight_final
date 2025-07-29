"use client";
import Link from "next/link";

export default function Notfound() {
  return (
    <div className="section py-6 sm:py-9">
      <div className="container max-w-xl">
        <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
          <h2 className="display-5 sm:display-2 fw-normal text-gray-200">
            404
          </h2>
          <h1 className="h3 sm:h1 m-0">Page non trouvée</h1>
          <p className="fs-6">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            href={`/`}
            className="btn btn-sm sm:btn-md btn-primary text-white my-2 sm:my-0"
          >
            Retour à l'accueil
          </Link>
          <p>
            Besoin d'aide ? Contactez notre{" "}
            <a href="/ressources/support" className="text-primary">
              support client
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 