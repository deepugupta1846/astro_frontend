"use client";

import { useCallback, useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";

const STATUS_OPTIONS = ["pending", "confirmed", "completed", "cancelled"];

export default function AdminBookingsPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [savingId, setSavingId] = useState(null);

  const load = useCallback(async () => {
    setErr("");
    setLoading(true);
    try {
      const json = await adminFetch("/api/v1/admin/puja-bookings");
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

  async function updateStatus(id, status) {
    setErr("");
    setSavingId(id);
    try {
      await adminFetch(`/api/v1/admin/puja-bookings/${id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status }),
      });
      setRows((prev) =>
        prev.map((row) => (row.id === id ? { ...row, status } : row))
      );
    } catch (e) {
      setErr(e.message || "Failed to update booking status");
    } finally {
      setSavingId(null);
    }
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Puja Bookings</h1>
          <p className="text-sm text-muted">
            All booking requests submitted from the website/mobile app.
          </p>
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
        <table className="w-full min-w-[1150px] text-left text-sm">
          <thead className="border-b border-border bg-accent/40 text-xs font-semibold uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Puja</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Preferred</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Created</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={10} className="px-4 py-10 text-center text-muted">
                  Loading...
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={10} className="px-4 py-10 text-center text-muted">
                  No bookings found.
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} className="border-b border-border/80 last:border-0">
                  <td className="px-4 py-3 font-mono text-xs">{r.id}</td>
                  <td className="px-4 py-3">
                    {r.Puja?.title || `Puja #${r.pujaId}`}
                    {r.Puja?.category ? (
                      <p className="text-xs text-muted">{r.Puja.category}</p>
                    ) : null}
                  </td>
                  <td className="px-4 py-3">{r.name || r.User?.name || "—"}</td>
                  <td className="px-4 py-3">{r.phone || r.User?.phone || "—"}</td>
                  <td className="max-w-[180px] truncate px-4 py-3 text-muted">
                    {r.email || r.User?.email || "—"}
                  </td>
                  <td className="px-4 py-3">{r.city || "—"}</td>
                  <td className="px-4 py-3 text-xs text-muted">
                    {r.preferredDate || "—"}
                    {r.preferredTime ? `, ${r.preferredTime}` : ""}
                  </td>
                  <td className="px-4 py-3">{r.amount ? `Rs. ${r.amount}` : "—"}</td>
                  <td className="px-4 py-3">
                    <select
                      value={r.status || "pending"}
                      disabled={savingId === r.id}
                      onChange={(e) => updateStatus(r.id, e.target.value)}
                      className="rounded-lg border border-border bg-background px-2 py-1 text-xs capitalize text-foreground disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s} className="capitalize">
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted">
                    {r.createdAt ? new Date(r.createdAt).toLocaleString() : "—"}
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
