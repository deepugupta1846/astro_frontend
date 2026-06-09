"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { pressItems } from "@/content/pressMedia";
import Reveal from "./Reveal";

function NewsCard({ item, compact = true }) {
  return (
    <article
      className={`flex h-full snap-start flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:border-primary/25 hover:shadow-md ${
        compact
          ? "w-[min(100%,300px)] shrink-0 sm:w-[300px]"
          : "w-full"
      }`}
    >
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-brand-muted">
        <Image
          src={item.image}
          alt={item.headline}
          fill
          className="object-cover"
          sizes={compact ? "300px" : "(max-width: 768px) 100vw, 33vw"}
        />
      </div>
      <div className="flex min-h-[7.5rem] flex-1 flex-col p-4 sm:min-h-[8rem]">
        <h3
          className={`line-clamp-3 font-bold leading-snug text-foreground ${
            compact ? "min-h-[4.5rem] text-sm" : "min-h-[5.25rem] text-base"
          }`}
        >
          {item.headline}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-[11px] font-semibold uppercase tracking-wide text-muted">
          <span>{item.source}</span>
          <span className="shrink-0 text-foreground/70">{item.date}</span>
        </div>
      </div>
    </article>
  );
}

function ScrollButton({ direction, onClick }) {
  const label = direction === "left" ? "Scroll left" : "Scroll right";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary"
    >
      <span aria-hidden className="text-lg leading-none">
        {direction === "left" ? "‹" : "›"}
      </span>
    </button>
  );
}

export default function PressMedia({ showViewAllLink = false, limit }) {
  const trackRef = useRef(null);
  const items = limit ? pressItems.slice(0, limit) : pressItems;

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = direction === "left" ? -320 : 320;
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="press-media"
      className="border-t border-border bg-gradient-to-b from-brand-muted/70 to-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
                Press &amp; media
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Astro Pulse in the news
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <ScrollButton direction="left" onClick={() => scroll("left")} />
              <ScrollButton direction="right" onClick={() => scroll("right")} />
            </div>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="mt-8 flex items-stretch gap-4 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
        >
          {items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.04}
              className="flex shrink-0 self-stretch"
            >
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>

        {showViewAllLink && (
          <div className="mt-8 text-center">
            <Link
              href="/press-media"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-hover"
            >
              View all press coverage
              <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
