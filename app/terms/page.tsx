import { InformationBanner } from "@/components/InformationBanner";
import { InteriorPage } from "@/components/InteriorPage";
import { PageSection } from "@/components/PageSection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Terms of Use",
  "Terms of use information for the Young’s Healthcare & Scientific Solutions website.",
  "/terms",
);

export default function TermsPage() {
  return (
    <InteriorPage
      eyebrow="Legal Information"
      title="Terms of Use"
      description="A draft page awaiting the company’s approved website terms."
      breadcrumbLabel="Terms of Use"
      tone="white"
    >
      <PageSection eyebrow="Draft Legal Content" title="Pending legal review." tone="mint">
        <InformationBanner>
          This is a drafting framework, not approved legal terms. Young’s legal counsel should review and complete it before publication.
        </InformationBanner>
      </PageSection>
      <PageSection eyebrow="Terms Framework" title="Sections for approved terms.">
        <div className="legal-content">
          <h2>Website use</h2>
          <p>Define permitted website use, intellectual property terms, third-party links and any limitations that apply to the published site.</p>
          <h2>Services and information</h2>
          <p>Set out how website information relates to the company’s services and any separate agreements or terms that may apply.</p>
          <h2>Applicable terms and contact</h2>
          <p>Add approved jurisdiction, governing terms, effective date and official contact information. This draft does not establish those details.</p>
        </div>
      </PageSection>
    </InteriorPage>
  );
}