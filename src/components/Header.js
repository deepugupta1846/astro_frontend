"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

const beforeLogo = [
  { href: "/#services", label: "Consult" },
  { href: "/#astrologers", label: "Astrologers" },
  { href: "/book-puja", label: "Book a Puja" },
  { href: "/matchmaking", label: "Kundli matching" },
  { href: "/#how-it-works", label: "How it works" },
];

const afterLogo = [
  { href: "/#why-us", label: "Why us?" },
  { href: "/#faqs", label: "FAQs" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 px-4 pt-5 pb-2"
      initial={false}
      animate={{
        paddingTop: scrolled ? 12 : 20,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.nav
          className={`pill-nav flex items-center justify-center rounded-full border border-border bg-white/92 px-1 py-2 backdrop-blur-xl md:px-3 ${scrolled ? "shadow-lg" : "shadow-md"}`}
          layout
        >
          <ul className="flex flex-wrap items-center justify-center gap-0 text-[11px] font-semibold text-foreground/70 sm:text-[12px] md:gap-0 md:text-sm">
            {beforeLogo.map((l) => (
              <li key={l.href}>
                <NavLink
                  href={l.href}
                  className="rounded-full px-1.5 py-2 transition-colors hover:bg-accent hover:text-foreground sm:px-2.5 md:px-3"
                >
                  {l.href === "/matchmaking" ? (
                    <>
                      <span className="hidden sm:inline">{l.label}</span>
                      <span className="sm:hidden">Match</span>
                    </>
                  ) : (
                    l.label
                  )}
                </NavLink>
              </li>
            ))}
            <li className="px-1 md:px-3">
              <NavLink
                href="/"
                className="flex items-center gap-2 rounded-full px-2 py-1.5 text-foreground md:px-3 md:py-2"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-primary/35 md:h-9 md:w-9">
                  <Image
                    src="/icon.png"
                    alt="Astro Pulse"
                    width={36}
                    height={36}
                    className="object-contain p-0.5"
                    priority
                  />
                </span>
                <span className="hidden font-bold sm:inline">Astro Pulse</span>
              </NavLink>
            </li>
            {afterLogo.map((l) => (
              <li key={l.href}>
                <NavLink
                  href={l.href}
                  className="rounded-full px-1.5 py-2 transition-colors hover:bg-accent hover:text-foreground sm:px-2.5 md:px-3"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            {/* <li>
              <NavLink
                href="/sign-in"
                className="rounded-full px-1.5 py-2 font-medium text-primary transition-colors hover:bg-brand-soft hover:text-foreground sm:px-2.5 md:px-3"
              >
                Staff sign in
              </NavLink>
            </li> */}
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
}
