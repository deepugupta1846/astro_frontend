"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is Astro Pulse?",
    a: "Astro Pulse is your personal astrology hub—birth chart, dasha timelines, daily horoscopes, transits, and optional live astrologer sessions in one place.",
  },
  {
    q: "How do I get my birth chart?",
    a: "Enter your birth date, exact time, and city. We compute your Lagna, Moon sign, nakshatra, and divisional charts using Swiss ephemeris-grade data.",
  },
  {
    q: "Can I combine multiple readings in one subscription?",
    a: "Yes. Pick daily insights, love compatibility, career timing, or remedy packs—most plans bundle the readings you use most.",
  },
  {
    q: "How do live sessions work?",
    a: "Choose an astrologer, book a slot, and join in-app video or audio. You can reschedule up until the policy window without losing your credit.",
  },
  {
    q: "Is my birth data private?",
    a: "Your birth details are encrypted at rest. We never sell personal data, and you can delete your profile anytime from settings.",
  },
  {
    q: "Do you support Vedic and Western styles?",
    a: "Yes—toggle sidereal tropical, explore divisional charts, or keep a simplified Western sun-moon-rising view if you prefer.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4">
        <Reveal>
          <h2 className="section-title mb-10 md:mb-12">FAQs</h2>
        </Reveal>
        <ul className="space-y-2">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <li className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm shadow-primary/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-foreground transition hover:bg-accent/80 md:text-lg"
                  >
                    <span>{item.q}</span>
                    <motion.span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-lg font-bold text-primary-contrast"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="border-t border-border px-5 pb-5 pt-3 text-muted leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
