"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupAnimations = () => {
      // Automatically identify sections, headers, and grids
      const sections = document.querySelectorAll("main > section, footer");
      sections.forEach((section) => {
        // Header in section
        const header = section.querySelector(":scope > div > div:first-child");
        if (header && !header.classList.contains("reveal-on-scroll")) {
          header.classList.add("reveal-on-scroll");
        }

        // Grids and article lists become stagger-containers
        const grids = section.querySelectorAll(".grid, .flex-col > article, [data-stagger]");
        grids.forEach((grid) => {
          if (grid.parentElement && !grid.parentElement.classList.contains("stagger-container")) {
            grid.parentElement.classList.add("stagger-container");
          }
          if (!grid.classList.contains("stagger-container") && grid.children.length > 1) {
            grid.classList.add("stagger-container");
          }
          Array.from(grid.children).forEach((child) => {
            if (!child.classList.contains("stagger-item")) {
              child.classList.add("stagger-item");
            }
          });
        });

        // Add interactive-card to all cards and articles (excluding hover-expand-card which has dedicated hover states)
        const cards = section.querySelectorAll(
          "article:not(.hover-expand-card), .rounded-3xl:not(.hover-expand-card), .rounded-2xl:not(.hover-expand-card), .bg-white.p-9, .bg-white.p-11, .bg-white.p-6, .bg-white.p-8"
        );
        cards.forEach((card) => {
          if (!card.classList.contains("interactive-card") && !card.closest("nav") && !card.closest("footer")) {
            card.classList.add("interactive-card");
          }
        });
      });

      // Target all elements marked for reveal
      const revealTargets = document.querySelectorAll(
        ".reveal-on-scroll, .stagger-container, .reveal-scale, .reveal-left, .reveal-right"
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      revealTargets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Immediately reveal if already visible in initial viewport
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          el.classList.add("revealed");
        } else {
          observer?.observe(el);
        }
      });
    };

    // Run setup after brief render cycle
    const timer = setTimeout(setupAnimations, 60);

    // Fallback safeguard: after 1.5s reveal everything in case user scrolled rapidly
    const fallbackTimer = setTimeout(() => {
      document
        .querySelectorAll(".reveal-on-scroll:not(.revealed), .stagger-container:not(.revealed)")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add("revealed");
          }
        });
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
      observer?.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}

