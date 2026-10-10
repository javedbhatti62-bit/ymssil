"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "11%"]);

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-title">
      <motion.div className="hero-image" style={{ y: imageY }}>
        <Image
          src="https://images.pexels.com/photos/6129657/pexels-photo-6129657.jpeg?auto=compress&cs=tinysrgb&w=2200"
          alt="Healthcare professionals discussing patient care in a hospital hallway"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="hero-overlay" />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.8,
          delay: reduceMotion ? 0 : 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="hero-eyebrow">HEALTHCARE · SCIENCE · INNOVATION</p>
        <h1 id="hero-title">Advancing Health. Empowering Science. Building the Future.</h1>
        <p className="hero-support">
          Integrated solutions across healthcare, education, research, professional
          development and international enterprise.
        </p>
        <div className="hero-actions">
          <Link className="button-primary" href="#divisions">
            Explore Our Divisions <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link className="button-outline-light" href="#ecosystem">
            Discover Our Ecosystem <ArrowDownRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </motion.div>
      <span className="hero-signal" aria-hidden="true">
        A connected approach
      </span>
    </section>
  );
}