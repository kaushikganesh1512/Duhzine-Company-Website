"use client";

import React, { useState, useEffect, useMemo } from "react";

interface TypingHeroTitleProps {
  children: React.ReactNode;
  speed?: number;
  delay?: number;
}

function countCharacters(node: React.ReactNode): number {
  if (typeof node === "string") return node.length;
  if (typeof node === "number") return String(node).length;
  if (!node) return 0;
  if (Array.isArray(node)) {
    return node.reduce((acc, child) => acc + countCharacters(child), 0);
  }
  if (React.isValidElement(node) && node.props && (node.props as { children?: React.ReactNode }).children !== undefined) {
    return countCharacters((node.props as { children?: React.ReactNode }).children);
  }
  return 0;
}

export default function TypingHeroTitle({
  children,
  speed = 28,
  delay = 120,
}: TypingHeroTitleProps) {
  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const totalChars = useMemo(() => countCharacters(children), [children]);

  useEffect(() => {
    setMounted(true);

    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev < totalChars) {
            return prev + 1;
          }
          clearInterval(interval);
          // Keep blinking cursor for 2 seconds after typing completes, then softly hide
          setTimeout(() => setShowCursor(false), 2000);
          return prev;
        });
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [totalChars, speed, delay]);

  const renderTypedNode = (
    node: React.ReactNode,
    state: { currentIdx: number }
  ): React.ReactNode => {
    if (typeof node === "string" || typeof node === "number") {
      const str = String(node);
      const chars = str.split("");

      return chars.map((char, i) => {
        const charIdx = state.currentIdx++;
        // If not mounted (SSR/initial render), character is invisible so layout is preserved without mismatch
        const isVisible = mounted && charIdx < visibleCount;
        const isCurrent =
          mounted &&
          showCursor &&
          (charIdx === visibleCount - 1 || (visibleCount === 0 && charIdx === 0));

        return (
          <span
            key={i}
            className={`transition-opacity duration-75 ${
              isVisible ? "opacity-100" : "opacity-0"
            } ${isCurrent ? "shadow-[2.5px_0_0_0_#2563eb]" : ""}`}
          >
            {char}
          </span>
        );
      });
    }

    if (!node) return node;

    if (Array.isArray(node)) {
      return node.map((child, i) => (
        <React.Fragment key={i}>
          {renderTypedNode(child, state)}
        </React.Fragment>
      ));
    }

    if (React.isValidElement(node)) {
      const props = node.props as { children?: React.ReactNode; [key: string]: unknown };
      // Self-closing elements like <br />
      if (props.children === undefined) {
        return node;
      }

      return React.cloneElement(
        node as React.ReactElement<{ children?: React.ReactNode }>,
        {},
        renderTypedNode(props.children, state)
      );
    }

    return node;
  };

  const state = { currentIdx: 0 };

  return <>{renderTypedNode(children, state)}</>;
}
