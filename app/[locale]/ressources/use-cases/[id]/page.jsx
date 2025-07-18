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
  "urban-planning": {
    id: "urban-planning",
    category: "Urban Planning",
    title: "Smart City Development",
    subtitle: "How City Planning Department increased stakeholder engagement by 80% with immersive 3D presentations",
    hero: {
      description: "Explore how urban planners are using 3D visualization to engage communities and streamline approval processes for large-scale developments.",
      image: "/assets/images/template/charts-laptop-dark.svg",
      stats: [
        { label: "Stakeholder Engagement", value: "80%", description: "Increased public participation" },
        { label: "Approval Rate", value: "92%", description: "Faster project approvals" },
        { label: "Projects Planned", value: "25+", description: "Major urban developments" }
      ]
    },
    challenge: {
      title: "The Challenge",
      description: "Traditional urban planning presentations failed to engage stakeholders effectively, leading to lengthy approval processes and community opposition.",
      points: [
        "2D maps and technical drawings were difficult for public to understand",
        "Limited stakeholder engagement in planning sessions",
        "Lengthy approval processes due to miscommunication",
        "Resistance to development projects from community members"
      ]
    },
    solution: {
      title: "The View4Sight Solution",
      description: "Interactive 3D city models for immersive stakeholder presentations and collaborative planning sessions.",
      features: [
        {
          title: "Interactive City Models",
          description: "3D visualization of proposed developments in existing urban context"
        },
        {
          title: "Public Engagement Tools",
          description: "Web-based access for community members to explore proposals"
        },
        {
          title: "Scenario Comparison",
          description: "Side-by-side visualization of different development options"
        }
      ]
    },
    results: {
      title: "Measurable Results",
      metrics: [
        { value: "+80%", label: "Stakeholder engagement", description: "Increased public participation" },
        { value: "92%", label: "Approval rate", description: "First-round project approvals" },
        { value: "25+", label: "Projects planned", description: "Major urban developments" },
        { value: "-50%", label: "Planning time", description: "Faster approval cycles" }
      ]
    },
    testimonial: {
      quote: "View4Sight has transformed how we engage with our community. Citizens can now truly understand and participate in shaping their urban environment.",
      author: "Sophie Leroy",
      role: "Urban Planning Director",
      company: "City Planning Department",
      image: "/assets/images/avatars/04.jpg"
    }
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

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const useCase = useCases[resolvedParams.id];
  
  if (!useCase) {
    return {
      title: "Use Case Not Found - View4Sight"
    };
  }

  return {
    title: `${useCase.title} - ${useCase.category} Use Case | View4Sight`,
    description: useCase.subtitle,
  };
}

export default async function UseCasePage({ params }) {
  const resolvedParams = await params;
  const useCase = useCases[resolvedParams.id];

  if (!useCase) {
    notFound();
  }

  return (
    <UseCaseDetail useCase={useCase} />
  );
}

export async function generateStaticParams() {
  return Object.keys(useCases).map((id) => ({
    id,
  }));
} 