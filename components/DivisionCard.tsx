import type { Division } from "@/data/divisions";
import { ServiceCard } from "@/components/ServiceCard";

export function DivisionCard({ division }: { division: Division }) {
  return (
    <ServiceCard
      icon={division.icon}
      number={`${division.number} / 11`}
      title={division.title}
      description={division.description}
      href={`/divisions/${division.slug}`}
      actionLabel="Explore division"
      className="division-card"
    />
  );
}