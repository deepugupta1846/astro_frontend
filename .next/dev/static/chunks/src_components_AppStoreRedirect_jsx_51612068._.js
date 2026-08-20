(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AppStoreRedirect.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppStoreRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AppStoreRedirect(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "7612d30de48079a6d761db3eb74441095255fe99269a6f139e8572b672ad86d8") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7612d30de48079a6d761db3eb74441095255fe99269a6f139e8572b672ad86d8";
    }
    const { storeUrl, shareImage, brandLabel: t1, heading: t2, imageAlt: t3, ctaLabel: t4 } = t0;
    const brandLabel = t1 === undefined ? "Astro Plus" : t1;
    const heading = t2 === undefined ? "Opening Google Play\u2026" : t2;
    const imageAlt = t3 === undefined ? "App preview" : t3;
    const ctaLabel = t4 === undefined ? "Get it on Google Play" : t4;
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    let t5;
    let t6;
    if ($[1] !== storeUrl) {
        t5 = ({
            "AppStoreRedirect[useEffect()]": ()=>{
                const timer = window.setInterval({
                    "AppStoreRedirect[useEffect() > window.setInterval()]": ()=>{
                        setSeconds(_AppStoreRedirectUseEffectWindowSetIntervalSetSeconds);
                    }
                }["AppStoreRedirect[useEffect() > window.setInterval()]"], 1000);
                const redirect = window.setTimeout({
                    "AppStoreRedirect[useEffect() > window.setTimeout()]": ()=>{
                        window.location.replace(storeUrl);
                    }
                }["AppStoreRedirect[useEffect() > window.setTimeout()]"], 2000);
                return ()=>{
                    window.clearInterval(timer);
                    window.clearTimeout(redirect);
                };
            }
        })["AppStoreRedirect[useEffect()]"];
        t6 = [
            storeUrl
        ];
        $[1] = storeUrl;
        $[2] = t5;
        $[3] = t6;
    } else {
        t5 = $[2];
        t6 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[4] !== imageAlt || $[5] !== shareImage) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-[16/10] w-full bg-brand-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: shareImage,
                alt: imageAlt,
                fill: true,
                className: "object-cover",
                priority: true,
                sizes: "400px"
            }, void 0, false, {
                fileName: "[project]/src/components/AppStoreRedirect.jsx",
                lineNumber: 59,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AppStoreRedirect.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[4] = imageAlt;
        $[5] = shareImage;
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] !== brandLabel) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-bold uppercase tracking-[0.22em] text-primary",
            children: brandLabel
        }, void 0, false, {
            fileName: "[project]/src/components/AppStoreRedirect.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[7] = brandLabel;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] !== heading) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "mt-2 text-xl font-extrabold text-foreground",
            children: heading
        }, void 0, false, {
            fileName: "[project]/src/components/AppStoreRedirect.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[9] = heading;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== seconds) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-muted",
            children: [
                "Redirecting in ",
                seconds,
                "s. If nothing happens, tap below."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppStoreRedirect.jsx",
            lineNumber: 84,
            columnNumber: 11
        }, this);
        $[11] = seconds;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== ctaLabel || $[14] !== storeUrl) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: storeUrl,
            className: "cta-btn mt-6 inline-flex w-full justify-center px-6 py-3 text-sm font-bold",
            children: ctaLabel
        }, void 0, false, {
            fileName: "[project]/src/components/AppStoreRedirect.jsx",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[13] = ctaLabel;
        $[14] = storeUrl;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t10 || $[17] !== t11 || $[18] !== t8 || $[19] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-center",
            children: [
                t8,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppStoreRedirect.jsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
        $[18] = t8;
        $[19] = t9;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t12 || $[22] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-surface shadow-lg",
                children: [
                    t7,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AppStoreRedirect.jsx",
                lineNumber: 112,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AppStoreRedirect.jsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t7;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    return t13;
}
_s(AppStoreRedirect, "U9njtFw8PV7nJVriX9kgvXNEeEg=");
_c = AppStoreRedirect;
function _AppStoreRedirectUseEffectWindowSetIntervalSetSeconds(s) {
    return s > 0 ? s - 1 : 0;
}
var _c;
__turbopack_context__.k.register(_c, "AppStoreRedirect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_AppStoreRedirect_jsx_51612068._.js.map