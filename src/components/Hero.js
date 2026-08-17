"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeRow from "./MarqueeRow";

const categories = [
  "Love & marriage",
  "Career & wealth",
  "Vedic chart",
  "KP astrology",
  "Tarot",
  "Numerology",
  "Palmistry",
  "Vastu",
];

const spotlightExperts = [
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=280&h=280&fit=crop&crop=face",
    alt: "Astrologer portrait",
    label: "Vedic · 15 yrs",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=280&h=280&fit=crop&crop=face",
    alt: "Astrologer portrait",
    label: "Tarot · 9 yrs",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=280&fit=crop&crop=face",
    alt: "Astrologer portrait",
    label: "KP · 12 yrs",
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=280&h=280&fit=crop&crop=face",
    alt: "Astrologer portrait",
    label: "Numerology · 8 yrs",
  },
];

export default function Hero() {
  return (
    <section
      id="services"
      className="hero-banner relative overflow-hidden text-white"
      style={{ backgroundColor: "#b52e31" }}
    >
      <div
        className="hero-radial-overlay pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div className="banner-noise pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-4 md:pb-20 md:pt-8">
        <motion.p
          className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-amber-200 md:text-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          First consultation perks • 100% verified astrologers
        </motion.p>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <motion.h1
              className="text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.35rem] lg:leading-[1.06]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              Chat with India&apos;s top astrologers—
              <span className="bg-gradient-to-r from-rose-50 via-amber-100 to-[#ffe0a6] bg-clip-text text-transparent">
                {" "}
                live, private, instant.
              </span>
            </motion.h1>
            <motion.p
              className="mt-5 max-w-xl text-base font-medium leading-relaxed text-rose-50/90 md:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Birth charts, love compatibility, career timing, remedies, and
              more—book a chat or call in seconds on Astro Plus.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
            >
              <a href="#astrologers" className="cta-btn-gold inline-flex items-center gap-2">
                <span aria-hidden>💬</span> Talk to an astrologer
              </a>
              <a href="#how-it-works" className="cta-outline-light">
                How it works
              </a>
            </motion.div>

            <motion.dl
              className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center sm:text-left"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <div className="rounded-2xl border border-white/15 bg-white/5 px-3 py-4 backdrop-blur-md">
                <dt className="text-2xl font-extrabold text-rose-100/80 md:text-3xl">
                  500+
                </dt>
                <dd className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-rose-100/80">
                  Experts
                </dd>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-3 py-4 backdrop-blur-md">
                <dt className="text-2xl font-extrabold text-rose-100/80 md:text-3xl">
                  4.9
                </dt>
                <dd className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-rose-100/80">
                  Avg. rating
                </dd>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-3 py-4 backdrop-blur-md">
                <dt className="text-2xl font-extrabold text-rose-100/80 md:text-3xl">
                  24/7
                </dt>
                <dd className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-rose-100/80">
                  Available
                </dd>
              </div>
            </motion.dl>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square max-h-[min(100vw-2rem,420px)] rounded-[2rem] border border-white/20 bg-gradient-to-br from-white/20 to-transparent p-1 shadow-2xl shadow-black/40 backdrop-blur-sm lg:max-h-[440px]">
              <div className="relative h-full overflow-hidden rounded-[1.85rem] bg-black/40">
                <Image
                  src="/showcase/img1.jpg"
                  alt="Night sky over mountains"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 1024px) 90vw, 440px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent" />
                <p className="absolute bottom-6 left-6 right-6 text-sm font-semibold text-white drop-shadow-md">
                  Guided readings from verified pandits, acharyas, and
                  intuitive specialists—tailored to your birth details.
                </p>
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 flex w-[52%] -translate-y-1/2 flex-col gap-3 max-lg:hidden xl:-right-8">
              {spotlightExperts.map((ex, i) => (
                <motion.div
                  key={`spotlight-${i}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/30 bg-black/50 p-2 pr-4 shadow-xl backdrop-blur-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-2 ring-primary/70">
                    <Image
                      src={ex.src}
                      alt={ex.alt}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-amber-200">Online now</p>
                    <p className="truncate text-sm font-semibold text-white">
                      {ex.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.h2
          className="mt-14 text-center text-sm font-extrabold uppercase tracking-[0.2em] text-rose-100/80 md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Popular categories
        </motion.h2>
        <motion.div className="mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <MarqueeRow items={categories} />
        </motion.div>
        <motion.div className="mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <MarqueeRow items={[...categories].reverse()} slow />
        </motion.div>
      </div>
    </section>
  );
}
