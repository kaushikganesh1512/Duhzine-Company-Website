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
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Left 3D Chrome Torus Artwork - Flush to left edge, crisp, zero blur */}
      <div className="hidden lg:block absolute left-0 top-0 h-[380px] xl:h-[430px] w-auto pointer-events-none select-none z-10">
        <Image
          src="/images/hero_left_exact.png"
          alt="Abstract 3D Chrome Ring Artwork"
          width={135}
          height={398}
          className="h-full w-auto object-contain object-left-top"
          priority
          quality={100}
        />
      </div>

      {/* Right 3D Glassmorphic Interface Artwork - Flush to right edge, crisp, zero blur */}
      <div className="hidden lg:block absolute right-0 top-0 h-[380px] xl:h-[430px] w-auto pointer-events-none select-none z-10">
        <Image
          src="/images/hero_right_exact.png"
          alt="Abstract 3D Glass Browser Interface Artwork"
          width={149}
          height={398}
          className="h-full w-auto object-contain object-right-top"
          priority
          quality={100}
        />
      </div>

      {/* Hero Central Content (Centered with generous equal horizontal padding) */}
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-[100px] text-center relative z-20 pt-2 sm:pt-4">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 hover:scale-[1.02] transition-transform">
          <span>Best Software Development Company in Chennai</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-[34px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-bold text-black tracking-[-1.8px] leading-[1.14] mb-6">
          Build a Website That Attracts,<br />
          <span className="text-[#2563eb]">Engages &amp; Converts.</span>
        </h1>

        {/* Subtitle description - EXACT same words on each of the 3 lines matching first image */}
        <p className="text-gray-700 text-sm sm:text-base md:text-[16px] lg:text-[17px] leading-[26px] sm:leading-[29px] max-w-[850px] mx-auto mb-8 sm:mb-10 font-normal">
          Duhzine IT Solutions Pvt. Ltd. is a software and digital technology company helping<br className="hidden md:inline" />{" "}
          businesses build, launch, and grow through custom software, high-performance websites,<br className="hidden md:inline" />{" "}
          mobile apps, SaaS solutions, cloud technologies, and digital marketing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            type="button"
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/30 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Start your project</span>
            <span className="text-sm font-normal">↗</span>
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50/70 bg-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
