"use client";

import { useCallback, useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";

const STATUS_OPTIONS = ["pending", "approved", "rejected", "cancelled"];

function statusBadgeClass(status) {
  switch (status) {
    case "approved":
      return "bg-emerald-100 text-emerald-800";
    case "rejected":
      return "bg-red-100 text-red-800";
    case "cancelled":
      return "bg-slate-100 text-slate-700";
    case "pending":
    default:
      return "bg-amber-100 text-amber-900";
  }
}

export default function AdminAccountDeletionsPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [statusFilter, setStatusFilter] = useState("pending");
  const [savingId, setSavingId] = useState(null);
  const [rejectingId, setRejectingId] = useState(null);
  const [rejectReason, setRejectReason] = useState("");

  const load = useCallback(async () => {
    setErr("");
    setLoading(true);
    try {
      const qs = new URLSearchParams();
      if (statusFilter) qs.set("status", statusFilter);
      qs.set("limit", "100");
      const json = await adminFetch(
        `/api/v1/admin/account-deletion-requests?${qs.toString()}`
      );
      setRows(json.data || []);
    } catch (e) {
      setErr(e.message);
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    load();
  }, [load]);

  async function updateStatus(id, status, rejectionReason) {
    setErr("");
    setSavingId(id);
    try {
      const body = { status };
      if (status === "rejected") {
        body.rejectionReason = rejectionReason?.trim() || "Rejected by admin";
      }
      const json = await adminFetch(
        `/api/v1/admin/account-deletion-requests/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(body),
        }
      );
      const updated = json.data;
      setRows((prev) =>
        prev.map((row) =>
          row.id === id
            ? {
                ...row,
                ...updated,
                status: updated?.status ?? status,
                rejectionReason:
                  updated?.rejectionReason ??
                  body.rejectionReason ??
                  row.rejectionReason,
              }
            : row
        )
      );
      setRejectingId(null);
      setRejectReason("");
    } catch (e) {
      setErr(e.message || "Failed to update request");
    } finally {
      setSavingId(null);
    }
  }

  function startReject(id) {
    setRejectingId(id);
    setRejectReason("");
  }

  function cancelReject() {
    setRejectingId(null);
    setRejectReason("");
  }

  function confirmReject(id) {
    const reason = rejectReason.trim();
    if (!reason) {
      setErr("Rejection reason is required");
      return;
    }
    updateStatus(id, "rejected", reason);
  }

  const pendingCount = rows.filter((r) => r.status === "pending").length;

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Account deletion requests
          </h1>
          <p className="text-sm text-muted">
            Users verify by OTP on the website, then request permanent deletion.
            Approve to purge all user data; reject to reactivate the account.
          </p>
          {!loading && pendingCount > 0 ? (
            <p className="mt-2 text-sm font-medium text-amber-800">
              {pendingCount} pending request{pendingCount === 1 ? "" : "s"}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-2 text-sm text-muted">
            Status
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-border bg-background px-2 py-1.5 text-sm capitalize text-foreground"
            >
              <option value="">All</option>
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s} className="capitalize">
                  {s}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={load}
            className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
          >
            Refresh
          </button>
        </div>
      </div>

      {err ? (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {err}
        </p>
      ) : null}

      <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-border bg-accent/50 text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Reason</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Requested</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-muted">
                  Loading…
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-muted">
                  No deletion requests found.
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-border/70 last:border-0"
                >
                  <td className="px-4 py-3 font-mono text-xs">#{row.id}</td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-foreground">
                      {row.user?.name || "—"}
                    </p>
                    <p className="text-xs text-muted">
                      ID {row.userId}
                      {row.user?.role ? ` · ${row.user.role}` : ""}
                      {row.user?.walletBalance > 0
                        ? ` · ₹${row.user.walletBalance}`
                        : ""}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    {row.countryCode} {row.phone}
                  </td>
                  <td className="max-w-xs px-4 py-3 text-muted">
                    {row.reason || "—"}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${statusBadgeClass(row.status)}`}
                    >
                      {row.status}
                    </span>
                    {row.rejectionReason ? (
                      <p className="mt-1 text-xs text-muted">
                        {row.rejectionReason}
                      </p>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-muted">
                    {row.createdAt
                      ? new Date(row.createdAt).toLocaleString()
                      : "—"}
                  </td>
                  <td className="px-4 py-3">
                    {row.status === "pending" ? (
                      rejectingId === row.id ? (
                        <div className="flex min-w-[200px] flex-col gap-2">
                          <input
                            type="text"
                            value={rejectReason}
                            onChange={(e) => setRejectReason(e.target.value)}
                            placeholder="Rejection reason"
                            className="rounded-lg border border-border bg-background px-2 py-1.5 text-sm"
                          />
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => confirmReject(row.id)}
                              disabled={savingId === row.id}
                              className="rounded-lg bg-red-600 px-2 py-1 text-xs font-medium text-white hover:bg-red-700 disabled:opacity-60"
                            >
                              Confirm reject
                            </button>
                            <button
                              type="button"
                              onClick={cancelReject}
                              className="rounded-lg border border-border px-2 py-1 text-xs"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => updateStatus(row.id, "approved")}
                            disabled={savingId === row.id}
                            className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
                          >
                            {savingId === row.id ? "…" : "Approve & delete"}
                          </button>
                          <button
                            type="button"
                            onClick={() => startReject(row.id)}
                            disabled={savingId === row.id}
                            className="rounded-lg border border-red-300 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-50 disabled:opacity-60"
                          >
                            Reject
                          </button>
                        </div>
                      )
                    ) : (
                      <span className="text-xs text-muted">—</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
