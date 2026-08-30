"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import HeroTicker from "./HeroTicker";

const HERO_IMG = "https://framerusercontent.com/images/YGwaQKjU6sH7L4Vjw67hwzOnjo.png?width=1800&height=1680";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Exact Framer speed calculations:
  const heroImageY = scrollY * 0.07;
  const heroImageScale = Math.max(0.92, 1.0 - (scrollY / 1200) * 0.06);

  const heroTitlesY = scrollY * 0.05;
  const heroTitlesOpacity = Math.max(0, Math.min(1, 1 - scrollY / 550));
  const heroBottomOpacity = Math.max(0, Math.min(1, 1 - scrollY / 450));

  return (
    <section className="hero-blue-wrapper">
      <div className="hero-blue-container">
        {/* Background atmosphere lighting */}
        <div className="hero-atmosphere-overlay" aria-hidden="true" />

        {/* 4 Floating Vertical Image Columns */}
        <HeroTicker />

        {/* Centered Large Portrait with Red Jacket (Direct Scroll Transform) */}
        <div
          className="hero-center-portrait-wrap"
          style={{
            transform: `translate3d(-50%, ${heroImageY}px, 0) scale(${heroImageScale})`,
            transformOrigin: "center bottom",
            willChange: "transform",
          }}
        >
          <Image
            src={HERO_IMG}
            alt="Meena Craft House hero visual"
            width={1800}
            height={1680}
            priority
            className="hero-center-portrait-img"
          />
        </div>

        {/* Centered Overlapping White Typography (Direct Scroll Transform) */}
        <div className="hero-overlay-content">
          {/* Subtitle Top */}
          <div
            className="hero-top-badge"
            style={{
              transform: `translate3d(0, ${heroTitlesY}px, 0)`,
              opacity: heroTitlesOpacity,
              willChange: "transform, opacity",
            }}
          >
            <span className="micro spaced text-white">H A N D M A D E &nbsp; X &nbsp; H E A R T</span>
          </div>

          {/* Giant Centered Title */}
          <div
            style={{
              transform: `translate3d(0, ${heroTitlesY}px, 0)`,
              opacity: heroTitlesOpacity,
              willChange: "transform, opacity",
            }}
          >
            <h1 className="hero-giant-title">
              Meena<br />
              <i>Craft House</i>
            </h1>
          </div>

          {/* Bottom Content / Description */}
          <div
            className="hero-bottom-bar"
            style={{
              transform: `translate3d(0, ${heroTitlesY * 0.8}px, 0)`,
              opacity: heroBottomOpacity,
              willChange: "transform, opacity",
            }}
          >
            <div className="hero-visual-stories-tag">
              <span>HANDMADE CREATIONS</span>
            </div>
            <p className="hero-summary-desc">
              Handmade. Creative. Made With Love. Where imagination becomes something beautiful.
            </p>
          </div>

          {/* Scroll Cue */}
          <a
            href="#about"
            className="hero-scroll-cue"
            style={{ opacity: heroBottomOpacity }}
            aria-label="Scroll down to about section"
          >
            <ArrowDown size={16} className="hero-cue-icon" />
            <span>SCROLL TO EXPLORE</span>
          </a>
        </div>
      </div>
    </section>
  );
}
