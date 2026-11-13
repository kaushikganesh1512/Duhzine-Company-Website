"use client";

import React from "react";

interface HeroProps {
  onStartProject: () => void;
}

export default function Hero({ onStartProject }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full bg-[#f4f7ff] pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[520px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Central Content (Scaled up, beautifully centered with generous responsive padding) */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-20">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-8 hover:scale-[1.02] transition-transform">
          <span>Best Software Development Company in Chennai</span>
        </div>

        {/* Main Headline (Larger, bold, professional) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold text-black tracking-[-2px] leading-[1.12] mb-7">
          Build a Website That Attracts,<br />
          <span className="text-[#2563eb]">Engages &amp; Converts.</span>
        </h1>

        {/* Subtitle description - EXACT words on each line */}
        <p className="text-gray-700 text-base sm:text-lg md:text-[18px] lg:text-[19px] leading-[28px] sm:leading-[32px] max-w-[940px] mx-auto mb-10 font-normal">
          Duhzine IT Solutions Pvt. Ltd. is a software and digital technology company helping<br className="hidden md:inline" />{" "}
          businesses build, launch, and grow through custom software, high-performance websites,<br className="hidden md:inline" />{" "}
          mobile apps, SaaS solutions, cloud technologies, and digital marketing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all shadow-md shadow-blue-600/30 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Start your project</span>
            <span className="text-base font-normal">↗</span>
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50/70 bg-white font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
