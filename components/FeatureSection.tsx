import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function FeatureSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  href,
  actionLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  imageAlt: string;
  reverse?: boolean;
  href?: string;
  actionLabel?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`feature-section${reverse ? " feature-section--reverse" : ""}`}>
      <div className="page-shell feature-section-layout">
        <ScrollReveal className="feature-section-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          {children}
          {href && actionLabel && (
            <Link className="button-primary" href={href}>
              {actionLabel} <ArrowRight aria-hidden="true" size={16} />
            </Link>
          )}
        </ScrollReveal>
        <ScrollReveal className="feature-section-visual" delay={0.1}>
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 560px" />
          <span className="feature-image-caption">Illustrative image</span>
        </ScrollReveal>
      </div>
    </section>
  );
}