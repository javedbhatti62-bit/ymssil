import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import divisionFeature from "../../../pexels-rdne-6129657.jpg";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeatureSection } from "@/components/FeatureSection";
import { InteriorPage } from "@/components/InteriorPage";
import { DivisionCard } from "@/components/DivisionCard";
import { PageSection } from "@/components/PageSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { divisions } from "@/data/divisions";
import { createPageMetadata } from "@/lib/metadata";

type DivisionParams = { slug: string };

export const instant = false;

export function generateStaticParams() {
  return divisions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<DivisionParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const division = divisions.find((item) => item.slug === slug);

  return division
    ? createPageMetadata(division.title, division.description, `/divisions/${slug}`)
    : { title: "Division not found" };
}

export default async function DivisionPage({
  params,
}: {
  params: Promise<DivisionParams>;
}) {
  const { slug } = await params;
  const divisionIndex = divisions.findIndex((item) => item.slug === slug);
  const division = divisions[divisionIndex];

  if (!division) notFound();

  const relatedDivisions = [
    divisions[(divisionIndex + 1) % divisions.length],
    divisions[(divisionIndex + divisions.length - 1) % divisions.length],
  ];

  return (
    <>
      <InteriorPage
        eyebrow={`Division ${division.number} / 11`}
        title={division.title}
        description={division.description}
        breadcrumbLabel="Our Divisions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Divisions", href: "/divisions" },
          { label: division.title },
        ]}
      >
        <FeatureSection
          eyebrow={`Division ${division.number}`}
          title="A focused part of a connected group."
          description={`${division.description} The image is illustrative and does not represent a Young’s operating facility.`}
          image={divisionFeature}
          imageAlt="Illustrative healthcare professionals in a clinical setting; not a Young’s facility"
          href={`/contact#${division.contactTopicId}`}
          actionLabel="Discuss this area"
        />
        <PageSection
          eyebrow="Stated Scope"
          title="Areas within this division."
          description="These focus areas are derived from the division’s name and summary. Specific services and availability should be confirmed with Young’s before publication."
          tone="white"
        >
          <div className="division-overview-grid">
            {division.serviceAreas.map((area, index) => (
              <ScrollReveal delay={index * 0.05} key={area}>
                <ServiceCard
                  icon={division.icon}
                  number={`${division.number}.${index + 1}`}
                  title={area}
                  description={`A stated area of focus within ${division.title.replace("Young’s ", "")}.`}
                  href={`/contact#${division.contactTopicId}`}
                  actionLabel="Enquire about this area"
                />
              </ScrollReveal>
            ))}
          </div>
        </PageSection>
        <PageSection
          eyebrow="Relevant Audience"
          title="Who may find this area relevant?"
          tone="mint"
        >
          <div className="division-audience-band">
            <span>Potential audience</span>
            <p>{division.audience}. This describes a relevant audience, not an existing client or partnership.</p>
          </div>
        </PageSection>
        <PageSection eyebrow="Common Questions" title="About this division’s scope.">
          <FAQAccordion
            items={[
              {
                question: "What does this division focus on?",
                answer: <p>{division.description} Its listed scope areas reflect the division name and require confirmation for specific services.</p>,
              },
              {
                question: "Are detailed services or availability listed here?",
                answer: <p>No. This page provides a high-level overview. Official service and availability details can be added once confirmed.</p>,
              },
              {
                question: "How can I make an enquiry?",
                answer: <p>The <Link href={`/contact#${division.contactTopicId}`}>Contact page</Link> identifies the relevant topic. It does not currently send enquiries.</p>,
              },
            ]}
          />
        </PageSection>
        <PageSection eyebrow="The Wider Group" title="Explore more divisions." tone="mist">
          <div className="detail-division-grid">
            {relatedDivisions.map((related) => <DivisionCard division={related} key={related.slug} />)}
          </div>
        </PageSection>
        <PartnershipSection />
      </InteriorPage>
    </>
  );
}