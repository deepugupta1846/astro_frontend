import { redirect } from "next/navigation";
import { PLAY_STORE_URL } from "@/lib/appLinks";

export const metadata = {
  title: "Download Astro Plus",
  description:
    "Get the Astro Plus app on Google Play — talk to verified astrologers on Android.",
};

export default function AppDownloadSharePage() {
  redirect(PLAY_STORE_URL);
}
