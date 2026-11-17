"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TypingHeroTitle from "@/components/TypingHeroTitle";

interface ContactHeroProps {
  onContactClick: () => void;
}

export default function ContactHero({ onContactClick }: ContactHeroProps) {
  return (
    <section className="relative w-full bg-[#f4f7ff] pt-14 pb-14 md:pt-20 md:pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-7 hover:scale-[1.02] transition-transform whitespace-nowrap">
          <span>Contact Duhzine IT Solutions</span>
        </div>

        {/* Main Headline with Typing Effect */}
        <TypingHeroTitle
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-black tracking-[-1.5px] leading-[1.12] mb-6 max-w-5xl mx-auto [text-wrap:balance]"
          segments={[
            { text: "Let’s Build " },
            { text: "Something Great Together.", highlight: true, className: "text-[#2563eb]" },
          ]}
        />

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-normal leading-relaxed max-w-3xl mx-auto mb-10 italic [text-wrap:balance]">
          “Have a project in mind? Reach out to our team to discuss your goals, explore solutions, and take the next step toward digital success.”
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-base whitespace-nowrap shadow-md shadow-blue-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white hover:bg-blue-50/50 text-blue-600 font-semibold text-xs sm:text-base whitespace-nowrap border border-blue-600 shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            View our services
          </Link>
        </div>
      </div>
    </section>
  );
}

