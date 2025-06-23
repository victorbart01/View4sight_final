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
"[project]/utlis/toggleMobileMenu.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "closeMobileMenu": (()=>closeMobileMenu),
    "openMobileMenu": (()=>openMobileMenu)
});
const openMobileMenu = ()=>{
    const menuPanel = document.getElementById("uc-menu-panel");
    if (menuPanel) {
        // Pour le nouveau menu View4Sight
        if (menuPanel.classList.contains("view4sight-mobile-menu")) {
            // Afficher le menu avec styles forcés
            menuPanel.style.setProperty('display', 'block', 'important');
            menuPanel.style.setProperty('opacity', '1', 'important');
            menuPanel.style.setProperty('visibility', 'visible', 'important');
            menuPanel.style.setProperty('pointer-events', 'auto', 'important');
            menuPanel.style.setProperty('position', 'fixed', 'important');
            menuPanel.style.setProperty('top', '0', 'important');
            menuPanel.style.setProperty('left', '0', 'important');
            menuPanel.style.setProperty('width', '100%', 'important');
            menuPanel.style.setProperty('height', '100vh', 'important');
            menuPanel.style.setProperty('z-index', '9999', 'important');
            menuPanel.style.setProperty('background', 'rgba(0, 0, 0, 0.5)', 'important');
            // Faire glisser le panel
            const panel = menuPanel.querySelector('.menu-panel');
            if (panel) {
                panel.style.setProperty('transform', 'translateX(0)', 'important');
                panel.style.setProperty('position', 'absolute', 'important');
                panel.style.setProperty('top', '0', 'important');
                panel.style.setProperty('right', '0', 'important');
                panel.style.setProperty('width', '320px', 'important');
                panel.style.setProperty('height', '100vh', 'important');
                panel.style.setProperty('background', '#222222', 'important');
                panel.style.setProperty('color', 'white', 'important');
            }
            document.body.style.overflow = "hidden"; // Empêcher le scroll du body
        } else {
            // Pour l'ancien menu template (fallback)
            menuPanel.classList.add("uc-offcanvas-overlay");
            menuPanel.classList.add("uc-open");
        }
    }
};
const closeMobileMenu = ()=>{
    const menuPanel = document.getElementById("uc-menu-panel");
    if (menuPanel) {
        // Pour le nouveau menu View4Sight
        if (menuPanel.classList.contains("view4sight-mobile-menu")) {
            // Faire glisser le panel hors écran
            const panel = menuPanel.querySelector('.menu-panel');
            if (panel) {
                panel.style.transform = "translateX(100%)";
            }
            document.body.style.overflow = ""; // Rétablir le scroll du body
            // Masquer complètement après l'animation
            setTimeout(()=>{
                menuPanel.style.display = "none";
                menuPanel.style.opacity = "0";
                menuPanel.style.visibility = "hidden";
                menuPanel.style.pointerEvents = "none";
            }, 300);
        } else {
            // Pour l'ancien menu template (fallback)
            menuPanel.classList.remove("uc-offcanvas-overlay");
            menuPanel.classList.remove("uc-open");
        }
    }
};
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
"[project]/data/services.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
}}),
"[project]/components/view4sight/View4SightMobileMenu.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>View4SightMobileMenu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleMobileMenu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// Menu items pour View4Sight
const view4sightMenuItems = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Features",
        subItems: [
            {
                label: "Visualize",
                href: "/fonctionnalites/visualize",
                description: "Navigate massive datasets"
            },
            {
                label: "Measure",
                href: "/fonctionnalites/measure",
                description: "Survey-grade precision"
            },
            {
                label: "Collaborate",
                href: "/fonctionnalites/collaborate",
                description: "Work together live"
            },
            {
                label: "Secure",
                href: "/fonctionnalites/secure",
                description: "Control & protect"
            }
        ]
    },
    {
        label: "Pricing",
        href: "/tarifs"
    },
    {
        label: "Security",
        href: "/securite"
    },
    {
        label: "Resources",
        subItems: [
            {
                label: "Use Cases",
                href: "/ressources/use-cases",
                description: "Real-world applications"
            },
            {
                label: "Tutorials",
                href: "/ressources/tutorials",
                description: "Video guides & how-tos"
            },
            {
                label: "Blog",
                href: "/ressources/blog",
                description: "Latest news & insights"
            },
            {
                label: "Recrutement",
                href: "/ressources/carrieres",
                description: "Join our team"
            },
            {
                label: "Support",
                href: "/ressources/support",
                description: "Help center"
            },
            {
                label: "Documentation",
                href: "/ressources/docs",
                description: "Technical documentation"
            }
        ]
    }
];
function View4SightMobileMenu() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [expandedMenu, setExpandedMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && containerRef.current.contains(event.target) && elementRef.current && !elementRef.current.contains(event.target)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeMobileMenu"])();
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
        if (menu.href) {
            return pathname === menu.href || pathname.startsWith(menu.href + "/");
        }
        if (menu.subItems) {
            return menu.subItems.some((subItem)=>pathname === subItem.href || pathname.startsWith(subItem.href + "/"));
        }
        return false;
    };
    const toggleSubmenu = (index)=>{
        setExpandedMenu(expandedMenu === index ? -1 : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "81d8ddea6bc3d4e8",
                children: ".view4sight-mobile-menu{z-index:9999;background:#00000080;width:100%;height:100vh;transition:opacity .3s,visibility .3s;top:0;left:0;opacity:0!important;visibility:hidden!important;pointer-events:none!important;display:none!important;position:fixed!important}.view4sight-mobile-menu.active{opacity:1!important;visibility:visible!important;pointer-events:auto!important;display:block!important}.menu-panel{color:#fff;background:#222;flex-direction:column;width:320px;height:100vh;transition:transform .3s;display:flex;position:absolute;top:0;right:0;transform:translate(100%);box-shadow:-10px 0 30px #0000004d}.view4sight-mobile-menu.active .menu-panel{transform:translate(0)}.menu-header{border-bottom:1px solid #333;justify-content:space-between;align-items:center;padding:24px 20px;display:flex}.logo-container{align-items:center;display:flex}.close-btn{color:#fff;cursor:pointer;background:0 0;border:none;border-radius:8px;justify-content:center;align-items:center;width:40px;height:40px;padding:5px;font-size:24px;transition:background-color .2s;display:flex}.close-btn:hover{background-color:#ffffff1a}.menu-content{flex:1;padding:12px 0;overflow-y:auto}.menu-item{margin-bottom:0}.menu-link{color:#fff;border-bottom:1px solid #ffffff0d;border-left:3px solid #0000;justify-content:space-between;align-items:center;padding:18px 20px;font-size:16px;font-weight:500;text-decoration:none;transition:all .2s;display:flex}.menu-link:hover{color:#fff;background-color:#ffffff0d}.menu-link.active{color:#fe552e;background-color:#fe552e1a;border-left-color:#fe552e}.menu-text{flex:1}.arrow-icon{width:16px;height:16px;margin-left:8px;transition:transform .2s;transform:rotate(0)}.arrow-icon.expanded{transform:rotate(90deg)}.submenu{background-color:#0003;max-height:0;transition:max-height .3s;overflow:hidden}.submenu.expanded{max-height:500px}.submenu-item{border-bottom:1px solid #ffffff08;border-left:3px solid #0000;padding:14px 20px 14px 40px}.submenu-item:last-child{border-bottom:none}.submenu-link{color:#fffc;padding:4px 0;font-size:15px;line-height:1.4;text-decoration:none;transition:all .2s;display:block}.submenu-link:hover,.submenu-link.active{color:#fe552e}.submenu-description{color:#ffffff80;margin-top:2px;font-size:13px}.menu-footer{background:#1a1a1a;border-top:1px solid #333;padding:24px 20px}.footer-btn{cursor:pointer;border:none;border-radius:25px;justify-content:center;align-items:center;width:100%;min-height:50px;margin-bottom:12px;padding:14px 24px;font-size:16px;font-weight:600;text-decoration:none;transition:all .2s;display:flex}.btn-login{color:#fff;background:#fe552e;border:2px solid #fe552e}.btn-login:hover{color:#fff;background:#e6452a;border-color:#e6452a;text-decoration:none;transform:translateY(-1px)}.btn-get-started{color:#fff;background:#fe552e;border:2px solid #fe552e;margin-bottom:0}.btn-get-started:hover{color:#fff;background:#e6452a;border-color:#e6452a;text-decoration:none;transform:translateY(-1px)}@media (width<=400px){.menu-panel{width:280px}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                id: "uc-menu-panel",
                style: {
                    display: 'none',
                    opacity: 0,
                    visibility: 'hidden',
                    pointerEvents: 'none',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 9999,
                    background: 'rgba(0, 0, 0, 0.5)',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease'
                },
                className: "jsx-81d8ddea6bc3d4e8" + " " + "view4sight-mobile-menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: elementRef,
                    style: {
                        transform: 'translateX(100%)',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '320px',
                        height: '100vh',
                        background: '#222222',
                        color: 'white',
                        transition: 'transform 0.3s ease',
                        boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)'
                    },
                    className: "jsx-81d8ddea6bc3d4e8" + " " + "menu-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-81d8ddea6bc3d4e8" + " " + "menu-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-81d8ddea6bc3d4e8" + " " + "logo-container",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "text-decoration-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/images/logo_v4s_light.png",
                                            alt: "View4Sight",
                                            width: "140",
                                            height: "35",
                                            style: {
                                                height: "35px",
                                                width: "auto",
                                                objectFit: "contain",
                                                display: "block"
                                            },
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                            lineNumber: 399,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeMobileMenu"],
                                    "aria-label": "Close menu",
                                    className: "jsx-81d8ddea6bc3d4e8" + " " + "close-btn",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-81d8ddea6bc3d4e8" + " " + "menu-content",
                            children: view4sightMenuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-81d8ddea6bc3d4e8" + " " + "menu-item",
                                    children: item.href ? // Lien simple
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: `menu-link ${isMenuActive(item) ? 'active' : ''}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-81d8ddea6bc3d4e8" + " " + "menu-text",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                            lineNumber: 433,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                        lineNumber: 429,
                                        columnNumber: 19
                                    }, this) : // Item avec sous-menu
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleSubmenu(index),
                                                className: "jsx-81d8ddea6bc3d4e8" + " " + `menu-link w-100 text-start border-0 bg-transparent ${isMenuActive(item) ? 'active' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-81d8ddea6bc3d4e8" + " " + "menu-text",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                                        lineNumber: 442,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        fill: "currentColor",
                                                        viewBox: "0 0 20 20",
                                                        className: "jsx-81d8ddea6bc3d4e8" + " " + `arrow-icon ${expandedMenu === index ? 'expanded' : ''}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                                            clipRule: "evenodd",
                                                            className: "jsx-81d8ddea6bc3d4e8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                                            lineNumber: 448,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                                        lineNumber: 443,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                                lineNumber: 438,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-81d8ddea6bc3d4e8" + " " + `submenu ${expandedMenu === index ? 'expanded' : ''}`,
                                                children: item.subItems?.map((subItem, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-81d8ddea6bc3d4e8" + " " + "submenu-item",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: subItem.href,
                                                            className: `submenu-link ${pathname === subItem.href || pathname.startsWith(subItem.href + "/") ? 'active' : ''}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-81d8ddea6bc3d4e8",
                                                                    children: subItem.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 29
                                                                }, this),
                                                                subItem.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-81d8ddea6bc3d4e8" + " " + "submenu-description",
                                                                    children: subItem.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                                                    lineNumber: 466,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                                            lineNumber: 460,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, subIndex, false, {
                                                        fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                                        lineNumber: 459,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                                lineNumber: 457,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, index, false, {
                                    fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-81d8ddea6bc3d4e8" + " " + "menu-footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/sign-in",
                                    className: "footer-btn btn-login",
                                    children: "Log in"
                                }, void 0, false, {
                                    fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/tarifs",
                                    className: "footer-btn btn-get-started",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                                    lineNumber: 483,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                            lineNumber: 479,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/view4sight/View4SightMobileMenu.jsx",
                lineNumber: 360,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/components/view4sight/Header.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>View4SightHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleMobileMenu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleContactModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utlis/toggleContactModal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/menu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$services$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/data/services.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$view4sight$2f$View4SightMobileMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/view4sight/View4SightMobileMenu.jsx [app-ssr] (ecmascript)");
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
// Contenu View4Sight pour le sous-menu Fonctionnalités
const view4sightFeatures = [
    {
        href: "/fonctionnalites/visualize",
        icon: "/assets/images/custom-icons/visualisation-3d.svg",
        title: "Visualize",
        description: "Navigate massive datasets"
    },
    {
        href: "/fonctionnalites/measure",
        icon: "/assets/images/custom-icons/mesure-annotations.svg",
        title: "Measure",
        description: "Survey-grade precision"
    },
    {
        href: "/fonctionnalites/collaborate",
        icon: "/assets/images/custom-icons/collaboration.svg",
        title: "Collaborate",
        description: "Work together live"
    },
    {
        href: "/fonctionnalites/secure",
        icon: "/assets/images/custom-icons/upload-share.svg",
        title: "Secure",
        description: "Control & protect"
    }
];
// Contenu View4Sight pour le sous-menu Ressources
const view4sightResources = [
    {
        href: "/ressources/use-cases",
        icon: "/assets/images/common/icons/target.svg",
        title: "Use Cases",
        description: "Customer stories"
    },
    {
        href: "/ressources/blog",
        icon: "/assets/images/common/icons/blog.svg",
        title: "Blog",
        description: "Articles & actualités"
    },
    {
        href: "/ressources/carrieres",
        icon: "/assets/images/common/icons/account.svg",
        title: "Recrutement",
        description: "Rejoignez l'équipe"
    }
];
function View4SightHeader() {
    const prevScrollPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const ticking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [scrollingUp, setScrollingUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (!ticking.current) {
                requestAnimationFrame(()=>{
                    const currentScrollPos = window.scrollY;
                    const isScrollingUp = currentScrollPos < prevScrollPos.current;
                    if (currentScrollPos <= 80) {
                        setScrollingUp(false);
                    } else if (isScrollingUp !== scrollingUp) {
                        setScrollingUp(isScrollingUp);
                    }
                    prevScrollPos.current = currentScrollPos;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        scrollingUp
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "c53e1ed8702a0aba",
                children: ".nav-hover-effect.jsx-f1be33e501353b78{border-radius:.5rem!important;padding:.5rem .75rem!important;transition:all .2s!important;position:relative!important}.nav-hover-effect.jsx-f1be33e501353b78:hover{background-color:#fe552e1f!important}.dark .nav-hover-effect.jsx-f1be33e501353b78:hover{background-color:#fe552e26!important}:hover.demo-hover-effect .mockup-container{transform:translateY(-2px)!important;box-shadow:0 6px 20px #00000014!important}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-f1be33e501353b78" + " " + `uc-header header-default uc-navbar-sticky-wrap z-999 uc-sticky ${scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "jsx-f1be33e501353b78" + " " + `uc-navbar-container uc-navbar-float ft-tertiary z-1 ${scrollingUp ? "uc-navbar-sticky" : "uc-navbar-transparent"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-f1be33e501353b78" + " " + "container max-w-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-f1be33e501353b78" + " " + "uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-f1be33e501353b78" + " " + "uc-navbar-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-f1be33e501353b78" + " " + "uc-logo text-dark dark:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "panel text-none",
                                                href: `/`,
                                                style: {
                                                    width: 160
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "jsx-f1be33e501353b78" + " " + "uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: {
                                                        position: "relative"
                                                    },
                                                    className: "jsx-f1be33e501353b78" + " " + "has-dd-menu",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            role: "button",
                                                            "aria-haspopup": "true",
                                                            className: "jsx-f1be33e501353b78" + " " + "nav-hover-effect text-none",
                                                            children: [
                                                                "Features",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-uc-navbar-parent-icon": "",
                                                                    className: "jsx-f1be33e501353b78" + " " + "uc-icon uc-navbar-parent-icon",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: 12,
                                                                        height: 12,
                                                                        viewBox: "0 0 12 12",
                                                                        className: "jsx-f1be33e501353b78",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            fill: "none",
                                                                            stroke: "#000",
                                                                            strokeWidth: "1.1",
                                                                            points: "1 3.5 6 8.5 11 3.5",
                                                                            className: "jsx-f1be33e501353b78"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 163,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 156,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-uc-drop": "mode: click; offset: -8; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150; pos: bottom-right;",
                                                            style: {
                                                                border: "1px solid rgba(0, 0, 0, 0.15)",
                                                                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
                                                                borderRadius: "12px",
                                                                width: "750px",
                                                                backgroundColor: "#ffffff"
                                                            },
                                                            className: "jsx-f1be33e501353b78" + " " + "uc-navbar-dropdown ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar overflow-hidden uc-drop",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-f1be33e501353b78" + " " + "row child-cols-6 g-0 col-match",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-f1be33e501353b78",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-f1be33e501353b78" + " " + "p-2 h-100 d-flex flex-column justify-content-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    gap: "8px"
                                                                                },
                                                                                className: "jsx-f1be33e501353b78" + " " + "d-flex flex-column",
                                                                                children: view4sightFeatures.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        className: "d-flex align-items-center text-none rounded-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 p-1",
                                                                                        href: feature.href,
                                                                                        style: {
                                                                                            gap: "14px"
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                style: {
                                                                                                    width: "44px",
                                                                                                    height: "44px",
                                                                                                    borderRadius: "10px",
                                                                                                    backgroundColor: "rgba(254, 85, 46, 0.1)",
                                                                                                    border: "1px solid rgba(254, 85, 46, 0.2)",
                                                                                                    flexShrink: 0,
                                                                                                    position: "relative"
                                                                                                },
                                                                                                className: "jsx-f1be33e501353b78" + " " + "d-flex align-items-center justify-content-center",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                                                                    lineNumber: 203,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                lineNumber: 194,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "jsx-f1be33e501353b78" + " " + "d-flex flex-column justify-content-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        style: {
                                                                                                            fontSize: "15px",
                                                                                                            lineHeight: "1.2",
                                                                                                            color: "#1e293b",
                                                                                                            marginBottom: "2px"
                                                                                                        },
                                                                                                        className: "jsx-f1be33e501353b78" + " " + "fw-bold m-0 dark:text-white",
                                                                                                        children: feature.title
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                        lineNumber: 222,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        style: {
                                                                                                            fontSize: "13px",
                                                                                                            lineHeight: "1.3",
                                                                                                            color: "rgba(255, 255, 255, 0.7)"
                                                                                                        },
                                                                                                        className: "jsx-f1be33e501353b78" + " " + "m-0",
                                                                                                        children: feature.description
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                        lineNumber: 230,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                lineNumber: 221,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, index, true, {
                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                        lineNumber: 188,
                                                                                        columnNumber: 35
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                lineNumber: 186,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 185,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 184,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-f1be33e501353b78",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/tarifs",
                                                                            className: "text-none d-block h-100 demo-hover-effect",
                                                                            style: {
                                                                                textDecoration: "none"
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                                                                                    borderRadius: "0 12px 12px 0",
                                                                                    cursor: "pointer",
                                                                                    transition: "all 0.3s ease"
                                                                                },
                                                                                className: "jsx-f1be33e501353b78" + " " + "p-2 h-100 d-flex flex-column justify-content-center transition-all demo-background",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-f1be33e501353b78" + " " + "text-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                width: "320px",
                                                                                                height: "200px",
                                                                                                border: "1px solid #e2e8f0",
                                                                                                borderRadius: "8px",
                                                                                                transition: "all 0.3s ease"
                                                                                            },
                                                                                            className: "jsx-f1be33e501353b78" + " " + "position-relative overflow-hidden bg-white shadow-sm mx-auto mb-2 mockup-container",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    style: {
                                                                                                        background: "#f8fafc",
                                                                                                        borderBottom: "1px solid #e2e8f0",
                                                                                                        height: "28px"
                                                                                                    },
                                                                                                    className: "jsx-f1be33e501353b78" + " " + "position-relative px-3 py-1",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            style: {
                                                                                                                gap: "4px",
                                                                                                                left: "8px",
                                                                                                                top: "50%",
                                                                                                                transform: "translateY(-50%)"
                                                                                                            },
                                                                                                            className: "jsx-f1be33e501353b78" + " " + "d-flex position-absolute",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    style: {
                                                                                                                        width: "6px",
                                                                                                                        height: "6px",
                                                                                                                        borderRadius: "50%",
                                                                                                                        backgroundColor: "#ff5f57"
                                                                                                                    },
                                                                                                                    className: "jsx-f1be33e501353b78"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                                    lineNumber: 276,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    style: {
                                                                                                                        width: "6px",
                                                                                                                        height: "6px",
                                                                                                                        borderRadius: "50%",
                                                                                                                        backgroundColor: "#ffbd2e"
                                                                                                                    },
                                                                                                                    className: "jsx-f1be33e501353b78"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                                    lineNumber: 277,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    style: {
                                                                                                                        width: "6px",
                                                                                                                        height: "6px",
                                                                                                                        borderRadius: "50%",
                                                                                                                        backgroundColor: "#28ca42"
                                                                                                                    },
                                                                                                                    className: "jsx-f1be33e501353b78"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                                    lineNumber: 278,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                            lineNumber: 270,
                                                                                                            columnNumber: 39
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                                                            className: "jsx-f1be33e501353b78" + " " + "position-absolute px-3",
                                                                                                            children: "view4sight.com"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                            lineNumber: 280,
                                                                                                            columnNumber: 39
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                    lineNumber: 265,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    style: {
                                                                                                        height: "172px"
                                                                                                    },
                                                                                                    className: "jsx-f1be33e501353b78" + " " + "position-relative",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                                                                        lineNumber: 300,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                    lineNumber: 299,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                            lineNumber: 257,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                            style: {
                                                                                                fontSize: "18px",
                                                                                                color: "#1e293b",
                                                                                                lineHeight: "1.3",
                                                                                                transition: "color 0.3s ease"
                                                                                            },
                                                                                            className: "jsx-f1be33e501353b78" + " " + "fw-bold mb-2",
                                                                                            children: "View4Sight"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                            lineNumber: 317,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            style: {
                                                                                                fontSize: "14px",
                                                                                                color: "#64748b",
                                                                                                lineHeight: "1.4",
                                                                                                transition: "color 0.3s ease"
                                                                                            },
                                                                                            className: "jsx-f1be33e501353b78" + " " + "m-0",
                                                                                            children: "Disponible directement dans votre navigateur"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                            lineNumber: 325,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                    lineNumber: 255,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                lineNumber: 249,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 244,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                lineNumber: 183,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 172,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-f1be33e501353b78",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "text-none nav-hover-effect",
                                                        href: "/tarifs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-f1be33e501353b78",
                                                            children: "Pricing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 342,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-f1be33e501353b78",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "text-none nav-hover-effect",
                                                        href: "/securite",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-f1be33e501353b78",
                                                            children: "Security"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 347,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 346,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 345,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: {
                                                        position: "relative"
                                                    },
                                                    className: "jsx-f1be33e501353b78" + " " + "has-dd-menu",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            role: "button",
                                                            "aria-haspopup": "true",
                                                            className: "jsx-f1be33e501353b78" + " " + "nav-hover-effect text-none",
                                                            children: [
                                                                "Ressources",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-uc-navbar-parent-icon": "",
                                                                    className: "jsx-f1be33e501353b78" + " " + "uc-icon uc-navbar-parent-icon",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: 12,
                                                                        height: 12,
                                                                        viewBox: "0 0 12 12",
                                                                        className: "jsx-f1be33e501353b78",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            fill: "none",
                                                                            stroke: "#000",
                                                                            strokeWidth: "1.1",
                                                                            points: "1 3.5 6 8.5 11 3.5",
                                                                            className: "jsx-f1be33e501353b78"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 358,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 357,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                    lineNumber: 353,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 351,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-uc-drop": "mode: click; offset: -8; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150; pos: bottom-right;",
                                                            style: {
                                                                border: "1px solid rgba(0, 0, 0, 0.15)",
                                                                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
                                                                borderRadius: "12px",
                                                                width: "520px",
                                                                backgroundColor: "#ffffff"
                                                            },
                                                            className: "jsx-f1be33e501353b78" + " " + "uc-navbar-dropdown ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar overflow-hidden uc-drop",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-f1be33e501353b78" + " " + "row g-0 col-match",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-f1be33e501353b78" + " " + "col-5",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-f1be33e501353b78" + " " + "px-2 py-1 h-100 d-flex flex-column justify-content-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    gap: "6px"
                                                                                },
                                                                                className: "jsx-f1be33e501353b78" + " " + "d-flex flex-column",
                                                                                children: view4sightResources.map((resource, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        className: "d-flex align-items-center text-none rounded-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 p-1",
                                                                                        href: resource.href,
                                                                                        style: {
                                                                                            gap: "10px"
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                style: {
                                                                                                    width: "44px",
                                                                                                    height: "44px",
                                                                                                    borderRadius: "10px",
                                                                                                    backgroundColor: "rgba(254, 85, 46, 0.1)",
                                                                                                    border: "1px solid rgba(254, 85, 46, 0.2)",
                                                                                                    flexShrink: 0,
                                                                                                    position: "relative"
                                                                                                },
                                                                                                className: "jsx-f1be33e501353b78" + " " + "d-flex align-items-center justify-content-center",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                                                                    lineNumber: 398,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                lineNumber: 389,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                style: {
                                                                                                    minHeight: "44px"
                                                                                                },
                                                                                                className: "jsx-f1be33e501353b78" + " " + "d-flex flex-column justify-content-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        style: {
                                                                                                            fontSize: "15px",
                                                                                                            lineHeight: "1.2",
                                                                                                            color: "#1e293b",
                                                                                                            marginBottom: "2px"
                                                                                                        },
                                                                                                        className: "jsx-f1be33e501353b78" + " " + "fw-bold m-0 dark:text-white",
                                                                                                        children: resource.title
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                        lineNumber: 417,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        style: {
                                                                                                            fontSize: "12px",
                                                                                                            lineHeight: "1.3",
                                                                                                            color: "#64748b"
                                                                                                        },
                                                                                                        className: "jsx-f1be33e501353b78" + " " + "m-0",
                                                                                                        children: resource.description
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                        lineNumber: 425,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                lineNumber: 416,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, index, true, {
                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                        lineNumber: 383,
                                                                                        columnNumber: 35
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                                lineNumber: 381,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 380,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 379,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-f1be33e501353b78" + " " + "col-7",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: "8px",
                                                                                gap: "8px"
                                                                            },
                                                                            className: "jsx-f1be33e501353b78" + " " + "d-flex flex-column h-100 align-items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/ressources/support",
                                                                                    className: "text-none d-block hover:shadow-md transition-all duration-150",
                                                                                    style: {
                                                                                        textDecoration: "none",
                                                                                        flex: "1",
                                                                                        width: "100%"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            minHeight: "80px"
                                                                                        },
                                                                                        className: "jsx-f1be33e501353b78" + " " + "panel p-3 bg-gray-800 dark:bg-gray-700 border border-gray-600 dark:border-gray-500 rounded-2 d-flex align-items-center justify-content-center support-card-hover h-100",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-f1be33e501353b78" + " " + "d-flex align-items-center gap-3",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    src: "/assets/images/custom-icons/headset.svg",
                                                                                                    alt: "Centre d'aide",
                                                                                                    width: 24,
                                                                                                    height: 24,
                                                                                                    className: "flex-shrink-0",
                                                                                                    style: {
                                                                                                        filter: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)"
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                    lineNumber: 449,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "jsx-f1be33e501353b78" + " " + "d-flex flex-column justify-content-center",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                            className: "jsx-f1be33e501353b78" + " " + "h6 fw-bold m-0 text-white dark:text-white",
                                                                                                            children: "Centre d'aide"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                            lineNumber: 462,
                                                                                                            columnNumber: 39
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            className: "jsx-f1be33e501353b78" + " " + "fs-7 m-0 text-gray-300 dark:text-gray-400",
                                                                                                            children: "Support 24/7, FAQ et gui"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                            lineNumber: 465,
                                                                                                            columnNumber: 39
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                    lineNumber: 461,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                            lineNumber: 447,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                        lineNumber: 446,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                    lineNumber: 441,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/ressources/docs",
                                                                                    className: "text-none d-block hover:shadow-md transition-all duration-150",
                                                                                    style: {
                                                                                        textDecoration: "none",
                                                                                        flex: "1",
                                                                                        width: "100%"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            minHeight: "80px"
                                                                                        },
                                                                                        className: "jsx-f1be33e501353b78" + " " + "panel p-3 bg-gray-800 dark:bg-gray-700 border border-gray-600 dark:border-gray-500 rounded-2 d-flex align-items-center justify-content-center docs-card-hover h-100",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-f1be33e501353b78" + " " + "d-flex align-items-center gap-3",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    src: "/assets/images/custom-icons/file-text.svg",
                                                                                                    alt: "Documentation",
                                                                                                    width: 24,
                                                                                                    height: 24,
                                                                                                    className: "flex-shrink-0",
                                                                                                    style: {
                                                                                                        filter: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)"
                                                                                                    }
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                    lineNumber: 482,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "jsx-f1be33e501353b78" + " " + "d-flex flex-column justify-content-center",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                            className: "jsx-f1be33e501353b78" + " " + "h6 fw-bold m-0 text-white dark:text-white",
                                                                                                            children: "Documentation"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                            lineNumber: 495,
                                                                                                            columnNumber: 39
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            className: "jsx-f1be33e501353b78" + " " + "fs-7 m-0 text-gray-300 dark:text-gray-400",
                                                                                                            children: "API, guides et référence"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                            lineNumber: 498,
                                                                                                            columnNumber: 39
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                                    lineNumber: 494,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                                            lineNumber: 480,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                                        lineNumber: 479,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                                                    lineNumber: 474,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                                            lineNumber: 439,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                                        lineNumber: 438,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                                lineNumber: 378,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Header.jsx",
                                                            lineNumber: 367,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/view4sight/Header.jsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-f1be33e501353b78" + " " + "uc-navbar-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-f1be33e501353b78" + " " + "d-none xl:d-block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleContactModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openContactModal"],
                                                role: "button",
                                                className: "jsx-f1be33e501353b78" + " " + "text-none fw-medium nav-hover-effect",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-f1be33e501353b78",
                                                    children: "Request a demo"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 521,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                lineNumber: 516,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-f1be33e501353b78" + " " + "d-none lg:d-block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "text-none fw-medium nav-hover-effect",
                                                href: `/sign-in`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-f1be33e501353b78",
                                                    children: "Log in"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Header.jsx",
                                                    lineNumber: 528,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                lineNumber: 527,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 526,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex",
                                            href: `/tarifs`,
                                            children: "Start free trial"
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 533,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            onClick: __TURBOPACK__imported__module__$5b$project$5d2f$utlis$2f$toggleMobileMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openMobileMenu"],
                                            className: "jsx-f1be33e501353b78" + " " + "d-block lg:d-none uc-icon uc-navbar-toggle-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: 20,
                                                height: 20,
                                                viewBox: "0 0 20 20",
                                                className: "jsx-f1be33e501353b78",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        y: 3,
                                                        width: 20,
                                                        height: 2,
                                                        className: "jsx-f1be33e501353b78" + " " + "line-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 546,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        y: 9,
                                                        width: 20,
                                                        height: 2,
                                                        className: "jsx-f1be33e501353b78" + " " + "line-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 547,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        y: 9,
                                                        width: 20,
                                                        height: 2,
                                                        className: "jsx-f1be33e501353b78" + " " + "line-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 548,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        y: 15,
                                                        width: 20,
                                                        height: 2,
                                                        className: "jsx-f1be33e501353b78" + " " + "line-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Header.jsx",
                                                        lineNumber: 549,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/view4sight/Header.jsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Header.jsx",
                                            lineNumber: 541,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/view4sight/Header.jsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/view4sight/Header.jsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/view4sight/Header.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/view4sight/Header.jsx",
                    lineNumber: 119,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/view4sight/Header.jsx",
                lineNumber: 114,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "bc4428d09ea7f04",
                children: ".nav-hover-effect.jsx-f1be33e501353b78{border:none!important;border-radius:.5rem!important;padding:.5rem .75rem!important;transition:all .2s!important;position:relative!important}.nav-hover-effect.jsx-f1be33e501353b78:hover,.dark .nav-hover-effect.jsx-f1be33e501353b78:hover{background:0 0!important;border:none!important}.uc-navbar-nav>li>:hovera,.uc-navbar-nav>:hoverli>a{box-shadow:none!important;background:0 0!important;border:none!important}.header-default .uc-navbar-nav>.has-dd-menuli>:hovera,.uc-dark .header-default .uc-navbar-nav>.has-dd-menuli>:hovera{box-shadow:none!important;background:0 0!important}.uc-navbar-nav>li>a,.uc-navbar-nav>.has-dd-menuli>a{background:0 0!important}.support-card-hover.jsx-f1be33e501353b78:hover,.docs-card-hover.jsx-f1be33e501353b78:hover{box-shadow:0 4px 16px #00000040;background-color:#374151!important;border-color:#4b5563!important}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$view4sight$2f$View4SightMobileMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/view4sight/Header.jsx",
                lineNumber: 624,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/components/view4sight/Footer.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>View4SightFooter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
// Données spécifiques à View4sight
const view4sightFooterLinks = [
    {
        title: "Product",
        links: [
            {
                href: "/fonctionnalites",
                label: "Features"
            },
            {
                href: "/tarifs",
                label: "Pricing"
            },
            {
                href: "/securite",
                label: "Security"
            },
            {
                href: "/page-contact",
                label: "Request Demo"
            }
        ]
    },
    {
        title: "Resources",
        links: [
            {
                href: "/ressources/use-cases",
                label: "Use Cases"
            },
            {
                href: "/ressources",
                label: "Documentation"
            },
            {
                href: "/ressources",
                label: "Support Center"
            },
            {
                href: "/ressources",
                label: "Tutorials"
            }
        ]
    },
    {
        title: "Company",
        links: [
            {
                href: "/ressources",
                label: "Blog"
            },
            {
                href: "/ressources",
                label: "Careers"
            }
        ]
    }
];
const view4sightSocialLinks = [
    {
        href: "https://linkedin.com/company/view4sight",
        iconClass: "unicon-logo-linkedin"
    },
    {
        href: "https://twitter.com/view4sight",
        iconClass: "unicon-logo-x-filled"
    },
    {
        href: "https://github.com/view4sight",
        iconClass: "unicon-logo-github"
    }
];
function View4SightFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "uc-footer",
        className: "uc-footer panel overflow-hidden uc-dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-inner vstack gap-4 lg:gap-6 xl:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "uc-footer-widgets panel",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row child-cols-6 md:child-cols col-match g-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 lg:col-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "vstack gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/view4sight",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "text-primary",
                                                                alt: "View4Sight",
                                                                src: "/assets/images/logo_v4s_light.png",
                                                                width: "160",
                                                                height: "40",
                                                                style: {
                                                                    height: "40px",
                                                                    objectFit: "contain"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/view4sight/Footer.jsx",
                                                                lineNumber: 53,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                                            lineNumber: 52,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-300 dark:text-gray-400",
                                                            children: "The leading web-based platform for 3D point cloud visualization and collaboration. Transform your survey data into interactive experiences accessible from any browser."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                                            lineNumber: 62,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                                    lineNumber: 51,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "vstack gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "text-white fw-medium mb-2",
                                                            children: "French Data Sovereignty"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                                            lineNumber: 68,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "hstack gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "d-flex align-items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "unicon-shield-check text-primary"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                                                            lineNumber: 71,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "fs-7 text-gray-300",
                                                                            children: "GDPR Compliant"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                                                            lineNumber: 72,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                                                    lineNumber: 70,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "d-flex align-items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "unicon-servers text-primary"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                                                            lineNumber: 75,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "fs-7 text-gray-300",
                                                                            children: "Hosted in France"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                                                            lineNumber: 76,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                                            lineNumber: 69,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/view4sight/Footer.jsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this),
                                    view4sightFooterLinks.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-6 lg:col",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "panel",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                        className: "text-white fw-medium mb-3",
                                                        children: section.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Footer.jsx",
                                                        lineNumber: 87,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "nav-y gap-2 fw-normal",
                                                        children: section.links.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: link.href,
                                                                    className: "text-gray-300 dark:text-gray-400 hover:text-primary transition-colors",
                                                                    children: link.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                                                    lineNumber: 91,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, i, false, {
                                                                fileName: "[project]/components/view4sight/Footer.jsx",
                                                                lineNumber: 90,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Footer.jsx",
                                                        lineNumber: 88,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/view4sight/Footer.jsx",
                                                lineNumber: 86,
                                                columnNumber: 21
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/view4sight/Footer.jsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/view4sight/Footer.jsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top border-gray-700 dark:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-2 lg:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 m-0",
                                            children: [
                                                "View4Sight © ",
                                                new Date().getFullYear(),
                                                ", All rights reserved."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "nav-x gap-3 fw-normal",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/page-privacy",
                                                        className: "text-gray-400 hover:text-primary transition-colors",
                                                        children: "Privacy Policy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Footer.jsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/page-terms",
                                                        className: "text-gray-400 hover:text-primary transition-colors",
                                                        children: "Terms of Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Footer.jsx",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/securite",
                                                        className: "text-gray-400 hover:text-primary transition-colors",
                                                        children: "Security"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Footer.jsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hstack justify-center lg:justify-end gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "nav-x gap-3",
                                            children: view4sightSocialLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-gray-400 hover:text-primary transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `icon icon-2 ${link.iconClass}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                                            lineNumber: 141,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/view4sight/Footer.jsx",
                                                        lineNumber: 135,
                                                        columnNumber: 23
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "vr bg-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex align-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "unicon-heart text-primary fs-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fs-7 text-gray-400",
                                                    children: "Made in France"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/view4sight/Footer.jsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/view4sight/Footer.jsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/view4sight/Footer.jsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/view4sight/Footer.jsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/view4sight/Footer.jsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/view4sight/Footer.jsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/view4sight/Footer.jsx",
        lineNumber: 42,
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
// MobileMenu is now included in View4SightHeader
// import MobileMenu from "@/components/headers/component/MobileMenu";
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$BacktoTop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/common/BacktoTop.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$ContactModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modals/ContactModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$NewsletterModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modals/NewsletterModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$SearchModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/modals/SearchModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$view4sight$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/view4sight/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$view4sight$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/view4sight/Footer.jsx [app-ssr] (ecmascript)");
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
;
function RootLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Check if current page is login page
    const isLoginPage = pathname === '/sign-in';
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
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/assets/favicon/apple-touch-icon.png"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/assets/favicon/favicon-32x32.png"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/assets/favicon/favicon-16x16.png"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        type: "image/x-icon",
                        href: "/assets/favicon/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "manifest",
                        href: "/assets/favicon/site.webmanifest"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: "#FE552E"
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.js",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$Context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ParallaxProvider"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready",
                                children: [
                                    !isLoginPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$view4sight$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/layout.js",
                                        lineNumber: 128,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "wrapper",
                                        className: "wrap",
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/app/layout.js",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    !isLoginPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$view4sight$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/layout.js",
                                        lineNumber: 133,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/layout.js",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$ContactModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$NewsletterModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modals$2f$SearchModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Cart$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$BacktoTop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/layout.js",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/layout.js",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layout.js",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__b4cd99._.js.map