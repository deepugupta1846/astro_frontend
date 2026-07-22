import LegalPageLayout from "@/components/LegalPageLayout";
import { LegalSections } from "@/components/LegalSections";
import {
  LEGAL_LAST_UPDATED,
  privacySections,
} from "@/content/legalPolicies";

export const metadata = {
  title: "Privacy Policy | Astro Pulse",
  description:
    "How Astro Pulse collects, uses, and protects your data, including how to delete your account and personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="How we handle your data when you consult astrologers on Astro Pulse — including account deletion."
      lastUpdated={LEGAL_LAST_UPDATED}
      currentPath="/privacy-policy"
    >
      <LegalSections sections={privacySections} />
    </LegalPageLayout>
  );
}
