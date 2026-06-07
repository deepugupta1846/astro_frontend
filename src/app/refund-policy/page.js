import LegalPageLayout from "@/components/LegalPageLayout";
import { LegalSections } from "@/components/LegalSections";
import {
  LEGAL_LAST_UPDATED,
  refundSections,
} from "@/content/legalPolicies";

export const metadata = {
  title: "Refund & Cancellation Policy | Astro Pulse",
  description:
    "Refund and cancellation rules for wallet top-ups, consultations, and puja bookings on Astro Pulse.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      description="When refunds apply for consultations, wallet top-ups, and bookings."
      lastUpdated={LEGAL_LAST_UPDATED}
      currentPath="/refund-policy"
    >
      <LegalSections sections={refundSections} />
    </LegalPageLayout>
  );
}
