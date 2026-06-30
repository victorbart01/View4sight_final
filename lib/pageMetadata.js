// Centralized, localized page metadata (browser title + SEO description).
// Each page exports: export const generateMetadata = pageMetadata("<key>");
// The locale comes from the /[locale] route segment.

const META = {
  home: {
    en: {
      title: "View4Sight - 3D Point Cloud Visualization & Sharing",
      description: "Share your 3D point clouds and BIM files in any browser. French SaaS solution for surveyors and engineering firms.",
    },
    fr: {
      title: "View4Sight - Visualisation et partage de nuages de points 3D",
      description: "Partagez vos nuages de points 3D et fichiers BIM dans n'importe quel navigateur. Solution SaaS française pour géomètres et bureaux d'ingénierie.",
    },
  },
  securite: {
    en: {
      title: "Security - View4Sight",
      description: "Enterprise-grade security with French data hosting. Learn about our security measures and compliance.",
    },
    fr: {
      title: "Sécurité - View4Sight",
      description: "Sécurité de niveau entreprise avec hébergement des données en France. Découvrez nos mesures de sécurité et notre conformité.",
    },
  },
  tarifs: {
    en: {
      title: "Pricing - View4Sight",
      description: "Flexible pricing plans for 3D point cloud visualization. Start with a 30-day free trial.",
    },
    fr: {
      title: "Tarifs - View4Sight",
      description: "Des plans tarifaires flexibles pour la visualisation de nuages de points 3D. Commencez par un essai gratuit de 30 jours.",
    },
  },
  visualize: {
    en: {
      title: "Visualize - View4Sight | Visualize massive 3D projects online, seamlessly",
      description: "Stream multi-gigabyte point clouds directly in your browser. No plugins, no downloads, no performance compromises.",
    },
    fr: {
      title: "Visualiser - View4Sight | Visualisez des projets 3D massifs en ligne, en toute fluidité",
      description: "Streamez des nuages de points de plusieurs gigaoctets directement dans le navigateur. Aucun plugin, aucun téléchargement, sans compromis sur les performances.",
    },
  },
  collaborate: {
    en: {
      title: "Collaborate - View4Sight | Real-time 3D collaboration",
      description: "No more scattered emails, photos and conflicting versions. A single scene and centralized comments to work faster, without confusion.",
    },
    fr: {
      title: "Collaborer - View4Sight | Collaboration 3D en temps réel",
      description: "Fini les emails, les photos et les versions qui se croisent. Une scène unique et des commentaires centralisés pour travailler plus vite, sans confusion.",
    },
  },
  measure: {
    en: {
      title: "Measure - View4Sight | Survey-grade precision in your browser",
      description: "Centimeter-accurate 3D measurement on point clouds, meshes and BIM. Distances, areas, volumes, sections and profiles computed reproducibly for your inspections.",
    },
    fr: {
      title: "Mesurer - View4Sight | Précision topographique dans votre navigateur",
      description: "Mesure 3D au centimètre sur nuages de points, maillages et BIM. Distances, surfaces, volumes, coupes et profils calculés de façon reproductible pour vos contrôles.",
    },
  },
  secure: {
    en: {
      title: "Secure - View4Sight | Secure and sovereign data",
      description: "While others send your data abroad, View4Sight keeps it home. ISO certified, GDPR native, public sector approved.",
    },
    fr: {
      title: "Sécurité - View4Sight | Données sécurisées et souveraines",
      description: "Pendant que d'autres envoient vos données à l'étranger, View4Sight les garde à la maison. Certifié ISO, RGPD natif, approuvé par le secteur public.",
    },
  },
  contact: {
    en: {
      title: "Contact - View4Sight",
      description: "Get in touch with the View4Sight team.",
    },
    fr: {
      title: "Contact - View4Sight",
      description: "Contactez l'équipe View4Sight.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy - View4Sight",
      description: "View4Sight privacy policy and data protection information.",
    },
    fr: {
      title: "Politique de confidentialité - View4Sight",
      description: "Politique de confidentialité de View4Sight et informations sur la protection des données.",
    },
  },
  terms: {
    en: {
      title: "Terms of Service - View4Sight",
      description: "View4Sight terms of service and conditions of use.",
    },
    fr: {
      title: "Conditions d'utilisation - View4Sight",
      description: "Conditions d'utilisation et conditions générales de View4Sight.",
    },
  },
  resources: {
    en: {
      title: "Resources - View4Sight",
      description: "Explore our use cases, tutorials, blog articles, and other resources to get the most out of View4Sight.",
    },
    fr: {
      title: "Ressources - View4Sight",
      description: "Explorez nos cas d'usage, tutoriels, articles de blog et autres ressources pour tirer le meilleur de View4Sight.",
    },
  },
  docs: {
    en: {
      title: "Documentation - View4Sight",
      description: "Technical documentation and API reference for the View4Sight platform.",
    },
    fr: {
      title: "Documentation - View4Sight",
      description: "Documentation technique et référence API de la plateforme View4Sight.",
    },
  },
  blog: {
    en: {
      title: "Blog - View4Sight | Insights on 3D Data Visualization",
      description: "Latest articles, insights and best practices for 3D point cloud visualization, geospatial data management, and surveying workflows.",
    },
    fr: {
      title: "Blog - View4Sight | Analyses sur la visualisation de données 3D",
      description: "Derniers articles, analyses et bonnes pratiques pour la visualisation de nuages de points 3D, la gestion de données géospatiales et les workflows de relevé.",
    },
  },
  blogAuthor: {
    en: {
      title: "Blog Author - View4Sight",
      description: "Browse articles by author on the View4Sight blog.",
    },
    fr: {
      title: "Auteur du blog - View4Sight",
      description: "Parcourez les articles par auteur sur le blog View4Sight.",
    },
  },
  blogArticle: {
    en: {
      title: "Blog Article - View4Sight",
      description: "Read the latest insights on 3D visualization and surveying workflows.",
    },
    fr: {
      title: "Article de blog - View4Sight",
      description: "Lisez les dernières analyses sur la visualisation 3D et les workflows de relevé.",
    },
  },
  useCases: {
    en: {
      title: "Use Cases - View4Sight",
      description: "Discover how professionals across industries use View4Sight to transform their 3D workflows.",
    },
    fr: {
      title: "Cas d'usage - View4Sight",
      description: "Découvrez comment les professionnels de différents secteurs utilisent View4Sight pour transformer leurs workflows 3D.",
    },
  },
  support: {
    en: {
      title: "Support - View4Sight",
      description: "Get help and support for View4Sight. Find answers to your questions and contact our support team.",
    },
    fr: {
      title: "Support - View4Sight",
      description: "Obtenez de l'aide et du support pour View4Sight. Trouvez des réponses à vos questions et contactez notre équipe support.",
    },
  },
  careers: {
    en: {
      title: "Careers - View4Sight | Join Our Team",
      description: "Join View4Sight and help revolutionize 3D data visualization for the surveying industry. Explore career opportunities in our innovative team.",
    },
    fr: {
      title: "Carrières - View4Sight | Rejoignez notre équipe",
      description: "Rejoignez View4Sight et aidez à révolutionner la visualisation de données 3D pour l'industrie de l'arpentage. Explorez les opportunités de carrière dans notre équipe innovante.",
    },
  },
};

export function pageMetadata(key) {
  return async function generateMetadata({ params }) {
    const resolved = params && typeof params.then === "function" ? await params : params;
    const locale = resolved?.locale === "fr" ? "fr" : "en";
    const entry = META[key];
    if (!entry) return {};
    return entry[locale] || entry.en;
  };
}
