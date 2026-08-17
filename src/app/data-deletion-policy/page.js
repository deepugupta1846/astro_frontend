import LegalPageLayout from "@/components/LegalPageLayout";
import { LegalSections } from "@/components/LegalSections";
import {
  LEGAL_LAST_UPDATED,
  dataDeletionSections,
} from "@/content/legalPolicies";

export const metadata = {
  title: "Data Deletion Policy | Astro Plus",
  description:
    "How to request deletion of your Astro Plus account and personal data on the website and mobile app, what we delete, and what we may retain.",
};

export default function DataDeletionPolicyPage() {
  return (
    <LegalPageLayout
      title="Data Deletion Policy"
      description="How account and personal data deletion works on Astro Plus — for Google Play and user privacy transparency."
      lastUpdated={LEGAL_LAST_UPDATED}
      currentPath="/data-deletion-policy"
    >
      <LegalSections sections={dataDeletionSections} />
    </LegalPageLayout>
  );
}
