import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  number,
  href,
  actionLabel = "Explore",
  className = "",
  id,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  number?: string;
  href?: string;
  actionLabel?: string;
  className?: string;
  id?: string;
}) {
  const content = (
    <>
      <div className="service-card-topline">
        {number ? <span>{number}</span> : <span className="service-card-icon"><Icon aria-hidden="true" size={19} strokeWidth={1.7} /></span>}
        {number && <span className="service-card-icon"><Icon aria-hidden="true" size={19} strokeWidth={1.7} /></span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {href && <span className="service-card-action">{actionLabel}<ArrowUpRight aria-hidden="true" size={15} /></span>}
    </>
  );

  return href ? (
    <Link className={`service-card ${className}`} href={href} id={id}>{content}</Link>
  ) : (
    <article className={`service-card ${className}`} id={id}>{content}</article>
  );
}