"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Privacy() {
  const { currentLanguage } = useTranslation();
  const isFr = currentLanguage === "fr";

  const frContent = (
    <>
      <h3 className="h4 md:h3 mt-0 mb-2">Préambule</h3>
      <p>
        La présente Politique de Confidentialité s'applique à l'ensemble des services proposés sur le site{" "}
        <a href="https://www.view4sight.com" className="text-primary">www.view4sight.com</a>{" "}
        et la plateforme associée{" "}
        <a href="https://app.view4sight.com" className="text-primary">app.view4sight.com</a>, édités par la société{" "}
        <strong>INTEGRAL4</strong>, SAS au capital de 10 000 €, immatriculée en France, dont le siège social est situé au{" "}
        <strong>23 Rue Ruhmkorff, 75017 Paris</strong>.
      </p>
      <p>
        INTEGRAL4 attache une grande importance à la protection de la vie privée de ses utilisateurs et s'engage à respecter
        les lois applicables en matière de protection des données personnelles, notamment le{" "}
        <strong>Règlement Général sur la Protection des Données (RGPD)</strong>.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">1. Données collectées</h3>

      <h4 className="h5 mt-3 mb-2">a) Données fournies directement par l'utilisateur :</h4>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• <strong>Création de compte</strong> : nom, prénom, email, mot de passe, langue.</li>
        <li className="mb-2">• <strong>Souscription à un abonnement</strong> : coordonnées de facturation, informations de paiement.</li>
        <li className="mb-2">• <strong>Support et formulaires de contact</strong> : toute information communiquée volontairement.</li>
      </ul>

      <h4 className="h5 mt-3 mb-2">b) Données collectées automatiquement :</h4>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• <strong>Informations techniques</strong> : adresse IP, type de navigateur, système d'exploitation, fuseau horaire.</li>
        <li className="mb-2">• <strong>Données d'utilisation</strong> : pages consultées, fréquence d'utilisation, origine géographique approximative.</li>
        <li className="mb-2">• <strong>Cookies et traceurs</strong> : utilisés à des fins de mesure d'audience, de sécurité et d'amélioration de l'expérience utilisateur.</li>
      </ul>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">2. Finalités de traitement</h3>
      <p>Les données collectées sont utilisées pour :</p>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• Fournir un accès sécurisé à la plateforme View4Sight.</li>
        <li className="mb-2">• Gérer les abonnements, les paiements et les comptes utilisateurs.</li>
        <li className="mb-2">• Offrir un support technique et répondre aux demandes.</li>
        <li className="mb-2">• Analyser l'usage de la plateforme afin d'en améliorer les fonctionnalités.</li>
        <li className="mb-2">• Respecter nos obligations légales et réglementaires.</li>
      </ul>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">3. Destinataires des données</h3>
      <p>Les données personnelles peuvent être partagées avec :</p>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• Les équipes internes d'INTEGRAL4 strictement habilitées.</li>
        <li className="mb-2">• Les prestataires techniques (hébergement, facturation, support), sous contrat et respectueux du RGPD.</li>
        <li className="mb-2">• Les autorités judiciaires ou administratives si la loi l'exige.</li>
      </ul>
      <p>
        Les paiements sont gérés par <strong>POLAR</strong>, dont les conditions de traitement des données sont accessibles ici :{" "}
        <a href="https://polar.sh/" className="text-primary">https://polar.sh/</a>.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">4. Sécurité des données</h3>
      <p>
        INTEGRAL4 met en œuvre des mesures techniques (chiffrement, protocoles SSL, sauvegardes) et organisationnelles
        (accès restreint, contrôle interne) pour garantir la sécurité des données.
      </p>
      <p>
        Cependant, aucun système n'étant infaillible, nous ne pouvons garantir une sécurité absolue.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">5. Vos droits</h3>
      <p>
        Conformément au RGPD et à la loi « Informatique et Libertés », vous disposez des droits suivants :
      </p>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• <strong>Droit d'accès</strong> à vos données.</li>
        <li className="mb-2">• <strong>Droit de rectification</strong> de données inexactes.</li>
        <li className="mb-2">• <strong>Droit à la suppression</strong> (« droit à l'oubli »).</li>
        <li className="mb-2">• <strong>Droit d'opposition</strong> à certains traitements.</li>
        <li className="mb-2">• <strong>Droit à la portabilité</strong> de vos données.</li>
      </ul>
      <p>
        Vous pouvez exercer ces droits à tout moment par email à{" "}
        <strong><a href="mailto:contact@view4sight.com" className="text-primary">contact@view4sight.com</a></strong>.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">6. Durée de conservation</h3>
      <p>
        Les données sont conservées pendant la durée strictement nécessaire à la réalisation des finalités décrites ci-dessus,
        ou pour répondre à nos obligations légales.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">7. Cookies</h3>
      <p>Le site utilise des cookies pour :</p>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• Faciliter la navigation.</li>
        <li className="mb-2">• Mesurer l'audience (via outils comme Google Analytics).</li>
        <li className="mb-2">• Améliorer les performances.</li>
      </ul>
      <p>
        Vous pouvez paramétrer votre navigateur pour les refuser. Plus de détails dans notre Politique relative aux cookies.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">8. Transferts hors UE</h3>
      <p>
        Certaines données peuvent être transférées vers des pays hors de l'Union Européenne (ex : prestataires cloud).
        Dans ce cas, INTEGRAL4 s'assure que des garanties adéquates (clauses contractuelles types ou équivalent) sont en place.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">9. Mise à jour de la politique</h3>
      <p>
        Cette politique pourra être modifiée à tout moment. En cas de mise à jour substantielle, les utilisateurs seront
        notifiés via le site. La dernière version fait foi.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">10. Contact</h3>
      <p>
        Pour toute question relative à cette Politique de Confidentialité ou à vos données personnelles, vous pouvez nous contacter à :
      </p>
      <p>
        <strong>INTEGRAL4</strong><br />
        23 Rue Ruhmkorff, 75017 Paris – France<br />
        📧 <strong><a href="mailto:contact@view4sight.com" className="text-primary">contact@view4sight.com</a></strong>
      </p>
    </>
  );

  const enContent = (
    <>
      <h3 className="h4 md:h3 mt-0 mb-2">Preamble</h3>
      <p>
        This Privacy Policy applies to all services offered on the website{" "}
        <a href="https://www.view4sight.com" className="text-primary">www.view4sight.com</a>{" "}
        and the associated platform{" "}
        <a href="https://app.view4sight.com" className="text-primary">app.view4sight.com</a>, published by{" "}
        <strong>INTEGRAL4</strong>, a simplified joint-stock company (SAS) with a capital of €10,000, registered in France, with its registered office at{" "}
        <strong>23 Rue Ruhmkorff, 75017 Paris</strong>.
      </p>
      <p>
        INTEGRAL4 attaches great importance to protecting the privacy of its users and undertakes to comply with the
        applicable laws on the protection of personal data, in particular the{" "}
        <strong>General Data Protection Regulation (GDPR)</strong>.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">1. Data collected</h3>

      <h4 className="h5 mt-3 mb-2">a) Data provided directly by the user:</h4>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• <strong>Account creation</strong>: last name, first name, email, password, language.</li>
        <li className="mb-2">• <strong>Subscription</strong>: billing details, payment information.</li>
        <li className="mb-2">• <strong>Support and contact forms</strong>: any information provided voluntarily.</li>
      </ul>

      <h4 className="h5 mt-3 mb-2">b) Data collected automatically:</h4>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• <strong>Technical information</strong>: IP address, browser type, operating system, time zone.</li>
        <li className="mb-2">• <strong>Usage data</strong>: pages viewed, frequency of use, approximate geographic origin.</li>
        <li className="mb-2">• <strong>Cookies and trackers</strong>: used for audience measurement, security and improving the user experience.</li>
      </ul>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">2. Purposes of processing</h3>
      <p>The data collected is used to:</p>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• Provide secure access to the View4Sight platform.</li>
        <li className="mb-2">• Manage subscriptions, payments and user accounts.</li>
        <li className="mb-2">• Provide technical support and respond to requests.</li>
        <li className="mb-2">• Analyze platform usage in order to improve its features.</li>
        <li className="mb-2">• Comply with our legal and regulatory obligations.</li>
      </ul>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">3. Data recipients</h3>
      <p>Personal data may be shared with:</p>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• INTEGRAL4's strictly authorized internal teams.</li>
        <li className="mb-2">• Technical service providers (hosting, billing, support), under contract and GDPR-compliant.</li>
        <li className="mb-2">• Judicial or administrative authorities where required by law.</li>
      </ul>
      <p>
        Payments are handled by <strong>POLAR</strong>, whose data processing terms are available here:{" "}
        <a href="https://polar.sh/" className="text-primary">https://polar.sh/</a>.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">4. Data security</h3>
      <p>
        INTEGRAL4 implements technical measures (encryption, SSL protocols, backups) and organizational measures
        (restricted access, internal controls) to ensure data security.
      </p>
      <p>
        However, as no system is infallible, we cannot guarantee absolute security.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">5. Your rights</h3>
      <p>
        In accordance with the GDPR and the French Data Protection Act (« Informatique et Libertés »), you have the following rights:
      </p>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• <strong>Right of access</strong> to your data.</li>
        <li className="mb-2">• <strong>Right to rectification</strong> of inaccurate data.</li>
        <li className="mb-2">• <strong>Right to erasure</strong> (« right to be forgotten »).</li>
        <li className="mb-2">• <strong>Right to object</strong> to certain processing.</li>
        <li className="mb-2">• <strong>Right to data portability</strong>.</li>
      </ul>
      <p>
        You can exercise these rights at any time by email at{" "}
        <strong><a href="mailto:contact@view4sight.com" className="text-primary">contact@view4sight.com</a></strong>.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">6. Data retention</h3>
      <p>
        Data is kept for as long as strictly necessary to achieve the purposes described above,
        or to meet our legal obligations.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">7. Cookies</h3>
      <p>The site uses cookies to:</p>
      <ul className="list-unstyled ms-3">
        <li className="mb-2">• Facilitate navigation.</li>
        <li className="mb-2">• Measure audience (via tools such as Google Analytics).</li>
        <li className="mb-2">• Improve performance.</li>
      </ul>
      <p>
        You can configure your browser to refuse them. More details in our Cookie Policy.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">8. Transfers outside the EU</h3>
      <p>
        Some data may be transferred to countries outside the European Union (e.g. cloud providers).
        In this case, INTEGRAL4 ensures that adequate safeguards (standard contractual clauses or equivalent) are in place.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">9. Policy updates</h3>
      <p>
        This policy may be modified at any time. In the event of a substantial update, users will be
        notified via the site. The latest version prevails.
      </p>

      <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">10. Contact</h3>
      <p>
        For any questions regarding this Privacy Policy or your personal data, you can contact us at:
      </p>
      <p>
        <strong>INTEGRAL4</strong><br />
        23 Rue Ruhmkorff, 75017 Paris – France<br />
        📧 <strong><a href="mailto:contact@view4sight.com" className="text-primary">contact@view4sight.com</a></strong>
      </p>
    </>
  );

  return (
    <div className="section py-4 lg:py-6 xl:py-8" style={{ marginTop: "80px" }}>
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">{isFr ? "Politique de Confidentialité" : "Privacy Policy"}</h1>
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
