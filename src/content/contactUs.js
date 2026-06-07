import { LEGAL_CONTACT_EMAIL } from "./legalPolicies";

export const contactChannels = [
  {
    title: "Email support",
    description:
      "For account issues, wallet refunds, consultation disputes, or privacy requests.",
    value: LEGAL_CONTACT_EMAIL,
    href: `mailto:${LEGAL_CONTACT_EMAIL}`,
    cta: "Send an email",
  },
  {
    title: "Response time",
    description:
      "We aim to reply within 24–48 hours on business days. Urgent in-app issues are handled faster via chat support.",
    value: "Mon–Sat, 10 AM – 7 PM IST",
    cta: null,
  },
  {
    title: "In-app help",
    description:
      "Already using Astro Pulse? Open the app, go to Profile → Help & Support for live chat with our team.",
    value: "Available in the mobile app",
    cta: null,
  },
];

export const contactTopics = [
  "Wallet top-up or refund status",
  "Consultation quality or astrologer feedback",
  "Kundli, matchmaking, or birth details correction",
  "Account deletion or data privacy",
  "Partnerships and astrologer onboarding",
];
