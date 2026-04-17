"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fields = [
  { name: "name", label: "Full name", type: "text", placeholder: "As on birth certificate" },
  { name: "dob", label: "Date of birth", type: "date" },
  { name: "tob", label: "Time of birth", type: "time" },
  { name: "place", label: "Birth place", type: "text", placeholder: "City, state" },
];

function FieldGroup({ title, prefix }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm shadow-primary/10 md:p-8">
      <h3 className="mb-6 text-lg font-bold text-foreground">{title}</h3>
      <div className="space-y-4">
        {fields.map((f) => (
          <div key={`${prefix}-${f.name}`}>
            <label
              htmlFor={`${prefix}-${f.name}`}
              className="mb-1.5 block text-sm font-semibold text-foreground/85"
            >
              {f.label}
            </label>
            <input
              id={`${prefix}-${f.name}`}
              name={`${prefix}-${f.name}`}
              type={f.type}
              placeholder={f.placeholder}
              className="w-full rounded-xl border border-border bg-accent/40 px-4 py-3 text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/25"
              required
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function KundliMatchForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <FieldGroup title="Bride / Partner 1" prefix="p1" />
        <FieldGroup title="Groom / Partner 2" prefix="p2" />
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <button
          type="submit"
          className="cta-btn-gold w-full max-w-md px-10 py-4 text-base sm:w-auto"
        >
          Match kundli now
        </button>
        <p className="max-w-sm text-center text-sm text-muted sm:text-left">
          Gun Milan (Ashtakoot), Mangal Dosha check, and a plain-language summary
          —full report after sign-in in the app.
        </p>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-primary/35 bg-brand-muted px-6 py-5 text-center text-foreground"
          >
            <p className="font-bold">Thanks — we&apos;ve received your details.</p>
            <p className="mt-2 text-sm text-muted">
              Connect the app backend to compute exact gunas. For now this demo
              only confirms the form; production will show scores and PDF.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm font-semibold text-primary underline hover:text-primary-hover"
            >
              Enter different details
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
