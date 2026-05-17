"use client";

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

function IconCompatibility() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7 md:h-8 md:w-8" aria-hidden>
      <path
        fill="currentColor"
        d="M24 9a2.8 2.8 0 00-2.6 1.7 2.8 2.8 0 00-5.2 1.4c0 2.4 2.2 4.3 4.8 4.3 1 0 2-.3 2.8-.9.8.6 1.8.9 2.8.9 2.6 0 4.8-1.9 4.8-4.3a2.8 2.8 0 00-5.2-1.4A2.8 2.8 0 0024 9z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 38v-9l-3.5-5.5 3.5-3.5h3m8 0h3l3.5 3.5-3.5 5.5V38M17 24h5m9 0h5"
      />
    </svg>
  );
}

function IconRings() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7 md:h-8 md:w-8" aria-hidden>
      <ellipse
        cx="19"
        cy="26"
        rx="11"
        ry="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        transform="rotate(-28 19 26)"
      />
      <ellipse
        cx="29"
        cy="26"
        rx="11"
        ry="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        transform="rotate(28 29 26)"
      />
    </svg>
  );
}

function IconOx() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7 md:h-8 md:w-8" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 28c2-8 8-12 16-11 4 0 7 3 8 7M18 34h12M22 22l-4-6 4-2m12 8l4-6-4-2M20 18v-4l4-2 4 2v4"
      />
    </svg>
  );
}

function IconPanchang() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7 md:h-8 md:w-8" aria-hidden>
      <circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M24 12v24M12 24h24M16.5 16.5l15 15m0-15l-15 15"
      />
      <circle cx="24" cy="24" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const SERVICES = [
  {
    id: "compatibility",
    title: "Compatibility",
    description:
      "Confused by love? Remove the doubts & find the sparks! Check the compatibility with your partner using our tool and ignite a love that lasts forever.",
    Icon: IconCompatibility,
  },
  {
    id: "kundli-matching",
    title: "Kundli Matching",
    description:
      "Check love compatibility and marriage prediction online. Get the best horoscope and kundli matching predictions today!",
    Icon: IconRings,
  },
  {
    id: "chinese-horoscope",
    title: "Chinese Horoscope",
    description:
      "Are you a playful cat, a clever mouse, or a roaring lion? Discover your inner spirit animal with Chinese astrology. Find out now!",
    Icon: IconOx,
  },
  {
    id: "today-panchang",
    title: "Today Panchang",
    description:
      "Panchang enlists a record of auspicious dates and times for any auspicious task such as marriage, celebration, puja, starting any business etc.",
    Icon: IconPanchang,
  },
];

function ServiceCard({ item }) {
  const { Icon } = item;
  return (
    <motion.article
      className="flex h-full min-h-0 w-full max-w-[320px] flex-col rounded-2xl border border-border bg-surface px-6 pb-7 pt-8 text-center shadow-md shadow-foreground/5 ring-1 ring-border/80 border-b-4 border-b-gold"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
    >
      <div className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold text-foreground md:h-[4.25rem] md:w-[4.25rem]">
        <Icon />
      </div>
      <h3 className="mt-5 text-lg font-bold text-foreground md:text-xl">{item.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-[0.9375rem]">
        {item.description}
      </p>
    </motion.article>
  );
}

export default function ComplimentaryAstrologyServices() {
  const list = SERVICES;
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
      id="complimentary-services"
      className="border-y border-border bg-accent/60 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Free tools for you
          </p>
          <h2 className="section-title mt-3 md:mt-4">
            Complimentary astrology services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted md:text-lg">
            Explore compatibility, matching, and daily guidance—no session required.
          </p>
        </Reveal>
      </div>

      {reduceMotion ? (
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-stretch gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04}>
              <div className="flex h-full justify-center">
                <ServiceCard item={item} />
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
            className="astro-top-swiper-inner complimentary-services-swiper !pb-14 pt-1 [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!flex [&_.swiper-slide]:h-auto"
            aria-label="Complimentary astrology services carousel"
          >
            {list.map((item, i) => (
              <SwiperSlide
                key={item.id ?? `slide-${i}`}
                className="box-border !flex h-auto justify-center py-1"
              >
                <div className="mx-auto h-full w-full max-w-[320px]">
                  <ServiceCard item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
