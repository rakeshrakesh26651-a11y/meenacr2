"use client";

import React, { useEffect } from "react";
import type Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenisInstance: Lenis | null = null;
    let rafId: number | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let gsapTickerFn: ((time: number) => void) | null = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let gsapRef: any = null;
    let anchorCleanup: (() => void) | null = null;

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
            gsapRef = gsap;
            gsap.registerPlugin(ScrollTrigger);
            lenisInstance.on("scroll", () => {
              ScrollTrigger.update();
            });
            // Store the ticker fn so we can remove it on cleanup
            gsapTickerFn = (time: number) => {
              lenisInstance?.raf(time * 1000);
            };
            gsap.ticker.add(gsapTickerFn);
            gsap.ticker.lagSmoothing(0);
          }
        } catch {
          // Standard RAF fallback when GSAP is unavailable
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
        // Store cleanup so it is accessible from the outer cleanup fn
        anchorCleanup = () => document.removeEventListener("click", handleAnchorClick);
      } catch (err) {
        console.warn("Lenis init notice:", err);
      }
    };

    initLenis();

    return () => {
      // Remove RAF loop if used
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      // Remove GSAP ticker fn to prevent memory leak
      if (gsapRef && gsapTickerFn) gsapRef.ticker.remove(gsapTickerFn);
      // Remove anchor click listener
      if (anchorCleanup) anchorCleanup();
      // Destroy Lenis instance
      lenisInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
}
