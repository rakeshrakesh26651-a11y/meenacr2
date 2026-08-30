"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  framerSpeed?: number; // Exact Framer speed value e.g. 93, 95, 104
  scaleRange?: [number, number]; // e.g. [1.0, 0.95]
  opacityRange?: [number, number]; // e.g. [1.0, 0.0]
  className?: string;
}

export function Parallax({
  children,
  framerSpeed = 95,
  scaleRange,
  opacityRange,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate exact Framer parallax multiplier: (100 - framerSpeed) / 100 * distance
  // Standard viewport travel distance ~ 400px
  const travelPx = ((100 - framerSpeed) / 100) * 500;

  const rawY = useTransform(scrollYProgress, [0, 1], [-travelPx / 2, travelPx / 2]);
  const rawScale = useTransform(
    scrollYProgress,
    [0, 1],
    scaleRange ? scaleRange : [1, 1]
  );
  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    opacityRange ? opacityRange : [1, 1]
  );

  // Calibrated spring for smooth momentum without oscillation
  const y = useSpring(rawY, { damping: 28, stiffness: 220, mass: 0.1 });
  const scale = useSpring(rawScale, { damping: 28, stiffness: 220, mass: 0.1 });
  const opacity = useSpring(rawOpacity, { damping: 28, stiffness: 220, mass: 0.1 });

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        scale: scaleRange ? scale : undefined,
        opacity: opacityRange ? opacity : undefined,
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Special Dedicated Hero Parallax Hook for Viewport-Pinned Progression
export function HeroScrollLayer({
  children,
  framerSpeed = 93,
  scaleRange,
  opacityRange,
  className = "",
}: ParallaxProps) {
  const { scrollY } = useScroll();

  // Multiplier: (100 - framerSpeed) / 100
  const factor = (100 - framerSpeed) / 100;
  
  // Directly transform scrollY into translate3d offset
  const rawY = useTransform(scrollY, (val) => val * factor);
  const rawScale = useTransform(
    scrollY,
    [0, 800],
    scaleRange ? scaleRange : [1, 1]
  );
  const rawOpacity = useTransform(
    scrollY,
    [0, 600],
    opacityRange ? opacityRange : [1, 1]
  );

  const y = useSpring(rawY, { damping: 30, stiffness: 250, mass: 0.1 });
  const scale = useSpring(rawScale, { damping: 30, stiffness: 250, mass: 0.1 });
  const opacity = useSpring(rawOpacity, { damping: 30, stiffness: 250, mass: 0.1 });

  return (
    <motion.div
      style={{
        y,
        scale: scaleRange ? scale : undefined,
        opacity: opacityRange ? opacity : undefined,
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
