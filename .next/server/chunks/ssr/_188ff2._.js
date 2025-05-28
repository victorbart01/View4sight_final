module.exports = {

"[project]/components/common/LanguageSelect.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LanguageSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const languages = [
    "English",
    "العربية",
    "中文"
];
;
function LanguageSelect() {
    const [langOpen, setLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLang, setSelectedLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(languages[0]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-inline-block",
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                onClick: ()=>setLangOpen((pre)=>!pre),
                className: "hstack gap-1 text-none fw-medium",
                role: "button",
                "aria-expanded": langOpen,
                "aria-haspopup": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "icon icon-1 unicon-earth-filled"
                    }, void 0, false, {
                        fileName: "[project]/components/common/LanguageSelect.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: selectedLang
                    }, void 0, false, {
                        fileName: "[project]/components/common/LanguageSelect.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-uc-drop-parent-icon": "",
                        className: "uc-icon uc-drop-parent-icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: 12,
                            height: 12,
                            viewBox: "0 0 12 12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px uc-drop ${langOpen ? "uc-open" : ""} `,
                style: {
                    bottom: "40px",
                    right: 0,
                    maxWidth: 1428
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "nav-y gap-1 fw-medium items-end",
                    children: languages.map((language, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>{
                                setSelectedLang(language);
                                setLangOpen(false);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
}}),
"[project]/components/common/ModalVideo.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const ModalVideo = ({ videoId, isOpen, setIsOpen, src })=>{
    const closeModal = ()=>setIsOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: overlayStyle,
            onClick: closeModal,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: modalStyle,
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: closeModal,
                        style: closeButtonStyle,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/components/common/ModalVideo.jsx",
                        lineNumber: 11,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: responsiveIframeContainerStyle,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: src ? src : `https://www.youtube.com/embed/${videoId}?autoplay=1`,
                            title: "YouTube video player",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true,
                            style: iframeStyle
                        }, void 0, false, {
                            fileName: "[project]/components/common/ModalVideo.jsx",
                            lineNumber: 15,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/ModalVideo.jsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/ModalVideo.jsx",
                lineNumber: 10,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/common/ModalVideo.jsx",
            lineNumber: 9,
            columnNumber: 9
        }, this)
    }, void 0, false);
};
// Styles
const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
};
const modalStyle = {
    position: "relative",
    width: "90%",
    maxWidth: "1100px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    overflow: "hidden",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)"
};
const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "30px",
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    zIndex: 1001
};
const responsiveIframeContainerStyle = {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden"
};
const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
};
const __TURBOPACK__default__export__ = ModalVideo;
}}),
"[project]/components/headers/Header6.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Header6)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/menu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleMobileMenu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$ModalVideo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/common/ModalVideo.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Header6({ staticPosition = false }) {
    const [prevScrollPos, setPrevScrollPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollingUp, setScrollingUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setPrevScrollPos(window.pageYOffset);
        const handleScroll = ()=>{
            const currentScrollPos = window.pageYOffset;
            const isScrollingUp = currentScrollPos < prevScrollPos;
            setScrollingUp(currentScrollPos <= 80 ? false : isScrollingUp);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        prevScrollPos
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const header = document.querySelector(".header-seven .uc-navbar-container");
        const menuItems = document.querySelectorAll(".header-seven .has-dd-menu");
        if (!header || menuItems.length === 0) return;
        const handleMouseEnter = ()=>header.classList.remove("uc-navbar-transparent");
        const handleMouseLeave = ()=>header.classList.add("uc-navbar-transparent");
        menuItems.forEach((item)=>{
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });
        return ()=>{
            menuItems.forEach((item)=>{
                item.removeEventListener("mouseenter", handleMouseEnter);
                item.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `uc-header header-seven uc-navbar-sticky-wrap z-999 uc-sticky   ${scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""}`,
                "data-uc-sticky": "start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: `uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent  ${scrollingUp ? "uc-navbar-sticky" : "uc-navbar-transparent"} ${staticPosition ? "position-static" : ""}`,
                    "data-anime": "translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;",
                    style: {
                        transform: "translateY(0px)",
                        opacity: 1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "uc-navbar-main",
                        style: {
                            "--uc-nav-height": "64px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uc-navbar min-h-64px text-gray-900 dark:text-white position-static",
                                "data-uc-navbar": " animation: uc-animation-slide-top-small; duration: 150;",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "uc-navbar-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "uc-logo",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "panel text-none",
                                                    href: `/`,
                                                    style: {
                                                        width: 140
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "dark:d-none",
                                                            alt: "Lexend",
                                                            width: "128",
                                                            height: "34",
                                                            src: "/assets/images/common/logo-new-light.svg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                            lineNumber: 81,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "d-none dark:d-block",
                                                            alt: "Lexend",
                                                            width: "128",
                                                            height: "34",
                                                            src: "/assets/images/common/logo-new-dark.svg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                            lineNumber: 88,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header6.jsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "uc-navbar-nav gap-3 d-none lg:d-flex ltr:ms-2 rtl:me-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "has-dd-menu ",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                role: "button",
                                                                "aria-haspopup": "true",
                                                                children: [
                                                                    "Products",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-uc-navbar-parent-icon": "",
                                                                        className: "uc-icon uc-navbar-parent-icon",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "12",
                                                                            height: "12",
                                                                            viewBox: "0 0 12 12",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                                fill: "none",
                                                                                stroke: "#000",
                                                                                strokeWidth: "1.1",
                                                                                points: "1 3.5 6 8.5 11 3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                lineNumber: 106,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                            lineNumber: 105,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                lineNumber: 99,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "uc-dropbar uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900 uc-navbar-dropdown uc-drop",
                                                                "data-uc-drop": " offset: 0; boundary: true; stretch: x; animation: uc-animation-slide-top-small; animate-out: uc-animation-slide-top-small; duration: 150;",
                                                                style: {
                                                                    overflowX: "auto",
                                                                    top: 64,
                                                                    left: "0",
                                                                    width: "100vw"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "uc-dropbar-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "container",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "uc-dropbar-inner after-bg",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "row gx-5 col-match justify-between",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "col-8",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "panel vstack gap-4 py-4",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "panel vstack gap-4",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "vstack gap-narrow",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                    className: "h5 xl:h4 fw-medium m-0",
                                                                                                                    children: "Lexend's AI Automation Platform"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                    lineNumber: 133,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                    className: "fs-7 text-gray-300",
                                                                                                                    children: "AI-Powered Automation across 500+ apps"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                    lineNumber: 136,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                            lineNumber: 132,
                                                                                                            columnNumber: 39
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "row child-cols-6 gx-6",
                                                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["featurePageLinks"].map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "vstack gap-3",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                                            className: "h6 m-0",
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                    className: `fs-7 ${section.icon} fw-bold ltr:me-narrow rtl:ms-narrow`
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                    lineNumber: 148,
                                                                                                                                    columnNumber: 49
                                                                                                                                }, this),
                                                                                                                                " ",
                                                                                                                                section.title
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 147,
                                                                                                                            columnNumber: 47
                                                                                                                        }, this),
                                                                                                                        section.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                    href: `/page-features`,
                                                                                                                                    className: "hstack items-start gap-2 text-none text-dark dark:text-white hover:text-primary dark:hover:text-tertiary",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                            className: "icon rounded dark:bg-white",
                                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                                className: "w-32px",
                                                                                                                                                alt: "icon",
                                                                                                                                                src: `/assets/images/custom-icons/${item.icon}`,
                                                                                                                                                width: "24",
                                                                                                                                                height: "24"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                                lineNumber: 161,
                                                                                                                                                columnNumber: 57
                                                                                                                                            }, this)
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                            lineNumber: 160,
                                                                                                                                            columnNumber: 55
                                                                                                                                        }, this),
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "panel",
                                                                                                                                            children: [
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                    className: "fs-7 fw-medium mb-narrow text-inherit",
                                                                                                                                                    children: item.title
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                                    lineNumber: 170,
                                                                                                                                                    columnNumber: 57
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                    className: "fs-8 text-muted",
                                                                                                                                                    children: item.description
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                                    lineNumber: 173,
                                                                                                                                                    columnNumber: 57
                                                                                                                                                }, this)
                                                                                                                                            ]
                                                                                                                                        }, void 0, true, {
                                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                            lineNumber: 169,
                                                                                                                                            columnNumber: 55
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                    lineNumber: 156,
                                                                                                                                    columnNumber: 53
                                                                                                                                }, this)
                                                                                                                            }, idx, false, {
                                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                lineNumber: 155,
                                                                                                                                columnNumber: 51
                                                                                                                            }, this)),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                href: `/page-features`,
                                                                                                                                className: "ltr:ms-6 rtl:me-6 text-none fs-8 text-dark dark:text-white hover:text-primary dark:hover:text-tertiary",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                        className: "border-bottom hover:border-primary duration-150",
                                                                                                                                        children: section.viewAllText
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                        lineNumber: 186,
                                                                                                                                        columnNumber: 51
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                        className: "fs-8 unicon-arrow-up-right fw-bold"
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                        lineNumber: 189,
                                                                                                                                        columnNumber: 51
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                lineNumber: 182,
                                                                                                                                columnNumber: 49
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 181,
                                                                                                                            columnNumber: 47
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, index, true, {
                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                    lineNumber: 143,
                                                                                                                    columnNumber: 45
                                                                                                                }, this))
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                            lineNumber: 140,
                                                                                                            columnNumber: 39
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 131,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                lineNumber: 130,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                            lineNumber: 129,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "col-4",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800 border-start",
                                                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sections"].map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "panel category-section",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                className: "h6",
                                                                                                                children: section.title
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                lineNumber: 206,
                                                                                                                columnNumber: 41
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                                className: "uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12",
                                                                                                                children: section.links.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                            href: link.href,
                                                                                                                            children: link.text
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 210,
                                                                                                                            columnNumber: 47
                                                                                                                        }, this)
                                                                                                                    }, i, false, {
                                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                        lineNumber: 209,
                                                                                                                        columnNumber: 45
                                                                                                                    }, this))
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                lineNumber: 207,
                                                                                                                columnNumber: 41
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, index, true, {
                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                        lineNumber: 202,
                                                                                                        columnNumber: 39
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                lineNumber: 200,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                            lineNumber: 199,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                    lineNumber: 128,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                lineNumber: 127,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                            lineNumber: 126,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "uc-dropbar-footer py-2 xl:py-3 border-top bg-white dark:bg-gray-900 dark:text-white",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "container",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "nav-x gap-4 fs-8 fw-medium",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                            href: "#",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: "fs-8 unicon-api fw-bold"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 229,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "border-bottom hover:border-primary duration-150",
                                                                                                    children: "Explore Apps"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 230,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                            lineNumber: 228,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                        lineNumber: 227,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                            href: "#",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: "fs-8 unicon-airplay fw-bold"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 237,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "border-bottom hover:border-primary duration-150",
                                                                                                    children: "AI Solutions"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 238,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                            lineNumber: 236,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                        lineNumber: 235,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                            href: "#",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: "fs-8 unicon-cloud-lightning fw-bold"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 245,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "border-bottom hover:border-primary duration-150",
                                                                                                    children: "Join Lexend Early Access"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 246,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                            lineNumber: 244,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                        lineNumber: 243,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                lineNumber: 226,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                            lineNumber: 225,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                lineNumber: 115,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "has-dd-menu",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                role: "button",
                                                                "aria-haspopup": "true",
                                                                children: [
                                                                    "Solutions",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-uc-navbar-parent-icon": "",
                                                                        className: "uc-icon uc-navbar-parent-icon",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "12",
                                                                            height: "12",
                                                                            viewBox: "0 0 12 12",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                                fill: "none",
                                                                                stroke: "#000",
                                                                                strokeWidth: "1.1",
                                                                                points: "1 3.5 6 8.5 11 3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                lineNumber: 264,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                            lineNumber: 263,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                lineNumber: 257,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "uc-dropbar uc-dropbar-top p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top rounded-0 overflow-hidden shadow-xl bg-white dark:bg-gray-900 uc-drop uc-navbar-dropdown",
                                                                "data-uc-drop": " offset: 0; boundary: true;  stretch: x; animation: uc-animation-slide-top-small; duration: 150;",
                                                                style: {
                                                                    overflowX: "auto",
                                                                    top: 64,
                                                                    left: "-307.5px",
                                                                    width: 1903,
                                                                    maxWidth: 1903
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "uc-dropbar-content",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "container",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "uc-dropbar-inner after-bg",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "row gx-5 col-match justify-between",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "col-8",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "panel vstack gap-4 py-4",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "vstack gap-narrow flex-none",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                className: "h5 xl:h4 fw-medium m-0",
                                                                                                                children: "Workflow quick-start automation guide"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                lineNumber: 291,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "fs-7 text-gray-300",
                                                                                                                children: "How Lexend can help you automate your work"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                lineNumber: 294,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                        lineNumber: 290,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "row child-cols-4 gx-4 col-match justify-between",
                                                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sections2"].map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                                        className: "h6 mb-3",
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                className: `fs-7 ${section.icon} fw-bold ltr:me-narrow rtl:ms-narrow`
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                lineNumber: 303,
                                                                                                                                columnNumber: 45
                                                                                                                            }, this),
                                                                                                                            " ",
                                                                                                                            section.title
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                        lineNumber: 302,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                                        className: "uc-nav uc-navbar-dropdown-nav vstack gap-2",
                                                                                                                        children: section.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                    className: "hstack items-start gap-2",
                                                                                                                                    href: `/page-features`,
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "cstack min-w-32px h-32px rounded bg-tertiary",
                                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                className: `icon-1 ${item.icon} fw-bold text-primary`
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                                lineNumber: 316,
                                                                                                                                                columnNumber: 53
                                                                                                                                            }, this)
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                            lineNumber: 315,
                                                                                                                                            columnNumber: 51
                                                                                                                                        }, this),
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                            className: "vstack gap-narrow mt-nnarrow",
                                                                                                                                            children: [
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                                                                                                    className: "fw-medium dark:text-white",
                                                                                                                                                    children: item.text
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                                    lineNumber: 321,
                                                                                                                                                    columnNumber: 53
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                    className: "fs-8 text-muted",
                                                                                                                                                    children: item.description
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                                    lineNumber: 324,
                                                                                                                                                    columnNumber: 53
                                                                                                                                                }, this)
                                                                                                                                            ]
                                                                                                                                        }, void 0, true, {
                                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                            lineNumber: 320,
                                                                                                                                            columnNumber: 51
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                    lineNumber: 311,
                                                                                                                                    columnNumber: 49
                                                                                                                                }, this)
                                                                                                                            }, i, false, {
                                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                lineNumber: 310,
                                                                                                                                columnNumber: 47
                                                                                                                            }, this))
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                        lineNumber: 308,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, index, true, {
                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                lineNumber: 301,
                                                                                                                columnNumber: 41
                                                                                                            }, this))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                        lineNumber: 299,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                lineNumber: 289,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                            lineNumber: 288,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "col-4",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800 border-start",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "row child-cols gx-2",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "col-4",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "featured-image panel",
                                                                                                                    "data-uc-lightbox": "video-autoplay: true;",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                                                                                            className: "featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                className: "media-cover image uc-transition-scale-up uc-transition-opaque",
                                                                                                                                alt: "Image",
                                                                                                                                src: "/assets/images/common/login.webp",
                                                                                                                                width: "1500",
                                                                                                                                height: "1000"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                lineNumber: 346,
                                                                                                                                columnNumber: 45
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 345,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                            className: "btn btn-md btn-alt-primary bg-tertiary p-0 w-32px h-32px position-absolute bottom-0 ltr:start-0 rtl:end-0 m-1",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                className: "icon-narrow unicon-play-filled-alt text-primary"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                                lineNumber: 355,
                                                                                                                                columnNumber: 45
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 354,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                                            onClick: ()=>setIsOpen(true),
                                                                                                                            "data-caption": "Easy project managment of any complexity.",
                                                                                                                            "data-attrs": "width: 640; height: 480;",
                                                                                                                            className: "position-cover",
                                                                                                                            role: "button"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 357,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                    lineNumber: 341,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                lineNumber: 340,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "vstack gap-1",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                            className: "fs-6 fw-bold m-0 text-dark dark:text-white",
                                                                                                                            children: "Say goodbye to the hassle of multi-tasks"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 368,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                            className: "fs-7",
                                                                                                                            children: "Managing multiple tasks with AI automation."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 372,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                    lineNumber: 367,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                lineNumber: 366,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                        lineNumber: 339,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "panel category-section",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                className: "h6",
                                                                                                                children: "Start with ease!"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                lineNumber: 380,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                                className: "uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                            href: `/page-contact`,
                                                                                                                            children: "Hire an Expert"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 383,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                        lineNumber: 382,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                                            href: "#",
                                                                                                                            children: "Customer stories"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 388,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                        lineNumber: 387,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                                            href: "#",
                                                                                                                            children: "Resources"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 391,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                        lineNumber: 390,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                            href: `/blog-sidebar`,
                                                                                                                            children: "Blog"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 394,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                        lineNumber: 393,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                            href: `/page-career`,
                                                                                                                            children: "Career"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 399,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                        lineNumber: 398,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                            href: `/page-contact`,
                                                                                                                            children: "Help Center"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                            lineNumber: 404,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                        lineNumber: 403,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                                lineNumber: 381,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                                        lineNumber: 379,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                                lineNumber: 338,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                            lineNumber: 337,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                    lineNumber: 287,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                lineNumber: 286,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                            lineNumber: 285,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                        lineNumber: 284,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "uc-dropbar-footer py-2 xl:py-3 border-top bg-white dark:bg-gray-900 dark:text-white",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "container",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "nav-x gap-4 fs-8 fw-medium",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                            href: "#",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: "fs-8 unicon-api fw-bold"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 421,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "border-bottom hover:border-primary duration-150",
                                                                                                    children: "Explore Apps"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 422,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                            lineNumber: 420,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                        lineNumber: 419,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                            href: "#",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: "fs-8 unicon-airplay fw-bold"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 429,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "border-bottom hover:border-primary duration-150",
                                                                                                    children: "AI Solutions"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 430,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                            lineNumber: 428,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                        lineNumber: 427,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                            href: "#",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: "fs-8 unicon-cloud-lightning fw-bold"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 437,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "border-bottom hover:border-primary duration-150",
                                                                                                    children: "Join Lexend Early Access"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                                                    lineNumber: 438,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                                            lineNumber: 436,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                                        lineNumber: 435,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                                lineNumber: 418,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                                            lineNumber: 417,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                                        lineNumber: 416,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/headers/Header6.jsx",
                                                                lineNumber: 273,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                        lineNumber: 256,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/blog-sidebar`,
                                                            children: "Insights"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                            lineNumber: 449,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                        lineNumber: 448,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/page-pricing-2`,
                                                            children: "Pricing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                            lineNumber: 452,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                        lineNumber: 451,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://lexend-nextjs-preview.netlify.app/",
                                                            target: "_blank",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "icon unicon-cube fw-bold ltr:me-narrow rtl:ms-narrow text-primary dark:text-tertiary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "All Demo Pages"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                            lineNumber: 455,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                        lineNumber: 454,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/headers/Header6.jsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/headers/Header6.jsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "uc-navbar-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "nav-x d-none lg:d-flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "d-none xl:d-inline-flex",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/page-contact-2`,
                                                            children: "Contact sales"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                            lineNumber: 468,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                        lineNumber: 467,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/sign-in`,
                                                            children: "Log in"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                            lineNumber: 471,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/headers/Header6.jsx",
                                                        lineNumber: 470,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/headers/Header6.jsx",
                                                lineNumber: 466,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "btn btn-sm btn-primary text-tertiary dark:bg-tertiary dark:text-primary dark:hover:bg-tertiary fw-bold rounded-pill lg:px-2 text-none hover:contrast-shadow d-none lg:d-inline-flex",
                                                href: `/sign-up`,
                                                children: "Sign up"
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header6.jsx",
                                                lineNumber: 474,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "d-block lg:d-none uc-icon uc-navbar-toggle-icon",
                                                onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openMobileMenu"],
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            className: "line-1",
                                                            y: "3",
                                                            width: "20",
                                                            height: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                            lineNumber: 486,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            className: "line-2",
                                                            y: "9",
                                                            width: "20",
                                                            height: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                            lineNumber: 492,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            className: "line-3",
                                                            y: "9",
                                                            width: "20",
                                                            height: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                            lineNumber: 498,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            className: "line-4",
                                                            y: "15",
                                                            width: "20",
                                                            height: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/headers/Header6.jsx",
                                                            lineNumber: 504,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/headers/Header6.jsx",
                                                    lineNumber: 484,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/headers/Header6.jsx",
                                                lineNumber: 480,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/headers/Header6.jsx",
                                        lineNumber: 465,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/headers/Header6.jsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/headers/Header6.jsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/headers/Header6.jsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/headers/Header6.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/headers/Header6.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$ModalVideo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isOpen,
                src: "/assets/images/media/lexend_vid.webm",
                setIsOpen: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/headers/Header6.jsx",
                lineNumber: 518,
                columnNumber: 7
            }, this),
            " "
        ]
    }, void 0, true);
}
}}),
"[project]/data/blogs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/components/homes/home-7/Blogs.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Blogs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$blogs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/blogs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
"use client";
;
;
;
;
;
;
;
function Blogs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "blog_posts",
        className: "blog-posts section panel overflow-hidden swiper-parent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel py-4 md:py-6 xl:py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row child-cols-12 g-4 sm:g-6 xl:g-8",
                        "data-anime": "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "heading vstack gap-2 justify-center items-center text-center panel",
                                    "data-anime": "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "title h3 xl:h2 m-0",
                                        children: [
                                            "Latest from",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-1 bg-tertiary text-primary d-block lg:d-inline-block",
                                                children: "our insights"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                lineNumber: 29,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                        lineNumber: 27,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content panel",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                                        className: "swiper p-2 swiper-match",
                                        spaceBetween: 16,
                                        slidesPerView: 1.1,
                                        loop: true,
                                        modules: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                                        ],
                                        navigation: {
                                            prevEl: ".sndbp1",
                                            nextEl: ".sndbn1"
                                        },
                                        breakpoints: {
                                            640: {
                                                slidesPerView: 2.3,
                                                spaceBetween: 24
                                            },
                                            768: {
                                                slidesPerView: 3.22,
                                                spaceBetween: 24
                                            },
                                            1024: {
                                                slidesPerView: 4,
                                                spaceBetween: 24
                                            }
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$blogs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slidesData"].map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "post type-post panel overflow-hidden vstack border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                            className: "featured-image m-0 rounded ratio ratio-16x9 rounded-0 uc-transition-toggle overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "media-cover image uc-transition-scale-up uc-transition-opaque",
                                                                    alt: slide.title,
                                                                    src: slide.imgSrc,
                                                                    width: 768,
                                                                    height: 560
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                                    lineNumber: 66,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/blog-details/${slide.id}`,
                                                                    className: "position-cover",
                                                                    "data-caption": slide.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                                    lineNumber: 73,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                            lineNumber: 65,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel vstack gap-1 p-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "text-none",
                                                                    href: `/blog-details/${slide.id}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "post-title h5 m-0 ltr:pe-4 rtl:ps-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: slide.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                                            lineNumber: 86,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                                        lineNumber: 85,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                                    lineNumber: 80,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "content vstack justify-between gap-narrow",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "post-excrept fs-6 opacity-70",
                                                                            children: slide.excerpt
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                                            lineNumber: 90,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: `/blog-details/${slide.id}`,
                                                                            className: "uc-link dark:text-tertiary fs-7 xl:fs-6 fw-bold hstack gap-1 sm:mt-1 xl:mt-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Read post"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                                                    lineNumber: 97,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "position-relative icon unicon-arrow-up-right fw-bold rtl:-rotate-90 translate-y-px"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                                                    lineNumber: 98,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                                            lineNumber: 93,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                                    lineNumber: 89,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                            lineNumber: 79,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 25
                                                }, this)
                                            }, slide.id, false, {
                                                fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                lineNumber: 63,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                        lineNumber: 37,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel hstack justify-center items-centerborder contrast- gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel hstack items-end gap-narrow xl:gap-1 rtl:flex-row-reverse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "swiper-nav swiper-nav-prev btn w-40px sndbp1 xl:w-48px h-40px xl:h-48px rounded-circle btn btn-md btn-alt-primary border dark:bg-black dark:text-white order-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "icon-1 xl:icon-2 unicon-arrow-left"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                lineNumber: 111,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "swiper-nav swiper-nav-next btn w-40px sndbn1 xl:w-48px h-40px xl:h-48px rounded-circle btn btn-md btn-alt-primary border dark:bg-black dark:text-white order-2 rtl:order-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "icon-1 xl:icon-2 unicon-arrow-right"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                    lineNumber: 121,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                                lineNumber: 117,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Blogs.jsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homes/home-7/Blogs.jsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-7/Blogs.jsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-7/Blogs.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-7/Blogs.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-7/Blogs.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/data/brands.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/components/homes/home-7/Brands.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Brands)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$brands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/brands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
"use client";
;
;
;
;
;
function Brands() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "companies_sponsores",
        className: "companies-sponsores section panel overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container sm:max-w-lg xl:max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center",
                        "data-anime": "onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Trusted by over 1.7 million companies worldwide"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Brands.jsx",
                                lineNumber: 21,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "element-brands text-gray-900 dark:text-white mask-x",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                                        slidesPerView: 2.25,
                                        centeredSlides: true,
                                        loop: true,
                                        autoplay: {
                                            delay: 7000,
                                            disableOnInteraction: true
                                        },
                                        speed: 7000,
                                        breakpoints: {
                                            0: {
                                                slidesPerView: 2.25
                                            },
                                            640: {
                                                slidesPerView: 4,
                                                centeredSlides: false
                                            },
                                            1024: {
                                                slidesPerView: 6,
                                                spaceBetween: 100
                                            }
                                        },
                                        modules: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                                        ],
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$brands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brands4"].map((brand, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                                className: "text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "brand-item-image h-40px xl:h-48px",
                                                    alt: brand.alt,
                                                    src: brand.src,
                                                    width: brand.width,
                                                    height: 48
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-7/Brands.jsx",
                                                    lineNumber: 41,
                                                    columnNumber: 25
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/components/homes/home-7/Brands.jsx",
                                                lineNumber: 40,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-7/Brands.jsx",
                                        lineNumber: 26,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-7/Brands.jsx",
                                    lineNumber: 25,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Brands.jsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homes/home-7/Brands.jsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-7/Brands.jsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-7/Brands.jsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-7/Brands.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-7/Brands.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/data/faq.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
}}),
"[project]/components/common/Accordion3.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Accordion3)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/faq.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Accordion3({ faqData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["accordionItems"], parentClass = "" }) {
    const parentRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const questionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const answerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        questionRefs.current.forEach((el)=>{
            el.classList.remove("active");
        });
        parentRefs.current.forEach((el)=>{
            el.classList.remove("active");
        });
        answerRefs.current.forEach((el)=>{
            el.style.height = "0px";
            el.style.overflow = "hidden";
            el.style.transition = "all 0.5s ease-in-out";
            el.style.marginTop = "0px";
        });
        if (currentIndex !== -1) {
            questionRefs.current[currentIndex].classList.add("active");
            parentRefs.current[currentIndex].classList.add("active");
            const element = answerRefs.current[currentIndex];
            element.style.height = element.scrollHeight + "px";
            element.style.overflow = "hidden";
            element.style.transition = "all 0.5s ease-in-out";
            element.style.marginTop = "20px";
        }
    }, [
        currentIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: faqData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                ref: (el)=>parentRefs.current[index] = el,
                className: `panel ${currentIndex == index ? "uc-open" : ""} ${parentClass} `,
                onClick: ()=>{
                    setCurrentIndex((pre)=>pre == index ? -1 : index);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "uc-accordion-title h6 md:h5",
                        ref: (el)=>questionRefs.current[index] = el,
                        children: item.question
                    }, void 0, false, {
                        fileName: "[project]/components/common/Accordion3.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "uc-accordion-content lg:fs-4 opacity-70",
                        ref: (el)=>answerRefs.current[index] = el,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: item.answer
                        }, void 0, false, {
                            fileName: "[project]/components/common/Accordion3.jsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/Accordion3.jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/components/common/Accordion3.jsx",
                lineNumber: 40,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
}}),
"[project]/data/features.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/components/homes/home-7/Features.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Features)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$features$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/features.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const categories = [
    "Marketing Automation",
    "Scheduling",
    "Project Management",
    "Finance",
    "Spreadsheets"
];
function Features() {
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(categories[0]);
    const [filtered, setFiltered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$features$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integrations"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setFiltered([
            ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$features$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integrations"]
        ].filter((elm)=>elm.categories.includes(activeCategory)));
    }, [
        activeCategory
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "main_features",
        className: "main-features section panel overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel py-4 md:py-6 xl:py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container sm:max-w-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 mx-auto text-center",
                            "data-anime": "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "fs-7 fw-medium py-narrow px-2 border rounded-pill text-primary dark:text-tertiary",
                                    style: {
                                        transform: "translateY(0px)",
                                        opacity: 1
                                    },
                                    children: "Integrations"
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "h3 lg:h2 m-0",
                                    style: {
                                        transform: "translateY(0px)",
                                        opacity: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-1 bg-tertiary text-primary",
                                            children: "AI Automation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-7/Features.jsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        "across 500+ apps"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "fs-6 xl:fs-3 xl:px-8",
                                    style: {
                                        transform: "translateY(0px)",
                                        opacity: 1
                                    },
                                    children: "See how we help your team solve today’s biggest challenges."
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/homes/home-7/Features.jsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel vstack items-center gap-4 md:gap-6 lg:gap-8",
                            "data-anime": "onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "uc-subnav uc-subnav-outline-pill gap-1 lg:gap-2 fs-5 fw-medium justify-start lg:justify-center mx-auto overflow-scroll hide-scrollbar flex-nowrap max-w-100",
                                    "data-uc-switcher": "connect: .products-lisiting",
                                    role: "tablist",
                                    style: {
                                        transform: "translateY(0px)",
                                        opacity: 1
                                    },
                                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            role: "presentation",
                                            className: activeCategory === category ? "uc-active" : "",
                                            onClick: ()=>setActiveCategory(category),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                children: category
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-7/Features.jsx",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this)
                                        }, category, false, {
                                            fileName: "[project]/components/homes/home-7/Features.jsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "products-lisiting flex-none w-100 uc-switcher",
                                    role: "presentation",
                                    style: {
                                        touchAction: "pan-y pinch-zoom",
                                        transform: "translateY(0px)",
                                        opacity: 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "uc-active",
                                        id: "uc-switcher-24",
                                        role: "tabpanel",
                                        "aria-labelledby": "uc-switcher-23",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "panel",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "row child-cols-12 sm:child-cols-6 lg:child-cols-4 gx-2 lg:gx-3 gy-4 lg:gy-6 col-match",
                                                children: filtered.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel overflow-hidden border bg-white dark:bg-gray-900 dark:text-white hover:border-dark hover:contrast-shadow duration-150 hover:-translate-y-1 rounded-1-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                                    className: "featured-image m-0 rounded ratio ratio-3x2 rounded-0 border-bottom border-dark border-opacity-20 uc-transition-toggle overflow-hidden",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: "media-cover image uc-transition-scale-up uc-transition-opaque",
                                                                        alt: item.title,
                                                                        src: item.imgSrc,
                                                                        width: 644,
                                                                        height: 382
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/homes/home-7/Features.jsx",
                                                                        lineNumber: 98,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "content vstack items-start gap-4 p-2 lg:p-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "vstack gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "h5 m-0",
                                                                                    children: item.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                                                                    lineNumber: 108,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "fs-6 opacity-60",
                                                                                    children: item.description
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                                                                    lineNumber: 109,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/homes/home-7/Features.jsx",
                                                                            lineNumber: 107,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#",
                                                                            className: "uc-link border-bottom fw-bold dark:text-tertiary",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Get started"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                                                                    lineNumber: 117,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "icon-narrow unicon-arrow-right fw-bold"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                                                                    lineNumber: 118,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/homes/home-7/Features.jsx",
                                                                            lineNumber: 113,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                                                    lineNumber: 106,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/page-features`,
                                                                    className: "position-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                                                    lineNumber: 121,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/homes/home-7/Features.jsx",
                                                            lineNumber: 96,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/components/homes/home-7/Features.jsx",
                                                        lineNumber: 95,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-7/Features.jsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-7/Features.jsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-7/Features.jsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/page-integrations`,
                                    className: "btn btn-md xl:btn-lg btn-primary text-tertiary dark:bg-tertiary dark:text-primary dark:hover:bg-tertiary-300 px-3 lg:px-5 fw-bold",
                                    style: {
                                        transform: "translateY(0px)",
                                        opacity: 1
                                    },
                                    children: "Browse all integrations"
                                }, void 0, false, {
                                    fileName: "[project]/components/homes/home-7/Features.jsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/homes/home-7/Features.jsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/homes/home-7/Features.jsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-7/Features.jsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-7/Features.jsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-7/Features.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/common/TyperComponent.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>TyperComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-type-animation/dist/esm/index.es.js [app-ssr] (ecmascript)");
"use client";
;
const demostrings = [
    "Bank Account",
    "Web Payment",
    " Android & ISO"
];
;
function TyperComponent({ strings = demostrings }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeAnimation"], {
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
}}),
"[project]/components/homes/home-7/Hero.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$TyperComponent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/common/TyperComponent.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
function Hero() {
    const parallax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useParallax"])({
        scale: [
            0.85,
            1.1
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "hero_header",
        className: "hero-header hero-seven-scene section panel overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "position-absolute top-0 start-0 end-0 h-screen bg-tertiary-300 dark:bg-primary-700"
            }, void 0, false, {
                fileName: "[project]/components/homes/home-7/Hero.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "position-absolute top-0 start-0 end-0 h-screen bg-gradient-to-b from-transparent via-transparent to-white dark:to-black"
            }, void 0, false, {
                fileName: "[project]/components/homes/home-7/Hero.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-none lg:d-block",
                        "data-anime": "targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: anime.stagger(150, {start: 500});",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                alt: "Icon",
                                className: "d-inline-block position-absolute w-72px dark:d-none",
                                style: {
                                    top: "15%",
                                    left: "10%"
                                },
                                width: 85,
                                height: 73,
                                src: "assets/images/vectors/marketing.svg"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                alt: "Icon",
                                className: "d-inline-block position-absolute w-72px dark:d-none",
                                style: {
                                    top: "15%",
                                    right: "10%"
                                },
                                width: 73,
                                height: 66,
                                src: "assets/images/vectors/charts-pc.svg"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                alt: "Icon",
                                className: "d-inline-block position-absolute w-64px dark:d-none",
                                style: {
                                    top: "35%",
                                    right: "-1%",
                                    transform: "rotate(45deg)"
                                },
                                width: 69,
                                height: 70,
                                src: "assets/images/vectors/group.svg"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                alt: "Icon",
                                className: "d-inline-block position-absolute w-48px dark:d-none",
                                style: {
                                    top: "40%",
                                    left: "15%"
                                },
                                width: 49,
                                height: 60,
                                src: "assets/images/vectors/idea.svg"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                alt: "Icon",
                                className: "d-inline-block position-absolute w-64px dark:d-none",
                                style: {
                                    top: "30%",
                                    left: "-1%"
                                },
                                width: 69,
                                height: 70,
                                src: "assets/images/vectors/group.svg"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                alt: "Icon",
                                className: "d-inline-block position-absolute w-72px d-none dark:d-block",
                                style: {
                                    top: "15%",
                                    left: "10%"
                                },
                                width: 85,
                                height: 73,
                                src: "assets/images/vectors/marketing-dark.svg"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                alt: "Icon",
                                className: "d-inline-block position-absolute w-72px d-none dark:d-block",
                                style: {
                                    top: "15%",
                                    right: "10%"
                                },
                                width: 73,
                                height: 66,
                                src: "assets/images/vectors/charts-pc-dark.svg"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                alt: "Icon",
                                className: "d-inline-block position-absolute w-64px d-none dark:d-block",
                                style: {
                                    top: "35%",
                                    right: "-1%",
                                    transform: "rotate(45deg)"
                                },
                                width: 69,
                                height: 70,
                                src: "assets/images/vectors/group-dark.svg"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                alt: "Icon",
                                className: "d-inline-block position-absolute w-48px d-none dark:d-block",
                                style: {
                                    top: "40%",
                                    left: "15%"
                                },
                                width: 49,
                                height: 60,
                                src: "assets/images/vectors/idea-dark.svg"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                alt: "Icon",
                                className: "d-inline-block position-absolute w-64px d-none dark:d-block",
                                style: {
                                    top: "30%",
                                    left: "-1%"
                                },
                                width: 69,
                                height: 70,
                                src: "assets/images/vectors/group-dark.svg"
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homes/home-7/Hero.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container max-w-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-inner panel",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row child-cols-12 justify-center items-center g-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "panel vstack items-center gap-2 px-2 text-center",
                                            "data-anime": "targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fs-7 fw-bold py-narrow px-2 border rounded-pill text-primary dark:text-tertiary",
                                                    children: "Automate your workflow"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "h3 sm:h2 md:h1 lg:display-6 lh-lg mb-1 xl:mb-2 mt-2",
                                                    style: {
                                                        transform: "translateY(0px)",
                                                        opacity: 1
                                                    },
                                                    children: [
                                                        "Get more done in less time with",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-1 bg-primary text-tertiary dark:bg-tertiary dark:text-primary",
                                                            "data-uc-typed": "typeSpeed: 80; backSpeed: 50; backDelay: 1500; loop: true;",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$TyperComponent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                strings: [
                                                                    "AI automation",
                                                                    "Chatbots",
                                                                    "AI management"
                                                                ]
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                lineNumber: 136,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                            lineNumber: 132,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "typed-cursor",
                                                            "aria-hidden": "true",
                                                            children: "|"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "fs-6 xl:fs-3 xl:px-6",
                                                    children: [
                                                        "Unlock your ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            className: "dark:text-white",
                                                            children: "productivity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                            lineNumber: 146,
                                                            columnNumber: 33
                                                        }, this),
                                                        " ",
                                                        "potential and automate as fast as you can type with our intuitive and powerful",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            className: "dark:text-white",
                                                            children: "AI automation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                            lineNumber: 149,
                                                            columnNumber: 21
                                                        }, this),
                                                        " app."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "vstack md:hstack justify-center gap-2 mt-3",
                                                    style: {
                                                        transform: "translateY(0px)",
                                                        opacity: 1
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "btn btn-md xl:btn-lg btn-alt-dark border-dark px-3 lg:px-5 fw-bold contrast-shadow-sm hover:contrast-shadow",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                alt: "Google Icon",
                                                                src: "/assets/images/template/google-icon.svg",
                                                                width: "20",
                                                                height: "21"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                lineNumber: 159,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Start free trial"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "panel mt-3 lg:mt-4 min-w-700px text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "row child-cols-12 lg:child-cols-4 justify-center gx-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "hstack justify-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "icon mb-narrow",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: "w-24px dark:d-none",
                                                                                    alt: "icon",
                                                                                    width: 24,
                                                                                    height: 24,
                                                                                    src: "assets/images/custom-icons/icon-08.svg"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                                    lineNumber: 174,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: "w-24px d-none dark:d-block",
                                                                                    alt: "icon",
                                                                                    width: 24,
                                                                                    height: 24,
                                                                                    src: "assets/images/custom-icons/dark-icon-08.svg"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                                    lineNumber: 181,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                            lineNumber: 173,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "fs-7 fw-medium mb-narrow text-inherit",
                                                                            children: "AI-Powered Automation"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                            lineNumber: 189,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                lineNumber: 171,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "hstack justify-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "icon mb-narrow",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: "w-24px dark:d-none",
                                                                                    alt: "icon",
                                                                                    width: 24,
                                                                                    height: 24,
                                                                                    src: "assets/images/custom-icons/icon-07.svg"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                                    lineNumber: 197,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: "w-24px d-none dark:d-block",
                                                                                    alt: "icon",
                                                                                    width: 24,
                                                                                    height: 24,
                                                                                    src: "assets/images/custom-icons/dark-icon-07.svg"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                                    lineNumber: 204,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                            lineNumber: 196,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "fs-7 fw-medium mb-narrow text-inherit",
                                                                            children: "Chatbots, Free forever"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                            lineNumber: 212,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "hstack justify-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "icon mb-narrow",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: "w-24px dark:d-none",
                                                                                    alt: "icon",
                                                                                    width: 24,
                                                                                    height: 24,
                                                                                    src: "assets/images/custom-icons/icon-04.svg"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                                    lineNumber: 220,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: "w-24px d-none dark:d-block",
                                                                                    alt: "icon",
                                                                                    width: 24,
                                                                                    height: 24,
                                                                                    src: "assets/images/custom-icons/dark-icon-04.svg"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                                    lineNumber: 227,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                            lineNumber: 219,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "fs-7 fw-medium mb-narrow text-inherit",
                                                                            children: "Cutting-edge AI features"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                            lineNumber: 235,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                                lineNumber: 217,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-7/Hero.jsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "uc-video-scene",
                                        ref: parallax.ref,
                                        "data-anime": "scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "panel max-w-1000px mx-auto mt-2 rounded lg:rounded-1-5 xl:rounded-2 border border-dark contrast-shadow-lg overflow-hidden",
                                            "data-anime": "onscroll: .hero-header; onscroll-trigger: 0.5; translateY: [-80, 0]; scale: [0.8, 1]; easing: linear;",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                preload: "auto",
                                                "data-uc-video": "autoplay: true;",
                                                playsInline: true,
                                                muted: true,
                                                loop: true,
                                                autoPlay: true,
                                                poster: "assets/images/media/lexend-home-7.png",
                                                src: "/assets/images/media/lexend-home-7.webm",
                                                title: "Video title"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                                lineNumber: 253,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-7/Hero.jsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homes/home-7/Hero.jsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/homes/home-7/Hero.jsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/homes/home-7/Hero.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/homes/home-7/Hero.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/homes/home-7/Hero.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}}),
"[project]/data/testimonials.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
}}),
"[project]/components/homes/home-7/Testimonials.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Testimonials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$brands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/brands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$testimonials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/testimonials.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
"use client";
;
;
;
;
;
;
function Testimonials() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "clients_feedbacks",
        className: "clients-feedbacks section panel overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-outer panel pb-6 xl:pb-9",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-inner panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "h4 sm:h3 lg:h2 m-0 text-center max-w-650px mx-auto",
                                children: [
                                    "See what our",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-1 bg-tertiary text-primary",
                                        children: "happy users"
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                        lineNumber: 24,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    "are sharing about us!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel w-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "brands panel vstack gap-3 sm:gap-4 xl:gap-5 mb-4 lg:mb-6 xl:mb-8 text-center",
                                        "data-anime": "onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "h6",
                                                children: "Trusted by over 1.7 million companies worldwide"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "panel",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "element-brands text-gray-900 dark:text-white mask-x",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                                                        slidesPerView: 2.25,
                                                        centeredSlides: true,
                                                        loop: true,
                                                        autoplay: {
                                                            delay: 7000,
                                                            disableOnInteraction: true
                                                        },
                                                        speed: 7000,
                                                        breakpoints: {
                                                            0: {
                                                                slidesPerView: 2.25
                                                            },
                                                            640: {
                                                                slidesPerView: 4,
                                                                centeredSlides: false
                                                            },
                                                            1024: {
                                                                slidesPerView: 6,
                                                                spaceBetween: 100
                                                            }
                                                        },
                                                        modules: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                                                        ],
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$brands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brands4"].map((brand, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "brand-item-image h-40px xl:h-48px",
                                                                    alt: brand.alt,
                                                                    src: brand.src,
                                                                    width: brand.width,
                                                                    height: 48
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                                    lineNumber: 54,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                                lineNumber: 53,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                        lineNumber: 39,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                    lineNumber: 38,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                                        className: "swiper overflow-unset",
                                        spaceBetween: 16,
                                        slidesPerView: 1.25,
                                        centeredSlides: true,
                                        breakpoints: {
                                            1024: {
                                                slidesPerView: 4,
                                                spaceBetween: 24,
                                                centeredSlides: false
                                            }
                                        },
                                        initialSlide: 2,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$testimonials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testimonials4"].map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                                className: "swiper-slide",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border hover:contrast-shadow-md hover:border-dark duration-150",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel vstack items-start gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70",
                                                                children: [
                                                                    "“",
                                                                    testimonial.text,
                                                                    "”"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                                lineNumber: 85,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                            lineNumber: 84,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "panel hstack gap-2 mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "w-40px rounded-circle",
                                                                    alt: testimonial.name,
                                                                    src: testimonial.imgSrc,
                                                                    width: 150,
                                                                    height: 150
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                                    lineNumber: 90,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "panel vstack justify-center gap-narrow",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "nav-x gap-0 text-warning",
                                                                            children: Array(5).fill().map((_, starIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                        className: "icon icon-narrow unicon-star-filled"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                                                        lineNumber: 103,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, starIndex, false, {
                                                                                    fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                                                    lineNumber: 102,
                                                                                    columnNumber: 35
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                                            lineNumber: 98,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "fw-bold ft-secondary m-0",
                                                                            children: testimonial.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                                            lineNumber: 107,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                            lineNumber: 89,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                    lineNumber: 83,
                                                    columnNumber: 23
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                                lineNumber: 82,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "uc-link dark:text-tertiary fw-bold d-inline-flex items-center gap-narrow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "See all feedbacks"
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "icon icon-1 unicon-arrow-right rtl:rotate-180"
                                    }, void 0, false, {
                                        fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "w-500px text-primary dark:text-gray-200",
                                alt: "producthunt-badges",
                                "data-uc-svg": "",
                                src: "/assets/images/vectors/producthunt-badges.svg",
                                width: 426,
                                height: 37
                            }, void 0, false, {
                                fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/homes/home-7/Testimonials.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homes/home-7/Testimonials.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homes/home-7/Testimonials.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(homes)/home-7/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_188ff2._.js.map