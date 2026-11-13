"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onStartProject: () => void;
}

export default function Hero({ onStartProject }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-[#f0f5ff] via-[#f8faff] to-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating 3D Torus Graphic (Left) */}
      <div className="hidden lg:block absolute left-2 xl:left-8 top-32 w-56 h-72 pointer-events-none select-none z-10 animate-float">
        <div className="relative w-full h-full">
          {/* Using the extracted chrome ring graphic */}
          <div className="relative w-48 h-64 overflow-hidden">
            <Image
              src="/images/hero_ring_perfect.png"
              alt="3D Metallic Chrome Ring"
              width={192}
              height={256}
              className="object-contain w-full h-full drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Floating Glassmorphic Browser Graphic (Right) */}
      <div className="hidden lg:block absolute right-2 xl:right-8 top-28 w-60 h-72 pointer-events-none select-none z-10 animate-float-reverse">
        <div className="relative w-full h-full">
          {/* Using the extracted glass browser graphic */}
          <div className="relative w-56 h-64 overflow-hidden">
            <Image
              src="/images/hero_glass_perfect.png"
              alt="3D Glass Web Interface"
              width={224}
              height={256}
              className="object-contain w-full h-full drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Hero Core Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        {/* Blue Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#2563eb] text-white shadow-md shadow-blue-500/25 mb-6 text-xs md:text-sm font-medium tracking-wide">
          <span>Best Software Development Company in Chennai</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0b0f19] tracking-tight leading-[1.12] mb-6">
          Build a Website That Attracts, <br />
          <span className="text-[#2563eb]">Engages &amp; Converts.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-9 font-normal">
          Duhzine IT Solutions Pvt. Ltd. is a software and digital technology company
          helping businesses build, launch, and grow through custom software,
          high-performance websites, mobile apps, SaaS solutions, cloud technologies,
          and digital marketing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Start your project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-[#2563eb] text-[#2563eb] hover:bg-blue-50/70 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}

