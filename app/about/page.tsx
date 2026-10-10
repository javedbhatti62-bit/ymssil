import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Eye, Handshake, Target } from "lucide-react";
import aboutHero from "../../pexels-rdne-6129657.jpg";
import { DivisionCard } from "@/components/DivisionCard";
import { PartnershipSection } from "@/components/PartnershipSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { divisions } from "@/data/divisions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "About Young’s",
  "Discover Young’s connected approach to healthcare, science, education and innovation.",
  "/about",
);

const principles = [
  {
    number: "01",
    title: "Our Vision",
    description:
      "A future where care, science and learning work together to advance health.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Our Mission",
    description:
      "Connect specialized expertise through responsible services, education and research.",
    icon: Target,
  },
  {
    number: "03",
    title: "Our Core Values",
    description:
      "Integrity, evidence, collaboration and continuous learning guide how we work.",
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-media">
          <Image
            src={aboutHero}
            alt="Healthcare professionals discussing patient care in a hospital hallway"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="about-hero-overlay" />
        <div className="about-shell about-hero-content">
          <nav aria-label="Breadcrumb" className="about-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight aria-hidden="true" size={14} />
            <span aria-current="page">About Us</span>
          </nav>
          <span className="eyebrow about-hero-eyebrow">About Young’s</span>
          <h1 id="about-title">About Young’s</h1>
          <p className="about-hero-subtitle">
            Connecting Healthcare, Science, Education and Innovation.
          </p>
          <p className="about-hero-intro">
            Young’s Healthcare & Scientific Solutions International Limited brings
            complementary expertise together to support health, knowledge and progress.
          </p>
          <Link className="button-light about-hero-link" href="#company-overview">
            Discover our approach <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <span className="about-hero-index" aria-hidden="true">
          HEALTHCARE · SCIENCE · SOLUTIONS
        </span>
      </section>

      <section className="about-overview" id="company-overview">
        <div className="about-shell about-overview-grid">
          <ScrollReveal className="about-overview-copy">
            <span className="eyebrow">Who We Are</span>
            <h2>A connected group, focused on health and knowledge.</h2>
            <p>
              Our work spans healthcare delivery, diagnostics, education, research,
              professional development, workforce solutions, medical supplies and
              international enterprise. Bringing these disciplines together creates a
              broader context for learning and collaboration.
            </p>
            <p>
              Our vision is a future where care, science and learning reinforce one
              another. Our mission is to connect specialized expertise through
              responsible services, education and research.
            </p>
            <div className="about-overview-notes">
              <div>
                <span>Our perspective</span>
                <p>Care and discovery belong in the same conversation.</p>
              </div>
              <div>
                <span>Our approach</span>
                <p>Bring complementary disciplines together with purpose.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="about-overview-visual" delay={0.1}>
            <div className="about-overview-image">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85"
                alt="Healthcare professionals working together in a clinical environment"
                fill
                sizes="(max-width: 980px) 100vw, 560px"
              />
            </div>
            <span className="about-image-caption">
              A shared commitment to care and discovery
            </span>
          </ScrollReveal>
        </div>
      </section>

      <section className="about-purpose" aria-labelledby="purpose-title">
        <div className="about-shell about-purpose-layout">
          <ScrollReveal className="about-purpose-copy">
            <span className="eyebrow">Our Purpose</span>
            <h2 id="purpose-title">Progress happens when disciplines connect.</h2>
            <p>
              We bring healthcare, education, research and enterprise into one wider
              conversation about what can move health and science forward.
            </p>
          </ScrollReveal>
          <ScrollReveal className="about-purpose-statement" delay={0.1}>
            <span>YOUNG’S</span>
            <p>Advancing Health.</p>
            <p>Empowering Science.</p>
            <p>Building the Future.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="about-ecosystem" id="ecosystem" aria-labelledby="ecosystem-title">
        <div className="about-shell">
          <ScrollReveal className="about-ecosystem-heading">
            <div>
              <span className="eyebrow">Our Ecosystem</span>
              <h2 id="ecosystem-title">Eleven specialisms. One connected approach.</h2>
            </div>
            <p>
              Explore the divisions that bring our healthcare and scientific solutions
              together. Each area has its own focus and a place in the wider group.
            </p>
          </ScrollReveal>
          <div className="divisions-grid about-division-grid">
            {divisions.map((division, index) => (
              <ScrollReveal delay={(index % 3) * 0.055} key={division.slug}>
                <DivisionCard division={division} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-principles" aria-labelledby="principles-title">
        <div className="about-shell">
          <ScrollReveal className="about-principles-heading">
            <span className="eyebrow">How We Work</span>
            <h2 id="principles-title">A clear direction. A thoughtful way forward.</h2>
          </ScrollReveal>
          <div className="about-principles-grid">
            {principles.map(({ number, title, description, icon: Icon }, index) => (
              <ScrollReveal className="about-principle-card" delay={index * 0.08} key={title}>
                <div className="about-principle-topline">
                  <span>{number}</span>
                  <Icon aria-hidden="true" size={22} strokeWidth={1.6} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PartnershipSection />
    </main>
  );
}