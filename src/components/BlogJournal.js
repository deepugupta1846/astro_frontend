"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts, formatViews } from "@/content/blogs";
import Reveal from "./Reveal";

function BlogCard({ post, compact = true }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:border-primary/25 hover:shadow-md ${
        compact ? "w-full" : "w-full"
      }`}
    >
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-brand-muted">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes={
            compact
              ? "(max-width: 640px) 85vw, 25vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
        />
      </div>
      <div className="flex min-h-[8rem] flex-1 flex-col p-4 md:p-5">
        <h3
          className={`line-clamp-3 font-bold leading-snug text-foreground transition group-hover:text-primary ${
            compact ? "min-h-[4.5rem] text-sm md:text-[15px]" : "min-h-[5.25rem] text-base"
          }`}
        >
          {post.title}
        </h3>
        <p className="mt-auto pt-4 text-xs text-muted">
          {formatViews(post.views)} views
        </p>
      </div>
    </Link>
  );
}

export default function BlogJournal({ limit = 4 }) {
  const posts = blogPosts.slice(0, limit);

  return (
    <section
      id="journal"
      className="border-t border-border bg-gradient-to-b from-brand-muted/80 via-brand-muted/40 to-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
                From the journal
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Read between the stars.
              </h2>
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary"
            >
              All blogs
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05} className="h-full">
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export { BlogCard };
