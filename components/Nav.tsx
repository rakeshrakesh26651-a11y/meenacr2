"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    ["Projects", "#projects"],
    ["About us", "#about"],
    ["Process", "#process"],
    ["Contact", "#contact"]
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className={`nav-pill-wrapper ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-pill">
          {/* Logo block with glowing dot */}
          <a className="nav-brand" href="#top" aria-label="Meena Craft House Home">
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-title">MEENA <strong>CRAFT HOUSE</strong></span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-pill-nav" aria-label="Main Navigation">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="nav-pill-link">
                {label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a className="nav-pill-cta" href="#contact">
            <span>Start Your Project</span>
            <ArrowUpRight size={14} className="pill-cta-arrow" />
          </a>

          {/* Mobile Circular Menu Button */}
          <button
            className="mobile-pill-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-inner">
              <div className="mobile-menu-top">
                <div className="nav-brand">
                  <span className="brand-dot" />
                  <span className="brand-title">MEENA <strong>CRAFT HOUSE</strong></span>
                </div>
                <button
                  className="mobile-close-circle"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="mobile-menu-links">
                {links.map(([label, href], i) => (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: 0.45,
                      type: "spring",
                      bounce: 0.2,
                    }}
                  >
                    <span className="mobile-link-num">0{i + 1}</span>
                    <span className="mobile-link-text">{label}</span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="mobile-menu-bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <span>Available Monday – Saturday</span>
                <a href="mailto:hello@crafthouse.com">hello@crafthouse.com</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}