"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  onStartProject: () => void;
}

export default function Hero({ onStartProject }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full bg-[#f4f7ff] pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Full-Width Container with Equal Padding on Both Sides */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        {/* Left 3D Chrome Torus Artwork (Equal inset from left edge) */}
        <div className="hidden xl:block absolute left-2 lg:left-6 top-2 h-[340px] w-[185px] pointer-events-none select-none z-10 animate-float">
          <Image
            src="/images/hero_left_art_clean.png"
            alt="Abstract 3D Chrome Ring Artwork"
            width={185}
            height={340}
            className="h-full w-auto object-contain object-left-top drop-shadow-xl"
            priority
          />
        </div>

        {/* Right 3D Glassmorphic Interface Artwork (Equal inset from right edge) */}
        <div className="hidden xl:block absolute right-2 lg:right-6 top-0 h-[340px] w-[190px] pointer-events-none select-none z-10 animate-float">
          <Image
            src="/images/hero_right_art_clean.png"
            alt="Abstract 3D Glass Browser Interface Artwork"
            width={190}
            height={340}
            className="h-full w-auto object-contain object-right-top drop-shadow-xl"
            priority
          />
        </div>

        {/* Hero Central Content */}
        <div className="max-w-3xl mx-auto text-center relative z-20 pt-2 sm:pt-4">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 sm:mb-8 hover:scale-[1.02] transition-transform">
            <span>Best Software Development Company in Chennai</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-[58px] lg:text-[64px] font-black text-[#0b0f19] tracking-[-0.03em] leading-[1.12] mb-6">
            Build a Website That Attracts, <br className="hidden sm:inline" />
            <span className="text-blue-600">Engages &amp; Converts.</span>
          </h1>

          {/* Subtitle description */}
          <p className="text-slate-600 text-sm sm:text-base md:text-[17px] leading-[27px] max-w-2xl mx-auto mb-9 sm:mb-11 font-normal">
            Duhzine IT Solutions Pvt. Ltd. is a software and digital technology company
            helping businesses build, launch, and grow through custom software,
            high-performance websites, mobile apps, SaaS solutions, cloud technologies,
            and digital marketing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={onStartProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <span>Start your project</span>
              <span className="text-sm font-normal">↗</span>
            </button>

            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50/70 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              View our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
