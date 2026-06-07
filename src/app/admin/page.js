import Link from "next/link";

export default function AdminHomePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Overview
      </h1>
      <p className="mt-2 text-muted">
        Manage customer accounts, kundli uploads, astrologer withdrawals,
        profiles, remedies, and puja listings. Use the sidebar to switch sections.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          href="/admin/kundlis"
          className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-brand-soft/50"
        >
          <h2 className="text-lg font-semibold text-foreground">Kundlis</h2>
          <p className="mt-2 text-sm text-muted">
            Review all uploaded kundli files and update title, notes, or file.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
            Open kundlis →
          </span>
        </Link>
        <Link
          href="/admin/bookings"
          className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-brand-soft/50"
        >
          <h2 className="text-lg font-semibold text-foreground">Bookings</h2>
          <p className="mt-2 text-sm text-muted">
            View all puja booking requests from users with contact details and status.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
            Open bookings →
          </span>
        </Link>
        <Link
          href="/admin/withdrawals"
          className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-brand-soft/50"
        >
          <h2 className="text-lg font-semibold text-foreground">Withdrawals</h2>
          <p className="mt-2 text-sm text-muted">
            Review astrologer payout requests, bank details, and approve or
            reject with wallet refund.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
            Open withdrawals →
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
        <Link
          href="/admin/remedies"
          className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-brand-soft/50"
        >
          <h2 className="text-lg font-semibold text-foreground">Remedies</h2>
          <p className="mt-2 text-sm text-muted">
            Create and manage remedy content with category, tags, and priority.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
            Open remedies →
          </span>
        </Link>
        <Link
          href="/admin/pujas"
          className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-brand-soft/50"
        >
          <h2 className="text-lg font-semibold text-foreground">Pujas</h2>
          <p className="mt-2 text-sm text-muted">
            Add and manage puja packages with price, category, benefits, and
            priority.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
            Open pujas →
          </span>
        </Link>
      </div>
    </div>
  );
}
