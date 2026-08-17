"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

function IconChart() {
  return (
    <svg
      className="h-10 w-10 text-primary"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 8v6M24 34v6M8 24h6M34 24h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      className="h-10 w-10 text-primary"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <path
        d="M24 6 38 12v12c0 10-6 16-14 18-8-2-14-8-14-18V12L24 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m18 24 5 5 10-11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg
      className="h-10 w-10 text-primary"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <rect
        x="8"
        y="12"
        width="32"
        height="30"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 18h32M17 8v6M31 8v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="28" r="2" fill="currentColor" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg
      className="h-10 w-10 text-primary"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <circle cx="18" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M10 38c0-6 4-9 8-9s8 3 8 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M26 38c0-5 3-7 6-7s6 2 6 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconStar() {
  return (
    <svg
      className="h-10 w-10 text-primary"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <path
        d="m24 6 4 12h12l-10 8 4 14-10-8-10 8 4-14-10-8h12L24 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const features = [
  {
    title: "Chart-grade accuracy",
    desc: "Swiss ephemeris + traditional rules for forecasts you can trust.",
    Icon: IconChart,
  },
  {
    title: "Privacy you control",
    desc: "Your birth data stays encrypted; share only what you want.",
    Icon: IconShield,
  },
  {
    title: "Reschedule any session",
    desc: "Life moves—move your live readings without losing credits.",
    Icon: IconCalendar,
  },
  {
    title: "Human + smart AI blend",
    desc: "Instant AI summaries plus optional astrologer deep-dives.",
    Icon: IconPeople,
  },
  {
    title: "Clear, calm guidance",
    desc: "No fear tactics—just practical timing and mindful remedies.",
    Icon: IconStar,
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="section-title mb-14 md:mb-16">WHY CHOOSE Astro Plus</h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <motion.div
                className="flex h-full flex-col items-center rounded-3xl border border-border bg-surface p-6 text-center shadow-sm shadow-primary/10"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
                  <f.Icon />
                </div>
                <h3 className="text-[15px] font-bold leading-snug text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <motion.p
            className="mt-14 text-center text-xl font-extrabold text-foreground md:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted by cosmic seekers everywhere
          </motion.p>
        </Reveal>
      </div>
    </section>
  );
}
