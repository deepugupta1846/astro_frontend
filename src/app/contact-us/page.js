import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { contactChannels, contactTopics } from "@/content/contactUs";
import { LEGAL_CONTACT_EMAIL } from "@/content/legalPolicies";

export const metadata = {
  title: "Contact Us | Astro Plus",
  description:
    "Get in touch with Astro Plus support for help with consultations, wallet, refunds, privacy, and account issues.",
};

export default function ContactUsPage() {
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
            We&apos;re here to help
          </p>
          <h1 className="mt-4 text-center text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Contact us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium text-white/88 md:text-lg">
            Questions about consultations, wallet balance, refunds, or your
            account? Reach our support team—we&apos;ll get back to you as soon as
            we can.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {contactChannels.map((channel, i) => (
            <Reveal key={channel.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-accent/60 p-6">
                <h2 className="font-bold text-foreground">{channel.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {channel.description}
                </p>
                <p className="mt-4 font-semibold text-foreground">{channel.value}</p>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="mt-4 inline-flex text-sm font-semibold text-primary transition hover:underline"
                  >
                    {channel.cta} →
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="section-title mb-4 text-left">Common topics</h2>
                <p className="text-sm leading-relaxed text-muted">
                  Include your registered mobile number or email in your message
                  so we can locate your account faster.
                </p>
                <ul className="mt-6 space-y-3">
                  {contactTopics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-muted">
                  For legal and policy questions, see our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  ,{" "}
                  <Link
                    href="/terms-and-conditions"
                    className="font-semibold text-primary hover:underline"
                  >
                    Terms &amp; Conditions
                  </Link>
                  , and{" "}
                  <Link
                    href="/refund-policy"
                    className="font-semibold text-primary hover:underline"
                  >
                    Refund Policy
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-3">
              <Reveal delay={0.08}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 text-center">
        <p className="text-sm text-muted">
          Prefer email? Write to{" "}
          <a
            href={`mailto:${LEGAL_CONTACT_EMAIL}`}
            className="font-semibold text-primary hover:underline"
          >
            {LEGAL_CONTACT_EMAIL}
          </a>
        </p>
      </section>

      <Footer />
    </div>
  );
}
