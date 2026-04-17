"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import AdminGate from "./AdminGate";
import { clearSession, getStoredUser } from "@/lib/adminAuth";

const nav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/astrologers", label: "Astrologers" },
];

export default function AdminChrome({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const user = getStoredUser();

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
          <header className="border-b border-border bg-surface/90 px-4 py-3 backdrop-blur md:hidden">
            <div className="flex items-center justify-between gap-2">
              <Link href="/admin" className="text-sm font-bold">
                Admin
              </Link>
              <button
                type="button"
                onClick={signOut}
                className="text-sm font-medium text-primary"
              >
                Sign out
              </button>
            </div>
            <nav className="mt-3 flex flex-wrap gap-2">
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
