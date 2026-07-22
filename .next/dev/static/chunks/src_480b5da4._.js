(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/NavLink.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
function NavLink(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "44db86440b16b914e116fdf760cd5e107f8eb7fd3a60fcfb7dd6063807e58f8e") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "44db86440b16b914e116fdf760cd5e107f8eb7fd3a60fcfb7dd6063807e58f8e";
    }
    let children;
    let className;
    let href;
    let rest;
    if ($[1] !== t0) {
        ({ href, className, children, ...rest } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = href;
        $[5] = rest;
    } else {
        children = $[2];
        className = $[3];
        href = $[4];
        rest = $[5];
    }
    if (href.startsWith("/")) {
        let t1;
        if ($[6] !== children || $[7] !== className || $[8] !== href || $[9] !== rest) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: className,
                ...rest,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/NavLink.js",
                lineNumber: 36,
                columnNumber: 12
            }, this);
            $[6] = children;
            $[7] = className;
            $[8] = href;
            $[9] = rest;
            $[10] = t1;
        } else {
            t1 = $[10];
        }
        return t1;
    }
    let t1;
    if ($[11] !== children || $[12] !== className || $[13] !== href || $[14] !== rest) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: className,
            ...rest,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/NavLink.js",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[11] = children;
        $[12] = className;
        $[13] = href;
        $[14] = rest;
        $[15] = t1;
    } else {
        t1 = $[15];
    }
    return t1;
}
_c = NavLink;
var _c;
__turbopack_context__.k.register(_c, "NavLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/apiBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Public REST API base (no trailing slash). Override with NEXT_PUBLIC_API_BASE_URL.
 */ __turbopack_context__.s([
    "getApiBaseUrl",
    ()=>getApiBaseUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getApiBaseUrl() {
    const raw = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL === "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL.trim() : "";
    return raw.replace(/\/$/, "") || "https://api.astropulse.live";
} // http://localhost:5000
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/userApi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requestAccountDeletion",
    ()=>requestAccountDeletion,
    "sendOtp",
    ()=>sendOtp,
    "signupUser",
    ()=>signupUser,
    "verifyOtp",
    ()=>verifyOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiBase.js [app-client] (ecmascript)");
;
async function parseJson(res) {
    const data = await res.json().catch(()=>({}));
    if (!res.ok) {
        throw new Error(data.message || `Request failed (${res.status})`);
    }
    return data;
}
async function sendOtp({ phone, countryCode = "+91" }) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
    const res = await fetch(`${base}/api/v1/user/send-otp`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            phone: phone.trim(),
            countryCode
        })
    });
    return parseJson(res);
}
async function verifyOtp({ phone, countryCode = "+91", otp, signupIntent }) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
    const res = await fetch(`${base}/api/v1/user/verify-otp`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            phone: phone.trim(),
            countryCode,
            otp: otp.trim(),
            ...signupIntent ? {
                signupIntent
            } : {}
        })
    });
    return parseJson(res);
}
async function signupUser({ phone, countryCode = "+91", name, email }) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
    const res = await fetch(`${base}/api/v1/user/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            phone: phone.trim(),
            countryCode,
            name: name?.trim(),
            ...email?.trim() ? {
                email: email.trim()
            } : {}
        })
    });
    return parseJson(res);
}
async function requestAccountDeletion({ phone, countryCode = "+91", otp, reason }) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
    const res = await fetch(`${base}/api/v1/user/request-account-deletion`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            phone: phone.trim(),
            countryCode,
            otp: otp.trim(),
            reason: reason?.trim() || undefined
        })
    });
    return parseJson(res);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SignInModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignInModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$userApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/userApi.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const inputClass = "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/25";
function SignInModal({ open, onClose }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("phone");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("+91");
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verifiedUser, setVerifiedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignInModal.useEffect": ()=>{
            if (!open) return undefined;
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "SignInModal.useEffect": ()=>{
                    document.body.style.overflow = prev;
                }
            })["SignInModal.useEffect"];
        }
    }["SignInModal.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignInModal.useEffect": ()=>{
            if (!open) return undefined;
            const onKey = {
                "SignInModal.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["SignInModal.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "SignInModal.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["SignInModal.useEffect"];
        }
    }["SignInModal.useEffect"], [
        open,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignInModal.useEffect": ()=>{
            if (!open) {
                setStep("phone");
                setPhone("");
                setOtp("");
                setName("");
                setEmail("");
                setError("");
                setSuccess(false);
                setVerifiedUser(null);
                setLoading(false);
            }
        }
    }["SignInModal.useEffect"], [
        open
    ]);
    async function handleSendOtp(e_0) {
        e_0.preventDefault();
        if (!phone.trim() || loading) return;
        setError("");
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$userApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendOtp"])({
                phone,
                countryCode
            });
            setStep("otp");
        } catch (err) {
            setError(err.message || "Failed to send OTP");
        } finally{
            setLoading(false);
        }
    }
    async function handleVerifyOtp(e_1) {
        e_1.preventDefault();
        if (!otp.trim() || otp.length !== 6 || loading) return;
        setError("");
        setLoading(true);
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$userApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyOtp"])({
                phone,
                countryCode,
                otp,
                signupIntent: "astrologer"
            });
            const user = data?.data?.user;
            setVerifiedUser(user ?? null);
            if (user?.name) setName(user.name);
            if (user?.email) setEmail(user.email || "");
            if (user?.astrologerId) {
                setSuccess(true);
            } else {
                setStep("register");
            }
        } catch (err_0) {
            setError(err_0.message || "Invalid OTP");
        } finally{
            setLoading(false);
        }
    }
    async function handleRegister(e_2) {
        e_2.preventDefault();
        if (!name.trim() || loading) return;
        setError("");
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$userApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signupUser"])({
                phone,
                countryCode,
                name,
                email
            });
            setSuccess(true);
        } catch (err_1) {
            setError(err_1.message || "Registration failed");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    role: "presentation",
                    className: "fixed inset-0 z-[200] bg-foreground/45 backdrop-blur-[2px]",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/components/SignInModal.js",
                    lineNumber: 116,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "sign-in-modal-title",
                    className: "fixed inset-0 z-[201] flex items-center justify-center p-4",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl",
                        initial: {
                            opacity: 0,
                            y: 16,
                            scale: 0.98
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            y: 12,
                            scale: 0.98
                        },
                        transition: {
                            type: "spring",
                            damping: 28,
                            stiffness: 320
                        },
                        onClick: (e_3)=>e_3.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                "aria-label": "Close",
                                className: "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-accent hover:text-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.25",
                                    strokeLinecap: "round",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18 6L6 18M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SignInModal.js",
                                        lineNumber: 149,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SignInModal.js",
                                    lineNumber: 148,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SignInModal.js",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-border px-6 pb-5 pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold uppercase tracking-[0.22em] text-primary",
                                        children: "Astro Pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SignInModal.js",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "sign-in-modal-title",
                                        className: "mt-2 pr-8 text-xl font-extrabold text-foreground",
                                        children: success ? "You're all set" : step === "register" ? "Register as astrologer" : "Sign in with phone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SignInModal.js",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-muted",
                                        children: success ? "Your phone is verified and astrologer access is enabled." : step === "register" ? "Add your details to start astrologer onboarding." : "Enter your mobile number to receive a one-time password."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SignInModal.js",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SignInModal.js",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-6",
                                children: [
                                    success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-primary/25 bg-brand-muted/60 px-4 py-4 text-sm leading-relaxed text-foreground",
                                                children: verifiedUser?.astrologerId ? "This number is already linked to an astrologer profile. Open the app to manage consultations." : "Registration started successfully. Download the Astro Pulse app to upload ID proof, set your fees, and go live."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 167,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/download-app",
                                                onClick: onClose,
                                                className: "cta-btn flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold",
                                                children: "Download the app"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onClose,
                                                className: "w-full rounded-xl border border-border py-3 text-sm font-semibold text-foreground transition hover:bg-accent",
                                                children: "Close"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 173,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SignInModal.js",
                                        lineNumber: 166,
                                        columnNumber: 28
                                    }, this) : step === "phone" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSendOtp,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "signin-phone",
                                                        className: "block text-sm font-medium text-foreground",
                                                        children: "Phone number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SignInModal.js",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: countryCode,
                                                                onChange: (e_4)=>setCountryCode(e_4.target.value),
                                                                className: "w-24 shrink-0 rounded-xl border border-border bg-background px-2 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/25",
                                                                "aria-label": "Country code",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "+91",
                                                                        children: "+91"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SignInModal.js",
                                                                        lineNumber: 183,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "+1",
                                                                        children: "+1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SignInModal.js",
                                                                        lineNumber: 184,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "+44",
                                                                        children: "+44"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SignInModal.js",
                                                                        lineNumber: 185,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "+971",
                                                                        children: "+971"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/SignInModal.js",
                                                                        lineNumber: 186,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/SignInModal.js",
                                                                lineNumber: 182,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "signin-phone",
                                                                type: "tel",
                                                                inputMode: "numeric",
                                                                autoComplete: "tel",
                                                                placeholder: "10-digit mobile",
                                                                value: phone,
                                                                onChange: (e_5)=>setPhone(e_5.target.value.replace(/\D/g, "").slice(0, 15)),
                                                                className: inputClass,
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SignInModal.js",
                                                                lineNumber: 188,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SignInModal.js",
                                                        lineNumber: 181,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this),
                                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800",
                                                role: "alert",
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 191,
                                                columnNumber: 31
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading || phone.length < 10,
                                                className: "cta-btn w-full rounded-xl py-3 text-sm font-bold disabled:opacity-60",
                                                children: loading ? "Sending…" : "Continue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 194,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SignInModal.js",
                                        lineNumber: 176,
                                        columnNumber: 47
                                    }, this) : step === "otp" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleVerifyOtp,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted",
                                                children: [
                                                    "OTP sent to",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-foreground",
                                                        children: [
                                                            countryCode,
                                                            " ",
                                                            phone
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SignInModal.js",
                                                        lineNumber: 200,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 198,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "signin-otp",
                                                        className: "block text-sm font-medium text-foreground",
                                                        children: "6-digit OTP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SignInModal.js",
                                                        lineNumber: 205,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "signin-otp",
                                                        type: "text",
                                                        inputMode: "numeric",
                                                        autoComplete: "one-time-code",
                                                        maxLength: 6,
                                                        placeholder: "000000",
                                                        value: otp,
                                                        onChange: (e_6)=>setOtp(e_6.target.value.replace(/\D/g, "").slice(0, 6)),
                                                        className: `${inputClass} mt-2 tracking-[0.35em]`,
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SignInModal.js",
                                                        lineNumber: 208,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 204,
                                                columnNumber: 21
                                            }, this),
                                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800",
                                                role: "alert",
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 210,
                                                columnNumber: 31
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading || otp.length !== 6,
                                                className: "cta-btn w-full rounded-xl py-3 text-sm font-bold disabled:opacity-60",
                                                children: loading ? "Verifying…" : "Verify & continue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setStep("phone");
                                                    setOtp("");
                                                    setError("");
                                                },
                                                className: "w-full text-sm font-semibold text-primary hover:underline",
                                                children: "Change phone number"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 216,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SignInModal.js",
                                        lineNumber: 197,
                                        columnNumber: 46
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleRegister,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "signin-name",
                                                        className: "block text-sm font-medium text-foreground",
                                                        children: "Full name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SignInModal.js",
                                                        lineNumber: 225,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "signin-name",
                                                        type: "text",
                                                        autoComplete: "name",
                                                        placeholder: "Your name",
                                                        value: name,
                                                        onChange: (e_7)=>setName(e_7.target.value),
                                                        className: `${inputClass} mt-2`,
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SignInModal.js",
                                                        lineNumber: 228,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 224,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "signin-email",
                                                        className: "block text-sm font-medium text-foreground",
                                                        children: [
                                                            "Email ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted",
                                                                children: "(optional)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SignInModal.js",
                                                                lineNumber: 232,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SignInModal.js",
                                                        lineNumber: 231,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "signin-email",
                                                        type: "email",
                                                        autoComplete: "email",
                                                        placeholder: "you@email.com",
                                                        value: email,
                                                        onChange: (e_8)=>setEmail(e_8.target.value),
                                                        className: `${inputClass} mt-2`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SignInModal.js",
                                                        lineNumber: 234,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 230,
                                                columnNumber: 21
                                            }, this),
                                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800",
                                                role: "alert",
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 236,
                                                columnNumber: 31
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading || !name.trim(),
                                                className: "cta-btn w-full rounded-xl py-3 text-sm font-bold disabled:opacity-60",
                                                children: loading ? "Registering…" : "Register as astrologer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 239,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SignInModal.js",
                                        lineNumber: 223,
                                        columnNumber: 29
                                    }, this),
                                    !success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-5 text-center text-xs text-muted",
                                        children: [
                                            "Admin access?",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sign-in",
                                                onClick: onClose,
                                                className: "font-semibold text-primary hover:underline",
                                                children: "Sign in here"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SignInModal.js",
                                                lineNumber: 246,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SignInModal.js",
                                        lineNumber: 244,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SignInModal.js",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SignInModal.js",
                        lineNumber: 130,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SignInModal.js",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true) : null
    }, void 0, false, {
        fileName: "[project]/src/components/SignInModal.js",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
_s(SignInModal, "uQj6e2r0AAH8dWTBNpKe0vNExBM=");
_c = SignInModal;
var _c;
__turbopack_context__.k.register(_c, "SignInModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SignInModal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const navLinks = [
    {
        href: "/#services",
        label: "Consult"
    },
    {
        href: "/#astrologers",
        label: "Astrologers"
    },
    {
        href: "/book-puja",
        label: "Book a Puja"
    },
    {
        href: "/matchmaking",
        label: "Kundli"
    },
    {
        href: "/#how-it-works",
        label: "How it works"
    },
    {
        href: "/blogs",
        label: "Blog"
    },
    {
        href: "/#faqs",
        label: "FAQs"
    }
];
function HamburgerIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "46ed306100f6b805f8c6a998c9fb8dad27c7cf3ce41577e8322a5357571440e8") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "46ed306100f6b805f8c6a998c9fb8dad27c7cf3ce41577e8322a5357571440e8";
    }
    const { open } = t0;
    const t1 = `absolute left-0 top-1/2 block h-0.5 w-5 origin-center rounded-full bg-foreground transition-all duration-300 ease-out ${open ? "-translate-y-1/2 rotate-45" : "-translate-y-[6px]"}`;
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const t3 = `absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-foreground transition-all duration-200 ease-out ${open ? "scale-0 opacity-0" : "scale-100 opacity-100"}`;
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t3
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = `absolute left-0 top-1/2 block h-0.5 w-5 origin-center rounded-full bg-foreground transition-all duration-300 ease-out ${open ? "-translate-y-1/2 -rotate-45" : "translate-y-[6px]"}`;
    let t6;
    if ($[5] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t5
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[5] = t5;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== t2 || $[8] !== t4 || $[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative block h-5 w-5 shrink-0",
            "aria-hidden": true,
            children: [
                t2,
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t4;
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
}
_c = HamburgerIcon;
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "46ed306100f6b805f8c6a998c9fb8dad27c7cf3ce41577e8322a5357571440e8") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "46ed306100f6b805f8c6a998c9fb8dad27c7cf3ce41577e8322a5357571440e8";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [signInOpen, setSignInOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Header[useEffect()]": ()=>{
                const onScroll = {
                    "Header[useEffect() > onScroll]": ()=>setScrolled(window.scrollY > 12)
                }["Header[useEffect() > onScroll]"];
                onScroll();
                window.addEventListener("scroll", onScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", onScroll);
            }
        })["Header[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Header[useEffect()]": ()=>{
                setMobileOpen(false);
            }
        })["Header[useEffect()]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== pathname) {
        t3 = [
            pathname
        ];
        $[4] = pathname;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[6] !== mobileOpen) {
        t4 = ({
            "Header[useEffect()]": ()=>{
                if (!mobileOpen) {
                    return;
                }
                const prev = document.body.style.overflow;
                document.body.style.overflow = "hidden";
                return ()=>{
                    document.body.style.overflow = prev;
                };
            }
        })["Header[useEffect()]"];
        t5 = [
            mobileOpen
        ];
        $[6] = mobileOpen;
        $[7] = t4;
        $[8] = t5;
    } else {
        t4 = $[7];
        t5 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[9] !== mobileOpen) {
        t6 = ({
            "Header[useEffect()]": ()=>{
                if (!mobileOpen) {
                    return;
                }
                const onKey = {
                    "Header[useEffect() > onKey]": (e)=>{
                        if (e.key === "Escape") {
                            setMobileOpen(false);
                        }
                    }
                }["Header[useEffect() > onKey]"];
                window.addEventListener("keydown", onKey);
                return ()=>window.removeEventListener("keydown", onKey);
            }
        })["Header[useEffect()]"];
        t7 = [
            mobileOpen
        ];
        $[9] = mobileOpen;
        $[10] = t6;
        $[11] = t7;
    } else {
        t6 = $[10];
        t7 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    const t8 = scrolled ? 10 : 16;
    let t9;
    if ($[12] !== t8) {
        t9 = {
            paddingTop: t8
        };
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            duration: 0.25,
            ease: "easeOut"
        };
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const t11 = `flex items-center justify-between gap-3 rounded-full border border-border bg-white/92 px-3 py-2 backdrop-blur-xl md:gap-4 md:px-4 ${scrolled ? "shadow-lg" : "shadow-md"}`;
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex min-w-0 shrink-0 items-center gap-2 rounded-full py-1 pr-2 text-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-primary/35",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/icon.png",
                        alt: "Astro Pulse",
                        width: 36,
                        height: 36,
                        className: "object-contain p-0.5",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.js",
                        lineNumber: 213,
                        columnNumber: 250
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 213,
                    columnNumber: 121
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden font-bold tracking-tight sm:inline",
                    children: "Astro Pulse"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 213,
                    columnNumber: 372
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "hidden flex-1 items-center justify-center gap-0.5 text-[13px] font-semibold text-foreground/75 lg:flex",
            children: navLinks.map(_HeaderNavLinksMap)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "Header[<button>.onClick]": ()=>setSignInOpen(true)
            }["Header[<button>.onClick]"],
            className: "hidden rounded-full bg-gradient-to-r from-primary to-primary-hover px-4 py-2 text-sm font-bold text-primary-contrast shadow-md shadow-primary/25 transition hover:opacity-95 active:scale-[0.98] sm:inline-flex",
            children: "Sign in"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    const t15 = mobileOpen ? "Close menu" : "Open menu";
    let t16;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "Header[<button>.onClick]": ()=>setMobileOpen(_HeaderButtonOnClickSetMobileOpen)
        })["Header[<button>.onClick]"];
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    if ($[19] !== mobileOpen) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HamburgerIcon, {
            open: mobileOpen
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[19] = mobileOpen;
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    let t18;
    if ($[21] !== mobileOpen || $[22] !== t15 || $[23] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex shrink-0 items-center gap-2",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "flex h-10 w-10 items-center justify-center rounded-full border border-primary/18 bg-white/95 text-foreground shadow-sm transition hover:border-primary/35 hover:bg-white active:scale-[0.97] lg:hidden",
                    "aria-expanded": mobileOpen,
                    "aria-controls": "primary-mobile-nav",
                    "aria-label": t15,
                    onClick: t16,
                    children: t17
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 254,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[21] = mobileOpen;
        $[22] = t15;
        $[23] = t17;
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] !== t11 || $[26] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
            className: t11,
            layout: true,
            "aria-label": "Primary",
            children: [
                t12,
                t13,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t18;
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] !== mobileOpen) {
        t20 = mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    role: "presentation",
                    className: "fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-[2px] lg:hidden",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    onClick: {
                        "Header[<motion.div>.onClick]": ()=>setMobileOpen(false)
                    }["Header[<motion.div>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 273,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                    id: "primary-mobile-nav",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Site navigation",
                    className: "fixed right-0 top-0 z-[101] flex h-[100dvh] w-full max-w-[min(100vw,20rem)] flex-col border-l border-border bg-surface shadow-[-12px_0_48px_rgb(0_0_0/0.12)] lg:hidden",
                    initial: {
                        x: "100%"
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: "100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 30,
                        stiffness: 320
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-border px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
                                    children: "Menu"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 293,
                                    columnNumber: 94
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "flex h-10 w-10 items-center justify-center rounded-full text-muted transition hover:bg-accent hover:text-foreground active:scale-95",
                                    "aria-label": "Close menu",
                                    onClick: {
                                        "Header[<button>.onClick]": ()=>setMobileOpen(false)
                                    }["Header[<button>.onClick]"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-5 w-5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.25",
                                        strokeLinecap: "round",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18 6L6 18M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.js",
                                            lineNumber: 295,
                                            columnNumber: 181
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.js",
                                        lineNumber: 295,
                                        columnNumber: 42
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 293,
                                    columnNumber: 175
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 293,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-3 py-4",
                            children: navLinks.map({
                                "Header[navLinks.map()]": (l_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: l_0.href,
                                        className: "rounded-2xl px-4 py-3.5 text-base font-semibold text-foreground/90 transition-colors hover:bg-accent hover:text-foreground active:bg-accent/80",
                                        onClick: {
                                            "Header[navLinks.map() > <NavLink>.onClick]": ()=>setMobileOpen(false)
                                        }["Header[navLinks.map() > <NavLink>.onClick]"],
                                        children: l_0.label
                                    }, l_0.href, false, {
                                        fileName: "[project]/src/components/Header.js",
                                        lineNumber: 296,
                                        columnNumber: 46
                                    }, this)
                            }["Header[navLinks.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 295,
                            columnNumber: 235
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 border-t border-border p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "Header[<button>.onClick]": ()=>{
                                            setMobileOpen(false);
                                            setSignInOpen(true);
                                        }
                                    }["Header[<button>.onClick]"],
                                    className: "flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-primary-hover py-3.5 text-sm font-bold text-primary-contrast shadow-md shadow-primary/25 transition hover:opacity-95 active:scale-[0.99]",
                                    children: "Sign in"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 299,
                                    columnNumber: 100
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/download-app",
                                    className: "flex w-full items-center justify-center rounded-2xl border border-border py-3.5 text-sm font-semibold text-foreground transition hover:bg-accent",
                                    onClick: {
                                        "Header[<NavLink>.onClick]": ()=>setMobileOpen(false)
                                    }["Header[<NavLink>.onClick]"],
                                    children: "Download app"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.js",
                                    lineNumber: 304,
                                    columnNumber: 292
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.js",
                            lineNumber: 299,
                            columnNumber: 46
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.js",
                    lineNumber: 283,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true) : null;
        $[28] = mobileOpen;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    let t21;
    if ($[30] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[30] = t20;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== t19 || $[33] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[32] = t19;
        $[33] = t21;
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    let t23;
    if ($[35] !== t22 || $[36] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
            className: "sticky top-0 z-50 px-4 pt-4 pb-2",
            initial: false,
            animate: t9,
            transition: t10,
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[35] = t22;
        $[36] = t9;
        $[37] = t23;
    } else {
        t23 = $[37];
    }
    let t24;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = ({
            "Header[<SignInModal>.onClose]": ()=>setSignInOpen(false)
        })["Header[<SignInModal>.onClose]"];
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    let t25;
    if ($[39] !== signInOpen) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignInModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            open: signInOpen,
            onClose: t24
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[39] = signInOpen;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    let t26;
    if ($[41] !== t23 || $[42] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t23,
                t25
            ]
        }, void 0, true);
        $[41] = t23;
        $[42] = t25;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    return t26;
}
_s(Header, "/BuDhxlJ0JbyKeP2Z5IFANRDTqA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = Header;
function _HeaderButtonOnClickSetMobileOpen(o) {
    return !o;
}
function _HeaderNavLinksMap(l) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: l.href,
            className: "whitespace-nowrap rounded-full px-2.5 py-2 transition-colors hover:bg-accent hover:text-foreground xl:px-3",
            children: l.label
        }, void 0, false, {
            fileName: "[project]/src/components/Header.js",
            lineNumber: 370,
            columnNumber: 27
        }, this)
    }, l.href, false, {
        fileName: "[project]/src/components/Header.js",
        lineNumber: 370,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "HamburgerIcon");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MarqueeRow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarqueeRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function MarqueeRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "25da6f04e88e92cd94f38fb580f52ff9aeb47a673f992df4a95b7c0cfe031fcb") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "25da6f04e88e92cd94f38fb580f52ff9aeb47a673f992df4a95b7c0cfe031fcb";
    }
    const { items, slow: t1, className: t2 } = t0;
    const slow = t1 === undefined ? false : t1;
    const className = t2 === undefined ? "" : t2;
    let t3;
    if ($[1] !== items) {
        t3 = items.map(_MarqueeRowItemsMap);
        $[1] = items;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== items) {
        t4 = items.map(_MarqueeRowItemsMap2);
        $[3] = items;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t3 || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t3,
                t4
            ]
        }, void 0, true);
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const row = t5;
    const t6 = `marquee-mask relative w-full overflow-hidden py-1 ${className}`;
    const t7 = `flex w-max gap-3 pl-3 ${slow ? "animate-marquee-slow" : "animate-marquee"}`;
    let t8;
    if ($[8] !== row || $[9] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: row
        }, void 0, false, {
            fileName: "[project]/src/components/MarqueeRow.js",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[8] = row;
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t6 || $[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/MarqueeRow.js",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    return t9;
}
_c = MarqueeRow;
function _MarqueeRowItemsMap2(label_0, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "pill-chip",
        children: label_0
    }, `b-${i_0}`, false, {
        fileName: "[project]/src/components/MarqueeRow.js",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
function _MarqueeRowItemsMap(label, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "pill-chip",
        children: label
    }, `a-${i}`, false, {
        fileName: "[project]/src/components/MarqueeRow.js",
        lineNumber: 71,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "MarqueeRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MarqueeRow.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const categories = [
    "Love & marriage",
    "Career & wealth",
    "Vedic chart",
    "KP astrology",
    "Tarot",
    "Numerology",
    "Palmistry",
    "Vastu"
];
const spotlightExperts = [
    {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=280&h=280&fit=crop&crop=face",
        alt: "Astrologer portrait",
        label: "Vedic · 15 yrs"
    },
    {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=280&h=280&fit=crop&crop=face",
        alt: "Astrologer portrait",
        label: "Tarot · 9 yrs"
    },
    {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=280&fit=crop&crop=face",
        alt: "Astrologer portrait",
        label: "KP · 12 yrs"
    },
    {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=280&h=280&fit=crop&crop=face",
        alt: "Astrologer portrait",
        label: "Numerology · 8 yrs"
    }
];
function Hero() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "f63913df2416a13987cef96926b045bf1ce0598df3464a74a36a9b7f41fd94f1") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f63913df2416a13987cef96926b045bf1ce0598df3464a74a36a9b7f41fd94f1";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            backgroundColor: "#b52e31"
        };
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-radial-overlay pointer-events-none absolute inset-0",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "banner-noise pointer-events-none absolute inset-0",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            y: 10
        };
        t4 = {
            opacity: 1,
            y: 0
        };
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            className: "text-center text-[11px] font-bold uppercase tracking-[0.28em] text-amber-200 md:text-xs",
            initial: t3,
            animate: t4,
            transition: {
                duration: 0.45,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            },
            children: "First consultation perks • 100% verified astrologers"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            opacity: 0,
            y: 22
        };
        t7 = {
            opacity: 1,
            y: 0
        };
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            duration: 0.55,
            delay: 0.04,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        };
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            className: "text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.35rem] lg:leading-[1.06]",
            initial: t6,
            animate: t7,
            transition: t8,
            children: [
                "Chat with India's top astrologers—",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-rose-50 via-amber-100 to-[#ffe0a6] bg-clip-text text-transparent",
                    children: [
                        " ",
                        "live, private, instant."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.js",
                    lineNumber: 107,
                    columnNumber: 211
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            className: "mt-5 max-w-xl text-base font-medium leading-relaxed text-rose-50/90 md:text-lg",
            initial: {
                opacity: 0,
                y: 18
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.5,
                delay: 0.1
            },
            children: "Birth charts, love compatibility, career timing, remedies, and more—book a chat or call in seconds on Astro Pulse."
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    let t12;
    let t13;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            opacity: 0,
            y: 14
        };
        t12 = {
            opacity: 1,
            y: 0
        };
        t13 = {
            duration: 0.45,
            delay: 0.14
        };
        $[12] = t11;
        $[13] = t12;
        $[14] = t13;
    } else {
        t11 = $[12];
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "mt-8 flex flex-wrap gap-4",
            initial: t11,
            animate: t12,
            transition: t13,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#astrologers",
                    className: "cta-btn-gold inline-flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            children: "💬"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.js",
                            lineNumber: 154,
                            columnNumber: 185
                        }, this),
                        " Talk to an astrologer"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.js",
                    lineNumber: 154,
                    columnNumber: 106
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#how-it-works",
                    className: "cta-outline-light",
                    children: "How it works"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.js",
                    lineNumber: 154,
                    columnNumber: 245
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    let t16;
    let t17;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            opacity: 0,
            y: 12
        };
        t16 = {
            opacity: 1,
            y: 0
        };
        t17 = {
            duration: 0.45,
            delay: 0.2
        };
        $[16] = t15;
        $[17] = t16;
        $[18] = t17;
    } else {
        t15 = $[16];
        t16 = $[17];
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-white/15 bg-white/5 px-3 py-4 backdrop-blur-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                    className: "text-2xl font-extrabold text-rose-100/80 md:text-3xl",
                    children: "500+"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.js",
                    lineNumber: 185,
                    columnNumber: 101
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                    className: "mt-1 text-[11px] font-semibold uppercase tracking-wider text-rose-100/80",
                    children: "Experts"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.js",
                    lineNumber: 185,
                    columnNumber: 179
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-white/15 bg-white/5 px-3 py-4 backdrop-blur-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                    className: "text-2xl font-extrabold text-rose-100/80 md:text-3xl",
                    children: "4.9"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.js",
                    lineNumber: 192,
                    columnNumber: 101
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                    className: "mt-1 text-[11px] font-semibold uppercase tracking-wider text-rose-100/80",
                    children: "Avg. rating"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.js",
                    lineNumber: 192,
                    columnNumber: 178
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t10,
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].dl, {
                    className: "mt-10 grid max-w-md grid-cols-3 gap-4 text-center sm:text-left",
                    initial: t15,
                    animate: t16,
                    transition: t17,
                    children: [
                        t18,
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-white/15 bg-white/5 px-3 py-4 backdrop-blur-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "text-2xl font-extrabold text-rose-100/80 md:text-3xl",
                                    children: "24/7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.js",
                                    lineNumber: 199,
                                    columnNumber: 261
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "mt-1 text-[11px] font-semibold uppercase tracking-wider text-rose-100/80",
                                    children: "Available"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.js",
                                    lineNumber: 199,
                                    columnNumber: 339
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.js",
                            lineNumber: 199,
                            columnNumber: 171
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.js",
                    lineNumber: 199,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    let t22;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            opacity: 0,
            x: 28
        };
        t22 = {
            opacity: 1,
            x: 0
        };
        $[22] = t21;
        $[23] = t22;
    } else {
        t21 = $[22];
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            duration: 0.6,
            delay: 0.12,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        };
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-square max-h-[min(100vw-2rem,420px)] rounded-[2rem] border border-white/20 bg-gradient-to-br from-white/20 to-transparent p-1 shadow-2xl shadow-black/40 backdrop-blur-sm lg:max-h-[440px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full overflow-hidden rounded-[1.85rem] bg-black/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/showcase/img1.jpg",
                        alt: "Night sky over mountains",
                        fill: true,
                        className: "object-cover opacity-90",
                        sizes: "(max-width: 1024px) 90vw, 440px",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.js",
                        lineNumber: 234,
                        columnNumber: 310
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.js",
                        lineNumber: 234,
                        columnNumber: 479
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "absolute bottom-6 left-6 right-6 text-sm font-semibold text-white drop-shadow-md",
                        children: "Guided readings from verified pandits, acharyas, and intuitive specialists—tailored to your birth details."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.js",
                        lineNumber: 234,
                        columnNumber: 574
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.js",
                lineNumber: 234,
                columnNumber: 231
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none",
                    initial: t21,
                    animate: t22,
                    transition: t23,
                    children: [
                        t24,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -right-4 top-1/2 flex w-[52%] -translate-y-1/2 flex-col gap-3 max-lg:hidden xl:-right-8",
                            children: spotlightExperts.map(_HeroSpotlightExpertsMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.js",
                            lineNumber: 241,
                            columnNumber: 231
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.js",
                    lineNumber: 241,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
            className: "mt-14 text-center text-sm font-extrabold uppercase tracking-[0.2em] text-rose-100/80 md:text-base",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: 0.25
            },
            children: "Popular categories"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "mt-5",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: 0.3
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                items: categories
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.js",
                lineNumber: 267,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    let t29;
    let t30;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            opacity: 0
        };
        t29 = {
            opacity: 1
        };
        t30 = {
            delay: 0.35
        };
        $[29] = t28;
        $[30] = t29;
        $[31] = t30;
    } else {
        t28 = $[29];
        t29 = $[30];
        t30 = $[31];
    }
    let t31;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "services",
            className: "hero-banner relative overflow-hidden text-white",
            style: t0,
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto max-w-6xl px-4 pb-14 pt-4 md:pb-20 md:pt-8",
                    children: [
                        t5,
                        t25,
                        t26,
                        t27,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "mt-3",
                            initial: t28,
                            animate: t29,
                            transition: t30,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: [
                                    ...categories
                                ].reverse(),
                                slow: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.js",
                                lineNumber: 295,
                                columnNumber: 283
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.js",
                            lineNumber: 295,
                            columnNumber: 209
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.js",
                    lineNumber: 295,
                    columnNumber: 113
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.js",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[32] = t31;
    } else {
        t31 = $[32];
    }
    return t31;
}
_c = Hero;
function _HeroSpotlightExpertsMap(ex, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex items-center gap-3 rounded-2xl border border-white/30 bg-black/50 p-2 pr-4 shadow-xl backdrop-blur-md",
        initial: {
            opacity: 0,
            x: 20
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            delay: 0.35 + i * 0.08,
            duration: 0.4
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-2 ring-primary/70",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: ex.src,
                    alt: ex.alt,
                    fill: true,
                    className: "object-cover",
                    sizes: "56px"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.js",
                    lineNumber: 312,
                    columnNumber: 101
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.js",
                lineNumber: 312,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold text-amber-200",
                        children: "Online now"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.js",
                        lineNumber: 312,
                        columnNumber: 217
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate text-sm font-semibold text-white",
                        children: ex.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.js",
                        lineNumber: 312,
                        columnNumber: 279
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.js",
                lineNumber: 312,
                columnNumber: 192
            }, this)
        ]
    }, `spotlight-${i}`, true, {
        fileName: "[project]/src/components/Hero.js",
        lineNumber: 303,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Reveal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function Reveal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "9b5bc4714285ef1406030ee9869b77da4ce5cec60a62eb0fc5482d66365080bf") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b5bc4714285ef1406030ee9869b77da4ce5cec60a62eb0fc5482d66365080bf";
    }
    const { children, delay: t1, className: t2, y: t3 } = t0;
    const delay = t1 === undefined ? 0 : t1;
    const className = t2 === undefined ? "" : t2;
    const y = t3 === undefined ? 28 : t3;
    let t4;
    if ($[1] !== y) {
        t4 = {
            opacity: 0,
            y
        };
        $[1] = y;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    let t5;
    let t6;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 1,
            y: 0
        };
        t6 = {
            once: true,
            margin: "-60px"
        };
        $[3] = t5;
        $[4] = t6;
    } else {
        t5 = $[3];
        t6 = $[4];
    }
    let t7;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            0.22,
            1,
            0.36,
            1
        ];
        $[5] = t7;
    } else {
        t7 = $[5];
    }
    let t8;
    if ($[6] !== delay) {
        t8 = {
            duration: 0.55,
            delay,
            ease: t7
        };
        $[6] = delay;
        $[7] = t8;
    } else {
        t8 = $[7];
    }
    let t9;
    if ($[8] !== children || $[9] !== className || $[10] !== t4 || $[11] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: className,
            initial: t4,
            whileInView: t5,
            viewport: t6,
            transition: t8,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Reveal.js",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = className;
        $[10] = t4;
        $[11] = t8;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    return t9;
}
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ComplimentaryAstrologyServices.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComplimentaryAstrologyServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function ChevronIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70";
    }
    const { dir } = t0;
    const left = dir === "prev";
    let t1;
    if ($[1] !== left) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-5 w-5 shrink-0 md:h-[1.35rem] md:w-[1.35rem]",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.25",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": true,
            children: left ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 18l-6-6 6-6"
            }, void 0, false, {
                fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                lineNumber: 26,
                columnNumber: 219
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 18l6-6-6-6"
            }, void 0, false, {
                fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                lineNumber: 26,
                columnNumber: 250
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = left;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = ChevronIcon;
function IconCompatibility() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 48 48",
            className: "h-7 w-7 md:h-8 md:w-8",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "currentColor",
                    d: "M24 9a2.8 2.8 0 00-2.6 1.7 2.8 2.8 0 00-5.2 1.4c0 2.4 2.2 4.3 4.8 4.3 1 0 2-.3 2.8-.9.8.6 1.8.9 2.8.9 2.6 0 4.8-1.9 4.8-4.3a2.8 2.8 0 00-5.2-1.4A2.8 2.8 0 0024 9z"
                }, void 0, false, {
                    fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                    lineNumber: 44,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M17 38v-9l-3.5-5.5 3.5-3.5h3m8 0h3l3.5 3.5-3.5 5.5V38M17 24h5m9 0h5"
                }, void 0, false, {
                    fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                    lineNumber: 44,
                    columnNumber: 283
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = IconCompatibility;
function IconRings() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 48 48",
            className: "h-7 w-7 md:h-8 md:w-8",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "19",
                    cy: "26",
                    rx: "11",
                    ry: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.25",
                    transform: "rotate(-28 19 26)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                    lineNumber: 61,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "29",
                    cy: "26",
                    rx: "11",
                    ry: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.25",
                    transform: "rotate(28 29 26)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                    lineNumber: 61,
                    columnNumber: 214
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c2 = IconRings;
function IconOx() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 48 48",
            className: "h-7 w-7 md:h-8 md:w-8",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M14 28c2-8 8-12 16-11 4 0 7 3 8 7M18 34h12M22 22l-4-6 4-2m12 8l4-6-4-2M20 18v-4l4-2 4 2v4"
            }, void 0, false, {
                fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                lineNumber: 78,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c3 = IconOx;
function IconPanchang() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 48 48",
            className: "h-7 w-7 md:h-8 md:w-8",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "24",
                    cy: "24",
                    r: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                    lineNumber: 95,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.75",
                    strokeLinecap: "round",
                    d: "M24 12v24M12 24h24M16.5 16.5l15 15m0-15l-15 15"
                }, void 0, false, {
                    fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                    lineNumber: 95,
                    columnNumber: 171
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "24",
                    cy: "24",
                    r: "4",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                    lineNumber: 95,
                    columnNumber: 305
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c4 = IconPanchang;
const SERVICES = [
    {
        id: "compatibility",
        title: "Compatibility",
        description: "Confused by love? Remove the doubts & find the sparks! Check the compatibility with your partner using our tool and ignite a love that lasts forever.",
        Icon: IconCompatibility
    },
    {
        id: "kundli-matching",
        title: "Kundli Matching",
        description: "Check love compatibility and marriage prediction online. Get the best horoscope and kundli matching predictions today!",
        Icon: IconRings
    },
    {
        id: "chinese-horoscope",
        title: "Chinese Horoscope",
        description: "Are you a playful cat, a clever mouse, or a roaring lion? Discover your inner spirit animal with Chinese astrology. Find out now!",
        Icon: IconOx
    },
    {
        id: "today-panchang",
        title: "Today Panchang",
        description: "Panchang enlists a record of auspicious dates and times for any auspicious task such as marriage, celebration, puja, starting any business etc.",
        Icon: IconPanchang
    }
];
function ServiceCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70";
    }
    const { item } = t0;
    const { Icon } = item;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            y: -4
        };
        t2 = {
            type: "spring",
            stiffness: 380,
            damping: 22
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== Icon) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold text-foreground md:h-[4.25rem] md:w-[4.25rem]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                lineNumber: 156,
                columnNumber: 154
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[3] = Icon;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== item.title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mt-5 min-h-[1.75rem] text-lg font-bold text-foreground md:min-h-[2rem] md:text-xl",
            children: item.title
        }, void 0, false, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[5] = item.title;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== item.description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 min-h-[6.5rem] flex-1 text-sm leading-relaxed text-muted line-clamp-4 md:min-h-[7rem] md:text-[0.9375rem]",
            children: item.description
        }, void 0, false, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 172,
            columnNumber: 10
        }, this);
        $[7] = item.description;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
            className: "flex h-full w-full flex-col rounded-2xl border border-border bg-surface px-6 pb-7 pt-8 text-center shadow-md shadow-foreground/5 ring-1 ring-border/80 border-b-4 border-b-gold",
            whileHover: t1,
            transition: t2,
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 180,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c5 = ServiceCard;
function ComplimentaryAstrologyServices() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "64fbbd6c2a12a691cbd3f0764b76619f589d49ce55d35f397490acd698476f70";
    }
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const canLoop = SERVICES.length >= 6;
    const prevRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ComplimentaryAstrologyServices[onSwiperBeforeInit]": (swiper)=>{
                const nav = swiper.params.navigation;
                if (nav && typeof nav === "object") {
                    nav.prevEl = prevRef.current;
                    nav.nextEl = nextRef.current;
                }
            }
        })["ComplimentaryAstrologyServices[onSwiperBeforeInit]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const onSwiperBeforeInit = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-xs font-bold uppercase tracking-[0.25em] text-primary",
                        children: "Free tools for you"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                        lineNumber: 220,
                        columnNumber: 58
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title mt-3 md:mt-4",
                        children: "Complimentary astrology services"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                        lineNumber: 220,
                        columnNumber: 166
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-4 max-w-2xl text-center text-base text-muted md:text-lg",
                        children: "Explore compatibility, matching, and daily guidance—no session required."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                        lineNumber: 220,
                        columnNumber: 246
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                lineNumber: 220,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 220,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== reduceMotion) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "complimentary-services",
            className: "border-y border-border bg-accent/60 py-16 md:py-24",
            children: [
                t1,
                reduceMotion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mt-12 grid max-w-6xl auto-rows-fr grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4",
                    children: SERVICES.map(_ComplimentaryAstrologyServicesSERVICESMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                    lineNumber: 227,
                    columnNumber: 130
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "astro-top-swiper relative mx-auto mt-12 max-w-6xl px-11 sm:px-14 md:px-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: prevRef,
                            type: "button",
                            className: "swiper-button-prev astro-swiper-nav astro-swiper-nav-prev pill-nav pointer-events-auto absolute left-0 top-[42%] z-20 flex -translate-y-1/2",
                            "aria-label": "Previous slides",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {
                                dir: "prev"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                                lineNumber: 227,
                                columnNumber: 617
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                            lineNumber: 227,
                            columnNumber: 400
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: nextRef,
                            type: "button",
                            className: "swiper-button-next astro-swiper-nav astro-swiper-nav-next pill-nav pointer-events-auto absolute right-0 top-[42%] z-20 flex -translate-y-1/2",
                            "aria-label": "Next slides",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {
                                dir: "next"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                                lineNumber: 227,
                                columnNumber: 866
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                            lineNumber: 227,
                            columnNumber: 652
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                            ],
                            spaceBetween: 18,
                            slidesPerView: 1,
                            breakpoints: {
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 22
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 24
                                }
                            },
                            loop: canLoop,
                            grabCursor: true,
                            autoplay: {
                                delay: 4200,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            },
                            speed: 650,
                            pagination: {
                                clickable: true,
                                dynamicBullets: SERVICES.length > 8
                            },
                            navigation: true,
                            onBeforeInit: onSwiperBeforeInit,
                            className: "astro-top-swiper-inner complimentary-services-swiper !pb-14 pt-1 [&_.swiper-slide]:!flex [&_.swiper-slide]:!h-auto [&_.swiper-slide]:items-stretch [&_.swiper-wrapper]:!items-stretch",
                            "aria-label": "Complimentary astrology services carousel",
                            children: SERVICES.map(_ComplimentaryAstrologyServicesSERVICESMap2)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                            lineNumber: 227,
                            columnNumber: 901
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                    lineNumber: 227,
                    columnNumber: 309
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 227,
            columnNumber: 10
        }, this);
        $[3] = reduceMotion;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_s(ComplimentaryAstrologyServices, "HJNBkvKt1ThiqP85kgGc7fBqHZM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c6 = ComplimentaryAstrologyServices;
function _ComplimentaryAstrologyServicesSERVICESMap2(item_0, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
        className: "box-border !flex !h-auto items-stretch justify-center py-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full max-w-[320px] items-stretch",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                item: item_0
            }, void 0, false, {
                fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                lineNumber: 256,
                columnNumber: 192
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 256,
            columnNumber: 128
        }, this)
    }, item_0.id ?? `slide-${i_0}`, false, {
        fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
        lineNumber: 256,
        columnNumber: 10
    }, this);
}
function _ComplimentaryAstrologyServicesSERVICESMap(item, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        delay: i * 0.04,
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full max-w-[320px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                    item: item
                }, void 0, false, {
                    fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                    lineNumber: 259,
                    columnNumber: 157
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
                lineNumber: 259,
                columnNumber: 112
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
            lineNumber: 259,
            columnNumber: 68
        }, this)
    }, item.id, false, {
        fileName: "[project]/src/components/ComplimentaryAstrologyServices.js",
        lineNumber: 259,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "ChevronIcon");
__turbopack_context__.k.register(_c1, "IconCompatibility");
__turbopack_context__.k.register(_c2, "IconRings");
__turbopack_context__.k.register(_c3, "IconOx");
__turbopack_context__.k.register(_c4, "IconPanchang");
__turbopack_context__.k.register(_c5, "ServiceCard");
__turbopack_context__.k.register(_c6, "ComplimentaryAstrologyServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TopAstrologers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopAstrologers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ScrollButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "a6010f113f33df336bdee50330faf9f94ac333ed3096b1280fef67db9df70fb6") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6010f113f33df336bdee50330faf9f94ac333ed3096b1280fef67db9df70fb6";
    }
    const { direction, onClick } = t0;
    const label = direction === "left" ? "Scroll left" : "Scroll right";
    const t1 = direction === "left" ? "\u2039" : "\u203A";
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": true,
            className: "text-lg leading-none",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== label || $[4] !== onClick || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClick,
            "aria-label": label,
            className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = label;
        $[4] = onClick;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_c = ScrollButton;
function LiveCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(57);
    if ($[0] !== "a6010f113f33df336bdee50330faf9f94ac333ed3096b1280fef67db9df70fb6") {
        for(let $i = 0; $i < 57; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6010f113f33df336bdee50330faf9f94ac333ed3096b1280fef67db9df70fb6";
    }
    const { a } = t0;
    let t1;
    if ($[1] !== a.name) {
        t1 = a.name?.replace(/^Astro\s+/i, "") ?? "Astrologer";
        $[1] = a.name;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const displayName = t1;
    const t2 = a.image;
    let t3;
    if ($[3] !== a.image) {
        t3 = a.image.includes("images.unsplash.com");
        $[3] = a.image;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = !t3;
    let t5;
    if ($[5] !== a.image || $[6] !== displayName || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[72px] w-[72px] overflow-hidden rounded-full border-2 border-border bg-accent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: t2,
                alt: displayName,
                fill: true,
                className: "object-cover",
                sizes: "72px",
                unoptimized: t4
            }, void 0, false, {
                fileName: "[project]/src/components/TopAstrologers.js",
                lineNumber: 74,
                columnNumber: 116
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[5] = a.image;
        $[6] = displayName;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== a.celebrity) {
        t6 = a.celebrity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-white shadow-sm",
            style: {
                background: "linear-gradient(135deg, #8b6914 0%, #c9a44a 100%)"
            },
            children: "Celebrity"
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 84,
            columnNumber: 25
        }, this);
        $[9] = a.celebrity;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== a.celebrity || $[12] !== a.online) {
        t7 = a.online && !a.celebrity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -bottom-0.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-surface bg-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 94,
            columnNumber: 38
        }, this);
        $[11] = a.celebrity;
        $[12] = a.online;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t5 || $[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative shrink-0",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== displayName) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "truncate text-base font-bold text-foreground",
            children: displayName
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[18] = displayName;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== a.specialties) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 line-clamp-2 text-xs leading-snug text-muted",
            children: a.specialties
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[20] = a.specialties;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gold",
            "aria-hidden": true,
            children: "★"
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== a.rating) {
        t12 = a.rating.toFixed(2);
        $[23] = a.rating;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1 font-semibold text-foreground",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== a.orders) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted",
            children: a.orders
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[27] = a.orders;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t13 || $[30] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t14;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t10 || $[33] !== t15 || $[34] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0 flex-1 pt-0.5",
            children: [
                t9,
                t10,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[32] = t10;
        $[33] = t15;
        $[34] = t9;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t16 || $[37] !== t8) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 pb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    t8,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TopAstrologers.js",
                lineNumber: 179,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[36] = t16;
        $[37] = t8;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted",
            children: "Languages"
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] !== a.languages) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-2 py-1 text-xs",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-right font-medium text-foreground",
                    children: a.languages
                }, void 0, false, {
                    fileName: "[project]/src/components/TopAstrologers.js",
                    lineNumber: 195,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[40] = a.languages;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted",
            children: "Experience"
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] !== a.experience) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-2 py-1 text-xs",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-foreground",
                    children: a.experience
                }, void 0, false, {
                    fileName: "[project]/src/components/TopAstrologers.js",
                    lineNumber: 210,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[43] = a.experience;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== t19 || $[46] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 rounded-xl bg-background px-3 py-2.5",
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[45] = t19;
        $[46] = t21;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== a.price) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-extrabold text-foreground",
            children: a.price
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[48] = a.price;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/download-app",
            className: "rounded-lg border-2 border-emerald-600 bg-surface px-5 py-2 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50",
            children: "Chat"
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-auto flex items-center justify-between gap-3 p-4 pt-3",
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[51] = t23;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== t17 || $[54] !== t22 || $[55] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "flex h-full w-[min(100%,280px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:border-primary/20 hover:shadow-md sm:w-[280px]",
            children: [
                t17,
                t22,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[53] = t17;
        $[54] = t22;
        $[55] = t25;
        $[56] = t26;
    } else {
        t26 = $[56];
    }
    return t26;
}
_c1 = LiveCard;
function TopAstrologers(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "a6010f113f33df336bdee50330faf9f94ac333ed3096b1280fef67db9df70fb6") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6010f113f33df336bdee50330faf9f94ac333ed3096b1280fef67db9df70fb6";
    }
    const { astrologers: t1 } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const astrologers = t2;
    let t3;
    if ($[3] !== astrologers) {
        t3 = astrologers.length ? astrologers : [];
        $[3] = astrologers;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const list = t3;
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const displayCount = list.length >= 100 ? "100+" : `${list.length}+`;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "TopAstrologers[scroll]": (direction)=>{
                const track = trackRef.current;
                if (!track) {
                    return;
                }
                const amount = direction === "left" ? -300 : 300;
                track.scrollBy({
                    left: amount,
                    behavior: "smooth"
                });
            }
        })["TopAstrologers[scroll]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const scroll = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-bold uppercase tracking-[0.28em] text-muted",
            children: "Live now"
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 329,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== displayCount) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]",
                    children: [
                        displayCount,
                        " best astrologers, ready now."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TopAstrologers.js",
                    lineNumber: 336,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 336,
            columnNumber: 10
        }, this);
        $[7] = displayCount;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== list.length) {
        t7 = list.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollButton, {
                    direction: "left",
                    onClick: {
                        "TopAstrologers[<ScrollButton>.onClick]": ()=>scroll("left")
                    }["TopAstrologers[<ScrollButton>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/src/components/TopAstrologers.js",
                    lineNumber: 344,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollButton, {
                    direction: "right",
                    onClick: {
                        "TopAstrologers[<ScrollButton>.onClick]": ()=>scroll("right")
                    }["TopAstrologers[<ScrollButton>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/src/components/TopAstrologers.js",
                    lineNumber: 346,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 344,
            columnNumber: 29
        }, this);
        $[9] = list.length;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-end justify-between gap-4",
                children: [
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TopAstrologers.js",
                lineNumber: 356,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 356,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== list) {
        t9 = list.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mx-auto mt-12 max-w-lg rounded-2xl border border-border bg-surface px-6 py-8 text-center text-sm text-muted",
                children: [
                    "No astrologers to display. Add entries in",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "rounded bg-accent px-1 py-0.5 text-xs text-foreground",
                        children: "src/data/notebookAstrologers.json"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TopAstrologers.js",
                        lineNumber: 365,
                        columnNumber: 207
                    }, this),
                    " ",
                    "or connect a live API."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TopAstrologers.js",
                lineNumber: 365,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 365,
            columnNumber: 30
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: trackRef,
                    className: "mt-8 flex items-stretch gap-4 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory",
                    children: list.map(_TopAstrologersListMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/TopAstrologers.js",
                    lineNumber: 365,
                    columnNumber: 364
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 0.1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "TopAstrologers[<button>.onClick]": ()=>scroll("right")
                            }["TopAstrologers[<button>.onClick]"],
                            className: "inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold text-foreground shadow-md transition hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]",
                            style: {
                                background: "linear-gradient(135deg, #f5e6b8 0%, #e8d48b 50%, #d4bc6a 100%)"
                            },
                            children: [
                                "More astrologers",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TopAstrologers.js",
                                    lineNumber: 369,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TopAstrologers.js",
                            lineNumber: 365,
                            columnNumber: 665
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TopAstrologers.js",
                        lineNumber: 365,
                        columnNumber: 622
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TopAstrologers.js",
                    lineNumber: 365,
                    columnNumber: 602
                }, this)
            ]
        }, void 0, true);
        $[14] = list;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t8 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "astrologers",
            className: "border-y border-border bg-gradient-to-b from-brand-muted/90 via-brand-muted/50 to-background py-16 md:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4",
                children: [
                    t8,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TopAstrologers.js",
                lineNumber: 377,
                columnNumber: 157
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[16] = t8;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    return t10;
}
_s(TopAstrologers, "MRPoGswyMQM28Ca9bWnGm0R+Wxw=");
_c2 = TopAstrologers;
function _TopAstrologersListMap(a, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        delay: i * 0.03,
        className: "flex shrink-0 self-stretch",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveCard, {
            a: a
        }, void 0, false, {
            fileName: "[project]/src/components/TopAstrologers.js",
            lineNumber: 387,
            columnNumber: 101
        }, this)
    }, a.id ?? `astro-${i}`, false, {
        fileName: "[project]/src/components/TopAstrologers.js",
        lineNumber: 387,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollButton");
__turbopack_context__.k.register(_c1, "LiveCard");
__turbopack_context__.k.register(_c2, "TopAstrologers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HowItWorks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const steps = [
    {
        n: "1",
        title: "Pick your astrologer",
        body: "Browse verified profiles, ratings, languages, and specialties—then tap to start a chat or voice call."
    },
    {
        n: "2",
        title: "Share kundli details",
        body: "Send date, time, and birthplace securely in-chat so predictions map to your houses, dasha, and transits."
    },
    {
        n: "3",
        title: "Get answers & remedies",
        body: "Receive clear guidance, timelines, and simple remedies—revisit history anytime in your account."
    }
];
function HowItWorks() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "c64ee1fdce6808dce68581c50948daf2233eee5a4998e534b25e747b72bf02e0") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c64ee1fdce6808dce68581c50948daf2233eee5a4998e534b25e747b72bf02e0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title mb-14 md:mb-16",
                children: "HOW Astro Pulse WORKS?"
            }, void 0, false, {
                fileName: "[project]/src/components/HowItWorks.js",
                lineNumber: 29,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/HowItWorks.js",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "how-it-works",
            className: "bg-accent/80 py-20 md:py-28",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-10 md:grid-cols-3 md:gap-8",
                        children: steps.map(_HowItWorksStepsMap)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HowItWorks.js",
                        lineNumber: 36,
                        columnNumber: 121
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HowItWorks.js",
                lineNumber: 36,
                columnNumber: 77
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/HowItWorks.js",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = HowItWorks;
function _HowItWorksStepsMap(s, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        delay: i * 0.08,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-border transition-shadow hover:shadow-md",
            whileHover: {
                y: -4
            },
            transition: {
                type: "spring",
                stiffness: 320,
                damping: 22
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-xl font-extrabold text-primary-contrast shadow-lg shadow-primary/30",
                    children: s.n
                }, void 0, false, {
                    fileName: "[project]/src/components/HowItWorks.js",
                    lineNumber: 50,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-bold uppercase tracking-wide text-foreground",
                    children: s.title
                }, void 0, false, {
                    fileName: "[project]/src/components/HowItWorks.js",
                    lineNumber: 50,
                    columnNumber: 226
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-muted leading-relaxed",
                    children: s.body
                }, void 0, false, {
                    fileName: "[project]/src/components/HowItWorks.js",
                    lineNumber: 50,
                    columnNumber: 314
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HowItWorks.js",
            lineNumber: 44,
            columnNumber: 49
        }, this)
    }, s.title, false, {
        fileName: "[project]/src/components/HowItWorks.js",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WhyChoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyChoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function IconChart() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-10 w-10 text-primary",
            viewBox: "0 0 48 48",
            fill: "none",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "24",
                    cy: "24",
                    r: "18",
                    stroke: "currentColor",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 16,
                    columnNumber: 101
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M24 8v6M24 34v6M8 24h6M34 24h6",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 16,
                    columnNumber: 172
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "24",
                    cy: "24",
                    r: "4",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 16,
                    columnNumber: 275
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WhyChoose.js",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = IconChart;
function IconShield() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-10 w-10 text-primary",
            viewBox: "0 0 48 48",
            fill: "none",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M24 6 38 12v12c0 10-6 16-14 18-8-2-14-8-14-18V12L24 6Z",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 33,
                    columnNumber: 101
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m18 24 5 5 10-11",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 33,
                    columnNumber: 229
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WhyChoose.js",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = IconShield;
function IconCalendar() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-10 w-10 text-primary",
            viewBox: "0 0 48 48",
            fill: "none",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "8",
                    y: "12",
                    width: "32",
                    height: "30",
                    rx: "3",
                    stroke: "currentColor",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 50,
                    columnNumber: 101
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 18h32M17 8v6M31 8v6",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 50,
                    columnNumber: 190
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "24",
                    cy: "28",
                    r: "2",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 50,
                    columnNumber: 285
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WhyChoose.js",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c2 = IconCalendar;
function IconPeople() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-10 w-10 text-primary",
            viewBox: "0 0 48 48",
            fill: "none",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "18",
                    cy: "16",
                    r: "5",
                    stroke: "currentColor",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 67,
                    columnNumber: 101
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 38c0-6 4-9 8-9s8 3 8 9",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 67,
                    columnNumber: 171
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "32",
                    cy: "18",
                    r: "4",
                    stroke: "currentColor",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 67,
                    columnNumber: 270
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M26 38c0-5 3-7 6-7s6 2 6 7",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 67,
                    columnNumber: 340
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WhyChoose.js",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c3 = IconPeople;
function IconStar() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-10 w-10 text-primary",
            viewBox: "0 0 48 48",
            fill: "none",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m24 6 4 12h12l-10 8 4 14-10-8-10 8 4-14-10-8h12L24 6Z",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/WhyChoose.js",
                lineNumber: 84,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/WhyChoose.js",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c4 = IconStar;
const features = [
    {
        title: "Chart-grade accuracy",
        desc: "Swiss ephemeris + traditional rules for forecasts you can trust.",
        Icon: IconChart
    },
    {
        title: "Privacy you control",
        desc: "Your birth data stays encrypted; share only what you want.",
        Icon: IconShield
    },
    {
        title: "Reschedule any session",
        desc: "Life moves—move your live readings without losing credits.",
        Icon: IconCalendar
    },
    {
        title: "Human + smart AI blend",
        desc: "Instant AI summaries plus optional astrologer deep-dives.",
        Icon: IconPeople
    },
    {
        title: "Clear, calm guidance",
        desc: "No fear tactics—just practical timing and mindful remedies.",
        Icon: IconStar
    }
];
function WhyChoose() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f065645ce64e1f32e5df28639a70f517ceef1217fc9d2412a3421e3792a3c03";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title mb-14 md:mb-16",
                children: "WHY CHOOSE Astro Pulse"
            }, void 0, false, {
                fileName: "[project]/src/components/WhyChoose.js",
                lineNumber: 122,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/WhyChoose.js",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-5",
            children: features.map(_WhyChooseFeaturesMap)
        }, void 0, false, {
            fileName: "[project]/src/components/WhyChoose.js",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "why-us",
            className: "bg-surface py-20 md:py-28",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4",
                children: [
                    t0,
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.15,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "mt-14 text-center text-xl font-extrabold text-foreground md:text-2xl",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            viewport: {
                                once: true
                            },
                            children: "Trusted by cosmic seekers everywhere"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WhyChoose.js",
                            lineNumber: 136,
                            columnNumber: 138
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/WhyChoose.js",
                        lineNumber: 136,
                        columnNumber: 117
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WhyChoose.js",
                lineNumber: 136,
                columnNumber: 69
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/WhyChoose.js",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c5 = WhyChoose;
function _WhyChooseFeaturesMap(f, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        delay: i * 0.06,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex h-full flex-col items-center rounded-3xl border border-border bg-surface p-6 text-center shadow-sm shadow-primary/10",
            whileHover: {
                y: -3
            },
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 24
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(f.Icon, {}, void 0, false, {
                        fileName: "[project]/src/components/WhyChoose.js",
                        lineNumber: 156,
                        columnNumber: 95
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 156,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[15px] font-bold leading-snug text-foreground",
                    children: f.title
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 156,
                    columnNumber: 111
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-muted leading-relaxed",
                    children: f.desc
                }, void 0, false, {
                    fileName: "[project]/src/components/WhyChoose.js",
                    lineNumber: 156,
                    columnNumber: 192
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WhyChoose.js",
            lineNumber: 150,
            columnNumber: 49
        }, this)
    }, f.title, false, {
        fileName: "[project]/src/components/WhyChoose.js",
        lineNumber: 150,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "IconChart");
__turbopack_context__.k.register(_c1, "IconShield");
__turbopack_context__.k.register(_c2, "IconCalendar");
__turbopack_context__.k.register(_c3, "IconPeople");
__turbopack_context__.k.register(_c4, "IconStar");
__turbopack_context__.k.register(_c5, "WhyChoose");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Testimonials.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-client] (ecmascript)");
"use client";
;
;
;
const testimonials = [
    {
        text: "I used to check three sites for transits. Astro Pulse pulls my chart, dasha, and daily luck windows into one calm feed—it's become my morning ritual.",
        name: "Ananya K.",
        location: "Bengaluru"
    },
    {
        text: "The compatibility report nailed our Moon-Mars friction without drama. We booked a live session and got remedies that actually fit our schedules.",
        name: "Rahul & Meera",
        location: "Mumbai"
    },
    {
        text: "As a founder, timing matters. Retrograde alerts + launch-day muhurat suggestions in the same app feels unfairly useful.",
        name: "Vikram S.",
        location: "Hyderabad"
    }
];
function TestimonialCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "7582a4c838084f80f1a201331391ce686d86a07395c9a2bdbc3893e10cb8214e") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7582a4c838084f80f1a201331391ce686d86a07395c9a2bdbc3893e10cb8214e";
    }
    const { t } = t0;
    let t1;
    if ($[1] !== t.text) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted leading-relaxed",
            children: [
                "“",
                t.text,
                "”"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Testimonials.js",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[1] = t.text;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 font-bold text-foreground",
            children: t.name
        }, void 0, false, {
            fileName: "[project]/src/components/Testimonials.js",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[3] = t.name;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t.location) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-muted",
            children: t.location
        }, void 0, false, {
            fileName: "[project]/src/components/Testimonials.js",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[5] = t.location;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[min(100vw-2rem,340px)] shrink-0 rounded-3xl border border-border bg-surface p-7 shadow-md shadow-primary/10 md:w-[360px]",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Testimonials.js",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_c = TestimonialCard;
function Testimonials() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "7582a4c838084f80f1a201331391ce686d86a07395c9a2bdbc3893e10cb8214e") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7582a4c838084f80f1a201331391ce686d86a07395c9a2bdbc3893e10cb8214e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            ...testimonials,
            ...testimonials
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const doubled = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title mb-12 md:mb-14",
                    children: "DON'T JUST TAKE OUR WORD FOR IT"
                }, void 0, false, {
                    fileName: "[project]/src/components/Testimonials.js",
                    lineNumber: 83,
                    columnNumber: 58
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Testimonials.js",
                lineNumber: 83,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Testimonials.js",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "overflow-hidden bg-accent/70 py-20 md:py-28",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "marquee-mask relative w-full md:-mx-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-max gap-6 pl-4 animate-marquee-56",
                        children: doubled.map(_TestimonialsDoubledMap)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Testimonials.js",
                        lineNumber: 90,
                        columnNumber: 134
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Testimonials.js",
                    lineNumber: 90,
                    columnNumber: 79
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Testimonials.js",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c1 = Testimonials;
function _TestimonialsDoubledMap(t, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
        t: t
    }, `${t.name}-${i}`, false, {
        fileName: "[project]/src/components/Testimonials.js",
        lineNumber: 98,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "TestimonialCard");
__turbopack_context__.k.register(_c1, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FAQs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const faqs = [
    {
        q: "What is Astro Pulse?",
        a: "Astro Pulse is your personal astrology hub—birth chart, dasha timelines, daily horoscopes, transits, and optional live astrologer sessions in one place."
    },
    {
        q: "How do I get my birth chart?",
        a: "Enter your birth date, exact time, and city. We compute your Lagna, Moon sign, nakshatra, and divisional charts using Swiss ephemeris-grade data."
    },
    {
        q: "Can I combine multiple readings in one subscription?",
        a: "Yes. Pick daily insights, love compatibility, career timing, or remedy packs—most plans bundle the readings you use most."
    },
    {
        q: "How do live sessions work?",
        a: "Choose an astrologer, book a slot, and join in-app video or audio. You can reschedule up until the policy window without losing your credit."
    },
    {
        q: "Is my birth data private?",
        a: "Your birth details are encrypted at rest. We never sell personal data, and you can delete your profile anytime from settings."
    },
    {
        q: "Do you support Vedic and Western styles?",
        a: "Yes—toggle sidereal tropical, explore divisional charts, or keep a simplified Western sun-moon-rising view if you prefer."
    }
];
function FAQs() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "04f13c28d95a57db540fbf519a09107f162946be023c377bdbc2d8098a2bf06c") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "04f13c28d95a57db540fbf519a09107f162946be023c377bdbc2d8098a2bf06c";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title mb-10 md:mb-12",
                children: "FAQs"
            }, void 0, false, {
                fileName: "[project]/src/components/FAQs.js",
                lineNumber: 37,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/FAQs.js",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== open) {
        t1 = faqs.map({
            "FAQs[faqs.map()]": (item, i)=>{
                const isOpen = open === i;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: i * 0.04,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "overflow-hidden rounded-2xl border border-border bg-surface shadow-sm shadow-primary/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "FAQs[faqs.map() > <button>.onClick]": ()=>setOpen(isOpen ? -1 : i)
                                }["FAQs[faqs.map() > <button>.onClick]"],
                                className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-foreground transition hover:bg-accent/80 md:text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.q
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FAQs.js",
                                        lineNumber: 49,
                                        columnNumber: 211
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-lg font-bold text-primary-contrast",
                                        animate: {
                                            rotate: isOpen ? 45 : 0
                                        },
                                        transition: {
                                            duration: 0.25
                                        },
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FAQs.js",
                                        lineNumber: 49,
                                        columnNumber: 232
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FAQs.js",
                                lineNumber: 47,
                                columnNumber: 158
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                initial: false,
                                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.3,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "border-t border-border px-5 pb-5 pt-3 text-muted leading-relaxed",
                                        children: item.a
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FAQs.js",
                                        lineNumber: 65,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FAQs.js",
                                    lineNumber: 53,
                                    columnNumber: 86
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/FAQs.js",
                                lineNumber: 53,
                                columnNumber: 42
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FAQs.js",
                        lineNumber: 47,
                        columnNumber: 54
                    }, this)
                }, item.q, false, {
                    fileName: "[project]/src/components/FAQs.js",
                    lineNumber: 47,
                    columnNumber: 16
                }, this);
            }
        }["FAQs[faqs.map()]"]);
        $[2] = open;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "faqs",
            className: "bg-white py-20 md:py-28",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-2xl px-4",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: t1
                    }, void 0, false, {
                        fileName: "[project]/src/components/FAQs.js",
                        lineNumber: 75,
                        columnNumber: 109
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FAQs.js",
                lineNumber: 75,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/FAQs.js",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_s(FAQs, "kwOYwiAlGcf16u2JaFl+OYF7OQ8=");
_c = FAQs;
var _c;
__turbopack_context__.k.register(_c, "FAQs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ExpertsAndStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpertsAndStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const storeItems = [
    {
        icon: "💎",
        title: "Gemstones",
        desc: "Certified, energised, originals only"
    },
    {
        icon: "🪔",
        title: "Yantras",
        desc: "Hand-etched in copper and brass"
    },
    {
        icon: "📿",
        title: "Rudraksha",
        desc: "Sourced from verified trees in Nepal"
    },
    {
        icon: "🪵",
        title: "Karungali",
        desc: "Sacred wood for prosperity and protection"
    }
];
function ExpertsAndStore() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "cef6612d9b2d2fec1c12827a107a878326c45eb2229890dbee305e7fe86229bd") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cef6612d9b2d2fec1c12827a107a878326c45eb2229890dbee305e7fe86229bd";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-bold uppercase tracking-[0.28em] text-muted",
            children: "Chapter 05 · The team"
        }, void 0, false, {
            fileName: "[project]/src/components/ExpertsAndStore.js",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mt-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-[2.35rem]",
            children: "Why Choose Our Astrology Experts?"
        }, void 0, false, {
            fileName: "[project]/src/components/ExpertsAndStore.js",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 space-y-4 text-sm leading-relaxed text-muted md:text-[15px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Our certified astrology experts blend the ancient wisdom of Vedic astrology with a modern understanding of life and emotions. Each astrologer on Astro Pulse is carefully selected to ensure they truly know astrology and speak with kindness. They keep learning through teamwork and regular training."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertsAndStore.js",
                            lineNumber: 44,
                            columnNumber: 108
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Through our remedies and puja services, you'll find spiritual items like gemstones, yantras, and puja tools recommended by your astrologer. These are selected to help you connect better with planetary energies, with clear step-by-step guidance on safe use."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertsAndStore.js",
                            lineNumber: 44,
                            columnNumber: 412
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Your satisfaction is our top priority. We offer consultations to match your style and budget—simple chats, detailed reports, or quick answers. Predictions are based on deep study and real experience, not fear or hype."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertsAndStore.js",
                            lineNumber: 44,
                            columnNumber: 675
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Start with a short consultation to see how it works before committing more. With honest pricing and a smooth app experience, beginning your spiritual journey on Astro Pulse has never been easier."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertsAndStore.js",
                            lineNumber: 44,
                            columnNumber: 899
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertsAndStore.js",
                    lineNumber: 44,
                    columnNumber: 26
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ExpertsAndStore.js",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-[11px] font-bold uppercase tracking-[0.22em] text-muted",
            children: "The Astro Pulse store"
        }, void 0, false, {
            fileName: "[project]/src/components/ExpertsAndStore.js",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 grid grid-cols-2 gap-3 sm:gap-4",
            children: storeItems.map(_ExpertsAndStoreStoreItemsMap)
        }, void 0, false, {
            fileName: "[project]/src/components/ExpertsAndStore.js",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/#astrologers",
            className: "cta-btn mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-base font-bold",
            children: [
                "Talk to astrologers",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/src/components/ExpertsAndStore.js",
                    lineNumber: 65,
                    columnNumber: 166
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ExpertsAndStore.js",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "experts",
            className: "border-t border-border bg-brand-muted/60 py-16 md:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid items-start gap-10 lg:grid-cols-2 lg:gap-14",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 0.08,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl border border-border bg-accent/80 p-6 shadow-sm md:p-8",
                                children: [
                                    t3,
                                    t4,
                                    t5,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-center text-xs text-muted",
                                        children: [
                                            "Browse remedies & book puja on",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/book-puja",
                                                className: "font-semibold text-primary hover:underline",
                                                children: "Book a Puja"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExpertsAndStore.js",
                                                lineNumber: 72,
                                                columnNumber: 417
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ExpertsAndStore.js",
                                        lineNumber: 72,
                                        columnNumber: 327
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExpertsAndStore.js",
                                lineNumber: 72,
                                columnNumber: 231
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertsAndStore.js",
                            lineNumber: 72,
                            columnNumber: 210
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertsAndStore.js",
                    lineNumber: 72,
                    columnNumber: 140
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ExpertsAndStore.js",
                lineNumber: 72,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ExpertsAndStore.js",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c = ExpertsAndStore;
function _ExpertsAndStoreStoreItemsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-border bg-surface px-4 py-5 text-center shadow-sm transition hover:border-primary/25",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-3xl",
                "aria-hidden": true,
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/src/components/ExpertsAndStore.js",
                lineNumber: 80,
                columnNumber: 155
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-sm font-bold text-foreground",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/src/components/ExpertsAndStore.js",
                lineNumber: 80,
                columnNumber: 219
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs leading-snug text-muted",
                children: item.desc
            }, void 0, false, {
                fileName: "[project]/src/components/ExpertsAndStore.js",
                lineNumber: 80,
                columnNumber: 289
            }, this)
        ]
    }, item.title, true, {
        fileName: "[project]/src/components/ExpertsAndStore.js",
        lineNumber: 80,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ExpertsAndStore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AppDownload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppDownload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const APP_STORE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_APP_STORE_URL || "#";
const PLAY_STORE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_PLAY_STORE_URL || "#";
function StoreBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "2b62418b5f3c3b56c0a6312a8bcff4015dbf91e5d7e01b3f2cb7f4dec5d2cbf5") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b62418b5f3c3b56c0a6312a8bcff4015dbf91e5d7e01b3f2cb7f4dec5d2cbf5";
    }
    const { href, label, children } = t0;
    const t1 = href === "#" ? undefined : "_blank";
    const t2 = href === "#" ? undefined : "noopener noreferrer";
    let t3;
    if ($[1] !== children || $[2] !== href || $[3] !== label || $[4] !== t1 || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            target: t1,
            rel: t2,
            "aria-label": label,
            className: "inline-flex items-center gap-2.5 rounded-xl bg-[#1a1a1a] px-4 py-2.5 text-white shadow-md transition hover:bg-black hover:shadow-lg",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = href;
        $[3] = label;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_c = StoreBadge;
function AppleIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2b62418b5f3c3b56c0a6312a8bcff4015dbf91e5d7e01b3f2cb7f4dec5d2cbf5") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b62418b5f3c3b56c0a6312a8bcff4015dbf91e5d7e01b3f2cb7f4dec5d2cbf5";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "h-7 w-7 shrink-0 fill-current",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
            }, void 0, false, {
                fileName: "[project]/src/components/AppDownload.js",
                lineNumber: 48,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = AppleIcon;
function PlayIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2b62418b5f3c3b56c0a6312a8bcff4015dbf91e5d7e01b3f2cb7f4dec5d2cbf5") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b62418b5f3c3b56c0a6312a8bcff4015dbf91e5d7e01b3f2cb7f4dec5d2cbf5";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "h-7 w-7 shrink-0",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#00D9FF",
                    d: "M3.6 2.4A1.2 1.2 0 0 0 2.4 3.6v16.8a1.2 1.2 0 0 0 1.2 1.2h.3l10.2-9.6-10.2-9.6h-.3z"
                }, void 0, false, {
                    fileName: "[project]/src/components/AppDownload.js",
                    lineNumber: 65,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFD500",
                    d: "M14.1 11.4 4.5 3.9v16.2l9.6-8.5z"
                }, void 0, false, {
                    fileName: "[project]/src/components/AppDownload.js",
                    lineNumber: 65,
                    columnNumber: 194
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FF3A44",
                    d: "M14.1 11.4 4.5 19.8l12.9-7.2-3.3-1.2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/AppDownload.js",
                    lineNumber: 65,
                    columnNumber: 254
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#00F076",
                    d: "M17.4 10.2 4.5 3.9l9.6 7.5 3.3-1.2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/AppDownload.js",
                    lineNumber: 65,
                    columnNumber: 319
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c2 = PlayIcon;
function AppDownload(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "2b62418b5f3c3b56c0a6312a8bcff4015dbf91e5d7e01b3f2cb7f4dec5d2cbf5") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b62418b5f3c3b56c0a6312a8bcff4015dbf91e5d7e01b3f2cb7f4dec5d2cbf5";
    }
    const { showViewAllLink: t1 } = t0;
    const showViewAllLink = t1 === undefined ? false : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-bold uppercase tracking-[0.28em] text-muted",
            children: "Astro Pulse for iOS & Android"
        }, void 0, false, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    let t4;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]",
            children: [
                "India's trusted astrology app.",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/AppDownload.js",
                    lineNumber: 94,
                    columnNumber: 160
                }, this),
                "Always with you."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg",
            children: "Chat with astrologers anytime. Get daily horoscopes, free kundli, compatibility reports & muhurat alerts \u2014 all in one app."
        }, void 0, false, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[2] = t3;
        $[3] = t4;
    } else {
        t3 = $[2];
        t4 = $[3];
    }
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppleIcon, {}, void 0, false, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreBadge, {
            href: APP_STORE_URL,
            label: "Download on the App Store",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-left leading-tight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-[10px] opacity-80",
                            children: "Download on the"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppDownload.js",
                            lineNumber: 111,
                            columnNumber: 123
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-sm font-semibold",
                            children: "App Store"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppDownload.js",
                            lineNumber: 111,
                            columnNumber: 192
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppDownload.js",
                    lineNumber: 111,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayIcon, {}, void 0, false, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 flex flex-wrap gap-3",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreBadge, {
                    href: PLAY_STORE_URL,
                    label: "Get it on Google Play",
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-left leading-tight",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[10px] opacity-80",
                                    children: "GET IT ON"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppDownload.js",
                                    lineNumber: 125,
                                    columnNumber: 167
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-sm font-semibold",
                                    children: "Google Play"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppDownload.js",
                                    lineNumber: 125,
                                    columnNumber: 230
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppDownload.js",
                            lineNumber: 125,
                            columnNumber: 125
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppDownload.js",
                    lineNumber: 125,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[7] = t8;
    } else {
        t8 = $[7];
    }
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 flex flex-wrap gap-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl font-extrabold text-foreground",
                            children: [
                                "4.8 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary",
                                    children: "★"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppDownload.js",
                                    lineNumber: 132,
                                    columnNumber: 119
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppDownload.js",
                            lineNumber: 132,
                            columnNumber: 60
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-muted",
                            children: "Play Store · 500+ reviews"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppDownload.js",
                            lineNumber: 132,
                            columnNumber: 162
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppDownload.js",
                    lineNumber: 132,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl font-extrabold text-foreground",
                            children: "1K+"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppDownload.js",
                            lineNumber: 132,
                            columnNumber: 241
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-muted",
                            children: "customers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppDownload.js",
                            lineNumber: 132,
                            columnNumber: 303
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppDownload.js",
                    lineNumber: 132,
                    columnNumber: 236
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    let t10;
    if ($[9] !== showViewAllLink) {
        t10 = showViewAllLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/download-app",
            className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-hover",
            children: [
                "Learn more about the app",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/src/components/AppDownload.js",
                    lineNumber: 139,
                    columnNumber: 200
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 139,
            columnNumber: 30
        }, this);
        $[9] = showViewAllLink;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                t2,
                t3,
                t4,
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -inset-4 rounded-[3rem] bg-primary/10 blur-2xl",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            delay: 0.12,
            className: "flex justify-center lg:justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-[280px] md:max-w-[320px]",
                children: [
                    t12,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative -rotate-6 rounded-[2.75rem] border-[10px] border-[#1a1a1a] bg-[#1a1a1a] p-1 shadow-2xl shadow-black/25 transition hover:-rotate-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-[9/19] overflow-hidden rounded-[2.25rem] bg-hero-deep",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/showcase/img1.jpg",
                                        alt: "Astro Pulse app \u2014 talk to verified astrologers",
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "(max-width: 768px) 280px, 320px"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppDownload.js",
                                        lineNumber: 162,
                                        columnNumber: 391
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppDownload.js",
                                        lineNumber: 162,
                                        columnNumber: 562
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "absolute left-4 right-4 top-5 text-center text-xs font-bold uppercase tracking-wide text-white drop-shadow-md",
                                        children: "India's trusted Astrology App"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppDownload.js",
                                        lineNumber: 162,
                                        columnNumber: 676
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/40 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppDownload.js",
                                        lineNumber: 162,
                                        columnNumber: 834
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AppDownload.js",
                                lineNumber: 162,
                                columnNumber: 304
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-[#1a1a1a]",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppDownload.js",
                                lineNumber: 162,
                                columnNumber: 945
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AppDownload.js",
                        lineNumber: 162,
                        columnNumber: 148
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AppDownload.js",
                lineNumber: 162,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] !== t11) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "download-app",
            className: "border-t border-border bg-background py-16 md:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden rounded-3xl bg-brand-muted shadow-[0_20px_60px_rgb(0_0_0/0.06)] ring-1 ring-border/60",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-center gap-10 p-8 md:p-12 lg:grid-cols-2 lg:gap-6 lg:p-14",
                        children: [
                            t11,
                            t13
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AppDownload.js",
                        lineNumber: 169,
                        columnNumber: 261
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AppDownload.js",
                    lineNumber: 169,
                    columnNumber: 142
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AppDownload.js",
                lineNumber: 169,
                columnNumber: 102
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AppDownload.js",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[15] = t11;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    return t14;
}
_c3 = AppDownload;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "StoreBadge");
__turbopack_context__.k.register(_c1, "AppleIcon");
__turbopack_context__.k.register(_c2, "PlayIcon");
__turbopack_context__.k.register(_c3, "AppDownload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/pressMedia.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "galleryPhotos",
    ()=>galleryPhotos,
    "pressItems",
    ()=>pressItems
]);
const pressItems = [
    {
        id: "aifas-award",
        headline: "Astro Pulse recognised at All India Federation of Astrologers' Societies award ceremony",
        source: "AIFAS",
        date: "17 Dec 2024",
        image: "/showcase/img (5).jpg"
    },
    {
        id: "lpac-excellence-2025",
        headline: "Honoured at Dynamic Excellence Awards 2025 — celebrating visionaries in astrology",
        source: "LPAC",
        date: "19 Apr 2025",
        image: "/showcase/img1.jpg"
    },
    {
        id: "lpac-ceremony",
        headline: "Cultural showcase at Legendary Peace Awards Council ceremony in New Delhi",
        source: "LPAC",
        date: "19 Apr 2025",
        image: "/showcase/img (2).jpg"
    },
    {
        id: "excellence-awards-stage",
        headline: "Excellence Awards 2025 — felicitating achievers in spiritual guidance and service",
        source: "LPAC",
        date: "19 Apr 2025",
        image: "/showcase/img (8).jpg"
    },
    {
        id: "lpac-recognition",
        headline: "Astro Pulse team at Legendary Peace Awards Council — building trust in digital astrology",
        source: "LPAC",
        date: "19 Apr 2025",
        image: "/showcase/img (7).jpg"
    },
    {
        id: "community-felicitation",
        headline: "Community outreach — felicitating partners and supporters at a public gathering",
        source: "ASTRO PULSE",
        date: "08 Mar 2025",
        image: "/showcase/img (3).jpg"
    },
    {
        id: "cultural-partnership",
        headline: "Supporting cultural and literary initiatives alongside national publishing partners",
        source: "PRABHAT PRAKASHAN",
        date: "26 Jan 2025",
        image: "/showcase/img (4).jpg"
    },
    {
        id: "lpac-stage-performance",
        headline: "Stage performance at Dynamic Excellence Awards — inspiring the future of wellness tech",
        source: "LPAC",
        date: "19 Apr 2025",
        image: "/showcase/img (6).jpg"
    }
];
const galleryPhotos = [
    {
        src: "/showcase/img (5).jpg",
        alt: "AIFAS award ceremony"
    },
    {
        src: "/showcase/img1.jpg",
        alt: "Dynamic Excellence Awards at Constitution Club"
    },
    {
        src: "/showcase/img (2).jpg",
        alt: "LPAC award ceremony stage performance"
    },
    {
        src: "/showcase/img (8).jpg",
        alt: "Excellence Awards 2025 felicitation"
    },
    {
        src: "/showcase/img (7).jpg",
        alt: "Legendary Peace Awards Council event"
    },
    {
        src: "/showcase/img (3).jpg",
        alt: "Community felicitation gathering"
    },
    {
        src: "/showcase/img (4).jpg",
        alt: "Literary and cultural event"
    },
    {
        src: "/showcase/img (6).jpg",
        alt: "Dynamic Excellence Awards cultural showcase"
    },
    {
        src: "/showcase/img2.jpg",
        alt: "Astro Pulse event highlight"
    },
    {
        src: "/showcase/showcase (1).jpeg",
        alt: "Astro Pulse showcase"
    },
    {
        src: "/showcase/showcase (2).jpeg",
        alt: "Astro Pulse showcase"
    },
    {
        src: "/showcase/showcase (3).jpeg",
        alt: "Astro Pulse showcase"
    },
    {
        src: "/showcase/showcase (4).jpeg",
        alt: "Astro Pulse showcase"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PressMedia.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PressMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$pressMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/pressMedia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function NewsCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "01b521a8cd72216cae0067fbf994e534b39c7140aaad6f3c002a21f610c2dd87") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "01b521a8cd72216cae0067fbf994e534b39c7140aaad6f3c002a21f610c2dd87";
    }
    const { item, compact: t1 } = t0;
    const compact = t1 === undefined ? true : t1;
    const t2 = `flex h-full snap-start flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:border-primary/25 hover:shadow-md ${compact ? "w-[min(100%,300px)] shrink-0 sm:w-[300px]" : "w-full"}`;
    const t3 = compact ? "300px" : "(max-width: 768px) 100vw, 33vw";
    let t4;
    if ($[1] !== item.headline || $[2] !== item.image || $[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-[4/3] shrink-0 overflow-hidden bg-brand-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: item.image,
                alt: item.headline,
                fill: true,
                className: "object-cover",
                sizes: t3
            }, void 0, false, {
                fileName: "[project]/src/components/PressMedia.js",
                lineNumber: 26,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = item.headline;
        $[2] = item.image;
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = `line-clamp-3 font-bold leading-snug text-foreground ${compact ? "min-h-[4.5rem] text-sm" : "min-h-[5.25rem] text-base"}`;
    let t6;
    if ($[5] !== item.headline || $[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t5,
            children: item.headline
        }, void 0, false, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[5] = item.headline;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== item.source) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: item.source
        }, void 0, false, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[8] = item.source;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== item.date) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "shrink-0 text-foreground/70",
            children: item.date
        }, void 0, false, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[10] = item.date;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t7 || $[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-auto flex items-center justify-between gap-3 pt-4 text-[11px] font-semibold uppercase tracking-wide text-muted",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t6 || $[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[7.5rem] flex-1 flex-col p-4 sm:min-h-[8rem]",
            children: [
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 71,
            columnNumber: 11
        }, this);
        $[15] = t6;
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t2 || $[20] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: t2,
            children: [
                t4,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 80,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t2;
        $[20] = t4;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    return t11;
}
_c = NewsCard;
function ScrollButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "01b521a8cd72216cae0067fbf994e534b39c7140aaad6f3c002a21f610c2dd87") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "01b521a8cd72216cae0067fbf994e534b39c7140aaad6f3c002a21f610c2dd87";
    }
    const { direction, onClick } = t0;
    const label = direction === "left" ? "Scroll left" : "Scroll right";
    const t1 = direction === "left" ? "\u2039" : "\u203A";
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": true,
            className: "text-lg leading-none",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== label || $[4] !== onClick || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClick,
            "aria-label": label,
            className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[3] = label;
        $[4] = onClick;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_c1 = ScrollButton;
function PressMedia(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "01b521a8cd72216cae0067fbf994e534b39c7140aaad6f3c002a21f610c2dd87") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "01b521a8cd72216cae0067fbf994e534b39c7140aaad6f3c002a21f610c2dd87";
    }
    const { showViewAllLink: t1, limit } = t0;
    const showViewAllLink = t1 === undefined ? false : t1;
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== limit) {
        const items = limit ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$pressMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pressItems"].slice(0, limit) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$pressMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pressItems"];
        let t9;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = ({
                "PressMedia[scroll]": (direction)=>{
                    const track = trackRef.current;
                    if (!track) {
                        return;
                    }
                    const amount = direction === "left" ? -320 : 320;
                    track.scrollBy({
                        left: amount,
                        behavior: "smooth"
                    });
                }
            })["PressMedia[scroll]"];
            $[9] = t9;
        } else {
            t9 = $[9];
        }
        const scroll = t9;
        t7 = "press-media";
        t8 = "border-t border-border bg-gradient-to-b from-brand-muted/70 to-background py-16 md:py-24";
        t5 = "mx-auto max-w-6xl px-4";
        let t10;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-[0.28em] text-muted",
                        children: "Press & media"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PressMedia.js",
                        lineNumber: 172,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl",
                        children: "Astro Pulse in the news"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PressMedia.js",
                        lineNumber: 172,
                        columnNumber: 111
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PressMedia.js",
                lineNumber: 172,
                columnNumber: 13
            }, this);
            $[10] = t10;
        } else {
            t10 = $[10];
        }
        let t11;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollButton, {
                direction: "left",
                onClick: {
                    "PressMedia[<ScrollButton>.onClick]": ()=>scroll("left")
                }["PressMedia[<ScrollButton>.onClick]"]
            }, void 0, false, {
                fileName: "[project]/src/components/PressMedia.js",
                lineNumber: 179,
                columnNumber: 13
            }, this);
            $[11] = t11;
        } else {
            t11 = $[11];
        }
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-end justify-between gap-4",
                    children: [
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                t11,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollButton, {
                                    direction: "right",
                                    onClick: {
                                        "PressMedia[<ScrollButton>.onClick]": ()=>scroll("right")
                                    }["PressMedia[<ScrollButton>.onClick]"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PressMedia.js",
                                    lineNumber: 187,
                                    columnNumber: 135
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PressMedia.js",
                            lineNumber: 187,
                            columnNumber: 89
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PressMedia.js",
                    lineNumber: 187,
                    columnNumber: 20
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PressMedia.js",
                lineNumber: 187,
                columnNumber: 12
            }, this);
            $[12] = t6;
        } else {
            t6 = $[12];
        }
        t2 = trackRef;
        t3 = "mt-8 flex items-stretch gap-4 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory";
        t4 = items.map(_PressMediaItemsMap);
        $[1] = limit;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
        $[8] = t8;
    } else {
        t2 = $[2];
        t3 = $[3];
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
        t7 = $[7];
        t8 = $[8];
    }
    let t9;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: t2,
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 216,
            columnNumber: 10
        }, this);
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== showViewAllLink) {
        t10 = showViewAllLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/press-media",
                className: "inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-hover",
                children: [
                    "View all press coverage",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PressMedia.js",
                        lineNumber: 226,
                        columnNumber: 227
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PressMedia.js",
                lineNumber: 226,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 226,
            columnNumber: 30
        }, this);
        $[17] = showViewAllLink;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t5 || $[21] !== t6 || $[22] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t5;
        $[21] = t6;
        $[22] = t9;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11 || $[25] !== t7 || $[26] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t7,
            className: t8,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t7;
        $[26] = t8;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    return t12;
}
_s(PressMedia, "MRPoGswyMQM28Ca9bWnGm0R+Wxw=");
_c2 = PressMedia;
function _PressMediaItemsMap(item, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        delay: i * 0.04,
        className: "flex shrink-0 self-stretch",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsCard, {
            item: item
        }, void 0, false, {
            fileName: "[project]/src/components/PressMedia.js",
            lineNumber: 256,
            columnNumber: 88
        }, this)
    }, item.id, false, {
        fileName: "[project]/src/components/PressMedia.js",
        lineNumber: 256,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NewsCard");
__turbopack_context__.k.register(_c1, "ScrollButton");
__turbopack_context__.k.register(_c2, "PressMedia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/blogs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "formatViews",
    ()=>formatViews,
    "getBlogBySlug",
    ()=>getBlogBySlug
]);
const blogPosts = [
    {
        slug: "ai-trusted-astrology",
        title: "How Astro Pulse Is Using AI to Become a Smarter, More Trusted Astrology Platform",
        excerpt: "From kundli parsing to smarter astrologer matching — how technology is raising the bar for online consultations.",
        image: "/blogs/blog-ai-trusted-astrology.png",
        views: 83498,
        date: "12 May 2025",
        category: "Technology",
        author: "Astro Pulse Editorial",
        body: [
            "Online astrology has grown fast — but trust still matters more than trends. At Astro Pulse, we use AI to support astrologers, not replace them.",
            "Our systems help parse birth details faster, flag common chart patterns, and route users to specialists who match their question — Vedic, tarot, numerology, or relationship guidance.",
            "Every prediction still comes from a verified human expert. AI handles the busywork so consultations stay personal, accurate, and affordable.",
            "The result: shorter wait times, clearer reports, and a platform millions rely on for daily horoscopes, kundli matching, and live chat."
        ]
    },
    {
        slug: "mars-in-scorpio",
        title: "Mars in Scorpio: Why Does Winning Seem to Be All You Can Think About?",
        excerpt: "Mars brings intensity when it enters Scorpio — ambition, focus, and a hunger to prove yourself. Here's what to watch for.",
        image: "/blogs/blog-mars-in-scorpio.png",
        views: 15840,
        date: "28 Apr 2025",
        category: "Planetary transit",
        author: "Astro Pulse Editorial",
        body: [
            "When Mars transits Scorpio, energy runs deep. You may feel driven to compete, transform, or finally finish something you've postponed for months.",
            "This transit favours strategic action — not impulsive fights. Channel the fire into fitness, business goals, or research rather than unnecessary conflict.",
            "Relationships can feel all-or-nothing. Honest conversations work better than silent tests. Jealousy and control themes often surface for healing.",
            "Remedy tip: Tuesday prayers to Hanuman, red coral only after chart review, and grounding breathwork when anger spikes."
        ]
    },
    {
        slug: "jupiter-in-cancer-marriage",
        title: "Suddenly Everyone's Talking About Marriage? Jupiter in Cancer Might Be Why",
        excerpt: "Jupiter in Cancer expands home, family, and emotional security — often triggering wedding conversations and new beginnings.",
        image: "/blogs/blog-jupiter-in-cancer.png",
        views: 11458,
        date: "15 Apr 2025",
        category: "Planetary transit",
        author: "Astro Pulse Editorial",
        body: [
            "Jupiter in Cancer blesses nourishment — literal and emotional. Many people feel drawn to commit, buy a home, or reconcile with family during this transit.",
            "If marriage is on your mind, check kundli compatibility beyond sun signs. Nadi, bhakoot, and mangal dosha matter for long-term harmony.",
            "Not ready for marriage? Jupiter still supports fertility plans, caring for elders, and building a savings cushion.",
            "Book a matchmaking session on Astro Pulse to get a detailed milan report before you say yes."
        ]
    },
    {
        slug: "ayurveda-astrology-remedies",
        title: "Ancient Remedies Backed by Astro Pulse — Gemstones, Mantras & Daily Rituals",
        excerpt: "Vedic remedies work best when aligned to your chart. A practical guide to gemstones, fasting days, and lifestyle shifts.",
        image: "/blogs/blog-ayurveda-remedies.png",
        views: 77598,
        date: "02 Apr 2025",
        category: "Remedies",
        author: "Astro Pulse Editorial",
        body: [
            "Remedies are not one-size-fits-all. A stone that helps one chart can aggravate another — always consult an astrologer before wearing blue sapphire or coral.",
            "Simple daily habits often outperform expensive rituals: lighting a diya on your ruling planet's day, donating food on Saturdays, or chanting your Ishta devata mantra.",
            "Astro Pulse astrologers recommend remedies after reading your lagna, dasha, and transits — not from generic lists online.",
            "Explore certified gemstones and yantras through our store, with guidance on activation and safe use."
        ]
    },
    {
        slug: "mercury-retrograde-survival",
        title: "Mercury Retrograde Survival Guide: Communication, Travel & Contracts",
        excerpt: "Misunderstandings spike during Mercury retrograde — here's how to stay calm and avoid costly mistakes.",
        image: "/blogs/blog-mercury-retrograde.png",
        views: 42120,
        date: "20 Mar 2025",
        category: "Guides",
        author: "Astro Pulse Editorial",
        body: [
            "Mercury retrograde is famous for email glitches, delayed flights, and exes reappearing. It's a review period, not a curse.",
            "Back up devices, double-check addresses, and avoid signing major contracts if you can wait. If you must sign, read every clause twice.",
            "Old projects resurface for a reason — finish them or release them consciously.",
            "Talk to an astrologer on Astro Pulse to see how this retrograde hits your personal chart, not just your sun sign."
        ]
    },
    {
        slug: "choosing-right-astrologer",
        title: "5 Signs You've Found the Right Astrologer on Astro Pulse",
        excerpt: "Verified badges are just the start — here's how to pick an expert who truly fits your question and communication style.",
        image: "/blogs/blog-choosing-astrologer.png",
        views: 29340,
        date: "08 Mar 2025",
        category: "Guides",
        author: "Astro Pulse Editorial",
        body: [
            "Look for relevant specialisation — marriage, career, medical astrology, and tarot require different skill sets.",
            "Read ratings and recent reviews, not just star averages. Consistency matters more than one viral testimonial.",
            "A good astrologer asks clarifying questions about birth time and listens before predicting.",
            "Start with a short chat session. Astro Pulse lets you try before committing to longer calls or detailed reports."
        ]
    },
    {
        slug: "saturn-return-lessons",
        title: "Your Saturn Return: The Cosmic Audit Nobody Warned You About",
        excerpt: "Around age 29–30, Saturn returns to its birth position. Expect reality checks — and lasting growth if you do the work.",
        image: "/blogs/blog-saturn-return.png",
        views: 18765,
        date: "14 Feb 2025",
        category: "Life stages",
        author: "Astro Pulse Editorial",
        body: [
            "Saturn return strips away what isn't built on solid ground — jobs, relationships, and identities included.",
            "Painful as it feels, this transit rewards discipline. Budgets, boundaries, and skill-building pay off for the next three decades.",
            "Track which house Saturn rules in your chart — that life area gets the hardest lessons and the biggest rewards.",
            "Our astrologers offer Saturn return readings with remedial timelines tailored to your dasha."
        ]
    },
    {
        slug: "daily-horoscope-accuracy",
        title: "Why Your Daily Horoscope Feels Wrong — And How to Read It Right",
        excerpt: "Sun-sign horoscopes are a starting point. Moon sign, lagna, and current dasha change the story completely.",
        image: "/blogs/blog-daily-horoscope.png",
        views: 65210,
        date: "25 Jan 2025",
        category: "Horoscope",
        author: "Astro Pulse Editorial",
        body: [
            "Generic horoscopes target 1/12th of the population. Your moon sign reflects emotions; your ascendant shapes daily events.",
            "Transits hit different houses for each chart — a lucky Jupiter day for Aries sun may stress a Libra lagna native.",
            "Use the Astro Pulse app for personalised rashifal based on your full birth details, not just birthday.",
            "When something big is at stake — marriage, surgery, investments — skip the newspaper column and book a live consultation."
        ]
    }
];
function getBlogBySlug(slug) {
    return blogPosts.find((post)=>post.slug === slug) ?? null;
}
function formatViews(count) {
    return count.toLocaleString("en-IN");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BlogJournal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogCard",
    ()=>BlogCard,
    "default",
    ()=>BlogJournal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$blogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/blogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function BlogCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "0b7196d3d0fe5af3a4e9ef2be4fb9ecf426cec587853a227b9692a114966f547") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0b7196d3d0fe5af3a4e9ef2be4fb9ecf426cec587853a227b9692a114966f547";
    }
    const { post, compact: t1 } = t0;
    const compact = t1 === undefined ? true : t1;
    const t2 = `/blogs/${post.slug}`;
    compact ? "w-full" : "w-full";
    const t3 = compact ? "(max-width: 640px) 85vw, 25vw" : "(max-width: 768px) 100vw, 33vw";
    let t4;
    if ($[1] !== post.image || $[2] !== post.title || $[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-[16/10] shrink-0 overflow-hidden bg-brand-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: post.image,
                alt: post.title,
                fill: true,
                className: "object-cover transition duration-300 group-hover:scale-105",
                sizes: t3
            }, void 0, false, {
                fileName: "[project]/src/components/BlogJournal.js",
                lineNumber: 26,
                columnNumber: 91
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/BlogJournal.js",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = post.image;
        $[2] = post.title;
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = `line-clamp-3 font-bold leading-snug text-foreground transition group-hover:text-primary ${compact ? "min-h-[4.5rem] text-sm md:text-[15px]" : "min-h-[5.25rem] text-base"}`;
    let t6;
    if ($[5] !== post.title || $[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: t5,
            children: post.title
        }, void 0, false, {
            fileName: "[project]/src/components/BlogJournal.js",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[5] = post.title;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== post.views) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$blogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatViews"])(post.views);
        $[8] = post.views;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-auto pt-4 text-xs text-muted",
            children: [
                t7,
                " views"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BlogJournal.js",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t6 || $[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[8rem] flex-1 flex-col p-4 md:p-5",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BlogJournal.js",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t2 || $[16] !== t4 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t2,
            className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:border-primary/25 hover:shadow-md w-full",
            children: [
                t4,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BlogJournal.js",
            lineNumber: 71,
            columnNumber: 11
        }, this);
        $[15] = t2;
        $[16] = t4;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    return t10;
}
_c = BlogCard;
function BlogJournal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "0b7196d3d0fe5af3a4e9ef2be4fb9ecf426cec587853a227b9692a114966f547") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0b7196d3d0fe5af3a4e9ef2be4fb9ecf426cec587853a227b9692a114966f547";
    }
    const { limit: t1 } = t0;
    const limit = t1 === undefined ? 4 : t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] !== limit) {
        const posts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$blogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts"].slice(0, limit);
        t6 = "journal";
        t7 = "border-t border-border bg-gradient-to-b from-brand-muted/80 via-brand-muted/40 to-background py-16 md:py-24";
        t4 = "mx-auto max-w-6xl px-4";
        let t8;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-[0.28em] text-muted",
                        children: "From the journal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BlogJournal.js",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl",
                        children: "Read between the stars."
                    }, void 0, false, {
                        fileName: "[project]/src/components/BlogJournal.js",
                        lineNumber: 106,
                        columnNumber: 109
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BlogJournal.js",
                lineNumber: 106,
                columnNumber: 12
            }, this);
            $[8] = t8;
        } else {
            t8 = $[8];
        }
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-end justify-between gap-4",
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/blogs",
                            className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary",
                            children: [
                                "All blogs",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BlogJournal.js",
                                    lineNumber: 112,
                                    columnNumber: 319
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BlogJournal.js",
                            lineNumber: 112,
                            columnNumber: 88
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BlogJournal.js",
                    lineNumber: 112,
                    columnNumber: 20
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BlogJournal.js",
                lineNumber: 112,
                columnNumber: 12
            }, this);
            $[9] = t5;
        } else {
            t5 = $[9];
        }
        t2 = "mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5";
        t3 = posts.map(_BlogJournalPostsMap);
        $[1] = limit;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
    } else {
        t2 = $[2];
        t3 = $[3];
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
        t7 = $[7];
    }
    let t8;
    if ($[10] !== t2 || $[11] !== t3) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/BlogJournal.js",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t3;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t4 || $[14] !== t5 || $[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BlogJournal.js",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t6 || $[18] !== t7 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t6,
            className: t7,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/BlogJournal.js",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[17] = t6;
        $[18] = t7;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    return t10;
}
_c1 = BlogJournal;
function _BlogJournalPostsMap(post, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        delay: i * 0.05,
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogCard, {
            post: post
        }, void 0, false, {
            fileName: "[project]/src/components/BlogJournal.js",
            lineNumber: 166,
            columnNumber: 70
        }, this)
    }, post.slug, false, {
        fileName: "[project]/src/components/BlogJournal.js",
        lineNumber: 166,
        columnNumber: 10
    }, this);
}
;
var _c, _c1;
__turbopack_context__.k.register(_c, "BlogCard");
__turbopack_context__.k.register(_c1, "BlogJournal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_480b5da4._.js.map