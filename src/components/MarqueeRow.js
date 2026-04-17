"use client";

export default function MarqueeRow({ items, slow = false, className = "" }) {
  const row = (
    <>
      {items.map((label, i) => (
        <span key={`a-${i}`} className="pill-chip">
          {label}
        </span>
      ))}
      {items.map((label, i) => (
        <span key={`b-${i}`} className="pill-chip">
          {label}
        </span>
      ))}
    </>
  );

  return (
    <div
      className={`marquee-mask relative w-full overflow-hidden py-1 ${className}`}
    >
      <div
        className={`flex w-max gap-3 pl-3 ${slow ? "animate-marquee-slow" : "animate-marquee"}`}
      >
        {row}
      </div>
    </div>
  );
}
