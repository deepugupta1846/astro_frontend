import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-primary">
            Astro Pulse
          </p>
          <h3 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
            INDIA&apos;S TRUSTED ASTROLOGY CONSULT PLATFORM
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/75 md:text-base">
            Chat or call verified astrologers anytime—VEDIC, tarot, numerology,
            and more in one place.
          </p>
          <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white/10 ring-2 ring-primary/50 shadow-lg shadow-black/40">
            <Image
              src="/icon.png"
              alt="Astro Pulse"
              width={72}
              height={72}
              className="object-contain p-1.5"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
              Consult
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  Start a chat
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  Book a call
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/matchmaking" className="transition hover:text-white">
                  Kundli matching
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
              Astrologers
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/#astrologers" className="transition hover:text-white">
                  Top astrologers
                </Link>
              </li>
              <li>
                <Link href="/#astrologers" className="transition hover:text-white">
                  Online now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
              How it works
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/#how-it-works" className="transition hover:text-white">
                  Pick an expert
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="transition hover:text-white">
                  Share kundli
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
              Why us?
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/#why-us" className="transition hover:text-white">
                  Verified experts
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="transition hover:text-white">
                  Private &amp; secure
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
              FAQs
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/#faqs" className="transition hover:text-white">
                  Common questions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/55">
            <Link
              href="/terms-and-conditions"
              className="transition hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link href="/refund-policy" className="transition hover:text-white">
              Refund &amp; cancellation
            </Link>
            <Link href="/contact-us" className="transition hover:text-white">
              Contact us
            </Link>
            <Link href="/delete-account" className="transition hover:text-white">
              Delete account
            </Link>
          </div>
          <p className="mt-6 text-center text-xs text-white/45">
            © {new Date().getFullYear()} Astro Pulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
