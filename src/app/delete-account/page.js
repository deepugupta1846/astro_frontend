import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeleteAccountForm from "@/components/DeleteAccountForm";
import Reveal from "@/components/Reveal";
import { LEGAL_CONTACT_EMAIL } from "@/content/legalPolicies";

export const metadata = {
  title: "Delete Account | Astro Plus",
  description:
    "Request permanent deletion of your Astro Plus account and personal data after OTP verification. Available on the web and in the mobile app.",
};

const warnings = [
  "Your wallet balance and consultation history will be permanently deleted once the request is approved.",
  "Uploaded kundlis and birth details will be permanently deleted.",
  "You cannot log in while a deletion request is pending (temporary deactivation is not the final step).",
  "Active consultations must be ended before submitting a request.",
  "Limited payment or tax records may be kept only where required by law or for fraud prevention — see our Privacy Policy.",
];

export default function DeleteAccountPage() {
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
            Account &amp; privacy
          </p>
          <h1 className="mt-4 text-center text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Delete your account
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium text-white/85 md:text-lg">
            Request permanent deletion of your Astro Plus account and associated
            personal data. No app login is required on this page — verify with
            OTP. You can also delete from Profile in the mobile app.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <Reveal>
          <div className="mb-10 rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="font-bold text-foreground">Before you continue</h2>
            <ul className="mt-4 space-y-2">
              {warnings.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Details are in our{" "}
              <Link
                href="/data-deletion-policy"
                className="font-semibold text-primary hover:underline"
              >
                Data Deletion Policy
              </Link>
              {" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              {" · "}
              Need help?{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-primary hover:underline"
              >
                Contact support
              </Link>
              {" "}
              or email{" "}
              <a
                href={`mailto:${LEGAL_CONTACT_EMAIL}`}
                className="font-semibold text-primary hover:underline"
              >
                {LEGAL_CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <DeleteAccountForm />
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
