import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { demonstrationArticles } from "@/data/articles";
import { ScrollReveal } from "@/components/ScrollReveal";

export function NewsGrid() {
  return (
    <section className="news-section" id="insights">
      <div className="page-shell">
        <div className="news-head">
          <div>
            <span className="eyebrow">News & Insights</span>
            <h2 className="section-heading">Ideas for What Comes Next.</h2>
            <p className="section-copy">
              A space for perspectives and updates across health, science and professional learning.
            </p>
          </div>
          <Link className="text-link" href="/news">
            Visit News & Insights <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="editorial-grid">
          {demonstrationArticles.map((article, index) => (
            <ScrollReveal delay={index * 0.07} key={article.title}>
              <ArticleCard article={article} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}