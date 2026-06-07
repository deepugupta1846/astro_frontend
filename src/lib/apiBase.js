/**
 * Public REST API base (no trailing slash). Override with NEXT_PUBLIC_API_BASE_URL.
 */
export function getApiBaseUrl() {
  const raw =
    typeof process.env.NEXT_PUBLIC_API_BASE_URL === "string"
      ? process.env.NEXT_PUBLIC_API_BASE_URL.trim()
      : "";
  return raw.replace(/\/$/, "") || "https://api.astropulse.live";
}

// http://localhost:5000