import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DivisionCard } from "@/components/DivisionCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { divisions } from "@/data/divisions";

export function DivisionGrid({ compact = false, showHeading = true }: { compact?: boolean; showHeading?: boolean }) {
  return (
    <section className="divisions-section" id="divisions">
      <div className="page-shell">
        {showHeading && (
          <div className="divisions-heading-row">
            <div>
              <span className="eyebrow">Our Divisions</span>
              <h2 className="section-heading">One Group. Eleven Specialized Divisions.</h2>
              <p className="section-copy">
                Discover an integrated portfolio spanning healthcare delivery, education,
                research, workforce solutions, medical trading and development.
              </p>
            </div>
            <span className="divisions-count">11 areas of expertise</span>
          </div>
        )}
        <div className="divisions-grid">
          {divisions.slice(0, compact ? 6 : undefined).map((division, index) => (
            <ScrollReveal delay={(index % 3) * 0.06} key={division.slug}>
              <DivisionCard division={division} />
            </ScrollReveal>
          ))}
        </div>
        {compact && (
          <Link className="text-link" href="/divisions" style={{ marginTop: 28 }}>
            View all divisions <ArrowRight aria-hidden="true" size={16} />
          </Link>
        )}
      </div>
    </section>
  );
}