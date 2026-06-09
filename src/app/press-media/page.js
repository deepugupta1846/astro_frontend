import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PressMedia from "@/components/PressMedia";
import Reveal from "@/components/Reveal";
import { galleryPhotos, pressItems } from "@/content/pressMedia";
import { LEGAL_CONTACT_EMAIL } from "@/content/legalPolicies";

export const metadata = {
  title: "Press & Media | Astro Pulse",
  description:
    "Astro Pulse press coverage, awards, events, and media gallery. Contact our team for press enquiries.",
};

export default function PressMediaPage() {
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
            Press &amp; media
          </p>
          <h1 className="mt-4 text-center text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Astro Pulse in the spotlight
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/80 md:text-lg">
            Awards, community events, and recognition for bringing trusted
            astrology consultations to millions of users across India.
          </p>
        </div>
      </section>

      <PressMedia />

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
              All coverage
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              Latest stories &amp; highlights
            </h2>
          </Reveal>

          <div className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pressItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.04} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:border-primary/25 hover:shadow-md">
                  <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-brand-muted">
                    <Image
                      src={item.image}
                      alt={item.headline}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex min-h-[8.5rem] flex-1 flex-col p-5">
                    <h3 className="min-h-[5.25rem] line-clamp-3 text-base font-bold leading-snug text-foreground">
                      {item.headline}
                    </h3>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-[11px] font-semibold uppercase tracking-wide text-muted">
                      <span>{item.source}</span>
                      <span className="text-foreground/70">{item.date}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-brand-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
              Photo gallery
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              Events &amp; milestones
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              Moments from award ceremonies, community outreach, and industry
              recognition across India.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {galleryPhotos.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 0.03}>
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
              Media enquiries
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              Get in touch with our press team
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              For interviews, brand assets, partnership announcements, or press
              releases, email us and we&apos;ll respond within 2 business days.
            </p>
            <a
              href={`mailto:${LEGAL_CONTACT_EMAIL}?subject=Press%20enquiry%20-%20Astro%20Pulse`}
              className="cta-btn mt-8 inline-flex items-center justify-center rounded-2xl px-8 py-3.5 text-base font-bold"
            >
              {LEGAL_CONTACT_EMAIL}
            </a>
            <p className="mt-6 text-sm text-muted">
              Or visit our{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-primary hover:underline"
              >
                contact page
              </Link>{" "}
              for general support.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
