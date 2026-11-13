"use client";

import React from "react";

export default function WireframeGlobe({
  className = "",
  size = 180,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-slate-300/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        {/* Outer Circle */}
        <circle cx="50" cy="50" r="48" />

        {/* Latitudes */}
        <ellipse cx="50" cy="50" rx="48" ry="16" />
        <ellipse cx="50" cy="50" rx="48" ry="32" />
        <line x1="2" y1="50" x2="98" y2="50" strokeDasharray="2,2" />

        {/* Longitudes */}
        <ellipse cx="50" cy="50" rx="16" ry="48" />
        <ellipse cx="50" cy="50" rx="32" ry="48" />
        <line x1="50" y1="2" x2="50" y2="98" strokeDasharray="2,2" />

        {/* Diagonal accents */}
        <path
          d="M15,20 Q50,50 85,80"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="3,3"
        />
      </svg>
    </div>
  );
}

