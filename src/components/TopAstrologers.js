"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Reveal from "./Reveal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ChevronIcon({ dir }) {
  const left = dir === "prev";
  return (
    <svg
      className="h-5 w-5 shrink-0 md:h-[1.35rem] md:w-[1.35rem]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {left ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

function StarRow({ value }) {
  return (
    <span
      className="flex items-center gap-0.5"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < Math.round(value) ? "text-primary" : "text-border"
          }
          aria-hidden
        >
          ★
        </span>
      ))}
    </span>
  );
}

function AstroCard({ a }) {
  return (
    <motion.article
      className="group flex h-full w-full max-w-[320px] flex-col overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-surface to-accent/50 shadow-md shadow-primary/10 ring-1 ring-border/90"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-accent">
        <Image
          src={a.image}
          alt={a.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 90vw, 300px"
          unoptimized={!a.image.includes("images.unsplash.com")}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/80 to-transparent" />
        {a.online && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Online
          </span>
        )}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-lg font-bold text-white drop-shadow-sm">
            {a.name}
          </p>
          <p className="text-sm font-medium text-white/85">{a.title}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-foreground/80">
          <span className="rounded-full bg-accent px-2.5 py-1">{a.exp}</span>
          <span className="rounded-full bg-brand-muted px-2.5 py-1 text-foreground">
            {a.langs}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <StarRow value={a.rating} />
            <span className="font-bold">{a.rating.toFixed(2)}</span>
          </div>
          <span className="text-xs font-medium text-muted">{a.chats}</span>
        </div>
        <div className="mt-4 flex items-end justify-between gap-3">
          <p className="text-xl font-extrabold text-foreground">{a.price}</p>
          <button
            type="button"
            className="rounded-xl bg-gradient-to-r from-primary to-primary-hover px-4 py-2.5 text-sm font-bold text-primary-contrast shadow-md shadow-primary/30 transition hover:opacity-95"
          >
            Chat now
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * @param {{ astrologers: Array<{
 *   id: number;
 *   name: string;
 *   title: string;
 *   exp: string;
 *   langs: string;
 *   price: string;
 *   rating: number;
 *   chats: string;
 *   image: string;
 *   online: boolean;
 * }> }} props
 */
export default function TopAstrologers({ astrologers = [] }) {
  const list = astrologers.length ? astrologers : [];
  const reduceMotion = useReducedMotion();
  const canLoop = list.length >= 6;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const onSwiperBeforeInit = useCallback((swiper) => {
    const nav = swiper.params.navigation;
    if (nav && typeof nav === "object") {
      nav.prevEl = prevRef.current;
      nav.nextEl = nextRef.current;
    }
  }, []);

  return (
    <section
      id="astrologers"
      className="border-y border-border bg-surface py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Hand-picked for accuracy & care
          </p>
          <h2 className="section-title mt-3 md:mt-4">Top astrologers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted md:text-lg">
            Meet our highest-rated guides—each background-checked, experienced,
            and ready for chat or voice sessions on demand.
          </p>
        </Reveal>
      </div>

      {list.length === 0 ? (
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="mx-auto mt-12 max-w-lg rounded-2xl border border-border bg-accent/50 px-6 py-8 text-center text-sm text-muted">
              No astrologers to display. Add entries in{" "}
              <code className="rounded bg-surface px-1 py-0.5 text-xs text-foreground">
                src/data/notebookAstrologers.json
              </code>{" "}
              or connect a live API.
            </p>
          </Reveal>
        </div>
      ) : reduceMotion ? (
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((a, i) => (
            <Reveal key={a.id ?? `astro-${i}`} delay={i * 0.04}>
              <div className="flex justify-center">
                <AstroCard a={a} />
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="astro-top-swiper relative mx-auto mt-12 max-w-6xl px-11 sm:px-14 md:px-16">
          <button
            ref={prevRef}
            type="button"
            className="swiper-button-prev astro-swiper-nav astro-swiper-nav-prev pill-nav pointer-events-auto absolute left-0 top-[42%] z-20 flex -translate-y-1/2"
            aria-label="Previous slides"
          >
            <ChevronIcon dir="prev" />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="swiper-button-next astro-swiper-nav astro-swiper-nav-next pill-nav pointer-events-auto absolute right-0 top-[42%] z-20 flex -translate-y-1/2"
            aria-label="Next slides"
          >
            <ChevronIcon dir="next" />
          </button>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 22 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            loop={canLoop}
            grabCursor
            autoplay={{
              delay: 4200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={650}
            pagination={{
              clickable: true,
              dynamicBullets: list.length > 8,
            }}
            navigation
            onBeforeInit={onSwiperBeforeInit}
            className="astro-top-swiper-inner !pb-14 pt-1"
            aria-label="Top astrologers carousel"
          >
            {list.map((a, i) => (
              <SwiperSlide
                key={a.id ?? `slide-${i}`}
                className="!flex h-auto justify-center py-1"
              >
                <AstroCard a={a} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* <div className="mx-auto max-w-6xl px-4">
        <Reveal delay={0.12}>
          <p className="mt-10 text-center text-sm text-muted">
            Names and cities are sourced from{" "}
            <code className="rounded bg-accent/60 px-1 py-0.5 text-xs text-foreground">
              notebookAstrologers.json
            </code>
            . Profile images use{" "}
            <span className="whitespace-nowrap">Gravatar</span> with a
            gendered default portrait (
            <code className="rounded bg-accent/60 px-1 py-0.5 text-xs">
              gender
            </code>{" "}
            in JSON). Ratings and fees are illustrative.
          </p>
        </Reveal>
      </div> */}
    </section>
  );
}
