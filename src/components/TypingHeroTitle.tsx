"use client";

import React, { useState, useEffect, useMemo } from "react";

export interface TitleSegment {
  text: string;
  highlight?: boolean;
  className?: string;
}

interface TypingHeroTitleProps {
  segments: TitleSegment[];
  className?: string;
  as?: "h1" | "h2" | "div";
  speed?: number; // ms per character (default 26ms)
  startDelay?: number; // ms before typing starts (default 180ms)
}

export default function TypingHeroTitle({
  segments,
  className = "",
  as: Component = "h1",
  speed = 26,
  startDelay = 180,
}: TypingHeroTitleProps) {
  // Pre-calculate total characters
  const totalLength = useMemo(() => {
    return segments.reduce((acc, seg) => acc + seg.text.length, 0);
  }, [segments]);

  // Start with 0 visible characters on client mount for typing effect
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [cursorFading, setCursorFading] = useState<boolean>(false);

  useEffect(() => {
    let current = 0;
    let timer: NodeJS.Timeout;

    const startTimer = setTimeout(() => {
      timer = setInterval(() => {
        current++;
        setVisibleCount(current);
        if (current >= totalLength) {
          clearInterval(timer);
          // Let cursor blink for 1.8s after typing ends, then softly fade out
          setTimeout(() => {
            setCursorFading(true);
            setTimeout(() => setShowCursor(false), 600);
          }, 1800);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (timer) clearInterval(timer);
    };
  }, [totalLength, speed, startDelay]);

  // Group characters back into segments for clean DOM representation
  let charCounter = 0;

  return (
    <Component className={`${className} relative select-none`} aria-label={segments.map((s) => s.text).join("")}>
      {segments.map((seg, segIdx) => {
        const segStartIdx = charCounter;
        charCounter += seg.text.length;

        const defaultHighlightClass = "text-[#2563eb]";
        const appliedColorClass = seg.highlight
          ? seg.className || defaultHighlightClass
          : seg.className || "";

        return (
          <span key={segIdx} className={appliedColorClass}>
            {Array.from(seg.text).map((ch, chIdx) => {
              const globalIdx = segStartIdx + chIdx;
              const isVisible = globalIdx < visibleCount;
              const isLastVisible = globalIdx === visibleCount - 1;

              return (
                <span
                  key={chIdx}
                  className={`inline transition-opacity duration-75 ${
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none select-none"
                  }`}
                >
                  {ch}
                  {/* Blinking typing caret directly after the current typing character */}
                  {showCursor && isLastVisible && (
                    <span
                      aria-hidden="true"
                      className={`inline-block w-[3px] sm:w-[4px] h-[0.82em] bg-blue-600 ml-[1px] -mb-[0.05em] align-baseline animate-pulse transition-opacity duration-500 ${
                        cursorFading ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  )}
                </span>
              );
            })}
          </span>
        );
      })}

      {/* If 0 characters typed yet, show initial blinking cursor */}
      {showCursor && visibleCount === 0 && (
        <span
          aria-hidden="true"
          className="inline-block w-[3px] sm:w-[4px] h-[0.82em] bg-blue-600 -mb-[0.05em] align-baseline animate-pulse"
        />
      )}
    </Component>
  );
}
