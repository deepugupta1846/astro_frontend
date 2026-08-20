"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AppStoreRedirect({
  storeUrl,
  shareImage,
  brandLabel = "Astro Plus",
  heading = "Opening Google Play…",
  imageAlt = "App preview",
  ctaLabel = "Get it on Google Play",
}) {
  const [seconds, setSeconds] = useState(2);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    const redirect = window.setTimeout(() => {
      window.location.replace(storeUrl);
    }, 2000);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(redirect);
    };
  }, [storeUrl]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-surface shadow-lg">
        <div className="relative aspect-[16/10] w-full bg-brand-muted">
          <Image
            src={shareImage}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="400px"
          />
        </div>
        <div className="p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            {brandLabel}
          </p>
          <h1 className="mt-2 text-xl font-extrabold text-foreground">{heading}</h1>
          <p className="mt-2 text-sm text-muted">
            Redirecting in {seconds}s. If nothing happens, tap below.
          </p>
          <a
            href={storeUrl}
            className="cta-btn mt-6 inline-flex w-full justify-center px-6 py-3 text-sm font-bold"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
