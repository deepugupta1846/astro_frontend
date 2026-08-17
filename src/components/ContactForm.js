"use client";

import { useState } from "react";
import { LEGAL_CONTACT_EMAIL } from "@/content/legalPolicies";

const inputClass =
  "w-full rounded-xl border border-border bg-accent/40 px-4 py-3 text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/25";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      message.trim(),
    ].join("\n");
    const mailto = `mailto:${LEGAL_CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject.trim() || "Astro Plus — Contact enquiry"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-8"
    >
      <h2 className="text-xl font-bold text-foreground">Send us a message</h2>
      <p className="mt-2 text-sm text-muted">
        Fill in the form and your email app will open with the details
        pre-filled—we&apos;ll reply to the address you provide.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-foreground/85">
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-foreground/85">
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-semibold text-foreground/85">
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What can we help with?"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-foreground/85">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your question or issue in detail…"
            className={`${inputClass} resize-y min-h-[120px]`}
          />
        </div>
      </div>

      <button type="submit" className="cta-btn mt-6 w-full px-8 py-3.5 text-base sm:w-auto">
        Open email to send
      </button>

      {submitted ? (
        <p className="mt-4 rounded-xl border border-primary/30 bg-brand-muted px-4 py-3 text-sm text-foreground">
          If your email app didn&apos;t open, write to{" "}
          <a
            href={`mailto:${LEGAL_CONTACT_EMAIL}`}
            className="font-semibold text-primary hover:underline"
          >
            {LEGAL_CONTACT_EMAIL}
          </a>{" "}
          directly.
        </p>
      ) : null}
    </form>
  );
}
