"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Terms() {
  const { currentLanguage } = useTranslation();
  const isFr = currentLanguage === "fr";

  const frContent = (
    <>
      <p>
        Le présent texte présente les Conditions Générales d'Utilisation du Service (appelées « CGUS »)
        et précise, d'une part, dans quelles conditions la société INTEGRAL4 délivre les services sur le site{" "}
        <a href="https://www.view4sight.com" className="text-primary">www.view4sight.com</a>{" "}
        (désigné « le SITE ») aux CLIENTS en ayant fait la demande, et d'autre part, comment ces CLIENTS accèdent au site et utilisent lesdits services.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 1 – Définitions</h3>
      <p>Dans le cadre de ce contrat :</p>
      <p>
        <strong>« SITE »</strong> : ensemble des pages, services et outils accessibles à l'adresse{" "}
        <a href="https://www.view4sight.com" className="text-primary">https://www.view4sight.com</a>.
      </p>
      <p>
        <strong>« CLIENT »</strong> : toute personne physique ou morale souscrivant à l'offre View4Sight.
      </p>
      <p>
        <strong>« COMPTE »</strong> : espace numérique propre à chaque CLIENT sur le SITE, accessible grâce à des IDENTIFIANTS.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 2 – Objet du contrat</h3>
      <p>
        Ce contrat concerne l'accès à la plateforme collaborative accessible à l'adresse{" "}
        <a href="https://app.view4sight.com" className="text-primary">https://app.view4sight.com</a>, qui permet notamment
        aux CLIENTS de manipuler, exploiter, afficher et échanger des fichiers 3D.
      </p>
      <p>
        Ce texte expose de manière détaillée obligations et droits respectifs d'INTEGRAL4 et de ses CLIENTS
        concernant l'utilisation du Service.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 3 – Propriété intellectuelle</h3>
      <p>
        L'intégralité du site{" "}
        <a href="https://app.view4sight.com" className="text-primary">https://app.view4sight.com</a>,
        incluant conception, textes, illustrations, médias sonores ou visuels, relève de la propriété exclusive
        de l'éditeur ou de ses partenaires. INTEGRAL4 demeure titulaire à la fois du site et des services développés.
      </p>
      <p>
        Les fichiers transférés sur la plateforme peuvent être soumis à divers droits : droits d'auteur,
        droit à l'image des personnes ou objets figurant sur les images, droits relatifs à la propriété
        industrielle (marques, modèles, brevets…).
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 6 – Abonnement au service</h3>
      <p>
        Pour bénéficier de l'offre View4Sight, un UTILISATEUR doit créer un COMPTE sur le SITE.
        Le CLIENT s'engage à fournir des données exactes et à notifier sans délai INTEGRAL4 de toute modification.
      </p>
      <p>
        L'usage des IDENTIFIANTS relève de la seule responsabilité du CLIENT. Toute opération effectuée
        grâce à ces données est réputée être le fait du titulaire du COMPTE.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 8 – Conditions financières</h3>
      <p>
        Le tarif de chaque SERVICE est affiché (hors taxes) en euros sur le SITE. Le paiement du prix
        s'effectue au moment de la commande par l'intermédiaire de la solution en ligne POLAR, qui accepte
        la plupart des cartes bancaires et sécurise les transactions.
      </p>
      <p>
        Toutes les transactions sont sécurisées (protocole SSL), les conditions générales de POLAR sont
        consultables à l'adresse{" "}
        <a href="https://polar.sh/" className="text-primary">https://polar.sh/</a>.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 11 – Engagements d'INTEGRAL4</h3>
      <p>
        INTEGRAL4 agit dans le cadre d'une obligation de moyens : elle ne garantit ni la continuité,
        ni la disponibilité absolue du service, mais s'efforce de maintenir l'accès au SITE et d'assurer
        la protection des fichiers hébergés.
      </p>
      <p>
        La plateforme est disponible 24h/24, 7j/7, sauf interventions techniques préalablement annoncées
        aux CLIENTS ou survenance de circonstances imprévisibles.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 12 – Limite de responsabilité</h3>
      <p>
        INTEGRAL4 ne saurait être tenue pour responsable d'une inexécution imputable au CLIENT,
        ni de tout incident relevant de la force majeure. Si INTEGRAL4 devait indemniser, cela se limiterait
        aux seuls préjudices matériels directs subis par le CLIENT, dans la limite de 10 % du montant du service concerné.
      </p>
      <p>
        Le CLIENT s'oblige à respecter toutes les lois en vigueur ainsi que l'ordre public,
        à s'abstenir de violer les droits de tiers et à se conformer strictement aux présentes CGU.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Protection des données</h3>
      <p>
        Dans le cadre de l'administration du SITE, INTEGRAL4 collecte certaines données à caractère personnel,
        strictement nécessaires à la fourniture et à la gestion sécurisée des SERVICES.
      </p>
      <p>
        Conformément au RGPD (règlement UE 2016/679) et à la loi du 6 janvier 1978, tout CLIENT peut exercer
        gratuitement son droit d'accès, de rectification, d'opposition, de portabilité et de suppression en
        adressant un email à{" "}
        <a href="mailto:contact@view4sight.com" className="text-primary">contact@view4sight.com</a>.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Contact</h3>
      <p>
        Pour toute demande relative à l'utilisation du SITE, par email :{" "}
        <a href="mailto:contact@view4sight.com" className="text-primary">contact@view4sight.com</a>{" "}
        ou par courrier postal :
        INTEGRAL4, 23 Rue Ruhmkorff 75017 PARIS – France.
      </p>
      <p>
        Les accords encadrant la relation entre l'utilisateur, le CLIENT et INTEGRAL4, ainsi que l'utilisation
        du SITE, relèvent du droit français. En cas de différend, la compétence exclusive sera attribuée au tribunal
        de Paris.
      </p>
    </>
  );

  const enContent = (
    <>
      <p>
        This text sets out the General Terms of Service (the "Terms") and specifies, on the one hand, the conditions
        under which INTEGRAL4 provides the services on the website{" "}
        <a href="https://www.view4sight.com" className="text-primary">www.view4sight.com</a>{" "}
        (referred to as "the SITE") to CLIENTS who have requested them, and, on the other hand, how these CLIENTS access the site and use said services.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 1 – Definitions</h3>
      <p>Within the framework of this agreement:</p>
      <p>
        <strong>"SITE"</strong>: all pages, services and tools accessible at{" "}
        <a href="https://www.view4sight.com" className="text-primary">https://www.view4sight.com</a>.
      </p>
      <p>
        <strong>"CLIENT"</strong>: any natural or legal person subscribing to the View4Sight offer.
      </p>
      <p>
        <strong>"ACCOUNT"</strong>: the digital space specific to each CLIENT on the SITE, accessible using CREDENTIALS.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 2 – Purpose of the agreement</h3>
      <p>
        This agreement concerns access to the collaborative platform accessible at{" "}
        <a href="https://app.view4sight.com" className="text-primary">https://app.view4sight.com</a>, which notably allows
        CLIENTS to manipulate, use, display and exchange 3D files.
      </p>
      <p>
        This text sets out in detail the respective obligations and rights of INTEGRAL4 and its CLIENTS
        regarding the use of the Service.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 3 – Intellectual property</h3>
      <p>
        The entire site{" "}
        <a href="https://app.view4sight.com" className="text-primary">https://app.view4sight.com</a>,
        including design, texts, illustrations, audio or visual media, is the exclusive property
        of the publisher or its partners. INTEGRAL4 remains the owner of both the site and the services developed.
      </p>
      <p>
        Files uploaded to the platform may be subject to various rights: copyright,
        image rights of the persons or objects appearing in the images, rights relating to industrial
        property (trademarks, designs, patents, etc.).
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 6 – Subscription to the service</h3>
      <p>
        To benefit from the View4Sight offer, a USER must create an ACCOUNT on the SITE.
        The CLIENT undertakes to provide accurate data and to notify INTEGRAL4 without delay of any change.
      </p>
      <p>
        The use of CREDENTIALS is the sole responsibility of the CLIENT. Any operation carried out
        using this data is deemed to be the act of the ACCOUNT holder.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 8 – Financial terms</h3>
      <p>
        The price of each SERVICE is displayed (excluding taxes) in euros on the SITE. Payment of the price
        is made at the time of the order through the online solution POLAR, which accepts
        most bank cards and secures transactions.
      </p>
      <p>
        All transactions are secured (SSL protocol); POLAR's general terms can be
        consulted at{" "}
        <a href="https://polar.sh/" className="text-primary">https://polar.sh/</a>.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 11 – INTEGRAL4's commitments</h3>
      <p>
        INTEGRAL4 acts within the framework of a best-efforts obligation: it guarantees neither the continuity,
        nor the absolute availability of the service, but strives to maintain access to the SITE and to ensure
        the protection of the hosted files.
      </p>
      <p>
        The platform is available 24/7, except for technical interventions previously announced
        to CLIENTS or the occurrence of unforeseeable circumstances.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Article 12 – Limitation of liability</h3>
      <p>
        INTEGRAL4 cannot be held liable for non-performance attributable to the CLIENT,
        nor for any incident arising from force majeure. If INTEGRAL4 were required to provide compensation, this would be limited
        solely to the direct material damages suffered by the CLIENT, up to a maximum of 10% of the amount of the service concerned.
      </p>
      <p>
        The CLIENT undertakes to comply with all applicable laws as well as public order,
        to refrain from infringing the rights of third parties and to strictly comply with these Terms.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Data protection</h3>
      <p>
        As part of the administration of the SITE, INTEGRAL4 collects certain personal data,
        strictly necessary for the provision and secure management of the SERVICES.
      </p>
      <p>
        In accordance with the GDPR (EU Regulation 2016/679) and the French law of 6 January 1978, any CLIENT may exercise
        free of charge their right of access, rectification, objection, portability and erasure by
        sending an email to{" "}
        <a href="mailto:contact@view4sight.com" className="text-primary">contact@view4sight.com</a>.
      </p>
      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Contact</h3>
      <p>
        For any request relating to the use of the SITE, by email:{" "}
        <a href="mailto:contact@view4sight.com" className="text-primary">contact@view4sight.com</a>{" "}
        or by post:
        INTEGRAL4, 23 Rue Ruhmkorff 75017 PARIS – France.
      </p>
      <p>
        The agreements governing the relationship between the user, the CLIENT and INTEGRAL4, as well as the use
        of the SITE, are governed by French law. In the event of a dispute, exclusive jurisdiction will be granted to the Paris court.
      </p>
    </>
  );

  return (
    <div className="section py-4 lg:py-6 xl:py-8" style={{ marginTop: "80px" }}>
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">{isFr ? "Conditions Générales d'Utilisation" : "Terms of Service"}</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            {isFr ? frContent : enContent}
          </div>
          <div className="page-footer panel">
            <p className="fs-7 opacity-60 m-0">
              {isFr ? "Dernière mise à jour : 18 juillet 2025" : "Last updated: July 18, 2025"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
