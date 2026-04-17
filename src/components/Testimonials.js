"use client";

import Reveal from "./Reveal";

const testimonials = [
  {
    text: "I used to check three sites for transits. Astro Pulse pulls my chart, dasha, and daily luck windows into one calm feed—it's become my morning ritual.",
    name: "Ananya K.",
    location: "Bengaluru",
  },
  {
    text: "The compatibility report nailed our Moon-Mars friction without drama. We booked a live session and got remedies that actually fit our schedules.",
    name: "Rahul & Meera",
    location: "Mumbai",
  },
  {
    text: "As a founder, timing matters. Retrograde alerts + launch-day muhurat suggestions in the same app feels unfairly useful.",
    name: "Vikram S.",
    location: "Hyderabad",
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="w-[min(100vw-2rem,340px)] shrink-0 rounded-3xl border border-border bg-surface p-7 shadow-md shadow-primary/10 md:w-[360px]">
      <p className="text-muted leading-relaxed">&ldquo;{t.text}&rdquo;</p>
      <div className="mt-5 font-bold text-foreground">{t.name}</div>
      <div className="text-sm text-muted">{t.location}</div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-accent/70 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="section-title mb-12 md:mb-14">
            DON&apos;T JUST TAKE OUR WORD FOR IT
          </h2>
        </Reveal>
      </div>
      <div className="marquee-mask relative w-full md:-mx-4">
        <div className="flex w-max gap-6 pl-4 animate-marquee-56">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
