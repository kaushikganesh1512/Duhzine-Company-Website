"use client";

import React from "react";

interface DuhzineLogoProps {
  className?: string;
  theme?: "dark" | "light";
  showTagline?: boolean;
}

export default function DuhzineLogo({
  className = "",
  theme = "dark",
  showTagline = true,
}: DuhzineLogoProps) {
  const isDark = theme === "dark";

  return (
    <div className={`inline-flex flex-col select-none cursor-pointer ${className}`}>
      <div className="flex items-baseline">
        <span
          className={`text-2xl font-black tracking-tight ${
            isDark ? "text-white" : "text-[#0b0f19]"
          }`}
        >
          Duhz
          <span className="relative inline-block">
            <span className="text-white">ı</span>
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2563eb] shadow-[0_0_8px_#3b82f6]"></span>
          </span>
          ne
        </span>
      </div>
      {showTagline && (
        <span
          className={`text-[7px] uppercase tracking-[0.28em] font-semibold mt-0.5 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          INNOVATE <span className="text-[#2563eb]">•</span> INSPIRE{" "}
          <span className="text-[#2563eb]">•</span> IMPACT
        </span>
      )}
    </div>
  );
}

