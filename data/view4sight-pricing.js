export const view4sightTiers = [
  {
    id: 1,
    plan: "Starter",
    price: "Gratuit",
    yearlyPrice: "Gratuit",
    priceSuffix: "",
    description: "Parfait pour essayer View4Sight",
    features: [
      "15 Go de stockage",
      "2 utilisateurs inclus",
      "3 projets actifs",
      "Partage par lien privé",
      "Support basique"
    ],
    icon: "unicon-sub-volume",
    buttonText: "Commencer gratuitement",
    footerText: "Aucune carte bancaire requise",
    highlight: false,
    polarProductId: null, // Free tier doesn't need Polar payment
  },
  {
    id: 2,
    plan: "Équipe",
    price: "79 €",
    yearlyPrice: "63 €",
    priceSuffix: "/ mois",
    description: "Pour les équipes prêtes à collaborer sur des données 3D",
    features: [
      "150 Go de stockage",
      "5 utilisateurs inclus",
      "30 projets actifs",
      "Partage par lien privé",
      "Annotations avancées",
      "Support prioritaire par email"
    ],
    icon: "unicon-course",
    buttonText: "Commencer",
    footerText: "Paiements sécurisés par Polar",
    highlight: true,
    polarProductIdMonthly: "bb0aa3d0-61f9-426f-9005-277f2ab44700", // View4Sight - Team Monthly Plan
    polarProductIdYearly: "598152cf-98fc-41ef-ad12-e6b2d29c5e69", // View4Sight - Team Annual Plan
  },
  {
    id: 3,
    plan: "Studio",
    price: "199 €",
    yearlyPrice: "159 €",
    priceSuffix: "/ mois",
    description: "Pour les cabinets établis avec des projets complexes",
    features: [
      "500 Go de stockage",
      "15 utilisateurs inclus",
      "100 projets actifs",
      "Partage par lien privé",
      "Visionneuse intégrable",
      "Support prioritaire téléphone & email"
    ],
    icon: "unicon-building",
    buttonText: "Commencer",
    footerText: "Paiements sécurisés par Polar",
    highlight: false,
    polarProductIdMonthly: "a57d2cbc-9967-47e1-ac9c-e900fc02b992", // View4Sight - Studio Monthly Plan
    polarProductIdYearly: "072f5a83-099b-4acb-bfa6-c2e3201e73ff", // View4Sight - Studio Annual Plan
  },
];

export const enterprisePlan = {
  title: "Entreprise",
  description: "Solutions sur mesure pour les grandes organisations",
  features: [
    {
      icon: "unicon-data-sharing",
      title: "Stockage et utilisateurs illimités",
      desc: "Montez en charge sans limites"
    },
    {
      icon: "unicon-servers",
      title: "Sur site / cloud privé",
      desc: "Votre infra, votre contrôle"
    },
    {
      icon: "unicon-shield-check",
      title: "SLA 99,9%",
      desc: "Fiabilité niveau entreprise"
    },
    {
      icon: "unicon-palette",
      title: "Marque blanche complète",
      desc: "Votre marque, votre expérience"
    }
  ],
  buttonText: "Contacter les ventes",
  buttonLink: "/page-contact"
}; 