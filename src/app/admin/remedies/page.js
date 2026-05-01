"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { adminFetch } from "@/lib/adminApi";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const emptyForm = {
  title: "",
  slug: "",
  category: "",
  description: "",
  tags: "",
  priority: "0",
  isActive: true,
};

const REMEDY_CATEGORIES = [
  "Tarot",
  "Vastu",
  "Vedic",
  "Kundli",
  "Sports",
  "Transits",
  "Festivals",
  "Business",
  "Gemstones",
  "Numerology",
  "Zodiac Signs",
  "Compatibility",
  "Entertainment",
  "Current Affairs",
  "Daily Horoscope",
  "Mythological Tales",
];

function toTagsInput(tags) {
  if (!Array.isArray(tags) || tags.length === 0) return "";
  return tags.join(", ");
}

function parseTags(raw) {
  return String(raw || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
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

export default function AdminRemediesPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [createForm, setCreateForm] = useState(emptyForm);
  const [creating, setCreating] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [createImageFile, setCreateImageFile] = useState(null);
  const [createImagePreview, setCreateImagePreview] = useState("");
  const [editImageFile, setEditImageFile] = useState(null);
  const [editImagePreview, setEditImagePreview] = useState("");
  const editImageBaselineRef = useRef("");

  const total = rows.length;
  const activeCount = useMemo(
    () => rows.filter((r) => r.isActive).length,
    [rows]
  );

  const load = useCallback(async () => {
    setErr("");
    setLoading(true);
    try {
      const json = await adminFetch("/api/v1/admin/remedies");
      setRows(json.data || []);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function normalizeForm(form) {
    return {
      title: form.title.trim(),
      slug: form.slug.trim() || undefined,
      category: form.category.trim() || null,
      description: form.description.trim(),
      tags: parseTags(form.tags),
      priority: form.priority === "" ? 0 : Number(form.priority),
      isActive: Boolean(form.isActive),
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

      await adminFetch("/api/v1/admin/remedies", {
        method: "POST",
        body: fd,
      });
      revokePreview(createImagePreview);
      setCreateImageFile(null);
      setCreateImagePreview("");
      setCreateForm(emptyForm);
      setShowCreate(false);
      await load();
    } catch (e) {
      setErr(e.message);
    } finally {
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
      isActive: Boolean(row.isActive),
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

      await adminFetch(`/api/v1/admin/remedies/${editId}`, {
        method: "PUT",
        body: fd,
      });
      closeEdit();
      await load();
    } catch (e) {
      setErr(e.message);
    } finally {
      setSaving(false);
    }
  }

  async function removeRemedy(id) {
    if (!window.confirm("Delete this remedy?")) return;
    try {
      await adminFetch(`/api/v1/admin/remedies/${id}`, { method: "DELETE" });
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

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Remedies</h1>
          <p className="text-sm text-muted">
            Manage remedy content shown across app experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShowCreate((v) => !v)}
            className="rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            {showCreate ? "Close form" : "Add remedy"}
          </button>
          <button
            type="button"
            onClick={() => load()}
            className="rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted">
        <span className="rounded-full border border-border bg-surface px-2.5 py-1">
          Total: {total}
        </span>
        <span className="rounded-full border border-border bg-surface px-2.5 py-1">
          Active: {activeCount}
        </span>
      </div>

      {err && (
        <p
          className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800"
          role="alert"
        >
          {err}
        </p>
      )}

      {showCreate && (
        <form
          onSubmit={submitCreate}
          className="mt-6 rounded-2xl border border-border bg-surface p-6 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-foreground">Create remedy</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Title *
              <input
                required
                className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                value={createForm.title}
                onChange={(e) =>
                  setCreateForm((f) => ({ ...f, title: e.target.value }))
                }
              />
            </label>
            <label className="block text-sm font-medium">
              Slug (optional)
              <input
                className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                placeholder="auto-from-title"
                value={createForm.slug}
                onChange={(e) =>
                  setCreateForm((f) => ({ ...f, slug: e.target.value }))
                }
              />
            </label>
            <label className="block text-sm font-medium">
              Category
              <select
                className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                value={createForm.category}
                onChange={(e) =>
                  setCreateForm((f) => ({ ...f, category: e.target.value }))
                }
              >
                <option value="">Select category</option>
                {REMEDY_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium">
              Priority
              <input
                type="number"
                className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                value={createForm.priority}
                onChange={(e) =>
                  setCreateForm((f) => ({ ...f, priority: e.target.value }))
                }
              />
            </label>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={onCreateImageChange}
                className="mt-1 block w-full rounded-xl border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-foreground disabled:opacity-60"
              />
              {createImagePreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={createImagePreview}
                  alt=""
                  className="mt-2 max-h-36 rounded-lg border border-border object-cover"
                />
              ) : (
                <p className="mt-2 text-xs text-muted">
                  Optional — image is sent with Create remedy.
                </p>
              )}
            </div>
            <label className="block text-sm font-medium sm:col-span-2">
              Tags (comma separated)
              <input
                className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                placeholder="career, health, love"
                value={createForm.tags}
                onChange={(e) =>
                  setCreateForm((f) => ({ ...f, tags: e.target.value }))
                }
              />
            </label>
            <div className="block text-sm font-medium sm:col-span-2">
              <span>Description *</span>
              <div className="mt-1 overflow-hidden rounded-xl border border-border bg-background">
                <CKEditor
                  editor={ClassicEditor}
                  data={createForm.description}
                  onChange={(_event, editor) => {
                    const data = editor.getData();
                    setCreateForm((f) => ({ ...f, description: data }));
                  }}
                />
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm font-medium sm:col-span-2">
              <input
                type="checkbox"
                checked={createForm.isActive}
                onChange={(e) =>
                  setCreateForm((f) => ({ ...f, isActive: e.target.checked }))
                }
              />
              Active
            </label>
          </div>
          <button
            type="submit"
            disabled={creating}
            className="cta-btn mt-4 rounded-xl px-5 py-2.5 text-sm font-semibold disabled:opacity-60"
          >
            {creating ? "Creating…" : "Create remedy"}
          </button>
        </form>
      )}

      <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="border-b border-border bg-accent/40 text-xs font-semibold uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Active</th>
              <th className="px-4 py-3">Tags</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-muted">
                  Loading…
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-muted">
                  No remedies yet.
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} className="border-b border-border/80 last:border-0">
                  <td className="px-4 py-3 font-mono text-xs">{r.id}</td>
                  <td className="px-4 py-3 font-medium">{r.title}</td>
                  <td className="px-4 py-3 text-muted">{r.slug}</td>
                  <td className="px-4 py-3">{r.category || "—"}</td>
                  <td className="px-4 py-3">{r.priority ?? 0}</td>
                  <td className="px-4 py-3">
                    {r.isActive ? (
                      <span className="text-emerald-700">Yes</span>
                    ) : (
                      <span className="text-red-700">No</span>
                    )}
                  </td>
                  <td className="max-w-[260px] truncate px-4 py-3 text-muted">
                    {Array.isArray(r.tags) && r.tags.length
                      ? r.tags.join(", ")
                      : "—"}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => openEdit(r)}
                      className="font-medium text-primary hover:underline"
                    >
                      Edit
                    </button>
                    <span className="text-border"> · </span>
                    <button
                      type="button"
                      onClick={() => removeRemedy(r.id)}
                      className="font-medium text-red-700 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {editId != null && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center">
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-remedy-title"
          >
            <h2
              id="edit-remedy-title"
              className="text-lg font-semibold text-foreground"
            >
              Edit remedy #{editId}
            </h2>
            <form onSubmit={saveEdit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Title *
                <input
                  required
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={editForm.title}
                  onChange={(e) =>
                    setEditForm((f) => ({ ...f, title: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Slug
                <input
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={editForm.slug}
                  onChange={(e) =>
                    setEditForm((f) => ({ ...f, slug: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Category
                <select
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={editForm.category}
                  onChange={(e) =>
                    setEditForm((f) => ({ ...f, category: e.target.value }))
                  }
                >
                  <option value="">Select category</option>
                  {REMEDY_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium">
                Priority
                <input
                  type="number"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={editForm.priority}
                  onChange={(e) =>
                    setEditForm((f) => ({ ...f, priority: e.target.value }))
                  }
                />
              </label>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={onEditImageChange}
                  className="mt-1 block w-full rounded-xl border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-foreground disabled:opacity-60"
                />
                {editImagePreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={editImagePreview}
                    alt=""
                    className="mt-2 max-h-36 rounded-lg border border-border object-cover"
                  />
                ) : (
                  <p className="mt-2 text-xs text-muted">No image set.</p>
                )}
                <p className="mt-1 text-xs text-muted">
                  Leave file unchanged to keep the current image.
                </p>
              </div>
              <label className="block text-sm font-medium sm:col-span-2">
                Tags (comma separated)
                <input
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={editForm.tags}
                  onChange={(e) =>
                    setEditForm((f) => ({ ...f, tags: e.target.value }))
                  }
                />
              </label>
              <div className="block text-sm font-medium sm:col-span-2">
                <span>Description *</span>
                <div className="mt-1 overflow-hidden rounded-xl border border-border bg-background">
                  <CKEditor
                    editor={ClassicEditor}
                    data={editForm.description}
                    onChange={(_event, editor) => {
                      const data = editor.getData();
                      setEditForm((f) => ({ ...f, description: data }));
                    }}
                  />
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm font-medium sm:col-span-2">
                <input
                  type="checkbox"
                  checked={editForm.isActive}
                  onChange={(e) =>
                    setEditForm((f) => ({ ...f, isActive: e.target.checked }))
                  }
                />
                Active
              </label>

              <div className="flex gap-3 pt-2 sm:col-span-2">
                <button
                  type="button"
                  onClick={closeEdit}
                  className="flex-1 rounded-xl border border-border py-2.5 text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="cta-btn flex-1 rounded-xl py-2.5 text-sm font-semibold disabled:opacity-60"
                >
                  {saving ? "Saving…" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
