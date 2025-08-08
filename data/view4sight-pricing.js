export const view4sightTiers = [
  {
    id: 1,
    plan: "Starter",
    price: "Free",
    yearlyPrice: "Free",
    priceSuffix: "",
    description: "Perfect for trying out View4Sight",
    features: [
      "15 GB Storage",
      "2 users included",
      "3 active projects",
      "Private link sharing",
      "Basic support"
    ],
    icon: "unicon-sub-volume",
    buttonText: "Start free trial",
    footerText: "No credit card required",
    highlight: false,
    polarProductId: null, // Free tier doesn't need Polar payment
  },
  {
    id: 2,
    plan: "Team",
    price: "€79",
    yearlyPrice: "€63",
    priceSuffix: "/ month",
    description: "For teams ready to collaborate on 3D data",
    features: [
      "150 GB Storage",
      "5 users included",
      "30 active projects",
      "Private link sharing",
      "Advanced annotations",
      "Priority email support"
    ],
    icon: "unicon-course",
    buttonText: "Get started",
    footerText: "Payments secured by Polar",
    highlight: true,
    polarProductIdMonthly: "bb0aa3d0-61f9-426f-9005-277f2ab44700", // View4Sight - Team Monthly Plan
    polarProductIdYearly: "598152cf-98fc-41ef-ad12-e6b2d29c5e69", // View4Sight - Team Annual Plan
  },
  {
    id: 3,
    plan: "Studio",
    price: "€199",
    yearlyPrice: "€159",
    priceSuffix: "/ month",
    description: "For established firms with complex projects",
    features: [
      "500 GB Storage",
      "15 users included",
      "100 active projects",
      "Private link sharing",
      "Embeddable viewer",
      "Priority phone & email support"
    ],
    icon: "unicon-building",
    buttonText: "Get started",
    footerText: "Payments secured by Polar",
    highlight: false,
    polarProductIdMonthly: "a57d2cbc-9967-47e1-ac9c-e900fc02b992", // View4Sight - Studio Monthly Plan
    polarProductIdYearly: "072f5a83-099b-4acb-bfa6-c2e3201e73ff", // View4Sight - Studio Annual Plan
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