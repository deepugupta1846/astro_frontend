module.exports = [
"[project]/src/app/admin/remedies/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminRemediesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/adminApi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-react/dist/index.js [app-ssr] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module '@ckeditor/ckeditor5-build-classic'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
const emptyForm = {
    title: "",
    slug: "",
    category: "",
    description: "",
    tags: "",
    priority: "0",
    isActive: true
};
function toTagsInput(tags) {
    if (!Array.isArray(tags) || tags.length === 0) return "";
    return tags.join(", ");
}
function parseTags(raw) {
    return String(raw || "").split(",").map((t)=>t.trim()).filter(Boolean);
}
function appendRemedyFormFields(formData, norm) {
    formData.append("title", norm.title);
    formData.append("description", norm.description);
    if (norm.slug) formData.append("slug", norm.slug);
    if (norm.category) formData.append("category", norm.category);
    formData.append("tags", JSON.stringify(norm.tags));
    formData.append("priority", String(norm.priority));
    formData.append("isActive", String(norm.isActive));
}
function AdminRemediesPage() {
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createForm, setCreateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyForm);
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyForm);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createImageFile, setCreateImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [createImagePreview, setCreateImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editImageFile, setEditImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editImagePreview, setEditImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const editImageBaselineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const total = rows.length;
    const activeCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>rows.filter((r)=>r.isActive).length, [
        rows
    ]);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setErr("");
        setLoading(true);
        try {
            const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminFetch"])("/api/v1/admin/remedies");
            setRows(json.data || []);
        } catch (e) {
            setErr(e.message);
        } finally{
            setLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
    }, [
        load
    ]);
    function normalizeForm(form) {
        return {
            title: form.title.trim(),
            slug: form.slug.trim() || undefined,
            category: form.category.trim() || null,
            description: form.description.trim(),
            tags: parseTags(form.tags),
            priority: form.priority === "" ? 0 : Number(form.priority),
            isActive: Boolean(form.isActive)
        };
    }
    function revokePreview(url) {
        if (url && String(url).startsWith("blob:")) URL.revokeObjectURL(url);
    }
    async function submitCreate(e) {
        e.preventDefault();
        setErr("");
        setCreating(true);
        try {
            const norm = normalizeForm(createForm);
            if (!norm.description) {
                throw new Error("Description is required");
            }
            const fd = new FormData();
            appendRemedyFormFields(fd, norm);
            if (createImageFile) fd.append("image", createImageFile);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminFetch"])("/api/v1/admin/remedies", {
                method: "POST",
                body: fd
            });
            revokePreview(createImagePreview);
            setCreateImageFile(null);
            setCreateImagePreview("");
            setCreateForm(emptyForm);
            setShowCreate(false);
            await load();
        } catch (e) {
            setErr(e.message);
        } finally{
            setCreating(false);
        }
    }
    function openEdit(row) {
        revokePreview(editImagePreview);
        setEditImageFile(null);
        editImageBaselineRef.current = row.imageUrl || "";
        setEditImagePreview(row.imageUrl || "");
        setEditId(row.id);
        setEditForm({
            title: row.title ?? "",
            slug: row.slug ?? "",
            category: row.category ?? "",
            description: row.description ?? "",
            tags: toTagsInput(row.tags),
            priority: row.priority != null ? String(row.priority) : "0",
            isActive: Boolean(row.isActive)
        });
    }
    function closeEdit() {
        revokePreview(editImagePreview);
        setEditImageFile(null);
        setEditImagePreview("");
        setEditId(null);
        setEditForm(emptyForm);
    }
    async function saveEdit(e) {
        e.preventDefault();
        if (!editId) return;
        setSaving(true);
        setErr("");
        try {
            const norm = normalizeForm(editForm);
            if (!norm.description) {
                throw new Error("Description is required");
            }
            const fd = new FormData();
            appendRemedyFormFields(fd, norm);
            if (editImageFile) fd.append("image", editImageFile);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminFetch"])(`/api/v1/admin/remedies/${editId}`, {
                method: "PUT",
                body: fd
            });
            closeEdit();
            await load();
        } catch (e) {
            setErr(e.message);
        } finally{
            setSaving(false);
        }
    }
    async function removeRemedy(id) {
        if (!window.confirm("Delete this remedy?")) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$adminApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminFetch"])(`/api/v1/admin/remedies/${id}`, {
                method: "DELETE"
            });
            await load();
        } catch (e) {
            setErr(e.message);
        }
    }
    function onCreateImageChange(e) {
        const file = e.target.files?.[0];
        revokePreview(createImagePreview);
        if (!file) {
            setCreateImageFile(null);
            setCreateImagePreview("");
            e.target.value = "";
            return;
        }
        setCreateImageFile(file);
        setCreateImagePreview(URL.createObjectURL(file));
        e.target.value = "";
    }
    function onEditImageChange(e) {
        const file = e.target.files?.[0];
        revokePreview(editImagePreview);
        if (!file) {
            setEditImageFile(null);
            setEditImagePreview(editImageBaselineRef.current);
            e.target.value = "";
            return;
        }
        setEditImageFile(file);
        setEditImagePreview(URL.createObjectURL(file));
        e.target.value = "";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-6xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-foreground",
                                children: "Remedies"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted",
                                children: "Manage remedy content shown across app experiences."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/remedies/page.js",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowCreate((v)=>!v),
                                className: "rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-accent",
                                children: showCreate ? "Close form" : "Add remedy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>load(),
                                className: "rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-accent",
                                children: "Refresh"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/remedies/page.js",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/remedies/page.js",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-3 text-xs text-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full border border-border bg-surface px-2.5 py-1",
                        children: [
                            "Total: ",
                            total
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/remedies/page.js",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full border border-border bg-surface px-2.5 py-1",
                        children: [
                            "Active: ",
                            activeCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/remedies/page.js",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/remedies/page.js",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800",
                role: "alert",
                children: err
            }, void 0, false, {
                fileName: "[project]/src/app/admin/remedies/page.js",
                lineNumber: 252,
                columnNumber: 9
            }, this),
            showCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: submitCreate,
                className: "mt-6 rounded-2xl border border-border bg-surface p-6 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm font-semibold text-foreground",
                        children: "Create remedy"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/remedies/page.js",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: [
                                    "Title *",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm",
                                        value: createForm.title,
                                        onChange: (e)=>setCreateForm((f)=>({
                                                    ...f,
                                                    title: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: [
                                    "Slug (optional)",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm",
                                        placeholder: "auto-from-title",
                                        value: createForm.slug,
                                        onChange: (e)=>setCreateForm((f)=>({
                                                    ...f,
                                                    slug: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: [
                                    "Category",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm",
                                        value: createForm.category,
                                        onChange: (e)=>setCreateForm((f)=>({
                                                    ...f,
                                                    category: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: [
                                    "Priority",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm",
                                        value: createForm.priority,
                                        onChange: (e)=>setCreateForm((f)=>({
                                                    ...f,
                                                    priority: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium",
                                        children: "Image"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        onChange: onCreateImageChange,
                                        className: "mt-1 block w-full rounded-xl border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-foreground disabled:opacity-60"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this),
                                    createImagePreview ? // eslint-disable-next-line @next/next/no-img-element
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: createImagePreview,
                                        alt: "",
                                        className: "mt-2 max-h-36 rounded-lg border border-border object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 320,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-muted",
                                        children: "Optional — image is sent with Create remedy."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium sm:col-span-2",
                                children: [
                                    "Tags (comma separated)",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm",
                                        placeholder: "career, health, love",
                                        value: createForm.tags,
                                        onChange: (e)=>setCreateForm((f)=>({
                                                    ...f,
                                                    tags: e.target.value
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "block text-sm font-medium sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Description *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 overflow-hidden rounded-xl border border-border bg-background",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CKEditor"], {
                                            editor: ClassicEditor,
                                            data: createForm.description,
                                            onChange: (_event, editor)=>{
                                                const data = editor.getData();
                                                setCreateForm((f)=>({
                                                        ...f,
                                                        description: data
                                                    }));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 text-sm font-medium sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: createForm.isActive,
                                        onChange: (e)=>setCreateForm((f)=>({
                                                    ...f,
                                                    isActive: e.target.checked
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this),
                                    "Active"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/remedies/page.js",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: creating,
                        className: "cta-btn mt-4 rounded-xl px-5 py-2.5 text-sm font-semibold disabled:opacity-60",
                        children: creating ? "Creating…" : "Create remedy"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/remedies/page.js",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/remedies/page.js",
                lineNumber: 261,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[900px] text-left text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "border-b border-border bg-accent/40 text-xs font-semibold uppercase tracking-wide text-muted",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Title"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Slug"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Priority"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Active"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3",
                                        children: "Tags"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 386,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-right",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/remedies/page.js",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/remedies/page.js",
                            lineNumber: 378,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 8,
                                    className: "px-4 py-10 text-center text-muted",
                                    children: "Loading…"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 393,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 392,
                                columnNumber: 15
                            }, this) : rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 8,
                                    className: "px-4 py-10 text-center text-muted",
                                    children: "No remedies yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 399,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/remedies/page.js",
                                lineNumber: 398,
                                columnNumber: 15
                            }, this) : rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-border/80 last:border-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 font-mono text-xs",
                                            children: r.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 406,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 font-medium",
                                            children: r.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 407,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-muted",
                                            children: r.slug
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 408,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: r.category || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 409,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: r.priority ?? 0
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 410,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: r.isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-700",
                                                children: "Yes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/remedies/page.js",
                                                lineNumber: 413,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-700",
                                                children: "No"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/remedies/page.js",
                                                lineNumber: 415,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 411,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "max-w-[260px] truncate px-4 py-3 text-muted",
                                            children: Array.isArray(r.tags) && r.tags.length ? r.tags.join(", ") : "—"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 418,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>openEdit(r),
                                                    className: "font-medium text-primary hover:underline",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                                    lineNumber: 424,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-border",
                                                    children: " · "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                                    lineNumber: 431,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>removeRemedy(r.id),
                                                    className: "font-medium text-red-700 hover:underline",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                                    lineNumber: 432,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 423,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, r.id, true, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 405,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/remedies/page.js",
                            lineNumber: 390,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/remedies/page.js",
                    lineNumber: 377,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/remedies/page.js",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            editId != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-xl",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "edit-remedy-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "edit-remedy-title",
                            className: "text-lg font-semibold text-foreground",
                            children: [
                                "Edit remedy #",
                                editId
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/remedies/page.js",
                            lineNumber: 455,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: saveEdit,
                            className: "mt-6 grid gap-4 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: [
                                        "Title *",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm",
                                            value: editForm.title,
                                            onChange: (e)=>setEditForm((f)=>({
                                                        ...f,
                                                        title: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: [
                                        "Slug",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm",
                                            value: editForm.slug,
                                            onChange: (e)=>setEditForm((f)=>({
                                                        ...f,
                                                        slug: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 475,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 473,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: [
                                        "Category",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm",
                                            value: editForm.category,
                                            onChange: (e)=>setEditForm((f)=>({
                                                        ...f,
                                                        category: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 485,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: [
                                        "Priority",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm",
                                            value: editForm.priority,
                                            onChange: (e)=>setEditForm((f)=>({
                                                        ...f,
                                                        priority: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 495,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 493,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium",
                                            children: "Image"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 505,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/*",
                                            onChange: onEditImageChange,
                                            className: "mt-1 block w-full rounded-xl border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-foreground disabled:opacity-60"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 506,
                                            columnNumber: 17
                                        }, this),
                                        editImagePreview ? // eslint-disable-next-line @next/next/no-img-element
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: editImagePreview,
                                            alt: "",
                                            className: "mt-2 max-h-36 rounded-lg border border-border object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 514,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-muted",
                                            children: "No image set."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 520,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-muted",
                                            children: "Leave file unchanged to keep the current image."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 522,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 504,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium sm:col-span-2",
                                    children: [
                                        "Tags (comma separated)",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm",
                                            value: editForm.tags,
                                            onChange: (e)=>setEditForm((f)=>({
                                                        ...f,
                                                        tags: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 528,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "block text-sm font-medium sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Description *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 537,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 overflow-hidden rounded-xl border border-border bg-background",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CKEditor"], {
                                                editor: ClassicEditor,
                                                data: editForm.description,
                                                onChange: (_event, editor)=>{
                                                    const data = editor.getData();
                                                    setEditForm((f)=>({
                                                            ...f,
                                                            description: data
                                                        }));
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/remedies/page.js",
                                                lineNumber: 539,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 536,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 text-sm font-medium sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: editForm.isActive,
                                            onChange: (e)=>setEditForm((f)=>({
                                                        ...f,
                                                        isActive: e.target.checked
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 550,
                                            columnNumber: 17
                                        }, this),
                                        "Active"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-2 sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closeEdit,
                                            className: "flex-1 rounded-xl border border-border py-2.5 text-sm font-medium",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 561,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: saving,
                                            className: "cta-btn flex-1 rounded-xl py-2.5 text-sm font-semibold disabled:opacity-60",
                                            children: saving ? "Saving…" : "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/remedies/page.js",
                                            lineNumber: 568,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/remedies/page.js",
                                    lineNumber: 560,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/remedies/page.js",
                            lineNumber: 461,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/remedies/page.js",
                    lineNumber: 449,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/remedies/page.js",
                lineNumber: 448,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/remedies/page.js",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/@ckeditor/ckeditor5-integrations-common/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CKBOX_CDN_URL",
    ()=>CKBOX_CDN_URL,
    "CK_CDN_URL",
    ()=>CK_CDN_URL,
    "INJECTED_SCRIPTS",
    ()=>INJECTED_SCRIPTS,
    "INJECTED_STYLESHEETS",
    ()=>INJECTED_STYLESHEETS,
    "appendExtraPluginsToEditorConfig",
    ()=>appendExtraPluginsToEditorConfig,
    "assignAttributesPropToMultiRootEditorConfig",
    ()=>assignAttributesPropToMultiRootEditorConfig,
    "assignElementToEditorConfig",
    ()=>assignElementToEditorConfig,
    "assignInitialDataToEditorConfig",
    ()=>assignInitialDataToEditorConfig,
    "assignInitialDataToMultirootEditorConfig",
    ()=>assignInitialDataToMultirootEditorConfig,
    "compareInstalledCKBaseVersion",
    ()=>compareInstalledCKBaseVersion,
    "compareSemanticVersions",
    ()=>compareSemanticVersions,
    "createCKBoxCdnUrl",
    ()=>createCKBoxCdnUrl,
    "createCKCdnUrl",
    ()=>createCKCdnUrl,
    "createDefer",
    ()=>createDefer,
    "createIntegrationUsageDataPlugin",
    ()=>createIntegrationUsageDataPlugin,
    "destructureSemanticVersion",
    ()=>destructureSemanticVersion,
    "filterBlankObjectValues",
    ()=>filterBlankObjectValues,
    "filterObjectValues",
    ()=>filterObjectValues,
    "getCKBaseBundleInstallationInfo",
    ()=>getCKBaseBundleInstallationInfo,
    "getCKBoxInstallationInfo",
    ()=>getCKBoxInstallationInfo,
    "getInitialDataFromEditorConfig",
    ()=>getInitialDataFromEditorConfig,
    "getInstalledCKBaseFeatures",
    ()=>getInstalledCKBaseFeatures,
    "injectScript",
    ()=>injectScript,
    "injectScriptsInParallel",
    ()=>injectScriptsInParallel,
    "injectStylesheet",
    ()=>injectStylesheet,
    "isCKEditorFreeLicense",
    ()=>isCKEditorFreeLicense,
    "isCKTestingVersion",
    ()=>isCKTestingVersion,
    "isCKVersion",
    ()=>isCKVersion,
    "isCKZeroBaseVersion",
    ()=>isCKZeroBaseVersion,
    "isSSR",
    ()=>isSSR,
    "isSemanticVersion",
    ()=>isSemanticVersion,
    "loadCKEditorCloud",
    ()=>loadCKEditorCloud,
    "mapObjectValues",
    ()=>mapObjectValues,
    "omit",
    ()=>omit,
    "once",
    ()=>once,
    "overwriteArray",
    ()=>overwriteArray,
    "overwriteObject",
    ()=>overwriteObject,
    "preloadResource",
    ()=>preloadResource,
    "shallowCompareArrays",
    ()=>shallowCompareArrays,
    "uid",
    ()=>uid,
    "uniq",
    ()=>uniq,
    "waitFor",
    ()=>waitFor,
    "waitForWindowEntry",
    ()=>waitForWindowEntry,
    "without",
    ()=>without
]);
function createDefer() {
    const deferred = {
        resolve: null,
        promise: null
    };
    deferred.promise = new Promise((resolve)=>{
        deferred.resolve = resolve;
    });
    return deferred;
}
function waitFor(callback, { timeOutAfter = 500, retryAfter = 100 } = {}) {
    return new Promise((resolve, reject)=>{
        const startTime = Date.now();
        let lastError = null;
        const timeoutTimerId = setTimeout(()=>{
            reject(lastError ?? new Error("Timeout"));
        }, timeOutAfter);
        const tick = async ()=>{
            try {
                const result = await callback();
                clearTimeout(timeoutTimerId);
                resolve(result);
            } catch (err) {
                lastError = err;
                if (Date.now() - startTime > timeOutAfter) {
                    reject(err);
                } else {
                    setTimeout(tick, retryAfter);
                }
            }
        };
        tick();
    });
}
const INJECTED_SCRIPTS = /* @__PURE__ */ new Map();
function injectScript(src, { attributes } = {}) {
    if (INJECTED_SCRIPTS.has(src)) {
        return INJECTED_SCRIPTS.get(src);
    }
    const maybePrevScript = document.querySelector(`script[src="${src}"]`);
    if (maybePrevScript) {
        console.warn(`Script with "${src}" src is already present in DOM!`);
        maybePrevScript.remove();
    }
    const promise = new Promise((resolve, reject)=>{
        const script = document.createElement("script");
        script.onerror = reject;
        script.onload = ()=>{
            resolve();
        };
        for (const [key, value] of Object.entries(attributes || {})){
            script.setAttribute(key, value);
        }
        script.setAttribute("data-injected-by", "ckeditor-integration");
        script.type = "text/javascript";
        script.async = true;
        script.src = src;
        document.head.appendChild(script);
        const observer = new MutationObserver((mutations)=>{
            const removedNodes = mutations.flatMap((mutation)=>Array.from(mutation.removedNodes));
            if (removedNodes.includes(script)) {
                INJECTED_SCRIPTS.delete(src);
                observer.disconnect();
            }
        });
        observer.observe(document.head, {
            childList: true,
            subtree: true
        });
    });
    INJECTED_SCRIPTS.set(src, promise);
    return promise;
}
async function injectScriptsInParallel(sources, props) {
    await Promise.all(sources.map((src)=>injectScript(src, props)));
}
const INJECTED_STYLESHEETS = /* @__PURE__ */ new Map();
function injectStylesheet({ href, placementInHead = "start", attributes = {} }) {
    if (INJECTED_STYLESHEETS.has(href)) {
        return INJECTED_STYLESHEETS.get(href);
    }
    const maybePrevStylesheet = document.querySelector(`link[href="${href}"][rel="stylesheet"]`);
    if (maybePrevStylesheet) {
        console.warn(`Stylesheet with "${href}" href is already present in DOM!`);
        maybePrevStylesheet.remove();
    }
    const appendLinkTagToHead = (link)=>{
        const previouslyInjectedLinks = Array.from(document.head.querySelectorAll('link[data-injected-by="ckeditor-integration"]'));
        switch(placementInHead){
            // It'll append styles *before* the stylesheets that are already present in the head
            // but after the ones that are injected by this function.
            case "start":
                if (previouslyInjectedLinks.length) {
                    previouslyInjectedLinks.slice(-1)[0].after(link);
                } else {
                    document.head.insertBefore(link, document.head.firstChild);
                }
                break;
            // It'll append styles *after* the stylesheets already in the head.
            case "end":
                document.head.appendChild(link);
                break;
        }
    };
    const promise = new Promise((resolve, reject)=>{
        const link = document.createElement("link");
        for (const [key, value] of Object.entries(attributes || {})){
            link.setAttribute(key, value);
        }
        link.setAttribute("data-injected-by", "ckeditor-integration");
        link.rel = "stylesheet";
        link.href = href;
        link.onerror = reject;
        link.onload = ()=>{
            resolve();
        };
        appendLinkTagToHead(link);
        const observer = new MutationObserver((mutations)=>{
            const removedNodes = mutations.flatMap((mutation)=>Array.from(mutation.removedNodes));
            if (removedNodes.includes(link)) {
                INJECTED_STYLESHEETS.delete(href);
                observer.disconnect();
            }
        });
        observer.observe(document.head, {
            childList: true,
            subtree: true
        });
    });
    INJECTED_STYLESHEETS.set(href, promise);
    return promise;
}
function isSSR() {
    return ("TURBOPACK compile-time value", "undefined") === "undefined";
}
function omit(keys, obj) {
    const clone = {
        ...obj
    };
    for (const key of keys){
        if (Object.hasOwn(obj, key)) {
            delete clone[key];
        }
    }
    return clone;
}
function once(fn) {
    let lastResult = null;
    return (...args)=>{
        if (!lastResult) {
            lastResult = {
                current: fn(...args)
            };
        }
        return lastResult.current;
    };
}
function overwriteArray(source, destination) {
    destination.length = 0;
    destination.push(...source);
    return destination;
}
function overwriteObject(source, destination) {
    for (const prop of Object.getOwnPropertyNames(destination)){
        delete destination[prop];
    }
    for (const [key, value] of Object.entries(source)){
        if (value !== destination && key !== "prototype" && key !== "__proto__") {
            destination[key] = value;
        }
    }
    return destination;
}
function preloadResource(url, { attributes } = {}) {
    if (document.head.querySelector(`link[href="${url}"][rel="preload"]`)) {
        return;
    }
    const link = document.createElement("link");
    for (const [key, value] of Object.entries(attributes || {})){
        link.setAttribute(key, value);
    }
    link.setAttribute("data-injected-by", "ckeditor-integration");
    link.rel = "preload";
    link.as = detectTypeOfResource(url);
    link.href = url;
    document.head.insertBefore(link, document.head.firstChild);
}
function detectTypeOfResource(url) {
    switch(true){
        case /\.css$/.test(url):
            return "style";
        case /\.js$/.test(url):
            return "script";
        default:
            return "fetch";
    }
}
function shallowCompareArrays(a, b) {
    if (a === b) {
        return true;
    }
    if (!a || !b) {
        return false;
    }
    for(let i = 0; i < a.length; ++i){
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
const HEX_NUMBERS = new Array(256).fill("").map((_, index)=>("0" + index.toString(16)).slice(-2));
function uid() {
    const [r1, r2, r3, r4] = crypto.getRandomValues(new Uint32Array(4));
    return "e" + HEX_NUMBERS[r1 >> 0 & 255] + HEX_NUMBERS[r1 >> 8 & 255] + HEX_NUMBERS[r1 >> 16 & 255] + HEX_NUMBERS[r1 >> 24 & 255] + HEX_NUMBERS[r2 >> 0 & 255] + HEX_NUMBERS[r2 >> 8 & 255] + HEX_NUMBERS[r2 >> 16 & 255] + HEX_NUMBERS[r2 >> 24 & 255] + HEX_NUMBERS[r3 >> 0 & 255] + HEX_NUMBERS[r3 >> 8 & 255] + HEX_NUMBERS[r3 >> 16 & 255] + HEX_NUMBERS[r3 >> 24 & 255] + HEX_NUMBERS[r4 >> 0 & 255] + HEX_NUMBERS[r4 >> 8 & 255] + HEX_NUMBERS[r4 >> 16 & 255] + HEX_NUMBERS[r4 >> 24 & 255];
}
function uniq(source) {
    return Array.from(new Set(source));
}
async function waitForWindowEntry(entryNames, config) {
    const tryPickBundle = ()=>entryNames.map((name)=>window[name]).filter(Boolean)[0];
    return waitFor(()=>{
        const result = tryPickBundle();
        if (!result) {
            throw new Error(`Window entry "${entryNames.join(",")}" not found.`);
        }
        return result;
    }, config);
}
function filterObjectValues(obj, filter) {
    const filteredEntries = Object.entries(obj).filter(([key, value])=>filter(value, key));
    return Object.fromEntries(filteredEntries);
}
function filterBlankObjectValues(obj) {
    return filterObjectValues(obj, (value)=>value !== null && value !== void 0);
}
function mapObjectValues(obj, mapper) {
    const mappedEntries = Object.entries(obj).map(([key, value])=>[
            key,
            mapper(value, key)
        ]);
    return Object.fromEntries(mappedEntries);
}
function without(itemsToRemove, items) {
    return items.filter((item)=>!itemsToRemove.includes(item));
}
function isSemanticVersion(version) {
    return !!version && /^\d+\.\d+\.\d+/.test(version);
}
function destructureSemanticVersion(version) {
    if (!isSemanticVersion(version)) {
        throw new Error(`Invalid semantic version: ${version || "<blank>"}.`);
    }
    const [major, minor, patch] = version.split(".");
    return {
        major: Number.parseInt(major, 10),
        minor: Number.parseInt(minor, 10),
        patch: Number.parseInt(patch, 10)
    };
}
function compareSemanticVersions(a, b) {
    const parsedA = destructureSemanticVersion(a);
    const parsedB = destructureSemanticVersion(b);
    return Math.sign(parsedA.major - parsedB.major || parsedA.minor - parsedB.minor || parsedA.patch - parsedB.patch);
}
function isCKTestingVersion(version) {
    if (!version) {
        return false;
    }
    return [
        "nightly",
        "alpha",
        "internal",
        "nightly-",
        "staging"
    ].some((testVersion)=>version.includes(testVersion));
}
function isCKZeroBaseVersion(version) {
    return !!version?.startsWith("0.0.0-");
}
function isCKVersion(version) {
    return isSemanticVersion(version) || isCKTestingVersion(version);
}
function appendExtraPluginsToEditorConfig(config, plugins) {
    const extraPlugins = config.extraPlugins || [];
    return {
        ...config,
        extraPlugins: [
            ...extraPlugins,
            ...plugins.filter((item)=>!extraPlugins.includes(item))
        ]
    };
}
function getLicenseVersionFromEditorVersion(version) {
    if (isCKTestingVersion(version)) {
        return 3;
    }
    const { major } = destructureSemanticVersion(version);
    switch(true){
        case major >= 44:
            return 3;
        case major >= 38:
            return 2;
        default:
            return 1;
    }
}
function getCKBaseBundleInstallationInfo() {
    const { CKEDITOR_VERSION, CKEDITOR } = window;
    if (!isCKVersion(CKEDITOR_VERSION)) {
        return null;
    }
    return {
        source: CKEDITOR ? "cdn" : "npm",
        version: CKEDITOR_VERSION
    };
}
function getSupportedLicenseVersionInstallationInfo() {
    const installationInfo = getCKBaseBundleInstallationInfo();
    if (!installationInfo) {
        return null;
    }
    return getLicenseVersionFromEditorVersion(installationInfo.version);
}
function isCKEditorFreeLicense(licenseKey, licenseVersion) {
    licenseVersion ||= getSupportedLicenseVersionInstallationInfo() || void 0;
    switch(licenseVersion){
        case 1:
        case 2:
            return licenseKey === void 0;
        case 3:
            return licenseKey === "GPL";
        default:
            {
                return false;
            }
    }
}
function createIntegrationUsageDataPlugin(integrationName, usageData) {
    return function IntegrationUsageDataPlugin(editor) {
        if (isCKEditorFreeLicense(editor.config.get("licenseKey"))) {
            return;
        }
        editor.on("collectUsageData", (source, { setUsageData })=>{
            setUsageData(`integration.${integrationName}`, usageData);
        });
    };
}
const CK_CDN_URL = "https://cdn.ckeditor.com";
function createCKCdnUrl(bundle, file, version) {
    return `${CK_CDN_URL}/${bundle}/${version}/${file}`;
}
const CKBOX_CDN_URL = "https://cdn.ckbox.io";
function createCKBoxCdnUrl(bundle, file, version) {
    return `${CKBOX_CDN_URL}/${bundle}/${version}/${file}`;
}
const CK_DOCS_URL = "https://ckeditor.com/docs/ckeditor5";
function createCKDocsUrl(path, version = "latest") {
    return `${CK_DOCS_URL}/${version}/${path}`;
}
function createCKCdnBaseBundlePack({ version, translations, createCustomCdnUrl = createCKCdnUrl }) {
    const urls = {
        scripts: [
            // Load the main script of the base features.
            createCustomCdnUrl("ckeditor5", "ckeditor5.umd.js", version),
            // Load all JavaScript files from the base features.
            // EN bundle is prebuilt into the main script, so we don't need to load it separately.
            ...without([
                "en"
            ], translations || []).map((translation)=>createCustomCdnUrl("ckeditor5", `translations/${translation}.umd.js`, version))
        ],
        stylesheets: [
            createCustomCdnUrl("ckeditor5", "ckeditor5.css", version)
        ]
    };
    return {
        // Preload resources specified in the pack, before loading the main script.
        preload: [
            ...urls.stylesheets,
            ...urls.scripts
        ],
        scripts: [
            // It's safe to load translations and the main script in parallel.
            async (attributes)=>injectScriptsInParallel(urls.scripts, attributes)
        ],
        // Load all stylesheets of the base features.
        stylesheets: urls.stylesheets,
        // Pick the exported global variables from the window object.
        checkPluginLoaded: async ()=>waitForWindowEntry([
                "CKEDITOR"
            ]),
        // Check if the CKEditor base bundle is already loaded and throw an error if it is.
        beforeInject: ()=>{
            const installationInfo = getCKBaseBundleInstallationInfo();
            switch(installationInfo?.source){
                case "npm":
                    throw new Error("CKEditor 5 is already loaded from npm. Check the migration guide for more details: " + createCKDocsUrl("updating/migrations/vanilla-js.html"));
                case "cdn":
                    if (installationInfo.version !== version) {
                        throw new Error(`CKEditor 5 is already loaded from CDN in version ${installationInfo.version}. Remove the old <script> and <link> tags loading CKEditor 5 to allow loading the ${version} version.`);
                    }
                    break;
            }
        }
    };
}
function createCKCdnPremiumBundlePack({ version, translations, createCustomCdnUrl = createCKCdnUrl }) {
    const urls = {
        scripts: [
            // Load the main script of the premium features.
            createCustomCdnUrl("ckeditor5-premium-features", "ckeditor5-premium-features.umd.js", version),
            // Load all JavaScript files from the premium features.
            // EN bundle is prebuilt into the main script, so we don't need to load it separately.
            ...without([
                "en"
            ], translations || []).map((translation)=>createCustomCdnUrl("ckeditor5-premium-features", `translations/${translation}.umd.js`, version))
        ],
        stylesheets: [
            createCustomCdnUrl("ckeditor5-premium-features", "ckeditor5-premium-features.css", version)
        ]
    };
    return {
        // Preload resources specified in the pack, before loading the main script.
        preload: [
            ...urls.stylesheets,
            ...urls.scripts
        ],
        scripts: [
            // It's safe to load translations and the main script in parallel.
            async (attributes)=>injectScriptsInParallel(urls.scripts, attributes)
        ],
        // Load all stylesheets of the premium features.
        stylesheets: urls.stylesheets,
        // Pick the exported global variables from the window object.
        checkPluginLoaded: async ()=>waitForWindowEntry([
                "CKEDITOR_PREMIUM_FEATURES"
            ])
    };
}
async function loadCKCdnResourcesPack(pack) {
    let { htmlAttributes = {}, scripts = [], stylesheets = [], preload, beforeInject, checkPluginLoaded } = normalizeCKCdnResourcesPack(pack);
    beforeInject?.();
    if (!preload) {
        preload = uniq([
            ...stylesheets.filter((item)=>typeof item === "string"),
            ...scripts.filter((item)=>typeof item === "string")
        ]);
    }
    for (const url of preload){
        preloadResource(url, {
            attributes: htmlAttributes
        });
    }
    await Promise.all(uniq(stylesheets).map((href)=>injectStylesheet({
            href,
            attributes: htmlAttributes,
            placementInHead: "start"
        })));
    for (const script of uniq(scripts)){
        const injectorProps = {
            attributes: htmlAttributes
        };
        if (typeof script === "string") {
            await injectScript(script, injectorProps);
        } else {
            await script(injectorProps);
        }
    }
    return checkPluginLoaded?.();
}
function normalizeCKCdnResourcesPack(pack) {
    if (Array.isArray(pack)) {
        return {
            scripts: pack.filter((item)=>typeof item === "function" || item.endsWith(".js")),
            stylesheets: pack.filter((item)=>item.endsWith(".css"))
        };
    }
    if (typeof pack === "function") {
        return {
            checkPluginLoaded: pack
        };
    }
    return pack;
}
function combineCKCdnBundlesPacks(packs) {
    const normalizedPacks = mapObjectValues(filterBlankObjectValues(packs), normalizeCKCdnResourcesPack);
    const mergedPacks = Object.values(normalizedPacks).reduce((acc, pack)=>{
        acc.scripts.push(...pack.scripts ?? []);
        acc.stylesheets.push(...pack.stylesheets ?? []);
        acc.preload.push(...pack.preload ?? []);
        return acc;
    }, {
        preload: [],
        scripts: [],
        stylesheets: []
    });
    const checkPluginLoaded = async ()=>{
        const exportedGlobalVariables = /* @__PURE__ */ Object.create(null);
        for (const [name, pack] of Object.entries(normalizedPacks)){
            exportedGlobalVariables[name] = await pack?.checkPluginLoaded?.();
        }
        return exportedGlobalVariables;
    };
    const beforeInject = ()=>{
        for (const pack of Object.values(normalizedPacks)){
            pack.beforeInject?.();
        }
    };
    return {
        ...mergedPacks,
        beforeInject,
        checkPluginLoaded
    };
}
function getCKBoxInstallationInfo() {
    const version = window.CKBox?.version;
    if (!isSemanticVersion(version)) {
        return null;
    }
    return {
        source: "cdn",
        version
    };
}
function createCKBoxBundlePack({ version, theme = "lark", translations, createCustomCdnUrl = createCKBoxCdnUrl }) {
    return {
        // Load the main script of the base features.
        scripts: [
            createCustomCdnUrl("ckbox", "ckbox.js", version),
            // EN bundle is prebuilt into the main script, so we don't need to load it separately.
            ...without([
                "en"
            ], translations || []).map((translation)=>createCustomCdnUrl("ckbox", `translations/${translation}.js`, version))
        ],
        // Load optional theme, if provided. It's not required but recommended because it improves the look and feel.
        ...theme && {
            stylesheets: [
                createCustomCdnUrl("ckbox", `styles/themes/${theme}.css`, version)
            ]
        },
        // Pick the exported global variables from the window object.
        checkPluginLoaded: async ()=>waitForWindowEntry([
                "CKBox"
            ]),
        // Check if the CKBox bundle is already loaded and throw an error if it is.
        beforeInject: ()=>{
            const installationInfo = getCKBoxInstallationInfo();
            if (installationInfo && installationInfo.version !== version) {
                throw new Error(`CKBox is already loaded from CDN in version ${installationInfo.version}. Remove the old <script> and <link> tags loading CKBox to allow loading the ${version} version.`);
            }
        }
    };
}
function isCKCdnSupportedByEditorVersion(version) {
    if (isCKTestingVersion(version)) {
        return true;
    }
    const { major } = destructureSemanticVersion(version);
    const licenseVersion = getLicenseVersionFromEditorVersion(version);
    switch(licenseVersion){
        // For newer license versions, we support all newer versions.
        case 3:
            return true;
        // For the license v1-v2, we support only the 43 version.
        default:
            return major === 43;
    }
}
function combineCdnPluginsPacks(pluginsPacks) {
    const normalizedPluginsPacks = mapObjectValues(pluginsPacks, (pluginPack, pluginName)=>{
        if (!pluginPack) {
            return void 0;
        }
        const normalizedPluginPack = normalizeCKCdnResourcesPack(pluginPack);
        return {
            // Provide default window accessor object if the plugin pack does not define it.
            checkPluginLoaded: async ()=>waitForWindowEntry([
                    pluginName
                ]),
            // Transform the plugin pack to a normalized advanced pack.
            ...normalizedPluginPack
        };
    });
    return combineCKCdnBundlesPacks(normalizedPluginsPacks);
}
function loadCKEditorCloud(config) {
    const { version, translations, plugins, premium, ckbox, createCustomCdnUrl, injectedHtmlElementsAttributes = {
        crossorigin: "anonymous"
    } } = config;
    validateCKEditorVersion(version);
    const pack = combineCKCdnBundlesPacks({
        CKEditor: createCKCdnBaseBundlePack({
            version,
            translations,
            createCustomCdnUrl
        }),
        ...premium && {
            CKEditorPremiumFeatures: createCKCdnPremiumBundlePack({
                version,
                translations,
                createCustomCdnUrl
            })
        },
        ...ckbox && {
            CKBox: createCKBoxBundlePack(ckbox)
        },
        loadedPlugins: combineCdnPluginsPacks(plugins ?? {})
    });
    return loadCKCdnResourcesPack({
        ...pack,
        htmlAttributes: injectedHtmlElementsAttributes
    });
}
function validateCKEditorVersion(version) {
    if (isCKTestingVersion(version)) {
        console.warn("You are using a testing version of CKEditor 5. Please remember that it is not suitable for production environments.");
    }
    if (!isCKCdnSupportedByEditorVersion(version)) {
        throw new Error(`The CKEditor 5 CDN can't be used with the given editor version: ${version}. Please make sure you are using at least the CKEditor 5 version 44.`);
    }
}
function compareInstalledCKBaseVersion(version) {
    const installedVersion = getCKBaseBundleInstallationInfo()?.version;
    if (!installedVersion) {
        return null;
    }
    if (isCKZeroBaseVersion(version)) {
        return -1;
    }
    if (!isSemanticVersion(installedVersion) || isCKZeroBaseVersion(installedVersion)) {
        return 1;
    }
    return compareSemanticVersions(installedVersion, version);
}
function getInstalledCKBaseFeatures() {
    const installedVersion = compareInstalledCKBaseVersion("48.0.0");
    const isV48OrNewer = installedVersion !== null && installedVersion >= 0;
    return {
        rootsConfigEntry: isV48OrNewer,
        elementConfigAttachment: isV48OrNewer
    };
}
function assignAttributesPropToMultiRootEditorConfig(attributes, config) {
    const supports = getInstalledCKBaseFeatures();
    if (supports.rootsConfigEntry) {
        const knownRootsKeys = uniq([
            ...Object.keys(attributes || {}),
            ...Object.keys(config.roots || {}),
            ...Object.keys(config.rootsAttributes || {})
        ]);
        const roots = knownRootsKeys.reduce((acc, rootName)=>{
            const legacyRootAttributes = config.rootsAttributes?.[rootName];
            const configRootValue = config.roots?.[rootName];
            acc[rootName] = {
                ...configRootValue,
                modelAttributes: attributes?.[rootName] ?? {
                    ...legacyRootAttributes,
                    ...configRootValue?.modelAttributes
                }
            };
            return acc;
        }, /* @__PURE__ */ Object.create(null));
        const mappedConfig = {
            ...config,
            roots
        };
        delete mappedConfig.rootsAttributes;
        return mappedConfig;
    }
    return {
        ...config,
        rootsAttributes: attributes
    };
}
function assignInitialDataToMultirootEditorConfig(data, config) {
    const supports = getInstalledCKBaseFeatures();
    if (supports.rootsConfigEntry) {
        const knownRootsKeys = uniq([
            ...Object.keys(data || {}),
            ...Object.keys(config.roots || {}),
            ...typeof config.initialData === "string" ? [] : Object.keys(config.initialData || {})
        ]);
        const roots = knownRootsKeys.reduce((acc, rootName)=>{
            const rootConfig = config.roots?.[rootName];
            const rootInitialData = rootConfig?.initialData;
            if (rootInitialData && data?.[rootName]) {
                console.warn(`Editor data should be provided either using \`config.roots['${rootName}'].initialData\` or the bound component property. The config value takes precedence over the bound component property and will be used when both are specified.`);
            }
            acc[rootName] = {
                ...rootConfig,
                initialData: rootInitialData || data?.[rootName] || config.initialData?.[rootName] || ""
            };
            return acc;
        }, /* @__PURE__ */ Object.create(null));
        const normalizedConfig = {
            ...config,
            roots
        };
        delete normalizedConfig.initialData;
        return normalizedConfig;
    }
    if (data && config?.initialData) {
        console.warn("Editor data should be provided either using `config.initialData` or the bound component property. The config value takes precedence over the bound component property and will be used when both are specified.");
    }
    return {
        ...config,
        initialData: config?.initialData || data
    };
}
function assignElementToEditorConfig(Editor, element, config) {
    if (!Editor.editorName || Editor.editorName === "ClassicEditor") {
        return {
            ...config,
            attachTo: element
        };
    }
    const mappedConfig = {
        ...config,
        roots: {
            ...config.roots,
            main: {
                ...config.root,
                ...config.roots?.main,
                element
            }
        }
    };
    delete mappedConfig.root;
    return mappedConfig;
}
function getInitialDataFromEditorConfig(config) {
    const supports = getInstalledCKBaseFeatures();
    if (supports.rootsConfigEntry) {
        return config.roots?.main?.initialData || config.root?.initialData || /* legacy */ config.initialData;
    }
    return config.initialData;
}
function assignInitialDataToEditorConfig(config, data, ignoreConfigInitialData) {
    const supports = getInstalledCKBaseFeatures();
    const configInitialData = ignoreConfigInitialData ? null : getInitialDataFromEditorConfig(config);
    if (supports.rootsConfigEntry) {
        const normalizedConfig = {
            ...config,
            roots: {
                ...config.roots,
                main: {
                    ...config.root,
                    ...config.roots?.main,
                    initialData: configInitialData || data || ""
                }
            }
        };
        if (data && configInitialData) {
            console.warn("Editor data should be provided either via the config (`config.root.initialData`) or the component's `data` property, but not both. The configuration value takes precedence.");
        }
        delete normalizedConfig.root;
        delete normalizedConfig.initialData;
        return normalizedConfig;
    }
    if (data && configInitialData) {
        console.warn("Editor data should be provided either via the config (`config.initialData`) or the component's `data` property, but not both. The configuration value takes precedence.");
    }
    return {
        ...config,
        initialData: configInitialData || data || ""
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/@ckeditor/ckeditor5-react/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CKEditor",
    ()=>CKEditor,
    "CKEditorContext",
    ()=>CKEditorContext,
    "useCKEditorCloud",
    ()=>useCKEditorCloud,
    "useMultiRootEditor",
    ()=>useMultiRootEditor,
    "withCKEditorCloud",
    ()=>withCKEditorCloud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-integrations-common/dist/index.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
const _LifeCycleElementSemaphore = class _LifeCycleElementSemaphore {
    constructor(element, lifecycle){
        /**
     * This should define async methods for initializing and destroying the editor.
     * Essentially, it's an async version of basic React lifecycle methods like `componentDidMount`, `componentWillUnmount`.
     *
     * 	* Result of {@link LifeCycleAsyncOperators#mount} method is passed to {@link LifeCycleAsyncOperators#unmount} as an argument.
     */ __publicField(this, "_lifecycle");
        /**
     * This is the element instance that the editor uses for mounting. This element should contain the `ckeditorInstance` member
     * once the editor has been successfully mounted to it. The semaphore ensures that a new instance of the editor, which will
     * be assigned to this element by the {@link #_lifecycle:mount} method, will always be initialized after the successful
     * destruction of the underlying `ckeditorInstance` that was previously mounted on this element.
     */ __publicField(this, "_element");
        /**
     * This is the lock mechanism utilized by the {@link #lock} and {@link #release} methods.
     *
     * 	* If the editor is not yet mounted and is awaiting mounting (for instance, when another editor is
     * 	  occupying the element), then it is null.
     *
     * 	* When the editor is mounted on the element, this variable holds an unresolved promise that will be
     * 	  resolved after the editor is destroyed.
     *
     * 	* Once the editor is destroyed (and it was previously mounted), the promise is resolved.
     */ __publicField(this, "_releaseLock", null);
        /**
     * This is the result of the {@link #_lifecycle:mount} function. This value should be reset to `null`
     * once the semaphore is released. It is utilized to store certain data that must be removed following
     * the destruction of the editor. This data may include the editor's instance, the assigned watchdog,
     * or handles for additional window listeners.
     */ __publicField(this, "_value", null);
        /**
     * This is a list of callbacks that are triggered if the semaphore {@link #_lifecycle:mount} method executes successfully.
     * It is utilized in scenarios where we need to assign certain properties to an editor that is currently in the process of mounting.
     * An instance of such usage could be two-way binding. We aim to prevent the loss of all `setData` calls if the editor has not
     * yet been mounted, therefore these calls will be executed immediately following the completion of the mounting process.
     */ __publicField(this, "_afterMountCallbacks", []);
        /**
     * This represents the actual mounting state of the semaphore. It is primarily used by the {@link #release} method to
     * determine whether the initialization of the editor should be skipped or, if the editor is already initialized, the editor
     * should be destroyed.
     *
     * 	* If `destroyedBeforeInitialization` is true, then the {@link #release} method was invoked before the editor began to mount.
     * 	  This often occurs in strict mode when we assign a promise to the {@link LifeCycleEditorElementSemaphore#_semaphores} map
     * 	  and the assigned `mount` callback has not yet been called. In this scenario, it is safe to skip the initialization of the editor
     * 	  and simply release the semaphore.
     *
     *	* If `mountingInProgress` is a Promise, then the {@link #release} method was invoked after the initialization of the editor and
     	  the editor must be destroyed before the semaphore is released.
    */ __publicField(this, "_state", {
            destroyedBeforeInitialization: false,
            mountingInProgress: null
        });
        /**
     * Inverse of {@link #_lock} method that tries to destroy attached editor.
     *
     * 	* If editor is being already attached to element (or is in attaching process) then after fully initialization of editor
     * 	  destroy is performed and semaphore is released. The {@link #_lifecycle} unmount method is called.
     *
     * 	* If editor is being destroyed before initialization then it does nothing but sets `destroyedBeforeInitialization` flag that
     * 	  will be later checked by {@link #_lock} method in initialization. The {@link #_lifecycle} unmount method is not called.
     *
     * *Important note:*
     *
     * It’s really important to keep this method *sync*. If we make this method *async*, it won’t work well because
     * it will cause problems when we’re trying to set up the {@link LifeCycleEditorElementSemaphore#_semaphores} map entries.
     */ __publicField(this, "release", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["once"])(()=>{
            const { _releaseLock, _state, _element, _lifecycle } = this;
            if (_state.mountingInProgress) {
                _state.mountingInProgress.then(()=>_lifecycle.unmount({
                        element: _element,
                        // Mount result might be overridden by watchdog during restart so use instance variable.
                        mountResult: this.value
                    })).catch((error)=>{
                    console.error("CKEditor unmounting error:", error);
                }).then(_releaseLock.resolve).then(()=>{
                    this._value = null;
                });
            } else {
                _state.destroyedBeforeInitialization = true;
                _releaseLock.resolve();
            }
        }));
        this._element = element;
        this._lifecycle = lifecycle;
        this._lock();
    }
    /**
   * Getter for {@link #_value}.
   */ get value() {
        return this._value;
    }
    /**
   * Resets the semaphore to its initial state.
   */ discard() {
        this._value = null;
        this._releaseLock = null;
        this._afterMountCallbacks = [];
        this._state = {
            destroyedBeforeInitialization: false,
            mountingInProgress: null
        };
    }
    /**
   * Occasionally, the Watchdog restarts the editor instance, resulting in a new instance being assigned to the semaphore.
   * In terms of race conditions, it's generally safer to simply override the semaphore value rather than recreating it
   * with a different one.
   */ unsafeSetValue(value) {
        this._value = value;
        this._afterMountCallbacks.forEach((callback)=>{
            if (this._lifecycle.isValueValid && !this._lifecycle.isValueValid(value)) {
                return;
            }
            callback(value);
        });
        this._afterMountCallbacks = [];
    }
    /**
   * This registers a callback that will be triggered after the editor has been successfully mounted.
   *
   * 	* If the editor is already mounted, the callback will be executed immediately.
   *	* If the editor is in the process of mounting, the callback will be executed upon successful mounting.
  * 	* If the editor is never mounted, the passed callback will not be executed.
  * 	* If an exception is thrown within the callback, it will be re-thrown in the semaphore.
  * 	* If the value is not valid (determined by isValueValid), the callback will not be executed.
  */ runAfterMount(callback) {
        const { _value, _afterMountCallbacks } = this;
        if (_value) {
            if (this._lifecycle.isValueValid && !this._lifecycle.isValueValid(_value)) {
                return;
            }
            callback(_value);
        } else {
            _afterMountCallbacks.push(callback);
        }
    }
    /**
   * This method is used to inform other components that the {@link #_element} will be used by the editor,
   * which is initialized by the {@link #_lifecycle} methods.
   *
   * 	* If an editor is already present on the provided element, the initialization of the current one
   * 	  will be postponed until the previous one is destroyed.
   *
   * 	* If the element is empty and does not have an editor attached to it, the currently locked editor will
   * 	  be mounted immediately.
   *
   * After the successful initialization of the editor and the assignment of the {@link #_value} member,
   * the `onReady` lifecycle method is called.
   *
   * *Important note:*
   *
   * It’s really important to keep this method *sync*. If we make this method *async*, it won’t work well because
   * it will cause problems when we’re trying to set up the {@link LifeCycleEditorElementSemaphore#_semaphores} map entries.
   */ _lock() {
        const { _semaphores } = _LifeCycleElementSemaphore;
        const { _state, _element, _lifecycle } = this;
        const prevElementSemaphore = _semaphores.get(_element) || Promise.resolve(null);
        const releaseLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDefer"])();
        this._releaseLock = releaseLock;
        const newElementSemaphore = prevElementSemaphore.then(()=>{
            if (_state.destroyedBeforeInitialization) {
                return Promise.resolve(void 0);
            }
            _state.mountingInProgress = _lifecycle.mount().then((mountResult)=>{
                if (mountResult) {
                    this.unsafeSetValue(mountResult);
                }
                return mountResult;
            });
            return _state.mountingInProgress;
        }).then(async (mountResult)=>{
            if (mountResult && _lifecycle.afterMount) {
                await _lifecycle.afterMount({
                    element: _element,
                    mountResult
                });
            }
        }).then(()=>releaseLock.promise).catch((error)=>{
            console.error("CKEditor mounting error:", error);
        }).then(()=>{
            if (_semaphores.get(_element) === newElementSemaphore) {
                _semaphores.delete(_element);
            }
        });
        _semaphores.set(_element, newElementSemaphore);
    }
};
/**
 * This is a map of elements associated with promises. It informs the semaphore that the underlying HTML element, used as a key,
 * is currently in use by another editor. Each element is assigned a promise, which allows for the easy chaining of new
 * editor instances on an element that is already in use by another instance. The process works as follows:
 *
 * 	1. If an element is being used by an editor, then the initialization of a new editor
 * 	   instance is chained using the `.then()` method of the Promise.
 *
 * 	2. If the editor associated with the underlying element is destroyed, then `Promise.resolve()` is called
 * 	   and the previously assigned `.then()` editor callback is executed.
 *
 *  @see {@link #lock} for more detailed information on the implementation.
 */ __publicField(_LifeCycleElementSemaphore, "_semaphores", /* @__PURE__ */ new Map());
let LifeCycleElementSemaphore = _LifeCycleElementSemaphore;
const ReactContextMetadataKey = "$__CKEditorReactContextMetadata";
function withCKEditorReactContextMetadata(metadata, config) {
    return {
        ...config,
        [ReactContextMetadataKey]: metadata
    };
}
function tryExtractCKEditorReactContextMetadata(object) {
    return object.get(ReactContextMetadataKey);
}
const useIsMountedRef = ()=>{
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mountedRef.current = true;
        return ()=>{
            mountedRef.current = false;
        };
    }, []);
    return mountedRef;
};
const useRefSafeCallback = (fn)=>{
    const callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    callbackRef.current = fn;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>callbackRef.current(...args), []);
};
const useInitializedCKEditorsMap = ({ currentContextWatchdog, onChangeInitializedEditors })=>{
    const onChangeInitializedEditorsSafe = useRefSafeCallback(onChangeInitializedEditors || (()=>{}));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var _a;
        if (currentContextWatchdog.status !== "initialized") {
            return;
        }
        const { watchdog } = currentContextWatchdog;
        const editors = (_a = watchdog == null ? void 0 : watchdog.context) == null ? void 0 : _a.editors;
        if (!editors) {
            return;
        }
        const getInitializedContextEditors = ()=>[
                ...editors
            ].reduce((map, editor)=>{
                var _a2;
                if (editor.state !== "ready") {
                    return map;
                }
                const metadata = tryExtractCKEditorReactContextMetadata(editor.config);
                const nameOrId = (_a2 = metadata == null ? void 0 : metadata.name) != null ? _a2 : editor.id;
                map[nameOrId] = {
                    instance: editor,
                    metadata
                };
                return map;
            }, /* @__PURE__ */ Object.create({}));
        const onEditorStatusChange = ()=>{
            onChangeInitializedEditorsSafe(getInitializedContextEditors(), watchdog);
        };
        const trackEditorLifecycle = (editor)=>{
            editor.once("ready", onEditorStatusChange, {
                priority: "lowest"
            });
            editor.once("destroy", onEditorStatusChange, {
                priority: "lowest"
            });
        };
        const onAddEditorToCollection = (_, editor)=>{
            trackEditorLifecycle(editor);
        };
        editors.forEach(trackEditorLifecycle);
        editors.on("add", onAddEditorToCollection);
        if (Array.from(editors).some((editor)=>editor.state === "ready")) {
            onEditorStatusChange();
        }
        return ()=>{
            editors.off("add", onAddEditorToCollection);
        };
    }, [
        currentContextWatchdog
    ]);
};
const ContextWatchdogContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(null);
const CKEditorContext = (props)=>{
    const { id, context, watchdogConfig, children, config, onReady, contextWatchdog: ContextWatchdogConstructor, isLayoutReady = true, onChangeInitializedEditors, onError = (error, details)=>console.error(error, details) } = props;
    const isMountedRef = useIsMountedRef();
    const prevWatchdogInitializationIDRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentContextWatchdog, setCurrentContextWatchdog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        status: "initializing"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLayoutReady) {
            initializeContextWatchdog();
        } else {
            setCurrentContextWatchdog({
                status: "initializing"
            });
        }
    }, [
        id,
        isLayoutReady
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (currentContextWatchdog.status === "initialized") {
                currentContextWatchdog.watchdog.destroy();
            }
        }, [
        currentContextWatchdog
    ]);
    useInitializedCKEditorsMap({
        currentContextWatchdog,
        onChangeInitializedEditors
    });
    function regenerateInitializationID() {
        prevWatchdogInitializationIDRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])();
        return prevWatchdogInitializationIDRef.current;
    }
    function canUpdateState(initializationID) {
        return prevWatchdogInitializationIDRef.current === initializationID && isMountedRef.current;
    }
    function initializeContextWatchdog() {
        const watchdogInitializationID = regenerateInitializationID();
        const contextWatchdog = new ContextWatchdogConstructor(context, watchdogConfig);
        contextWatchdog.on("error", (_, errorEvent)=>{
            if (canUpdateState(watchdogInitializationID)) {
                onError(errorEvent.error, {
                    phase: "runtime",
                    willContextRestart: errorEvent.causesRestart
                });
            }
        });
        contextWatchdog.on("stateChange", ()=>{
            if (onReady && contextWatchdog.state === "ready" && canUpdateState(watchdogInitializationID)) {
                onReady(contextWatchdog.context, contextWatchdog);
            }
        });
        contextWatchdog.create(config).then(()=>{
            if (canUpdateState(watchdogInitializationID)) {
                setCurrentContextWatchdog({
                    status: "initialized",
                    watchdog: contextWatchdog
                });
            } else {
                contextWatchdog.destroy();
            }
        }).catch((error)=>{
            if (canUpdateState(watchdogInitializationID)) {
                onError(error, {
                    phase: "initialization",
                    willContextRestart: false
                });
                setCurrentContextWatchdog({
                    status: "error",
                    error
                });
            }
        });
        return contextWatchdog;
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ContextWatchdogContext.Provider, {
        value: currentContextWatchdog
    }, children);
};
const isContextWatchdogValue = (obj)=>!!obj && typeof obj === "object" && "status" in obj && [
        "initializing",
        "initialized",
        "error"
    ].includes(obj.status);
const isContextWatchdogValueWithStatus = (status)=>(obj)=>isContextWatchdogValue(obj) && obj.status === status;
const isContextWatchdogInitializing = isContextWatchdogValueWithStatus("initializing");
const isContextWatchdogReadyToUse = (obj)=>isContextWatchdogValueWithStatus("initialized")(obj) && obj.watchdog.state === "ready";
const ReactIntegrationUsageDataPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createIntegrationUsageDataPlugin"])("react", {
    version: "11.1.2",
    frameworkVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].version
});
function appendAllIntegrationPluginsToConfig(editorConfig) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCKEditorFreeLicense"])(editorConfig.licenseKey)) {
        return editorConfig;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendExtraPluginsToEditorConfig"])(editorConfig, [
        /**
     * This part of the code is not executed in open-source implementations using a GPL key.
     * It only runs when a specific license key is provided. If you are uncertain whether
     * this applies to your installation, please contact our support team.
     */ ReactIntegrationUsageDataPlugin
    ]);
}
class EditorWatchdogAdapter {
    /**
   * @param contextWatchdog The context watchdog instance that will be wrapped into editor watchdog API.
   */ constructor(contextWatchdog){
        /**
     * The context watchdog instance that will be wrapped into editor watchdog API.
     */ __publicField(this, "_contextWatchdog");
        /**
     * A unique id for the adapter to distinguish editor items when using the context watchdog API.
     */ __publicField(this, "_id");
        /**
     * A watchdog's editor creator function.
     */ __publicField(this, "_creator");
        this._contextWatchdog = contextWatchdog;
        this._id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])();
    }
    /**
   *  @param creator A watchdog's editor creator function.
   */ setCreator(creator) {
        this._creator = creator;
    }
    create(sourceElementOrDataOrConfig, config) {
        let watchdogItemConfiguration = {
            creator: this._creator,
            id: this._id,
            type: "editor"
        };
        if (config) {
            watchdogItemConfiguration = {
                ...watchdogItemConfiguration,
                sourceElementOrData: sourceElementOrDataOrConfig,
                config
            };
        } else {
            watchdogItemConfiguration = {
                ...watchdogItemConfiguration,
                config: sourceElementOrDataOrConfig
            };
        }
        return this._contextWatchdog.add(watchdogItemConfiguration);
    }
    /**
   * Creates a listener that is attached to context watchdog's item and run when the context watchdog fires.
   * Currently works only for the `error` event.
   */ on(_, callback) {
        this._contextWatchdog.on("itemError", (_2, { itemId, error })=>{
            if (itemId === this._id) {
                callback(null, {
                    error,
                    causesRestart: void 0
                });
            }
        });
    }
    destroy() {
        if (this._contextWatchdog.state === "ready") {
            return this._contextWatchdog.remove(this._id);
        }
        return Promise.resolve();
    }
    /**
   * An editor instance.
   */ get editor() {
        return this._contextWatchdog.getItem(this._id);
    }
}
const REACT_INTEGRATION_READ_ONLY_LOCK_ID$1 = "Lock from React integration (@ckeditor/ckeditor5-react)";
class CKEditor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        super(props);
        /**
     * After mounting the editor, the variable will contain a reference to the created editor.
     * @see: https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html
     */ __publicField(this, "domContainer", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRef());
        /**
     * Unlocks element in editor semaphore after destroy editor instance.
     */ __publicField(this, "editorSemaphore", null);
        assertMinimumSupportedVersion();
    }
    get _semaphoreValue() {
        const { editorSemaphore } = this;
        return editorSemaphore ? editorSemaphore.value : null;
    }
    /**
   * An watchdog instance.
   */ get watchdog() {
        const { _semaphoreValue } = this;
        return _semaphoreValue ? _semaphoreValue.watchdog : null;
    }
    /**
   * An editor instance.
   */ get editor() {
        const { _semaphoreValue } = this;
        return _semaphoreValue ? _semaphoreValue.instance : null;
    }
    /**
   * The CKEditor component should not be updated by React itself.
   * However, if the component identifier changes, the whole structure should be created once again.
   */ shouldComponentUpdate(nextProps) {
        const { props, editorSemaphore } = this;
        if (nextProps.id !== props.id) {
            return true;
        }
        if (nextProps.disableWatchdog !== props.disableWatchdog) {
            return true;
        }
        if (editorSemaphore) {
            editorSemaphore.runAfterMount(({ instance })=>{
                if (shouldUpdateEditorData(props, nextProps, instance)) {
                    instance.data.set(nextProps.data);
                }
            });
            if ("disabled" in nextProps) {
                editorSemaphore.runAfterMount(({ instance })=>{
                    if (nextProps.disabled) {
                        instance.enableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID$1);
                    } else {
                        instance.disableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID$1);
                    }
                });
            }
        }
        return false;
    }
    /**
   * Initialize the editor when the component is mounted.
   */ componentDidMount() {
        if (!isContextWatchdogInitializing(this.context)) {
            this._initLifeCycleSemaphore();
        }
    }
    /**
   * Re-render the entire component once again. The old editor will be destroyed and the new one will be created.
   */ componentDidUpdate() {
        if (!isContextWatchdogInitializing(this.context)) {
            this._initLifeCycleSemaphore();
        }
    }
    /**
   * Destroy the editor before unmounting the component.
   */ componentWillUnmount() {
        this._unlockLifeCycleSemaphore();
    }
    /**
   * Async destroy attached editor and unlock element semaphore.
   */ _unlockLifeCycleSemaphore() {
        if (this.editorSemaphore) {
            this.editorSemaphore.release();
            this.editorSemaphore = null;
        }
    }
    /**
   * Unlocks previous editor semaphore and creates new one..
   */ _initLifeCycleSemaphore() {
        this._unlockLifeCycleSemaphore();
        this.editorSemaphore = new LifeCycleElementSemaphore(this.domContainer.current, {
            isValueValid: (value)=>value && !!value.instance,
            mount: async ()=>{
                var _a, _b;
                try {
                    return await this._initializeEditor();
                } catch (error) {
                    (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, error, {
                        phase: "initialization",
                        willEditorRestart: false
                    });
                    throw error;
                }
            },
            afterMount: ({ mountResult })=>{
                const { onReady } = this.props;
                if (onReady && this.domContainer.current !== null) {
                    onReady(mountResult.instance);
                }
            },
            unmount: async ({ element, mountResult })=>{
                const { onAfterDestroy } = this.props;
                try {
                    await this._destroyEditor(mountResult);
                    element.innerHTML = "";
                } finally{
                    if (onAfterDestroy) {
                        onAfterDestroy(mountResult.instance);
                    }
                }
            }
        });
    }
    /**
   * Render a <div> element which will be replaced by CKEditor.
   */ render() {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: this.domContainer
        });
    }
    /**
   * Initializes the editor by creating a proper watchdog and initializing it with the editor's configuration.
   */ async _initializeEditor() {
        const supports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInstalledCKBaseFeatures"])();
        const { editor: Editor, disableWatchdog, watchdogConfig } = this.props;
        const mergedConfig = this._getMergedConfig(true);
        if (disableWatchdog) {
            const instance = await this._createEditor(mergedConfig);
            return {
                instance,
                watchdog: null
            };
        }
        const watchdog = (()=>{
            if (isContextWatchdogReadyToUse(this.context)) {
                return new EditorWatchdogAdapter(this.context.watchdog);
            }
            return new Editor.EditorWatchdog(Editor, watchdogConfig);
        })();
        watchdog.on("error", (_, { error, causesRestart })=>{
            var _a;
            const onError = (_a = this.props.onError) != null ? _a : console.error;
            onError(error, {
                phase: "runtime",
                willEditorRestart: causesRestart
            });
        });
        if (supports.elementConfigAttachment) {
            watchdog.setCreator(async (config)=>this._watchdogCreateEditor(watchdog, config));
            await watchdog.create(mergedConfig);
        } else {
            watchdog.setCreator(async (_, config)=>this._watchdogCreateEditor(watchdog, config));
            await watchdog.create(this.domContainer.current, mergedConfig);
        }
        return {
            watchdog,
            instance: watchdog.editor
        };
    }
    /**
   * Creates editor in watchdog context.
   *
   * @param watchdog Watchdog adapter.
   * @param config Editor configuration.
   * @returns Editor instance.
   */ async _watchdogCreateEditor(watchdog, config) {
        const { editorSemaphore } = this;
        const { onAfterDestroy, onReady } = this.props;
        const nonFirstCreate = !!(editorSemaphore == null ? void 0 : editorSemaphore.value);
        if (nonFirstCreate && onAfterDestroy) {
            onAfterDestroy(editorSemaphore.value.instance);
        }
        const instance = await this._createEditor(config);
        if (nonFirstCreate && editorSemaphore) {
            editorSemaphore.unsafeSetValue({
                instance,
                watchdog
            });
            setTimeout(()=>{
                onReady == null ? void 0 : onReady(watchdog.editor);
            });
        }
        return instance;
    }
    /**
   * Creates an editor from the element and configuration.
   *
   * @param config CKEditor 5 editor configuration.
   * @returns Editor instance.
   */ async _createEditor(config) {
        const { editor: Editor } = this.props;
        const supports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInstalledCKBaseFeatures"])();
        const mergedConfig = this._getMergedConfig(false, config);
        const editor = await /* istanbul ignore next -- @preserve */ (supports.elementConfigAttachment ? Editor.create(mergedConfig) : Editor.create(this.domContainer.current, mergedConfig));
        if (this.props.disabled) {
            editor.enableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID$1);
        }
        const modelDocument = editor.model.document;
        const viewDocument = editor.editing.view.document;
        modelDocument.on("change:data", (event)=>{
            var _a, _b;
            (_b = (_a = this.props).onChange) == null ? void 0 : _b.call(_a, event, editor);
        });
        viewDocument.on("focus", (event)=>{
            var _a, _b;
            (_b = (_a = this.props).onFocus) == null ? void 0 : _b.call(_a, event, editor);
        });
        viewDocument.on("blur", (event)=>{
            var _a, _b;
            (_b = (_a = this.props).onBlur) == null ? void 0 : _b.call(_a, event, editor);
        });
        return editor;
    }
    /**
   * It gets an extended configuration containing the entries required for the integration configuration.
   *
   * @param resetData Assigns `data` prop value to the configuration if true.
   * @param config The configuration of the editor.
   * @returns Shallow copy of config.
   */ _getMergedConfig(resetData, config) {
        const { contextItemMetadata, editor: Editor } = this.props;
        const supports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInstalledCKBaseFeatures"])();
        let mappedConfig = {
            ...config != null ? config : this.props.config
        };
        if (contextItemMetadata) {
            mappedConfig = withCKEditorReactContextMetadata(contextItemMetadata, mappedConfig);
        }
        mappedConfig = appendAllIntegrationPluginsToConfig(mappedConfig);
        if (supports.elementConfigAttachment) {
            mappedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignElementToEditorConfig"])(Editor, this.domContainer.current, mappedConfig);
        }
        if (resetData) {
            mappedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignInitialDataToEditorConfig"])(mappedConfig, this.props.data || "");
        }
        return mappedConfig;
    }
    /**
   * Destroys the editor by destroying the watchdog.
   */ async _destroyEditor(initializeResult) {
        const { watchdog, instance } = initializeResult;
        return new Promise((resolve, reject)=>{
            setTimeout(async ()=>{
                try {
                    if (watchdog) {
                        await watchdog.destroy();
                        return resolve();
                    }
                    if (instance) {
                        await instance.destroy();
                        return resolve();
                    }
                    resolve();
                } catch (e) {
                    console.error(e);
                    reject(e);
                }
            });
        });
    }
}
__publicField(CKEditor, "contextType", ContextWatchdogContext);
function shouldUpdateEditorData(prevProps, nextProps, editor) {
    if (prevProps.data === nextProps.data) {
        return false;
    }
    if (editor.data.get() === nextProps.data) {
        return false;
    }
    return true;
}
function assertMinimumSupportedVersion() {
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareInstalledCKBaseVersion"])("42.0.0")){
        case null:
            console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');
            break;
        case -1:
            console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.");
            break;
    }
}
const useLifeCycleSemaphoreSyncRef = ()=>{
    const semaphoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [revision, setRevision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Date.now());
    const refresh = ()=>{
        setRevision(Date.now());
    };
    const release = (rerender = true)=>{
        if (semaphoreRef.current) {
            semaphoreRef.current.release();
            semaphoreRef.current = null;
        }
        if (rerender) {
            setRevision(Date.now());
        }
    };
    const unsafeSetValue = (value)=>{
        var _a;
        (_a = semaphoreRef.current) == null ? void 0 : _a.unsafeSetValue(value);
        refresh();
    };
    const runAfterMount = (callback)=>{
        if (semaphoreRef.current) {
            semaphoreRef.current.runAfterMount(callback);
        }
    };
    const replace = (newSemaphore)=>{
        release(false);
        semaphoreRef.current = newSemaphore();
        refresh();
        runAfterMount(refresh);
    };
    const createAttributeRef = (key)=>({
            get current () {
                if (!semaphoreRef.current || !semaphoreRef.current.value) {
                    return null;
                }
                return semaphoreRef.current.value[key];
            }
        });
    return {
        get current () {
            return semaphoreRef.current;
        },
        revision,
        createAttributeRef,
        unsafeSetValue,
        release,
        replace,
        runAfterMount
    };
};
const useInstantEffect = (fn, deps)=>{
    const [prevDeps, setDeps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowCompareArrays"])(prevDeps, deps)) {
        fn();
        setDeps([
            ...deps
        ]);
    }
};
const useInstantEditorEffect = (semaphore, fn, deps)=>{
    useInstantEffect(()=>{
        if (semaphore) {
            semaphore.runAfterMount(fn);
        }
    }, [
        semaphore,
        ...deps
    ]);
};
function mergeRefs(...refs) {
    return (value)=>{
        refs.forEach((ref)=>{
            if (typeof ref === "function") {
                ref(value);
            } else if (ref != null) {
                ref.current = value;
            }
        });
    };
}
const EditorEditable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ id, semaphore, rootName }, ref)=>{
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let editable;
        let editor;
        semaphore.runAfterMount(({ instance })=>{
            if (!innerRef.current) {
                return;
            }
            editor = instance;
            const { ui, model } = editor;
            const root = model.document.getRoot(rootName);
            if (root && editor.ui.getEditableElement(rootName)) {
                editor.detachEditable(root);
            }
            editable = ui.view.createEditable(rootName, innerRef.current);
            ui.addEditable(editable);
            instance.editing.view.forceRender();
        });
        return ()=>{
            if (editor && editor.state !== "destroyed" && innerRef.current) {
                const root = editor.model.document.getRoot(rootName);
                if (root) {
                    editor.detachEditable(root);
                }
            }
        };
    }, [
        semaphore.revision
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        key: semaphore.revision,
        id,
        ref: mergeRefs(ref, innerRef)
    });
}));
EditorEditable.displayName = "EditorEditable";
const EditorToolbarWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ editor }, ref)=>{
    const toolbarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const toolbarContainer = toolbarRef.current;
        if (!editor || !toolbarContainer) {
            return void 0;
        }
        const element = editor.ui.view.toolbar.element;
        toolbarContainer.appendChild(element);
        return ()=>{
            if (toolbarContainer.contains(element)) {
                toolbarContainer.removeChild(element);
            }
        };
    }, [
        editor && editor.id
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: mergeRefs(toolbarRef, ref)
    });
});
EditorToolbarWrapper.displayName = "EditorToolbarWrapper";
const REACT_INTEGRATION_READ_ONLY_LOCK_ID = "Lock from React integration (@ckeditor/ckeditor5-react)";
const useMultiRootEditor = (props)=>{
    const semaphoreElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(props.semaphoreElement || null);
    const semaphore = useLifeCycleSemaphoreSyncRef();
    const editorRefs = {
        watchdog: semaphore.createAttributeRef("watchdog"),
        instance: semaphore.createAttributeRef("instance")
    };
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ContextWatchdogContext);
    const [roots, setRoots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Object.keys(props.data));
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ...props.data
    });
    const [attributes, setAttributes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ...props.rootsAttributes
    });
    const shouldUpdateEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const forceAssignFakeEditableElements = ()=>{
        const editor = editorRefs.instance.current;
        if (!editor) {
            return;
        }
        const initializeEditableWithFakeElement = (editable)=>{
            if (editable.name && !editor.editing.view.getDomRoot(editable.name)) {
                editor.editing.view.attachDomRoot(document.createElement("div"), editable.name);
            }
        };
        Object.values(editor.ui.view.editables).forEach(initializeEditableWithFakeElement);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const semaphoreElement = semaphoreElementRef.current;
        if (context && !isContextWatchdogReadyToUse(context)) {
            return;
        }
        if (!semaphoreElement || props.isLayoutReady === false) {
            return;
        }
        semaphore.replace(()=>new LifeCycleElementSemaphore(semaphoreElement, {
                mount: _initializeEditor,
                afterMount: ({ mountResult })=>{
                    const { onReady } = props;
                    if (onReady && semaphoreElementRef.current !== null) {
                        onReady(mountResult.instance);
                    }
                },
                unmount: async ({ element, mountResult })=>{
                    const { onAfterDestroy } = props;
                    try {
                        await _destroyEditor(mountResult);
                        element.innerHTML = "";
                    } finally{
                        if (onAfterDestroy) {
                            onAfterDestroy(mountResult.instance);
                        }
                    }
                }
            }));
        return ()=>{
            forceAssignFakeEditableElements();
            semaphore.release(false);
        };
    }, [
        props.id,
        props.isLayoutReady,
        context == null ? void 0 : context.status
    ]);
    const _getConfig = useRefSafeCallback(()=>{
        let mappedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignAttributesPropToMultiRootEditorConfig"])(attributes, props.config || {});
        mappedConfig = appendAllIntegrationPluginsToConfig(mappedConfig);
        return mappedConfig;
    });
    const onChangeData = useRefSafeCallback((editor, event)=>{
        const modelDocument = editor.model.document;
        if (!props.disableTwoWayDataBinding) {
            const newData = {};
            const newAttributes = {};
            modelDocument.differ.getChanges().forEach((change)=>{
                let root;
                if (change.type == "insert" || change.type == "remove") {
                    root = change.position.root;
                } else {
                    root = change.range.root;
                }
                if (!root.isAttached()) {
                    return;
                }
                const { rootName } = root;
                newData[rootName] = editor.getData({
                    rootName
                });
            });
            modelDocument.differ.getChangedRoots().forEach((changedRoot)=>{
                if (changedRoot.state) {
                    if (newData[changedRoot.name] !== void 0) {
                        delete newData[changedRoot.name];
                    }
                    return;
                }
                const rootName = changedRoot.name;
                newAttributes[rootName] = editor.getRootAttributes(rootName);
            });
            if (Object.keys(newData).length) {
                setData((previousData)=>({
                        ...previousData,
                        ...newData
                    }));
            }
            if (Object.keys(newAttributes).length) {
                setAttributes((previousAttributes)=>({
                        ...previousAttributes,
                        ...newAttributes
                    }));
            }
        }
        if (props.onChange) {
            props.onChange(event, editor);
        }
    });
    const onAddRoot = useRefSafeCallback((editor, _evt, root)=>{
        const rootName = root.rootName;
        if (!props.disableTwoWayDataBinding) {
            setData((previousData)=>({
                    ...previousData,
                    [rootName]: editor.getData({
                        rootName
                    })
                }));
            setAttributes((previousAttributes)=>({
                    ...previousAttributes,
                    [rootName]: editor.getRootAttributes(rootName)
                }));
        }
        setRoots((prevRoots)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniq"])([
                ...prevRoots,
                root.rootName
            ]));
    });
    const onDetachRoot = useRefSafeCallback((_editor, _evt, root)=>{
        const rootName = root.rootName;
        if (!props.disableTwoWayDataBinding) {
            setData((previousData)=>{
                const { [rootName]: _, ...newData } = previousData;
                return {
                    ...newData
                };
            });
            setAttributes((previousAttributes)=>{
                const { [rootName]: _, ...newAttributes } = previousAttributes;
                return {
                    ...newAttributes
                };
            });
        }
        setRoots((prevRoots)=>prevRoots.filter((root2)=>root2 !== rootName));
    });
    const _createEditor = useRefSafeCallback(async (initialData, config)=>{
        const Editor = props.editor;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overwriteObject"])({
            ...props.rootsAttributes
        }, attributes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overwriteObject"])({
            ...props.data
        }, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overwriteArray"])(Object.keys(props.data), roots);
        const { initialData: mergedInitialData, ...mergedConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignInitialDataToMultirootEditorConfig"])(initialData, config);
        const supports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInstalledCKBaseFeatures"])();
        const editor = await /* istanbul ignore next -- @preserve */ (supports.elementConfigAttachment ? Editor.create({
            ...mergedConfig,
            initialData: mergedInitialData
        }) : Editor.create(mergedInitialData, mergedConfig));
        const editorData = editor.getFullData();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overwriteObject"])({
            ...editorData
        }, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overwriteObject"])({
            ...editor.getRootsAttributes()
        }, attributes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overwriteArray"])(Object.keys(editorData), roots);
        if (props.disabled) {
            editor.enableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID);
        }
        const modelDocument = editor.model.document;
        const viewDocument = editor.editing.view.document;
        modelDocument.on("change:data", (evt)=>onChangeData(editor, evt));
        editor.on("addRoot", (evt, root)=>onAddRoot(editor, evt, root));
        editor.on("detachRoot", (evt, root)=>onDetachRoot(editor, evt, root));
        viewDocument.on("focus", (event)=>{
            if (props.onFocus) {
                props.onFocus(event, editor);
            }
        });
        viewDocument.on("blur", (event)=>{
            if (props.onBlur) {
                props.onBlur(event, editor);
            }
        });
        return editor;
    });
    const _destroyEditor = (initializeResult)=>{
        const { watchdog, instance } = initializeResult;
        return new Promise((resolve, reject)=>{
            setTimeout(async ()=>{
                try {
                    if (watchdog) {
                        await watchdog.destroy();
                        return resolve();
                    }
                    if (instance) {
                        await instance.destroy();
                        return resolve();
                    }
                    resolve();
                } catch (e) {
                    console.error(e);
                    reject(e);
                }
            });
        });
    };
    const _initializeEditor = async ()=>{
        const supports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInstalledCKBaseFeatures"])();
        if (props.disableWatchdog) {
            const instance = await _createEditor(props.data, _getConfig());
            return {
                instance,
                watchdog: null
            };
        }
        const watchdog = (()=>{
            if (isContextWatchdogReadyToUse(context)) {
                return new EditorWatchdogAdapter(context.watchdog);
            }
            return new props.editor.EditorWatchdog(props.editor, props.watchdogConfig);
        })();
        const totalRestartsRef = {
            current: 0
        };
        const watchdogEditorCreator = async (config)=>{
            const { onAfterDestroy } = props;
            if (totalRestartsRef.current > 0 && onAfterDestroy && editorRefs.instance.current) {
                onAfterDestroy(editorRefs.instance.current);
            }
            const instance = await _createEditor(data, config);
            if (totalRestartsRef.current > 0) {
                semaphore.unsafeSetValue({
                    instance,
                    watchdog
                });
                setTimeout(()=>{
                    if (props.onReady) {
                        props.onReady(watchdog.editor);
                    }
                });
            }
            totalRestartsRef.current++;
            return instance;
        };
        watchdog.on("error", (_, { error, causesRestart })=>{
            const onError = props.onError || console.error;
            onError(error, {
                phase: "runtime",
                willEditorRestart: causesRestart
            });
        });
        try {
            if (supports.elementConfigAttachment) {
                watchdog.setCreator(watchdogEditorCreator);
                await watchdog.create(_getConfig());
            } else {
                watchdog.setCreator(async (_, config)=>watchdogEditorCreator(config));
                await watchdog.create(data, _getConfig());
            }
        } catch (error) {
            const onError = props.onError || console.error;
            onError(error, {
                phase: "initialization",
                willEditorRestart: false
            });
            throw error;
        }
        return {
            watchdog,
            instance: watchdog.editor
        };
    };
    const _getStateDiff = (previousState, newState)=>{
        const previousStateKeys = Object.keys(previousState);
        const newStateKeys = Object.keys(newState);
        return {
            addedKeys: newStateKeys.filter((key)=>!previousStateKeys.includes(key)),
            removedKeys: previousStateKeys.filter((key)=>!newStateKeys.includes(key))
        };
    };
    const _externalSetData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newData)=>{
        semaphore.runAfterMount(()=>{
            shouldUpdateEditor.current = true;
            setData(newData);
        });
    }, [
        setData
    ]);
    const _externalSetAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newAttributes)=>{
        semaphore.runAfterMount(()=>{
            shouldUpdateEditor.current = true;
            setAttributes(newAttributes);
        });
    }, [
        setAttributes
    ]);
    const toolbarElement = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(EditorToolbarWrapper, {
        ref: semaphoreElementRef,
        editor: editorRefs.instance.current
    });
    useInstantEditorEffect(semaphore.current, ({ instance })=>{
        if (props.disabled) {
            instance.enableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID);
        } else {
            instance.disableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID);
        }
    }, [
        props.disabled
    ]);
    useInstantEditorEffect(semaphore.current, ({ instance })=>{
        if (shouldUpdateEditor.current) {
            shouldUpdateEditor.current = false;
            const dataKeys = Object.keys(data);
            const attributesKeys = Object.keys(attributes);
            if (!dataKeys.every((key)=>attributesKeys.includes(key))) {
                console.error("`data` and `attributes` objects must have the same keys (roots).");
                throw new Error("`data` and `attributes` objects must have the same keys (roots).");
            }
            const editorData = instance.getFullData();
            const editorAttributes = instance.getRootsAttributes();
            const { addedKeys: newRoots, removedKeys: removedRoots } = _getStateDiff(editorData, data || /* istanbul ignore next -- @preserve: It should never happen, data should be always filled. */ {});
            const modifiedRoots = dataKeys.filter((rootName)=>editorData[rootName] !== void 0 && JSON.stringify(editorData[rootName]) !== JSON.stringify(data[rootName]));
            const rootsWithChangedAttributes = attributesKeys.filter((rootName)=>JSON.stringify(editorAttributes[rootName]) !== JSON.stringify(attributes[rootName]));
            const _handleNewRoots = (roots2)=>{
                const supports = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInstalledCKBaseFeatures"])();
                for (const rootName of roots2){
                    const rootAttributes = (attributes == null ? void 0 : attributes[rootName]) || {};
                    const rootData = data[rootName] || "";
                    let attrs = {
                        isUndoable: true
                    };
                    if (supports.rootsConfigEntry) {
                        attrs = {
                            ...attrs,
                            initialData: rootData,
                            modelAttributes: rootAttributes
                        };
                    } else {
                        attrs = {
                            ...attrs,
                            data: rootData,
                            attributes: rootAttributes
                        };
                    }
                    instance.addRoot(rootName, attrs);
                }
            };
            const _handleRemovedRoots = (roots2)=>{
                roots2.forEach((rootName)=>{
                    instance.detachRoot(rootName, true);
                });
            };
            const _updateEditorData = (roots2)=>{
                const dataToUpdate = roots2.reduce((result, rootName)=>({
                        ...result,
                        [rootName]: data[rootName]
                    }), /* @__PURE__ */ Object.create(null));
                instance.data.set(dataToUpdate, {
                    suppressErrorInCollaboration: true
                });
            };
            const _updateEditorAttributes = (writer, roots2)=>{
                for (const rootName of roots2){
                    for (const key of Object.keys(attributes[rootName])){
                        instance.registerRootAttribute(key);
                    }
                    const root = instance.model.document.getRoot(rootName);
                    for (const key of Object.keys(instance.getRootAttributes(rootName))){
                        writer.removeAttribute(key, root);
                    }
                    writer.setAttributes(attributes[rootName], root);
                }
            };
            setTimeout(()=>{
                instance.model.change((writer)=>{
                    _handleNewRoots(newRoots);
                    _handleRemovedRoots(removedRoots);
                    if (modifiedRoots.length) {
                        _updateEditorData(modifiedRoots);
                    }
                    if (rootsWithChangedAttributes.length) {
                        _updateEditorAttributes(writer, rootsWithChangedAttributes);
                    }
                });
            });
        }
    }, [
        data,
        attributes
    ]);
    const editableElements = roots.map((rootName)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(EditorEditable, {
            key: rootName,
            id: rootName,
            rootName,
            semaphore
        }));
    return {
        editor: editorRefs.instance.current,
        editableElements,
        toolbarElement,
        data,
        setData: _externalSetData,
        attributes,
        setAttributes: _externalSetAttributes
    };
};
const useIsUnmountedRef = ()=>{
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mountedRef.current = false;
        return ()=>{
            mountedRef.current = true;
        };
    }, []);
    return mountedRef;
};
const useAsyncCallback = (callback)=>{
    const [asyncState, setAsyncState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        status: "idle"
    });
    const unmountedRef = useIsUnmountedRef();
    const prevExecutionUIDRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const asyncExecutor = useRefSafeCallback(async (...args)=>{
        if (unmountedRef.current || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSSR"])()) {
            return null;
        }
        const currentExecutionUUID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])();
        prevExecutionUIDRef.current = currentExecutionUUID;
        try {
            if (asyncState.status !== "loading") {
                setAsyncState({
                    status: "loading"
                });
            }
            const result = await callback(...args);
            if (!unmountedRef.current && prevExecutionUIDRef.current === currentExecutionUUID) {
                setAsyncState({
                    status: "success",
                    data: result
                });
            }
            return result;
        } catch (error) {
            console.error(error);
            if (!unmountedRef.current && prevExecutionUIDRef.current === currentExecutionUUID) {
                setAsyncState({
                    status: "error",
                    error
                });
            }
        }
        return null;
    });
    return [
        asyncExecutor,
        asyncState
    ];
};
const useAsyncValue = (callback, deps)=>{
    const [asyncCallback, asyncState] = useAsyncCallback(callback);
    useInstantEffect(asyncCallback, deps);
    if (asyncState.status === "idle") {
        return {
            status: "loading"
        };
    }
    return asyncState;
};
function useCKEditorCloud(config) {
    const serializedConfigKey = JSON.stringify(config);
    const result = useAsyncValue(async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$integrations$2d$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadCKEditorCloud"])(config), [
        serializedConfigKey
    ]);
    if (result.status === "success") {
        return {
            ...result.data,
            status: "success"
        };
    }
    return result;
}
const withCKEditorCloud = (config)=>(WrappedComponent)=>{
        const ComponentWithCKEditorCloud = (props)=>{
            var _a, _b;
            const ckeditorCloudResult = useCKEditorCloud(config.cloud);
            switch(ckeditorCloudResult.status){
                // An error occurred while fetching the cloud information.
                case "error":
                    if (!config.renderError) {
                        return "Unable to load CKEditor Cloud data!";
                    }
                    return config.renderError(ckeditorCloudResult.error);
                // The cloud information has been fetched successfully.
                case "success":
                    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(WrappedComponent, {
                        ...props,
                        cloud: ckeditorCloudResult
                    });
                // The cloud information is being fetched.
                default:
                    return (_b = (_a = config.renderLoader) == null ? void 0 : _a.call(config)) != null ? _b : null;
            }
        };
        ComponentWithCKEditorCloud.displayName = "ComponentWithCKEditorCloud";
        return ComponentWithCKEditorCloud;
    };
;
 //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=_957e7627._.js.map