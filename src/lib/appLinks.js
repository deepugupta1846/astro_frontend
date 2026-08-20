/** Google Play listing — user app. */
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.astro.pulse";

/** Google Play listing — astrologer / partner app. */
export const PARTNER_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.astroplus.partner";

/** Public share paths — visiting redirects to the matching Play Store listing. */
export const APP_DOWNLOAD_PATH = "/app/download";
export const PARTNER_DOWNLOAD_PATH = "/app/partner/download";

/** Thumbnails for link previews and native share. */
export const APP_SHARE_IMAGE = "/showcase/img1.jpg";
export const PARTNER_SHARE_IMAGE = "/showcase/img (2).jpg";

export const APP_SHARE_TITLE = "Download Astro Plus";
export const APP_SHARE_DESCRIPTION =
  "Chat with verified astrologers on Astro Plus — daily horoscope, kundli, matchmaking & more.";

export const PARTNER_SHARE_TITLE = "Download Astro Plus Partner";
export const PARTNER_SHARE_DESCRIPTION =
  "Join Astro Plus as an astrologer — manage consultations, earnings, sessions, and availability from the partner app.";

/** Site origin for absolute Open Graph URLs (set in production). */
export function getSiteOrigin() {
  const raw =
    typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
      ? process.env.NEXT_PUBLIC_SITE_URL.trim()
      : "";
  return raw.replace(/\/$/, "") || "https://astropulse.in";
}

export function getAppShareUrl(origin = getSiteOrigin()) {
  return `${origin}${APP_DOWNLOAD_PATH}`;
}

export function getPartnerShareUrl(origin = getSiteOrigin()) {
  return `${origin}${PARTNER_DOWNLOAD_PATH}`;
}

export function getAppShareImageUrl(origin = getSiteOrigin()) {
  return `${origin}${APP_SHARE_IMAGE}`;
}

export function getPartnerShareImageUrl(origin = getSiteOrigin()) {
  return `${origin}${PARTNER_SHARE_IMAGE}`;
}

export function buildShareMetadata({
  title,
  description,
  sharePath,
  shareImage,
  imageAlt,
}) {
  const siteOrigin = getSiteOrigin();
  const shareUrl = `${siteOrigin}${sharePath}`;
  const shareImageUrl = `${siteOrigin}${shareImage}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: shareUrl,
      siteName: "Astro Plus",
      type: "website",
      images: [
        {
          url: shareImageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImageUrl],
    },
  };
}
