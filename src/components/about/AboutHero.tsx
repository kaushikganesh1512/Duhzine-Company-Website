"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface AboutHeroProps {
  onStartProject: () => void;
}

export default function AboutHero({ onStartProject }: AboutHeroProps) {
  return (
    <section className="relative w-full bg-[#f4f7ff] pt-14 pb-16 md:pt-20 md:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center p-1 rounded-full border border-gray-300/80 bg-white/60 backdrop-blur-sm shadow-sm mb-7">
          <div className="px-5 py-1.5 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-medium tracking-normal">
            About Duhzine IT Solutions – Software &amp; Digital Solutions Company in Chennai
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-black tracking-[-1.5px] leading-[1.12] mb-6 max-w-5xl mx-auto">
          Chennai’s{" "}
          <span className="text-[#2563eb]">Best Software Development</span>{" "}
          Company
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-4xl mx-auto mb-10">
          Duhzine IT Solutions Pvt. Ltd. is a software and digital technology company helping businesses build, launch, and grow through custom software development, web development, mobile applications, digital marketing, SaaS solutions, and business automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onStartProject}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Start your project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <Link
            href="/#portfolio"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm sm:text-base border border-gray-900/80 shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
