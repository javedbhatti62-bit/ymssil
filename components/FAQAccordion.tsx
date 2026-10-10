import type { ReactNode } from "react";
import { Plus } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: ReactNode;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="faq-list">
      {items.map(({ question, answer }) => (
        <details className="faq-item" key={question}>
          <summary>
            <span>{question}</span>
            <Plus aria-hidden="true" size={17} />
          </summary>
          <div className="faq-answer">{answer}</div>
        </details>
      ))}
    </div>
  );
}