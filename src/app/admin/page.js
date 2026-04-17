import Link from "next/link";

export default function AdminHomePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Overview
      </h1>
      <p className="mt-2 text-muted">
        Manage customer accounts and astrologer profiles. Use the sidebar to
        switch sections.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/users"
          className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-brand-soft/50"
        >
          <h2 className="text-lg font-semibold text-foreground">Users</h2>
          <p className="mt-2 text-sm text-muted">
            View and edit roles, wallet balance, and account status.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
            Open users →
          </span>
        </Link>
        <Link
          href="/admin/astrologers"
          className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-brand-soft/50"
        >
          <h2 className="text-lg font-semibold text-foreground">
            Astrologers
          </h2>
          <p className="mt-2 text-sm text-muted">
            Verify profiles, toggle availability, and adjust consultation
            settings.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
            Open astrologers →
          </span>
        </Link>
      </div>
    </div>
  );
}
