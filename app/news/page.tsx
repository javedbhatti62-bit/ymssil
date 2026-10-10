import { BookOpenText } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { InteriorPage } from "@/components/InteriorPage";
import { PageSection } from "@/components/PageSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { demonstrationArticles } from "@/data/articles";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "News & Insights",
  "Perspectives and updates across healthcare, science and professional learning.",
  "/news",
);

export default function NewsPage() {
  return (
    <InteriorPage
      eyebrow="News & Insights"
      title="Ideas for what comes next."
      description="Perspectives and updates across health, science and professional learning."
      image="https://images.pexels.com/photos/5452228/pexels-photo-5452228.jpeg?auto=compress&cs=tinysrgb&w=1800"
      imageAlt="Healthcare professionals discussing research in a modern workspace"
    >
      <PageSection
        eyebrow="Editorial Preview"
        title="Perspectives ahead of publication."
        description="This space is prepared for future Young’s articles and approved updates. The cards below are demonstrations only, not published articles or company announcements."
      >
        <div className="information-banner news-demo-notice">
          <BookOpenText aria-hidden="true" size={19} />
          <p>Demonstration content is clearly marked. No real announcements, event dates or achievements are represented.</p>
        </div>
        <div className="editorial-grid news-page-grid">
          {demonstrationArticles.map((article, index) => (
            <ScrollReveal delay={index * 0.07} key={article.title}>
              <ArticleCard article={article} />
            </ScrollReveal>
          ))}
        </div>
      </PageSection>
      <PartnershipSection />
    </InteriorPage>
  );
}