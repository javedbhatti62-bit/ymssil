import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const researchServices = [
  "Scientific and clinical research",
  "Research methodology and data analysis",
  "Clinical research support",
  "Monitoring and evaluation",
  "Scientific publishing",
  "Academic collaboration and professional training",
];

export function ResearchSection() {
  return (
    <section className="research-section" id="research">
      <div className="page-shell research-layout">
        <ScrollReveal className="research-visual">
          <Image
            src="https://images.pexels.com/photos/5452228/pexels-photo-5452228.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Doctors collaborating on medical research in a modern workspace"
            fill
            sizes="(max-width: 980px) 50vw, 620px"
          />
          <div className="research-visual-note">
            <span>Research & Innovation</span>
            <p>Supporting rigorous inquiry and meaningful exchange of knowledge.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal className="research-copy" delay={0.1}>
          <span className="eyebrow">Evidence into Practice</span>
          <h2>Research That Moves Knowledge Forward</h2>
          <p>
            We support the work behind credible research, from sound study design and
            analysis to communication, evaluation and professional learning.
          </p>
          <ul className="research-list">
            {researchServices.map((service) => (
              <li key={service}>
                <Check aria-hidden="true" size={15} /> {service}
              </li>
            ))}
          </ul>
          <Link className="button-primary" href="/research">
            Explore Research Services <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}