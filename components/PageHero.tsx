import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  image?: string | StaticImageData;
  imageAlt?: string;
  tone?: "mint" | "navy" | "white";
  action?: ReactNode;
  centered?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
  imageAlt = "",
  tone = "mint",
  action,
  centered = false,
}: PageHeroProps) {
  return (
    <header className={`page-hero page-hero--${tone}${image ? " page-hero--image" : ""}${centered ? " page-hero--centered" : ""}`}>
      {image && (
        <div className="page-hero-media">
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
        </div>
      )}
      {image && <div className="page-hero-overlay" aria-hidden="true" />}
      <div className="page-shell page-hero-content">
        <Breadcrumbs items={breadcrumbs} />
        <div className="page-hero-copy">
          <span className="eyebrow page-hero-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {action && <div className="page-hero-action">{action}</div>}
        </div>
      </div>
    </header>
  );
}