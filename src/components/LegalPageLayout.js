import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

const legalLinks = [
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/data-deletion-policy", label: "Data Deletion" },
  { href: "/refund-policy", label: "Refund & Cancellation" },
  { href: "/delete-account", label: "Delete Account" },
];

export default function LegalPageLayout({
  title,
  description,
  lastUpdated = "June 2026",
  currentPath,
  children,
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="hero-banner hero-gradient relative overflow-hidden text-white">
        <div
          className="hero-radial-overlay pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-white/90">
            Legal
          </p>
          <h1 className="mt-4 text-center text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium text-white/85 md:text-lg">
              {description}
            </p>
          ) : null}
          <p className="mt-4 text-center text-xs text-white/70">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <nav
          aria-label="Related legal pages"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {legalLinks.map((link) => {
            const active = currentPath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "border-primary bg-brand-soft text-foreground"
                    : "border-border bg-surface text-muted hover:border-primary/30 hover:text-foreground"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <article className="legal-prose rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-10">
          {children}
        </article>
      </section>

      <Footer />
    </div>
  );
}
