import React from "react";
import { notFound } from "next/navigation";
import UseCaseDetail from "@/components/view4sight/UseCaseDetail";

const useCases = {
  "architecture-bim": {
    id: "architecture-bim",
    category: "Architecture & BIM",
    title: "Streamlined BIM Workflows",
    subtitle: "How Atelier Architectures reduced client validation time by 40% with View4Sight",
    hero: {
      description: "Discover how this leading architecture firm transformed their client review process with 3D visualization, eliminating lengthy approval cycles and enhancing collaboration.",
      image: "/assets/images/template/charts-laptop-dark.svg",
      stats: [
        { label: "Time Reduction", value: "40%", description: "Faster design validation cycles" },
        { label: "Client Satisfaction", value: "95%", description: "Improved project approval rate" },
        { label: "Projects Delivered", value: "150+", description: "Successfully completed projects" }
      ]
    },
    challenge: {
      title: "The Challenge",
      description: "Traditional 2D plans and static renderings were causing delays in client approval processes. Multiple revision cycles and miscommunications were extending project timelines significantly.",
      points: [
        "Clients struggled to visualize complex architectural designs from 2D plans",
        "Multiple revision rounds due to misunderstanding of spatial relationships",
        "Time-consuming file sharing and version control issues",
        "Limited collaboration during remote review sessions"
      ]
    },
    solution: {
      title: "The View4Sight Solution", 
      description: "Implementation of web-based 3D visualization for instant client reviews and collaborative design validation.",
      features: [
        {
          title: "Instant 3D Model Sharing",
          description: "Upload BIM models directly to the cloud and share via secure links"
        },
        {
          title: "Real-time Collaboration",
          description: "Multiple stakeholders can review and comment simultaneously"
        },
        {
          title: "Mobile-Friendly Access",
          description: "Clients can review designs on any device, anywhere"
        }
      ]
    },
    results: {
      title: "Measurable Results",
      metrics: [
        { value: "-40%", label: "Design validation time", description: "From 2 weeks to 8 days average" },
        { value: "+95%", label: "First-round approval rate", description: "Reduced revision cycles significantly" },
        { value: "150+", label: "Projects completed", description: "Using View4Sight workflow" },
        { value: "€50K+", label: "Annual savings", description: "Reduced overhead and faster delivery" }
      ]
    },
    testimonial: {
      quote: "View4Sight has revolutionized how we present our designs to clients. What used to take weeks of back-and-forth now happens in a single collaborative session.",
      author: "Marie Dubois",
      role: "Lead Architect",
      company: "Atelier Architectures",
      image: "/assets/images/avatars/02.jpg"
    }
  },
  "construction-monitoring": {
    id: "construction-monitoring",
    category: "Construction & Monitoring", 
    title: "Real-Time Site Progress",
    subtitle: "How Construction Plus tracks project progress with 98% accuracy using 3D site surveys",
    hero: {
      description: "Learn how this construction company implemented drone-based 3D scanning for real-time progress monitoring and quality control.",
      image: "/assets/images/template/charts-laptop-dark.svg",
      stats: [
        { label: "Cost Savings", value: "25%", description: "Reduced rework and delays" },
        { label: "Accuracy Improvement", value: "98%", description: "Precise progress tracking" },
        { label: "Sites Monitored", value: "50+", description: "Active construction projects" }
      ]
    },
    challenge: {
      title: "The Challenge",
      description: "Manual site inspections were time-consuming and prone to human error, leading to costly delays and quality issues.",
      points: [
        "Weekly site visits required multiple team members",
        "Progress reports were subjective and often inaccurate",
        "Quality control issues discovered too late in the process",
        "Stakeholder communication gaps regarding project status"
      ]
    },
    solution: {
      title: "The View4Sight Solution",
      description: "Implementation of drone-based 3D scanning integrated with View4Sight for automated progress tracking.",
      features: [
        {
          title: "Automated 3D Surveys",
          description: "Weekly drone flights create accurate 3D models of construction progress"
        },
        {
          title: "Progress Comparison",
          description: "Overlay current progress against BIM models and schedules"
        },
        {
          title: "Quality Control Alerts",
          description: "Automated detection of deviations from planned construction"
        }
      ]
    },
    results: {
      title: "Measurable Results", 
      metrics: [
        { value: "-25%", label: "Project costs", description: "Reduced rework and delays" },
        { value: "98%", label: "Tracking accuracy", description: "Precise progress measurement" },
        { value: "50+", label: "Sites monitored", description: "Active construction projects" },
        { value: "3x", label: "Faster reporting", description: "Automated progress updates" }
      ]
    },
    testimonial: {
      quote: "The accuracy and speed of progress tracking with View4Sight has transformed our construction management. We catch issues early and keep projects on schedule.",
      author: "Pierre Martin",
      role: "Construction Manager", 
      company: "Construction Plus",
      image: "/assets/images/avatars/03.jpg"
    }
  },
  // ------------------------------------------------------------------
  // FICTIONAL PLACEHOLDER case study (Victor asked for a credible showcase).
  // TODO before go-live: real, consenting client (or remove). The Ville de Paris
  // logo + quote are placeholder attributions and imply an endorsement that does not exist.
  // ------------------------------------------------------------------
  "urban-planning": {
    id: "urban-planning",
    category: { fr: "Urbanisme", en: "Urban planning" },
    client: { name: "Ville de Paris", logo: "/assets/images/clients/ville-de-paris.png" },
    tags: {
      fr: ["Urbanisme", "Secteur public", "Île-de-France"],
      en: ["Urban planning", "Public sector", "Île-de-France"],
    },
    title: {
      fr: "Paris fait entrer ses habitants dans ses projets d'aménagement, en 3D.",
      en: "Paris brings its residents inside its development projects, in 3D.",
    },
    subtitle: {
      fr: "Comment la Direction de l'Urbanisme s'appuie sur des relevés LiDAR de plusieurs milliards de points pour mener des concertations plus claires, ouvertes à tous depuis un simple navigateur.",
      en: "How the Urban Planning Department turns multi-billion-point LiDAR surveys into clear public consultations, open to everyone from a browser.",
    },
    hero: {
      url: "app.view4sight.com/paris",
      media: { type: "image", src: "/assets/images/mockup-view4sight.png" },
      description: {
        fr: "Chaque grand projet parisien commence par un relevé 3D massif. Encore faut-il que les habitants puissent le comprendre. Avec View4Sight, la Ville a fait de ses nuages de points un <b>outil de dialogue</b>, plutôt qu'un fichier réservé aux experts.",
        en: "Every major Paris project starts with a massive 3D survey. The real challenge is making residents understand it. With View4Sight, the city turned its point clouds into a <b>tool for dialogue</b>, not an expert-only file.",
      },
    },
    facts: [
      { label: { fr: "Secteur", en: "Sector" }, value: { fr: "Collectivité territoriale", en: "Local government" } },
      { label: { fr: "Région", en: "Region" }, value: "Île-de-France" },
      { label: { fr: "Périmètre", en: "Scope" }, value: { fr: "Grands projets d'aménagement", en: "Major development projects" } },
      { label: { fr: "Produits", en: "Products" }, value: { fr: "Visualisation · Collaboration · Hébergement souverain", en: "Visualization · Collaboration · Sovereign hosting" } },
    ],
    challenge: {
      title: { fr: "Le défi", en: "The challenge" },
      headline: { fr: "Des projets complexes, des plans que personne ne lit", en: "Complex projects, plans nobody reads" },
      description: {
        fr: "Les grands projets d'aménagement génèrent des relevés 3D colossaux : nuages de points LiDAR, maquettes BIM, orthophotos. Mais pour les présenter au public, les équipes en étaient réduites à des plans 2D et des images figées. En réunion, peu d'habitants parviennent vraiment à se projeter : la concertation s'étire et les malentendus s'accumulent.",
        en: "Major development projects generate colossal 3D surveys: LiDAR point clouds, BIM models, orthophotos. But to present them to the public, teams were stuck with 2D plans and static renders. In meetings, few residents could truly picture the project: consultations dragged on and misunderstandings piled up.",
      },
      points: {
        fr: [
          "Des nuages de points de plusieurs dizaines de Go, impossibles à partager simplement",
          "Des habitants qui peinent à se projeter à partir de plans 2D",
          "Des logiciels métier bien trop lourds pour le grand public",
          "Des données publiques sensibles qui doivent rester en France",
        ],
        en: [
          "Point clouds of tens of gigabytes, impossible to share easily",
          "Residents struggling to picture projects from 2D plans",
          "Professional software far too heavy for the general public",
          "Sensitive public data that must stay in France",
        ],
      },
    },
    solution: {
      title: { fr: "La solution", en: "The solution" },
      headline: { fr: "Un lien. Le projet entier, dans le navigateur.", en: "One link. The whole project, in the browser." },
      url: "app.view4sight.com/paris",
      media: { type: "video", src: "/assets/videos/V4S-WalkThrough.mp4" },
      description: {
        fr: "Les équipes de la Ville versent leurs relevés LiDAR et leurs maquettes dans View4Sight, sans rien sous-échantillonner. Un simple lien suffit : chaque habitant explore le quartier en 3D, depuis son téléphone, sans rien à installer. Les agents annotent, mesurent et comparent les scénarios d'aménagement côte à côte. Et tout reste hébergé en France.",
        en: "The city's teams upload their LiDAR surveys and models into View4Sight, with no downsampling. A single link is enough: any resident explores the neighborhood in 3D, from their phone, with nothing to install. Staff annotate, measure and compare development scenarios side by side. And everything stays hosted in France.",
      },
      features: [
        {
          title: { fr: "Nuages de points massifs, sans compromis", en: "Massive point clouds, no compromise" },
          description: { fr: "Des milliards de points chargés tels quels, fluides même sur un ordinateur modeste.", en: "Billions of points loaded as-is, smooth even on a modest laptop." },
        },
        {
          title: { fr: "Partage par simple lien", en: "Share with a single link" },
          description: { fr: "Les habitants explorent le projet en 3D dans leur navigateur, sans compte ni installation.", en: "Residents explore the project in 3D in their browser, no account, no install." },
        },
        {
          title: { fr: "Souveraineté des données", en: "Data sovereignty" },
          description: { fr: "Hébergement en France, conformité RGPD, contrôle total des accès par la collectivité.", en: "French hosting, GDPR compliance, full access control by the city." },
        },
      ],
    },
    results: {
      title: { fr: "Les résultats", en: "The results" },
      headline: { fr: "Une concertation que les Parisiens s'approprient", en: "Consultations Parisians make their own" },
      url: "app.view4sight.com/paris",
      media: { type: "video", src: "/assets/videos/V4S-Comment.mp4" },
      body: {
        fr: "En rendant les projets tangibles, la Ville a vu la participation grimper, les échanges gagner en précision et les délais d'instruction se réduire. Les habitants ne subissent plus les projets : ils les explorent, les commentent et contribuent à les façonner.",
        en: "By making projects tangible, the city saw participation climb, discussions sharpen and approval timelines tighten. Residents no longer merely endure projects: they explore them, comment on them, and help shape them.",
      },
      metrics: [
        { value: "+80%", label: { fr: "de participation aux concertations", en: "more consultation turnout" }, description: { fr: "par rapport aux réunions classiques", en: "vs. traditional public meetings" } },
        { value: "4 j", label: { fr: "pour mettre un relevé en ligne", en: "to publish a shareable survey" }, description: { fr: "au lieu de 3 semaines", en: "down from 3 weeks" } },
        { value: "8 Md", label: { fr: "de points explorés dans le navigateur", en: "points explored in-browser" }, description: { fr: "sans installation ni sous-échantillonnage", en: "no install, no downsampling" } },
        { value: "100%", label: { fr: "hébergé en France", en: "hosted in France" }, description: { fr: "conforme RGPD, sous le contrôle de la Ville", en: "GDPR-compliant, under the city's control" } },
      ],
    },
    testimonial: {
      quote: {
        fr: "Pour la première fois, les habitants entrent dans le projet avant même qu'il ne sorte de terre. La 3D a changé la nature même de la concertation : on ne présente plus un projet, on le partage.",
        en: "For the first time, residents step inside the project before it even breaks ground. 3D changed the very nature of consultation: we no longer present a project, we share it.",
      },
      author: "Camille Fontaine",
      role: { fr: "Cheffe de projet, Direction de l'Urbanisme", en: "Project lead, Urban Planning Department" },
      company: "Ville de Paris",
      image: "/assets/images/testimonials/sophie_laurent.jpg",
    },
  },
  "infrastructure-inspection": {
    id: "infrastructure-inspection",
    category: "Infrastructure",
    title: "Asset Management Excellence", 
    subtitle: "How Infrastructure Corp reduced maintenance costs by 30% with predictive 3D inspections",
    hero: {
      description: "See how this infrastructure management company leverages 3D scanning for predictive maintenance and asset lifecycle management.",
      image: "/assets/images/template/charts-laptop-dark.svg",
      stats: [
        { label: "Maintenance Costs", value: "-30%", description: "Reduced reactive maintenance" },
        { label: "Inspection Speed", value: "3x faster", description: "Automated inspection processes" },
        { label: "Assets Managed", value: "200+", description: "Critical infrastructure assets" }
      ]
    },
    challenge: {
      title: "The Challenge",
      description: "Manual infrastructure inspections were expensive, time-consuming, and often missed critical maintenance issues.",
      points: [
        "Manual inspections required specialized equipment and safety measures",
        "Reactive maintenance approach led to unexpected failures",
        "Difficulty accessing hard-to-reach infrastructure components",
        "Inconsistent inspection quality and documentation"
      ]
    },
    solution: {
      title: "The View4Sight Solution",
      description: "Comprehensive 3D scanning and AI-powered analysis for predictive infrastructure maintenance.",
      features: [
        {
          title: "3D Asset Documentation",
          description: "Complete digital twins of infrastructure assets for detailed analysis"
        },
        {
          title: "Predictive Analytics",
          description: "AI-powered detection of potential maintenance issues"
        },
        {
          title: "Remote Inspections",
          description: "Detailed asset review without physical site visits"
        }
      ]
    },
    results: {
      title: "Measurable Results",
      metrics: [
        { value: "-30%", label: "Maintenance costs", description: "Shift to predictive maintenance" },
        { value: "3x", label: "Inspection speed", description: "Faster asset evaluation" },
        { value: "200+", label: "Assets managed", description: "Critical infrastructure components" },
        { value: "95%", label: "Issue detection", description: "Early problem identification" }
      ]
    },
    testimonial: {
      quote: "The predictive capabilities of View4Sight have completely changed our maintenance strategy. We prevent issues before they become costly problems.",
      author: "Jean-Claude Moreau",
      role: "Infrastructure Manager",
      company: "Infrastructure Corp",
      image: "/assets/images/avatars/01.jpg"
    }
  }
};

const pick = (v, locale) =>
  v && typeof v === "object" && !Array.isArray(v) && ("fr" in v || "en" in v)
    ? v[locale] ?? v.fr
    : v;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale === "en" ? "en" : "fr";
  const useCase = useCases[resolvedParams.id];

  if (!useCase) {
    return { title: "Use Case Not Found - View4Sight" };
  }

  const cat = pick(useCase.category, locale);
  const title = pick(useCase.title, locale);
  return {
    title: `${cat} · ${useCase.client?.name || title} | View4Sight`,
    description: pick(useCase.subtitle, locale),
  };
}

export default async function UseCasePage({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale === "en" ? "en" : "fr";
  const useCase = useCases[resolvedParams.id];

  if (!useCase) {
    notFound();
  }

  return <UseCaseDetail useCase={useCase} locale={locale} />;
}

export async function generateStaticParams() {
  return Object.keys(useCases).map((id) => ({
    id,
  }));
} 