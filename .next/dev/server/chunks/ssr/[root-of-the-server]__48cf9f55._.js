module.exports = [
"[next]/internal/font/google/plus_jakarta_sans_a96f8e98.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "plus_jakarta_sans_a96f8e98-module__NRiVOa__className",
  "variable": "plus_jakarta_sans_a96f8e98-module__NRiVOa__variable",
});
}),
"[next]/internal/font/google/plus_jakarta_sans_a96f8e98.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_a96f8e98$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/plus_jakarta_sans_a96f8e98.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_a96f8e98$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Sans Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_a96f8e98$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_a96f8e98$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/lib/appLinks.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Google Play listing — user app. */ __turbopack_context__.s([
    "APP_DOWNLOAD_PATH",
    ()=>APP_DOWNLOAD_PATH,
    "APP_SHARE_DESCRIPTION",
    ()=>APP_SHARE_DESCRIPTION,
    "APP_SHARE_IMAGE",
    ()=>APP_SHARE_IMAGE,
    "APP_SHARE_TITLE",
    ()=>APP_SHARE_TITLE,
    "PARTNER_DOWNLOAD_PATH",
    ()=>PARTNER_DOWNLOAD_PATH,
    "PARTNER_PLAY_STORE_URL",
    ()=>PARTNER_PLAY_STORE_URL,
    "PARTNER_SHARE_DESCRIPTION",
    ()=>PARTNER_SHARE_DESCRIPTION,
    "PARTNER_SHARE_IMAGE",
    ()=>PARTNER_SHARE_IMAGE,
    "PARTNER_SHARE_TITLE",
    ()=>PARTNER_SHARE_TITLE,
    "PLAY_STORE_URL",
    ()=>PLAY_STORE_URL,
    "buildShareMetadata",
    ()=>buildShareMetadata,
    "getAppShareImageUrl",
    ()=>getAppShareImageUrl,
    "getAppShareUrl",
    ()=>getAppShareUrl,
    "getPartnerShareImageUrl",
    ()=>getPartnerShareImageUrl,
    "getPartnerShareUrl",
    ()=>getPartnerShareUrl,
    "getSiteOrigin",
    ()=>getSiteOrigin
]);
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.astro.pulse";
const PARTNER_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.astroplus.partner";
const APP_DOWNLOAD_PATH = "/app/download";
const PARTNER_DOWNLOAD_PATH = "/app/partner/download";
const APP_SHARE_IMAGE = "/showcase/img1.jpg";
const PARTNER_SHARE_IMAGE = "/showcase/img (2).jpg";
const APP_SHARE_TITLE = "Download Astro Plus";
const APP_SHARE_DESCRIPTION = "Chat with verified astrologers on Astro Plus — daily horoscope, kundli, matchmaking & more.";
const PARTNER_SHARE_TITLE = "Download Astro Plus Partner";
const PARTNER_SHARE_DESCRIPTION = "Join Astro Plus as an astrologer — manage consultations, earnings, sessions, and availability from the partner app.";
function getSiteOrigin() {
    const raw = typeof process.env.NEXT_PUBLIC_SITE_URL === "string" ? process.env.NEXT_PUBLIC_SITE_URL.trim() : "";
    return raw.replace(/\/$/, "") || "https://astropulse.in";
}
function getAppShareUrl(origin = getSiteOrigin()) {
    return `${origin}${APP_DOWNLOAD_PATH}`;
}
function getPartnerShareUrl(origin = getSiteOrigin()) {
    return `${origin}${PARTNER_DOWNLOAD_PATH}`;
}
function getAppShareImageUrl(origin = getSiteOrigin()) {
    return `${origin}${APP_SHARE_IMAGE}`;
}
function getPartnerShareImageUrl(origin = getSiteOrigin()) {
    return `${origin}${PARTNER_SHARE_IMAGE}`;
}
function buildShareMetadata({ title, description, sharePath, shareImage, imageAlt }) {
    const siteOrigin = getSiteOrigin();
    const shareUrl = `${siteOrigin}${sharePath}`;
    const shareImageUrl = `${siteOrigin}${shareImage}`;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: shareUrl,
            siteName: "Astro Plus",
            type: "website",
            images: [
                {
                    url: shareImageUrl,
                    width: 1200,
                    height: 630,
                    alt: imageAlt
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                shareImageUrl
            ]
        }
    };
}
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_a96f8e98$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/plus_jakarta_sans_a96f8e98.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appLinks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/appLinks.js [app-rsc] (ecmascript)");
;
;
;
;
;
const metadata = {
    metadataBase: new URL((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$appLinks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteOrigin"])()),
    title: "Astro Plus — Talk to Top Astrologers Online | Chat & Call",
    description: "Consult verified astrologers 24/7 for Vedic charts, love, career, tarot, and remedies. Book chat or voice on Astro Plus.",
    openGraph: {
        siteName: "Astro Plus",
        type: "website",
        images: [
            {
                url: "/showcase/img1.jpg",
                alt: "Astro Plus — astrology app"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        images: [
            "/showcase/img1.jpg"
        ]
    },
    icons: {
        icon: "/icon.png",
        apple: "/icon.png"
    }
};
const viewport = {
    themeColor: "#CE181E"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_a96f8e98$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} font-sans antialiased`,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.js",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.js",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js <module evaluation>"));
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js"));
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/script.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__48cf9f55._.js.map