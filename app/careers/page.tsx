import Link from "next/link";
import { ArrowRight, BookOpenCheck, Microscope, Stethoscope } from "lucide-react";
import { InteriorPage } from "@/components/InteriorPage";
import { PageSection } from "@/components/PageSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Careers",
  "Career enquiries for Young’s Healthcare & Scientific Solutions International Limited.",
  "/careers",
);

export default function CareersPage() {
  return (
    <InteriorPage
      eyebrow="Careers"
      title="Build a future in health and science."
      description="We are preparing this space for official career opportunities and information about working with Young’s."
      image="https://images.pexels.com/photos/6129657/pexels-photo-6129657.jpeg?auto=compress&cs=tinysrgb&w=1800"
      imageAlt="Healthcare professionals talking in a hospital hallway"
    >
      <PageSection
        eyebrow="Working Across the Group"
        title="Many disciplines. A shared interest in progress."
        description="Young’s divisions span healthcare delivery, education, research, professional development and enterprise. This is an overview of the group’s fields, not a list of vacancies."
        tone="white"
      >
        <div className="service-card-grid">
          <ScrollReveal delay={0}>
            <ServiceCard icon={Stethoscope} title="Healthcare delivery" description="Hospitals, healthcare centers, clinics, pharmacy and diagnostics." />
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <ServiceCard icon={BookOpenCheck} title="Education & development" description="Nursing, allied health and professional learning areas." />
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <ServiceCard icon={Microscope} title="Research & science" description="Scientific research, innovation, analysis and publishing areas." />
          </ScrollReveal>
        </div>
      </PageSection>
      <PageSection
        eyebrow="Career Enquiries"
        title="Official application details will follow."
        description="No current vacancies or application channels are represented here. For a general enquiry, use the contact page; it currently provides editable details only and does not submit messages."
        tone="mint"
      >
        <Link className="button-primary" href="/contact">
          Contact information <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </PageSection>
      <PartnershipSection />
    </InteriorPage>
  );
}