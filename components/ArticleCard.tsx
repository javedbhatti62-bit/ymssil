import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { DemonstrationArticle } from "@/data/articles";

export function ArticleCard({ article }: { article: DemonstrationArticle }) {
  return (
    <article className="editorial-card">
      <div className="editorial-card-image">
        <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 640px) 100vw, 400px" />
      </div>
      <div className="editorial-card-copy">
        <span className="editorial-card-category">{article.category} · Demonstration</span>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <Link className="text-link" href={article.contactHref}>
          Enquire about this topic <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </article>
  );
}