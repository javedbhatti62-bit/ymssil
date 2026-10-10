import type { Metadata } from "next";
import aboutHero from "../../pexels-rdne-6129657.jpg";
import {
  Building2,
  GraduationCap,
  Handshake,
  Microscope,
  Truck,
  Users,
} from "lucide-react";
import { ContactTopicCard } from "@/components/ContactTopicCard";
import { InteriorPage } from "@/components/InteriorPage";
import { PageSection } from "@/components/PageSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Contact Young’s to discuss services, research, training, staffing, supplies and partnerships.",
  "/contact",
);

const contactTopics = [
  {
    id: "healthcare-institutions",
    title: "Healthcare institutions",
    description: "Enquiries about healthcare services and institutional collaboration.",
    icon: Building2,
  },
  {
    id: "universities-and-educational-institutions",
    title: "Universities and educational institutions",
    description: "Education, training and academic collaboration enquiries.",
    icon: GraduationCap,
  },
  {
    id: "researchers-and-publishers",
    title: "Researchers and publishers",
    description: "Research methods, analysis, publishing and editorial enquiries.",
    icon: Microscope,
  },
  {
    id: "healthcare-employers",
    title: "Healthcare employers",
    description: "Workforce and professional development enquiries.",
    icon: Users,
  },
  {
    id: "medical-equipment-suppliers",
    title: "Medical equipment suppliers",
    description: "Medical supply and international trade enquiries.",
    icon: Truck,
  },
  {
    id: "corporate-and-development-partners",
    title: "Corporate and development partners",
    description: "Strategic partnership and development enquiries.",
    icon: Handshake,
  },
];

export default function ContactPage() {
  return (
    <InteriorPage
      eyebrow="Contact Young’s"
      title="Connect with Young’s."
      description="Choose a topic to help direct your enquiry, or contact the team directly by email or telephone."
      breadcrumbLabel="Contact"
      image={aboutHero}
      imageAlt="Healthcare professionals discussing patient care in a hospital hallway"
      tone="navy"
      centeredHero
    >
      <PageSection
        className="contact-intro"
        eyebrow="Start a Conversation"
        title="How can we help you connect?"
        description="Select a topic to identify the right area for your enquiry."
        id="contact-topics"
      >
        <div className="contact-topic-grid">
          {contactTopics.map((topic, index) => (
            <ScrollReveal delay={(index % 3) * 0.06} key={topic.id}>
              <ContactTopicCard {...topic} />
            </ScrollReveal>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Contact Information"
        title="Reach Young’s directly."
        description="Use the confirmed contact details below to get in touch."
        tone="mint"
        id="contact-details"
      >
        <div className="contact-info-panel">
          <div className="contact-info-copy">
            <h3>Contact the team directly.</h3>
            <p>
              This website does not have an enquiry form or submission service. Email
              or call the team using the details provided here.
            </p>
          </div>
          <dl className="contact-detail-grid">
            <div>
              <dt>Email</dt>
              <dd><a className="contact-detail-link" href="mailto:contact@yhssil.com">contact@yhssil.com</a></dd>
            </div>
            <div>
              <dt>Telephone</dt>
              <dd><a className="contact-detail-link" href="tel:+97455951635">+974 5595 1635</a></dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>Ezdan Oasis D, Land mark 334 Building</dd>
            </div>
          </dl>
        </div>
      </PageSection>

      <PartnershipSection />
    </InteriorPage>
  );
}