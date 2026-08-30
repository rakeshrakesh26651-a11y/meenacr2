"use client";

import React, { useRef, useEffect } from "react";
import MediaCard from "./MediaCard";

export default function ServicesAccordion({ services }: { services: [string, string][] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let isMounted = true;
    let cleanupFn: (() => void) | undefined;

    // Dynamically load GSAP to ensure seamless browser-only execution
    import("gsap").then((gsapModule) => {
      if (!isMounted || !container) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mod = gsapModule as any;
      const gsap = mod.gsap || mod.default || mod;
      if (!gsap || typeof gsap.to !== "function") return;

      const cards = container.querySelectorAll<HTMLElement>(".service-card-item");
      if (!cards.length) return;

      let activeCard: HTMLElement | null = null;
      const EXPANDED = 2;
      const COLLAPSED = 0.9;
      const DURATION = 1.8;
      const EASE = "expo.out";

      function animateCards(target: HTMLElement) {
        activeCard = target;
        cards.forEach((card) => {
          gsap.killTweensOf(card);
          gsap.to(card, {
            flexGrow: card === target ? EXPANDED : COLLAPSED,
            duration: DURATION,
            ease: EASE,
            overwrite: true,
          });
        });
      }

      function resetCards() {
        if (!activeCard) return;
        activeCard = null;
        cards.forEach((card) => {
          gsap.killTweensOf(card);
          gsap.to(card, {
            flexGrow: 1,
            duration: DURATION,
            ease: EASE,
            overwrite: true,
          });
        });
      }

      const handlers: { card: HTMLElement; enter: () => void; click: (e: MouseEvent) => void }[] = [];

      cards.forEach((card) => {
        const enter = () => animateCards(card);
        const click = (e: MouseEvent) => {
          e.stopPropagation();
          animateCards(card);
        };

        card.addEventListener("pointerenter", enter);
        card.addEventListener("click", click);
        handlers.push({ card, enter, click });
      });

      const handleLeave = () => resetCards();
      const handleClickOutside = () => resetCards();

      container.addEventListener("pointerleave", handleLeave);
      document.addEventListener("click", handleClickOutside);

      cleanupFn = () => {
        handlers.forEach(({ card, enter, click }) => {
          card.removeEventListener("pointerenter", enter);
          card.removeEventListener("click", click);
        });
        container.removeEventListener("pointerleave", handleLeave);
        document.removeEventListener("click", handleClickOutside);
        cards.forEach((card) => gsap.killTweensOf(card));
      };
    }).catch(console.error);

    return () => {
      isMounted = false;
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <div className="services-accordion-wrap" ref={containerRef}>
      {services.map(([title, src], i) => (
        <div key={title} className="service-card-item" data-framer-name="Service Card">
          <MediaCard title={title} eyebrow={`0${i + 1}`} src={src} />
        </div>
      ))}
    </div>
  );
}
