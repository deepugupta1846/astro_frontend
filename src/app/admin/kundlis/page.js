"use client";

import { useCallback, useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";

const emptyForm = {
  title: "",
  notes: "",
  file: null,
};

export default function AdminKundlisPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [editRow, setEditRow] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setErr("");
    setLoading(true);
    try {
      const json = await adminFetch("/api/v1/admin/kundlis");
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

  function openEdit(row) {
    setEditRow(row);
    setForm({
      title: row.title || "",
      notes: row.notes || "",
      file: null,
    });
  }

  function closeEdit() {
    setEditRow(null);
    setForm(emptyForm);
  }

  async function saveEdit(e) {
    e.preventDefault();
    if (!editRow) return;
    setSaving(true);
    setErr("");
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("notes", form.notes);
      if (form.file) fd.append("file", form.file);

      await adminFetch(`/api/v1/admin/kundlis/${editRow.id}`, {
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

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Kundlis</h1>
          <p className="text-sm text-muted">
            All kundli files uploaded by users from the mobile app.
          </p>
        </div>
        <button
          type="button"
          onClick={() => load()}
          className="rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          Refresh
        </button>
      </div>

      {err && (
        <p
          className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800"
          role="alert"
        >
          {err}
        </p>
      )}

      <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="border-b border-border bg-accent/40 text-xs font-semibold uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Uploaded</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-muted">
                  Loading…
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-muted">
                  No kundlis found.
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} className="border-b border-border/80 last:border-0">
                  <td className="px-4 py-3 font-mono text-xs">{r.id}</td>
                  <td className="px-4 py-3">{r.User?.name || "—"}</td>
                  <td className="px-4 py-3">{r.User?.phone || "—"}</td>
                  <td className="px-4 py-3">{r.title || r.originalName || "—"}</td>
                  <td className="px-4 py-3 text-muted">{r.fileType || "—"}</td>
                  <td className="px-4 py-3 text-muted">
                    {r.createdAt ? new Date(r.createdAt).toLocaleString() : "—"}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <a
                      href={r.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-primary hover:underline"
                    >
                      View
                    </a>
                    <span className="text-border"> · </span>
                    <button
                      type="button"
                      onClick={() => openEdit(r)}
                      className="font-medium text-foreground hover:underline"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {editRow && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center">
          <div
            className="w-full max-w-xl rounded-2xl border border-border bg-surface p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-kundli-title"
          >
            <h2 id="edit-kundli-title" className="text-lg font-semibold text-foreground">
              Update kundli #{editRow.id}
            </h2>
            <form onSubmit={saveEdit} className="mt-5 space-y-4">
              <label className="block text-sm font-medium">
                Title
                <input
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                />
              </label>
              <label className="block text-sm font-medium">
                Notes
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                />
              </label>
              <label className="block text-sm font-medium">
                Replace file (optional)
                <input
                  type="file"
                  accept="image/*,.pdf,application/pdf"
                  className="mt-1 block w-full rounded-xl border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-foreground"
                  onChange={(e) =>
                    setForm((f) => ({ ...f, file: e.target.files?.[0] || null }))
                  }
                />
              </label>
              <div className="flex gap-3 pt-1">
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
