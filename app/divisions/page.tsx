import { DivisionGrid } from "@/components/DivisionGrid";
import { InteriorPage } from "@/components/InteriorPage";
import { PageSection } from "@/components/PageSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Our Divisions",
  "Explore the 11 specialized divisions in the Young’s Healthcare & Scientific Solutions ecosystem.",
  "/divisions",
);

export default function DivisionsPage() {
  return (
    <>
      <InteriorPage
        eyebrow="Our Ecosystem"
        title="One group. Eleven specialized divisions."
        description="Explore an integrated portfolio spanning healthcare delivery, education, research, workforce solutions, medical trading and development."
        breadcrumbLabel="Our Divisions"
        image="https://images.pexels.com/photos/6129657/pexels-photo-6129657.jpeg?auto=compress&cs=tinysrgb&w=1800"
        imageAlt="Illustrative healthcare team image for the Young’s divisions overview"
        tone="navy"
      >
        <PageSection
          eyebrow="Connected Capabilities"
          title="Explore the group’s areas of focus."
          description="Each division represents a distinct field within the wider Young’s portfolio. Choose a card to review its stated scope."
        >
          <DivisionGrid showHeading={false} />
        </PageSection>
        <PartnershipSection />
      </InteriorPage>
    </>
  );
}