"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  {
    n: "1",
    title: "Pick your astrologer",
    body: "Browse verified profiles, ratings, languages, and specialties—then tap to start a chat or voice call.",
  },
  {
    n: "2",
    title: "Share kundli details",
    body: "Send date, time, and birthplace securely in-chat so predictions map to your houses, dasha, and transits.",
  },
  {
    n: "3",
    title: "Get answers & remedies",
    body: "Receive clear guidance, timelines, and simple remedies—revisit history anytime in your account.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-accent/80 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="section-title mb-14 md:mb-16">
            HOW Astro Plus WORKS?
          </h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                className="relative rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-xl font-extrabold text-primary-contrast shadow-lg shadow-primary/30">
                  {s.n}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">{s.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
