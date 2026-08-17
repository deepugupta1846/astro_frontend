import Header from "../../components/Header";
import Footer from "../../components/Footer";
import KundliMatchForm from "../../components/KundliMatchForm";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Free Kundli Matching (Gun Milan) | Astro Plus",
  description:
    "Match horoscopes online with Astro Plus—Ashtakoot milan, mangal dosha, and detailed compatibility before marriage.",
};

const points = [
  {
    title: "36 Gun Milan",
    text: "Classical Ashtakoot scoring: Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi.",
  },
  {
    title: "Mangal & dosha flags",
    text: "We highlight Mangal Dosha, Nadi issues, and other remedial cues astrologers look for in milan.",
  },
  {
    title: "Privacy first",
    text: "Birth data is used only for charts you generate; delete anytime from your account settings.",
  },
];

export default function MatchmakingPage() {
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
            Free online · Instant preview
          </p>
          <h1 className="mt-4 text-center text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Kundli matching for marriage
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium text-white/88 md:text-lg">
            Enter both birth details for Gun Milan–style compatibility—clear scores,
            dosha checks, and guidance you can review with an astrologer in-app.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <Reveal>
          <h2 className="section-title mb-2">Enter birth details</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted">
            Accurate time and place improve Lagna and Moon—use hospital records
            or parents&apos; memory when possible.
          </p>
        </Reveal>
        <KundliMatchForm />
      </section>

      <section className="border-t border-border bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title mb-10">What you get</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-border bg-accent/60 p-6">
                  <h3 className="font-bold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.text}
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
