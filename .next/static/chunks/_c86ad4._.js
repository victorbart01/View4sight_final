(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_c86ad4._.js", {

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
"[project]/components/headers/ProductPages.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ProductPages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
function ProductPages() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            " ",
            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sections3"].map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "vstack gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                            className: "h6 m-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: `fs-7 ${section.icon} ltr:me-narrow rtl:ms-narrow`
                                }, void 0, false, {
                                    fileName: "[project]/components/headers/ProductPages.jsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this),
                                section.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/headers/ProductPages.jsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/page-features`,
                                    className: "hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "icon rounded dark:bg-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "w-32px",
                                                alt: "icon",
                                                width: 24,
                                                height: 24,
                                                src: item.iconSrc
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/ProductPages.jsx",
                                                lineNumber: 23,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/ProductPages.jsx",
                                            lineNumber: 22,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "panel",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fs-7 mb-narrow",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/ProductPages.jsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "fs-7 opacity-60",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/ProductPages.jsx",
                                                    lineNumber: 33,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/headers/ProductPages.jsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/headers/ProductPages.jsx",
                                    lineNumber: 18,
                                    columnNumber: 15
                                }, this)
                            }, itemIndex, false, {
                                fileName: "[project]/components/headers/ProductPages.jsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/page-features`,
                                className: "ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary-600 dark:hover:text-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "border-bottom hover:border-primary duration-150",
                                        children: section.viewAllText
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/ProductPages.jsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fs-8 unicon-arrow-up-right"
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/ProductPages.jsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/headers/ProductPages.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/headers/ProductPages.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/components/headers/ProductPages.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true);
}
_c = ProductPages;
var _c;
__turbopack_refresh__.register(_c, "ProductPages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/headers/Solutions.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Solutions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
function Solutions() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sections4"].map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        className: "h6 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: `fs-7 ${section.icon} ltr:me-narrow rtl:ms-narrow`
                            }, void 0, false, {
                                fileName: "[project]/components/headers/Solutions.jsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this),
                            section.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/headers/Solutions.jsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "uc-nav uc-navbar-dropdown-nav vstack gap-2",
                        children: section.items.map((item, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "hstack items-start gap-2",
                                    href: `/page-features`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cstack min-w-32px h-32px rounded bg-primary",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: `icon-1 ${item.icon} text-dark`
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Solutions.jsx",
                                                lineNumber: 22,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/Solutions.jsx",
                                            lineNumber: 21,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "vstack gap-narrow mt-nnarrow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    className: "fw-medium dark:text-white",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/Solutions.jsx",
                                                    lineNumber: 25,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fs-7",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/Solutions.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/headers/Solutions.jsx",
                                            lineNumber: 24,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/headers/Solutions.jsx",
                                    lineNumber: 17,
                                    columnNumber: 17
                                }, this)
                            }, itemIndex, false, {
                                fileName: "[project]/components/headers/Solutions.jsx",
                                lineNumber: 16,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/headers/Solutions.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/components/headers/Solutions.jsx",
                lineNumber: 9,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
_c = Solutions;
var _c;
__turbopack_refresh__.register(_c, "Solutions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/headers/Header8.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Header8)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleMobileMenu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$headers$2f$ProductPages$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/headers/ProductPages.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$headers$2f$Solutions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/headers/Solutions.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/menu.js [app-client] (ecmascript)");
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
function Header8() {
    _s();
    const [prevScrollPos, setPrevScrollPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollingUp, setScrollingUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header8.useEffect": ()=>{
            setPrevScrollPos(window.pageYOffset);
            const handleScroll = {
                "Header8.useEffect.handleScroll": ()=>{
                    const currentScrollPos = window.pageYOffset;
                    const isScrollingUp = currentScrollPos < prevScrollPos;
                    setScrollingUp(currentScrollPos <= 80 ? false : isScrollingUp);
                    setPrevScrollPos(currentScrollPos);
                }
            }["Header8.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Header8.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Header8.useEffect"];
        }
    }["Header8.useEffect"], [
        prevScrollPos
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header8.useEffect": ()=>{
            const header = document.querySelector(".header-nine .uc-navbar-container");
            const menuItems = document.querySelectorAll(".header-nine .has-dd-menu");
            if (!header || menuItems.length === 0) return;
            const handleMouseEnter = {
                "Header8.useEffect.handleMouseEnter": ()=>header.classList.remove("uc-navbar-transparent")
            }["Header8.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "Header8.useEffect.handleMouseLeave": ()=>header.classList.add("uc-navbar-transparent")
            }["Header8.useEffect.handleMouseLeave"];
            menuItems.forEach({
                "Header8.useEffect": (item)=>{
                    item.addEventListener("mouseenter", handleMouseEnter);
                    item.addEventListener("mouseleave", handleMouseLeave);
                }
            }["Header8.useEffect"]);
            return ({
                "Header8.useEffect": ()=>{
                    menuItems.forEach({
                        "Header8.useEffect": (item)=>{
                            item.removeEventListener("mouseenter", handleMouseEnter);
                            item.removeEventListener("mouseleave", handleMouseLeave);
                        }
                    }["Header8.useEffect"]);
                }
            })["Header8.useEffect"];
        }
    }["Header8.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `uc-header header-nine uc-navbar-sticky-wrap z-999 uc-sticky  ${scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""}`,
        "data-uc-sticky": "start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;",
        style: {},
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: `uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent  ${scrollingUp ? "uc-navbar-sticky" : "uc-navbar-transparent"} `,
            "data-anime": "translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;",
            style: {
                transform: "translateY(0px)",
                opacity: 1
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "uc-navbar-main",
                style: {
                    "--uc-nav-height": "96px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "uc-navbar min-h-64px lg:min-h-96px text-dark dark:text-white",
                        "data-uc-navbar": " animation: uc-animation-slide-top-small; duration: 150;",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uc-navbar-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "uc-logo ltr:ms-1 rtl:me-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "panel text-none",
                                        href: `/home-9`,
                                        style: {
                                            width: 140
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "dark:d-none",
                                                alt: "Lexend",
                                                src: "/assets/images/common/logo-8-light.svg",
                                                width: 148,
                                                height: 39
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header8.jsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "d-none dark:d-block",
                                                alt: "Lexend",
                                                src: "/assets/images/common/logo-8-dark.svg",
                                                width: 148,
                                                height: 39
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header8.jsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/headers/Header8.jsx",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/headers/Header8.jsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/headers/Header8.jsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uc-navbar-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "uc-navbar-nav fs-5 fw-bold gap-3 lg:gap-4 d-none lg:d-flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "has-dd-menu",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    role: "button",
                                                    "aria-haspopup": "true",
                                                    children: [
                                                        "Products",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-uc-navbar-parent-icon": "",
                                                            className: "uc-icon uc-navbar-parent-icon",
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
                                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/headers/Header8.jsx",
                                                                lineNumber: 107,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                            lineNumber: 103,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "uc-dropbar uc-navbar-dropdown uc-dropbar-top ft-primary text-unset fs-6 fw-normal hide-scrollbar p-0 rounded-2 overflow-hidden border border-dark dark:border-tertiary bg-white dark:bg-tertiary-700 dark:bg-gradient-45 from-tertiary to-transparent dark:text-white uc-drop",
                                                    "data-uc-drop": " offset: 8; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;",
                                                    style: {
                                                        width: "100%",
                                                        maxWidth: 1452
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "uc-dropbar-content p-3 lg:p-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "container container-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "row child-cols-4 gx-6",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$headers$2f$ProductPages$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                        fileName: "[project]/components/headers/Header8.jsx",
                                                                        lineNumber: 128,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/headers/Header8.jsx",
                                                                lineNumber: 126,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                            lineNumber: 125,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "uc-dropbar-footer p-2 xl:p-4 xl:px-6 bg-primary dark:bg-tertiary-600 dark:bg-gradient-45 from-tertiary to-transparent text-dark dark:text-white border-top border-dark dark:border-white dark:border-opacity-15",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "nav-x gap-4 fs-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "fs-8 unicon-api"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                                                    lineNumber: 136,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "border-bottom hover:border-tertiary duration-150",
                                                                                    children: "Explore Apps"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                                                    lineNumber: 137,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                                            lineNumber: 135,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/headers/Header8.jsx",
                                                                        lineNumber: 134,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "fs-8 unicon-airplay"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                                                    lineNumber: 144,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "border-bottom hover:border-tertiary duration-150",
                                                                                    children: "AI Solutions"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                                                    lineNumber: 145,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                                            lineNumber: 143,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/headers/Header8.jsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "fs-8 unicon-cloud-lightning"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                                                    lineNumber: 152,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "border-bottom hover:border-tertiary duration-150",
                                                                                    children: "Join Lexend Early Access"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                                                    lineNumber: 153,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                                            lineNumber: 151,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/headers/Header8.jsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/headers/Header8.jsx",
                                                                lineNumber: 133,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                            lineNumber: 132,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/headers/Header8.jsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "has-dd-menu",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    role: "button",
                                                    "aria-haspopup": "true",
                                                    children: [
                                                        "Solutions",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-uc-navbar-parent-icon": "",
                                                            className: "uc-icon uc-navbar-parent-icon",
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
                                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/headers/Header8.jsx",
                                                                lineNumber: 169,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                            lineNumber: 165,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "uc-dropbar uc-navbar-dropdown uc-dropbar-top ft-primary text-unset fs-6 fw-normal hide-scrollbar p-0 rounded-2 overflow-hidden border border-dark dark:border-tertiary bg-white dark:bg-tertiary-700 dark:bg-gradient-45 from-tertiary to-transparent dark:text-white uc-drop",
                                                    "data-uc-drop": " offset: 8; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;",
                                                    style: {
                                                        width: "100%",
                                                        maxWidth: 1452
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "uc-dropbar-content",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "container container-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "uc-dropbar-inner p-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "row col-match justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "col-8",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "panel vstack gap-4 p-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "vstack gap-narrow flex-none",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                className: "h5 xl:h4 m-0",
                                                                                                children: "Workflow quick-start automation guide"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/headers/Header8.jsx",
                                                                                                lineNumber: 194,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "fs-7 opacity-60",
                                                                                                children: "How Lexend can help you automate your work"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/headers/Header8.jsx",
                                                                                                lineNumber: 197,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/headers/Header8.jsx",
                                                                                        lineNumber: 193,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "row child-cols-4 gx-4 col-match justify-between",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$headers$2f$Solutions$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                                                            lineNumber: 202,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/headers/Header8.jsx",
                                                                                        lineNumber: 201,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/headers/Header8.jsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                                            lineNumber: 191,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "col-4",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "panel vstack gap-4 p-4 bg-primary dark:bg-tertiary-600 dark:bg-gradient-45 from-tertiary to-transparent border border-dark dark:border-white dark:border-opacity-15 rounded-default",
                                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "panel category-section",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                className: "h6",
                                                                                                children: category.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/headers/Header8.jsx",
                                                                                                lineNumber: 213,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                className: "uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12",
                                                                                                children: category.links.map((link, linkIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                        children: link.href === "#" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                            href: link.href,
                                                                                                            children: link.text
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                                                                            lineNumber: 219,
                                                                                                            columnNumber: 49
                                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                            href: link.href,
                                                                                                            children: link.text
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                                                                            lineNumber: 223,
                                                                                                            columnNumber: 49
                                                                                                        }, this)
                                                                                                    }, linkIndex, false, {
                                                                                                        fileName: "[project]/components/headers/Header8.jsx",
                                                                                                        lineNumber: 217,
                                                                                                        columnNumber: 45
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/headers/Header8.jsx",
                                                                                                lineNumber: 214,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, index, true, {
                                                                                        fileName: "[project]/components/headers/Header8.jsx",
                                                                                        lineNumber: 209,
                                                                                        columnNumber: 37
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/headers/Header8.jsx",
                                                                                lineNumber: 207,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                                            lineNumber: 206,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/headers/Header8.jsx",
                                                                lineNumber: 189,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header8.jsx",
                                                            lineNumber: 188,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/headers/Header8.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/Header8.jsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/headers/Header8.jsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/blog-sidebar`,
                                                children: "Blog"
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header8.jsx",
                                                lineNumber: 242,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/Header8.jsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/page-pricing-2`,
                                                children: "Pricing"
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header8.jsx",
                                                lineNumber: 245,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/Header8.jsx",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/page-integrations`,
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header8.jsx",
                                                lineNumber: 248,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/Header8.jsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/headers/Header8.jsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/headers/Header8.jsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uc-navbar-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "btn btn-md dark:text-white border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent fs-5 lg:px-3 d-none lg:d-inline-flex rounded-pill",
                                        href: `/page-contact-2`,
                                        children: "Contact sales"
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/Header8.jsx",
                                        lineNumber: 253,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn btn-md btn-tertiary w-48px h-48px d-inline-flex lg:d-none",
                                        onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openMobileMenu"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "icon icon-2 unicon-menu"
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/Header8.jsx",
                                            lineNumber: 263,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/Header8.jsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/headers/Header8.jsx",
                                lineNumber: 252,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/headers/Header8.jsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/headers/Header8.jsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/headers/Header8.jsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/headers/Header8.jsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/headers/Header8.jsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(Header8, "NwmI8ZxF6lVwsqzKGpT6IBtwiLI=");
_c = Header8;
var _c;
__turbopack_refresh__.register(_c, "Header8");
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
"[project]/components/common/TyperComponent.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TyperComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-type-animation/dist/esm/index.es.js [app-client] (ecmascript)");
"use client";
;
const demostrings = [
    "Bank Account",
    "Web Payment",
    " Android & ISO"
];
;
function TyperComponent({ strings = demostrings }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeAnimation"], {
        sequence: [
            ...strings.flatMap((element)=>[
                    element,
                    2000
                ])
        ],
        wrapper: "span",
        speed: 50,
        repeat: Infinity
    }, void 0, false, {
        fileName: "[project]/components/common/TyperComponent.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = TyperComponent;
var _c;
__turbopack_refresh__.register(_c, "TyperComponent");
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
"[project]/components/homes/home-9/Pricing.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Pricing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$pricing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/pricing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
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
            className: "section-outer panel py-6 lg:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-tertiary-50 dark:bg-tertiary-700 border border-tertiary-50 dark:border-white dark:border-opacity-15",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block"
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-9/Pricing.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "position-absolute top-100 start-50 translate-middle w-1000px h-500px bg-white rounded-circle blur-10 blend-overlay d-none dark:d-block"
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-9/Pricing.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill",
                                            children: "Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "h4 sm:h3 lg:h1 m-0 text-center max-w-650px mx-auto",
                                            children: [
                                                "Scalable plans",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-tertiary dark:text-primary",
                                                    children: "to fit any business size"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                    lineNumber: 29,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel",
                                    style: {
                                        transform: "translateY(0px)",
                                        opacity: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "uc-subnav uc-subnav-pill gap-1 uc-child-width-expand rounded-1-5 p-narrow max-w-xs mx-auto bg-white border border-dark dark:border-white dark:border-opacity-15",
                                            "data-uc-switcher": "swiping: false;",
                                            role: "tablist",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: !isYearly ? "uc-active" : "",
                                                    onClick: ()=>setIsYearly(false),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "d-flex justify-center text-dark",
                                                        children: "Pay monthly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                        lineNumber: 47,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                    lineNumber: 43,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: isYearly ? "uc-active" : "",
                                                    onClick: ()=>setIsYearly(true),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "d-flex justify-center text-dark",
                                                        children: "Pay yearly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                        lineNumber: 55,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "uc-switcher mt-4 lg:mt-6 lg:w-800px",
                                            role: "presentation",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "uc-active",
                                                id: "uc-switcher-24",
                                                role: "tabpanel",
                                                "aria-labelledby": "uc-switcher-23",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "panel",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "row child-cols-12 lg:child-cols-6 g-2",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$pricing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pricingPlans4"].map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 border border-dark dark:border-primary text-dark dark:text-white dark:bg-gradient-45 from-tertiary-600 to-transparent",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "hstack items-start justify-between gap-2 w-full",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "vstack items-start gap-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "pricing-box-title fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill",
                                                                                                children: plan.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                                lineNumber: 77,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "pricing-box-desc opacity-70",
                                                                                                children: isYearly ? plan.descriptionYearly : plan.description
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                                lineNumber: 80,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                        lineNumber: 76,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "pricing-box-price",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                            className: "price h2 fw-normal m-0 text-inherit",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                                                                    className: "fs-4 mt-n4",
                                                                                                    children: "$"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                                    lineNumber: 88,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                isYearly ? plan.price * 10 : plan.price
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                            lineNumber: 87,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                        lineNumber: 86,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                lineNumber: 75,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                                                                fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                lineNumber: 93,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "nav-y gap-1 fs-6",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: "mb-1",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                            children: "Standout features"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                            lineNumber: 96,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                        lineNumber: 95,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    plan.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: "icon icon-narrow unicon-checkmark fw-bold ltr:me-1 rtl:ms-1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                                    lineNumber: 100,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                feature
                                                                                            ]
                                                                                        }, i, true, {
                                                                                            fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                            lineNumber: 99,
                                                                                            columnNumber: 35
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                lineNumber: 94,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pricing-box-cta vstack gap-1 justify-center text-center mt-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: "/sign-up",
                                                                                        className: plan.buttonClass,
                                                                                        children: plan.buttonText
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                        lineNumber: 106,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "fs-7 opacity-70",
                                                                                        children: "No credit card required!"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                        lineNumber: 112,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                                lineNumber: 105,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                        lineNumber: 74,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " "
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                                lineNumber: 73,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                        lineNumber: 71,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center mt-4 lg:mt-6",
                                            children: "*Yearly discount available on select plans."
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/homes/home-9/Pricing.jsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/homes/home-9/Pricing.jsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/homes/home-9/Pricing.jsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-9/Pricing.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/homes/home-9/Pricing.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-9/Pricing.jsx",
        lineNumber: 10,
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
"[project]/components/homes/home-9/Testimonials.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Testimonials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$testimonials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/testimonials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Testimonials() {
    _s();
    const [isViewAll, setIsViewAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isotopContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const isotope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const initIsotop = async ()=>{
        const Isotope = (await __turbopack_require__("[project]/node_modules/isotope-layout/js/isotope.js [app-client] (ecmascript, async loader)")(__turbopack_import__)).default;
        const imagesloaded = (await __turbopack_require__("[project]/node_modules/imagesloaded/imagesloaded.js [app-client] (ecmascript, async loader)")(__turbopack_import__)).default;
        // Initialize Isotope in the mounted hook
        isotope.current = new Isotope(isotopContainer.current, {
            itemSelector: ".isotop-element",
            layoutMode: "masonry"
        });
        imagesloaded(isotopContainer.current).on("progress", function() {
            // Trigger Isotope layout
            isotope.current.layout();
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            /////////////////////////////////////////////////////
            // Magnate Animation
            initIsotop();
        }
    }["Testimonials.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "clients_feedbacks",
        className: "clients-feedbacks section panel overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel py-6 xl:py-9",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel vstack gap-4 ",
                        "data-anime": "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: anime.stagger(100, {start: 200});",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-header vstack items-center gap-2 lg:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-dark rounded-pill",
                                        children: "Clients feedback"
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "h4 sm:h3 lg:h1 m-0 text-center max-w-650px mx-auto",
                                        children: [
                                            "What our",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-tertiary dark:text-primary",
                                                children: "satisfied clients"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            "said about us!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "clients_feedback_area",
                                className: !isViewAll ? "panel w-100 max-w-lg mx-auto h-700px overflow-hidden" : "panel w-100 max-w-lg mx-auto overflow-hidden uc-active h-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row child-cols-4 md-child-cols-6 sm-child-cols-12 gx-4 gy-0",
                                        "data-uc-grid": "masonry: true;",
                                        ref: isotopContainer,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$testimonials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials5"].map(({ text, name, imgSrc }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `isotop-element mt-4`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-3 sm:px-4 py-4 panel  vstack justify-between gap-3 dark:bg-gradient-45 from-tertiary to-transparent border border-dark dark:border-white dark:border-opacity-15 rounded-1-5 lg:rounded-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel vstack items-start gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "fs-6 lg:fs-5",
                                                                children: text
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                                lineNumber: 72,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                            lineNumber: 71,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel hstack gap-2 mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "w-40px rounded-circle",
                                                                    alt: name,
                                                                    src: imgSrc,
                                                                    width: 150,
                                                                    height: 150
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "panel vstack justify-center gap-narrow",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "nav-x gap-0 text-warning",
                                                                            children: [
                                                                                ...Array(5)
                                                                            ].map((_, starIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                        className: "icon icon-narrow unicon-star-filled"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                                                        lineNumber: 86,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, starIndex, false, {
                                                                                    fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                                                    lineNumber: 85,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                                            lineNumber: 83,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "fw-bold ft-secondary dark:text-white m-0",
                                                                            children: name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                                            lineNumber: 90,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                            lineNumber: 74,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                    lineNumber: 70,
                                                    columnNumber: 23
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                lineNumber: 69,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "clients-feedback-toggle-area",
                                        onClick: ()=>setIsViewAll((pre)=>!pre),
                                        className: !isViewAll ? "position-absolute bottom-0 start-0 end-0 h-300px vstack items-center justify-end bg-gradient-to-t from-white dark:from-tertiary-800 to-transparent z-1" : "bottom-0 start-0 end-0 vstack items-center justify-end bg-gradient-to-t from-white dark:from-tertiary-800 to-transparent z-1 mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: !isViewAll ? "btn btn-primary border border-dark dark:border-white dark:border-opacity-15 rounded-pill px-3" : "btn border border-dark dark:border-white dark:border-opacity-15 rounded-pill px-3 btn-secondary",
                                            "data-uc-toggle": "target: #clients_feedback_area; cls: uc-active",
                                            children: isViewAll ? "Close feedbacks" : " View all feedbacks"
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel max-w-700px mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel vstack gap-3 sm:gap-4 text-center",
                                    "data-anime": "onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "fs-6 m-0",
                                            children: "Trusted by over most popular companies worldwide"
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "panel",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "row child-cols g-6 items-center text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "max-w-80px lg:max-w-128px",
                                                                alt: "brand",
                                                                "data-uc-svg": "",
                                                                src: "/assets/images/brands/brand-01.svg",
                                                                width: 165,
                                                                height: 48
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                                lineNumber: 132,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                            lineNumber: 131,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                        lineNumber: 130,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "max-w-80px lg:max-w-128px",
                                                                alt: "brand",
                                                                "data-uc-svg": "",
                                                                src: "/assets/images/brands/brand-05.svg",
                                                                width: 179,
                                                                height: 48
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                                lineNumber: 144,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                            lineNumber: 143,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "max-w-80px lg:max-w-128px",
                                                                alt: "brand",
                                                                "data-uc-svg": "",
                                                                src: "/assets/images/brands/brand-03.svg",
                                                                width: 178,
                                                                height: 48
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                                lineNumber: 156,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                            lineNumber: 155,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "max-w-80px lg:max-w-128px",
                                                                alt: "brand",
                                                                "data-uc-svg": "",
                                                                src: "/assets/images/brands/brand-07.svg",
                                                                width: 170,
                                                                height: 48
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                            lineNumber: 167,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                        lineNumber: 166,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                                lineNumber: 129,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-9/Testimonials.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-9/Testimonials.jsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-9/Testimonials.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "C9cMtukG8lB5peeufWzHUf2ihmI=");
_c = Testimonials;
var _c;
__turbopack_refresh__.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(homes)/home-9/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_c86ad4._.js.map