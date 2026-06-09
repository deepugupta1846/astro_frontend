"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL || "#";
const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL || "#";

function StoreBadge({ href, label, children }) {
  return (
    <a
      href={href}
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noopener noreferrer"}
      aria-label={label}
      className="inline-flex items-center gap-2.5 rounded-xl bg-[#1a1a1a] px-4 py-2.5 text-white shadow-md transition hover:bg-black hover:shadow-lg"
    >
      {children}
    </a>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 fill-current" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
      <path
        fill="#00D9FF"
        d="M3.6 2.4A1.2 1.2 0 0 0 2.4 3.6v16.8a1.2 1.2 0 0 0 1.2 1.2h.3l10.2-9.6-10.2-9.6h-.3z"
      />
      <path
        fill="#FFD500"
        d="M14.1 11.4 4.5 3.9v16.2l9.6-8.5z"
      />
      <path
        fill="#FF3A44"
        d="M14.1 11.4 4.5 19.8l12.9-7.2-3.3-1.2z"
      />
      <path
        fill="#00F076"
        d="M17.4 10.2 4.5 3.9l9.6 7.5 3.3-1.2z"
      />
    </svg>
  );
}

export default function AppDownload({ showViewAllLink = false }) {
  return (
    <section
      id="download-app"
      className="border-t border-border bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl bg-brand-muted shadow-[0_20px_60px_rgb(0_0_0/0.06)] ring-1 ring-border/60">
          <div className="grid items-center gap-10 p-8 md:p-12 lg:grid-cols-2 lg:gap-6 lg:p-14">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
                Astro Pulse for iOS &amp; Android
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
                India&apos;s trusted astrology app.
                <br />
                Always with you.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                Chat with astrologers anytime. Get daily horoscopes, free kundli,
                compatibility reports &amp; muhurat alerts — all in one app.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <StoreBadge href={APP_STORE_URL} label="Download on the App Store">
                  <AppleIcon />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] opacity-80">
                      Download on the
                    </span>
                    <span className="block text-sm font-semibold">App Store</span>
                  </span>
                </StoreBadge>
                <StoreBadge href={PLAY_STORE_URL} label="Get it on Google Play">
                  <PlayIcon />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] opacity-80">GET IT ON</span>
                    <span className="block text-sm font-semibold">Google Play</span>
                  </span>
                </StoreBadge>
              </div>

              <div className="mt-10 flex flex-wrap gap-10">
                <div>
                  <p className="text-2xl font-extrabold text-foreground">
                    4.8 <span className="text-primary">★</span>
                  </p>
                  <p className="mt-1 text-sm text-muted">Play Store · 500+ reviews</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-foreground">1K+</p>
                  <p className="mt-1 text-sm text-muted">customers</p>
                </div>
              </div>

              {showViewAllLink && (
                <Link
                  href="/download-app"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-hover"
                >
                  Learn more about the app
                  <span aria-hidden>→</span>
                </Link>
              )}
            </Reveal>

            <Reveal delay={0.12} className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] md:max-w-[320px]">
                <div
                  className="absolute -inset-4 rounded-[3rem] bg-primary/10 blur-2xl"
                  aria-hidden
                />
                <div className="relative -rotate-6 rounded-[2.75rem] border-[10px] border-[#1a1a1a] bg-[#1a1a1a] p-1 shadow-2xl shadow-black/25 transition hover:-rotate-3">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[2.25rem] bg-hero-deep">
                    <Image
                      src="/showcase/img1.jpg"
                      alt="Astro Pulse app — talk to verified astrologers"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 320px"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"
                      aria-hidden
                    />
                    <p className="absolute left-4 right-4 top-5 text-center text-xs font-bold uppercase tracking-wide text-white drop-shadow-md">
                      India&apos;s trusted Astrology App
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/40 to-transparent" />
                  </div>
                  <div
                    className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-[#1a1a1a]"
                    aria-hidden
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
