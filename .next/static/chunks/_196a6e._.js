(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_196a6e._.js", {

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
"[project]/components/headers/Header9.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Header9)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleMobileMenu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Header9() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "uc-header header-global uc-navbar-sticky-wrap z-999",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "uc-navbar-container uc-navbar-transparent uc-navbar-float ft-tertiary z-1",
            "data-anime": "translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;",
            style: {
                transform: "translateY(0px)",
                opacity: 1
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "uc-navbar-main",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container max-w-lg lg:max-w-950px xl:max-w-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "uc-navbar min-h-56px lg:min-h-100px px-2 lg:px-0 text-gray-900 dark:text-white",
                        "data-uc-navbar": " animation: uc-animation-slide-top-small; duration: 150;",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uc-navbar-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "uc-logo",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "panel text-none",
                                        href: `/home-10`,
                                        style: {
                                            width: 140
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-primary dark:text-tertiary",
                                            alt: "Lexend",
                                            "data-uc-svg": "",
                                            src: "/assets/images/common/logo-8-light.svg",
                                            width: 148,
                                            height: 39
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/Header9.jsx",
                                            lineNumber: 28,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/Header9.jsx",
                                        lineNumber: 23,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/headers/Header9.jsx",
                                    lineNumber: 22,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/headers/Header9.jsx",
                                lineNumber: 21,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uc-navbar-center d-none xl:d-flex",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "uc-navbar-nav gap-4 xl:gap-5 d-none lg:d-flex fs-5 fw-bold",
                                    "data-uc-scrollspy-nav": "closest: li; offset: 40; scroll: true",
                                    style: {
                                        "--uc-nav-height": "48px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/page-features`,
                                                children: "Features"
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header9.jsx",
                                                lineNumber: 46,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/Header9.jsx",
                                            lineNumber: 45,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/page-pricing-2`,
                                                children: "Pricing"
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header9.jsx",
                                                lineNumber: 49,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/Header9.jsx",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/page-blog`,
                                                children: "Blog"
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header9.jsx",
                                                lineNumber: 52,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/Header9.jsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/page-about`,
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header9.jsx",
                                                lineNumber: 55,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/Header9.jsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/headers/Header9.jsx",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/headers/Header9.jsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uc-navbar-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-inline-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hstack gap-1 text-none fw-medium",
                                                role: "button",
                                                "aria-haspopup": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "icon icon-1 unicon-wikis fw-bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/Header9.jsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header9.jsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-white dark:bg-gray-300 dark:bg-opacity-15 border shadow-xs rounded w-100px uc-drop",
                                                "data-uc-drop": "mode: click; offset: 16; pos: bottom-right; boundary: !.uc-footer-widgets; animation: uc-animation-slide-top-small; duration: 150;",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "nav-y items-center gap-1 fw-medium rtl:items-end",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#en",
                                                                children: "English"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/headers/Header9.jsx",
                                                                lineNumber: 75,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header9.jsx",
                                                            lineNumber: 74,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#ar",
                                                                children: "العربية"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/headers/Header9.jsx",
                                                                lineNumber: 78,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header9.jsx",
                                                            lineNumber: 77,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#ch",
                                                                children: "中文"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/headers/Header9.jsx",
                                                                lineNumber: 81,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header9.jsx",
                                                            lineNumber: 80,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/headers/Header9.jsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header9.jsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/headers/Header9.jsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://themeforest.net/item/lexend-software-saas-startup-nextjs-template/54003483",
                                        target: "_blank",
                                        className: "btn btn-md btn-primary dark:bg-tertiary dark:text-primary-700 border-0 px-3 d-none lg:d-inline-flex",
                                        "data-uc-cursor": "lg opaque",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Download App"
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/Header9.jsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/Header9.jsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "d-block lg:d-none uc-icon uc-navbar-toggle-icon",
                                        onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openMobileMenu"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: 20,
                                            height: 20,
                                            viewBox: "0 0 20 20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: '.uc-navbar-toggle-icon svg>[class*="line-"]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uc-navbar-toggle-icon svg>.line-3{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{opacity:1}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-2{transform:rotate(45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{transform:rotate(-45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1,.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1{transform:translateY(6px) scaleX(0)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{transform:translateY(-6px) scaleX(0)}'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/Header9.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    className: "line-1",
                                                    y: 3,
                                                    width: 20,
                                                    height: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/Header9.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    className: "line-2",
                                                    y: 9,
                                                    width: 20,
                                                    height: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/Header9.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    className: "line-3",
                                                    y: 9,
                                                    width: 20,
                                                    height: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/Header9.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    className: "line-4",
                                                    y: 15,
                                                    width: 20,
                                                    height: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/Header9.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/headers/Header9.jsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/Header9.jsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/headers/Header9.jsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/headers/Header9.jsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/headers/Header9.jsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/headers/Header9.jsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/headers/Header9.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/headers/Header9.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Header9;
var _c;
__turbopack_refresh__.register(_c, "Header9");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data/blogs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/homes/home-10/Blogs.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Blogs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$blogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/blogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
"use client";
;
;
;
;
;
;
function Blogs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "blog_posts",
        className: "blog-posts section panel overflow-hidden swiper-parent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel py-6 lg:py-8 xl:py-10 mx-2 bg-secondary dark:bg-gray-300 dark:bg-opacity-15 rounded-1-5 lg:rounded-2 xl:rounded-3",
            "data-anime": "onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel vstack gap-4 lg:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-header vstack items-center gap-2 lg:gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "h3 sm:h1 lg:display-5 m-0 text-center max-w-650px mx-auto",
                                children: "From the insights"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/homes/home-10/Blogs.jsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-content panel w-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                                modules: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                                ],
                                spaceBetween: 16,
                                slidesPerView: 1.1,
                                pagination: {
                                    clickable: true,
                                    el: ".spdb1"
                                },
                                breakpoints: {
                                    0: {
                                        slidesPerView: 1.1,
                                        spaceBetween: 24
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 24
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 24
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 24
                                    }
                                },
                                className: "swiper-match overflow-unset lg:overflow-hidden py-2",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$blogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts6"].map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "post type-post panel overflow-hidden vstack duration-150 hover:-translate-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                        className: "featured-image m-0 rounded ratio ratio-16x9 rounded-default uc-transition-toggle overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "media-cover image uc-transition-scale-up uc-transition-opaque",
                                                                alt: post.alt,
                                                                src: post.imgSrc,
                                                                width: 768,
                                                                height: 560
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                                                lineNumber: 44,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/blog-details/${post.id}`,
                                                                className: "position-cover",
                                                                "data-caption": post.alt
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                                                lineNumber: 51,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                                        lineNumber: 43,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "panel vstack items-center text-center gap-2 p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "text-none",
                                                                href: `/blog-details/${post.id}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "post-title h4 xl:h3 m-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: post.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                                                        lineNumber: 63,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                                                    lineNumber: 62,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                                                lineNumber: 58,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/blog-details/${post.id}`,
                                                                className: "uc-link text-primary dark:text-tertiary fs-7 xl:fs-6 fw-bold",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Read more"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                                                    lineNumber: 70,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                                                lineNumber: 66,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                                        lineNumber: 57,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                                lineNumber: 42,
                                                columnNumber: 21
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                            lineNumber: 41,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "swiper-pagination position-relative mt-4 text-primary dark:text-tertiary spdb1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homes/home-10/Blogs.jsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/homes/home-10/Blogs.jsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/homes/home-10/Blogs.jsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-10/Blogs.jsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-10/Blogs.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-10/Blogs.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Blogs;
var _c;
__turbopack_refresh__.register(_c, "Blogs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data/faq.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "accordionItems": (()=>accordionItems),
    "accordionItems2": (()=>accordionItems2)
});
const accordionItems = [
    {
        id: 1,
        question: "Do I need to know about how to code?",
        answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.",
        controls: "uc-accordion-24",
        expanded: true
    },
    {
        id: 2,
        question: "Can I use it for commercial projects?",
        answer: "Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).",
        controls: "uc-accordion-26",
        expanded: false
    },
    {
        id: 3,
        question: "Can I use it for multiple projects?",
        answer: "Definitely! Please use it however you like; we don’t limit it.",
        controls: "uc-accordion-28",
        expanded: false
    },
    {
        id: 4,
        question: "Can I use this to create and sell a product?",
        answer: "Do not ever consider doing it.",
        controls: "uc-accordion-30",
        expanded: false
    },
    {
        id: 5,
        question: "What is your refund policy?",
        answer: "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
        controls: "uc-accordion-32",
        expanded: false
    }
];
const accordionItems2 = [
    {
        id: 23,
        title: "Manage tasks",
        icon: "/assets/images/common/icons/zap.svg",
        content: "Offers a unified platform that fosters innovation while providing end-to-end data management.",
        isOpen: false
    },
    {
        id: 25,
        title: "Set priorities",
        icon: "/assets/images/common/icons/target.svg",
        content: "Providing end-to-end data management. See how we help your team solve today’s biggest challenges.",
        isOpen: false
    },
    {
        id: 27,
        title: "Collaborate with your team",
        icon: "/assets/images/common/icons/settings.svg",
        content: "Our shared team inboxes keep everyone on the same page and in the loop.",
        isOpen: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/common/Accordion.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Accordion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/faq.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function Accordion({ faqData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["accordionItems"], parentClass = "" }) {
    _s();
    const parentRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const questionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const answerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Accordion.useEffect": ()=>{
            questionRefs.current.forEach({
                "Accordion.useEffect": (el)=>{
                    el.classList.remove("active");
                }
            }["Accordion.useEffect"]);
            parentRefs.current.forEach({
                "Accordion.useEffect": (el)=>{
                    el.classList.remove("active");
                }
            }["Accordion.useEffect"]);
            answerRefs.current.forEach({
                "Accordion.useEffect": (el)=>{
                    el.style.height = "0px";
                    el.style.overflow = "hidden";
                    el.style.transition = "all 0.5s ease-in-out";
                    el.style.marginTop = "0px";
                }
            }["Accordion.useEffect"]);
            if (currentIndex !== -1) {
                questionRefs.current[currentIndex].classList.add("active");
                parentRefs.current[currentIndex].classList.add("active");
                const element = answerRefs.current[currentIndex];
                element.style.height = element.scrollHeight + "px";
                element.style.overflow = "hidden";
                element.style.transition = "all 0.5s ease-in-out";
                element.style.marginTop = "20px";
            }
        }
    }["Accordion.useEffect"], [
        currentIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: faqData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                ref: (el)=>parentRefs.current[index] = el,
                className: `${currentIndex == index ? "uc-open" : ""} ${parentClass} `,
                onClick: ()=>{
                    setCurrentIndex((pre)=>pre == index ? -1 : index);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "uc-accordion-title fs-5 sm:fs-4",
                        role: "button",
                        "aria-disabled": "false",
                        ref: (el)=>questionRefs.current[index] = el,
                        children: item.question
                    }, void 0, false, {
                        fileName: "[project]/components/common/Accordion.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "uc-accordion-content",
                        ref: (el)=>answerRefs.current[index] = el,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: item.answer
                        }, void 0, false, {
                            fileName: "[project]/components/common/Accordion.jsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/Accordion.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/components/common/Accordion.jsx",
                lineNumber: 40,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
_s(Accordion, "fKRJeyFDXq6w8/+N1HnC1Kw+9iE=");
_c = Accordion;
var _c;
__turbopack_refresh__.register(_c, "Accordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data/pricing.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/homes/home-10/Pricing.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Pricing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$pricing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/pricing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function Pricing() {
    _s();
    const [isYearly, setIsYearly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "pricing",
        className: "pricing section panel overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel py-6 xl:py-10 lg:mx-2 mt-2 rounded-2 xl:rounded-3 bg-gray-800 dark:bg-gray-300 dark:bg-opacity-15 text-white",
            "data-anime": "onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;",
            style: {
                transform: "translateY(0px)",
                opacity: 1
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pricing-tables panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8",
                        "data-anime": "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-header vstack items-center gap-2 lg:gap-3",
                                style: {
                                    transform: "translateY(0px)",
                                    opacity: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "h3 md:h1 lg:display-5 m-0 text-center max-w-650px mx-auto text-white",
                                    children: "Seamless prices and scalable plans"
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                    lineNumber: 27,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel w-100",
                                style: {
                                    transform: "translateY(0px)",
                                    opacity: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "uc-subnav uc-subnav-pill gap-1 uc-child-width-expand rounded-1-5 p-narrow max-w-xs mx-auto border",
                                        "data-uc-switcher": "swiping: false;",
                                        role: "tablist",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: !isYearly ? "uc-active" : "",
                                                onClick: ()=>setIsYearly(false),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "d-flex justify-center text-white",
                                                    children: "Pay monthly"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                    lineNumber: 44,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: isYearly ? "uc-active" : "",
                                                onClick: ()=>setIsYearly(true),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "d-flex justify-center text-white",
                                                        children: "Pay yearly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                        lineNumber: 52,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "position-absolute top-50 start-100 translate-middle-y mt-n3 ltr:ms-2 rtl:me-2 text-tertiary d-none md:d-block",
                                                        alt: "50% OFF",
                                                        "data-uc-svg": "",
                                                        src: "/assets/images/template/50_off.svg",
                                                        width: 130,
                                                        height: 56
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                        lineNumber: 55,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "uc-switcher mt-4 lg:mt-6",
                                        role: "presentation",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "uc-active",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                                                spaceBetween: 24,
                                                observeSlideChildren: true,
                                                breakpoints: {
                                                    0: {
                                                        slidesPerView: 1.1
                                                    },
                                                    420: {
                                                        slidesPerView: 2.1,
                                                        spaceBetween: 16
                                                    },
                                                    768: {
                                                        slidesPerView: 3,
                                                        spaceBetween: 16
                                                    },
                                                    1024: {
                                                        slidesPerView: 3,
                                                        spaceBetween: 24
                                                    }
                                                },
                                                className: "swiper overflow-unset lg:overflow-hidden",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$pricing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pricingPlans5"].map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                                        className: "swiper-slide",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-center rounded-1-5 lg:rounded-2 text-center ${plan.bgColor}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2",
                                                                    children: plan.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "pricing-box-desc opacity-70",
                                                                    children: plan.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                    lineNumber: 88,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pricing-box-price hstack justify-center gap-narrow mt-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "price h1 lg:display-5 m-0 text-inherit",
                                                                            children: [
                                                                                "$",
                                                                                isYearly ? Math.round(plan.price * 6) : plan.price
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                            lineNumber: 92,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "duration fs-7 opacity-70",
                                                                            children: isYearly ? "/ year" : "/ month"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                            lineNumber: 98,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                    lineNumber: 91,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "pricing-box-bill fs-7 opacity-70",
                                                                    children: isYearly ? "Billed once yearly" : "Billed once monthly"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "nav-y items-center gap-1 fs-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "mb-1",
                                                                            children: "Standout features"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                            lineNumber: 109,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        plan.features.map((feature, featureIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                        className: "icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                                        lineNumber: 112,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    feature
                                                                                ]
                                                                            }, featureIndex, true, {
                                                                                fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                                lineNumber: 111,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pricing-box-cta vstack gap-1 justify-center text-center mt-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: plan.cta.link,
                                                                            className: index == 1 ? "btn btn-md btn-primary border" : "btn btn-md btn-secondary w-100",
                                                                            children: plan.cta.text
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                            lineNumber: 118,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "fs-7 opacity-70",
                                                                            children: "No credit card required!"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                            lineNumber: 128,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                            lineNumber: 82,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                        lineNumber: 81,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center mt-4 lg:mt-6",
                                        children: "*Yearly discount available on select plans."
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel w-100 max-w-lg",
                                style: {
                                    transform: "translateY(0px)",
                                    opacity: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row child-cols col-match items-center justify-center text-center gy-4 lg:gy-8",
                                    "data-anime": "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                transform: "translateY(0px)",
                                                opacity: 1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fact-item panel vstack gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary",
                                                        children: "280+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                        lineNumber: 152,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "fw-medium",
                                                        children: "Track of leads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                        lineNumber: 155,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                transform: "translateY(0px)",
                                                opacity: 1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fact-item panel vstack gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary",
                                                        children: "90%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                        lineNumber: 160,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "fw-medium",
                                                        children: "Satisfied users"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                        lineNumber: 163,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                transform: "translateY(0px)",
                                                opacity: 1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fact-item panel vstack gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "h3 md:h2 lg:h1 xl:display-5 m-0 text-tertiary",
                                                        children: "10.2k"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "fw-medium",
                                                        children: "Team collaborations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                        lineNumber: 171,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                                lineNumber: 167,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-10/Pricing.jsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homes/home-10/Pricing.jsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-10/Pricing.jsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-10/Pricing.jsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-10/Pricing.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-10/Pricing.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Pricing, "1aFueaGQAX8MFcR5An0BTMzYScY=");
_c = Pricing;
var _c;
__turbopack_refresh__.register(_c, "Pricing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data/testimonials.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "reviews": (()=>reviews),
    "slidesData": (()=>slidesData),
    "testimonials": (()=>testimonials),
    "testimonials2": (()=>testimonials2),
    "testimonials3": (()=>testimonials3),
    "testimonials4": (()=>testimonials4),
    "testimonials5": (()=>testimonials5),
    "testimonialsData": (()=>testimonialsData)
});
const testimonials = [
    {
        quote: `“Most of our time used to be taken up by administrative work whereas now we can focus on
      building out programs to help our employees. 
      Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quas nisi consectetur adipisci eaque. Porro,
      atque.”`,
        name: "Mark Zellers",
        position: "Director of Human Resources.",
        imgSrc: "/assets/images/portrait/01.jpg"
    },
    {
        quote: `“I can create a custom proposal with dynamic pricing
      tables, and get approval from my boss all within 36
      minutes and looks fantastic.
      Dolor sit amet consectetur adipisicing elit. Quas
      nisi consectetur adipisci eaque. Porro, atque.”`,
        name: "André Garcia",
        position: "Client Success Manager",
        imgSrc: "/assets/images/portrait/02.jpg"
    },
    {
        quote: `“This powerful tool eliminates the need to leave
      Salesforce to get things done, 
      quas libero placeat voluptates sed sequi? Corporis,
      earum vitae. 
      Tempore pariatur dignissimos coming for great tool
      of repellat quae a eaque culpa iusto fugit.”`,
        name: "Matt Henderson",
        position: "Director of Sales Operations",
        imgSrc: "/assets/images/portrait/03.jpg"
    }
];
const slidesData = [
    {
        rating: 5,
        quote: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
        name: "Mark Zellers",
        title: "CEO, Co-Founder."
    },
    {
        rating: 5,
        quote: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
        name: "Natalia Larsson",
        title: "Director of Sales"
    },
    {
        rating: 5,
        quote: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers than comply with this regulation and as we look to create our website and this builder just outstanding!",
        name: "Sarah Edrissi",
        title: "Lead Marketing"
    },
    {
        rating: 5,
        quote: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
        name: "Anna Yon",
        title: "Senior UI/UX Designer"
    }
];
const reviews = [
    {
        name: "Mark Zellers",
        position: "CEO, Co-Founder",
        feedback: "“We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.”"
    },
    {
        name: "Natalia Larsson",
        position: "Director of Sales",
        feedback: "“This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”"
    },
    {
        name: "Sarah Edrissi",
        position: "Lead Marketing",
        feedback: "“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers than comply with this regulation and as we look to create our website and this builder just outstanding!”"
    },
    {
        name: "Anna Yon",
        position: "Senior UI/UX Designer",
        feedback: "“We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.”"
    }
];
const testimonials2 = [
    {
        brandImg: "/assets/images/brands/brand-07.svg",
        testimonial: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
        authorImg: "/assets/images/avatars/01.png",
        authorName: "Mark Zellers",
        authorRole: "CEO, Co-Founder"
    },
    {
        brandImg: "/assets/images/brands/brand-06.svg",
        testimonial: "“This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”",
        authorImg: "/assets/images/avatars/04.png",
        authorName: "Natalia Larsson",
        authorRole: "Director of Sales"
    },
    {
        brandImg: "/assets/images/brands/brand-08.svg",
        testimonial: "“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder just outstanding!”",
        authorImg: "/assets/images/avatars/03.png",
        authorName: "Sarah Edrissi",
        authorRole: "Lead Marketing"
    },
    {
        brandImg: "/assets/images/brands/brand-01.svg",
        testimonial: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
        authorImg: "/assets/images/avatars/08.png",
        authorName: "Anna Yon",
        authorRole: "Senior UI/UX Designer"
    },
    {
        brandImg: "/assets/images/brands/brand-02.svg",
        testimonial: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
        authorImg: "/assets/images/avatars/01.png",
        authorName: "Mark Zellers",
        authorRole: "CEO, Co-Founder"
    },
    {
        brandImg: "/assets/images/brands/brand-03.svg",
        testimonial: "“This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”",
        authorImg: "/assets/images/avatars/04.png",
        authorName: "Natalia Larsson",
        authorRole: "Director of Sales"
    },
    {
        brandImg: "/assets/images/brands/brand-04.svg",
        testimonial: "“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder just outstanding!”",
        authorImg: "/assets/images/avatars/03.png",
        authorName: "Sarah Edrissi",
        authorRole: "Lead Marketing"
    },
    {
        brandImg: "/assets/images/brands/brand-05.svg",
        testimonial: "“We’re looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.”",
        authorImg: "/assets/images/avatars/08.png",
        authorName: "Anna Yon",
        authorRole: "Senior UI/UX Designer"
    }
];
const testimonials3 = [
    {
        brandImgSrc: "/assets/images/brands/brand-07.svg",
        brandImgAlt: "Brand",
        text: "“We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.”",
        avatarImgSrc: "/assets/images/avatars/01.png",
        avatarImgAlt: "Mark Zellers",
        name: "Mark Zellers",
        position: "CEO, Co-Founder."
    },
    {
        brandImgSrc: "/assets/images/brands/brand-06.svg",
        brandImgAlt: "Brand",
        text: "“This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”",
        avatarImgSrc: "/assets/images/avatars/04.png",
        avatarImgAlt: "Natalia Larsson",
        name: "Natalia Larsson",
        position: "Director of Sales"
    },
    {
        brandImgSrc: "/assets/images/brands/brand-08.svg",
        brandImgAlt: "Brand",
        text: "“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder just outstanding!”",
        avatarImgSrc: "/assets/images/avatars/03.png",
        avatarImgAlt: "Sarah Edrissi",
        name: "Sarah Edrissi",
        position: "Lead Marketing"
    }
];
const testimonials4 = [
    {
        text: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
        name: "Mark Zellers",
        imgSrc: "/assets/images/avatars/01.png"
    },
    {
        text: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
        name: "Natalia Larsson",
        imgSrc: "/assets/images/avatars/04.png"
    },
    {
        text: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder is just outstanding!",
        name: "Sarah Edrissi",
        imgSrc: "/assets/images/avatars/03.png"
    },
    {
        text: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
        name: "Anna Yon",
        imgSrc: "/assets/images/avatars/08.png"
    },
    {
        text: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
        name: "Mark Zellers",
        imgSrc: "/assets/images/avatars/01.png"
    },
    {
        text: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
        name: "Natalia Larsson",
        imgSrc: "/assets/images/avatars/04.png"
    },
    {
        text: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder is just outstanding!",
        name: "Sarah Edrissi",
        imgSrc: "/assets/images/avatars/03.png"
    },
    {
        text: "We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
        name: "Anna Yon",
        imgSrc: "/assets/images/avatars/08.png"
    }
];
const testimonialsData = [
    {
        id: 1,
        avatarSrc: "/assets/images/avatars/01.png",
        name: "Mark Zellers",
        role: "CEO, Co-Founder.",
        quote: "“We’re looking for people who share our vision! Most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.”"
    },
    {
        id: 2,
        avatarSrc: "/assets/images/avatars/04.png",
        name: "Natalia Larsson",
        role: "Director of Sales",
        quote: "“This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”"
    },
    {
        id: 3,
        avatarSrc: "/assets/images/avatars/03.png",
        name: "Sarah Edrissi",
        role: "Lead Marketing",
        quote: "“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website, this builder is just outstanding!”"
    },
    {
        id: 4,
        avatarSrc: "/assets/images/avatars/08.png",
        name: "Anna Yon",
        role: "Senior UI/UX Designer",
        quote: "“We’re looking for people who share our vision! Most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.”"
    }
];
const testimonials5 = [
    {
        text: "“We’re looking for people who share our vision! most of our time used to be taken up by most of alternate to help our employees.”",
        name: "Mark Zellers",
        imgSrc: "/assets/images/avatars/01.png"
    },
    {
        text: "“This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”",
        name: "Jason Barella",
        imgSrc: "/assets/images/avatars/02.png"
    },
    {
        text: "“Look for service suppliers that comply with this regulation, and as we look to create our website, this builder is just outstanding!”",
        name: "Sarah Edrissi",
        imgSrc: "/assets/images/avatars/03.png"
    },
    {
        text: "“We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.”",
        name: "Anna Yon",
        imgSrc: "/assets/images/avatars/08.png"
    },
    {
        text: "“We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.”",
        name: "Jaden Karl",
        imgSrc: "/assets/images/avatars/05.png"
    },
    {
        text: "“This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”",
        name: "Ederson Hani",
        imgSrc: "/assets/images/avatars/06.png"
    },
    {
        text: "“We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder is just outstanding!”",
        name: "Matt Peterson",
        imgSrc: "/assets/images/avatars/07.png"
    },
    {
        text: "“We’re looking for people who share our vision! Most of our time used to be taken up by most of the alternate administrative work whereas now we can focus on building out to help our employees.”",
        name: "Natalia Cherry",
        imgSrc: "/assets/images/avatars/10.png"
    },
    {
        text: "“This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.”",
        name: "Muhammed Khan",
        imgSrc: "/assets/images/avatars/11.png"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/homes/home-10/Testimonials2.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Testimonials2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$testimonials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/testimonials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
"use client";
;
;
;
;
;
function Testimonials2() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "testimonials",
        className: "testimonials section panel overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel py-6 lg:py-8 xl:py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 max-w-850px mx-auto",
                        "data-anime": "onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100);",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-header vstack items-center gap-2 lg:gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "h3 sm:h1 lg:display-5 m-0 text-center max-w-650px mx-auto",
                                    children: "What our clients sharing about us!"
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                    lineNumber: 22,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                lineNumber: 21,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel w-100 swiper-parent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                                    modules: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                                    ],
                                    className: "swiper",
                                    spaceBetween: 16,
                                    slidesPerView: 1,
                                    centeredSlides: true,
                                    pagination: {
                                        clickable: true,
                                        el: ".spdt2"
                                    },
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$testimonials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonialsData"].map((testimonial)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "panel vstack items-center gap-4 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel vstack items-center gap-2 lg:gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "panel",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: "w-48px lg:w-64px h-48px lg:h-64px rounded-circle",
                                                                        alt: `${testimonial.name} — ${testimonial.role}`,
                                                                        src: testimonial.avatarSrc,
                                                                        width: 150,
                                                                        height: 150
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                                                        lineNumber: 40,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                                                    lineNumber: 39,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "fs-5 lg:fs-4 xl:fs-3 ft-secondary fw-bold text-dark dark:text-white",
                                                                    children: testimonial.quote
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                                                    lineNumber: 48,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                                            lineNumber: 38,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel vstack gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "panel vstack gap-narrow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                        className: "h6 lg:h5 m-0",
                                                                        children: testimonial.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                                                        lineNumber: 54,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "opacity-70",
                                                                        children: testimonial.role
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                                                        lineNumber: 55,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                                                lineNumber: 53,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                                            lineNumber: 52,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                                    lineNumber: 37,
                                                    columnNumber: 23
                                                }, this)
                                            }, testimonial.id, false, {
                                                fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                                lineNumber: 36,
                                                columnNumber: 21
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swiper-pagination position-relative mt-4 lg:mt-6 text-primary dark:text-tertiary spdt2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                    lineNumber: 27,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-10/Testimonials2.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Testimonials2;
var _c;
__turbopack_refresh__.register(_c, "Testimonials2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(homes)/home-10/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_196a6e._.js.map