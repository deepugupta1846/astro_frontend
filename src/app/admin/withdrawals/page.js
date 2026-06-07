"use client";

import { useCallback, useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";

const STATUS_OPTIONS = ["pending", "approved", "rejected", "cancelled"];

function formatInr(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n)) return "—";
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

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

export default function AdminWithdrawalsPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
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
      const path = `/api/v1/admin/withdrawals?${qs.toString()}`;
      const json = await adminFetch(path);
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
      const json = await adminFetch(`/api/v1/admin/withdrawals/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      const updated = json.data;
      setRows((prev) =>
        prev.map((row) =>
          row.id === id
            ? {
                ...row,
                ...updated,
                status: updated?.status ?? status,
                rejectionReason:
                  updated?.rejectionReason ?? body.rejectionReason ?? row.rejectionReason,
              }
            : row
        )
      );
      setRejectingId(null);
      setRejectReason("");
    } catch (e) {
      setErr(e.message || "Failed to update withdrawal");
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
            Withdrawal requests
          </h1>
          <p className="text-sm text-muted">
            Astrologer payout requests with bank details. Approve after
            verifying transfer; reject or cancel to refund wallet balance.
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
            disabled={loading}
            className="rounded-xl border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-accent disabled:opacity-60"
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
        <table className="w-full min-w-[1280px] text-left text-sm">
          <thead className="border-b border-border bg-accent/40 text-xs font-semibold uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Astrologer</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Bank account</th>
              <th className="px-4 py-3">IFSC / Bank</th>
              <th className="px-4 py-3">Wallet</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={9} className="px-4 py-10 text-center text-muted">
                  Loading...
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-10 text-center text-muted">
                  No withdrawal requests found.
                </td>
              </tr>
            ) : (
              rows.map((r) => {
                const isPending = r.status === "pending";
                const busy = savingId === r.id;
                return (
                  <tr
                    key={r.id}
                    className="border-b border-border/80 align-top last:border-0"
                  >
                    <td className="px-4 py-3 font-mono text-xs">{r.id}</td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-foreground">
                        {r.astrologer?.name || `Astrologer #${r.astrologerId}`}
                      </p>
                      <p className="text-xs text-muted">
                        {r.astrologer?.phone || "—"}
                      </p>
                      <p className="text-xs text-muted">
                        ID {r.astrologerId}
                        {r.requestedByUserId
                          ? ` · User ${r.requestedByUserId}`
                          : ""}
                      </p>
                    </td>
                    <td className="px-4 py-3 font-semibold text-foreground">
                      {formatInr(r.amount)}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${statusBadgeClass(r.status)}`}
                      >
                        {r.status || "—"}
                      </span>
                      {r.rejectionReason ? (
                        <p
                          className="mt-1 max-w-[200px] text-xs text-red-700"
                          title={r.rejectionReason}
                        >
                          {r.rejectionReason}
                        </p>
                      ) : null}
                    </td>
                    <td className="px-4 py-3">
                      <p>{r.accountHolderName || "—"}</p>
                      <p className="font-mono text-xs text-muted">
                        {r.accountNumber || "—"}
                      </p>
                      {r.branchName ? (
                        <p className="text-xs text-muted">{r.branchName}</p>
                      ) : null}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-mono text-xs">{r.ifscCode || "—"}</p>
                      <p className="text-xs text-muted">{r.bankName || "—"}</p>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted">
                      {r.astrologer?.walletBalance != null
                        ? formatInr(r.astrologer.walletBalance)
                        : "—"}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted">
                      {r.createdAt
                        ? new Date(r.createdAt).toLocaleString()
                        : "—"}
                    </td>
                    <td className="px-4 py-3">
                      {isPending ? (
                        rejectingId === r.id ? (
                          <div className="min-w-[220px] space-y-2">
                            <input
                              type="text"
                              placeholder="Rejection reason"
                              value={rejectReason}
                              onChange={(e) => setRejectReason(e.target.value)}
                              className="w-full rounded-lg border border-border bg-background px-2 py-1.5 text-xs"
                            />
                            <div className="flex flex-wrap gap-1">
                              <button
                                type="button"
                                disabled={busy}
                                onClick={() => confirmReject(r.id)}
                                className="rounded-lg bg-red-600 px-2 py-1 text-xs font-semibold text-white disabled:opacity-60"
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
                          <div className="flex flex-col gap-1">
                            <button
                              type="button"
                              disabled={busy}
                              onClick={() => updateStatus(r.id, "approved")}
                              className="rounded-lg bg-emerald-600 px-2 py-1 text-xs font-semibold text-white disabled:opacity-60"
                            >
                              Approve
                            </button>
                            <button
                              type="button"
                              disabled={busy}
                              onClick={() => startReject(r.id)}
                              className="rounded-lg border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-800 disabled:opacity-60"
                            >
                              Reject
                            </button>
                            <button
                              type="button"
                              disabled={busy}
                              onClick={() => updateStatus(r.id, "cancelled")}
                              className="rounded-lg border border-border px-2 py-1 text-xs text-muted disabled:opacity-60"
                            >
                              Cancel
                            </button>
                          </div>
                        )
                      ) : (
                        <span className="text-xs text-muted">—</span>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
