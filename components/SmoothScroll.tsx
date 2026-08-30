"use client";

import React, { useEffect } from "react";
import type Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenisInstance: Lenis | null = null;
    let rafId: number;

    const initLenis = async () => {
      try {
        const LenisClass = (await import("lenis")).default;
        lenisInstance = new LenisClass({
          duration: 1.15,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.4,
          infinite: false,
          syncTouch: false,
        });

        // Connect Lenis to GSAP ScrollTrigger if present
        try {
          const { default: gsap } = await import("gsap");
          const { ScrollTrigger } = await import("gsap/ScrollTrigger");
          if (gsap && ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
            lenisInstance.on("scroll", () => {
              ScrollTrigger.update();
            });
            gsap.ticker.add((time: number) => {
              lenisInstance?.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
          }
        } catch {
          // Standard RAF fallback
          function raf(time: number) {
            lenisInstance?.raf(time);
            rafId = requestAnimationFrame(raf);
          }
          rafId = requestAnimationFrame(raf);
        }

        // Anchor link smooth scrolling
        const handleAnchorClick = (e: MouseEvent) => {
          const target = (e.target as HTMLElement).closest('a[href^="#"]');
          if (target) {
            const href = target.getAttribute("href");
            if (href && href.length > 1) {
              const el = document.querySelector(href);
              if (el && lenisInstance) {
                e.preventDefault();
                lenisInstance.scrollTo(el as HTMLElement, { offset: -50, duration: 1.2 });
              }
            }
          }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
          document.removeEventListener("click", handleAnchorClick);
        };
      } catch (err) {
        console.warn("Lenis init notice:", err);
      }
    };

    initLenis();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
}
