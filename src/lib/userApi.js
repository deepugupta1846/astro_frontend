import { getApiBaseUrl } from "./apiBase";

async function parseJson(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || `Request failed (${res.status})`);
  }
  return data;
}

export async function sendOtp({ phone, countryCode = "+91" }) {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/api/v1/user/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone: phone.trim(), countryCode }),
  });
  return parseJson(res);
}

export async function requestAccountDeletion({
  phone,
  countryCode = "+91",
  otp,
  reason,
}) {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/api/v1/user/request-account-deletion`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phone: phone.trim(),
      countryCode,
      otp: otp.trim(),
      reason: reason?.trim() || undefined,
    }),
  });
  return parseJson(res);
}
