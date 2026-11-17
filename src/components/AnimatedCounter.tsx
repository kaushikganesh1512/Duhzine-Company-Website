"use client";

import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 1800,
  className = "",
}: AnimatedCounterProps) {
  // Extract number and suffix, e.g. "800+" -> number: 800, suffix: "+"
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // If prefers-reduced-motion is active, display immediately without animation
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCount(targetNumber);
      setHasAnimated(true);
      return;
    }

    const element = spanRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated, targetNumber]);

  useEffect(() => {
    if (!hasAnimated || targetNumber === 0) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth cubic ease-out deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * targetNumber);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, targetNumber, duration]);

  return (
    <span ref={spanRef} className={className}>
      {hasAnimated ? count : 0}
      {suffix}
    </span>
  );
}
