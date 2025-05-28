"use client";
import Image from "next/image";
import Link from "next/link";

export default function PainBenefits() {
  return (
    <div className="section panel overflow-hidden bg-light dark:bg-gray-900">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
          >
            {/* En-tête de section */}
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-6 xl:mb-8 max-w-800px mx-auto text-center">
              <h2 className="h2 xl:h1 m-0 text-dark dark:text-white">
                Vos données 3D méritent mieux que des PDF statiques
              </h2>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70 max-w-600px">
                VOUS RECONNAISSEZ-VOUS DANS CES SITUATIONS ?
              </p>
            </div>

            {/* Grille des problèmes */}
            <div className="row g-4 xl:g-6 mb-6 xl:mb-8">
              
              {/* Problème 1 */}
              <div className="col-12 lg:col-4">
                <div className="panel bg-white dark:bg-gray-800 rounded-3 p-4 xl:p-6 h-100 text-center shadow-sm">
                  <div className="vstack gap-3 h-100">
                    <div className="icon-box w-80px h-80px bg-danger bg-opacity-10 rounded-circle mx-auto d-flex align-items-center justify-content-center">
                      <i className="icon icon-3 unicon-desktop text-danger"></i>
                    </div>
                    <h3 className="h5 xl:h4 m-0 text-dark dark:text-white">
                      Logiciels lourds et coûteux
                    </h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 flex-grow-1">
                      Vous jongler entre plusieurs logiciels desktop, gérez des licences coûteuses et perdez du temps en installations complexes pour chaque nouveau projet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problème 2 */}
              <div className="col-12 lg:col-4">
                <div className="panel bg-white dark:bg-gray-800 rounded-3 p-4 xl:p-6 h-100 text-center shadow-sm">
                  <div className="vstack gap-3 h-100">
                    <div className="icon-box w-80px h-80px bg-danger bg-opacity-10 rounded-circle mx-auto d-flex align-items-center justify-content-center">
                      <i className="icon icon-3 unicon-user-exclamation text-danger"></i>
                    </div>
                    <h3 className="h5 xl:h4 m-0 text-dark dark:text-white">
                      Clients frustrés par les livrables
                    </h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 flex-grow-1">
                      Vos clients ne comprennent pas vos relevés 3D à travers des PDF statiques. Ils ont besoin d'installer des logiciels pour voir vos données et perdent la valeur de votre travail.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problème 3 */}
              <div className="col-12 lg:col-4">
                <div className="panel bg-white dark:bg-gray-800 rounded-3 p-4 xl:p-6 h-100 text-center shadow-sm">
                  <div className="vstack gap-3 h-100">
                    <div className="icon-box w-80px h-80px bg-danger bg-opacity-10 rounded-circle mx-auto d-flex align-items-center justify-content-center">
                      <i className="icon icon-3 unicon-clock text-danger"></i>
                    </div>
                    <h3 className="h5 xl:h4 m-0 text-dark dark:text-white">
                      Collaboration impossible
                    </h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 flex-grow-1">
                      Votre équipe perd du temps à échanger des fichiers volumineux par email. Les annotations se perdent, les versions se mélangent et la collaboration devient un cauchemar.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Solutions en grille */}
            <div className="row g-4 xl:g-6">
              
              {/* Solution 1 */}
              <div className="col-12 lg:col-4">
                <div className="panel bg-primary bg-opacity-5 border border-primary border-opacity-20 rounded-3 p-4 xl:p-6 h-100 text-center">
                  <div className="vstack gap-3 h-100">
                    <div className="icon-box w-80px h-80px bg-primary rounded-circle mx-auto d-flex align-items-center justify-content-center">
                      <i className="icon icon-3 unicon-globe text-white"></i>
                    </div>
                    <h3 className="h5 xl:h4 m-0 text-dark dark:text-white">
                      Visualisation web instantanée
                    </h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 flex-grow-1">
                      Uploadez vos nuages de points une fois. Votre équipe et vos clients naviguent en 3D directement dans leur navigateur, sans installation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="col-12 lg:col-4">
                <div className="panel bg-primary bg-opacity-5 border border-primary border-opacity-20 rounded-3 p-4 xl:p-6 h-100 text-center">
                  <div className="vstack gap-3 h-100">
                    <div className="icon-box w-80px h-80px bg-primary rounded-circle mx-auto d-flex align-items-center justify-content-center">
                      <i className="icon icon-3 unicon-users-alt text-white"></i>
                    </div>
                    <h3 className="h5 xl:h4 m-0 text-dark dark:text-white">
                      Collaboration en temps réel
                    </h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 flex-grow-1">
                      Annotations partagées, mesures collaboratives, commentaires en direct. Toute votre équipe travaille sur les mêmes données, en même temps.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="col-12 lg:col-4">
                <div className="panel bg-primary bg-opacity-5 border border-primary border-opacity-20 rounded-3 p-4 xl:p-6 h-100 text-center">
                  <div className="vstack gap-3 h-100">
                    <div className="icon-box w-80px h-80px bg-primary rounded-circle mx-auto d-flex align-items-center justify-content-center">
                      <i className="icon icon-3 unicon-heart text-white"></i>
                    </div>
                    <h3 className="h5 xl:h4 m-0 text-dark dark:text-white">
                      Clients impressionnés
                    </h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 flex-grow-1">
                      Vos clients comprennent enfin la valeur de vos relevés. Ils naviguent en 3D comme sur Google Street View et valident vos projets plus rapidement.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 