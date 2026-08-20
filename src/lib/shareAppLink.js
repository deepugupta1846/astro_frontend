/**
 * Native share with optional thumbnail (Web Share API).
 * Returns a short status message for UI feedback.
 */
export async function shareAppLink({
  origin,
  downloadPath,
  shareImage,
  title,
  description,
}) {
  const url = `${origin}${downloadPath}`;
  const sharePayload = { title, text: description, url };

  let imageFile = null;
  try {
    const res = await fetch(`${origin}${shareImage}`);
    if (res.ok) {
      const blob = await res.blob();
      imageFile = new File([blob], "astro-plus-share.jpg", {
        type: blob.type || "image/jpeg",
      });
    }
  } catch {
    imageFile = null;
  }

  if (
    imageFile &&
    typeof navigator !== "undefined" &&
    navigator.canShare?.({ ...sharePayload, files: [imageFile] })
  ) {
    await navigator.share({ ...sharePayload, files: [imageFile] });
    return "Shared with preview image";
  }

  if (typeof navigator !== "undefined" && navigator.share) {
    await navigator.share(sharePayload);
    return "Link shared";
  }

  if (typeof navigator !== "undefined" && navigator.clipboard) {
    await navigator.clipboard.writeText(url);
    return "Link copied";
  }

  return "Share not supported";
}
