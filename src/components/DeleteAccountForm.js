"use client";

import { useState } from "react";
import { sendOtp, requestAccountDeletion } from "@/lib/userApi";

const inputClass =
  "w-full rounded-xl border border-border bg-accent/40 px-4 py-3 text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/25";

export default function DeleteAccountForm() {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [otp, setOtp] = useState("");
  const [reason, setReason] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSendOtp(e) {
    e.preventDefault();
    if (!phone.trim() || sendLoading) return;
    setError("");
    setSendLoading(true);
    try {
      await sendOtp({ phone, countryCode });
      setOtpSent(true);
    } catch (err) {
      setError(err.message || "Failed to send OTP");
    } finally {
      setSendLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!phone.trim() || otp.length !== 6 || submitLoading) return;
    setError("");
    setSubmitLoading(true);
    try {
      await requestAccountDeletion({ phone, countryCode, otp, reason });
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Failed to submit deletion request");
    } finally {
      setSubmitLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-3xl border border-primary/30 bg-brand-muted p-8 text-center">
        <h2 className="text-xl font-bold text-foreground">Request submitted</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your account deletion request has been received. Your account is
          temporarily deactivated while our team reviews the request. All
          personal data will be permanently removed once approved.
        </p>
        <p className="mt-4 text-sm text-muted">
          Changed your mind? Contact{" "}
          <a
            href="mailto:support@astropulse.in"
            className="font-semibold text-primary hover:underline"
          >
            support@astropulse.in
          </a>{" "}
          before the request is processed.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleSendOtp}
        className="rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-8"
      >
        <h2 className="text-xl font-bold text-foreground">Verify your phone</h2>
        <p className="mt-2 text-sm text-muted">
          Enter the mobile number linked to your Astro Plus account. We&apos;ll
          send a one-time password to confirm it&apos;s you.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <div className="sm:w-28">
            <label
              htmlFor="delete-country"
              className="mb-1.5 block text-sm font-semibold text-foreground/85"
            >
              Code
            </label>
            <input
              id="delete-country"
              type="text"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className={inputClass}
              placeholder="+91"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="delete-phone"
              className="mb-1.5 block text-sm font-semibold text-foreground/85"
            >
              Mobile number
            </label>
            <input
              id="delete-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
              className={inputClass}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={sendLoading || !phone.trim()}
          className="cta-btn mt-6 w-full px-8 py-3.5 text-base disabled:opacity-60 sm:w-auto"
        >
          {sendLoading ? "Sending…" : otpSent ? "Resend OTP" : "Send OTP"}
        </button>

        {otpSent ? (
          <p className="mt-3 text-sm text-muted">
            OTP sent. Check your SMS and enter the 6-digit code below.
          </p>
        ) : null}
      </form>

      {otpSent ? (
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-8"
        >
          <h2 className="text-xl font-bold text-foreground">
            Confirm deletion request
          </h2>
          <p className="mt-2 text-sm text-muted">
            This action cannot be undone once approved. Wallet balance,
            kundlis, chat history, and profile data will be permanently
            deleted.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="delete-otp"
                className="mb-1.5 block text-sm font-semibold text-foreground/85"
              >
                OTP
              </label>
              <input
                id="delete-otp"
                type="text"
                inputMode="numeric"
                maxLength={6}
                required
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                placeholder="6-digit code"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="delete-reason"
                className="mb-1.5 block text-sm font-semibold text-foreground/85"
              >
                Reason (optional)
              </label>
              <textarea
                id="delete-reason"
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Tell us why you're leaving (optional)…"
                className={`${inputClass} resize-y min-h-[80px]`}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitLoading || otp.length !== 6}
            className="mt-6 w-full rounded-xl border border-primary bg-primary px-8 py-3.5 text-base font-bold text-white transition hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
          >
            {submitLoading ? "Submitting…" : "Request account deletion"}
          </button>
        </form>
      ) : null}

      {error ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      ) : null}
    </div>
  );
}
