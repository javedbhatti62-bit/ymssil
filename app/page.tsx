import { ContactCTA } from "@/components/ContactCTA";
import { CorporateHighlights } from "@/components/CorporateHighlights";
import { DivisionGrid } from "@/components/DivisionGrid";
import { EcosystemOverview } from "@/components/EcosystemOverview";
import { Hero } from "@/components/Hero";
import { NewsGrid } from "@/components/NewsGrid";
import { PartnershipSection } from "@/components/PartnershipSection";
import { ResearchSection } from "@/components/ResearchSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <CorporateHighlights />
      <EcosystemOverview />
      <DivisionGrid />
      <ResearchSection />
      <PartnershipSection />
      <NewsGrid />
      <ContactCTA />
    </main>
  );
}