"use client";
import Link from "next/link";
import Image from "next/image";

export default function SimpleNotfound() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-5 px-3">
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <div className="text-center">
          {/* Logo View4Sight */}
          <div className="mb-4">
            <Link href="/">
              <Image
                src="/assets/images/logo_v4s.svg"
                alt="View4Sight"
                width={120}
                height={40}
                className="d-inline-block"
              />
            </Link>
          </div>

          {/* 404 Content */}
          <div className="mb-4">
            <div 
              className="h1 mb-3"
              style={{ 
                fontSize: '6rem', 
                fontWeight: 'bold', 
                color: '#FE552E',
                lineHeight: '1'
              }}
            >
              404
            </div>
            <h2 className="h3 mb-3">Page introuvable</h2>
            <p className="fs-6 text-muted mb-4">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.<br />
              Vérifiez l'URL ou retournez à l'accueil.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
            <Link
              href="/"
              className="btn btn-primary px-4 py-2"
              style={{ backgroundColor: '#FE552E', borderColor: '#FE552E' }}
            >
              ← Retour à l'accueil
            </Link>
            <Link
              href="/sign-in"
              className="btn btn-outline-primary px-4 py-2"
            >
              Se connecter
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-top pt-4">
            <p className="small text-muted mb-3">Liens utiles :</p>
            <div className="d-flex flex-wrap gap-3 justify-content-center small">
              <Link href="/fr/fonctionnalites" className="text-decoration-none">
                Fonctionnalités
              </Link>
              <span className="text-muted">•</span>
              <Link href="/fr/tarifs" className="text-decoration-none">
                Tarifs
              </Link>
              <span className="text-muted">•</span>
              <Link href="/fr/securite" className="text-decoration-none">
                Sécurité
              </Link>
              <span className="text-muted">•</span>
              <Link href="/fr/ressources" className="text-decoration-none">
                Ressources
              </Link>
              <span className="text-muted">•</span>
              <Link href="/sign-up" className="text-decoration-none">
                Créer un compte
              </Link>
            </div>
          </div>

          {/* Footer minimal */}
          <div className="mt-5 pt-4 border-top">
            <p className="small text-muted">
              © 2024 View4Sight. Plateforme française de visualisation 3D.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 