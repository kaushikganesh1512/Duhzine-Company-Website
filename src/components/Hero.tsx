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
      className="relative w-full bg-[#f4f7ff] pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden"
    >
      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Left 3D Chrome Torus Artwork (image462 from Figma: left-0 top-[33px] h-[321px] w-[198px]) */}
        <div className="hidden lg:block absolute left-0 top-0 h-[340px] w-[180px] pointer-events-none select-none z-10">
          <Image
            src="/images/hero_left_art_clean.png"
            alt="Abstract geometric artwork"
            width={180}
            height={340}
            className="h-full w-auto object-contain object-left-top"
            priority
          />
        </div>

        {/* Right 3D Glassmorphic Interface Artwork (image463 from Figma: right-0 top-8 h-[319px] w-[193px]) */}
        <div className="hidden lg:block absolute right-0 top-0 h-[340px] w-[190px] pointer-events-none select-none z-10">
          <Image
            src="/images/hero_right_art_clean.png"
            alt="Abstract decorative artwork"
            width={190}
            height={340}
            className="h-full w-auto object-contain object-right-top"
            priority
          />
        </div>

        {/* Hero Section Subsection Content */}
        <div className="max-w-[820px] mx-auto text-center relative z-20 pt-2">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm mb-6 sm:mb-8">
            <span>Best Software Development Company in Chennai</span>
          </div>

          {/* Headline (exact Figma size: 64px line-height: 70px) */}
          <h1 className="text-3xl sm:text-5xl md:text-[58px] lg:text-[64px] font-bold text-[#0b0f19] tracking-[-0.03em] leading-[1.12] mb-6">
            Build a Website That Attracts, <br className="hidden sm:inline" />
            <span className="text-blue-600">Engages &amp; Converts.</span>
          </h1>

          {/* Subtitle description */}
          <p className="text-slate-600 text-sm sm:text-base md:text-[17px] leading-[26px] max-w-[760px] mx-auto mb-8 sm:mb-10 font-normal">
            Duhzine IT Solutions Pvt. Ltd. is a software and digital technology company
            helping businesses build, launch, and grow through custom software,
            high-performance websites, mobile apps, SaaS solutions, cloud technologies,
            and digital marketing.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={onStartProject}
              className="inline-flex items-center justify-center gap-1.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Start your project</span>
              <span className="text-sm font-normal">↗</span>
            </button>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              View our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
