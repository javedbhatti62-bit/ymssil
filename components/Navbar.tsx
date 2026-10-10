"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { divisions } from "@/data/divisions";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Research & Innovation", href: "/research" },
  { label: "News & Insights", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const navigationRef = useRef<HTMLElement | null>(null);
  const desktopDivisionsTriggerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (
        event.key !== "Escape" ||
        (desktopDivisionsTriggerRef.current?.getAttribute("aria-expanded") !== "true" &&
          mobileMenuTriggerRef.current?.getAttribute("aria-expanded") !== "true")
      ) {
        return;
      }

      setDivisionsOpen(false);
      setMobileOpen(false);
      setMobileDivisionsOpen(false);
      if (window.matchMedia("(max-width: 980px)").matches) {
        mobileMenuTriggerRef.current?.focus();
      } else {
        desktopDivisionsTriggerRef.current?.focus();
      }
    }

    function closeOnOutsidePointer(event: PointerEvent) {
      if (event.target instanceof Node && !navigationRef.current?.contains(event.target)) {
        setDivisionsOpen(false);
        setMobileOpen(false);
        setMobileDivisionsOpen(false);
      }
    }

    function closeOnBreakpointChange() {
      if (window.matchMedia("(max-width: 980px)").matches) {
        setDivisionsOpen(false);
      } else {
        setMobileOpen(false);
        setMobileDivisionsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnBreakpointChange);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnBreakpointChange);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, []);

  function closeMenus() {
    setDivisionsOpen(false);
    setMobileOpen(false);
    setMobileDivisionsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Main navigation" ref={navigationRef}>
        <Link className="brand-mark" href="/" onClick={closeMenus} aria-label="YOUNG’S home">
          <span className="brand-symbol" aria-hidden="true">Y</span>
          <span className="brand-wordmark">
            <strong>YOUNG’S</strong>
            <small>HEALTHCARE · SCIENCE · SOLUTIONS</small>
          </span>
        </Link>

        <div className="desktop-nav">
          {mainLinks.slice(0, 2).map((item) => (
            <Link href={item.href} key={item.href} onClick={closeMenus}>{item.label}</Link>
          ))}
          <button
            aria-expanded={divisionsOpen}
            aria-controls={divisionsOpen ? "desktop-divisions-menu" : undefined}
            aria-haspopup="true"
            className="nav-divisions-trigger"
            onClick={() => setDivisionsOpen((open) => !open)}
            ref={desktopDivisionsTriggerRef}
            type="button"
          >
            Our Divisions <ChevronDown aria-hidden="true" size={13} />
          </button>
          <AnimatePresence>
            {divisionsOpen && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mega-menu"
                exit={{ opacity: 0, y: -6 }}
                id="desktop-divisions-menu"
                initial={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                <div className="mega-intro">
                  <span className="eyebrow">One Connected Group</span>
                  <h2>Eleven specialized divisions.</h2>
                  <p>Explore the capabilities that make up the Young’s ecosystem.</p>
                  <Link className="text-link" href="/divisions" onClick={closeMenus}>
                    View all divisions <ArrowRight aria-hidden="true" size={15} />
                  </Link>
                </div>
                <div className="mega-links">
                  {divisions.map((division) => (
                    <Link href={`/divisions/${division.slug}`} key={division.slug} onClick={closeMenus}>
                      <span>{division.number}</span>{division.title.replace("Young’s ", "")}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {mainLinks.slice(2).map((item) => (
            <Link href={item.href} key={item.href} onClick={closeMenus}>{item.label}</Link>
          ))}
        </div>

        <Link className="nav-partner" href="/contact" onClick={closeMenus}>
          Partner With Us <ArrowRight aria-hidden="true" size={14} />
        </Link>

        <button
          aria-controls={mobileOpen ? "mobile-navigation" : undefined}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen((open) => !open)}
          ref={mobileMenuTriggerRef}
          type="button"
        >
          {mobileOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              animate={{ height: "auto", opacity: 1 }}
              className="mobile-nav-panel"
              exit={{ height: 0, opacity: 0 }}
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: "easeInOut" }}
            >
              {mainLinks.slice(0, 2).map((item) => (
                <Link href={item.href} key={item.href} onClick={closeMenus}>{item.label}</Link>
              ))}
              <button
                aria-expanded={mobileDivisionsOpen}
                onClick={() => setMobileDivisionsOpen((open) => !open)}
                type="button"
              >
                Our Divisions <ChevronDown aria-hidden="true" size={15} />
              </button>
              <AnimatePresence>
                {mobileDivisionsOpen && (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="mobile-subnav"
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                  >
                    <Link href="/divisions" onClick={closeMenus}>All Divisions</Link>
                    {divisions.map((division) => (
                      <Link href={`/divisions/${division.slug}`} key={division.slug} onClick={closeMenus}>
                        <span>{division.number}</span>{division.title.replace("Young’s ", "")}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {mainLinks.slice(2).map((item) => (
                <Link href={item.href} key={item.href} onClick={closeMenus}>{item.label}</Link>
              ))}
              <Link href="/contact" onClick={closeMenus}>Partner With Us <ArrowRight aria-hidden="true" size={15} /></Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}