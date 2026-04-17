import { createHash } from "node:crypto";

function md5Hex(s) {
  return createHash("md5").update(String(s).trim().toLowerCase(), "utf8").digest("hex");
}

/**
 * Synthetic email → Gravatar hash (stable per astrologer, no real mailbox).
 * @param {number} id
 * @param {string} phone
 */
function emailSeed(id, phone) {
  return `astro-${id}-${String(phone).replace(/\D/g, "")}@astropulse.local`;
}

/**
 * Gravatar URL with a gendered default portrait (Gravatar serves `d=` when no user photo exists).
 * @param {{ id: number, name: string, phone: string, gender?: 'male' | 'female' }} row
 */
export function gravatarAstrologerImageUrl(row) {
  const email = emailSeed(row.id, row.phone);
  const hash = md5Hex(email);
  const isFemale = row.gender === "female";
  const idx = parseInt(md5Hex(`${row.id}-${row.name}`).slice(0, 8), 16) % 99;
  const fallback = isFemale
    ? `https://randomuser.me/api/portraits/women/${idx}.jpg`
    : `https://randomuser.me/api/portraits/men/${idx}.jpg`;
  const d = encodeURIComponent(fallback);
  return `https://www.gravatar.com/avatar/${hash}?s=400&r=g&d=${d}`;
}
