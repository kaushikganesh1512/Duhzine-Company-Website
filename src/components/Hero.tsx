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
      className="relative w-full bg-[#f4f7ff] pt-12 pb-14 md:pt-16 md:pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[520px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Left 3D Chrome Torus Floating Artwork (No boxes, no dark blue circle, zero gap flush to leftmost screen edge) */}
      <div className="hidden lg:block absolute left-0 top-6 xl:top-8 w-[160px] xl:w-[220px] 2xl:w-[260px] pointer-events-auto select-none z-10">
        <div className="animate-float-vertical cursor-pointer">
          <Image
            src="/images/side_hero_left_v2.png"
            alt="Abstract 3D Chrome Torus Artwork"
            width={732}
            height={1218}
            priority
            quality={100}
            className="w-full h-auto object-contain object-left block"
          />
        </div>
      </div>

      {/* Right 3D Glassmorphic Interface Floating Artwork (No boxes, no dark blue circle, zero gap flush to rightmost screen edge) */}
      <div className="hidden lg:block absolute right-0 top-6 xl:top-8 w-[180px] xl:w-[240px] 2xl:w-[280px] pointer-events-auto select-none z-10">
        <div className="animate-float-vertical-reverse cursor-pointer">
          <Image
            src="/images/side_hero_right_v2.png"
            alt="Abstract 3D Glassmorphic Interface Artwork"
            width={865}
            height={1218}
            priority
            quality={100}
            className="w-full h-auto object-contain object-right block"
          />
        </div>
      </div>

      {/* Hero Central Content (Scaled up, beautifully centered with generous responsive padding) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 text-center relative z-20">
        {/* Top Pill Badge (Strictly single line across mobile & desktop) */}
        <div className="inline-flex items-center justify-center px-3 sm:px-6 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white text-[10px] min-[370px]:text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 sm:mb-8 hover:scale-[1.02] transition-transform max-w-full whitespace-nowrap">
          <span>Best Software Development Company in Chennai</span>
        </div>

        {/* Main Headline (Clean balanced lines on mobile & desktop) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold text-black tracking-[-1px] sm:tracking-[-2px] leading-[1.18] sm:leading-[1.12] mb-6 sm:mb-7">
          <span className="block sm:inline">Build a Website </span>
          <span className="block sm:inline">That Attracts,</span>
          <br className="hidden sm:inline" />
          <span className="text-[#2563eb] block sm:inline">Engages &amp; Converts.</span>
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
