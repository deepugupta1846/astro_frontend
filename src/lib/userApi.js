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

export async function verifyOtp({
  phone,
  countryCode = "+91",
  otp,
  signupIntent,
}) {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/api/v1/user/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phone: phone.trim(),
      countryCode,
      otp: otp.trim(),
      ...(signupIntent ? { signupIntent } : {}),
    }),
  });
  return parseJson(res);
}

export async function signupUser({
  phone,
  countryCode = "+91",
  name,
  email,
}) {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/api/v1/user/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phone: phone.trim(),
      countryCode,
      name: name?.trim(),
      ...(email?.trim() ? { email: email.trim() } : {}),
    }),
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
