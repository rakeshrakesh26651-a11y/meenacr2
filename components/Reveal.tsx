"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  className?: string;
  type?: "spring" | "tween";
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 30,
  x = 0,
  scale = 1,
  duration = 0.75,
  className = "",
  type = "spring",
  once = true,
}: RevealProps) {
  const transition =
    type === "spring"
      ? {
          type: "spring" as const,
          bounce: 0.2,
          duration: Math.max(duration, 0.6),
          delay,
        }
      : {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        };

  const variants: Variants = {
    hidden: {
      opacity: 0.001,
      y,
      x,
      scale: scale !== 1 ? scale : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition,
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={variants}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}