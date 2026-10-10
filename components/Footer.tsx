import Link from "next/link";
import { divisions } from "@/data/divisions";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Research & Innovation", href: "/research" },
  { label: "News & Insights", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand-mark" href="/" aria-label="YOUNG’S home">
              <span className="brand-symbol" aria-hidden="true">Y</span>
              <span className="brand-wordmark">
                <strong>YOUNG’S</strong>
                <small>HEALTHCARE · SCIENCE · SOLUTIONS</small>
              </span>
            </Link>
            <p>
              Advancing Health. Empowering Science. Building the Future. An integrated
              healthcare and scientific solutions group.
            </p>
          </div>
          <div>
            <h2 className="footer-heading">Explore</h2>
            <nav className="footer-links" aria-label="Footer navigation">
              {footerLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
            </nav>
          </div>
          <div>
            <h2 className="footer-heading">Our Divisions</h2>
            <nav className="footer-links footer-division-links" aria-label="Business divisions">
              <Link href="/divisions">All Divisions</Link>
              {divisions.map((division) => (
                <Link href={`/divisions/${division.slug}`} key={division.slug}>
                  {division.number}. {division.title.replace("Young’s ", "")}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="footer-heading">Contact</h2>
            <div className="footer-links">
              <a href="mailto:contact@yhssil.com">Email: contact@yhssil.com</a>
              <a href="tel:+97455951635">Phone: +974 5595 1635</a>
              <span>Address: Ezdan Oasis D, Land mark 334 Building</span>
              <span>Social profiles: [Add official links]</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Young’s Healthcare & Scientific Solutions International Limited (Private).</span>
          <nav className="footer-legal" aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}