"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TypingHeroTitle from "@/components/TypingHeroTitle";

interface ServicesHeroProps {
  onStartProject: () => void;
}

export default function ServicesHero({ onStartProject }: ServicesHeroProps) {
  return (
    <section className="relative w-full bg-[#f4f7ff] pt-14 pb-14 md:pt-20 md:pb-16 overflow-hidden">
      {/* Centered 3D Iridescent Ring Background (Matching Image 3 Reference) */}
      <div className="absolute top-[32%] sm:top-[30%] md:top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] md:w-[560px] lg:w-[620px] pointer-events-none select-none z-0">
        <Image
          src="/images/service_hero_ring.png"
          alt="Decorative 3D Iridescent Ring"
          width={656}
          height={330}
          priority
          quality={100}
          className="w-full h-auto object-contain mx-auto"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-7 hover:scale-[1.02] transition-transform">
          <span>Software &amp; Digital Solutions</span>
        </div>

        {/* Main Headline with Typing Effect */}
        <TypingHeroTitle
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-black tracking-[-1.5px] leading-[1.12] mb-6 max-w-5xl mx-auto"
          segments={[
            { text: "Our " },
            { text: "Core Services", highlight: true, className: "text-[#2563eb]" },
          ]}
        />

        {/* Subtitle */}
        <div className="text-base sm:text-lg md:text-xl text-gray-700 font-normal leading-relaxed max-w-4xl mx-auto mb-10 space-y-4 italic">
          <p>
            Duhzine IT Solutions provides custom software development, website development, mobile app development, digital marketing, CRM solutions, e-commerce, UI/UX design, and quality assurance services for businesses in Chennai, India, and international markets.
          </p>
          <p>
            We design, develop, and scale digital solutions that help businesses improve their online presence, streamline operations, engage customers, and achieve sustainable growth.
          </p>
        </div>

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
            href="/about"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm sm:text-base border border-gray-900/80 shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

