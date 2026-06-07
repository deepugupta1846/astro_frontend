import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeleteAccountForm from "@/components/DeleteAccountForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Delete Account | Astro Pulse",
  description:
    "Request permanent deletion of your Astro Pulse account and personal data after OTP verification.",
};

const warnings = [
  "Your wallet balance and consultation history will be removed.",
  "Uploaded kundlis and birth details will be permanently deleted.",
  "You cannot log in while a deletion request is pending.",
  "Active consultations must be ended before submitting a request.",
];

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="hero-banner relative overflow-hidden text-white">
        <div
          className="hero-radial-overlay pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-primary">
            Account &amp; privacy
          </p>
          <h1 className="mt-4 text-center text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Delete your account
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium text-white/88 md:text-lg">
            Verify your phone with OTP to submit a deletion request. Our admin
            team will review and permanently remove your data.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <Reveal>
          <div className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="font-bold text-amber-950">Before you continue</h2>
            <ul className="mt-4 space-y-2">
              {warnings.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-amber-900"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-amber-900/80">
              Need help instead?{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-primary hover:underline"
              >
                Contact support
              </Link>
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
