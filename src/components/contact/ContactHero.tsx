"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ContactHeroProps {
  onContactClick: () => void;
}

export default function ContactHero({ onContactClick }: ContactHeroProps) {
  return (
    <section className="relative w-full bg-[#f4f7ff] pt-14 pb-14 md:pt-20 md:pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Right Floating 3D Artwork */}
      <div className="hidden xl:block absolute right-4 lg:right-12 top-16 w-48 sm:w-56 pointer-events-none select-none z-10 opacity-90">
        <div className="animate-float-slow">
          <Image
            src="/images/side_hero_right.png"
            alt="3D Contact Communication Artwork"
            width={240}
            height={280}
            unoptimized
            className="w-full h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-7 hover:scale-[1.02] transition-transform">
          <span>Contact Duhzine IT Solutions</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-black tracking-[-1.5px] leading-[1.12] mb-6 max-w-5xl mx-auto">
          Let’s Build <span className="text-[#2563eb]">Something Great Together.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-normal leading-relaxed max-w-3xl mx-auto mb-10 italic">
          “Have a project in mind? Reach out to our team to discuss your goals, explore solutions, and take the next step toward digital success.”
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white hover:bg-blue-50/50 text-blue-600 font-semibold text-sm sm:text-base border border-blue-600 shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            View our services
          </Link>
        </div>
      </div>
    </section>
  );
}

