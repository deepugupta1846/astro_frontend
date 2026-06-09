import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogCard } from "@/components/BlogJournal";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/content/blogs";

export const metadata = {
  title: "Blog | Astro Pulse",
  description:
    "Astrology guides, planetary transits, remedies, and wellness insights from the Astro Pulse journal.",
};

export default function BlogsPage() {
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
            From the journal
          </p>
          <h1 className="mt-4 text-center text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Read between the stars.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/80 md:text-lg">
            Planetary transits, remedies, relationship guidance, and platform
            updates — written for everyday seekers and serious students alike.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.04} className="h-full">
                <BlogCard post={post} compact={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
