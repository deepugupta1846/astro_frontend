import AppStoreRedirect from "@/components/AppStoreRedirect";
import {
  PARTNER_DOWNLOAD_PATH,
  PARTNER_PLAY_STORE_URL,
  PARTNER_SHARE_DESCRIPTION,
  PARTNER_SHARE_IMAGE,
  PARTNER_SHARE_TITLE,
  buildShareMetadata,
} from "@/lib/appLinks";

export const metadata = buildShareMetadata({
  title: PARTNER_SHARE_TITLE,
  description: PARTNER_SHARE_DESCRIPTION,
  sharePath: PARTNER_DOWNLOAD_PATH,
  shareImage: PARTNER_SHARE_IMAGE,
  imageAlt: "Astro Plus Partner — app for astrologers",
});

export default function PartnerDownloadSharePage() {
  return (
    <AppStoreRedirect
      storeUrl={PARTNER_PLAY_STORE_URL}
      shareImage={PARTNER_SHARE_IMAGE}
      brandLabel="Astro Plus Partner"
      heading="Opening Google Play for partners…"
      imageAlt="Astro Plus Partner app preview"
      ctaLabel="Get Partner app on Google Play"
    />
  );
}
