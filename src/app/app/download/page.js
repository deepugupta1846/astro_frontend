import AppStoreRedirect from "@/components/AppStoreRedirect";
import {
  APP_SHARE_DESCRIPTION,
  APP_SHARE_IMAGE,
  APP_SHARE_TITLE,
  APP_DOWNLOAD_PATH,
  PLAY_STORE_URL,
  buildShareMetadata,
} from "@/lib/appLinks";

export const metadata = buildShareMetadata({
  title: APP_SHARE_TITLE,
  description: APP_SHARE_DESCRIPTION,
  sharePath: APP_DOWNLOAD_PATH,
  shareImage: APP_SHARE_IMAGE,
  imageAlt: "Astro Plus — talk to verified astrologers",
});

export default function AppDownloadSharePage() {
  return (
    <AppStoreRedirect
      storeUrl={PLAY_STORE_URL}
      shareImage={APP_SHARE_IMAGE}
      imageAlt="Astro Plus app preview"
    />
  );
}
