import type { LucideIcon } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

export function ContactTopicCard({
  id,
  icon,
  title,
  description,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <ServiceCard
      id={id}
      icon={icon}
      title={title}
      description={description}
      href={`/contact#${id}`}
      actionLabel="Select topic"
      className="contact-topic-card"
    />
  );
}