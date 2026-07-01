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
    polarProductIdMonthly: "5fc3924d-2e25-440e-974c-090d20f62adf", // View4Sight Team - Monthly
    polarProductIdYearly: "c6de731d-6d27-4a55-a5c0-4692def2e057", // View4Sight Team - Annual Plan
  },
  {
    id: 3,
    planKey: "studio",
    icon: "unicon-building",
    buttonKey: "get_started",
    highlight: false,
    polarProductIdMonthly: "f08772d3-5547-472d-88e3-2e7305cf5f8f", // View4Sight Studio - Monthly
    polarProductIdYearly: "1bd82a15-b50d-496c-b7b6-82095e6b4c0d", // View4Sight Studio - Annual Plan
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