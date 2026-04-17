import notebookAstrologers from "@/data/notebookAstrologers.json";
import { gravatarAstrologerImageUrl } from "@/lib/gravatarAstrologerAvatar";

const SPECIALTIES = [
  "Vedic",
  "Tarot",
  "KP",
  "Numerology",
  "Palmistry",
  "Lal Kitab",
  "Remedies",
];

function formatConsultCount(n) {
  if (n == null || Number.isNaN(n)) return "0";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 10_000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(Math.round(n));
}

/**
 * @param {typeof notebookAstrologers[0]} row
 * @param {number} i
 */
function mapNotebookEntry(row, i) {
  const spec = SPECIALTIES[i % SPECIALTIES.length];
  const loc =
    row.location && row.location !== "India" ? row.location : "Pan‑India";
  const title = `${spec} · ${loc}`;

  const expYears = 8 + (i % 13);
  const fee = 15 + (i % 14);
  const rating = Math.min(
    4.99,
    4.7 + ((i * 17) % 30) * 0.01
  );
  const totalConsults = 800 + i * 211 + (i % 7) * 97;

  const gender = row.gender === "female" ? "female" : "male";

  return {
    id: row.id,
    name: row.name,
    title,
    exp: `${expYears}+ yrs`,
    langs: "Hindi, English",
    price: `₹${fee}/min`,
    rating,
    chats: `${formatConsultCount(totalConsults)} consults`,
    image: gravatarAstrologerImageUrl({
      id: row.id,
      name: row.name,
      phone: row.phone,
      gender,
    }),
    online: i % 4 !== 2,
  };
}

/** Cards for the home “Top astrologers” grid from `notebookAstrologers.json`. */
export function getNotebookAstrologersCards() {
  return notebookAstrologers.map((row, i) => mapNotebookEntry(row, i));
}
