import notebookAstrologers from "@/data/notebookAstrologers.json";
import { gravatarAstrologerImageUrl } from "@/lib/gravatarAstrologerAvatar";

const SPECIALTY_SETS = [
  ["Tarot", "Life Coach", "Numerology"],
  ["Vedic", "Face Reading", "Life Coach"],
  ["Vedic", "Western", "Tarot"],
  ["Numerology", "Tarot", "Face Reading"],
  ["Vedic", "KP", "Remedies"],
  ["Palmistry", "Lal Kitab", "Vedic"],
  ["Numerology", "Vedic", "Career"],
  ["Tarot", "Psychic", "Healing"],
];

const LANGUAGE_SETS = [
  "Hindi",
  "English, Hindi",
  "English, Hindi, Punjabi",
  "Hindi, Punjabi",
  "English, Hindi, Bengali",
];

function formatOrders(n) {
  if (n >= 50_000) return "50k+ orders";
  if (n >= 10_000) return "10k+ orders";
  if (n >= 1000) return `${Math.round(n / 1000)}k+ orders`;
  return `${n}+ orders`;
}

/**
 * @param {typeof notebookAstrologers[0]} row
 * @param {number} i
 */
function mapNotebookEntry(row, i) {
  const specialties = SPECIALTY_SETS[i % SPECIALTY_SETS.length];
  const experienceYears = 3 + (i % 12);
  const fee = 28 + (i % 17) * 3;
  const rating = Math.min(4.99, 4.88 + ((i * 13) % 12) * 0.01);
  const totalOrders = 10_000 + i * 1847 + (i % 5) * 2100;
  const gender = row.gender === "female" ? "female" : "male";

  return {
    id: row.id,
    name: row.name.replace(/^Astro\s+/i, ""),
    specialties: specialties.join(", "),
    rating,
    orders: formatOrders(totalOrders),
    languages: LANGUAGE_SETS[i % LANGUAGE_SETS.length],
    experienceYears,
    experience: `${experienceYears} years`,
    price: `₹${fee}/min`,
    image: gravatarAstrologerImageUrl({
      id: row.id,
      name: row.name,
      phone: row.phone,
      gender,
    }),
    online: i % 4 !== 2,
    celebrity: i % 6 === 0 || rating >= 4.97,
  };
}

/** Cards for the home “Top astrologers” section from `notebookAstrologers.json`. */
export function getNotebookAstrologersCards() {
  return notebookAstrologers.map((row, i) => mapNotebookEntry(row, i));
}
