import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Download App | Astro Plus",
  description:
    "Download Astro Plus for iOS and Android. Chat with verified astrologers, get daily horoscopes, free kundli, and muhurat alerts.",
};

const features = [
  {
    icon: "💬",
    title: "Live chat & calls",
    desc: "Connect with verified Vedic, tarot, and numerology experts instantly.",
  },
  {
    icon: "🔮",
    title: "Free kundli",
    desc: "Generate and save birth charts; share with your astrologer in one tap.",
  },
  {
    icon: "📅",
    title: "Daily horoscope",
    desc: "Personalised rashifal and muhurat alerts delivered to your phone.",
  },
  {
    icon: "❤️",
    title: "Matchmaking",
    desc: "Kundli compatibility reports for marriage and relationships.",
  },
  {
    icon: "🔔",
    title: "Smart notifications",
    desc: "Never miss a consultation reply or auspicious timing alert.",
  },
  {
    icon: "🔒",
    title: "Private & secure",
    desc: "Encrypted chats and wallet — your data stays confidential.",
  },
];

export default function DownloadAppPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="hero-banner relative overflow-hidden text-white">
        <div
          className="hero-radial-overlay pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-primary">
            Mobile app
          </p>
          <h1 className="mt-4 text-center text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Download Astro Plus
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/80 md:text-lg">
            Take India&apos;s trusted astrology platform with you — consult experts,
            check horoscopes, and manage your wallet from anywhere.
          </p>
        </div>
      </section>

      <AppDownload />

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-muted">
              Everything in one app
            </p>
            <h2 className="mt-3 text-center text-2xl font-extrabold tracking-tight md:text-3xl">
              Why download Astro Plus?
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md">
                  <span className="text-3xl" aria-hidden>
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
