import Link from "next/link";
import {
  Activity,
  BookOpenCheck,
  ClipboardList,
  FileText,
  GraduationCap,
  HeartPulse,
  Microscope,
  Users,
  ArrowRight,
} from "lucide-react";
import { FeatureSection } from "@/components/FeatureSection";
import { InteriorPage } from "@/components/InteriorPage";
import { PageSection } from "@/components/PageSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Research & Innovation",
  "Research methodology, clinical research support, analysis, evaluation, publishing and academic collaboration.",
  "/research",
);

const services = [
  { title: "Scientific and clinical research", icon: Microscope, description: "Support for scientific and clinical research activity." },
  { title: "Research methodology and study design", icon: ClipboardList, description: "Guidance on methodology, study design and research planning." },
  { title: "Data management and analysis", icon: Activity, description: "Research data organization, analysis and interpretation support." },
  { title: "Clinical research support", icon: HeartPulse, description: "Support for the planning and coordination of clinical research." },
  { title: "Monitoring and evaluation", icon: FileText, description: "Monitoring and evaluation approaches for research and programs." },
  { title: "Scientific publishing", icon: BookOpenCheck, description: "Editorial and publishing support for scientific communication." },
  { title: "Academic collaboration", icon: Users, description: "A point of connection for academic collaboration enquiries." },
  { title: "Professional research training", icon: GraduationCap, description: "Training and professional development related to research practice." },
];

export default function ResearchPage() {
  return (
    <InteriorPage
      eyebrow="Research & Innovation"
      title="Better questions. Stronger evidence."
      description="Support for the methods, analysis and collaboration that help move scientific knowledge forward."
      image="https://images.pexels.com/photos/5452228/pexels-photo-5452228.jpeg?auto=compress&cs=tinysrgb&w=1800"
      imageAlt="Healthcare professionals discussing research in a modern workspace"
    >
      <PageSection
        eyebrow="Research Consultancy"
        title="Methods, insight and clear communication."
        description="Research support can span planning, methods, analysis, evaluation and communication. Scope and deliverables should be confirmed for each enquiry."
      >
        <div className="service-card-grid research-service-grid">
          {services.map((service, index) => (
            <ScrollReveal delay={(index % 3) * 0.06} key={service.title}>
              <ServiceCard number={`0${index + 1}`} {...service} />
            </ScrollReveal>
          ))}
        </div>
      </PageSection>
      <FeatureSection
        eyebrow="From Question to Evidence"
        title="A considered approach to research work."
        description="Methodology, data analysis, clinical research support, monitoring and evaluation, scientific publishing and professional training are represented within this service portfolio. Confirm the relevant scope directly before work begins."
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85"
        imageAlt="Healthcare team reviewing clinical information together"
        reverse
        href="/contact#researchers-and-publishers"
        actionLabel="Discuss research enquiries"
      />
      <PageSection
        eyebrow="Academic Collaboration"
        title="Work with our team."
        description="We welcome enquiries from researchers, healthcare organizations, educators and publishers. No institutional affiliations or research partnerships are implied by this page."
        tone="mint"
      >
        <Link className="button-primary" href="/contact#researchers-and-publishers">
          Explore a collaboration <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </PageSection>
      <PartnershipSection />
    </InteriorPage>
  );
}