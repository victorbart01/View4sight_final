"use client";
import Accordion from "@/components/common/Accordion";
import React from "react";

const getHelpFaqs = (locale) => {
  if (locale === 'fr') {
    return [
      {
        question: "Comment importer mon premier jeu de données 3D ?",
        answer: "Allez simplement sur votre tableau de bord, cliquez sur 'Nouveau Projet', glissez-déposez vos fichiers (LAS, E57, IFC, etc.), et notre plateforme les traitera automatiquement. L'import supporte des fichiers jusqu'à 20 Go selon votre plan."
      },
      {
        question: "Quels formats de fichiers sont supportés ?",
        answer: "View4Sight supporte tous les formats 3D majeurs incluant LAS, E57, IFC, DXF, PLY et l'imagerie ORTHO. Nous supportons également divers formats de relevé et nuages de points des fabricants de matériel leaders."
      },
      {
        question: "Comment partager mes données 3D avec mes clients ?",
        answer: "Vous pouvez générer des liens partageables sécurisés avec des permissions personnalisées. Allez dans votre projet, cliquez sur 'Partager', définissez les permissions de visualisation et envoyez le lien. Les destinataires n'ont pas besoin de compte pour voir vos données."
      },
      {
        question: "Puis-je mesurer des distances et volumes dans la visionneuse ?",
        answer: "Oui ! Utilisez nos outils de mesure intégrés pour calculer distances, surfaces, volumes et créer des coupes transversales. Toutes les mesures sont précises et peuvent être exportées pour documentation."
      },
      {
        question: "Comment puis-je changer d'abonnement ?",
        answer: "Allez dans Paramètres > Facturation dans votre tableau de bord. Vous pouvez changer de plan à tout moment. Les mises à niveau prennent effet immédiatement, les rétrogradations au prochain cycle de facturation. Aucune donnée n'est perdue lors des changements de plan."
      },
      {
        question: "Mes données sont-elles sécurisées et où sont-elles stockées ?",
        answer: "Toutes les données sont chiffrées en transit et au repos. Nous utilisons des centres de données français et sommes entièrement conformes RGPD. Vous gardez la propriété complète de vos données et pouvez les supprimer à tout moment."
      },
      {
        question: "Puis-je intégrer View4Sight avec mes outils existants ?",
        answer: "Oui ! Nous fournissons une API REST complète et des webhooks pour des intégrations personnalisées. Les intégrations populaires incluent les logiciels CAO, équipements de relevé et outils de gestion de projet."
      }
    ];
  }
  
  return [
    {
      question: "How do I upload my first 3D dataset?",
      answer: "Simply go to your dashboard, click 'New Project', drag and drop your files (LAS, E57, IFC, etc.), and our platform will automatically process them. The upload supports files up to 20GB depending on your plan."
    },
    {
      question: "What file formats are supported?",
      answer: "View4Sight supports all major 3D formats including LAS, E57, IFC, DXF, PLY, and ORTHO imagery. We also support various survey and point cloud formats from leading hardware manufacturers."
    },
    {
      question: "How do I share my 3D data with clients?",
      answer: "You can generate secure shareable links with custom permissions. Go to your project, click 'Share', set viewing permissions, and send the link. Recipients don't need an account to view your data."
    },
    {
      question: "Can I measure distances and volumes in the viewer?",
      answer: "Yes! Use our built-in measurement tools to calculate distances, areas, volumes, and create cross-sections. All measurements are precise and can be exported for documentation."
    },
    {
      question: "How do I upgrade or downgrade my plan?",
      answer: "Go to Settings > Billing in your dashboard. You can change plans anytime. Upgrades take effect immediately, downgrades at the next billing cycle. No data is lost during plan changes."
    },
    {
      question: "Is my data secure and where is it stored?",
      answer: "All data is encrypted in transit and at rest. We use French data centers and are fully GDPR compliant. You maintain full ownership of your data and can delete it anytime."
    },
    {
      question: "Can I integrate View4Sight with my existing tools?",
      answer: "Yes! We provide a comprehensive REST API and webhooks for custom integrations. Popular integrations include CAD software, survey equipment, and project management tools."
    },
    {
      question: "What if I need help during my free trial?",
      answer: "Our support team is available throughout your trial. Use the chat feature, email support, or schedule a demo call. We're committed to helping you succeed with View4Sight."
    }
  ];
};

export default function HelpCenterFaq({ locale = 'en' }) {
  const helpFaqs = getHelpFaqs(locale);
  
  return (
    <div id="faq" className="section panel overflow-hidden">
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container max-w-md">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div
              className="panel vstack gap-4 md:gap-6 lg:gap-8"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
                {locale === 'fr' ? 'Questions Fréquemment Posées' : 'Frequently Asked Questions'}
              </h2>
              <div className="panel">
                <ul
                  className="gap-1 uc-accordion"
                  data-uc-accordion="targets: > li;"
                >
                  <Accordion 
                    faqData={helpFaqs}
                    parentClass="panel p-3 lg:p-4 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800" 
                  />
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 