import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogCard } from "@/components/BlogJournal";
import Reveal from "@/components/Reveal";
import {
  blogPosts,
  formatViews,
  getBlogBySlug,
} from "@/content/blogs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog | Astro Plus" };

  return {
    title: `${post.title} | Astro Plus`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article>
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-hero-deep md:aspect-[3/1]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-hero-deep/90 via-hero-deep/40 to-transparent"
            aria-hidden
          />
        </div>

        <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
          <Reveal>
            <Link
              href="/blogs"
              className="text-sm font-semibold text-primary transition hover:text-primary-hover"
            >
              ← All blogs
            </Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-muted">
              {post.category}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <span>{post.date}</span>
              <span aria-hidden>·</span>
              <span>{formatViews(post.views)} views</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 text-lg leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/90">
              {post.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-brand-muted/30 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                More from the journal
              </h2>
            </Reveal>
            <div className="mt-8 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.05} className="h-full">
                  <BlogCard post={item} compact={false} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
