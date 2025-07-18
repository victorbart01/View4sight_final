"use client";
import Link from "next/link";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function BlogDetails1({ blogItem }) {
  // Determine if this is the marketing article (IDs: 1, 12, 15, 27, 37, 41, 43, 45, 47)
  const isMarketingArticle = [1, 12, 15, 27, 37, 41, 43, 45, 47].includes(blogItem.id);
  
  return (
    <>
      <div
        style={{ marginTop: "80px" }}
        className="breadcrumbs panel z-1 py-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
      >
        <div className="container max-w-xl">
          <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
            <li>
              <Image
                alt="icon"
                className="me-1"
                src="/assets/images/common/icons/home.svg"
                width="18"
                height="18"
              />
            </li>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/ressources/blog`}>Blog</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/ressources/blog/category/${isMarketingArticle ? 'BIM' : 'Technique'}`}>
                {isMarketingArticle ? 'BIM' : 'Technique'}
              </Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">{blogItem.title}</span>
            </li>
          </ul>
        </div>
      </div>
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                  {isMarketingArticle ? "Digital Twin BIM et gestion du patrimoine : des patrimoines historiques plus intelligents" : blogItem.title}
                </h1>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt={isMarketingArticle ? "Digital Twin BIM et gestion du patrimoine" : "Scan 3D vs Photogrammétrie : quel choix pour votre projet ?"}
                    src={isMarketingArticle ? "/assets/images/blog/notredame-jumeau.jpg" : "/assets/images/blog/LiDAR_vs_Photogrammetry_thumbnail.png"}
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container max-w-lg">
            <Gallery>
              <div
                className="post-content panel fs-6 md:fs-5"
                data-uc-lightbox="animation: scale"
              >
                {isMarketingArticle ? (
                  // Content for Digital Twin BIM article
                  <>
                    <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Introduction</h3>
                    <p>
                      Dans le domaine du patrimoine historique, intégrer la 3D va bien au-delà du simple relevé. Il s'agit de créer un jumeau numérique dynamique qui accompagne le bâtiment à chaque étape : modélisation initiale, support à la restauration, pilotage des interventions, suivi de l'état sanitaire au fil du temps. Cet article explore comment le BIM devient la base d'un digital twin appliqué aux édifices historiques, pour révolutionner leur conservation, leur gestion et même leur valorisation patrimoniale — notamment en y intégrant les capacités de visualisation et partage View4Sight à la clé.
                    </p>
                    
                    <hr className="my-4" />

                    <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">1. Qu'est-ce que le Heritage BIM (HBIM) ?</h4>
                    <p>
                      Le HBIM, ou Heritage Building Information Modeling, est l'adaptation du BIM aux édifices historiques. Il consiste à modéliser leur stratigraphie (époques de construction), leur structure et leurs matériaux via un modèle 3D enrichi de données techniques, historiques et patrimoniales.
                    </p>
                    <p className="mt-3">
                      Cette approche donne lieu à des répliques numériques extrêmement structurées, adaptées à l'étude et la restauration des bâtiments anciens.
                    </p>

                    <hr className="my-4" />

                    <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">2. Du HBIM au digital twin : un jumeau actif</h4>
                    <p>
                      Aller au-delà du BIM statique, c'est passer au digital twin : un modèle vivant, mis à jour en continu grâce à des capteurs (IoT), de la photogrammétrie répétée ou des scans laser périodiques. Il devient possible de relever l'humidité, la température ou les déplacements structurels en temps réel, et d'anticiper les interventions.
                    </p>
                    <p className="mt-3">
                      Par exemple, au château de Löfstad (Suède), un réseau de capteurs connecté à un modèle BIM a permis de détecter des zones à haute hygrométrie et d'optimiser le chauffage pour préserver la structure.
                    </p>

                    <hr className="my-4" />

                    <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">3. Les avantages pour la conservation patrimoniale</h4>
                    <p>
                      Un digital twin offre plusieurs bénéfices concrets :
                    </p>
                    <ul className="mt-3">
                      <li className="mb-2">• Surveillance continue des paramètres critiques (température, humidité, fissurations).</li>
                      <li className="mb-2">• Réduction des interventions imprévues, grâce à une maintenance prédictive.</li>
                      <li className="mb-2">• Documentation précise des évolutions du bâti et de ses actions de restauration.</li>
                      <li className="mb-2">• Accès simplifié pour les acteurs : maîtres d'ouvrage, conservateurs, chercheurs et publics via visualisation Web immersive.</li>
                    </ul>
                    <p className="mt-3">
                      Les modèles 3D interactifs enrichissent ainsi la compréhension du patrimoine, y compris par le grand public.
                    </p>

                    <hr className="my-4" />

                    <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">4. Exemples concrets de digital twins patrimoniaux</h4>
                    <ul className="mt-3">
                      <li className="mb-2">• <strong>Notre-Dame de Paris</strong> : suite à l'incendie, un digital twin constitué de 50 milliards de points laser est utilisé comme référence de restauration.</li>
                      <li className="mb-2">• <strong>Löfstad Castle (Suède)</strong> : suivi climatique avec capteurs et modèle paramétrique, permettant d'optimiser la maintenance.</li>
                      <li className="mb-2">• <strong>Cas d'étude italien</strong> : remontage stratigraphique d'un château avec HBIM, alimenté par photogrammétrie et archives anciennes.</li>
                    </ul>

                    <hr className="my-4" />

                    <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">5. Comment intégrer View4Sight dans ce processus</h4>
                    <p>
                      View4Sight s'intègre naturellement dans la dynamique du heritage digital twin :
                    </p>
                    <ul className="mt-3">
                      <li className="mb-2">• Import de modèles HBIM enrichis (IFC, nuages de points, scans laser).</li>
                      <li className="mb-2">• Visualisation Web 3D avancée, facilitant la consultation par les équipes patrimoniales, les entrepreneurs et les autorités.</li>
                      <li className="mb-2">• Ajout d'annotations, de maquettes temporelles, d'historiques d'interventions en ligne.</li>
                      <li className="mb-2">• Partage sécurisé de ces jumeaux numériques avec les acteurs du projet (restaurateurs, financeurs, chercheurs).</li>
                    </ul>
                    <p className="mt-3">
                      Ainsi, View4Sight devient la plateforme centrale de consultation du digital twin, renforçant la gestion collaborative et la traçabilité des interventions.
                    </p>

                    <hr className="my-5" />

                    <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Conclusion</h4>
                    <p>
                      Le digital twin BIM applicatif au patrimoine historique transforme la gestion des bâtiments anciens : il permet de passer d'un modèle 3D statique à un jumeau actif, continuellement mis à jour. Les bénéfices en conservation, communication, et pilotage sont majeurs — preuves sont faites par des cas comme Notre-Dame ou Löfstad Castle.
                    </p>
                    <p className="mt-3">
                      Avec View4Sight, ces modèles deviennent accessibles, interactifs et partageables en toute simplicité, ce qui enrichit la gestion du patrimoine d'aujourd'hui… et de demain.
                    </p>
                  </>
                ) : (
                  // Content for Scan 3D vs Photogrammétrie article
                  <>
                    <p>
                      Quand il s'agit de numériser un bâtiment, un site ou un ouvrage en 3D, deux techniques dominent aujourd'hui : le scan 3D (ou lasergrammétrie) et la photogrammétrie. Ces deux approches permettent de produire un nuage de points précis et exploitable, mais leurs logiques de fonctionnement, leurs contraintes techniques et leurs cas d'usage sont très différents.
                    </p>
                    <p className="mt-3">
                      Alors, comment choisir la bonne méthode selon votre projet ? À quoi faut-il faire attention en matière de précision, de rendu, de coût ou de conditions de terrain ? Et peut-on les combiner intelligemment ?
                    </p>
                    <p className="mt-3">
                      C'est ce que nous allons voir dans cet article, destiné aux bureaux d'études, géomètres et télépilotes de drones en quête d'une méthode de relevé 3D à la fois efficace, adaptée… et maîtrisée.
                    </p>
                    
                    <hr className="my-4" />

                    <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Le scan 3D : précision et fiabilité avant tout</h4>
                    <p>
                      Le scan 3D, ou scanner laser 3D, repose sur l'utilisation d'un faisceau laser pour mesurer directement la position de millions de points dans l'espace. Il s'agit d'une méthode active : le scanner émet lui-même un signal, capte son retour et génère un nuage de points dense et extrêmement précis.
                    </p>
                    <p className="mt-3">
                      Cette technologie est largement utilisée dans les domaines où la précision métrique est critique : relevés architecturaux, modélisation BIM, contrôle industriel, ou encore conservation du patrimoine. Avec une précision de l'ordre du millimètre à courte portée, le scan 3D permet de capturer fidèlement des formes complexes, y compris dans des conditions de lumière difficiles (intérieur, nuit, forêt, etc.).
                    </p>

                    <div className="panel my-4 p-3 bg-gray-25 dark:bg-gray-800 rounded">
                      <h5 className="h5 mb-3 text-success">Avantages :</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">• Très grande précision géométrique</li>
                        <li className="mb-2">• Indépendant des conditions lumineuses</li>
                        <li className="mb-2">• Capacité à scanner des environnements complexes ou inaccessibles</li>
                      </ul>
                      
                      <h5 className="h5 mb-3 mt-4 text-danger">Inconvénients :</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">• Coût élevé des équipements</li>
                        <li className="mb-2">• Courbe d'apprentissage pour l'opérateur</li>
                        <li className="mb-2">• Rendu couleur parfois absent ou de faible qualité</li>
                      </ul>
                    </div>

                    <hr className="my-4" />

                    <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">La photogrammétrie : flexibilité et rendu réaliste</h4>
                    <p>
                      La photogrammétrie fonctionne selon un principe très différent : on capture une série de photographies d'un objet ou d'un site sous différents angles, puis un logiciel reconstruit une géométrie 3D en comparant les points communs entre les images.
                    </p>
                    <p className="mt-3">
                      Cette méthode est particulièrement appréciée pour sa souplesse d'utilisation : un simple drone ou appareil photo suffit à collecter les données. C'est aussi une solution plus abordable que le scan laser, notamment pour les petites structures ou les télépilotes indépendants. En prime, la photogrammétrie offre un rendu visuel très qualitatif, avec des textures en haute définition.
                    </p>

                    <div className="panel my-4 p-3 bg-gray-25 dark:bg-gray-800 rounded">
                      <h5 className="h5 mb-3 text-success">Avantages :</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">• Équipement léger et accessible</li>
                        <li className="mb-2">• Restitution couleur réaliste</li>
                        <li className="mb-2">• Très adaptée aux grandes surfaces et aux missions par drone</li>
                      </ul>
                      
                      <h5 className="h5 mb-3 mt-4 text-danger">Inconvénients :</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">• Moins précise que le scan 3D</li>
                        <li className="mb-2">• Dépend fortement de la lumière, des ombres et de la météo</li>
                        <li className="mb-2">• Traitement plus long et plus exigeant en post-production</li>
                      </ul>
                    </div>

                    <hr className="my-4" />

                    <h4 className="h4 xl:h3 mt-4 mb-3 xl:mb-4">Comparaison rapide</h4>
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead className="table-dark">
                          <tr>
                            <th scope="col" className="border-0">Critère</th>
                            <th scope="col" className="border-0 text-center">Scan 3D</th>
                            <th scope="col" className="border-0 text-center">Photogrammétrie</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="fw-medium">Précision métrique</td>
                            <td className="text-center">
                              <span className="text-warning">⭐⭐⭐⭐⭐</span>
                            </td>
                            <td className="text-center">
                              <span className="text-warning">⭐⭐⭐☆☆</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-medium">Rendu couleur</td>
                            <td className="text-center">
                              <span className="text-warning">⭐⭐☆☆☆</span>
                            </td>
                            <td className="text-center">
                              <span className="text-warning">⭐⭐⭐⭐⭐</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-medium">Équipement nécessaire</td>
                            <td className="text-center">Scanner laser dédié</td>
                            <td className="text-center">Appareil photo ou drone</td>
                          </tr>
                          <tr>
                            <td className="fw-medium">Facilité de mise en œuvre</td>
                            <td className="text-center">Demande de l'expérience</td>
                            <td className="text-center">Plus accessible</td>
                          </tr>
                          <tr>
                            <td className="fw-medium">Conditions d'éclairage</td>
                            <td className="text-center">Indépendant</td>
                            <td className="text-center">Déterminant</td>
                          </tr>
                          <tr>
                            <td className="fw-medium">Coût matériel</td>
                            <td className="text-center">Élevé</td>
                            <td className="text-center">Faible à modéré</td>
                          </tr>
                          <tr>
                            <td className="fw-medium">Surface couverte</td>
                            <td className="text-center">Moyenne à élevée (multi-stations)</td>
                            <td className="text-center">Très grande (par drone)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {!isMarketingArticle && (
                  <>
                    <hr className="my-4" />

                    <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Et si on combinait les deux ?</h4>
                <p>
                  Dans la pratique, les deux techniques sont loin d'être exclusives. Il est même fréquent — et judicieux — de les combiner.
                </p>
                <p className="mt-3">
                  Par exemple, sur un projet de relevé urbain ou industriel, on pourra :
                </p>
                <ul className="mt-3">
                  <li className="mb-2">Utiliser le scan 3D pour les zones critiques ou complexes (intérieur de bâtiments, installations techniques, détails fins) ;</li>
                  <li className="mb-2">Compléter avec de la photogrammétrie drone pour la couverture du site global (toitures, façades, voirie, etc.).</li>
                </ul>
                <p className="mt-3">
                  Cette approche hybride permet de bénéficier à la fois de la précision du scanner et du rendu visuel de la photogrammétrie, tout en optimisant les temps d'acquisition et les coûts de production.
                </p>

                <hr className="my-5" />

                <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Exploiter vos données avec View4Sight</h4>
                <p>
                  Une fois vos relevés réalisés, encore faut-il pouvoir les consulter, les partager et collaborer facilement autour des nuages de points.
                </p>
                <p className="mt-3">
                  C'est précisément ce que permet <Link href="/tarifs">View4Sight</Link>, notre <Link href="/tarifs">plateforme web</Link> dédiée à la visualisation et au partage de données 3D. Que vos fichiers soient issus du scan laser ou de la photogrammétrie, vous pouvez les :
                </p>
                <ul className="mt-3">
                  <li className="mb-2">Uploader et visualiser dans un simple navigateur, sans installer de logiciel ;</li>
                  <li className="mb-2">Explorer en 3D, mesurer, annoter et comparer des vues ;</li>
                  <li className="mb-2">Partager en un clic via un lien sécurisé, avec vos équipes ou vos clients.</li>
                </ul>
                <p className="mt-3">
                  View4Sight facilite le quotidien des géomètes, bureaux d'étude, maîtres d'ouvrage et prestataires qui veulent tirer pleinement parti de leurs données 3D, sans friction ni technicité inutile.
                </p>
                <div className="mt-4">
                  <Link href="/tarifs" className="btn btn-primary rounded-pill">
                    Découvrez nos offres et commencez gratuitement
                  </Link>
                </div>

                <hr className="my-5" />

                <h4 className="h4 xl:h3 mt-4 mb-3 xl:mb-4">En résumé</h4>
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col" className="border-0">Vous recherchez...</th>
                        <th scope="col" className="border-0">La méthode à privilégier</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Une précision millimétrique</td>
                        <td>Scan 3D</td>
                      </tr>
                      <tr>
                        <td>Un rendu visuel réaliste</td>
                        <td>Photogrammétrie</td>
                      </tr>
                      <tr>
                        <td>Une solution agile et économique</td>
                        <td>Photogrammétrie</td>
                      </tr>
                      <tr>
                        <td>Une capture fiable en conditions complexes</td>
                        <td>Scan 3D</td>
                      </tr>
                      <tr>
                        <td>Un équilibre entre précision et esthétique</td>
                        <td>Combinaison des deux</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 fst-italic">
                  Le bon choix dépend toujours de votre contexte, de vos contraintes terrain et de vos objectifs. Et dans tous les cas, l’essentiel reste de valoriser vos données 3D avec une solution de visualisation simple et professionnelle. C’est exactement la promesse de View4Sight.
                </p>
                  </>
                )}
              </div>
            </Gallery>
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
              <ul className="nav-x gap-narrow text-primary">
                <li>
                  <span className="text-black dark:text-white me-narrow">
                    Tags:
                  </span>
                </li>
                {isMarketingArticle ? (
                  <>
                    <li>
                      <a href="#" className="gap-0">
                        BIM
                        <span className="text-black dark:text-white">,</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="gap-0">
                        Digital Twin
                        <span className="text-black dark:text-white">,</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="gap-0">
                        Patrimoine <span className="text-black dark:text-white">,</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="gap-0">
                        HBIM
                        <span className="text-black dark:text-white">,</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="gap-0">
                        Conservation
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a href="#" className="gap-0">
                        Scan 3D
                        <span className="text-black dark:text-white">,</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="gap-0">
                        Photogrammétrie
                        <span className="text-black dark:text-white">,</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="gap-0">
                        Topographie <span className="text-black dark:text-white">,</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="gap-0">
                        Géomètre
                        <span className="text-black dark:text-white">,</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="gap-0">
                        Techniques 3D
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="post-author panel py-2 px-3 sm:p-3 xl:p-3 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2">
              <div className="row g-3 items-center">
                <div className="col-12 sm:col-4 xl:col-3">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Victor"
                      src="/assets/images/blog/VB-blog-bio.jpeg"
                      width="800"
                      height="800"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-1 md:gap-2">
                    <h4 className="h5 m-0">
                      Victor
                    </h4>
                                          <p className="fs-6 mb-0">
                        Ancien géomètre et pilote de drone, Victor partage son expertise sur les technologies de capture 3D et leurs applications pour les professionnels du terrain.
                      </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9 fdr-min-600">
              {isMarketingArticle ? (
                // Si on est sur l'article BIM, on affiche l'article Scan 3D comme "Next Article"
                <div className="new-post panel hstack w-100 sm:w-1/2">
                  <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
                    <span className="fs-7 opacity-60">Next Article</span>
                    <h6 className="h6 lg:h5 m-0">
                      Scan 3D vs Photogrammétrie : quel choix pour votre projet ?
                    </h6>
                  </div>
                  <div className="panel hstack justify-center w-100px h-100px">
                    <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        alt="Scan 3D vs Photogrammétrie : quel choix pour votre projet ?"
                        src="/assets/images/blog/LiDAR_vs_Photogrammetry_thumbnail.png"
                        width="1280"
                        height="853"
                      />
                      <Link
                        href={`/blog-details/2`}
                        className="position-cover"
                        data-caption="Scan 3D vs Photogrammétrie : quel choix pour votre projet ?"
                      ></Link>
                    </figure>
                  </div>
                  <Link
                    href={`/blog-details/2`}
                    className="position-cover"
                  ></Link>
                </div>
              ) : (
                // Si on est sur l'article Scan 3D, on affiche l'article BIM comme "Prev Article"
                <div className="new-post panel hstack w-100 sm:w-1/2">
                  <div className="panel hstack justify-center w-100px h-100px">
                    <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        alt="Digital Twin BIM et gestion du patrimoine"
                        src="/assets/images/blog/notredame-jumeau.jpg"
                        width="1280"
                        height="853"
                      />
                      <Link
                        href={`/blog-details/1`}
                        className="position-cover"
                        data-caption="Digital Twin BIM et gestion du patrimoine"
                      ></Link>
                    </figure>
                  </div>
                  <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                    <span className="fs-7 opacity-60">Prev Article</span>
                    <h6 className="h6 lg:h5 m-0">
                      Digital Twin BIM et gestion du patrimoine
                    </h6>
                  </div>
                  <Link
                    href={`/blog-details/1`}
                    className="position-cover"
                  ></Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
