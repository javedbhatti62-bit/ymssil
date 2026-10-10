import { ScrollReveal } from "@/components/ScrollReveal";

const highlights = [
  {
    number: "01",
    title: "Integrated Solutions",
    description:
      "A connected portfolio spanning healthcare delivery, learning, research, workforce and supply.",
  },
  {
    number: "02",
    title: "Scientific Innovation",
    description:
      "Research, evidence and professional development are central to our approach to progress.",
  },
  {
    number: "03",
    title: "Strategic Partnerships",
    description:
      "We welcome purposeful collaboration across institutions, industry and communities.",
  },
];

export function CorporateHighlights() {
  return (
    <section className="highlights" aria-label="Corporate highlights">
      <div className="page-shell highlight-grid">
        {highlights.map((highlight, index) => (
          <ScrollReveal className="highlight-item" delay={index * 0.08} key={highlight.number}>
            <span>{highlight.number}</span>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}