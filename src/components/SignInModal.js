"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sendOtp, signupUser, verifyOtp } from "@/lib/userApi";
import {
  PARTNER_DOWNLOAD_PATH,
  PARTNER_PLAY_STORE_URL,
  PARTNER_SHARE_DESCRIPTION,
  PARTNER_SHARE_IMAGE,
  PARTNER_SHARE_TITLE,
} from "@/lib/appLinks";
import { shareAppLink } from "@/lib/shareAppLink";

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/25";

export default function SignInModal({ open, onClose }) {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [verifiedUser, setVerifiedUser] = useState(null);
  const [shareHint, setShareHint] = useState("");

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStep("phone");
      setPhone("");
      setOtp("");
      setName("");
      setEmail("");
      setError("");
      setSuccess(false);
      setVerifiedUser(null);
      setShareHint("");
      setLoading(false);
    }
  }, [open]);

  async function handleSendOtp(e) {
    e.preventDefault();
    if (!phone.trim() || loading) return;
    setError("");
    setLoading(true);
    try {
      await sendOtp({ phone, countryCode });
      setStep("otp");
    } catch (err) {
      setError(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyOtp(e) {
    e.preventDefault();
    if (!otp.trim() || otp.length !== 6 || loading) return;
    setError("");
    setLoading(true);
    try {
      const data = await verifyOtp({
        phone,
        countryCode,
        otp,
        signupIntent: "astrologer",
      });
      const user = data?.data?.user;
      setVerifiedUser(user ?? null);
      if (user?.name) setName(user.name);
      if (user?.email) setEmail(user.email || "");
      if (user?.astrologerId) {
        setSuccess(true);
      } else {
        setStep("register");
      }
    } catch (err) {
      setError(err.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    if (!name.trim() || loading) return;
    setError("");
    setLoading(true);
    try {
      await signupUser({ phone, countryCode, name, email });
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleSharePartnerApp() {
    try {
      const hint = await shareAppLink({
        origin: window.location.origin,
        downloadPath: PARTNER_DOWNLOAD_PATH,
        shareImage: PARTNER_SHARE_IMAGE,
        title: PARTNER_SHARE_TITLE,
        description: PARTNER_SHARE_DESCRIPTION,
      });
      setShareHint(hint);
    } catch (err) {
      if (err?.name === "AbortError") return;
      setShareHint("Could not share — use /app/partner/download");
    }
    window.setTimeout(() => setShareHint(""), 2500);
  }

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            role="presentation"
            className="fixed inset-0 z-[200] bg-foreground/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sign-in-modal-title"
            className="fixed inset-0 z-[201] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-accent hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="border-b border-border px-6 pb-5 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  Astro Plus
                </p>
                <h2
                  id="sign-in-modal-title"
                  className="mt-2 pr-8 text-xl font-extrabold text-foreground"
                >
                  {success
                    ? "You're all set"
                    : step === "register"
                      ? "Register as astrologer"
                      : "Sign in with phone"}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {success
                    ? "Your phone is verified and astrologer access is enabled."
                    : step === "register"
                      ? "Add your details to start astrologer onboarding."
                      : "Enter your mobile number to receive a one-time password."}
                </p>
              </div>

              <div className="px-6 py-6">
                {success ? (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-primary/25 bg-brand-muted/60 px-4 py-4 text-sm leading-relaxed text-foreground">
                      {verifiedUser?.astrologerId
                        ? "This number is already linked to an astrologer profile. Open the app to manage consultations."
                        : "Registration started successfully. Download the Astro Plus app to upload ID proof, set your fees, and go live."}
                    </div>
                    <Link
                      href={PARTNER_DOWNLOAD_PATH}
                      onClick={onClose}
                      className="cta-btn flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold"
                    >
                      Download partner app
                    </Link>
                    <button
                      type="button"
                      onClick={handleSharePartnerApp}
                      className="w-full rounded-xl border border-border py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
                    >
                      Share partner app link
                    </button>
                    {shareHint ? (
                      <p className="text-center text-xs font-medium text-primary">
                        {shareHint}
                      </p>
                    ) : (
                      <p className="text-center text-xs text-muted">
                        Share link:{" "}
                        <Link
                          href={PARTNER_DOWNLOAD_PATH}
                          className="font-semibold text-primary hover:underline"
                          onClick={onClose}
                        >
                          /app/partner/download
                        </Link>
                      </p>
                    )}
                    <a
                      href={PARTNER_PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-xs font-medium text-muted underline-offset-2 hover:text-primary hover:underline"
                    >
                      Open on Google Play
                    </a>
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full rounded-xl border border-border py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
                    >
                      Close
                    </button>
                  </div>
                ) : step === "phone" ? (
                  <form onSubmit={handleSendOtp} className="space-y-4">
                    <div>
                      <label
                        htmlFor="signin-phone"
                        className="block text-sm font-medium text-foreground"
                      >
                        Phone number
                      </label>
                      <div className="mt-2 flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="w-24 shrink-0 rounded-xl border border-border bg-background px-2 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
                          aria-label="Country code"
                        >
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+971">+971</option>
                        </select>
                        <input
                          id="signin-phone"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel"
                          placeholder="10-digit mobile"
                          value={phone}
                          onChange={(e) =>
                            setPhone(e.target.value.replace(/\D/g, "").slice(0, 15))
                          }
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>
                    {error && (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={loading || phone.length < 10}
                      className="cta-btn w-full rounded-xl py-3 text-sm font-bold disabled:opacity-60"
                    >
                      {loading ? "Sending…" : "Continue"}
                    </button>
                  </form>
                ) : step === "otp" ? (
                  <form onSubmit={handleVerifyOtp} className="space-y-4">
                    <p className="text-sm text-muted">
                      OTP sent to{" "}
                      <span className="font-semibold text-foreground">
                        {countryCode} {phone}
                      </span>
                    </p>
                    <div>
                      <label
                        htmlFor="signin-otp"
                        className="block text-sm font-medium text-foreground"
                      >
                        6-digit OTP
                      </label>
                      <input
                        id="signin-otp"
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        maxLength={6}
                        placeholder="000000"
                        value={otp}
                        onChange={(e) =>
                          setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                        }
                        className={`${inputClass} mt-2 tracking-[0.35em]`}
                        required
                      />
                    </div>
                    {error && (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={loading || otp.length !== 6}
                      className="cta-btn w-full rounded-xl py-3 text-sm font-bold disabled:opacity-60"
                    >
                      {loading ? "Verifying…" : "Verify & continue"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setStep("phone");
                        setOtp("");
                        setError("");
                      }}
                      className="w-full text-sm font-semibold text-primary hover:underline"
                    >
                      Change phone number
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <label
                        htmlFor="signin-name"
                        className="block text-sm font-medium text-foreground"
                      >
                        Full name
                      </label>
                      <input
                        id="signin-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`${inputClass} mt-2`}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="signin-email"
                        className="block text-sm font-medium text-foreground"
                      >
                        Email <span className="text-muted">(optional)</span>
                      </label>
                      <input
                        id="signin-email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`${inputClass} mt-2`}
                      />
                    </div>
                    {error && (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={loading || !name.trim()}
                      className="cta-btn w-full rounded-xl py-3 text-sm font-bold disabled:opacity-60"
                    >
                      {loading ? "Registering…" : "Register as astrologer"}
                    </button>
                  </form>
                )}

                {!success && (
                  <p className="mt-5 text-center text-xs text-muted">
                    Admin access?{" "}
                    <Link
                      href="/sign-in"
                      onClick={onClose}
                      className="font-semibold text-primary hover:underline"
                    >
                      Sign in here
                    </Link>
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
