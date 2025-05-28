module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/data/products.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "products": (()=>products)
});
const products = [
    {
        id: 1,
        name: "Elegant Watch",
        image: "/assets/images/common/products/img-01.jpg",
        alt: "Elegant Watch",
        discount: "51%",
        oldPrice: 99,
        price: 49,
        rating: 5
    },
    {
        id: 2,
        name: "Hemp Seed",
        image: "/assets/images/common/products/img-02.jpg",
        alt: "Hemp Seed",
        discount: null,
        oldPrice: null,
        price: 49,
        rating: 4
    },
    {
        id: 3,
        name: "White Classic Watch",
        image: "/assets/images/common/products/img-03.jpg",
        alt: "White Classic Watch",
        discount: "67%",
        oldPrice: 89,
        price: 29,
        rating: 5
    },
    {
        id: 4,
        name: "Stylish Starbucks",
        image: "/assets/images/common/products/img-04.jpg",
        alt: "Stylish Starbucks",
        discount: null,
        oldPrice: null,
        price: 20,
        rating: 5
    },
    {
        id: 5,
        name: "Black AirTag",
        image: "/assets/images/common/products/img-05.jpg",
        alt: "Black AirTag",
        discount: null,
        oldPrice: null,
        price: 74,
        rating: 3
    },
    {
        id: 6,
        name: "Modern Headsets",
        image: "/assets/images/common/products/img-06.jpg",
        alt: "Modern Headsets",
        discount: null,
        oldPrice: null,
        price: 24,
        rating: 5
    },
    {
        id: 7,
        name: "Laptop Cover",
        image: "/assets/images/common/products/img-07.jpg",
        alt: "Laptop Cover",
        discount: "70%",
        oldPrice: 80,
        price: 24,
        rating: 5
    },
    {
        id: 8,
        name: "Disney Toys",
        image: "/assets/images/common/products/img-08.jpg",
        alt: "Disney Toys",
        discount: "75%",
        oldPrice: 20,
        price: 5,
        rating: 4
    },
    {
        id: 9,
        name: "Screen Axe",
        image: "/assets/images/common/products/img-09.jpg",
        alt: "Screen Axe",
        discount: "50%",
        oldPrice: 38,
        price: 19,
        rating: 4
    },
    {
        id: 10,
        name: "Airpods Pro",
        image: "/assets/images/common/products/img-10.jpg",
        alt: "Airpods Pro",
        discount: "30%",
        oldPrice: 70,
        price: 49,
        rating: 5
    },
    {
        id: 11,
        name: "USB Cable",
        image: "/assets/images/common/products/img-11.jpg",
        alt: "USB Cable",
        discount: "80%",
        oldPrice: 5,
        price: 1,
        rating: 1
    },
    {
        id: 12,
        name: "Stylish Decoration",
        image: "/assets/images/common/products/img-12.jpg",
        alt: "Stylish Decoration",
        discount: null,
        oldPrice: null,
        price: 120,
        rating: 4
    },
    {
        id: 13,
        name: "Elegant Tree",
        image: "/assets/images/common/products/img-13.jpg",
        alt: "Elegant Tree",
        discount: "50%",
        oldPrice: 50,
        price: 25,
        rating: null
    },
    {
        id: 14,
        name: "Classic Printer",
        image: "/assets/images/common/products/img-14.jpg",
        alt: "Classic Printer",
        discount: null,
        oldPrice: null,
        price: 49,
        rating: 5
    },
    {
        id: 15,
        name: "Sportive Shoes",
        image: "/assets/images/common/products/img-15.jpg",
        alt: "Sportive Shoes",
        discount: "20%",
        oldPrice: 100,
        price: 80,
        rating: 5
    },
    {
        id: 16,
        name: "Old School Camera",
        image: "/assets/images/common/products/img-16.jpg",
        alt: "Old School Camera",
        discount: null,
        oldPrice: null,
        price: 99,
        rating: 4
    }
];
}}),
"[project]/utlis/toggleCart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "closeCart": (()=>closeCart),
    "openCart": (()=>openCart)
});
const openCart = ()=>{
    document.getElementById("uc-cart-panel").classList.add("uc-offcanvas-overlay");
    document.getElementById("uc-cart-panel").classList.add("uc-open");
};
const closeCart = ()=>{
    document.getElementById("uc-cart-panel").classList.remove("uc-offcanvas-overlay");
    document.getElementById("uc-cart-panel").classList.remove("uc-open");
};
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/context/Context.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Context),
    "useContextElement": (()=>useContextElement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/products.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleCart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleCart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const dataContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext();
const useContextElement = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(dataContext);
};
function Context({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [cartProducts, setCartProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wishList, setWishList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [quickViewItem, setQuickViewItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"][0]);
    const [totalPrice, setTotalPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const subtotal = cartProducts.reduce((accumulator, product)=>{
            return accumulator + product.quantity * product.price;
        }, 0);
        setTotalPrice(subtotal);
    }, [
        cartProducts
    ]);
    const addProductToCart = (id)=>{
        if (!cartProducts.filter((elm)=>elm.id == id)[0]) {
            const item = {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((elm)=>elm.id == id)[0],
                quantity: 1
            };
            setCartProducts((pre)=>[
                    ...pre,
                    item
                ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleCart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openCart"])();
        }
    };
    const isAddedToCartProducts = (id)=>{
        if (cartProducts.filter((elm)=>elm.id == id)[0]) {
            return true;
        }
        return false;
    };
    const toggleWishlist = (id)=>{
        if (wishList.includes(id)) {
            setWishList((pre)=>[
                    ...pre.filter((elm)=>elm != id)
                ]);
        } else {
            setWishList((pre)=>[
                    ...pre,
                    id
                ]);
        }
    };
    const isAddedtoWishlist = (id)=>{
        if (wishList.includes(id)) {
            return true;
        }
        return false;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const items = JSON.parse(localStorage.getItem("cartList"));
        if (items?.length) {
            setCartProducts(items);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem("cartList", JSON.stringify(cartProducts));
    }, [
        cartProducts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const items = JSON.parse(localStorage.getItem("wishlist"));
        if (items?.length) {
            setWishList(items);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem("wishlist", JSON.stringify(wishList));
    }, [
        wishList
    ]);
    const [isDark, setisDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const toggleDark = (value)=>{
        if (value) {
            document.documentElement.classList.add("uc-dark");
        } else {
            document.documentElement.classList.remove("uc-dark");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const getBooleanValue = (key)=>{
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : true; // Default to true for dark mode
        };
        // for default dark mode
        const savedValue = getBooleanValue("isDark");
        //for default light mode
        // const savedValue = getBooleanValue("isDark") ? getBooleanValue("isDark") : false;
        toggleDark(savedValue);
        setisDark(savedValue);
    }, []);
    const handleToggle = ()=>{
        const saveBooleanValue = (key, value)=>{
            localStorage.setItem(key, JSON.stringify(value));
        };
        const newValue = !isDark;
        setisDark(newValue);
        saveBooleanValue("isDark", newValue);
        toggleDark(newValue);
    };
    const contextElement = {
        cartProducts,
        setCartProducts,
        totalPrice,
        addProductToCart,
        isAddedToCartProducts,
        toggleWishlist,
        isAddedtoWishlist,
        quickViewItem,
        wishList,
        setQuickViewItem,
        isDark,
        handleToggle
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDark) {
            document.querySelector(".page-wrapper")?.classList.add("uc-dark");
        } else {
            document.querySelector(".page-wrapper")?.classList.remove("uc-dark");
        }
    }, [
        pathname,
        isDark
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(dataContext.Provider, {
        value: contextElement,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/Context.jsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/common/Cart.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Cart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/context/Context.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleCart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleCart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Cart() {
    const { cartProducts, setCartProducts, totalPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextElement"])();
    const removeItem = (id)=>{
        setCartProducts((pre)=>[
                ...pre.filter((elm)=>elm.id != id)
            ]);
    };
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && // Check if click is inside #mobileMenu
            containerRef.current.contains(event.target) && elementRef.current && // Check if click is outside .gt-menu-area
            !elementRef.current.contains(event.target)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleCart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeCart"])();
            // Add your custom logic here
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleCart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeCart"])();
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        id: "uc-cart-panel",
        "data-uc-offcanvas": "overlay: true; flip: true;",
        className: "uc-offcanvas ",
        tabIndex: -1,
        style: {
            display: "block"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: elementRef,
            className: "uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide",
            role: "dialog",
            "aria-modal": "true",
            style: {
                maxWidth: 885
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleCart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeCart"],
                    className: "uc-offcanvas-close top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90",
                    type: "button",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "unicon-close"
                    }, void 0, false, {
                        fileName: "[project]/components/common/Cart.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/common/Cart.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mini-cart-content vstack justify-between panel h-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mini-cart-header",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "title h5 m-0 text-dark dark:bg-gray-900",
                                children: "Shopping cart"
                            }, void 0, false, {
                                fileName: "[project]/components/common/Cart.jsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/common/Cart.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mini-cart-listing panel flex-1 my-4 overflow-scroll",
                            children: [
                                !cartProducts.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "alert alert-warning",
                                    hidden: "",
                                    children: "Your cart empty!"
                                }, void 0, false, {
                                    fileName: "[project]/components/common/Cart.jsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel vstack gap-3",
                                    children: cartProducts.map((elm, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "product type-product panel",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hstack gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                            className: "featured-image m-0 rounded ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    className: "media-cover image uc-transition-scale-up uc-transition-opaque",
                                                                    src: elm.image,
                                                                    alt: "Laptop Cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/common/Cart.jsx",
                                                                    lineNumber: 79,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/shop-product-detail/${elm.id}`,
                                                                    className: "position-cover",
                                                                    "data-caption": "Laptop Cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/common/Cart.jsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/common/Cart.jsx",
                                                            lineNumber: 78,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "content vstack gap-narrow fs-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "h6 m-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: "text-none text-dark dark:text-white",
                                                                        href: `/shop-product-detail/${elm.id}`,
                                                                        children: elm.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/common/Cart.jsx",
                                                                        lineNumber: 92,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/common/Cart.jsx",
                                                                    lineNumber: 91,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "qty",
                                                                            children: elm.quantity
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/common/Cart.jsx",
                                                                            lineNumber: 100,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " x",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "price",
                                                                            children: [
                                                                                "$",
                                                                                elm.price.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/common/Cart.jsx",
                                                                            lineNumber: 101,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/common/Cart.jsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    onClick: ()=>removeItem(elm.id),
                                                                    className: "remove fs-7 text-dark dark:text-white",
                                                                    children: "Remove"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/common/Cart.jsx",
                                                                    lineNumber: 103,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/common/Cart.jsx",
                                                            lineNumber: 90,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#remove_from_cart",
                                                            className: "remove position-absolute top-0 end-0 btn p-0 hover:text-danger",
                                                            hidden: "",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "unicon-close icon-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/common/Cart.jsx",
                                                                lineNumber: 115,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/common/Cart.jsx",
                                                            lineNumber: 110,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/common/Cart.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/common/Cart.jsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/components/common/Cart.jsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/common/Cart.jsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/common/Cart.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mini-cart-footer panel pt-3 border-top",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel vstack gap-3 justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mini-cart-total hstack justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "h5 m-0 text-dark dark:text-white",
                                                children: "Subtotal"
                                            }, void 0, false, {
                                                fileName: "[project]/components/common/Cart.jsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "fs-5",
                                                children: [
                                                    "$",
                                                    totalPrice.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/common/Cart.jsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/common/Cart.jsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mini-cart-actions vstack gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/shop-cart",
                                                className: "btn btn-md btn-outline-gray-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",
                                                children: "View cart"
                                            }, void 0, false, {
                                                fileName: "[project]/components/common/Cart.jsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/shop-checkout",
                                                className: "btn btn-md btn-primary text-white",
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/components/common/Cart.jsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/common/Cart.jsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/common/Cart.jsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/common/Cart.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/common/Cart.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/common/Cart.jsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/Cart.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}}),
"[project]/data/menu.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "categories": (()=>categories),
    "featurePageLinks": (()=>featurePageLinks),
    "features": (()=>features),
    "homeLinks": (()=>homeLinks),
    "icons": (()=>icons),
    "links": (()=>links),
    "mainPages": (()=>mainPages),
    "menuItems": (()=>menuItems),
    "navItems": (()=>navItems),
    "othermenuItems": (()=>othermenuItems),
    "pagesData": (()=>pagesData),
    "sections": (()=>sections),
    "sections2": (()=>sections2),
    "sections3": (()=>sections3),
    "sections4": (()=>sections4)
});
const menuItems = [
    {
        id: 1,
        label: "Home",
        subItems: [
            {
                href: "/",
                label: "Home 1"
            },
            {
                href: "/home-2",
                label: "Home 2"
            },
            {
                href: "/home-3",
                label: "Home 3"
            },
            {
                href: "/home-4",
                label: "Home 4"
            },
            {
                href: "/home-5",
                label: "Home 5"
            },
            {
                href: "/home-6",
                label: "Home 6"
            },
            {
                href: "/home-7",
                label: "Home 7"
            },
            {
                href: "/home-8",
                label: "Home 8"
            },
            {
                href: "/home-9",
                label: "Home 9"
            },
            {
                href: "/home-10",
                label: "Home 10"
            },
            {
                href: "/rtl",
                label: "Home RTL"
            }
        ]
    },
    {
        id: 2,
        href: "/page-features",
        label: "Features"
    },
    {
        id: 3,
        href: "/page-pricing",
        label: "Pricing"
    },
    {
        id: 3,
        href: "/page-pricing-2",
        label: "Pricing 2"
    },
    {
        id: 4,
        href: "/page-about",
        label: "About"
    },
    {
        id: 5,
        href: "/page-career",
        label: "Career"
    },
    {
        id: 6,
        href: "/page-contact",
        label: "Contact"
    },
    {
        id: 7,
        label: "Inner Pages",
        subItems: [
            {
                label: "Blog",
                subItems: [
                    {
                        href: "/blog",
                        label: "Full Width"
                    },
                    {
                        href: "/blog-2cols",
                        label: "Grid 2 Cols"
                    },
                    {
                        href: "/blog-sidebar",
                        label: "Sidebar"
                    },
                    {
                        href: "/blog-sidebar-left",
                        label: "Sidebar Left"
                    },
                    {
                        href: "/blog-3cols/",
                        label: "Grid 3 Cols"
                    },
                    {
                        href: "/blog-4cols/",
                        label: "Grid 4 Cols"
                    }
                ]
            },
            {
                label: "Blog - detail",
                subItems: [
                    {
                        href: "/blog-details/1",
                        label: "Blog detail"
                    },
                    {
                        href: "/blog-details-2/1",
                        label: "Blog detail - v2"
                    }
                ]
            },
            {
                label: "Useful pages",
                subItems: [
                    {
                        href: "/sign-up",
                        label: "Sign up"
                    },
                    {
                        href: "/sign-in",
                        label: "Sign in"
                    },
                    {
                        href: "/reset-password",
                        label: "Reset password"
                    },
                    {
                        href: "/page-not-found",
                        label: "404 page"
                    },
                    {
                        href: "/coming-soon",
                        label: "Coming soon"
                    }
                ]
            },
            {
                label: "Other pages",
                subItems: [
                    {
                        href: "/page-terms",
                        label: "FAQ"
                    },
                    {
                        href: "/page-terms",
                        label: "Terms of use"
                    },
                    {
                        href: "/page-privacy",
                        label: "Privacy policy"
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        label: "Shop",
        subItems: [
            {
                label: "Shop layouts",
                subItems: [
                    {
                        href: "/shop",
                        label: "Shop 4 cols"
                    },
                    {
                        href: "/shop-3",
                        label: "Shop 3 cols"
                    },
                    {
                        href: "/shop-2",
                        label: "Shop 2 cols"
                    },
                    {
                        href: "/shop-sidebar",
                        label: "Shop with sidebar"
                    }
                ]
            },
            {
                href: "/shop-category/demo",
                label: "Archive category"
            },
            {
                href: "/shop-product-detail/2",
                label: "Product detail"
            },
            {
                href: "/shop-product-detail-2/2",
                label: "Product detail - v2"
            },
            {
                href: "/shop-cart",
                label: "Cart"
            },
            {
                href: "/shop-cart-2",
                label: "Cart - v2"
            },
            {
                href: "/shop-checkout",
                label: "Checkout"
            },
            {
                href: "/shop-checkout-2",
                label: "Checkout - v2"
            },
            {
                href: "/shop-order",
                label: "Order confirmation"
            }
        ]
    }
];
const pagesData = [
    {
        id: 1,
        header: "Main Pages",
        items: [
            {
                href: "/",
                label: "Home 01"
            },
            {
                href: "/home-2",
                label: "Home 02"
            },
            {
                href: "/home-3",
                label: "Home 03"
            },
            {
                href: "/home-4",
                label: "Home 04"
            },
            {
                href: "/home-5",
                label: "Home 05"
            },
            {
                href: "/home-6",
                label: "Home 06"
            },
            {
                href: "/rtl",
                label: "Home RTL"
            },
            {
                href: "/home-7",
                label: "Home 07",
                badge: {
                    text: "New",
                    className: "text-primary"
                }
            },
            {
                href: "/home-8",
                label: "Home 08",
                badge: {
                    text: "New",
                    className: "text-primary"
                }
            },
            {
                href: "/home-9",
                label: "Home 09",
                badge: {
                    text: "New",
                    className: "text-primary"
                }
            },
            {
                href: "/home-10",
                label: "Home 10",
                badge: {
                    text: "New",
                    className: "text-primary"
                }
            }
        ]
    },
    {
        id: 2,
        header: "Inner Pages",
        items: [
            {
                href: "/page-features",
                label: "Features"
            },
            {
                href: "/page-pricing",
                label: "Pricing"
            },
            {
                href: "/page-pricing-2",
                label: "Pricing 2",
                badge: {
                    text: "New",
                    className: "text-primary"
                }
            },
            {
                href: "/page-integrations",
                label: "Integrations"
            },
            {
                href: "/page-about",
                label: "About"
            },
            {
                href: "/page-career",
                label: "Career"
            },
            {
                href: "/page-team",
                label: "Team",
                badge: {
                    text: "New",
                    className: "text-primary"
                }
            },
            {
                href: "/page-career-detail/2",
                label: "Job details"
            },
            {
                href: "/page-contact",
                label: "Contact"
            },
            {
                href: "/page-contact-2",
                label: "Contact v2"
            },
            {
                href: "#",
                label: "Services",
                badge: {
                    text: "Soon",
                    className: "text-gray-400"
                }
            }
        ]
    },
    {
        id: 3,
        header: "CMS Pages",
        items: [
            {
                href: "/blog",
                label: "Modern"
            },
            {
                href: "/blog-classic",
                label: "Classic"
            },
            {
                href: "/blog-sidebar",
                label: "Sidebar",
                badge: {
                    text: "New",
                    className: "text-primary"
                }
            },
            {
                href: "/blog-sidebar-left",
                label: "Sidebar Left",
                badge: {
                    text: "New",
                    className: "text-primary"
                }
            },
            {
                href: "/blog-2cols",
                label: "Grid 2 cols"
            },
            {
                href: "/blog-3cols",
                label: "Grid 3 cols"
            },
            {
                href: "/blog-4cols",
                label: "Grid 4 cols"
            },
            {
                href: "/blog-category/Stratgy",
                label: "Category"
            },
            {
                href: "/blog-author/Amir Khan",
                label: "Author"
            },
            {
                href: "/blog-details/1",
                label: "Blog single"
            },
            {
                href: "/blog-details-2/2",
                label: "Blog single v2"
            },
            {
                href: "/blog-details-3/2",
                label: "Blog single v3"
            }
        ]
    },
    {
        id: 4,
        header: "Shop Pages",
        items: [
            {
                href: "/shop",
                label: "Grid 4 cols"
            },
            {
                href: "/shop-3",
                label: "Grid 3 cols"
            },
            {
                href: "/shop-2",
                label: "Grid 2 cols"
            },
            {
                href: "/shop-sidebar",
                label: "Grid with sidebar",
                badge: {
                    text: "New",
                    className: "text-primary"
                }
            },
            {
                href: "/shop-product-detail/2",
                label: "Product detail"
            },
            {
                href: "/shop-product-detail-2/2",
                label: "Product detail v2"
            },
            {
                href: "/shop-cart",
                label: "Cart"
            },
            {
                href: "/shop-cart-2",
                label: "Cart v2"
            },
            {
                href: "/shop-checkout",
                label: "Checkout"
            },
            {
                href: "/shop-checkout-2",
                label: "Checkout v2"
            },
            {
                href: "/shop-order",
                label: "Order confirmation"
            }
        ]
    },
    {
        id: 5,
        header: "Other pages",
        items: [
            {
                href: "/sign-in",
                label: "Sign in"
            },
            {
                href: "/sign-in-2",
                label: "Sign in v2"
            },
            {
                href: "/sign-up",
                label: "Sign up"
            },
            {
                href: "/sign-up-2",
                label: "Sign up v2"
            },
            {
                href: "/reset-password",
                label: "Reset password"
            },
            {
                href: "/reset-password-2",
                label: "Reset password v2"
            },
            {
                href: "/page-not-found",
                label: "404"
            },
            {
                href: "/coming-soon",
                label: "Coming Soon"
            },
            {
                href: "/page-terms",
                label: "Terms of service"
            },
            {
                href: "/page-privacy",
                label: "Privacy policy"
            }
        ]
    }
];
const navItems = [
    {
        href: "#overview",
        label: "Overview",
        active: true
    },
    {
        href: "#features",
        label: "Features"
    },
    {
        href: "#how_it_works",
        label: "How it works"
    },
    {
        href: "#pricing",
        label: "Pricing"
    },
    {
        href: "#clients_feedback",
        label: "Reviews"
    },
    {
        href: "#insights",
        label: "Insights"
    }
];
const mainPages = [
    {
        href: "/",
        alt: "Home - 01",
        src: "/assets/images/demos/screenshots/index.jpg",
        title: "Home 1"
    },
    {
        href: "/home-2",
        alt: "Home - 02",
        src: "/assets/images/demos/screenshots/index-2.jpg",
        title: "Home 2"
    },
    {
        href: "/home-3",
        alt: "Home - 03",
        src: "/assets/images/demos/screenshots/index-3.jpg",
        title: "Home 3"
    },
    {
        href: "/home-4",
        alt: "Home - 04",
        src: "/assets/images/demos/screenshots/index-4.jpg",
        title: "Home 4"
    },
    {
        href: "/page-features",
        alt: "Features",
        src: "/assets/images/demos/screenshots/page-features.jpg",
        title: "Features"
    },
    {
        href: "/page-pricing",
        alt: "Pricing",
        src: "/assets/images/demos/screenshots/page-pricing.jpg",
        title: "Pricing"
    },
    {
        href: "/page-integrations",
        alt: "Integrations",
        src: "/assets/images/demos/screenshots/page-integrations.jpg",
        title: "Integrations"
    },
    {
        href: "/page-about",
        alt: "About",
        src: "/assets/images/demos/screenshots/page-about.jpg",
        title: "About"
    }
];
const othermenuItems = [
    {
        href: "/page-career",
        icon: "unicon-wikis",
        title: "Career"
    },
    {
        href: "/page-career-detail/2",
        icon: "unicon-wikis",
        title: "Job details"
    },
    {
        href: "/page-contact",
        icon: "unicon-wikis",
        title: "Contact"
    },
    {
        href: "/page-contact-2",
        icon: "unicon-wikis",
        title: "Contact v2"
    },
    {
        href: "/blog",
        icon: "unicon-course",
        title: "Blog"
    },
    {
        href: "/blog-details/1",
        icon: "unicon-course",
        title: "Blog details"
    },
    {
        href: "/blog-details-2/2",
        icon: "unicon-course",
        title: "Blog details v2"
    },
    {
        href: "/blog-details-3/2",
        icon: "unicon-course",
        title: "Blog details v3"
    },
    {
        href: "/home-2",
        icon: "unicon-unlocked",
        title: "Sign up"
    },
    {
        href: "/home-3",
        icon: "unicon-unlocked",
        title: "Sign in"
    },
    {
        href: "/home-4",
        icon: "unicon-unlocked",
        title: "Reset Password"
    },
    {
        href: "/shop",
        icon: "unicon-shopping-cart",
        title: "Shop"
    },
    {
        href: "/shop-cart",
        icon: "unicon-shopping-cart",
        title: "Cart"
    },
    {
        href: "/shop-checkout",
        icon: "unicon-shopping-cart",
        title: "Checkout"
    },
    {
        href: "/shop-product-detail/2",
        icon: "unicon-shopping-cart",
        title: "Product detail"
    },
    {
        href: "/shop-order",
        icon: "unicon-shopping-cart",
        title: "Order confirmation"
    }
];
const icons = [
    {
        href: "#",
        iconClass: "unicon-logo-medium icon-2"
    },
    {
        href: "#",
        iconClass: "unicon-logo-x-filled icon-2"
    },
    {
        href: "#",
        iconClass: "unicon-logo-instagram icon-2"
    },
    {
        href: "#",
        iconClass: "unicon-logo-pinterest icon-2"
    }
];
const features = [
    {
        id: 1,
        iconClass: "unicon-email",
        title: "Email Template Builder",
        description: "Design personalized emails that convert"
    },
    {
        id: 2,
        iconClass: "unicon-blog",
        title: "Landing Page Builder",
        description: "Deliver the right message to the right user"
    },
    {
        id: 3,
        iconClass: "unicon-increase-level",
        title: "Reporting & analytics",
        description: "Track sales & campaign performance"
    },
    {
        id: 4,
        iconClass: "unicon-magic-wand-filled",
        title: "AI-Powered Tools",
        description: "Say hello to your AI growth assistant"
    },
    {
        id: 5,
        iconClass: "unicon-store",
        title: "E-commerce and retail",
        description: "Amplify the conversation across multiple channels"
    },
    {
        id: 6,
        iconClass: "unicon-shopping-catalog",
        title: "See all products",
        description: "See all our product and services offerings"
    }
];
const homeLinks = [
    {
        id: 1,
        href: "/",
        imgAlt: "Home - 01",
        imgSrc: "/assets/images/demos/screenshots/index.jpg",
        label: "SaaS"
    },
    {
        id: 2,
        href: "/home-2",
        imgAlt: "Home - 02",
        imgSrc: "/assets/images/demos/screenshots/index-2.jpg",
        label: "Startup"
    },
    {
        id: 3,
        href: "/home-3",
        imgAlt: "Home - 03",
        imgSrc: "/assets/images/demos/screenshots/index-3.jpg",
        label: "Software"
    },
    {
        id: 4,
        href: "/home-4",
        imgAlt: "Home - 04",
        imgSrc: "/assets/images/demos/screenshots/index-4.jpg",
        label: "Mobile Apps"
    },
    {
        id: 5,
        href: "/home-5",
        imgAlt: "Home - 05",
        imgSrc: "/assets/images/demos/screenshots/index-5.jpg",
        label: "Digital Agency"
    }
];
const links = [
    {
        id: 1,
        href: "/page-career",
        label: "Hire an Expert",
        isInternal: true
    },
    {
        id: 2,
        href: "#",
        label: "Customer stories",
        isInternal: false
    },
    {
        id: 3,
        href: "#",
        label: "Ressources",
        isInternal: false
    },
    {
        id: 4,
        href: "/blog",
        label: "Blog",
        isInternal: true
    },
    {
        id: 5,
        href: "/page-career",
        label: "Career",
        isInternal: true
    },
    {
        id: 6,
        href: "/page-team",
        label: "Team",
        isInternal: true
    },
    {
        id: 7,
        href: "/page-contact",
        label: "Get in touch",
        isInternal: true
    }
];
const featurePageLinks = [
    {
        title: "Products",
        icon: "unicon-cube",
        items: [
            {
                icon: "icon-01.svg",
                title: "Email Template Builder",
                description: "Design personalized emails that convert"
            },
            {
                icon: "icon-02.svg",
                title: "Landing Page Builder",
                description: "Deliver the right message to the right user"
            },
            {
                icon: "icon-03.svg",
                title: "Reporting & analytics",
                description: "Track sales & campaign performance"
            },
            {
                icon: "icon-07.svg",
                title: "Chatbots, Free forever",
                description: "Track sales & campaign performance"
            }
        ],
        viewAllText: "View all products"
    },
    {
        title: "Professional Solutions",
        icon: "unicon-gamification",
        items: [
            {
                icon: "icon-04.svg",
                title: "AI-Powered Tools",
                description: "Say hello to your AI growth assistant"
            },
            {
                icon: "icon-05.svg",
                title: "E-commerce and retail",
                description: "Amplify the conversation across channels"
            },
            {
                icon: "icon-06.svg",
                title: "Large Community",
                description: "Our services offerings"
            },
            {
                icon: "icon-08.svg",
                title: "AI-Powered Automation",
                description: "Our services offerings"
            }
        ],
        viewAllText: "View all solutions"
    }
];
const sections = [
    {
        title: "Get started is Easy!",
        links: [
            {
                href: "/page-contact",
                text: "Hire an Expert"
            },
            {
                href: "#",
                text: "Customer stories"
            },
            {
                href: "#",
                text: "Resources"
            },
            {
                href: "/blog-sidebar",
                text: "Blog"
            },
            {
                href: "/page-career",
                text: "Career"
            },
            {
                href: "/page-contact",
                text: "Help Center"
            }
        ]
    },
    {
        title: "Terms and privacy",
        links: [
            {
                href: "/page-terms",
                text: "Terms of service"
            },
            {
                href: "/page-privacy",
                text: "Privacy Policy"
            }
        ]
    }
];
const sections2 = [
    {
        title: "Automation",
        icon: "unicon-glyph-square-fill",
        items: [
            {
                icon: "unicon-checkmark",
                text: "To-Do List",
                description: "Managing multiple software and tools for different tasks."
            },
            {
                icon: "unicon-chart-pie",
                text: "Reports",
                description: "The latest industry reports, updates and info."
            },
            {
                icon: "unicon-increase-level",
                text: "Spreadsheets",
                description: "Suite of tools that cover all aspects of your business."
            }
        ]
    },
    {
        title: "Teaming",
        icon: "unicon-glyph-circle-fill",
        items: [
            {
                icon: "unicon-chart-venn-diagram",
                text: "Collaboration",
                description: "Assign tasks, share files, and communicate with your team."
            },
            {
                icon: "unicon-chat",
                text: "Chatbots",
                description: "Assign tasks, share files, and communicate with your team."
            },
            {
                icon: "unicon-checkmark",
                text: "To-Do List",
                description: "Managing multiple software and tools for different tasks."
            }
        ]
    },
    {
        title: "Use Case",
        icon: "unicon-glyph-caution",
        items: [
            {
                icon: "unicon-chart-pie",
                text: "Reports",
                description: "The latest industry reports, updates and info."
            },
            {
                icon: "unicon-increase-level",
                text: "Spreadsheets",
                description: "Suite of tools that cover all aspects of your business."
            },
            {
                icon: "unicon-chart-venn-diagram",
                text: "Collaboration",
                description: "Assign tasks, share files, and communicate with your team."
            }
        ]
    }
];
const sections3 = [
    {
        title: "Builder Tools",
        icon: "unicon-cube",
        items: [
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-01.svg",
                title: "Email Template Builder",
                description: "Design personalized emails that convert"
            },
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-02.svg",
                title: "Landing Page Builder",
                description: "Deliver the right message to the right user"
            },
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-03.svg",
                title: "Reporting & analytics",
                description: "Track sales & campaign performance"
            },
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-07.svg",
                title: "Chatbots, Free forever",
                description: "Track sales & campaign performance"
            }
        ],
        viewAllText: "View all products"
    },
    {
        title: "AI Solutions",
        icon: "unicon-gamification",
        items: [
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-04.svg",
                title: "AI-Powered Tools",
                description: "Say hello to your AI growth assistant"
            },
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-05.svg",
                title: "E-commerce and retail",
                description: "Amplify the conversation across channels"
            },
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-06.svg",
                title: "Large Community",
                description: "Our services offerings"
            },
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-08.svg",
                title: "AI-Powered Automation",
                description: "Our services offerings"
            }
        ],
        viewAllText: "View all solutions"
    },
    {
        title: "More Products",
        icon: "unicon-cube",
        items: [
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-01.svg",
                title: "Email Template Builder",
                description: "Design personalized emails that convert"
            },
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-02.svg",
                title: "Landing Page Builder",
                description: "Deliver the right message to the right user"
            },
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-03.svg",
                title: "Reporting & analytics",
                description: "Track sales & campaign performance"
            },
            {
                iconSrc: "/assets/images/custom-icons/home-8-icon-07.svg",
                title: "Chatbots, Free forever",
                description: "Track sales & campaign performance"
            }
        ],
        viewAllText: "View all products"
    }
];
const sections4 = [
    {
        title: "Automation",
        icon: "unicon-glyph-square-fill",
        items: [
            {
                icon: "unicon-checkmark",
                title: "To-Do List",
                description: "Managing multiple software and tools for different tasks."
            },
            {
                icon: "unicon-chart-pie",
                title: "Reports",
                description: "The latest industry reports, updates and info."
            },
            {
                icon: "unicon-increase-level",
                title: "Spreadsheets",
                description: "Suite of tools that cover all aspects of your business."
            }
        ]
    },
    {
        title: "Teaming",
        icon: "unicon-glyph-circle-fill",
        items: [
            {
                icon: "unicon-chart-venn-diagram",
                title: "Collaboration",
                description: "Assign tasks, share files with your team."
            },
            {
                icon: "unicon-chat",
                title: "Chatbots",
                description: "Assign tasks, share files with your team."
            },
            {
                icon: "unicon-checkmark",
                title: "To-Do List",
                description: "Managing multiple software and tools for different tasks."
            }
        ]
    },
    {
        title: "Use Case",
        icon: "unicon-glyph-caution",
        items: [
            {
                icon: "unicon-chart-pie",
                title: "Reports",
                description: "The latest industry reports, updates and info."
            },
            {
                icon: "unicon-increase-level",
                title: "Spreadsheets",
                description: "Suite of tools that cover all aspects of your business."
            },
            {
                icon: "unicon-chart-venn-diagram",
                title: "Collaboration",
                description: "Assign tasks, share files with your team."
            }
        ]
    }
];
const categories = [
    {
        title: "Get started is Easy!",
        links: [
            {
                text: "Hire an Expert",
                href: "/page-contact"
            },
            {
                text: "Customer stories",
                href: "#"
            },
            {
                text: "Resources",
                href: "#"
            },
            {
                text: "Blog",
                href: "/blog-sidebar"
            },
            {
                text: "Career",
                href: "/page-career"
            },
            {
                text: "Help Center",
                href: "/page-contact"
            }
        ]
    },
    {
        title: "Terms and privacy",
        links: [
            {
                text: "Terms of service",
                href: "/page-terms"
            },
            {
                text: "Privacy Policy",
                href: "/page-privacy"
            }
        ]
    }
];
}}),
"[project]/utlis/toggleMobileMenu.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "closeMobileMenu": (()=>closeMobileMenu),
    "openMobileMenu": (()=>openMobileMenu)
});
const openMobileMenu = ()=>{
    document.getElementById("uc-menu-panel").classList.add("uc-offcanvas-overlay");
    document.getElementById("uc-menu-panel").classList.add("uc-open");
};
const closeMobileMenu = ()=>{
    document.getElementById("uc-menu-panel").classList.remove("uc-offcanvas-overlay");
    document.getElementById("uc-menu-panel").classList.remove("uc-open");
};
}}),
"[project]/components/headers/component/MobileMenu.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MobileMenu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/context/Context.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/menu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleMobileMenu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function MobileMenu() {
    const { isDark, handleToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextElement"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [activeParent1, setActiveParent1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [activeParent2, setActiveParent2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && // Check if click is inside #mobileMenu
            containerRef.current.contains(event.target) && elementRef.current && // Check if click is outside .gt-menu-area
            !elementRef.current.contains(event.target)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeMobileMenu"])();
            // Add your custom logic here
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeMobileMenu"])();
    }, [
        pathname
    ]);
    const isMenuActive = (menu)=>{
        let isActive = false;
        if (menu.href) {
            if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
                isActive = true;
            }
        }
        if (menu.subItems) {
            menu.subItems.forEach((el)=>{
                if (el.href) {
                    if (pathname.split("/")[1] == el.href?.split("/")[1]) {
                        isActive = true;
                    }
                }
                if (el.subItems) {
                    el.subItems.map((elm)=>{
                        if (elm.href) {
                            if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                                isActive = true;
                            }
                        }
                    });
                }
            });
        }
        return isActive;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        id: "uc-menu-panel",
        "data-uc-offcanvas": "overlay: true;",
        className: "uc-offcanvas mobile-menu",
        style: {
            display: "block"
        },
        tabIndex: -1,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: elementRef,
            className: "uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide ",
            role: "dialog",
            "aria-modal": "true",
            style: {
                maxWidth: 876
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "uc-logo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/`,
                                className: "h5 text-none text-gray-900 dark:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "w-32px",
                                    alt: "Lexend",
                                    src: "/assets/images/common/logo-mark.svg",
                                    width: "34",
                                    height: "34"
                                }, void 0, false, {
                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all",
                            type: "button",
                            onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeMobileMenu"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "unicon-close"
                            }, void 0, false, {
                                fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: (e)=>e.preventDefault(),
                            id: "search-panel",
                            className: "form-icon-group vstack gap-1 mb-2 uc-sticky",
                            "data-uc-sticky": "",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    className: "form-control form-control-sm fs-7 rounded-default",
                                    placeholder: "Search.."
                                }, void 0, false, {
                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "form-icon text-gray",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "unicon-search icon-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "uc-sticky-placeholder",
                            style: {
                                height: 40,
                                width: 290,
                                margin: "0px 0px 16px"
                            },
                            hidden: ""
                        }, void 0, false, {
                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "nav-y gap-narrow fw-medium fs-6 uc-nav",
                            "data-uc-nav": "",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuItems"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: `${item.subItems ? "uc-parent" : ""} ${activeParent1 == index ? "active" : ""}`,
                                        children: item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: isMenuActive(item) ? "menuActive" : "",
                                            href: item.href,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: isMenuActive(item) ? "menuActive" : "",
                                                    onClick: ()=>setActiveParent1((pre)=>pre == index ? -1 : index),
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this),
                                                item.subItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: `uc-nav-sub ${activeParent1 == index ? "active" : ""}`,
                                                    children: item.subItems.map((subItem, index2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: `${!subItem.href ? "uc-parent" : ""}  ${activeParent2 == index2 ? "active" : ""}`,
                                                            role: "presentation",
                                                            children: subItem.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                className: isMenuActive(subItem) ? "menuActive" : "",
                                                                href: subItem.href,
                                                                children: subItem.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        className: isMenuActive(subItem) ? "menuActive" : "",
                                                                        onClick: ()=>setActiveParent2((pre)=>pre == index2 ? -1 : index2),
                                                                        children: subItem.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                                                        lineNumber: 178,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    subItem.subItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: `uc-nav-sub ${activeParent2 == index2 ? "active" : ""}`,
                                                                        children: subItem.subItems.map((subItem, index3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: !subItem.href ? "uc-parent" : "",
                                                                                role: "presentation",
                                                                                children: subItem.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: isMenuActive(subItem) ? "menuActive" : "",
                                                                                    href: subItem.href,
                                                                                    children: subItem.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                                                                    lineNumber: 205,
                                                                                    columnNumber: 43
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false)
                                                                            }, index3, false, {
                                                                                fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                                                                lineNumber: 197,
                                                                                columnNumber: 39
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                                                        lineNumber: 191,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        }, index2, false, {
                                                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                                            lineNumber: 160,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                                    lineNumber: 154,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, index, false, {
                                        fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hr opacity-10 my-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/sign-up`,
                                        children: "Create an account"
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/sign-in`,
                                        children: "Log in"
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://themeforest.net/user/ib-themes/portfolio",
                                        children: "Buy Template"
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "social-icons nav-x mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["icons"].map((icon, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: icon.href,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: icon.iconClass
                                        }, void 0, false, {
                                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-2 hstack gap-2 mt-4 bg-white dark:bg-gray-900 uc-sticky uc-active uc-sticky-fixed",
                            "data-uc-sticky": "position: bottom",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vstack gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "fs-7 opacity-60",
                                        children: "Select theme:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "darkmode-trigger",
                                        "data-darkmode-switch": "",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "switch",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    checked: !isDark,
                                                    onChange: handleToggle,
                                                    type: "checkbox"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "slider fs-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                                    lineNumber: 267,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/headers/component/MobileMenu.jsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "uc-sticky-placeholder",
                            style: {
                                height: 83,
                                width: 290,
                                margin: "32px 0px 0px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/headers/component/MobileMenu.jsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/headers/component/MobileMenu.jsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/headers/component/MobileMenu.jsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/headers/component/MobileMenu.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/common/BacktoTop.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>BacktoTop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/context/Context.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function BacktoTop() {
    const { isDark, handleToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextElement"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            // Check if scrolled more than page height
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);
        // Cleanup the event listener on component unmount
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `backtotop-wrap position-fixed bottom-0 end-0 z-99 m-2 vstack  ${isVisible ? "uc-active" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "darkmode-trigger cstack w-40px h-40px rounded-circle text-none bg-gray-100 dark:bg-gray-700 dark:text-white",
                "data-darkmode-toggle": "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "switch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Dark mode toggle"
                        }, void 0, false, {
                            fileName: "[project]/components/common/BacktoTop.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            onChange: handleToggle,
                            type: "checkbox",
                            checked: isDark
                        }, void 0, false, {
                            fileName: "[project]/components/common/BacktoTop.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "slider fs-5"
                        }, void 0, false, {
                            fileName: "[project]/components/common/BacktoTop.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/common/BacktoTop.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/BacktoTop.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "btn btn-sm bg-primary text-white w-40px h-40px rounded-circle",
                onClick: scrollToTop,
                "data-uc-backtotop": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "icon-2 unicon-chevron-up"
                }, void 0, false, {
                    fileName: "[project]/components/common/BacktoTop.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/BacktoTop.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/BacktoTop.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}}),
"[project]/utlis/toggleContactModal.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "closeContactModal": (()=>closeContactModal),
    "openContactModal": (()=>openContactModal)
});
const openContactModal = ()=>{
    document.getElementById("uc-contact-modal").classList.add("uc-offcanvas-overlay");
    document.getElementById("uc-contact-modal").classList.add("uc-open");
};
const closeContactModal = ()=>{
    document.getElementById("uc-contact-modal").classList.remove("uc-offcanvas-overlay");
    document.getElementById("uc-contact-modal").classList.remove("uc-open");
};
}}),
"[project]/components/modals/ContactModal.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ContactModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleContactModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleContactModal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ContactModal() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && // Check if click is inside #mobileMenu
            containerRef.current.contains(event.target) && elementRef.current && // Check if click is outside .gt-menu-area
            !elementRef.current.contains(event.target)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleContactModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeContactModal"])();
            // Add your custom logic here
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleContactModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeContactModal"])();
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        id: "uc-contact-modal",
        "data-uc-modal": "overlay: true",
        className: "uc-modal",
        style: {
            display: "block"
        },
        tabIndex: -1,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: elementRef,
            className: "uc-modal-dialog lg:max-w-650px bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded-1-5",
            role: "dialog",
            "aria-modal": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90",
                    type: "button",
                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleContactModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeContactModal"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "unicon-close"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/ContactModal.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/modals/ContactModal.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "panel vstack gap-2 md:gap-4 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel cstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel vstack justify-center items-center gap-2 sm:gap-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "h5 lg:h4 m-0",
                                    children: "Schedule your 15-minute demo now"
                                }, void 0, false, {
                                    fileName: "[project]/components/modals/ContactModal.jsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel w-100 sm:w-350px md:w-500px mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: (e)=>e.preventDefault(),
                                        className: "vstack gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "vstack lg:hstack gap-2",
                                                style: {
                                                    flexDirection: "row"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark",
                                                        type: "text",
                                                        placeholder: "Full name*",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modals/ContactModal.jsx",
                                                        lineNumber: 69,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark",
                                                        type: "text",
                                                        placeholder: "Last name*",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modals/ContactModal.jsx",
                                                        lineNumber: 75,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modals/ContactModal.jsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "vstack lg:hstack gap-2",
                                                style: {
                                                    flexDirection: "row"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark",
                                                        type: "email",
                                                        placeholder: "Your email*",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modals/ContactModal.jsx",
                                                        lineNumber: 86,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "form-control h-48px w-100 md:w-1/2 rtl:text-end bg-white dark:border-white dark:text-dark",
                                                        type: "tel",
                                                        placeholder: "Phone number*",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modals/ContactModal.jsx",
                                                        lineNumber: 92,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modals/ContactModal.jsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "form-control h-48px w-full bg-white dark:border-white dark:text-dark",
                                                type: "text",
                                                placeholder: "Company name*",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/modals/ContactModal.jsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: "form-control min-h-150px w-full bg-white dark:border-white dark:text-dark",
                                                placeholder: "Your message..",
                                                defaultValue: ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/modals/ContactModal.jsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-primary btn-md text-white mt-2",
                                                type: "submit",
                                                children: "Schedule my demo"
                                            }, void 0, false, {
                                                fileName: "[project]/components/modals/ContactModal.jsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "fs-7 opacity-70 mt-2 text-center",
                                                children: "We’ll tailor your demo to your immediate needs and answer all your questions. Get ready to see how it works!"
                                            }, void 0, false, {
                                                fileName: "[project]/components/modals/ContactModal.jsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modals/ContactModal.jsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/modals/ContactModal.jsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/modals/ContactModal.jsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/modals/ContactModal.jsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/modals/ContactModal.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/ContactModal.jsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/modals/ContactModal.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}}),
"[project]/utlis/toggleNewsletterModal.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "closeNewsletterModal": (()=>closeNewsletterModal),
    "openNewsletterModal": (()=>openNewsletterModal)
});
const openNewsletterModal = ()=>{
    document.getElementById("uc-newsletter-modal").classList.add("uc-offcanvas-overlay");
    document.getElementById("uc-newsletter-modal").classList.add("uc-open");
};
const closeNewsletterModal = ()=>{
    document.getElementById("uc-newsletter-modal").classList.remove("uc-offcanvas-overlay");
    document.getElementById("uc-newsletter-modal").classList.remove("uc-open");
};
}}),
"[project]/components/modals/NewsletterModal.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>NewsletterModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleNewsletterModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleNewsletterModal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function NewsletterModal() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && // Check if click is inside #mobileMenu
            containerRef.current.contains(event.target) && elementRef.current && // Check if click is outside .gt-menu-area
            !elementRef.current.contains(event.target)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleNewsletterModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeNewsletterModal"])();
            // Add your custom logic here
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleNewsletterModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeNewsletterModal"])();
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        id: "uc-newsletter-modal",
        "data-uc-modal": "overlay: true",
        className: "uc-modal",
        style: {
            display: "block"
        },
        tabIndex: -1,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: elementRef,
            className: "uc-modal-dialog w-800px bg-white text-dark dark:bg-gray-900 dark:text-white rounded-3 p-1 overflow-hidden",
            role: "dialog",
            "aria-modal": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all",
                    type: "button",
                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleNewsletterModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeNewsletterModal"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "unicon-close"
                    }, void 0, false, {
                        fileName: "[project]/components/modals/NewsletterModal.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/modals/NewsletterModal.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row md:child-cols-6 col-match g-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-none md:d-flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "position-relative w-100 ratio-1x1 rounded-2 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "media-cover",
                                    alt: "Newsletter image",
                                    src: "/assets/images/common/newsletter.jpg",
                                    width: "544",
                                    height: "660"
                                }, void 0, false, {
                                    fileName: "[project]/components/modals/NewsletterModal.jsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/modals/NewsletterModal.jsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/modals/NewsletterModal.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel vstack self-center p-4 md:py-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "h3 md:h2",
                                        children: "Subscribe to our Newsletter"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/NewsletterModal.jsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "ft-tertiary",
                                        children: "Join 10k+ people to get notified about new posts, news and updates."
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/NewsletterModal.jsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel mt-2 lg:mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: (e)=>e.preventDefault(),
                                                className: "vstack gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        className: "form-control form-control-sm w-full fs-6 bg-white dark:border-white dark:border-gray-700",
                                                        placeholder: "Your email address.."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modals/NewsletterModal.jsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "btn btn-sm btn-primary",
                                                        children: "Sign up"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/modals/NewsletterModal.jsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/modals/NewsletterModal.jsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "fs-7 mt-2",
                                                children: "Do not worry we don't spam!"
                                            }, void 0, false, {
                                                fileName: "[project]/components/modals/NewsletterModal.jsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/modals/NewsletterModal.jsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/modals/NewsletterModal.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/modals/NewsletterModal.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/NewsletterModal.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/NewsletterModal.jsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/modals/NewsletterModal.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}}),
"[project]/utlis/toggleSearchModal.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "closeSearchModal": (()=>closeSearchModal),
    "openSearchModal": (()=>openSearchModal)
});
const openSearchModal = ()=>{
    document.getElementById("uc-search-modal").classList.add("uc-offcanvas-overlay");
    document.getElementById("uc-search-modal").classList.add("uc-open");
};
const closeSearchModal = ()=>{
    document.getElementById("uc-search-modal").classList.remove("uc-offcanvas-overlay");
    document.getElementById("uc-search-modal").classList.remove("uc-open");
};
}}),
"[project]/components/modals/SearchModal.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SearchModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleSearchModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleSearchModal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SearchModal() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && // Check if click is inside #mobileMenu
            containerRef.current.contains(event.target) && elementRef.current && // Check if click is outside .gt-menu-area
            !elementRef.current.contains(event.target)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleSearchModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeSearchModal"])();
            // Add your custom logic here
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleSearchModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeSearchModal"])();
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        id: "uc-search-modal",
        className: "uc-modal-full uc-modal",
        "data-uc-modal": "overlay: true",
        style: {
            display: "block"
        },
        tabIndex: -1,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: elementRef,
            className: "uc-modal-dialog d-flex justify-center bg-white text-dark dark:bg-gray-900 dark:text-white",
            "data-uc-height-viewport": "",
            role: "dialog",
            "aria-modal": "true",
            style: {
                minHeight: "auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "uc-modal-close-full m-1 p-0 vstack gap-narrow text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "icon-3 btn btn-md btn-dark dark:bg-white dark:text-dark w-24px sm:w-32px h-24px sm:h-32px rounded-circle flex-1",
                        type: "button",
                        onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleSearchModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeSearchModal"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "unicon-close"
                        }, void 0, false, {
                            fileName: "[project]/components/modals/SearchModal.jsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/modals/SearchModal.jsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/modals/SearchModal.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "panel w-100 sm:w-500px px-2 py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "h4 sm:h2 text-center",
                            children: "What are you looking for?"
                        }, void 0, false, {
                            fileName: "[project]/components/modals/SearchModal.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: (e)=>e.preventDefault(),
                            className: "hstack gap-1 mt-4 border-bottom p-narrow dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "d-inline-flex justify-center items-center w-24px sm:w-40 h-24px sm:h-40px opacity-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "unicon-search icon-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/modals/SearchModal.jsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/modals/SearchModal.jsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "search",
                                    name: "q",
                                    className: "form-control-plaintext ms-1 fs-6 sm:fs-5 w-full dark:text-white",
                                    placeholder: "Type your keyword..",
                                    "aria-label": "Search",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/components/modals/SearchModal.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/modals/SearchModal.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/modals/SearchModal.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/modals/SearchModal.jsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/modals/SearchModal.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/layout.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/context/Context.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Cart$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/common/Cart.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/animejs/lib/anime.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$headers$2f$component$2f$MobileMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/headers/component/MobileMenu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$BacktoTop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/common/BacktoTop.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$ContactModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modals/ContactModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$NewsletterModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modals/NewsletterModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$SearchModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modals/SearchModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js [app-ssr] (ecmascript) <locals>");
"use client";
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
;
;
;
;
;
;
;
function RootLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const elements = document.querySelectorAll("[data-anime]");
        // Intersection Observer callback function
        const handleIntersection = (entries, observer)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const dataAnime = element.getAttribute("data-anime");
                    const modifieddataAnime = dataAnime.replace(/anime\.stagger\((\d+),\s*\{start:\s*(\d+)\}\)/, "$1,$2");
                    if (modifieddataAnime) {
                        const parseAnimeData = (data)=>{
                            const settings = {};
                            data.split(";").forEach((param)=>{
                                const [key, value] = param.split(":").map((item)=>item.trim());
                                if (key && value) {
                                    settings[key] = value;
                                }
                            });
                            return settings;
                        };
                        const animeSettings = parseAnimeData(modifieddataAnime);
                        let targets;
                        if (animeSettings.targets === ">*") {
                            targets = element.children;
                        } else {
                            targets = element?.querySelectorAll(animeSettings.targets);
                        }
                        // console.log(animeSettings);
                        // Apply Anime.js animation
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                            loop: animeSettings.loop ? true : false,
                            targets: targets,
                            translateX: JSON.parse(animeSettings.translateX || "[0, 0]"),
                            translateY: JSON.parse(animeSettings.translateY || "[48, 0]"),
                            opacity: [
                                0,
                                1
                            ],
                            // direction: "alternate",
                            easing: animeSettings.easing || "spring(1, 80, 10, 0)",
                            duration: Number(animeSettings.duration) || 450,
                            delay: animeSettings.delay ? animeSettings.delay.includes(",") ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$lib$2f$anime$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stagger(animeSettings.delay.split(",")[0] / 1, {
                                start: animeSettings.delay.split(",")[1] / 1
                            }) : animeSettings.delay / 1 : 0
                        });
                        // Unobserve the element after animation triggers
                        observer.unobserve(element);
                    }
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0
        });
        elements.forEach((element)=>{
            observer.observe(element);
        });
        return ()=>{
            // Clean up the observer on component unmount
            elements.forEach((element)=>{
                observer.unobserve(element);
            });
        };
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        dir: "ltr",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ParallaxProvider"], {
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$headers$2f$component$2f$MobileMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$ContactModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$NewsletterModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$SearchModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Cart$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$BacktoTop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.js",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.js",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__3eb76d._.js.map