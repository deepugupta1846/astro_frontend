"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./NavLink";
import SignInModal from "./SignInModal";

const navLinks = [
  { href: "/#services", label: "Consult" },
  { href: "/#astrologers", label: "Astrologers" },
  { href: "/book-puja", label: "Book a Puja" },
  { href: "/matchmaking", label: "Kundli" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/blogs", label: "Blog" },
  { href: "/#faqs", label: "FAQs" },
];

function HamburgerIcon({ open }) {
  return (
    <span className="relative block h-5 w-5 shrink-0" aria-hidden>
      <span
        className={`absolute left-0 top-1/2 block h-0.5 w-5 origin-center rounded-full bg-foreground transition-all duration-300 ease-out ${
          open ? "-translate-y-1/2 rotate-45" : "-translate-y-[6px]"
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-foreground transition-all duration-200 ease-out ${
          open ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 block h-0.5 w-5 origin-center rounded-full bg-foreground transition-all duration-300 ease-out ${
          open ? "-translate-y-1/2 -rotate-45" : "translate-y-[6px]"
        }`}
      />
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 px-4 pt-4 pb-2"
        initial={false}
        animate={{ paddingTop: scrolled ? 10 : 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.nav
            className={`flex items-center justify-between gap-3 rounded-full border border-border bg-white/92 px-3 py-2 backdrop-blur-xl md:gap-4 md:px-4 ${
              scrolled ? "shadow-lg" : "shadow-md"
            }`}
            layout
            aria-label="Primary"
          >
            <NavLink
              href="/"
              className="flex min-w-0 shrink-0 items-center gap-2 rounded-full py-1 pr-2 text-foreground"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-primary/35">
                <Image
                  src="/icon.png"
                  alt="Astro Pulse"
                  width={36}
                  height={36}
                  className="object-contain p-0.5"
                  priority
                />
              </span>
              <span className="hidden font-bold tracking-tight sm:inline">
                Astro Pulse
              </span>
            </NavLink>

            <ul className="hidden flex-1 items-center justify-center gap-0.5 text-[13px] font-semibold text-foreground/75 lg:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <NavLink
                    href={l.href}
                    className="whitespace-nowrap rounded-full px-2.5 py-2 transition-colors hover:bg-accent hover:text-foreground xl:px-3"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => setSignInOpen(true)}
                className="hidden rounded-full bg-gradient-to-r from-primary to-primary-hover px-4 py-2 text-sm font-bold text-primary-contrast shadow-md shadow-primary/25 transition hover:opacity-95 active:scale-[0.98] sm:inline-flex"
              >
                Sign in
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/18 bg-white/95 text-foreground shadow-sm transition hover:border-primary/35 hover:bg-white active:scale-[0.97] lg:hidden"
                aria-expanded={mobileOpen}
                aria-controls="primary-mobile-nav"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((o) => !o)}
              >
                <HamburgerIcon open={mobileOpen} />
              </button>
            </div>
          </motion.nav>

          <AnimatePresence>
            {mobileOpen ? (
              <>
                <motion.div
                  role="presentation"
                  className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-[2px] lg:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setMobileOpen(false)}
                />
                <motion.aside
                  id="primary-mobile-nav"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Site navigation"
                  className="fixed right-0 top-0 z-[101] flex h-[100dvh] w-full max-w-[min(100vw,20rem)] flex-col border-l border-border bg-surface shadow-[-12px_0_48px_rgb(0_0_0/0.12)] lg:hidden"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 320 }}
                >
                  <div className="flex items-center justify-between border-b border-border px-4 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Menu
                    </p>
                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition hover:bg-accent hover:text-foreground active:scale-95"
                      aria-label="Close menu"
                      onClick={() => setMobileOpen(false)}
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <nav className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-3 py-4">
                    {navLinks.map((l) => (
                      <NavLink
                        key={l.href}
                        href={l.href}
                        className="rounded-2xl px-4 py-3.5 text-base font-semibold text-foreground/90 transition-colors hover:bg-accent hover:text-foreground active:bg-accent/80"
                        onClick={() => setMobileOpen(false)}
                      >
                        {l.label}
                      </NavLink>
                    ))}
                  </nav>
                  <div className="space-y-2 border-t border-border p-4">
                    <button
                      type="button"
                      onClick={() => {
                        setMobileOpen(false);
                        setSignInOpen(true);
                      }}
                      className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-primary-hover py-3.5 text-sm font-bold text-primary-contrast shadow-md shadow-primary/25 transition hover:opacity-95 active:scale-[0.99]"
                    >
                      Sign in
                    </button>
                    <NavLink
                      href="/download-app"
                      className="flex w-full items-center justify-center rounded-2xl border border-border py-3.5 text-sm font-semibold text-foreground transition hover:bg-accent"
                      onClick={() => setMobileOpen(false)}
                    >
                      Download app
                    </NavLink>
                  </div>
                </motion.aside>
              </>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.header>

      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
    </>
  );
}
