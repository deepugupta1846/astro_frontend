"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const storeItems = [
  {
    icon: "💎",
    title: "Gemstones",
    desc: "Certified, energised, originals only",
  },
  {
    icon: "🪔",
    title: "Yantras",
    desc: "Hand-etched in copper and brass",
  },
  {
    icon: "📿",
    title: "Rudraksha",
    desc: "Sourced from verified trees in Nepal",
  },
  {
    icon: "🪵",
    title: "Karungali",
    desc: "Sacred wood for prosperity and protection",
  },
];

export default function ExpertsAndStore() {
  return (
    <section
      id="experts"
      className="border-t border-border bg-brand-muted/60 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
              Chapter 05 · The team
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-[2.35rem]">
              Why Choose Our Astrology Experts?
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted md:text-[15px]">
              <p>
                Our certified astrology experts blend the ancient wisdom of Vedic
                astrology with a modern understanding of life and emotions. Each
                astrologer on Astro Pulse is carefully selected to ensure they
                truly know astrology and speak with kindness. They keep learning
                through teamwork and regular training.
              </p>
              <p>
                Through our remedies and puja services, you&apos;ll find spiritual
                items like gemstones, yantras, and puja tools recommended by your
                astrologer. These are selected to help you connect better with
                planetary energies, with clear step-by-step guidance on safe use.
              </p>
              <p>
                Your satisfaction is our top priority. We offer consultations to
                match your style and budget—simple chats, detailed reports, or
                quick answers. Predictions are based on deep study and real
                experience, not fear or hype.
              </p>
              <p>
                Start with a short consultation to see how it works before
                committing more. With honest pricing and a smooth app experience,
                beginning your spiritual journey on Astro Pulse has never been
                easier.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-border bg-accent/80 p-6 shadow-sm md:p-8">
              <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
                The Astro Pulse store
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                {storeItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-surface px-4 py-5 text-center shadow-sm transition hover:border-primary/25"
                  >
                    <span className="text-3xl" aria-hidden>
                      {item.icon}
                    </span>
                    <p className="mt-3 text-sm font-bold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/#astrologers"
                className="cta-btn mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-base font-bold"
              >
                Talk to astrologers
                <span aria-hidden>→</span>
              </Link>
              <p className="mt-4 text-center text-xs text-muted">
                Browse remedies &amp; book puja on{" "}
                <Link
                  href="/book-puja"
                  className="font-semibold text-primary hover:underline"
                >
                  Book a Puja
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
