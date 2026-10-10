import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function PageSection({
  children,
  eyebrow,
  title,
  description,
  id,
  tone = "white",
  className = "",
}: {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
  tone?: "white" | "mint" | "mist";
  className?: string;
}) {
  return (
    <section className={`page-section page-section--${tone} ${className}`} id={id}>
      <div className="page-shell">
        {eyebrow && title && (
          <ScrollReveal>
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          </ScrollReveal>
        )}
        <div className="page-section-content">{children}</div>
      </div>
    </section>
  );
}