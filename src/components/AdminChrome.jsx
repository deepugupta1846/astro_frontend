"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import AdminGate from "./AdminGate";
import { clearSession, getStoredUser } from "@/lib/adminAuth";
import { adminFetch } from "@/lib/adminApi";

const nav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/kundlis", label: "Kundlis" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/astrologers", label: "Astrologers" },
  { href: "/admin/remedies", label: "Remedies" },
  { href: "/admin/pujas", label: "Pujas" },
];

export default function AdminChrome({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const user = getStoredUser();
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifRows, setNotifRows] = useState([]);
  const [notifLoading, setNotifLoading] = useState(false);
  const notifRef = useRef(null);

  const currentTitle = useMemo(() => {
    const item = nav.find((n) =>
      n.href === "/admin" ? pathname === "/admin" : pathname.startsWith(n.href)
    );
    return item?.label || "Admin";
  }, [pathname]);

  const unreadCount = useMemo(
    () => notifRows.filter((n) => !n.isRead).length,
    [notifRows]
  );

  useEffect(() => {
    function onDocClick(e) {
      if (!notifRef.current) return;
      if (!notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  async function loadNotifications() {
    setNotifLoading(true);
    try {
      const json = await adminFetch("/api/v1/admin/notifications");
      setNotifRows(json.data || []);
    } catch {
      setNotifRows([]);
    } finally {
      setNotifLoading(false);
    }
  }

  async function toggleNotifications() {
    const next = !notifOpen;
    setNotifOpen(next);
    if (next) {
      await loadNotifications();
    }
  }

  function signOut() {
    clearSession();
    router.replace("/sign-in");
  }

  return (
    <AdminGate>
      <div className="flex min-h-screen bg-background">
        <aside className="hidden w-56 shrink-0 flex-col border-r border-border bg-surface py-6 md:flex">
          <div className="px-4 pb-6">
            <Link
              href="/"
              className="text-sm font-bold tracking-tight text-foreground"
            >
              Astro Pulse
            </Link>
            <p className="mt-1 text-xs text-muted">Admin</p>
          </div>
          <nav className="flex flex-1 flex-col gap-0.5 px-2">
            {nav.map((item) => {
              const active =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand-soft text-foreground"
                      : "text-muted hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto border-t border-border px-4 pt-4">
            {user?.email && (
              <p className="truncate text-xs text-muted" title={user.email}>
                {user.email}
              </p>
            )}
            <button
              type="button"
              onClick={signOut}
              className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2 text-left text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Sign out
            </button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="border-b border-border bg-surface/90 px-4 py-3 backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  Admin Panel
                </p>
                <h1 className="truncate text-base font-bold text-foreground md:text-lg">
                  {currentTitle}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative" ref={notifRef}>
                  <button
                    type="button"
                    onClick={toggleNotifications}
                    className="relative rounded-xl border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-accent"
                    aria-label="Notifications"
                  >
                    🔔
                    {unreadCount > 0 && (
                      <span className="absolute -right-1 -top-1 rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white">
                        {unreadCount > 9 ? "9+" : unreadCount}
                      </span>
                    )}
                  </button>

                  {notifOpen && (
                    <div className="absolute right-0 z-50 mt-2 w-[320px] max-w-[90vw] overflow-hidden rounded-2xl border border-border bg-surface shadow-xl">
                      <div className="border-b border-border px-3 py-2 text-sm font-semibold">
                        Notifications
                      </div>
                      <div className="max-h-80 overflow-auto">
                        {notifLoading ? (
                          <p className="px-3 py-4 text-sm text-muted">Loading...</p>
                        ) : notifRows.length === 0 ? (
                          <p className="px-3 py-4 text-sm text-muted">
                            No notifications yet.
                          </p>
                        ) : (
                          notifRows.map((n) => (
                            <div
                              key={n.id}
                              className={`border-b border-border/70 px-3 py-2 last:border-0 ${
                                n.isRead ? "bg-surface" : "bg-brand-soft/30"
                              }`}
                            >
                              <p className="text-sm font-semibold text-foreground">
                                {n.title || "Notification"}
                              </p>
                              {n.body ? (
                                <p className="mt-0.5 text-xs text-muted">{n.body}</p>
                              ) : null}
                              <p className="mt-1 text-[11px] text-muted">
                                {n.createdAt
                                  ? new Date(n.createdAt).toLocaleString()
                                  : ""}
                              </p>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={signOut}
                  className="rounded-xl border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-accent"
                >
                  Sign out
                </button>
              </div>
            </div>
            <nav className="mt-3 flex flex-wrap gap-2 md:hidden">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="flex-1 overflow-auto p-4 md:p-8">{children}</main>
        </div>
      </div>
    </AdminGate>
  );
}
