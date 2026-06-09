import { getApiBaseUrl } from "./apiBase";
import { getStoredToken } from "./adminAuth";

/**
 * @param {string} path - e.g. "/api/v1/admin/users" (leading slash optional)
 * @param {RequestInit} [init]
 */
export async function adminFetch(path, init = {}) {
  const base = getApiBaseUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  const url = `${base}${p}`;
  const token = getStoredToken();
  const headers = new Headers(init.headers || {});
  const isFormData =
    typeof FormData !== "undefined" && init.body instanceof FormData;
  if (!headers.has("Content-Type") && init.body && !isFormData) {
    headers.set("Content-Type", "application/json");
  }
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  const res = await fetch(url, { ...init, headers });
  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    const msg =
      (data && (data.message || data.error)) ||
      res.statusText ||
      "Request failed";
    const err = new Error(typeof msg === "string" ? msg : JSON.stringify(msg));
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

/** Upload image to /api/v1/upload/image (field: image). Returns public URL. */
export async function uploadImage(file) {
  const fd = new FormData();
  fd.append("image", file);
  const json = await adminFetch("/api/v1/upload/image", {
    method: "POST",
    body: fd,
  });
  const url = json?.data?.url;
  if (!url) throw new Error("Upload did not return a URL");
  return url;
}
