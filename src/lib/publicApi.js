import { getApiBaseUrl } from "./apiBase";

const FALLBACK_FACE =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";

/**
 * @param {number} n
 */
function formatConsultCount(n) {
  if (n == null || Number.isNaN(n)) return "0";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 10_000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(Math.round(n));
}

/**
 * Map API astrologer row to TopAstrologers card props.
 * @param {Record<string, unknown>} raw
 */
export function mapAstrologerForCard(raw) {
  const specs = Array.isArray(raw.specialties)
    ? raw.specialties.filter(Boolean)
    : [];
  let title = "Astrologer";
  if (specs.length >= 2) {
    title = `${specs[0]} · ${specs[1]}`;
  } else if (specs.length === 1) {
    title = String(specs[0]);
  } else if (raw.bio && String(raw.bio).trim()) {
    const b = String(raw.bio).trim();
    title = b.length > 48 ? `${b.slice(0, 45)}…` : b;
  }

  const langs = Array.isArray(raw.languages)
    ? raw.languages.filter(Boolean).slice(0, 4).join(", ")
    : "";

  const expYears =
    raw.experienceYears != null && raw.experienceYears !== ""
      ? Number(raw.experienceYears)
      : null;
  const exp =
    expYears != null && !Number.isNaN(expYears)
      ? `${Math.round(expYears)}+ yrs`
      : "—";

  const feeRaw =
    raw.consultationFeePerMin != null && raw.consultationFeePerMin !== ""
      ? Number(raw.consultationFeePerMin)
      : null;
  const price =
    feeRaw != null && !Number.isNaN(feeRaw)
      ? `₹${feeRaw.toLocaleString("en-IN")}/min`
      : "—";

  const rating =
    raw.averageRating != null && raw.averageRating !== ""
      ? Number(raw.averageRating)
      : 0;

  const total =
    raw.totalConsultations != null && raw.totalConsultations !== ""
      ? Number(raw.totalConsultations)
      : 0;

  const url =
    raw.profileImageUrl != null && String(raw.profileImageUrl).trim()
      ? String(raw.profileImageUrl).trim()
      : FALLBACK_FACE;

  return {
    id: raw.id,
    name: raw.name ? String(raw.name) : "Astrologer",
    title,
    exp,
    langs: langs || "—",
    price,
    rating: Number.isFinite(rating) ? Math.min(5, Math.max(0, rating)) : 0,
    chats: `${formatConsultCount(total)} consults`,
    image: url,
    online: Boolean(raw.isOnline),
  };
}

/**
 * Active astrologers for marketing home (same as mobile app list).
 * @param {{ limit?: number, revalidate?: number }} [opts]
 */
export async function fetchPublicAstrologers(opts = {}) {
  const limit = opts.limit ?? 12;
  const revalidate = opts.revalidate ?? 60;
  const base = getApiBaseUrl();
  try {
    const res = await fetch(`${base}/api/v1/astrologer`, {
      next: { revalidate },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      return [];
    }
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    const mapped = list.map(mapAstrologerForCard);
    return mapped.slice(0, limit);
  } catch {
    return [];
  }
}
