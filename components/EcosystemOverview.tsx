import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const businessAreas = [
  "Healthcare delivery and diagnostics",
  "Education and professional development",
  "Research, innovation and publishing",
  "Quality, workforce and international trade",
];

export function EcosystemOverview() {
  return (
    <section className="ecosystem-section" id="ecosystem">
      <div className="page-shell ecosystem-layout">
        <ScrollReveal className="ecosystem-copy">
          <span className="eyebrow">Our Ecosystem</span>
          <h2>A Connected Approach to Health and Science</h2>
          <p>
            Young’s Healthcare & Scientific Solutions International Limited brings
            complementary capabilities together across care, education, research and
            enterprise. Each area is part of a broader commitment to advancing health
            and empowering science.
          </p>
          <ol className="business-area-list">
            {businessAreas.map((area, index) => (
              <li key={area}>
                <span>0{index + 1}</span>
                <p>{area}</p>
              </li>
            ))}
          </ol>
          <Link className="text-link" href="/about">
            Discover Our Company <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </ScrollReveal>
        <ScrollReveal className="ecosystem-visual" delay={0.12}>
          <div className="ecosystem-image-frame">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85"
              alt="Medical research team reviewing findings together"
              fill
              sizes="(max-width: 980px) 50vw, 680px"
            />
            <span className="image-caption">Care, knowledge and discovery</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}