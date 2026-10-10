import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="page-shell contact-cta-inner">
        <div>
          <span className="eyebrow">Let’s Connect</span>
          <h2>Connect With Young’s.</h2>
          <p>
            Contact our team to discuss services, research collaboration, training,
            staffing, supplies or strategic partnerships.
          </p>
        </div>
        <Link className="button-primary" href="/contact">
          Contact Our Team <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  );
}