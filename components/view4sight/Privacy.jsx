import React from "react";

export default function Privacy() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8" style={{ marginTop: "80px" }}>
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Politique de Confidentialité</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
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
          </div>
          <div className="page-footer panel">
            <p className="fs-7 opacity-60 m-0">Dernière mise à jour : 18 juillet 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
} 