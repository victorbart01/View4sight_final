module.exports = {

"[project]/data/pricing.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "pricingPlans": (()=>pricingPlans),
    "pricingPlans3": (()=>pricingPlans3),
    "pricingPlans4": (()=>pricingPlans4),
    "pricingPlans5": (()=>pricingPlans5),
    "pricingTiers": (()=>pricingTiers),
    "tiers": (()=>tiers),
    "tiers2": (()=>tiers2),
    "tiers3": (()=>tiers3)
});
const pricingTiers = [
    {
        id: 1,
        title: "Essentials",
        description: "For creating impressive tools that generate results.",
        price: "$19 USD",
        priceInfo: "Seat per month, 2 seats max",
        buttonLabel: "Start a free trial",
        features: [
            "Real-time tracking and notifications",
            "Real-time analytics",
            "Drag and drop templates",
            "Project Management",
            "24/7 email and chat support"
        ]
    },
    {
        id: 2,
        title: "Business",
        description: "For seamless integrations and sending tools in bulk.",
        price: "$49 USD",
        priceInfo: "Seat cost per month",
        buttonLabel: "Start a free trial",
        features: [
            "CRM and Zapier integrations",
            "Content reporting",
            "Unlimited team workspaces",
            "Approval workflows",
            "Salesforce integration*"
        ],
        popular: true,
        imageUrl: "/assets/images/template/money.svg",
        imageAlt: "money",
        darkImageUrl: "/assets/images/template/money-dark.svg",
        darkImageAlt: "money-dark"
    }
];
const tiers = [
    {
        id: 1,
        plan: "Basic plan",
        price: "$49",
        priceSuffix: "/ mo",
        description: "Billed annually.",
        features: [
            "Up to 10 individual users",
            "Basic reporting and analytics",
            "Project Management",
            "20GB individual data each user",
            "Basic chat and email support"
        ],
        icon: "unicon-sub-volume",
        buttonText: "Get started",
        highlight: false
    },
    {
        id: 2,
        plan: "Business plan",
        price: "$79",
        priceSuffix: "/ mo",
        description: "Billed annually.",
        features: [
            "Access to all <b>Basic</b> features",
            "200+ integrations",
            "Unlimited team workspaces",
            "Approval workflows",
            "Salesforce integration*"
        ],
        icon: "unicon-course",
        buttonText: "Start a free trial",
        highlight: true
    },
    {
        id: 3,
        plan: "Enterprise plan",
        price: "$199",
        priceSuffix: "/ mo",
        description: "Billed annually.",
        features: [
            "Access to all <b>Business</b> features",
            "Unlimited files uploads",
            "Real-time team collaboration",
            "SSO support and custom user roles",
            "Bulk send & Forms"
        ],
        icon: "unicon-building",
        buttonText: "Book a demo",
        highlight: false
    }
];
const pricingPlans = [
    {
        title: "Starter",
        price: "$49",
        description: "For creating impressive tools that generate results.",
        features: [
            "Up to 10 individual users",
            "Basic reporting and analytics",
            "Project Management",
            "20GB individual data each user",
            "Basic chat and email support"
        ],
        linkText: "Get started",
        additionalClasses: ""
    },
    {
        title: "Pro",
        price: "$79",
        description: "For seamless integrations and sending tools in bulk.",
        features: [
            "Access to all Starter features",
            "200+ integrations",
            "Unlimited team workspaces",
            "Approval workflows",
            "Salesforce integration*"
        ],
        linkText: "Start a free trial",
        additionalClasses: "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5",
        badge: "Popular"
    }
];
const tiers2 = [
    {
        name: "Free",
        price: "$0",
        description: "Build a <b>hobby site</b> with every basic features.",
        details: "Free Forever!",
        buttonClass: "btn-secondary",
        features: [
            "Use on 1 website",
            "Personal License",
            "20 Basic Elements",
            "Basic Dynamic Data",
            "Basic Design Library",
            "Basic support"
        ]
    },
    {
        name: "Pro",
        price: "$79",
        description: "Build <b>one website</b> with every pro feature.",
        details: "Billed annually.",
        buttonClass: "btn-primary",
        features: [
            "Use on 1 website",
            "Personal License",
            "100 Pro Elements",
            "Full Dynamic Data",
            "Full Design Library",
            "Priority support"
        ],
        offer: "Save $25"
    },
    {
        name: "Agency",
        price: "$199",
        description: "Build <b>unlimited websites</b> with every pro feature",
        details: "Billed annually.",
        buttonClass: "btn-secondary",
        features: [
            "Use on unlimited websites",
            "Commercial License",
            "100 Pro Elements",
            "Full Dynamic Data",
            "Full Design Library",
            "Priority support"
        ]
    }
];
const tiers3 = [
    {
        title: "Essentials",
        description: "For creating impressive tools that generate results.",
        price: "$19 USD",
        yearlyPrice: "$12 USD",
        priceDetails: "Seat per month, 2 seats max",
        linkText: "Start a free trial",
        linkSubtext: "No credit card required",
        features: [
            "Real-time tracking and notifications",
            "Real-time analytics",
            "Drag and drop templates",
            "Project Management",
            "24/7 email and chat support"
        ],
        isPopular: false
    },
    {
        title: "Business",
        description: "For seamless integrations and sending tools in bulk.",
        price: "$49 USD",
        yearlyPrice: "$32 USD",
        priceDetails: "Seat cost per month",
        linkText: "Start a free trial",
        linkSubtext: "No credit card required",
        features: [
            "CRM and Zapier integrations",
            "Content reporting",
            "Unlimited team workspaces",
            "Approval workflows",
            "Salesforce integration*"
        ],
        isPopular: true
    },
    {
        title: "Enterprise",
        description: "For large companies with complex Tool workflows.",
        price: "Let’s talk",
        yearlyPrice: "Let’s talk",
        priceDetails: "Per‑seat or per‑tool pricing",
        linkText: "Contact sales",
        linkSubtext: "Respond within 24 hrs max",
        features: [
            "Unlimited files uploads",
            "Real-time tracking and notifications",
            "User performance",
            "SSO support and custom user roles",
            "Bulk send & Forms*"
        ],
        isPopular: false
    }
];
const pricingPlans3 = [
    {
        title: "Starter",
        description: "For individuals, freelancers",
        price: 49,
        features: [
            "Fast and Reliable",
            "Discover Data Everywhere",
            "Enrich Data with Context",
            "Risk Management",
            "Privacy Compliance",
            "Third-Party Management"
        ],
        included: [
            true,
            true,
            false,
            false,
            false,
            false
        ],
        link: "/sign-up",
        buttonClass: "btn-ghost-tertiary"
    },
    {
        title: "Pro",
        description: "For startups, agencies",
        price: 89,
        features: [
            "Fast and Reliable",
            "Discover Data Everywhere",
            "Enrich Data with Context",
            "Risk Management",
            "Privacy Compliance",
            "Third-Party Management"
        ],
        included: [
            true,
            true,
            true,
            true,
            false,
            false
        ],
        link: "/sign-up",
        buttonClass: "btn-primary"
    },
    {
        title: "Business",
        description: "For large business, companies",
        price: 249,
        features: [
            "Fast and Reliable",
            "Discover Data Everywhere",
            "Enrich Data with Context",
            "Risk Management",
            "Privacy Compliance",
            "Third-Party Management"
        ],
        included: [
            true,
            true,
            true,
            true,
            true,
            true
        ],
        link: "/page-contact-2",
        buttonClass: "btn-ghost-tertiary"
    }
];
const pricingPlans4 = [
    {
        title: "FREE",
        description: "Free now and forever",
        descriptionYearly: "Free now and forever",
        price: 0,
        buttonText: "Get started",
        buttonClass: "btn btn-md btn-ghost-tertiary border border-dark dark:border-white dark:border-opacity-15 rounded-pill",
        features: [
            "Fast and Reliable",
            "Discover Data Everywhere",
            "Enrich Data with Context",
            "Risk Management"
        ]
    },
    {
        title: "Go PRO",
        description: "One month only",
        descriptionYearly: "One year only",
        price: 24,
        buttonText: "Try for free",
        buttonClass: "btn btn-md btn-primary border border-dark dark:border-white dark:border-opacity-15 rounded-pill",
        features: [
            "Fast and Reliable",
            "Discover Data Everywhere",
            "Enrich Data with Context",
            "Risk Management",
            "Privacy Compliance",
            "Third-Party Management"
        ]
    }
];
const pricingPlans5 = [
    {
        title: "Starter",
        description: "For individuals, freelancers",
        price: 24,
        duration: "/ month",
        billed: "Billed once yearly",
        features: [
            "Fast and Reliable",
            "Discover Data Everywhere"
        ],
        cta: {
            text: "Try for free",
            link: "/sign-up"
        },
        bgColor: "bg-gray-300 bg-opacity-15 text-white"
    },
    {
        title: "Pro",
        description: "For startups, agencies",
        price: 48,
        duration: "/ month",
        billed: "Billed once yearly",
        features: [
            "Fast and Reliable",
            "Discover Data Everywhere",
            "Enrich Data with Context",
            "Risk Management"
        ],
        cta: {
            text: "Try for free",
            link: "/sign-up"
        },
        bgColor: "bg-secondary text-dark shadow-xs"
    },
    {
        title: "Business",
        description: "For large business, companies",
        price: 64,
        duration: "/ month",
        billed: "Billed once yearly",
        features: [
            "Fast and Reliable",
            "Discover Data Everywhere",
            "Enrich Data with Context",
            "Risk Management",
            "Privacy Compliance",
            "Third-Party Management"
        ],
        cta: {
            text: "Get in touch",
            link: "/page-contact-2"
        },
        bgColor: "bg-gray-300 bg-opacity-15 text-white"
    }
];
}}),
"[project]/components/common/Pricing.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Pricing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$pricing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/pricing.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
;
function Pricing() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "pricing_tiers",
        className: "pricing-tiers section panel overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel py-6 xl:py-9",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container sm:max-w-lg xl:max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel vstack gap-4 sm:gap-6 xl:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "heading panel max-w-550px mx-auto text-center",
                                "data-anime": "onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "title h3 lg:h2 xl:h1",
                                        children: "Simple, scalable pricing."
                                    }, void 0, false, {
                                        fileName: "[project]/components/common/Pricing.jsx",
                                        lineNumber: 19,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70",
                                        children: "No extra charges. No hidden fees."
                                    }, void 0, false, {
                                        fileName: "[project]/components/common/Pricing.jsx",
                                        lineNumber: 22,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/common/Pricing.jsx",
                                lineNumber: 15,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "content panel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4",
                                    "data-anime": "onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$pricing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tiers3"].map((tier, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tier-wrapper",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-secondary dark:bg-gray-800",
                                                children: [
                                                    tier.isPopular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium",
                                                        children: "Popular"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/common/Pricing.jsx",
                                                        lineNumber: 35,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "panel",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "title h5 sm:h4 dark:text-white",
                                                                children: tier.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/common/Pricing.jsx",
                                                                lineNumber: 40,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "desc dark:text-white opacity-70 dark:opacity-80",
                                                                children: tier.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/common/Pricing.jsx",
                                                                lineNumber: 43,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/common/Pricing.jsx",
                                                        lineNumber: 39,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "panel",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel vstack gap-narrow",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "title h3 sm:h2 m-0 dark:text-white",
                                                                    children: tier.price
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/common/Pricing.jsx",
                                                                    lineNumber: 49,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "fs-7 opacity-70",
                                                                    children: tier.priceDetails
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/common/Pricing.jsx",
                                                                    lineNumber: 52,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "vstack gap-1 justify-center text-center mt-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: `/sign-up`,
                                                                            className: `btn btn-md sm:btn-sm lg:btn-md ${tier.title === "Enterprise" ? "btn-dark" : "btn-primary"} text-white`,
                                                                            children: tier.linkText
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/common/Pricing.jsx",
                                                                            lineNumber: 56,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "fs-7 opacity-70 min-h-24px",
                                                                            children: tier.linkSubtext
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/common/Pricing.jsx",
                                                                            lineNumber: 66,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/common/Pricing.jsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/common/Pricing.jsx",
                                                            lineNumber: 48,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/common/Pricing.jsx",
                                                        lineNumber: 47,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "panel",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel vstack gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "fs-6 fw-bold dark:text-white",
                                                                    children: tier.title === "Essentials" ? "Key features:" : `Everything in ${tier.title === "Business" ? "Essentials" : "Business"}, plus:`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/common/Pricing.jsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 29
                                                                }, this),
                                                                tier.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "hstack gap-1 fs-7",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/common/Pricing.jsx",
                                                                                lineNumber: 85,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: feature
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/common/Pricing.jsx",
                                                                                lineNumber: 86,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/components/common/Pricing.jsx",
                                                                        lineNumber: 84,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/common/Pricing.jsx",
                                                            lineNumber: 73,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/common/Pricing.jsx",
                                                        lineNumber: 72,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/common/Pricing.jsx",
                                                lineNumber: 33,
                                                columnNumber: 23
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/components/common/Pricing.jsx",
                                            lineNumber: 32,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/common/Pricing.jsx",
                                    lineNumber: 27,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/common/Pricing.jsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-gray-900 dark:text-white text-opacity-70",
                                "data-anime": "onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;",
                                children: "Prices exclude any applicable taxes."
                            }, void 0, false, {
                                fileName: "[project]/components/common/Pricing.jsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/common/Pricing.jsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/common/Pricing.jsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/Pricing.jsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/common/Pricing.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/Pricing.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),
"[project]/data/brands.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "brands": (()=>brands),
    "brands2": (()=>brands2),
    "brands3": (()=>brands3),
    "brands4": (()=>brands4),
    "brands5": (()=>brands5),
    "brands6": (()=>brands6),
    "brands7": (()=>brands7),
    "reviewLogos": (()=>reviewLogos)
});
const brands = [
    {
        id: 1,
        src: "/assets/images/brands/brand-01.svg",
        alt: "Proline"
    },
    {
        id: 2,
        src: "/assets/images/brands/brand-02.svg",
        alt: "Iceberg"
    },
    {
        id: 3,
        src: "/assets/images/brands/brand-03.svg",
        alt: "PinPoint"
    },
    {
        id: 4,
        src: "/assets/images/brands/brand-04.svg",
        alt: "Clues"
    },
    {
        id: 5,
        src: "/assets/images/brands/brand-05.svg",
        alt: "Snowflake"
    },
    {
        id: 6,
        src: "/assets/images/brands/brand-06.svg",
        alt: "Proline"
    },
    {
        id: 7,
        src: "/assets/images/brands/brand-01.svg",
        alt: "Proline"
    },
    {
        id: 8,
        src: "/assets/images/brands/brand-02.svg",
        alt: "Iceberg"
    },
    {
        id: 9,
        src: "/assets/images/brands/brand-03.svg",
        alt: "PinPoint"
    },
    {
        id: 10,
        src: "/assets/images/brands/brand-04.svg",
        alt: "Clues"
    },
    {
        id: 11,
        src: "/assets/images/brands/brand-05.svg",
        alt: "Snowflake"
    },
    {
        id: 12,
        src: "/assets/images/brands/brand-06.svg",
        alt: "Proline"
    }
];
const reviewLogos = [
    {
        id: 13,
        lightSrc: "/assets/images/review-logo/01.svg",
        darkSrc: "/assets/images/review-logo/dark-01.svg"
    },
    {
        id: 14,
        lightSrc: "/assets/images/review-logo/02.svg",
        darkSrc: "/assets/images/review-logo/dark-02.svg"
    },
    {
        id: 15,
        lightSrc: "/assets/images/review-logo/03.svg",
        darkSrc: "/assets/images/review-logo/dark-03.svg"
    },
    {
        id: 16,
        lightSrc: "/assets/images/review-logo/04.svg",
        darkSrc: "/assets/images/review-logo/dark-04.svg"
    },
    {
        id: 17,
        lightSrc: "/assets/images/review-logo/05.svg",
        darkSrc: "/assets/images/review-logo/dark-05.svg"
    },
    {
        id: 18,
        lightSrc: "/assets/images/review-logo/06.svg",
        darkSrc: "/assets/images/review-logo/dark-06.svg"
    }
];
const brands2 = [
    {
        id: 19,
        src: "/assets/images/brands/brand-01.svg",
        alt: "Proline"
    },
    {
        id: 20,
        src: "/assets/images/brands/brand-02.svg",
        alt: "Iceberg"
    },
    {
        id: 21,
        src: "/assets/images/brands/brand-03.svg",
        alt: "PinPoint"
    },
    {
        id: 22,
        src: "/assets/images/brands/brand-04.svg",
        alt: "Clues"
    },
    {
        id: 23,
        src: "/assets/images/brands/brand-05.svg",
        alt: "Snowflake"
    },
    {
        id: 24,
        src: "/assets/images/brands/brand-06.svg",
        alt: "Proline"
    },
    {
        id: 25,
        src: "/assets/images/brands/brand-07.svg",
        alt: "Iceberg"
    },
    {
        id: 26,
        src: "/assets/images/brands/brand-08.svg",
        alt: "PinPoint"
    }
];
const brands3 = [
    {
        id: 27,
        src: "/assets/images/review-logo/01.svg",
        darkSrc: "/assets/images/review-logo/dark-01.svg"
    },
    {
        id: 28,
        src: "/assets/images/review-logo/02.svg",
        darkSrc: "/assets/images/review-logo/dark-02.svg"
    },
    {
        id: 29,
        src: "/assets/images/review-logo/03.svg",
        darkSrc: "/assets/images/review-logo/dark-03.svg"
    },
    {
        id: 30,
        src: "/assets/images/review-logo/04.svg",
        darkSrc: "/assets/images/review-logo/dark-04.svg"
    },
    {
        id: 31,
        src: "/assets/images/review-logo/05.svg",
        darkSrc: "/assets/images/review-logo/dark-05.svg"
    },
    {
        id: 32,
        src: "/assets/images/review-logo/06.svg",
        darkSrc: "/assets/images/review-logo/dark-06.svg"
    }
];
const brands4 = [
    {
        alt: "Proline",
        src: "/assets/images/brands/brand-01.svg",
        width: 165
    },
    {
        alt: "Iceberg",
        src: "/assets/images/brands/brand-02.svg",
        width: 146
    },
    {
        alt: "PinPoint",
        src: "/assets/images/brands/brand-03.svg",
        width: 178
    },
    {
        alt: "Clues",
        src: "/assets/images/brands/brand-04.svg",
        width: 177
    },
    {
        alt: "Snowflake",
        src: "/assets/images/brands/brand-05.svg",
        width: 179
    },
    {
        alt: "Proline",
        src: "/assets/images/brands/brand-06.svg",
        width: 167
    },
    {
        alt: "Iceberg",
        src: "/assets/images/brands/brand-07.svg",
        width: 170
    },
    {
        alt: "PinPoint",
        src: "/assets/images/brands/brand-08.svg",
        width: 163
    }
];
const brands5 = [
    {
        src: "/assets/images/apps/asana.svg",
        width: 2500,
        height: 2311
    },
    {
        src: "/assets/images/apps/mailchimp.svg",
        width: 351,
        height: 373
    },
    {
        src: "/assets/images/apps/zapier.svg",
        width: 800,
        height: 800
    },
    {
        src: "/assets/images/apps/bitbucket.svg",
        width: 333,
        height: 300
    },
    {
        src: "/assets/images/apps/drive.svg",
        width: 800,
        height: 800
    }
];
const brands6 = [
    {
        src: "/assets/images/brands/brand-01.svg",
        alt: "brand",
        width: 165,
        height: 48
    },
    {
        src: "/assets/images/brands/brand-05.svg",
        alt: "brand",
        width: 179,
        height: 48
    },
    {
        src: "/assets/images/brands/brand-03.svg",
        alt: "brand",
        width: 178,
        height: 48
    },
    {
        src: "/assets/images/brands/brand-07.svg",
        alt: "brand",
        width: 170,
        height: 48
    }
];
const brands7 = [
    {
        src: "/assets/images/brands/brand-01.svg",
        alt: "brand",
        width: 165,
        height: 48
    },
    {
        src: "/assets/images/brands/brand-07.svg",
        alt: "brand",
        width: 170,
        height: 48
    },
    {
        src: "/assets/images/brands/brand-03.svg",
        alt: "brand",
        width: 178,
        height: 48
    },
    {
        src: "/assets/images/brands/brand-05.svg",
        alt: "brand",
        width: 179,
        height: 48
    }
];
}}),
"[project]/components/homes/home-3/Brands.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Brands)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$brands$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/brands.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
function Brands() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "trusted_brands",
        className: "trusted-brands section panel",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel pb-4 lg:pb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "review-brands panel vstack justify-center gap-2 px-3 py-4 sm:px-4 sm:py-6 lg:p-6 text-center rounded-3 bg-secondary dark:bg-gray-800 overflow-hidden",
                        "data-anime": "onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "title h4 sm:h3 lg:h2 m-0",
                                children: "Trusted for overall simplicity"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-3/Brands.jsx",
                                lineNumber: 15,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white flex-sm-column",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rating panel",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hstack justify-center gap-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "icon unicon-star-filled"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-3/Brands.jsx",
                                                    lineNumber: 21,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "icon unicon-star-filled"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-3/Brands.jsx",
                                                    lineNumber: 22,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "icon unicon-star-filled"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-3/Brands.jsx",
                                                    lineNumber: 23,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "icon unicon-star-filled"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-3/Brands.jsx",
                                                    lineNumber: 24,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "icon unicon-star-filled"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-3/Brands.jsx",
                                                    lineNumber: 25,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/homes/home-3/Brands.jsx",
                                            lineNumber: 20,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-3/Brands.jsx",
                                        lineNumber: 19,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "desc rtl:order-first",
                                        children: "Based on 4,000+ reviews with customer satisfaction on"
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-3/Brands.jsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homes/home-3/Brands.jsx",
                                lineNumber: 18,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel mt-3 sm:mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "brands hstack gap-4 justify-between max-w-950px mx-auto",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$brands$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reviewLogos"].map((logo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: logo.lightSrc,
                                                    width: 32,
                                                    height: 42,
                                                    style: {
                                                        height: "42px",
                                                        width: "fit-content"
                                                    },
                                                    alt: "Trustpilot",
                                                    className: "dark:d-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-3/Brands.jsx",
                                                    lineNumber: 36,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: logo.darkSrc,
                                                    width: 32,
                                                    height: 42,
                                                    style: {
                                                        height: "42px",
                                                        width: "fit-content"
                                                    },
                                                    alt: "Trustpilot",
                                                    className: "d-none dark:d-block"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-3/Brands.jsx",
                                                    lineNumber: 44,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/homes/home-3/Brands.jsx",
                                            lineNumber: 35,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-3/Brands.jsx",
                                    lineNumber: 33,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-3/Brands.jsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homes/home-3/Brands.jsx",
                        lineNumber: 11,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-3/Brands.jsx",
                    lineNumber: 10,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-3/Brands.jsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-3/Brands.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-3/Brands.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),
