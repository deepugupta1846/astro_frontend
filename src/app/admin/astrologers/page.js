"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";

export default function AdminAstrologersPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const load = useCallback(async () => {
    setErr("");
    setLoading(true);
    try {
      const json = await adminFetch("/api/v1/admin/astrologers");
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
    setEditId(row.id);
    setForm({
      name: row.name ?? "",
      phone: row.phone ?? "",
      countryCode: row.countryCode ?? "+91",
      email: row.email ?? "",
      bio: row.bio ?? "",
      address: row.address ?? "",
      consultationFeePerMin:
        row.consultationFeePerMin != null
          ? String(row.consultationFeePerMin)
          : "",
      isVerified: Boolean(row.isVerified),
      isActive: Boolean(row.isActive),
      chatEnabled: row.chatEnabled !== false,
      callEnabled: row.callEnabled !== false,
      videoEnabled: Boolean(row.videoEnabled),
    });
  }

  function closeEdit() {
    setEditId(null);
    setForm(null);
  }

  async function saveEdit(e) {
    e.preventDefault();
    if (!editId || !form) return;
    setSaving(true);
    try {
      const body = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        countryCode: form.countryCode.trim() || "+91",
        email: form.email.trim() || null,
        bio: form.bio.trim() || null,
        address: form.address.trim() || null,
        isVerified: form.isVerified,
        isActive: form.isActive,
        chatEnabled: form.chatEnabled,
        callEnabled: form.callEnabled,
        videoEnabled: form.videoEnabled,
      };
      if (form.consultationFeePerMin !== "") {
        body.consultationFeePerMin = Number(form.consultationFeePerMin);
      }
      await adminFetch(`/api/v1/admin/astrologers/${editId}`, {
        method: "PUT",
        body: JSON.stringify(body),
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
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Astrologers</h1>
          <p className="text-sm text-muted">
            Partner profiles, verification, and consultation settings.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/admin/astrologers/create"
            className="rounded-xl border border-primary bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Create astrologer
          </Link>
          <button
            type="button"
            onClick={() => load()}
            className="rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            Refresh
          </button>
        </div>
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
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="border-b border-border bg-accent/40 text-xs font-semibold uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Verified</th>
              <th className="px-4 py-3">Active</th>
              <th className="px-4 py-3">₹/min</th>
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
                  No astrologers yet.
                </td>
              </tr>
            ) : (
              rows.map((a) => (
                <tr
                  key={a.id}
                  className="border-b border-border/80 last:border-0"
                >
                  <td className="px-4 py-3 font-mono text-xs">{a.id}</td>
                  <td className="px-4 py-3 font-medium">{a.name}</td>
                  <td className="px-4 py-3">{a.phone}</td>
                  <td className="max-w-[160px] truncate px-4 py-3 text-muted">
                    {a.email || "—"}
                  </td>
                  <td className="px-4 py-3">
                    {a.isVerified ? (
                      <span className="text-emerald-700">Yes</span>
                    ) : (
                      <span className="text-amber-800">No</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {a.isActive ? (
                      <span className="text-emerald-700">Yes</span>
                    ) : (
                      <span className="text-red-700">No</span>
                    )}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">
                    {a.consultationFeePerMin ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => openEdit(a)}
                      className="font-medium text-primary hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {editId != null && form && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center">
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-astro-title"
          >
            <h2
              id="edit-astro-title"
              className="text-lg font-semibold text-foreground"
            >
              Edit astrologer #{editId}
            </h2>
            <form onSubmit={saveEdit} className="mt-6 space-y-4">
              <label className="block text-sm font-medium">
                Name
                <input
                  required
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Phone
                <input
                  required
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Country code
                <input
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={form.countryCode}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, countryCode: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Bio
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={form.bio}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, bio: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Address
                <textarea
                  rows={2}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={form.address}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, address: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Consultation fee (per minute)
                <input
                  type="number"
                  step="0.01"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={form.consultationFeePerMin}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      consultationFeePerMin: e.target.value,
                    }))
                  }
                />
              </label>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <label className="flex items-center gap-2 font-medium">
                  <input
                    type="checkbox"
                    checked={form.isVerified}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, isVerified: e.target.checked }))
                    }
                  />
                  Verified
                </label>
                <label className="flex items-center gap-2 font-medium">
                  <input
                    type="checkbox"
                    checked={form.isActive}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, isActive: e.target.checked }))
                    }
                  />
                  Active
                </label>
                <label className="flex items-center gap-2 font-medium">
                  <input
                    type="checkbox"
                    checked={form.chatEnabled}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, chatEnabled: e.target.checked }))
                    }
                  />
                  Chat
                </label>
                <label className="flex items-center gap-2 font-medium">
                  <input
                    type="checkbox"
                    checked={form.callEnabled}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, callEnabled: e.target.checked }))
                    }
                  />
                  Call
                </label>
                <label className="flex items-center gap-2 font-medium">
                  <input
                    type="checkbox"
                    checked={form.videoEnabled}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, videoEnabled: e.target.checked }))
                    }
                  />
                  Video
                </label>
              </div>
              <div className="flex gap-3 pt-2">
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
