export const view4sightTiers = [
  {
    id: 1,
    planKey: "starter",
    icon: "unicon-sub-volume",
    buttonKey: "start_free",
    highlight: false,
    polarProductId: null, // Free tier doesn't need Polar payment
  },
  {
    id: 2,
    planKey: "team",
    icon: "unicon-course",
    buttonKey: "get_started",
    highlight: true,
    polarProductIdMonthly: "bb0aa3d0-61f9-426f-9005-277f2ab44700", // View4Sight - Team Monthly Plan
    polarProductIdYearly: "598152cf-98fc-41ef-ad12-e6b2d29c5e69", // View4Sight - Team Annual Plan
  },
  {
    id: 3,
    planKey: "studio",
    icon: "unicon-building",
    buttonKey: "get_started",
    highlight: false,
    polarProductIdMonthly: "a57d2cbc-9967-47e1-ac9c-e900fc02b992", // View4Sight - Studio Monthly Plan
    polarProductIdYearly: "072f5a83-099b-4acb-bfa6-c2e3201e73ff", // View4Sight - Studio Annual Plan
  },
];

export const enterprisePlan = {
  planKey: "enterprise",
  featureKeys: [
    { icon: "unicon-data-sharing", key: "unlimited_storage_users" },
    { icon: "unicon-servers", key: "on_premise_cloud" },
    { icon: "unicon-shield-check", key: "sla" },
    { icon: "unicon-palette", key: "white_label" }
  ],
  buttonKey: "contact_sales",
  buttonLink: "/page-contact"
};