"[project]/data/features.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "featureItems": (()=>featureItems),
    "featureItems2": (()=>featureItems2),
    "features": (()=>features),
    "features10": (()=>features10),
    "features11": (()=>features11),
    "features12": (()=>features12),
    "features13": (()=>features13),
    "features2": (()=>features2),
    "features3": (()=>features3),
    "features4": (()=>features4),
    "features5": (()=>features5),
    "features6": (()=>features6),
    "features7": (()=>features7),
    "features8": (()=>features8),
    "features9": (()=>features9),
    "integrations": (()=>integrations),
    "panelData": (()=>panelData)
});
const panelData = [
    {
        id: 1,
        lightIcon: "/assets/images/template/icon-diamond.svg",
        darkIcon: "/assets/images/template/icon-diamond-dark.svg",
        altText: "impact-icon",
        title: "Make an impact",
        description: "We’re building something big. Something that has the power to change the trajectory of any sized business for the better."
    },
    {
        id: 2,
        lightIcon: "/assets/images/template/icon-trophy.svg",
        darkIcon: "/assets/images/template/icon-trophy-dark.svg",
        altText: "crown-icon",
        title: "Learn",
        description: "Teams are masters of their craft though we’re all experts in our respective fields, we always make time to expand our minds."
    },
    {
        id: 3,
        lightIcon: "/assets/images/template/icon-crown.svg",
        darkIcon: "/assets/images/template/icon-crown-dark.svg",
        altText: "empathy-icon",
        title: "Empathy",
        description: "We strive to be empathetic to every customer and colleague and by doing so we provide a better experience for all."
    }
];
const features = [
    {
        id: 4,
        imgSrc: "/assets/images/template/feature-01.svg",
        imgAlt: "Share tools quickly and confidently in minutes",
        title: "Share tools quickly and confidently in minutes",
        description: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions."
    },
    {
        id: 5,
        imgSrc: "/assets/images/template/feature-02.svg",
        imgAlt: "Connect every part of your entire business",
        title: "Connect every part of your entire business",
        description: "Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.",
        linkText: "See all integrations",
        linkHref: "#"
    },
    {
        id: 6,
        imgSrc: "/assets/images/template/feature-03.svg",
        imgAlt: "Maintain compliance and control your apps",
        title: "Maintain compliance and control your apps",
        description: "Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes."
    }
];
const features2 = [
    {
        icon: "unicon-document",
        title: "Proposals",
        description: "Share Tools in minutes with pre-built, customizable templates.",
        backgroundColor: "bg-white dark:bg-gray-800"
    },
    {
        icon: "unicon-model",
        title: "Quotes",
        description: "Find out in real time when they’re opened, viewed and signed.",
        backgroundColor: "bg-primary text-white"
    },
    {
        icon: "unicon-task-approved",
        title: "Contracts",
        description: "Use our native CRM integrations to pull customer data into your Tools fast.",
        backgroundColor: "bg-white dark:bg-gray-800"
    },
    {
        icon: "unicon-touch-interaction",
        title: "eSignatures",
        description: "Keep your data secure with our legally-binding e-Signature software.",
        backgroundColor: "bg-white dark:bg-gray-800"
    }
];
const features3 = [
    {
        id: 1,
        imgSrc: "/assets/images/template/feature-01.svg",
        altText: "Share tools quickly and confidently in minutes",
        step: "01.",
        title: "Share tools quickly and confidently in minutes",
        description: `This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.`,
        testimonial: {
            quote: `“Most of our time used to be taken up by administrative work whereas now we can focus on building out programs to help our employees.”`,
            imgSrc: "/assets/images/avatars/01.png",
            name: "Mark Zellers",
            role: "Director of Human Resources."
        }
    },
    {
        id: 2,
        imgSrc: "/assets/images/template/feature-02.svg",
        altText: "Connect every part of your entire business",
        step: "02.",
        title: "Connect every part of your entire business",
        description: `Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.`,
        link: {
            href: "#",
            text: "See all integrations"
        },
        testimonial: {
            quote: `“I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”`,
            imgSrc: "/assets/images/avatars/02.png",
            name: "Matt Henderson",
            role: "Client Success Manager"
        }
    },
    {
        id: 3,
        imgSrc: "/assets/images/template/feature-03.svg",
        altText: "Maintain compliance and control your apps",
        step: "03.",
        title: "Maintain compliance and control your apps",
        description: `Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes.`,
        testimonial: {
            quote: `“This powerful tool eliminates the need to leave Salesforce to get things done.”`,
            imgSrc: "/assets/images/avatars/04.png",
            name: "Natalia Larsson",
            role: "Director of Sales Operations"
        }
    },
    {
        id: 4,
        imgSrc: "/assets/images/template/feature-04.svg",
        altText: "Review quickly and confidently",
        step: "04.",
        title: "Review quickly and confidently",
        description: `Get real-time access to approvals, comments and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.`,
        testimonial: {
            quote: `“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers than comply with this regulation.”`,
            imgSrc: "/assets/images/avatars/03.png",
            name: "Sarah Edrissi",
            role: "Lead Marketing"
        }
    }
];
const features4 = [
    {
        icon: "unicon-document",
        title: "Proposals",
        description: "Share Tools in minutes with pre-built, customizable templates."
    },
    {
        icon: "unicon-model",
        title: "Quotes",
        description: "Find out in real time when they’re opened, viewed and signed."
    },
    {
        icon: "unicon-task-approved",
        title: "Contracts",
        description: "Use our native CRM integrations to pull customer data into your Tools fast."
    },
    {
        icon: "unicon-touch-interaction",
        title: "eSignatures",
        description: "Keep your data secure with our legally-binding e-Signature software."
    },
    {
        icon: "unicon-sub-volume",
        title: "Forms",
        description: "Share via direct link or by embedding them on your website, no coding necessary."
    },
    {
        icon: "unicon-currency",
        title: "Payments",
        description: "Collect them instantly right from your contract, while increasing your close rate by 36%."
    }
];
const featureItems = [
    {
        imageSrc: "/assets/images/template/home-four-feature-01.png",
        altText: "Ensuring timely delivery and maximum efficiency",
        title: "Ensuring timely delivery and maximum efficiency",
        description: "We offers advanced project management features such as Gantt charts, task dependencies, and resource allocation",
        linkText: "Let's find out",
        icon: "unicon-cloud-download",
        reverseOrder: false
    },
    {
        imageSrc: "/assets/images/template/home-four-feature-02.png",
        altText: "No more digging endless reports and spreadsheets",
        title: "No more digging endless reports and spreadsheets",
        description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        linkText: "See all spreadsheets",
        icon: "unicon-course",
        reverseOrder: true
    },
    {
        imageSrc: "/assets/images/template/home-four-feature-03.png",
        altText: "Share files, and communicate with your team in real-time",
        title: "Share files, and communicate with your team in real-time",
        description: "You can easily assign tasks, share files, and communicate with your team in real-time, no matter where they are located.",
        linkText: "See apps & integrations",
        icon: "unicon-volume-block-storage",
        reverseOrder: false
    },
    {
        imageSrc: "/assets/images/template/home-four-feature-04.png",
        altText: "Collaboration is made seamless with Lexend",
        title: "Collaboration is made seamless with Lexend",
        description: "Get real-time access to approvals, comments and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.",
        linkText: "Let's find out",
        icon: "unicon-model",
        reverseOrder: true
    }
];
const featureItems2 = [
    {
        order: "order-1 lg:order-0",
        iconSrc: "/assets/images/common/icons/zap.svg",
        alt: "feature-icon",
        title: "Fast and Reliable",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        order: "order-0",
        iconSrc: "/assets/images/common/icons/database.svg",
        alt: "feature-icon",
        title: "Discover Data Everywhere",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        bgClass: "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-bottom-end-0 lg:rounded-bottom-0"
    },
    {
        order: "order-2 sm:order-1 lg:order-0",
        iconSrc: "/assets/images/common/icons/puzzle.svg",
        alt: "feature-icon",
        title: "Enrich Data with Context",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        order: "order-1 lg:order-0",
        iconSrc: "/assets/images/common/icons/target.svg",
        alt: "feature-icon",
        title: "Risk Management",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        bgClass: "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-start-0 lg:rounded-top-end-0 lg:rounded-start-1-5"
    },
    {
        order: "order-3 lg:order-0",
        iconSrc: "/assets/images/common/icons/line-chart.svg",
        alt: "feature-icon",
        title: "Privacy Compliance",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        order: "order-2 lg:order-0",
        iconSrc: "/assets/images/common/icons/settings.svg",
        alt: "feature-icon",
        title: "Third-Party Management",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        bgClass: "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5"
    }
];
const features5 = [
    {
        iconSrc: "/assets/images/common/icons/zap.svg",
        alt: "feature-icon",
        title: "Drag-and-Drop Interface"
    },
    {
        iconSrc: "/assets/images/common/icons/database.svg",
        alt: "feature-icon",
        title: "Pre-Designed Templates"
    },
    {
        iconSrc: "/assets/images/common/icons/puzzle.svg",
        alt: "feature-icon",
        title: "Fully Responsive Design"
    },
    {
        iconSrc: "/assets/images/common/icons/target.svg",
        alt: "feature-icon",
        title: "Website Customization"
    },
    {
        iconSrc: "/assets/images/common/icons/line-chart.svg",
        alt: "feature-icon",
        title: "UI Elements Library"
    },
    {
        iconSrc: "/assets/images/common/icons/settings.svg",
        alt: "feature-icon",
        title: "Global & Local Styles"
    },
    {
        iconSrc: "/assets/images/common/icons/puzzle.svg",
        alt: "feature-icon",
        title: "Third-Party Integrations"
    }
];
const features6 = [
    {
        id: 1,
        imgSrc: "/assets/images/template/feature-01.svg",
        imgAlt: "Share tools quickly and confidently in minutes",
        title: "Share tools quickly and confidently in minutes",
        description: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.",
        link: null
    },
    {
        id: 2,
        imgSrc: "/assets/images/template/feature-02.svg",
        imgAlt: "Connect every part of your entire business",
        title: "Connect every part of your entire business",
        description: "Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.",
        link: {
            text: "See all integrations",
            href: "#"
        }
    },
    {
        id: 3,
        imgSrc: "/assets/images/template/feature-03.svg",
        imgAlt: "Maintain compliance and control your apps",
        title: "Maintain compliance and control your apps",
        description: "Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks, and lock all legal information to prevent costly mistakes.",
        link: null
    },
    {
        id: 4,
        imgSrc: "/assets/images/template/feature-04.svg",
        imgAlt: "Review quickly and confidently",
        title: "Review quickly and confidently",
        description: "Get real-time access to approvals, comments, and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.",
        link: null
    }
];
const integrations = [
    {
        title: "Mailchimp",
        description: "Share your ideas with Mailchimp email newsletters.",
        imgSrc: "/assets/images/integrations/mailchimp.png",
        categories: [
            "Marketing Automation",
            "Finance",
            "Spreadsheets"
        ]
    },
    {
        title: "Asana",
        description: "Leading work management from daily tasks to strategic initiatives.",
        imgSrc: "/assets/images/integrations/asana.png",
        categories: [
            "Marketing Automation",
            "Scheduling",
            "Project Management"
        ]
    },
    {
        title: "Zapier",
        description: "Send and receive email via a custom Zapier.",
        imgSrc: "/assets/images/integrations/zapier.png",
        categories: [
            "Marketing Automation",
            "Scheduling",
            "Spreadsheets"
        ]
    },
    {
        title: "Bitbucket",
        description: "File sync app that lets you store all of your files online.",
        imgSrc: "/assets/images/integrations/bitbucket.png",
        categories: [
            "Marketing Automation",
            "Scheduling",
            "Project Management"
        ]
    },
    {
        title: "Stripe",
        description: "Developer-friendly way to accept payments online and in mobile apps.",
        imgSrc: "/assets/images/integrations/stripe.png",
        categories: [
            "Marketing Automation",
            "Finance",
            "Spreadsheets"
        ]
    },
    {
        title: "Google Drive",
        description: "File sync app that lets you store all of your files online.",
        imgSrc: "/assets/images/integrations/drive.png",
        categories: [
            "Marketing Automation",
            "Finance",
            "Spreadsheets"
        ]
    }
];
const features7 = [
    {
        order: "order-1 lg:order-0",
        icon: "/assets/images/custom-icons/icon-01.svg",
        title: "Fast and Reliable"
    },
    {
        order: "order-0",
        icon: "/assets/images/custom-icons/icon-02.svg",
        title: "Discover Data Everywhere"
    },
    {
        order: "order-2 sm:order-1 lg:order-0",
        icon: "/assets/images/custom-icons/icon-03.svg",
        title: "Enrich Data with Context"
    },
    {
        order: "order-1 lg:order-0",
        icon: "/assets/images/custom-icons/icon-07.svg",
        title: "Risk Management"
    },
    {
        order: "order-3 lg:order-0",
        icon: "/assets/images/custom-icons/icon-05.svg",
        title: "Privacy Compliance"
    },
    {
        order: "order-2 lg:order-0",
        icon: "/assets/images/custom-icons/icon-06.svg",
        title: "Third-Party Management"
    }
];
const features8 = [
    {
        imgSrc: "/assets/images/features/home-8-feature-01.png",
        title: "Seamless integrations with your existing tools"
    },
    {
        imgSrc: "/assets/images/features/home-8-feature-05.png",
        title: "Intuitive dashboard for at-a-glance insights"
    },
    {
        imgSrc: "/assets/images/features/home-8-feature-06.png",
        title: "Automated data analysis and reporting"
    }
];
const features9 = [
    {
        order: "order-1 lg:order-0",
        icon: "/assets/images/custom-icons/home-8-icon-01.svg",
        title: "Fast and Reliable"
    },
    {
        order: "order-0",
        icon: "/assets/images/custom-icons/home-8-icon-02.svg",
        title: "Discover Data Everywhere"
    },
    {
        order: "order-2 sm:order-1 lg:order-0",
        icon: "/assets/images/custom-icons/home-8-icon-03.svg",
        title: "Enrich Data with Context"
    },
    {
        order: "order-1 lg:order-0",
        icon: "/assets/images/custom-icons/home-8-icon-07.svg",
        title: "Risk Management"
    },
    {
        order: "order-3 lg:order-0",
        icon: "/assets/images/custom-icons/home-8-icon-05.svg",
        title: "Privacy Compliance"
    },
    {
        order: "order-2 lg:order-0",
        icon: "/assets/images/custom-icons/home-8-icon-06.svg",
        title: "Third-Party Management"
    }
];
const features10 = [
    {
        src: "/assets/images/features/home-8-feature-01.png",
        alt: "",
        title: "Seamless integrations with your app tools"
    },
    {
        src: "/assets/images/features/home-8-feature-02.png",
        alt: "",
        title: "Intuitive dashboard for at-a-glance insights"
    },
    {
        src: "/assets/images/features/home-8-feature-03.png",
        alt: "",
        title: "Get more value from your tools"
    },
    {
        src: "/assets/images/features/home-8-feature-04.png",
        alt: "",
        title: "Enrich Data with Risk Management"
    },
    {
        src: "/assets/images/features/home-8-feature-05.png",
        alt: "",
        title: "Scalable plans to fit any business size"
    },
    {
        src: "/assets/images/features/home-8-feature-06.png",
        alt: "",
        title: "Automated data analysis and reporting"
    }
];
const features11 = [
    {
        order: "order-1 lg:order-0",
        src: "/assets/images/custom-icons/home-8-icon-01.svg",
        alt: "feature-icon",
        title: "Fast and Reliable",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        order: "order-0",
        src: "/assets/images/custom-icons/home-8-icon-02.svg",
        alt: "feature-icon",
        title: "Discover Data Everywhere",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        order: "order-2 sm:order-1 lg:order-0",
        src: "/assets/images/custom-icons/home-8-icon-03.svg",
        alt: "feature-icon",
        title: "Enrich Data with Context",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        order: "order-1 lg:order-0",
        src: "/assets/images/custom-icons/home-8-icon-07.svg",
        alt: "feature-icon",
        title: "Risk Management",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        order: "order-3 lg:order-0",
        src: "/assets/images/custom-icons/home-8-icon-05.svg",
        alt: "feature-icon",
        title: "Privacy Compliance",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        order: "order-2 lg:order-0",
        src: "/assets/images/custom-icons/home-8-icon-06.svg",
        alt: "feature-icon",
        title: "Third-Party Management",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    }
];
const features12 = [
    {
        src: "/assets/images/custom-icons/icon-02.svg",
        alt: "icon",
        text: "No Credit Card Required",
        className: ""
    },
    {
        src: "/assets/images/custom-icons/icon-07.svg",
        alt: "icon",
        text: "End-to-End Encryption",
        className: ""
    },
    {
        src: "/assets/images/custom-icons/icon-02.svg",
        alt: "icon",
        text: "Cutting-edge AI features",
        className: "d-none lg:d-block"
    }
];
const features13 = [
    {
        src: "/assets/images/common/icons/zap.svg",
        alt: "feature-icon",
        title: "Fast Messaging"
    },
    {
        src: "/assets/images/common/icons/database.svg",
        alt: "feature-icon",
        title: "AI-Powered Translation"
    },
    {
        src: "/assets/images/common/icons/line-chart.svg",
        alt: "feature-icon",
        title: "Smart File Sharing"
    },
    {
        src: "/assets/images/common/icons/target.svg",
        alt: "feature-icon",
        title: "Collaboration Tools"
    },
    {
        src: "/assets/images/common/icons/settings.svg",
        alt: "feature-icon",
        title: "Customizable Privacy"
    }
];
}}),
"[project]/components/homes/home-3/Features.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Features)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$features$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/features.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
function Features() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "main_features",
        className: "main-features section panel",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel py-6 xl:py-9",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container sm:max-w-md lg:max-w-lg xl:max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel vstack gap-4 sm:gap-6 lg:gap-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$features$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["features3"].map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "feature-item panel",
                                        "data-anime": "onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "row child-cols col-match justify-between g-4 lg:g-8 xl:g-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12 sm:col-6 order-0 lg:order-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "panel w-100",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            src: feature.imgSrc,
                                                            width: 780,
                                                            height: 728,
                                                            alt: feature.altText,
                                                            className: "rounded-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-3/Features.jsx",
                                                            lineNumber: 21,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-3/Features.jsx",
                                                        lineNumber: 20,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-3/Features.jsx",
                                                    lineNumber: 19,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-12 sm:col-6 order-1 lg:order-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "panel vstack justify-between gap-4 sm:gap-6 h-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "panel vstack gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "fs-6 fw-bold m-0 text-primary",
                                                                            children: feature.step
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                            lineNumber: 34,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "h4 lg:h3 xl:h2 m-0",
                                                                            children: feature.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                            lineNumber: 37,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "fs-6 xl:fs-5 opacity-70 dark:opacity-80",
                                                                            children: feature.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                            lineNumber: 40,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        feature.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: feature.link.href,
                                                                            className: "uc-link fw-bold hstack gap-narrow",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: feature.link.text
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                                    lineNumber: 48,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                                    lineNumber: 49,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                            lineNumber: 44,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                    lineNumber: 33,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                lineNumber: 32,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 panel vstack gap-3 rounded border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "fs-6 dark:text-white",
                                                                            children: feature.testimonial.quote
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                            lineNumber: 56,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "panel hstack gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: "w-40px rounded-circle",
                                                                                    src: feature.testimonial.imgSrc,
                                                                                    width: 150,
                                                                                    height: 150,
                                                                                    alt: feature.testimonial.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                                    lineNumber: 60,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "panel vstack items-start gap-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                            className: "h6 m-0",
                                                                                            children: feature.testimonial.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                                            lineNumber: 68,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "fs-7 opacity-70",
                                                                                            children: feature.testimonial.role
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                                            lineNumber: 71,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                                    lineNumber: 67,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                            lineNumber: 59,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-3/Features.jsx",
                                                                lineNumber: 54,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/homes/home-3/Features.jsx",
                                                        lineNumber: 31,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-3/Features.jsx",
                                                    lineNumber: 30,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/homes/home-3/Features.jsx",
                                            lineNumber: 18,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-3/Features.jsx",
                                        lineNumber: 14,
                                        columnNumber: 19
                                    }, this),
                                    i !== __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$features$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["features3"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                        className: "border-gray-100 dark:border-opacity-15 m-0 opacity-100",
                                        "data-anime": "onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-3/Features.jsx",
                                        lineNumber: 83,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/homes/home-3/Features.jsx",
                                lineNumber: 13,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/homes/home-3/Features.jsx",
                        lineNumber: 11,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-3/Features.jsx",
                    lineNumber: 10,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-3/Features.jsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-3/Features.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-3/Features.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/homes/home-3/Hero.jsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/homes/home-3/Hero.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/homes/home-3/Hero.jsx <module evaluation>", "default");
}}),
"[project]/components/homes/home-3/Hero.jsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/homes/home-3/Hero.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/homes/home-3/Hero.jsx", "default");
}}),
"[project]/components/homes/home-3/Hero.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Hero$2e$jsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/homes/home-3/Hero.jsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Hero$2e$jsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/homes/home-3/Hero.jsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Hero$2e$jsx__$28$client__proxy$29$__);
}}),
"[project]/components/homes/home-3/KeyFeatures.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>KeyFeatures)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$features$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/features.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
function KeyFeatures() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "key_features",
        className: "key-features section panel overflow-hidden bg-gray-900 uc-dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel py-6 xl:py-9 dark:bg-gray-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container sm:max-w-md lg:max-w-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel vstack gap-4 sm:gap-6 xl:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto",
                                "data-anime": "onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;",
                                children: [
                                    "Review quickly and confidently using",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: " Lexend."
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                        lineNumber: 20,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                lineNumber: 15,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3",
                                    "data-anime": "onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$features$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["features4"].map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "feature-item panel p-4 border rounded-2 hover:bg-white dark:hover:bg-secondary dark:text-white dark:hover:text-gray-900 hover:scale-105 duration-150 transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "vstack panel min-h-250px",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                                            lineNumber: 31,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "vstack justify-between gap-2 h-100",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: `icon icon-4 ${feature.icon}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                                                    lineNumber: 33,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "panel",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "vstack gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "title h5 m-0 text-inherit",
                                                                                children: feature.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                                                                lineNumber: 36,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "desc fs-6 opacity-70",
                                                                                children: feature.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                                                                lineNumber: 39,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                                                        lineNumber: 35,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                                                    lineNumber: 34,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                                            lineNumber: 32,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/page-features`,
                                                            className: "position-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                                            lineNumber: 45,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                                    lineNumber: 30,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                                lineNumber: 29,
                                                columnNumber: 23
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                            lineNumber: 28,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-3/KeyFeatures.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/homes/home-3/Testimonials.jsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/homes/home-3/Testimonials.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/homes/home-3/Testimonials.jsx <module evaluation>", "default");
}}),
"[project]/components/homes/home-3/Testimonials.jsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/homes/home-3/Testimonials.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/homes/home-3/Testimonials.jsx", "default");
}}),
"[project]/components/homes/home-3/Testimonials.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Testimonials$2e$jsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/homes/home-3/Testimonials.jsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Testimonials$2e$jsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/homes/home-3/Testimonials.jsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Testimonials$2e$jsx__$28$client__proxy$29$__);
}}),
"[project]/data/blogs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "allBlogs": (()=>allBlogs),
    "articles": (()=>articles),
    "blogPosts": (()=>blogPosts),
    "blogPosts2": (()=>blogPosts2),
    "blogPosts3": (()=>blogPosts3),
    "blogPosts5": (()=>blogPosts5),
    "blogPosts6": (()=>blogPosts6),
    "blogPosts7": (()=>blogPosts7),
    "blogsPosts4": (()=>blogsPosts4),
    "posts": (()=>posts),
    "posts2": (()=>posts2),
    "slidesData": (()=>slidesData),
    "slidesData2": (()=>slidesData2)
});
const posts = [
    {
        id: 1,
        image: "/assets/images/blog/post-4.jpg",
        alt: "UX review presentations",
        title: "UX review presentations",
        category: "Strategy",
        excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?"
    },
    {
        id: 2,
        image: "/assets/images/blog/post-5.jpg",
        alt: "Migrating to Linear 101",
        title: "Migrating to Linear 101",
        category: "Strategy",
        excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
    },
    {
        id: 3,
        image: "/assets/images/blog/post-6.jpg",
        alt: "Building your API stack",
        title: "Building your API stack",
        category: "Strategy",
        excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
    },
    {
        id: 4,
        image: "/assets/images/blog/img-01.jpg",
        alt: "UX review presentations",
        title: "UX review presentations",
        category: "Strategy",
        excerpt: "Join the thousands of satisfied users and take your business to the next level today and the power."
    },
    {
        id: 5,
        image: "/assets/images/blog/img-02.jpg",
        alt: "Migrating to Linear 101",
        title: "Migrating to Linear 101",
        category: "Strategy",
        excerpt: "Help you keep track of leads, contacts, and deals, making it easier to nurture and convert."
    },
    {
        id: 6,
        image: "/assets/images/blog/post-4.jpg",
        alt: "UX review presentations",
        title: "UX review presentations",
        category: "Strategy",
        excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?"
    },
    {
        id: 7,
        image: "/assets/images/blog/post-5.jpg",
        alt: "Migrating to Linear 101",
        title: "Migrating to Linear 101",
        excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
    },
    {
        id: 8,
        image: "/assets/images/blog/post-6.jpg",
        alt: "Building your API stack",
        title: "Building your API stack",
        excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
    },
    {
        id: 9,
        image: "/assets/images/blog/img-01.jpg",
        alt: "UX review presentations",
        title: "UX review presentations",
        excerpt: "Join the thousands of satisfied users and take your business to the next level today and the power."
    },
    {
        id: 10,
        image: "/assets/images/blog/img-02.jpg",
        alt: "Migrating to Linear 101",
        title: "Migrating to Linear 101",
        excerpt: "Help you keep track of leads, contacts, and deals, making it easier to nurture and convert."
    }
];
const articles = [
    {
        id: 11,
        category: "Strategy",
        imgSrc: "/assets/images/blog/img-11.jpg",
        imgAlt: "Top 5 reasons to invest in marketing",
        title: "Top 5 reasons to invest in marketing",
        author: "David",
        authorImg: "/assets/images/avatars/02.png",
        date: "Apr 3, 2024"
    },
    {
        id: 12,
        category: "Marketing",
        imgSrc: "/assets/images/blog/img-12.jpg",
        imgAlt: "How can marketing help your business?",
        title: "How can marketing help your business?",
        author: "Allen",
        authorImg: "/assets/images/avatars/06.png",
        date: "Apr 3, 2024"
    },
    {
        id: 13,
        category: "Business",
        imgSrc: "/assets/images/blog/img-13.jpg",
        imgAlt: "The ultimate guide to marketing success",
        title: "The ultimate guide to marketing success",
        author: "Kevin",
        authorImg: "/assets/images/avatars/01.png",
        date: "Apr 1, 2024"
    }
];
const blogPosts = [
    {
        id: 14,
        category: "Strategy",
        imageSrc: "/assets/images/blog/img-11.jpg",
        imageAlt: "Top 5 reasons to invest in marketing",
        title: "Top 5 reasons to invest in marketing",
        authorImgSrc: "/assets/images/avatars/02.png",
        authorName: "David",
        date: "Apr 3, 2024"
    },
    {
        id: 15,
        category: "Marketing",
        imageSrc: "/assets/images/blog/img-12.jpg",
        imageAlt: "How can marketing help your business?",
        title: "How can marketing help your business?",
        authorImgSrc: "/assets/images/avatars/06.png",
        authorName: "Allen",
        date: "Apr 3, 2024"
    },
    {
        id: 16,
        category: "Business",
        imageSrc: "/assets/images/blog/img-13.jpg",
        imageAlt: "The ultimate guide to marketing success",
        title: "The ultimate guide to marketing success",
        authorImgSrc: "/assets/images/avatars/01.png",
        authorName: "Kevin",
        date: "Apr 1, 2024"
    }
];
const blogPosts2 = [
    {
        id: 17,
        imageSrc: "/assets/images/blog/img-01.jpg",
        altText: "UX review presentations",
        category: "Design",
        title: "UX review presentations",
        excerpt: "Join the thousands of satisfied users and take your business to the next level today and the power of streamlined business operations.",
        authorImage: "/assets/images/avatars/02.png",
        authorName: "David",
        date: "Apr 26, 2024"
    },
    {
        id: 18,
        imageSrc: "/assets/images/blog/img-02.jpg",
        altText: "Migrating to Linear 101",
        category: "Business",
        title: "Migrating to Linear 101",
        excerpt: "Help you keep track of leads, contacts, and deals, making it easier to nurture and convert prospects into loyal customers.",
        authorImage: "/assets/images/avatars/01.png",
        authorName: "Kevin",
        date: "Apr 24, 2024"
    },
    {
        id: 19,
        imageSrc: "/assets/images/blog/img-03.jpg",
        altText: "Building your API stack",
        category: "Product",
        title: "Building your API stack",
        excerpt: "You can personalize it to display the most relevant information and metrics for your business, giving you performance.",
        authorImage: "/assets/images/avatars/04.png",
        authorName: "Sarah",
        date: "Apr 22, 2024"
    }
];
const blogPosts3 = [
    {
        id: 20,
        imgSrc: "/assets/images/blog/img-02.jpg",
        alt: "Migrating to Linear 101",
        caption: "Migrating to Linear 101",
        date: "Apr 24, 2024",
        title: "Migrating to Linear 101"
    },
    {
        id: 21,
        imgSrc: "/assets/images/blog/img-03.jpg",
        alt: "Building your API stack",
        caption: "Building your API stack",
        date: "Apr 22, 2024",
        title: "Building your API stack"
    },
    {
        id: 22,
        imgSrc: "/assets/images/blog/img-04.jpg",
        alt: "UX review presentations",
        caption: "UX review presentations",
        date: "Apr 26, 2024",
        title: "UX review presentations"
    },
    {
        id: 23,
        imgSrc: "/assets/images/blog/img-05.jpg",
        alt: "Migrating to Linear 101",
        caption: "Migrating to Linear 101",
        date: "Apr 24, 2024",
        title: "Migrating to Linear 101"
    },
    {
        id: 24,
        imgSrc: "/assets/images/blog/img-06.jpg",
        alt: "Building your API stack",
        caption: "Building your API stack",
        date: "Apr 22, 2024",
        title: "Building your API stack"
    },
    {
        id: 25,
        imgSrc: "/assets/images/blog/img-07.jpg",
        alt: "UX review presentations",
        caption: "UX review presentations",
        date: "Apr 26, 2024",
        title: "UX review presentations"
    }
];
const blogsPosts4 = [
    {
        id: 26,
        category: "Strategy",
        imgSrc: "/assets/images/blog/img-01.jpg",
        imgAlt: "Top 5 reasons to invest in marketing",
        imgCaption: "Top 5 reasons to invest in marketing",
        title: "Top 5 reasons to invest in marketing",
        authorImg: "/assets/images/avatars/02.png",
        authorAlt: "David",
        desc: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
        authorName: "David",
        date: "Apr 26, 2024"
    },
    {
        id: 27,
        category: "Business",
        imgSrc: "/assets/images/blog/img-02.jpg",
        imgAlt: "How can marketing help your business?",
        imgCaption: "How can marketing help your business?",
        title: "How can marketing help your business?",
        authorImg: "/assets/images/avatars/01.png",
        authorAlt: "Kevin",
        desc: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
        authorName: "Kevin",
        date: "Apr 24, 2024"
    },
    {
        id: 28,
        category: "Marketing",
        imgSrc: "/assets/images/blog/img-03.jpg",
        imgAlt: "The ultimate guide to marketing success",
        imgCaption: "The ultimate guide to marketing success",
        title: "The ultimate guide to marketing success",
        authorImg: "/assets/images/avatars/04.png",
        authorAlt: "Sarah",
        desc: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
        authorName: "Sarah",
        date: "Apr 22, 2024"
    },
    {
        id: 29,
        category: "Strategy",
        imgSrc: "/assets/images/blog/img-04.jpg",
        imgAlt: "A comprehensive guide to marketing",
        imgCaption: "A comprehensive guide to marketing",
        title: "A comprehensive guide to marketing",
        authorImg: "/assets/images/avatars/04.png",
        authorAlt: "Amir",
        desc: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
        authorName: "Amir",
        date: "Apr 20, 2024"
    },
    {
        id: 30,
        category: "Strategy",
        imgSrc: "/assets/images/blog/img-05.jpg",
        imgAlt: "Maximizing your reach with marketing strategies",
        imgCaption: "Maximizing your reach with marketing strategies",
        title: "Maximizing your reach with marketing strategies",
        authorImg: "/assets/images/avatars/02.png",
        authorAlt: "David",
        desc: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
        authorName: "David",
        date: "Apr 15, 2024"
    },
    {
        id: 31,
        category: "Marketing",
        imgSrc: "/assets/images/blog/img-06.jpg",
        imgAlt: "Top 5 reasons to invest in marketing",
        imgCaption: "Top 5 reasons to invest in marketing",
        title: "Top 5 reasons to invest in marketing",
        authorImg: "/assets/images/avatars/04.png",
        authorAlt: "Sarah",
        desc: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
        authorName: "Sarah",
        date: "Apr 12, 2024"
    },
    {
        id: 32,
        category: "Boost",
        imgSrc: "/assets/images/blog/img-07.jpg",
        imgAlt: "How can marketing help your business?",
        imgCaption: "How can marketing help your business?",
        title: "How can marketing help your business?",
        authorImg: "/assets/images/avatars/01.png",
        authorAlt: "Kevin",
        desc: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
        authorName: "Kevin",
        date: "Apr 12, 2024"
    },
    {
        id: 33,
        category: "Advertising",
        imgSrc: "/assets/images/blog/img-08.jpg",
        imgAlt: "The ultimate guide to marketing success",
        imgCaption: "The ultimate guide to marketing success",
        title: "The ultimate guide to marketing success",
        authorImg: "/assets/images/avatars/07.png",
        authorAlt: "Amir",
        desc: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
        authorName: "Amir",
        date: "Apr 10, 2024"
    },
    {
        id: 34,
        category: "Strategy",
        imgSrc: "/assets/images/blog/img-09.jpg",
        imgAlt: "A comprehensive guide to marketing",
        imgCaption: "A comprehensive guide to marketing",
        title: "A comprehensive guide to marketing",
        authorImg: "/assets/images/avatars/07.png",
        authorAlt: "Amir",
        desc: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
        authorName: "Amir",
        date: "Apr 8, 2024"
    },
    {
        id: 35,
        category: "Advertising",
        imgSrc: "/assets/images/blog/img-10.jpg",
        imgAlt: "Maximizing your reach with marketing strategies",
        imgCaption: "Maximizing your reach with marketing strategies",
        title: "Maximizing your reach with marketing strategies",
        authorImg: "/assets/images/avatars/06.png",
        authorAlt: "Allen",
        desc: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
        authorName: "Allen",
        date: "Apr 4, 2024"
    },
    {
        id: 36,
        category: "Strategy",
        imgSrc: "/assets/images/blog/img-11.jpg",
        imgAlt: "Top 5 reasons to invest in marketing",
        imgCaption: "Top 5 reasons to invest in marketing",
        title: "Top 5 reasons to invest in marketing",
        authorImg: "/assets/images/avatars/03.png",
        authorAlt: "Allen",
        desc: "Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit..",
        authorName: "Allen",
        date: "Apr 3, 2024"
    }
];
const blogPosts5 = [
    {
        id: 37,
        title: "UX review presentations",
        imgSrc: "/assets/images/blog/img-01.jpg",
        imageAlt: "UX review presentations",
        excerpt: "Join the thousands of satisfied users and take your business to the next level today and the power of streamlined business operations.",
        authorName: "David",
        authorImage: "/assets/images/avatars/02.png",
        date: "Apr 26, 2024"
    }
];
const slidesData = [
    {
        id: 38,
        imgSrc: "/assets/images/blog/post-4.jpg",
        title: "Unlock productivity potential with AI",
        excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?"
    },
    {
        id: 39,
        imgSrc: "/assets/images/blog/post-5.jpg",
        title: "Automate as fast as you can type with AI",
        excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
    },
    {
        id: 40,
        imgSrc: "/assets/images/blog/post-6.jpg",
        title: "Intuitive & powerful AI automation app",
        excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
    },
    {
        id: 41,
        imgSrc: "/assets/images/blog/img-01.jpg",
        title: "Team solve today’s biggest challenges",
        excerpt: "Join the thousands of satisfied users and take your business to the next level today and the power."
    },
    {
        id: 42,
        imgSrc: "/assets/images/blog/img-02.jpg",
        title: "Leading work from tasks management",
        excerpt: "Help you keep track of leads, contacts, and deals, making it easier to nurture and convert."
    }
];
const slidesData2 = [
    {
        id: 43,
        imgSrc: "/assets/images/blog/post-4.jpg",
        title: "Unlock productivity potential with AI",
        excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?"
    },
    {
        id: 44,
        imgSrc: "/assets/images/blog/post-5.jpg",
        title: "Automate as fast as you can type with AI",
        excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started."
    },
    {
        id: 45,
        imgSrc: "/assets/images/blog/post-6.jpg",
        title: "Intuitive & powerful AI automation app",
        excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
    },
    {
        id: 46,
        imgSrc: "/assets/images/blog/img-01.jpg",
        title: "Team solve today’s biggest challenges",
        excerpt: "Join the thousands of satisfied users and take your business to the next level today and the power."
    },
    {
        id: 47,
        imgSrc: "/assets/images/blog/img-02.jpg",
        title: "Leading work from tasks management",
        excerpt: "Help you keep track of leads, contacts, and deals, making it easier to nurture and convert."
    }
];
const blogPosts6 = [
    {
        id: 48,
        imgSrc: "/assets/images/blog/post-4.jpg",
        alt: "Unlock productivity potential with AI",
        title: "Unlock productivity potential with AI"
    },
    {
        id: 49,
        imgSrc: "/assets/images/blog/post-5.jpg",
        alt: "Automate as fast as you can type with AI",
        title: "Automate as fast as you can type with AI"
    },
    {
        id: 50,
        imgSrc: "/assets/images/blog/post-6.jpg",
        alt: "Intuitive & powerful AI automation app",
        title: "Intuitive & powerful AI automation app"
    },
    {
        id: 51,
        imgSrc: "/assets/images/blog/img-01.jpg",
        alt: "Team solve today’s biggest challenges",
        title: "Team solve today’s biggest challenges"
    },
    {
        id: 52,
        imgSrc: "/assets/images/blog/img-02.jpg",
        alt: "Leading work from tasks management",
        title: "Leading work from tasks management"
    }
];
const posts2 = [
    {
        id: 53,
        title: "Virtual Reality and Mental Health: Exploring the Therapeutic",
        date: "2mo ago",
        comments: 290
    },
    {
        id: 54,
        title: "The Future of Sustainable Living: Driving Eco-Friendly Lifestyles",
        date: "2mo ago",
        comments: 1
    },
    {
        id: 55,
        title: "Smart Homes, Smarter Living: Exploring IoT and AI",
        date: "23d ago",
        comments: 15
    },
    {
        id: 56,
        title: "How Businesses Are Adapting to E-Commerce and AI Integration",
        date: "29d ago",
        comments: 20
    }
];
const blogPosts7 = [
    {
        id: 57,
        imgSrc: "/assets/images/blog/post-6.jpg",
        imgAlt: "Pixar Unveils Disney Land of the Dead in New",
        title: "Pixar Unveils Disney Land of the Dead in New",
        description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laliqua.."
    }
];
const allBlogs = [
    ...posts,
    ...articles,
    ...blogPosts,
    ...blogPosts2,
    ...blogPosts3,
    ...blogsPosts4,
    ...blogPosts5,
    ...slidesData,
    ...slidesData2,
    ...blogPosts6,
    ...posts2,
    ...blogPosts7
];
}}),
"[project]/components/homes/home-3/Blog.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Blog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$blogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/blogs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
function Blog() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "blog_posts",
        className: "section panel overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel pb-6 xl:pb-9",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel vstack items-center gap-4 sm:gap-6 xl:gap-8",
                        "data-anime": "onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "h3 lg:h2 xl:h1 max-w-400px lg:max-w-750px m-auto text-center",
                                children: "Gain valuable insights"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-3/Blog.jsx",
                                lineNumber: 16,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2 xl:g-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$blogs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogPosts"].map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1",
                                                        href: `/blog`,
                                                        style: {
                                                            borderRadius: 8
                                                        },
                                                        children: post.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                        lineNumber: 24,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                        className: "featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "media-cover image uc-transition-scale-up uc-transition-opaque",
                                                                src: post.imageSrc,
                                                                width: 1280,
                                                                height: 854,
                                                                alt: post.imageAlt
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                lineNumber: 32,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/blog-details/${post.id}`,
                                                                className: "position-cover",
                                                                "data-caption": post.imageAlt
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                lineNumber: 39,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                        lineNumber: 31,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                        className: "panel vstack items-center gap-1 lg:gap-2 px-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "h5 xl:h4 m-0 text-center m-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "text-none",
                                                                    href: `/blog-details/${post.id}`,
                                                                    children: post.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                    lineNumber: 47,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                lineNumber: 46,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "hstack gap-narrow ft-tertiary",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: post.authorImgSrc,
                                                                                    width: 150,
                                                                                    height: 150,
                                                                                    alt: post.authorName,
                                                                                    className: "w-24px h-24px rounded-circle me-narrow"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                                    lineNumber: 57,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: `/blog-author/Amir Khan`,
                                                                                    className: "text-none fw-bold text-dark dark:text-white",
                                                                                    children: post.authorName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                                    lineNumber: 64,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                            lineNumber: 56,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                        lineNumber: 55,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "opacity-50",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                        lineNumber: 72,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "post-date hstack gap-narrow",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: post.date
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                                lineNumber: 75,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                            lineNumber: 74,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                        lineNumber: 73,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                                lineNumber: 54,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                        lineNumber: 45,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/homes/home-3/Blog.jsx",
                                                lineNumber: 23,
                                                columnNumber: 23
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/components/homes/home-3/Blog.jsx",
                                            lineNumber: 22,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-3/Blog.jsx",
                                    lineNumber: 20,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-3/Blog.jsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homes/home-3/Blog.jsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-3/Blog.jsx",
                    lineNumber: 11,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-3/Blog.jsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-3/Blog.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-3/Blog.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/homes/home-3/Cta.jsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/homes/home-3/Cta.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/homes/home-3/Cta.jsx <module evaluation>", "default");
}}),
"[project]/components/homes/home-3/Cta.jsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/homes/home-3/Cta.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/homes/home-3/Cta.jsx", "default");
}}),
"[project]/components/homes/home-3/Cta.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Cta$2e$jsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/homes/home-3/Cta.jsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Cta$2e$jsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/homes/home-3/Cta.jsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Cta$2e$jsx__$28$client__proxy$29$__);
}}),
"[project]/components/common/Brands2.jsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/common/Brands2.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/common/Brands2.jsx <module evaluation>", "default");
}}),
"[project]/components/common/Brands2.jsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/common/Brands2.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/common/Brands2.jsx", "default");
}}),
"[project]/components/common/Brands2.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Brands2$2e$jsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/common/Brands2.jsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Brands2$2e$jsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/common/Brands2.jsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Brands2$2e$jsx__$28$client__proxy$29$__);
}}),
"[project]/app/(homes)/home-3/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>HomePage3),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$headers$2f$Header2$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/headers/Header2.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Pricing$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/common/Pricing.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Brands$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/homes/home-3/Brands.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Features$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/homes/home-3/Features.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Hero$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/homes/home-3/Hero.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$KeyFeatures$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/homes/home-3/KeyFeatures.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Testimonials$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/homes/home-3/Testimonials.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Blog$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/homes/home-3/Blog.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Cta$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/homes/home-3/Cta.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footers$2f$Footer2$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/footers/Footer2.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Brands2$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/common/Brands2.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const metadata = {
    title: "Home 3 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
    description: "Lexend - Full-featured, professional-looking software, saas and startup nextjs template."
};
function HomePage3() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$headers$2f$Header2$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(homes)/home-3/page.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "wrapper",
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Hero$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(homes)/home-3/page.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Brands$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(homes)/home-3/page.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Features$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(homes)/home-3/page.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$KeyFeatures$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(homes)/home-3/page.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Pricing$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(homes)/home-3/page.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Testimonials$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(homes)/home-3/page.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "clients_brands",
                            className: "clients-brands section panel overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8",
                                        "data-anime": "onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;",
                                        children: "Trusted by well-known brands."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(homes)/home-3/page.jsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "block-panel panel",
                                        "data-anime": "onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "element-brands max-w-950px m-auto text-gray-900 dark:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Brands2$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/app/(homes)/home-3/page.jsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(homes)/home-3/page.jsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(homes)/home-3/page.jsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(homes)/home-3/page.jsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(homes)/home-3/page.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Blog$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(homes)/home-3/page.jsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$homes$2f$home$2d$3$2f$Cta$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(homes)/home-3/page.jsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(homes)/home-3/page.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footers$2f$Footer2$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(homes)/home-3/page.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(homes)/home-3/page.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}}),
"[project]/app/(homes)/home-3/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/app/(homes)/home-3/page.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/(homes)/home-3/page/actions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_410b4a._.js.map