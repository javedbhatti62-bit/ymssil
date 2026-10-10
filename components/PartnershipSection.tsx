import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const opportunities = [
  "Healthcare institutions",
  "Universities and educational institutions",
  "Researchers and publishers",
  "Healthcare employers",
  "Medical equipment suppliers",
  "Corporate and development partners",
];

export function PartnershipSection() {
  return (
    <section className="partnership-section" id="partnerships">
      <div className="page-shell partnership-layout">
        <ScrollReveal className="partnership-copy">
          <span className="eyebrow">Work With Us</span>
          <h2>Let’s Build Meaningful Partnerships.</h2>
          <p>
            Bring your expertise, ambitions and perspective. We’re open to thoughtful
            collaborations that create lasting value across health and science.
          </p>
          <Link className="button-light" href="/contact">
            Start a Conversation <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <div className="partnership-options" aria-label="Partnership opportunities">
            {opportunities.map((opportunity) => (
              <Link href={`/contact#${opportunity.toLowerCase().replaceAll(" ", "-")}`} key={opportunity}>
                <Plus aria-hidden="true" size={15} /> {opportunity}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}