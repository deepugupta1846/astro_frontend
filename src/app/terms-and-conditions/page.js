import LegalPageLayout from "@/components/LegalPageLayout";
import { LegalSections } from "@/components/LegalSections";
import {
  LEGAL_LAST_UPDATED,
  termsSections,
} from "@/content/legalPolicies";

export const metadata = {
  title: "Terms & Conditions | Astro Pulse",
  description:
    "Terms and conditions for using Astro Pulse astrology consultations, wallet, and related services.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      description="Please read these terms carefully before using Astro Pulse."
      lastUpdated={LEGAL_LAST_UPDATED}
      currentPath="/terms-and-conditions"
    >
      <LegalSections sections={termsSections} />
    </LegalPageLayout>
  );
}
