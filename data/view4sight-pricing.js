export const view4sightTiers = [
  {
    id: 1,
    plan: "Starter",
    price: "Free",
    priceSuffix: "",
    description: "For individuals & small teams",
    features: [
      "15 GB Storage",
      "2 users included",
      "3 active projects",
      "Private link sharing",
      "Basic support"
    ],
    icon: "unicon-sub-volume",
    buttonText: "Get started",
    footerText: "No credit card required",
    highlight: false,
  },
  {
    id: 2,
    plan: "Team",
    price: "€79",
    priceSuffix: "/ mo",
    description: "For growing businesses",
    features: [
      "150 GB Storage",
      "5 users included",
      "20 GB uploads",
      "50 GB downloads",
      "Advanced annotations",
      "Priority email support"
    ],
    icon: "unicon-course",
    buttonText: "Start free trial",
    footerText: "Payments secured by Stripe",
    highlight: true,
  },
  {
    id: 3,
    plan: "Studio",
    price: "€199",
    priceSuffix: "/ mo",
    description: "For larger organizations",
    features: [
      "500 GB Storage",
      "15 users included",
      "50 GB uploads",
      "1 TB downloads",
      "Embeddable viewer",
      "Priority phone & email support"
    ],
    icon: "unicon-building",
    buttonText: "Start free trial",
    footerText: "Payments secured by Stripe",
    highlight: false,
  },
];

export const enterprisePlan = {
  title: "Enterprise",
  description: "Custom solutions for large organizations",
  features: [
    {
      icon: "unicon-data-sharing",
      title: "Unlimited storage & users",
      desc: "Scale without limits"
    },
    {
      icon: "unicon-servers",
      title: "On-premise / private cloud",
      desc: "Your infrastructure, your control"
    },
    {
      icon: "unicon-shield-check",
      title: "99.9% SLA",
      desc: "Enterprise-grade reliability"
    },
    {
      icon: "unicon-palette",
      title: "Complete white label",
      desc: "Your brand, your experience"
    }
  ],
  buttonText: "Contact sales",
  buttonLink: "/page-contact"
}; 