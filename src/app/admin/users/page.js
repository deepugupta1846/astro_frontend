"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { adminFetch } from "@/lib/adminApi";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  role: "user",
  isActive: true,
  walletBalance: "",
  password: "",
};

export default function AdminUsersPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [kundliUser, setKundliUser] = useState(null);
  const [kundliRows, setKundliRows] = useState([]);
  const [kundliLoading, setKundliLoading] = useState(false);
  const [search, setSearch] = useState("");

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((u) => {
      const hay = [
        u.id,
        u.name,
        u.email,
        u.phone,
        u.role,
        u.countryCode,
      ]
        .map((v) => String(v ?? "").toLowerCase())
        .join(" ");
      return hay.includes(q);
    });
  }, [rows, search]);

  const load = useCallback(async () => {
    setErr("");
    setLoading(true);
    try {
      const json = await adminFetch("/api/v1/admin/users");
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
      email: row.email ?? "",
      phone: row.phone ?? "",
      role: row.role ?? "user",
      isActive: Boolean(row.isActive),
      walletBalance:
        row.walletBalance != null ? String(row.walletBalance) : "",
      password: "",
    });
  }

  function closeEdit() {
    setEditId(null);
    setForm(emptyForm);
  }

  async function saveEdit(e) {
    e.preventDefault();
    if (!editId) return;
    setSaving(true);
    try {
      const body = {
        name: form.name.trim() || null,
        email: form.email.trim() || null,
        phone: form.phone.trim(),
        role: form.role,
        isActive: form.isActive,
      };
      if (form.walletBalance !== "") {
        body.walletBalance = Number(form.walletBalance);
      }
      if (form.password.trim()) {
        body.password = form.password.trim();
      }
      await adminFetch(`/api/v1/admin/users/${editId}`, {
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

  async function removeUser(id) {
    if (!window.confirm("Delete this user permanently?")) return;
    try {
      await adminFetch(`/api/v1/admin/users/${id}`, { method: "DELETE" });
      await load();
    } catch (e) {
      setErr(e.message);
    }
  }

  async function openKundlis(user) {
    setKundliUser(user);
    setKundliRows([]);
    setKundliLoading(true);
    setErr("");
    try {
      const json = await adminFetch(`/api/v1/admin/users/${user.id}/kundlis`);
      setKundliRows(json?.data?.kundlis || []);
    } catch (e) {
      setErr(e.message);
    } finally {
      setKundliLoading(false);
    }
  }

  function closeKundlis() {
    setKundliUser(null);
    setKundliRows([]);
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Users</h1>
          <p className="text-sm text-muted">
            All registered accounts (customers and partners).
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, phone, email, role..."
            className="w-full min-w-[260px] rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2 sm:w-auto"
          />
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
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-border bg-accent/40 text-xs font-semibold uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Active</th>
              <th className="px-4 py-3">Wallet</th>
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
            ) : filteredRows.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-muted">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredRows.map((u) => (
                <tr
                  key={u.id}
                  className="border-b border-border/80 last:border-0"
                >
                  <td className="px-4 py-3 font-mono text-xs">{u.id}</td>
                  <td className="px-4 py-3">{u.phone}</td>
                  <td className="max-w-[180px] truncate px-4 py-3 text-muted">
                    {u.email || "—"}
                  </td>
                  <td className="px-4 py-3">{u.name || "—"}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium capitalize">
                      {u.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {u.isActive ? (
                      <span className="text-emerald-700">Yes</span>
                    ) : (
                      <span className="text-red-700">No</span>
                    )}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">
                    {u.walletBalance ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => openKundlis(u)}
                      className="font-medium text-foreground hover:underline"
                    >
                      Kundlis
                    </button>
                    <span className="text-border"> · </span>
                    <button
                      type="button"
                      onClick={() => openEdit(u)}
                      className="font-medium text-primary hover:underline"
                    >
                      Edit
                    </button>
                    <span className="text-border"> · </span>
                    <button
                      type="button"
                      onClick={() => removeUser(u.id)}
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
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-user-title"
          >
            <h2
              id="edit-user-title"
              className="text-lg font-semibold text-foreground"
            >
              Edit user #{editId}
            </h2>
            <form onSubmit={saveEdit} className="mt-6 space-y-4">
              <label className="block text-sm font-medium">
                Name
                <input
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Phone
                <input
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  required
                />
              </label>
              <label className="block text-sm font-medium">
                Role
                <select
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2"
                  value={form.role}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, role: e.target.value }))
                  }
                >
                  <option value="user">user</option>
                  <option value="astrologer">astrologer</option>
                  <option value="admin">admin</option>
                </select>
              </label>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, isActive: e.target.checked }))
                  }
                />
                Account active
              </label>
              <label className="block text-sm font-medium">
                Wallet balance
                <input
                  type="number"
                  step="0.01"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2"
                  value={form.walletBalance}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, walletBalance: e.target.value }))
                  }
                  placeholder="Leave empty to keep unchanged"
                />
              </label>
              <label className="block text-sm font-medium">
                New password
                <input
                  type="password"
                  autoComplete="new-password"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2"
                  value={form.password}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, password: e.target.value }))
                  }
                  placeholder="Optional — only if resetting password"
                />
              </label>
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

      {kundliUser != null && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center">
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="user-kundli-title"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 id="user-kundli-title" className="text-lg font-semibold text-foreground">
                Kundlis - {kundliUser.name || kundliUser.phone || `User #${kundliUser.id}`}
              </h2>
              <button
                type="button"
                onClick={closeKundlis}
                className="rounded-lg border border-border px-3 py-1.5 text-sm"
              >
                Close
              </button>
            </div>

            {kundliLoading ? (
              <p className="mt-6 text-sm text-muted">Loading kundlis…</p>
            ) : kundliRows.length === 0 ? (
              <p className="mt-6 text-sm text-muted">No kundli uploads found.</p>
            ) : (
              <div className="mt-4 overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[700px] text-left text-sm">
                  <thead className="border-b border-border bg-accent/40 text-xs font-semibold uppercase tracking-wide text-muted">
                    <tr>
                      <th className="px-3 py-2">Title</th>
                      <th className="px-3 py-2">File Type</th>
                      <th className="px-3 py-2">Uploaded At</th>
                      <th className="px-3 py-2 text-right">File</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kundliRows.map((k) => (
                      <tr key={k.id} className="border-b border-border/70 last:border-0">
                        <td className="px-3 py-2">{k.title || k.originalName || "—"}</td>
                        <td className="px-3 py-2 text-muted">{k.fileType || "—"}</td>
                        <td className="px-3 py-2 text-muted">
                          {k.createdAt ? new Date(k.createdAt).toLocaleString() : "—"}
                        </td>
                        <td className="px-3 py-2 text-right">
                          <a
                            href={k.fileUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-primary hover:underline"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
