"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getApiBaseUrl } from "@/lib/apiBase";

function formatPrice(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return "—";
  return `Rs. ${n.toLocaleString("en-IN")}`;
}

function durationText(totalMinutes) {
  const n = Number(totalMinutes);
  if (!Number.isFinite(n) || n < 1) return "Duration on request";
  const h = Math.floor(n / 60);
  const m = n % 60;
  if (h > 0 && m > 0) return `${h}h ${m}m`;
  if (h > 0) return `${h}h`;
  return `${m}m`;
}

export default function BookPujaPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [bookPuja, setBookPuja] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [bookedPujaIds, setBookedPujaIds] = useState([]);

  useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      setErr("");
      try {
        const base = getApiBaseUrl();
        const res = await fetch(`${base}/api/v1/pujas`, { cache: "no-store" });
        const text = await res.text();
        let data = null;
        try {
          data = text ? JSON.parse(text) : null;
        } catch {
          data = null;
        }
        if (!res.ok || !data?.success) {
          throw new Error(data?.message || "Failed to load puja list");
        }
        if (active) setRows(Array.isArray(data.data) ? data.data : []);
      } catch (e) {
        if (active) setErr(e.message || "Something went wrong");
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bookedPujaIds");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setBookedPujaIds(parsed.map((x) => Number(x)).filter((x) => Number.isFinite(x)));
      }
    } catch {
      // ignore invalid local storage value
    }
  }, []);

  const hasRows = useMemo(() => rows.length > 0, [rows]);

  function openBookingForm(puja) {
    if (bookedPujaIds.includes(Number(puja?.id))) return;
    setBookPuja(puja);
    setBookingMessage("");
    setBookingForm({
      name: "",
      phone: "",
      email: "",
      city: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
    });
  }

  function closeBookingForm() {
    if (bookingSubmitting) return;
    setBookPuja(null);
    setBookingMessage("");
  }

  async function submitBooking(e) {
    e.preventDefault();
    if (!bookPuja) return;
    setBookingMessage("");
    setBookingSubmitting(true);
    try {
      const base = getApiBaseUrl();
      const payload = {
        pujaId: bookPuja.id,
        name: bookingForm.name.trim(),
        phone: bookingForm.phone.trim(),
        email: bookingForm.email.trim() || null,
        city: bookingForm.city.trim() || null,
        preferredDate: bookingForm.preferredDate || null,
        preferredTime: bookingForm.preferredTime.trim() || null,
        notes: bookingForm.notes.trim() || null,
      };
      if (!payload.name || !payload.phone) {
        throw new Error("Name and phone are required");
      }
      const res = await fetch(`${base}/api/v1/pujas/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const text = await res.text();
      let data = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = null;
      }
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to create booking");
      }
      const pujaId = Number(bookPuja.id);
      if (Number.isFinite(pujaId)) {
        setBookedPujaIds((prev) => {
          const next = prev.includes(pujaId) ? prev : [...prev, pujaId];
          try {
            localStorage.setItem("bookedPujaIds", JSON.stringify(next));
          } catch {
            // ignore storage errors
          }
          return next;
        });
      }
      setBookingMessage("");
      setSuccessOpen(true);
      setBookPuja(null);
    } catch (e2) {
      setBookingMessage(e2.message || "Failed to submit booking");
    } finally {
      setBookingSubmitting(false);
    }
  }

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
            Trusted pandits · Online guidance
          </p>
          <h1 className="mt-4 text-center text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Book a Puja
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium text-white/88 md:text-lg">
            Choose a puja for health, career, marriage, wealth, and protection.
            Browse packages and book instantly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {loading ? (
          <p className="text-center text-sm text-muted">Loading pujas…</p>
        ) : err ? (
          <p
            className="mx-auto max-w-2xl rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
            role="alert"
          >
            {err}
          </p>
        ) : !hasRows ? (
          <p className="text-center text-sm text-muted">
            No puja packages are available right now.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rows.map((p) => {
              const img = p.thumbnailImageUrl || p.imageUrl || "/icon.png";
              const title = p.title || "Puja";
              const shortText = p.shortDescription || "Auspicious puja package";
              const oldPrice =
                p.originalPrice != null && Number(p.originalPrice) > Number(p.price)
                  ? formatPrice(p.originalPrice)
                  : null;
              const tags = Array.isArray(p.tags) ? p.tags.slice(0, 3) : [];
              const isBooked = bookedPujaIds.includes(Number(p.id));
              return (
                <article
                  key={p.id}
                  className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-accent/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-foreground">
                        {p.category || "Puja"}
                      </span>
                      <span className="text-xs text-muted">
                        {durationText(p.durationMinutes)}
                      </span>
                    </div>
                    <h2 className="line-clamp-2 text-lg font-bold text-foreground">
                      {title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">{shortText}</p>

                    {tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 flex items-end justify-between gap-2">
                      <div>
                        <p className="text-lg font-extrabold text-foreground">
                          {formatPrice(p.price)}
                        </p>
                        {oldPrice && (
                          <p className="text-xs text-muted line-through">{oldPrice}</p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => openBookingForm(p)}
                        disabled={isBooked}
                        className={`rounded-xl px-3.5 py-2 text-xs font-semibold ${
                          isBooked
                            ? "cursor-not-allowed bg-emerald-100 text-emerald-700"
                            : "cta-btn"
                        }`}
                      >
                        {isBooked ? "Booked" : "Book now"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {bookPuja && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-4 sm:items-center">
          <div
            className="w-full max-w-xl rounded-2xl border border-border bg-surface p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-puja-title"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 id="book-puja-title" className="text-lg font-bold text-foreground">
                  Book {bookPuja.title || "Puja"}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Fill your details and submit booking request.
                </p>
              </div>
              <button
                type="button"
                onClick={closeBookingForm}
                className="rounded-lg border border-border px-3 py-1.5 text-sm"
              >
                Close
              </button>
            </div>

            <form onSubmit={submitBooking} className="mt-5 grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Name *
                <input
                  required
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={bookingForm.name}
                  onChange={(e) =>
                    setBookingForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Phone *
                <input
                  required
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={bookingForm.phone}
                  onChange={(e) =>
                    setBookingForm((f) => ({ ...f, phone: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={bookingForm.email}
                  onChange={(e) =>
                    setBookingForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                City
                <input
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={bookingForm.city}
                  onChange={(e) =>
                    setBookingForm((f) => ({ ...f, city: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Preferred date
                <input
                  type="date"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={bookingForm.preferredDate}
                  onChange={(e) =>
                    setBookingForm((f) => ({ ...f, preferredDate: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium">
                Preferred time
                <input
                  placeholder="e.g. 10:30 AM"
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={bookingForm.preferredTime}
                  onChange={(e) =>
                    setBookingForm((f) => ({ ...f, preferredTime: e.target.value }))
                  }
                />
              </label>
              <label className="block text-sm font-medium sm:col-span-2">
                Notes
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
                  value={bookingForm.notes}
                  onChange={(e) =>
                    setBookingForm((f) => ({ ...f, notes: e.target.value }))
                  }
                />
              </label>

              {bookingMessage && (
                <p
                  className={`sm:col-span-2 rounded-lg border px-3 py-2 text-sm ${
                    bookingMessage.toLowerCase().includes("success")
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {bookingMessage}
                </p>
              )}

              <div className="sm:col-span-2 flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={closeBookingForm}
                  className="flex-1 rounded-xl border border-border py-2.5 text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={bookingSubmitting}
                  className="cta-btn flex-1 rounded-xl py-2.5 text-sm font-semibold disabled:opacity-60"
                >
                  {bookingSubmitting ? "Submitting..." : "Submit booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {successOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-4 sm:items-center">
          <div
            className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 text-center shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-success-title"
          >
            <h2 id="booking-success-title" className="text-xl font-bold text-foreground">
              Booking Successful
            </h2>
            <p className="mt-3 text-sm text-muted">
              Our astrologer will connect you soon.
            </p>
            <button
              type="button"
              onClick={() => setSuccessOpen(false)}
              className="cta-btn mt-5 rounded-xl px-4 py-2.5 text-sm font-semibold"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
