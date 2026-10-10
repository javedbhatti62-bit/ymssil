import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="page-hero page-hero--navy">
        <div className="page-shell not-found-content">
          <span className="eyebrow page-hero-eyebrow">Page not found</span>
          <h1>That page isn’t here.</h1>
          <p>The address may have changed. Return to the homepage or explore the group’s divisions.</p>
          <div className="not-found-actions">
            <Link className="button-light" href="/">
              <ArrowLeft aria-hidden="true" size={16} /> Back to Home
            </Link>
            <Link className="button-outline-light" href="/divisions">Explore divisions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}