"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Reveal from "./Reveal";

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

function LiveCard({ a }) {
  const displayName = a.name?.replace(/^Astro\s+/i, "") ?? "Astrologer";

  return (
    <article className="flex h-full w-[min(100%,280px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:border-primary/20 hover:shadow-md sm:w-[280px]">
      <div className="p-4 pb-3">
        <div className="flex gap-3">
          <div className="relative shrink-0">
            <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border-2 border-border bg-accent">
              <Image
                src={a.image}
                alt={displayName}
                fill
                className="object-cover"
                sizes="72px"
                unoptimized={!a.image.includes("images.unsplash.com")}
              />
            </div>
            {a.celebrity && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-white shadow-sm"
                style={{ background: "linear-gradient(135deg, #8b6914 0%, #c9a44a 100%)" }}
              >
                Celebrity
              </span>
            )}
            {a.online && !a.celebrity && (
              <span className="absolute -bottom-0.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-surface bg-emerald-500" />
            )}
          </div>

          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="truncate text-base font-bold text-foreground">
              {displayName}
            </h3>
            <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted">
              {a.specialties}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
              <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                <span className="text-gold" aria-hidden>★</span>
                {a.rating.toFixed(2)}
              </span>
              <span className="text-muted">{a.orders}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 rounded-xl bg-background px-3 py-2.5">
        <div className="flex items-center justify-between gap-2 py-1 text-xs">
          <span className="text-muted">Languages</span>
          <span className="text-right font-medium text-foreground">
            {a.languages}
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 py-1 text-xs">
          <span className="text-muted">Experience</span>
          <span className="font-medium text-foreground">{a.experience}</span>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 p-4 pt-3">
        <p className="text-lg font-extrabold text-foreground">{a.price}</p>
        <Link
          href="/download-app"
          className="rounded-lg border-2 border-emerald-600 bg-surface px-5 py-2 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
        >
          Chat
        </Link>
      </div>
    </article>
  );
}

/**
 * @param {{ astrologers: Array<{
 *   id: number;
 *   name: string;
 *   specialties: string;
 *   rating: number;
 *   orders: string;
 *   languages: string;
 *   experience: string;
 *   price: string;
 *   image: string;
 *   online: boolean;
 *   celebrity?: boolean;
 * }> }} props
 */
export default function TopAstrologers({ astrologers = [] }) {
  const list = astrologers.length ? astrologers : [];
  const trackRef = useRef(null);
  const displayCount = list.length >= 100 ? "100+" : `${list.length}+`;

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = direction === "left" ? -300 : 300;
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="astrologers"
      className="border-y border-border bg-gradient-to-b from-brand-muted/90 via-brand-muted/50 to-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
                Live now
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
                {displayCount} best astrologers, ready now.
              </h2>
            </div>
            {list.length > 0 && (
              <div className="flex items-center gap-2">
                <ScrollButton direction="left" onClick={() => scroll("left")} />
                <ScrollButton direction="right" onClick={() => scroll("right")} />
              </div>
            )}
          </div>
        </Reveal>

        {list.length === 0 ? (
          <Reveal>
            <p className="mx-auto mt-12 max-w-lg rounded-2xl border border-border bg-surface px-6 py-8 text-center text-sm text-muted">
              No astrologers to display. Add entries in{" "}
              <code className="rounded bg-accent px-1 py-0.5 text-xs text-foreground">
                src/data/notebookAstrologers.json
              </code>{" "}
              or connect a live API.
            </p>
          </Reveal>
        ) : (
          <>
            <div
              ref={trackRef}
              className="mt-8 flex items-stretch gap-4 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
            >
              {list.map((a, i) => (
                <Reveal
                  key={a.id ?? `astro-${i}`}
                  delay={i * 0.03}
                  className="flex shrink-0 self-stretch"
                >
                  <LiveCard a={a} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold text-foreground shadow-md transition hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]"
                  style={{
                    background:
                      "linear-gradient(135deg, #f5e6b8 0%, #e8d48b 50%, #d4bc6a 100%)",
                  }}
                >
                  More astrologers
                  <span aria-hidden>→</span>
                </button>
              </div>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
