import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";

export function InteriorPage({
  eyebrow,
  title,
  description,
  children,
  image,
  imageAlt,
  tone = "mint",
  breadcrumbs,
  breadcrumbLabel,
  centeredHero = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  image?: string | StaticImageData;
  imageAlt?: string;
  tone?: "mint" | "navy" | "white";
  breadcrumbs?: BreadcrumbItem[];
  breadcrumbLabel?: string;
  centeredHero?: boolean;
}) {
  return (
    <main className="interior-page">
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={breadcrumbs ?? [{ label: "Home", href: "/" }, { label: breadcrumbLabel ?? eyebrow }]}
        image={image}
        imageAlt={imageAlt}
        tone={tone}
        centered={centeredHero}
      />
      <div className="interior-page-content">{children}</div>
    </main>
  );
}