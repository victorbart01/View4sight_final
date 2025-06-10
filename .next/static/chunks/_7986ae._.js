(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_7986ae._.js", {

"[project]/data/services.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "featuresMenu": (()=>featuresMenu),
    "services": (()=>services)
});
const services = [
    "Service-based Business",
    "Marketing Automation",
    "Project Management Software",
    "Cloud-Based Solutions",
    "Start-ups",
    "Developers"
];
const featuresMenu = [
    {
        href: "/page-features",
        iconClass: "unicon-checkmark",
        title: "To-Do List",
        description: "Managing multiple software and tools for different tasks."
    },
    {
        href: "/page-features",
        iconClass: "unicon-chart-pie",
        title: "Reports",
        description: "The latest industry reports, updates and info."
    },
    {
        href: "/page-features",
        iconClass: "unicon-increase-level",
        title: "Spreadsheets",
        description: "Suite of tools that cover all aspects of your business."
    },
    {
        href: "/page-features",
        iconClass: "unicon-chart-venn-diagram",
        title: "Collaboration",
        description: "Assign tasks, share files, and communicate with your team."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/view4sight/Header.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>View4SightHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleMobileMenu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleContactModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleContactModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$services$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/services.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
// Contenu View4Sight pour le sous-menu Fonctionnalités
const view4sightFeatures = [
    {
        href: "/fonctionnalites",
        icon: "/assets/images/custom-icons/visualisation-3d.svg",
        title: "Visualize",
        description: "Navigate massive datasets"
    },
    {
        href: "/fonctionnalites",
        icon: "/assets/images/custom-icons/mesure-annotations.svg",
        title: "Measure",
        description: "Survey-grade precision"
    },
    {
        href: "/fonctionnalites",
        icon: "/assets/images/custom-icons/collaboration.svg",
        title: "Collaborate",
        description: "Work together live"
    },
    {
        href: "/fonctionnalites",
        icon: "/assets/images/custom-icons/upload-share.svg",
        title: "Secure",
        description: "Control & protect"
    }
];
// Contenu View4Sight pour le sous-menu Ressources
const view4sightResources = [
    {
        href: "/ressources/usecases",
        icon: "/assets/images/common/icons/target.svg",
        title: "Usecases",
        description: "Cas d'usage"
    },
    {
        href: "/ressources/tutorials",
        icon: "/assets/images/common/icons/video.svg",
        title: "Tutorials",
        description: "Tutoriels vidéo"
    },
    {
        href: "/ressources/blog",
        icon: "/assets/images/common/icons/blog.svg",
        title: "Blog",
        description: "Articles & actualités"
    },
    {
        href: "/ressources/careers",
        icon: "/assets/images/common/icons/account.svg",
        title: "Recrutement",
        description: "Rejoignez l'équipe"
    }
];
function View4SightHeader() {
    _s();
    const prevScrollPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const ticking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [scrollingUp, setScrollingUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "View4SightHeader.useEffect": ()=>{
            const handleScroll = {
                "View4SightHeader.useEffect.handleScroll": ()=>{
                    if (!ticking.current) {
                        requestAnimationFrame({
                            "View4SightHeader.useEffect.handleScroll": ()=>{
                                const currentScrollPos = window.scrollY;
                                const isScrollingUp = currentScrollPos < prevScrollPos.current;
                                if (currentScrollPos <= 80) {
                                    setScrollingUp(false);
                                } else if (isScrollingUp !== scrollingUp) {
                                    setScrollingUp(isScrollingUp);
                                }
                                prevScrollPos.current = currentScrollPos;
                                ticking.current = false;
                            }
                        }["View4SightHeader.useEffect.handleScroll"]);
                        ticking.current = true;
                    }
                }
            }["View4SightHeader.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "View4SightHeader.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["View4SightHeader.useEffect"];
        }
    }["View4SightHeader.useEffect"], [
        scrollingUp
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "2ccaea23cd19e743",
                children: ".nav-hover-effect.jsx-851ae5af04836e9a{border-radius:.5rem!important;padding:.5rem .75rem!important;transition:all .2s!important}.nav-hover-effect.jsx-851ae5af04836e9a:hover{background-color:#0000000d!important}.dark .nav-hover-effect.jsx-851ae5af04836e9a:hover{background-color:#ffffff1a!important}:hover.demo-hover-effect .mockup-container{transform:translateY(-2px)!important;box-shadow:0 6px 20px #00000014!important}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-851ae5af04836e9a" + " " + `uc-header header-default uc-navbar-sticky-wrap z-999 uc-sticky ${scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "jsx-851ae5af04836e9a" + " " + `uc-navbar-container uc-navbar-float ft-tertiary z-1 ${scrollingUp ? "uc-navbar-sticky" : "uc-navbar-transparent"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-851ae5af04836e9a" + " " + "container max-w-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-851ae5af04836e9a" + " " + "uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-851ae5af04836e9a" + " " + "uc-navbar-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-851ae5af04836e9a" + " " + "uc-logo text-dark dark:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "panel text-none",
                                                href: `/view4sight`,
                                                style: {
                                                    width: 160
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "d-block dark:d-none",
                                                        alt: "View4Sight",
                                                        src: "/assets/images/logo_v4s_dark.png",
                                                        width: "160",
                                                        height: "40",
                                                        style: {
                                                            height: "40px",
                                                            objectFit: "contain"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "d-none dark:d-block",
                                                        alt: "View4Sight Light",
                                                        src: "/assets/images/logo_v4s_light.png",
                                                        width: "160",
                                                        height: "40",
                                                        style: {
                                                            height: "40px",
                                                            objectFit: "contain"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "jsx-851ae5af04836e9a" + " " + "uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: {
                                                        position: "relative"
                                                    },
                                                    className: "jsx-851ae5af04836e9a" + " " + "has-dd-menu",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            role: "button",
                                                            "aria-haspopup": "true",
                                                            className: "jsx-851ae5af04836e9a" + " " + "nav-hover-effect text-none",
                                                            children: [
                                                                "Features",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-uc-navbar-parent-icon": "",
                                                                    className: "jsx-851ae5af04836e9a" + " " + "uc-icon uc-navbar-parent-icon",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: 12,
                                                                        height: 12,
                                                                        viewBox: "0 0 12 12",
                                                                        className: "jsx-851ae5af04836e9a",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            fill: "none",
                                                                            stroke: "#000",
                                                                            strokeWidth: "1.1",
                                                                            points: "1 3.5 6 8.5 11 3.5",
                                                                            className: "jsx-851ae5af04836e9a"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 167,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 160,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-uc-drop": "mode: click; offset: -8; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150; pos: bottom-right;",
                                                            style: {
                                                                border: "1px solid rgba(0, 0, 0, 0.15)",
                                                                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
                                                                borderRadius: "12px",
                                                                width: "750px",
                                                                backgroundColor: "#ffffff"
                                                            },
                                                            className: "jsx-851ae5af04836e9a" + " " + "uc-navbar-dropdown ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar overflow-hidden uc-drop",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-851ae5af04836e9a" + " " + "row child-cols-6 g-0 col-match",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-851ae5af04836e9a",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-851ae5af04836e9a" + " " + "p-2 h-100 d-flex flex-column justify-content-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    gap: "8px"
                                                                                },
                                                                                className: "jsx-851ae5af04836e9a" + " " + "d-flex flex-column",
                                                                                children: view4sightFeatures.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        className: "d-flex align-items-center text-none rounded-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 p-1",
                                                                                        href: feature.href,
                                                                                        style: {
                                                                                            gap: "14px"
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                style: {
                                                                                                    width: "44px",
                                                                                                    height: "44px",
                                                                                                    borderRadius: "10px",
                                                                                                    backgroundColor: "rgba(254, 85, 46, 0.1)",
                                                                                                    border: "1px solid rgba(254, 85, 46, 0.2)",
                                                                                                    flexShrink: 0,
                                                                                                    position: "relative"
                                                                                                },
                                                                                                className: "jsx-851ae5af04836e9a" + " " + "d-flex align-items-center justify-content-center",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    src: feature.icon,
                                                                                                    alt: feature.title,
                                                                                                    width: 22,
                                                                                                    height: 22,
                                                                                                    style: {
                                                                                                        width: "22px",
                                                                                                        height: "22px",
                                                                                                        filter: "brightness(0) saturate(100%) invert(38%) sepia(77%) saturate(2618%) hue-rotate(343deg) brightness(101%) contrast(94%)",
                                                                                                        display: "block",
                                                                                                        margin: "auto",
                                                                                                        position: "absolute",
                                                                                                        top: "50%",
                                                                                                        left: "50%",
                                                                                                        transform: "translate(-50%, -50%)"
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                    lineNumber: 207,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                lineNumber: 198,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "jsx-851ae5af04836e9a" + " " + "d-flex flex-column justify-content-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        style: {
                                                                                                            fontSize: "15px",
                                                                                                            lineHeight: "1.2",
                                                                                                            color: "#1e293b",
                                                                                                            marginBottom: "2px"
                                                                                                        },
                                                                                                        className: "jsx-851ae5af04836e9a" + " " + "fw-bold m-0 dark:text-white",
                                                                                                        children: feature.title
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                        lineNumber: 226,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        style: {
                                                                                                            fontSize: "12px",
                                                                                                            lineHeight: "1.3",
                                                                                                            color: "rgba(255, 255, 255, 0.7)"
                                                                                                        },
                                                                                                        className: "jsx-851ae5af04836e9a" + " " + "m-0",
                                                                                                        children: feature.description
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                        lineNumber: 234,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                lineNumber: 225,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, index, true, {
                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                        lineNumber: 192,
                                                                                        columnNumber: 35
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                lineNumber: 190,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 189,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-851ae5af04836e9a",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/tarifs",
                                                                            className: "text-none d-block h-100 demo-hover-effect",
                                                                            style: {
                                                                                textDecoration: "none"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                                                                                    borderRadius: "0 12px 12px 0",
                                                                                    cursor: "pointer",
                                                                                    transition: "all 0.3s ease"
                                                                                },
                                                                                className: "jsx-851ae5af04836e9a" + " " + "p-2 h-100 d-flex flex-column justify-content-center transition-all demo-background",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-851ae5af04836e9a" + " " + "text-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                width: "320px",
                                                                                                height: "200px",
                                                                                                border: "1px solid #e2e8f0",
                                                                                                borderRadius: "8px",
                                                                                                transition: "all 0.3s ease"
                                                                                            },
                                                                                            className: "jsx-851ae5af04836e9a" + " " + "position-relative overflow-hidden bg-white shadow-sm mx-auto mb-4 mockup-container",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    style: {
                                                                                                        background: "#f8fafc",
                                                                                                        borderBottom: "1px solid #e2e8f0",
                                                                                                        height: "28px"
                                                                                                    },
                                                                                                    className: "jsx-851ae5af04836e9a" + " " + "position-relative px-3 py-1",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            style: {
                                                                                                                gap: "4px",
                                                                                                                left: "8px",
                                                                                                                top: "50%",
                                                                                                                transform: "translateY(-50%)"
                                                                                                            },
                                                                                                            className: "jsx-851ae5af04836e9a" + " " + "d-flex position-absolute",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    style: {
                                                                                                                        width: "6px",
                                                                                                                        height: "6px",
                                                                                                                        borderRadius: "50%",
                                                                                                                        backgroundColor: "#ff5f57"
                                                                                                                    },
                                                                                                                    className: "jsx-851ae5af04836e9a"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                                    lineNumber: 280,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    style: {
                                                                                                                        width: "6px",
                                                                                                                        height: "6px",
                                                                                                                        borderRadius: "50%",
                                                                                                                        backgroundColor: "#ffbd2e"
                                                                                                                    },
                                                                                                                    className: "jsx-851ae5af04836e9a"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                                    lineNumber: 281,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    style: {
                                                                                                                        width: "6px",
                                                                                                                        height: "6px",
                                                                                                                        borderRadius: "50%",
                                                                                                                        backgroundColor: "#28ca42"
                                                                                                                    },
                                                                                                                    className: "jsx-851ae5af04836e9a"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                                    lineNumber: 282,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                            lineNumber: 274,
                                                                                                            columnNumber: 39
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            style: {
                                                                                                                background: "white",
                                                                                                                border: "1px solid #e2e8f0",
                                                                                                                borderRadius: "4px",
                                                                                                                fontSize: "9px",
                                                                                                                color: "#64748b",
                                                                                                                textAlign: "center",
                                                                                                                height: "18px",
                                                                                                                lineHeight: "16px",
                                                                                                                width: "140px",
                                                                                                                left: "50%",
                                                                                                                top: "50%",
                                                                                                                transform: "translate(-50%, -50%)"
                                                                                                            },
                                                                                                            className: "jsx-851ae5af04836e9a" + " " + "position-absolute px-3",
                                                                                                            children: "view4sight.com"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                            lineNumber: 284,
                                                                                                            columnNumber: 39
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                    lineNumber: 269,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    style: {
                                                                                                        height: "172px"
                                                                                                    },
                                                                                                    className: "jsx-851ae5af04836e9a" + " " + "position-relative",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                        src: "/assets/images/mockup-view4sight.png",
                                                                                                        alt: "Interface View4Sight - Cathédrale de Chartes",
                                                                                                        width: 320,
                                                                                                        height: 172,
                                                                                                        style: {
                                                                                                            width: "100%",
                                                                                                            height: "100%",
                                                                                                            objectFit: "cover",
                                                                                                            objectPosition: "center top",
                                                                                                            transition: "all 0.3s ease"
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                        lineNumber: 304,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                    lineNumber: 303,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                            lineNumber: 261,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                            style: {
                                                                                                fontSize: "18px",
                                                                                                color: "#1e293b",
                                                                                                lineHeight: "1.3",
                                                                                                transition: "color 0.3s ease"
                                                                                            },
                                                                                            className: "jsx-851ae5af04836e9a" + " " + "fw-bold mb-2",
                                                                                            children: "View4Sight"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                            lineNumber: 321,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            style: {
                                                                                                fontSize: "14px",
                                                                                                color: "#64748b",
                                                                                                lineHeight: "1.4",
                                                                                                transition: "color 0.3s ease"
                                                                                            },
                                                                                            className: "jsx-851ae5af04836e9a" + " " + "m-0",
                                                                                            children: "Disponible directement dans votre navigateur"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                            lineNumber: 329,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                    lineNumber: 259,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                lineNumber: 253,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 248,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                lineNumber: 187,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 176,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-851ae5af04836e9a",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "text-none nav-hover-effect",
                                                        href: "/page-pricing",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-851ae5af04836e9a",
                                                            children: "Pricing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 346,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 345,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 344,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-851ae5af04836e9a",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "text-none nav-hover-effect",
                                                        href: "/securite",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-851ae5af04836e9a",
                                                            children: "Security"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 351,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 350,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 349,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: {
                                                        position: "relative"
                                                    },
                                                    className: "jsx-851ae5af04836e9a" + " " + "has-dd-menu",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            role: "button",
                                                            "aria-haspopup": "true",
                                                            className: "jsx-851ae5af04836e9a" + " " + "nav-hover-effect text-none",
                                                            children: [
                                                                "Ressources",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-uc-navbar-parent-icon": "",
                                                                    className: "jsx-851ae5af04836e9a" + " " + "uc-icon uc-navbar-parent-icon",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: 12,
                                                                        height: 12,
                                                                        viewBox: "0 0 12 12",
                                                                        className: "jsx-851ae5af04836e9a",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            fill: "none",
                                                                            stroke: "#000",
                                                                            strokeWidth: "1.1",
                                                                            points: "1 3.5 6 8.5 11 3.5",
                                                                            className: "jsx-851ae5af04836e9a"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 362,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 361,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                    lineNumber: 357,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 355,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-uc-drop": "mode: click; offset: -8; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150; pos: bottom-right;",
                                                            style: {
                                                                border: "1px solid rgba(0, 0, 0, 0.15)",
                                                                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
                                                                borderRadius: "12px",
                                                                width: "700px",
                                                                backgroundColor: "#ffffff"
                                                            },
                                                            className: "jsx-851ae5af04836e9a" + " " + "uc-navbar-dropdown ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar overflow-hidden uc-drop",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-851ae5af04836e9a" + " " + "row g-0 col-match",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-851ae5af04836e9a" + " " + "col-5",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-851ae5af04836e9a" + " " + "px-2 py-1 h-100 d-flex flex-column justify-content-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    gap: "6px"
                                                                                },
                                                                                className: "jsx-851ae5af04836e9a" + " " + "d-flex flex-column",
                                                                                children: view4sightResources.map((resource, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        className: "d-flex align-items-center text-none rounded-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 p-1",
                                                                                        href: resource.href,
                                                                                        style: {
                                                                                            gap: "10px"
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                style: {
                                                                                                    width: "44px",
                                                                                                    height: "44px",
                                                                                                    borderRadius: "10px",
                                                                                                    backgroundColor: "rgba(254, 85, 46, 0.1)",
                                                                                                    border: "1px solid rgba(254, 85, 46, 0.2)",
                                                                                                    flexShrink: 0,
                                                                                                    position: "relative"
                                                                                                },
                                                                                                className: "jsx-851ae5af04836e9a" + " " + "d-flex align-items-center justify-content-center",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    src: resource.icon,
                                                                                                    alt: resource.title,
                                                                                                    width: 22,
                                                                                                    height: 22,
                                                                                                    style: {
                                                                                                        width: "22px",
                                                                                                        height: "22px",
                                                                                                        filter: "brightness(0) saturate(100%) invert(38%) sepia(77%) saturate(2618%) hue-rotate(343deg) brightness(101%) contrast(94%)",
                                                                                                        display: "block",
                                                                                                        margin: "auto",
                                                                                                        position: "absolute",
                                                                                                        top: "50%",
                                                                                                        left: "50%",
                                                                                                        transform: "translate(-50%, -50%)"
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                    lineNumber: 402,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                lineNumber: 393,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "jsx-851ae5af04836e9a" + " " + "d-flex flex-column justify-content-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        style: {
                                                                                                            fontSize: "15px",
                                                                                                            lineHeight: "1.2",
                                                                                                            color: "#1e293b",
                                                                                                            marginBottom: "2px"
                                                                                                        },
                                                                                                        className: "jsx-851ae5af04836e9a" + " " + "fw-bold m-0 dark:text-white",
                                                                                                        children: resource.title
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                        lineNumber: 421,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        style: {
                                                                                                            fontSize: "12px",
                                                                                                            lineHeight: "1.3",
                                                                                                            color: "#64748b"
                                                                                                        },
                                                                                                        className: "jsx-851ae5af04836e9a" + " " + "m-0",
                                                                                                        children: resource.description
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                        lineNumber: 429,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                lineNumber: 420,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, index, true, {
                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                        lineNumber: 387,
                                                                                        columnNumber: 35
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                lineNumber: 385,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 384,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 383,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-851ae5af04836e9a" + " " + "col-7",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                gap: "0px"
                                                                            },
                                                                            className: "jsx-851ae5af04836e9a" + " " + "d-flex flex-column h-100",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/ressources/support",
                                                                                    className: "text-none d-block demo-hover-effect",
                                                                                    style: {
                                                                                        textDecoration: "none",
                                                                                        flex: "1"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            background: "#222222",
                                                                                            borderRadius: "0 12px 0 0",
                                                                                            cursor: "pointer",
                                                                                            transition: "all 0.3s ease",
                                                                                            minHeight: "70px"
                                                                                        },
                                                                                        className: "jsx-851ae5af04836e9a" + " " + "p-2 h-100 d-flex align-items-center justify-content-center transition-all support-hover",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            src: "/assets/images/support-mockup.svg",
                                                                                            alt: "Centre d'aide",
                                                                                            width: 180,
                                                                                            height: 60,
                                                                                            style: {
                                                                                                maxWidth: "100%",
                                                                                                height: "auto"
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                            lineNumber: 457,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                        lineNumber: 450,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                    lineNumber: 445,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/ressources/docs",
                                                                                    className: "text-none d-block demo-hover-effect",
                                                                                    style: {
                                                                                        textDecoration: "none",
                                                                                        flex: "1"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            background: "#222222",
                                                                                            borderRadius: "0 0 12px 0",
                                                                                            cursor: "pointer",
                                                                                            transition: "all 0.3s ease",
                                                                                            minHeight: "70px"
                                                                                        },
                                                                                        className: "jsx-851ae5af04836e9a" + " " + "p-2 h-100 d-flex align-items-center justify-content-center transition-all docs-hover",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            src: "/assets/images/docs-mockup.svg",
                                                                                            alt: "Documentation",
                                                                                            width: 180,
                                                                                            height: 60,
                                                                                            style: {
                                                                                                maxWidth: "100%",
                                                                                                height: "auto"
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                            lineNumber: 483,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                        lineNumber: 476,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                    lineNumber: 471,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 443,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 442,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                lineNumber: 382,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 371,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 354,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/view4sight/Header.jsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-851ae5af04836e9a" + " " + "uc-navbar-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-851ae5af04836e9a" + " " + "d-none xl:d-block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleContactModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openContactModal"],
                                                role: "button",
                                                className: "jsx-851ae5af04836e9a" + " " + "text-none fw-medium nav-hover-effect",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-851ae5af04836e9a",
                                                    children: "Request a demo"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 511,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                lineNumber: 506,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 505,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-851ae5af04836e9a" + " " + "d-none lg:d-block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "text-none fw-medium nav-hover-effect",
                                                href: `/sign-in`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-851ae5af04836e9a",
                                                    children: "Log in"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 518,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                lineNumber: 517,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 516,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex",
                                            href: `/page-pricing`,
                                            children: "Start free trial"
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 523,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openMobileMenu"],
                                            className: "jsx-851ae5af04836e9a" + " " + "d-block lg:d-none uc-icon uc-navbar-toggle-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 20,
                                                height: 20,
                                                viewBox: "0 0 20 20",
                                                className: "jsx-851ae5af04836e9a",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        y: 3,
                                                        width: 20,
                                                        height: 2,
                                                        className: "jsx-851ae5af04836e9a" + " " + "line-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 536,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        y: 9,
                                                        width: 20,
                                                        height: 2,
                                                        className: "jsx-851ae5af04836e9a" + " " + "line-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 537,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        y: 9,
                                                        width: 20,
                                                        height: 2,
                                                        className: "jsx-851ae5af04836e9a" + " " + "line-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 538,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        y: 15,
                                                        width: 20,
                                                        height: 2,
                                                        className: "jsx-851ae5af04836e9a" + " " + "line-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 539,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 531,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/view4sight/Header.jsx",
                                    lineNumber: 503,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/view4sight/Header.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/view4sight/Header.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/view4sight/Header.jsx",
                    lineNumber: 123,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/view4sight/Header.jsx",
                lineNumber: 118,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a60d7dde5d5d9437",
                children: ".support-hover.jsx-851ae5af04836e9a:hover,.docs-hover.jsx-851ae5af04836e9a:hover{transform:scale(1.02);background:#2a2a2a!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(View4SightHeader, "OoZiGqrzmWIJyCFoYT9u+0fn1kI=");
_c = View4SightHeader;
var _c;
__turbopack_refresh__.register(_c, "View4SightHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/common/LanguageSelect.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LanguageSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
const languages = [
    "English",
    "العربية",
    "中文"
];
;
function LanguageSelect() {
    _s();
    const [langOpen, setLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLang, setSelectedLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(languages[0]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-inline-block",
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                onClick: ()=>setLangOpen((pre)=>!pre),
                className: "hstack gap-1 text-none fw-medium",
                role: "button",
                "aria-expanded": langOpen,
                "aria-haspopup": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "icon icon-1 unicon-earth-filled"
                    }, void 0, false, {
                        fileName: "[project]/components/common/LanguageSelect.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: selectedLang
                    }, void 0, false, {
                        fileName: "[project]/components/common/LanguageSelect.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-uc-drop-parent-icon": "",
                        className: "uc-icon uc-drop-parent-icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: 12,
                            height: 12,
                            viewBox: "0 0 12 12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "1.1",
                                points: "1 3.5 6 8.5 11 3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/common/LanguageSelect.jsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/common/LanguageSelect.jsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/LanguageSelect.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/LanguageSelect.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px uc-drop ${langOpen ? "uc-open" : ""} `,
                style: {
                    bottom: "40px",
                    right: 0,
                    maxWidth: 1428
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "nav-y gap-1 fw-medium items-end",
                    children: languages.map((language, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>{
                                setSelectedLang(language);
                                setLangOpen(false);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                children: language
                            }, void 0, false, {
                                fileName: "[project]/components/common/LanguageSelect.jsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/common/LanguageSelect.jsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/common/LanguageSelect.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/LanguageSelect.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/LanguageSelect.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(LanguageSelect, "llqmf9lEtSL+PH18Ei3JP0MU0os=");
_c = LanguageSelect;
var _c;
__turbopack_refresh__.register(_c, "LanguageSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/tarifs/layout.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_7986ae._.js.map