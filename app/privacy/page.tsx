import { InformationBanner } from "@/components/InformationBanner";
import { InteriorPage } from "@/components/InteriorPage";
import { PageSection } from "@/components/PageSection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "Privacy policy information for the Young’s Healthcare & Scientific Solutions website.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <InteriorPage
      eyebrow="Legal Information"
      title="Privacy Policy"
      description="A draft page awaiting the company’s approved privacy and data handling information."
      breadcrumbLabel="Privacy Policy"
      tone="white"
    >
      <PageSection eyebrow="Draft Legal Content" title="Pending company and legal review." tone="mint">
        <InformationBanner>
          This is draft placeholder content, not an approved privacy policy. Confirm the company’s data practices, applicable jurisdictions, legal entity and contact details before publishing.
        </InformationBanner>
      </PageSection>
      <PageSection eyebrow="Policy Framework" title="Information to be confirmed.">
        <div className="legal-content">
          <h2>Information collected</h2>
          <p>Document the information this website collects, including any information entered into forms or collected through analytics and hosting services.</p>
          <h2>Use, retention and sharing</h2>
          <p>Describe the verified purposes, retention periods, service providers and any disclosures that apply to the operating website.</p>
          <h2>Visitor choices and contact</h2>
          <p>Add the approved process for privacy requests, applicable rights and the official contact channel. No specific data practices are represented by this draft.</p>
        </div>
      </PageSection>
    </InteriorPage>
  );
}