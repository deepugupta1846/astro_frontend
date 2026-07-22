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
]);

//# sourceMappingURL=src_a0244468._.js.map